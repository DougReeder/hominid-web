---
title: Persistent Storage for Hubs on DigitalOcean
description: Days of sifting through details produced a simple solution.
date: 2024-10-28
tags:
- Hubs
- Kubernetes
- VR
- webXR
- application
previewImage:
  url: /img/kubernetes-debug-flowchart-750w.png
  width: 750
  height: 1061
---

[skip to solution](#my-final-configuration)

*Content warning: extremely technical — may cause drowsiness — do not read while operating heavy machinery*

## Setting up Hubs Cloud Community Edition

The free Hubs service from Mozilla has been shut down, along with Hubs Cloud.
Fortunately, the Community Edition of Hubs Cloud is now straightforward to set up.
The number of steps is large, but that’s hard to avoid with a freestanding consumer-ready service.

I followed the [Beginner’s Guide to CE](https://docs.hubsfoundation.org/beginners-guide-to-CE.html), with the changes noted below.
It wasn’t clear that Kubernetes commands haven’t necessarily taken effect when the command exits (which is not obvious if you’re new to Kubernetes).

It’s not documented in the Beginner’s Guide, but Hubs works fine with a subdomain like `hubs.hominidsoftware.com`, so I could use my existing domain.
I was also able to configure my existing Postfix mail server to handle the new subdomain, keeping down my total infrastructure and accounts.

The other trouble I ran into into trouble was getting Let’s Encrypt certificates set up.
I had to apply `hcce.yaml` once as generated, then run the script `gen-ssl`, then edit `hcce.yaml` to comment out the flag `--default-ssl-certificate=hcce/cert-hcce` for haproxy and finally apply `hcce.yaml` again.  :-(
That turns out to be a known issue, in the long list of tasks for the Hubs maintainers.

## Operational trouble

Originally, I set up my Kubernetes cluster to Autoscale.
(I overlooked the step in the Beginner’s Guide which said to set Fixed scaling and only one node.)
All was well, until a heavy load triggered a second node to spin up.
The configuration for Community Edition stores avatars, resources and scenes using `hostPath` volumes — that is, files are stored on the node’s filesystem.
Two different nodes won’t share a filesystem, so avatars, resources and scenes were unavailable on the new node and storage became scrambled.

A workaround was to change the cluster scaling type to Fixed, and only configure one node (as the Beginner’s Guide instructs).

That’s the Achilles’ Heel of Community Edition: it’s not configured for production use.

## Persistent storage

Unfortunately, there isn’t yet any proper documentation on persistent storage for Hubs.
The [System Overview](https://github.com/Hubs-Foundation/hubs-docs/blob/2f23837be9a94d2f431f960637dca3e58351e649/docs/dev-system-overview.md?plain=1#L4) just notes there’s "a postgresql database behind reticulum and a file store".
There is a YouTube video: [Persistent Volumes and External Database - Community Edition Setup Session - April 24, 2024](https://www.youtube.com/watch?v=ShQqXGjB0qo).
After an hour of unrelated stuff, you find out the file storage can be Google Cloud Persistent Volumes exposed as NFS.
It was not immediately clear to me why a StorageClass of `nfs` was chosen over `standard-rwo`

Digital Ocean doesn’t offer NFS for either its Volumes Block Storage or Spaces Object Storage (S3-compatible blob storage).
Since a Kubernetes Volume is essentially a directory, I set up a bucket in Spaces Object Storage, and started reading the Kubernetes docs to find the parameters to connect.
It turns out, the most popular container orchestration system doesn’t natively talk the most popular mass storage protocol.
Not what I expected.
There *are* [Container Storage Interface (CSI) Drivers for S3](https://github.com/awslabs/mountpoint-s3-csi-driver?tab=readme-ov-file) that you can install, but I prefer to start with a simple solution.

So (as I should have done earlier), I finally searched the WWW for "DigitalOcean" "PersistentVolume".
DigitalOcean supports `csi-digitalocean`, a CSI for their Volumes Block Storage, which they install on all their managed clusters.
(You can’t directly check if a CSI is installed; you have to check if its StorageClasses are available.)
Documentation on configuring it could be improved, but basically, in a `PersistentVolumeClaim`, you just change `storageClassName` from `manual` to `do-block-storage`.
If you don’t explicitly configure a matching `PersistentVolume`, one will be dynamically created.
I commented out the `PersistentVolume` in `hcce.yaml` for `ret-pv`, the Reticulum file storage.
That worked, albeit the `PersistentVolume` had a Reclaim Policy of Delete, which you obviously don’t want for your permanent storage.
I went back to the list of available StorageClasses: `do-block-storage`, `do-block-storage-retain`, `do-block-storage-xfs` and `do-block-storage-xfs-retain`, which are not really documented. `-retain` sounds like a Reclaim Policy and indeed, using `do-block-storage-retain` dynamically created a `PersistentVolume` with a Reclaim Policy of Retain.

Hubs needs a PostgresQL database.
DigitalOcean offers managed PostresQL databases.
The video notes that Hubs requires MD5 password encryption, which is not the default for v14 and later.
You can, however configure that in later versions.

I was ready to spin up a manged PostgresQL database, when I remembered that Community Edition has a `postgresql` container which writes and reads to a `PersistenVolumeClaim` of its own.
Could you just change that use DigitalOcean Block Storage?
I had trouble getting it working, but fortunately Kubernetes is easy to debug :-)
<div class="center-horizontal">
{% css %} img[width="750"] { max-width: 300px; } }{% endcss -%}
{% image "./kubernetes-debug-flowchart.png", "A visual guide on troubleshooting Kubernetes deployments", [750, "auto"] %}
</div>

*Thanks to Daniele Polencic*

Setting the `pgsql-pvc` `PersistenVolumeClaim` to use the `do-block-storage-retain` StorageClass resulted in the pgsql deployment failing.
The pod log contained
```
initdb: error: directory "/var/lib/postgresql/data" exists but is not empty
It contains a lost+found directory, perhaps due to it being a mount point.
```
That check should be disabled for this case, but I had another option: using the `do-block-storage-xfs-retain` StorageClass.
 `-xfs` sounds like the XFS file system.
Would PostgresQL be happier XFS rather than ext4?
The answer is yes, so both `PersistentVolumesClaims` are now `do-block-storage-xfs-retain` (for consistency), and my Hubs instance has persistent storage that’s not tied to a node!  Next, I’ll need to set up regular backups for my shiny new volumes.

Unfortunately, PostgresQL is still a black box.
For a truly production-ready system, PostgresQL should be separate from the cluster, for easy administration and maintenance.

## Access from multiple nodes?

Now storage can be accessed from any node — but `accessModes` `ReadWriteOnce` only allows one node at a time.
When I set the mode to `ReadWriteMany`, the PersistentVolumes weren’t created.

To have a cluster that can handle large meetings, I installed DO’s [CSI for S3](https://docs.digitalocean.com/products/marketplace/catalog/csi-for-s3/) and, for `ret-pvc` set
```
spec:
  storageClassName: csi-s3
  accessModes:
    - ReadWriteMany
```
That dynamically created an S3 bucket in DigitalOcean Spaces which can be accessed from multiple nodes.
The Reclaim Policy was `Delete`.  It might require creating a new StorageClass manually to get a Reclaim Policy of `Retain`.

It’s highly unlikely that PostgresQL would be happy with multiple instances writing to the same set of files, so I didn’t try this for `pgsql-pvc`.

## Increasing Storage Capacity

DigitalOcean notes that you can increase `capacity.storage` and re-apply at any time, and the `PersistentVolume` will be re-sized.
Unfortunately, the *filesystem* on the volume isn’t necessarily re-sized, so it might make sense to set a larger capacity from the start.
More research will be required. :-S

## My Final Configuration [but see my next post!]

As I haven’t yet set up an external PostgresQL database, for simplicity and cost savings, I went back to the StorageClass of `do-block-storage-xfs-retain` for now:

```
#################################################################################
################################# persistent volume ##################################
######################################################################################
#apiVersion: v1
#kind: PersistentVolume
#metadata:
#  name: pgsql-pv
#  labels:
#    type: local
#spec:
#  storageClassName: manual
#  capacity:
#    storage: 10Gi
#  accessModes:
#    - ReadWriteOnce
#  persistentVolumeReclaimPolicy: Retain
#  claimRef:
#    name: pgsql-pvc
#    namespace: hcce
#  hostPath:
#    path: "/mnt/pgsql_data"
#    type: DirectoryOrCreate
---
#apiVersion: v1
#kind: PersistentVolume
#metadata:
#  name: ret-pv
#  labels:
#    type: local
#spec:
#  storageClassName: manual
#  capacity:
#    storage: 10Gi
#  accessModes:
#    - ReadWriteOnce
#  persistentVolumeReclaimPolicy: Retain
#  claimRef:
#    name: ret-pvc
#    namespace: hcce
#  hostPath:
#    path: "/mnt/ret_storage_data"
#    type: DirectoryOrCreate
---
######################################################################################
############################## persistent volume claim ###############################
######################################################################################
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: pgsql-pvc
  namespace: hcce
spec:
  storageClassName: do-block-storage-xfs-retain
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
---
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: ret-pvc
  namespace: hcce
spec:
  storageClassName: do-block-storage-xfs-retain
  accessModes:
    - ReadWriteOnce
  resources:
    requests:
      storage: 10Gi
---
```

## Changing the Hubs default configuration

StorageClasses `do-block-storage`, `do-block-storage-retain`, `do-block-storage-xfs` and `do-block-storage-xfs-retain` are unique to DigitalOcean and `csi-s3` requires installation of `k8s-csi-s3`, so you couldn’t use them in the default Community Edition configuration.
However, if you don’t set the StorageClass at all, you’ll get the cluster’s default StorageClass.
For DigitalOcean, that’s `do-block-storage` which has a Reclaim Policy of Delete, but is more durable than `hostPath` volumes and can be backed-up and then restored to a Retained volume.
The default StorageClass for Google and Amazon’s managed Kubernetes is similar.

If PostgresQL can be configured to not care about the `lost+found` directory, the `pgsql-pvc` `PersistentVolumeClaim` could also use the default `StorageClass`.
On every cloud provider I checked, the default `StorageClass` is external to nodes.
That would make persistent storage the default. As the Hubs configuration doesn’t constrain the number of nodes, this would avoid non-experts losing data, as I did.

## Addendum (10 November 2024)

Changing the PostgresQL volume to mount higher in the filesystem hierarchy (that is, changing `deployment.spec.template.spec.containers[0].volumeMounts[0].mountPath` from `/var/lib/postgresql/data` to just `/var/lib/postgresql`) puts `lost+found` (if it exists) where PostgresQL doesn’t care.

So, I submitted [a pull request](https://github.com/Hubs-Foundation/hubs-cloud/pull/363) which creates
the volumes using the default StorageClass, so the right thing happens automagically on any provider.
It also creates the `pgsql` volume with accessMode `ReadWriteOncePod`, so if someone mistakenly creates another replica of `pgsql`, the database files won’t be mangled.
