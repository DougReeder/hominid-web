---
title: A Managed Database for Hubs
description: Reworking the script and input values to less-than-obvious settings are required
date: 2024-11-17
tags:
- Hubs
- Kubernetes
- VR
- webXR
- application
previewImage:
  url: /img/managed-database-metrics-DigitalOcean-739w.avif
  width: 739
  height: 1763
---

*Content warning: extremely technical — may induce trance, fugue or psychedelic states, out-of-body experiences, lucid dreaming or technical breakthroughs.*

## Motivation

I continue my quest to make my Hubs Community Edition instance observable and production-ready.
It's difficult to access PostgresQL running in a container in Kubernetes for development or monitoring.
Backing up the PostgresQL database as a volume (of files) allows restoring to the same version of PostrgresQL,
but not necessarily a newer version, which you might be obliged to use if you change provider
or your current version reaches end-of-life.
So, the next step is moving the PostgresQL database outside the Kubernetes cluster.

## Managed Databases

Operating databases is a specialty all its own — tuning the number of connections and amount of memory,
setting up backups and restores, updating to newer versions — preferably with no down time.
I, as an application programmer, would prefer to leave that to experts.
Fortunately, hosting providers are even more likely to offer managed databases than managed Kubernetes.
DigitalOcean is no exception, offering managed PostgresQL v13–16.
It's automatically backed-up daily, and restores, updates and scaling can all happen without down time.

Hubs still encodes passwords using MD5, and PostgresQL v13 is the last version that uses MD5 by default.
(MD5 is no longer considered secure.)
Fortunately, DigitalOcean still offers v13.
(Hubs needs to update its password encoding before v13 reaches end-of-life on 2025-11-13.)

Another advantage of managed databases is monitoring.
DigitalOcean provides the most important metrics automatically:
<div class="center-horizontal">
{% css %} img[width="750"] { max-width: 300px; } }{% endcss -%}
{% image "./managed-database-metrics-DigitalOcean.png", "Managed database metrics on DigitalOcean", [750, "auto"] %}
</div>
I only need to understand these enough to know when my database is overloaded.

A downside of moving the database outside the Kubernetes cluster is that the database and cluster need to
be scaled up (and paid for) separately. Kubernetes can autoscale, but the database cannot.
My database costs $15.00/month, raising my costs 63%.
Also, the database configuration is no longer part of the Kubernetes template files, so I have to
keep track of it separately.

## Configuration

Once the database was up, I had to figure out how to configure Hubs to use it.
There are several strategies, depending on whether you continue to use the `pgbouncer` and `pgbouncer-t`
deployments for database connection pooling.
Pgbouncer (the software itself) is normally a transparent proxy, so you just need to change the connection parameters on the client.

### Change Database Only

Mike Morran from Mozilla gave a demonstration on [Persistent Volumes and External Database - Community Edition Setup Session](https://www.youtube.com/watch?v=ShQqXGjB0qo) (the database info isn't until the last 20 minutes).
There, he shows how to edit `hcce.yaml` to direct `pgbouncer` and `pgbouncer-t` to an external database.
It was hard to extract exactly what you do, but my notes say it's something like:

point pgbouncer to external SQL DB in hcce.yaml (change password in multiple places)
1. change password:
	 1. change stringData.PGRST_DB_URI
   2. change stringData.DB_USER ?
   3. change stringData.DB_PASS; ensure URI encoded properly.
   postgresql://username:password@host:port/database?application_name=myapp
   4. change stringData.PSQL
2. in pgbouncer & pgbouncer-t change value of "DB_HOST" from "pgsql" to private IP addr of PostgresQL
3. ? delete pgsql deployment & service?
4. ? comment out pgsql deployment & service?
5. apply hcce.yaml
6. check logs of pgbouncer

He also assumes PostgresQL is using its usual port, 5432, and you can use the `postgres` superuser account
in PostgresQL.  (On DigitalOcean managed PostgresQL the `postgres` superuser is used only for management.)

This is the approach to take if your provider does not offer managed connection pooling. Google Cloud is one such.

### Change Database & Connection Pools

DigitalOcean offers connection pooling for free with a managed database.
That sounded more observable, and possibly higher performance.
They use pgbouncer also, so I dove into `hcce.yaml` to extract the parameters.
Largely, they use the default values, so the connection pools each will use up to 20 database connections
and support up to 10,000 client connections. They are not configured to use TLS (aka SSL).
`pgbouncer` uses the default session mode and `pgbouncer-t` uses transaction mode, hence the names
(and the reason there are two connection pools).

The cheapest managed PostgresQL has 22 connections available for apps.
The Reticulum configuration that uses `pgbouncer-t` has a parameter `pool_size` of 10
(it's not clear what this refers to).
I created two connection pools using the Digital Ocean UI.
The one using transaction mode I named `retpooltransaction` and set to use 10 connections.
The one using session mode I named `retpoolsession` and set to use the other 12 available connections.
Both are reached on port 25061, and require TLS (aka SSL),
so I needed to set the hostname, port and database name (the name of the pool) separately.
`input-values.yaml` only has parameters for `DB_HOST` and `DB_HOST_T`, and `PGRST_DB_URI`
and `PSQL` didn't use all the parameters needed,
so I edited `input-values.yaml` and
`generate_script/hcce.yam` to have all these parameters:
```yaml
DB_HOST: "private-hominid-do-user-99999999-0.m.db.ondigitalocean.com"
DB_PORT: "25061"
DB_NAME: "retpoolsession"
DB_SSL: "true"
DB_SSLMODE: "require"
PGRST_DB_URI: "postgres://$DB_USER:$DB_PASS@$DB_HOST:$DB_PORT/$DB_NAME?sslmode=$DB_SSLMODE"
PSQL:         "postgres://$DB_USER:$DB_PASS@$DB_HOST:$DB_PORT/$DB_NAME?sslmode=$DB_SSLMODE"
DB_HOST_T: "private-hominid-do-user-99999999-0.m.db.ondigitalocean.com"
DB_PORT_T: "25061"
DB_NAME_T: "retpooltransaction"
```
Unfortunately, `DB_SSL` is needed to furnish a boolean value, and `DB_SSLMODE` to furnish
an enumerated value. I've submitted a [pull request to add the new parameters](https://github.com/Hubs-Foundation/hubs-cloud/pull/364).

There should also be values, analogous to `GENERATE_PERSISTENT_VOLUMES`, to enable/disable
creating the database deployment and service, and the connection pool deployments and services.
That would require editing `generate_script/index.js`, which I've been trying to avoid.

I had some difficulty getting this configuration to work, so I tried a configuration
without connection pools — Reticulum talking directly to the database — to validate that
it was possible to connect.  Logs were very useful here; I repeatedly used
```
kubectl delete deploy --all
kubectl delete pvc --all
kubectl delete pv --all
# delete the block storage volume and the `retdb` database
# using the DigitalOcean UI
kubectl apply -f hcce.yaml
kubectl get deployments
kubectl get pods
kubectl logs reticulum-7798f5dbb6-9bcrw -f
kubectl logs reticulum-7798f5dbb6-9bcrw -c postgrest -f
```
I didn't use `kubectl delete -f hcce.yaml`, because it deletes the load balancer, requiring
DNS to be updated with the new IP address.
(Despite the similar suffix, the `postgrest` container uses `pgbouncer`, not `pgbouncer-t`.)

Once I had all the parameters being properly set in `hcce.yaml`, Reticulum connected to `retpoolsession`
properly.  However, for the other pool, even with correct parameters, I always got
```
(Postgrex.Error) ERROR 3D000 (invalid_catalog_name) database "retpooltransaction" does not exist
```
Eventually, after much thrashing, I tried renaming the transaction-mode connection pool from `retpooltransaction` to `retdb`,
and *then* Reticulum connected properly to the transaction-mode connection pool. (The database and the connection pool are on different ports, so you can re-use the name.)
I have no idea why this tweak is necessary.

## Conclusion

I now have automatic daily backups for my database.
I can now use `psql` to connect directly to the database, and run queries like
```
select hub_sid, name from hubs where entry_mode = 'allow';
```
or
```
select avatar_id, name from avatars where allow_remixing = 't';
```
to understand what's going on inside my Hubs instance.

With the persistent volume separate from the node(s) ([see my previous post](../../Hubs-on-DigitalOcean/)),
I can set my Kubernetes cluster to scale up the number of nodes to handle heavier loads,
and if the connection pools or database is then the limiting resource, I can scale that up, too.
I can backup and archive my Hubs instance, and restore it on another provider.

I have a production-ready instance of Hubs!

