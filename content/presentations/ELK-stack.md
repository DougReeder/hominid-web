---
title: The ELK Stack
description: Elasticsearch, Logstash & Kibana together enable powerful monitoring and data transformations.
date: 2020-01-02
tags:
- indexing/search
- Lucene/Solr/Elastisearch
---

_talks delivered to technical & non-technical audiences at [nChannel](https://www.nchannel.com/) in January 2020_

# technical talk on ELK stack

**A RESTful API on top of the powerful Lucene search engine**

* document-based search engine (store denormalized data)
* JSON + Date, Binary, Range, IP address, Geo-point, shape, etc.
* schemas not required, but usually desirable; schema changes rarely break requests
* inverted index
* weaker storage guarantees than a database; not designed to be a source of truth


structured queries, fuzzy & full text queries, and complex queries that combine the two’


analytics use same indices and are likewise fast


* JOIN before ingestion (or in application); can do pre-specified parent-child relations


close integration with **Kibana** for management, visualization, machine learning


**Logstash** for **server-side** data processing


* enrich/flatten data (e.g. from ID to full records)
* Swiss Army knife
* could write to other stores like S3


**Beats** for **client-side** single-purpose data shippers


* Filebeat: tail file
* Metricbeat: metrics like CPU
* Packetbeat: network traffic
* Winlogbeat:
* Auditbeat: replaces auditd, uses same rules
* Heartbeat: actively probe systems
* Functionbeat: collect from serverless framework, like AWS Lambda


**Ingestion**


* PUT /indexname/_doc/ID
	* POST _bulk
* ingestion node (like Logstash but less functionality)
* Logstash
* Beats


use HTTP Service Action to interface with Symphony


# non-technical talk on ELK stack


**relational DB**: (for example, Oracle or MySQL)


* schemas must be rigid
* normalize data (each datum stored once)
* easy to update
* general purpose - good at mixture of reading & writing
* JOIN at query time
* have to know exactly what you’re searching for


**MongoDB**:


* schemas can be lax
* denormalize data (datum may be stored multiple places)
* strong consistency (can be source of truth)
* may or may not be easy to update
* some JOINs can be done at query time
* have to know exactly what you’re looking for
* compose.com: if you need any more than five or so indexes on a MongoDB collection, then that collection is a prime candidate for putting into Elasticsearch


**Elasticsearch**:


* schemas can be lax
* denormalize data (datum may be stored multiple places)
* weaker consistency (should not be source of truth)
* updating may be slow or difficult
* configure each index for family of queries
* JOIN on parent-child, or before ingestion, or in application
* great support for **fuzzy searches**, including full-text search
	* products related to the one displayed, but only one from each vendor, weighted toward positively-reviewed and high-margin products
	* search for “green” products in name, description, or vendor blurb, but not variant, weighted toward name and description
	* find a customer who’s surname is Lee, Lea, Li, Le, Lê or Lý
	* Comply with HIPPA by searching documents for number groups that appear to be SSNs
	* blog posts and comments that contain some variant of “consumer preference” such as “consumer product preference” or “preference of consumer”
	* articles from around May 2005 that mention The Beatles
	* search-as-you-type (suggest completions)
	* find hotels near a specified point
	* consolidate logs from all servers, and use machine learning to look for anomalies


close integration with **Kibana** for management, visualization, machine learning


**Logstash** for **server-side** data processing


**Beats** for **client-side** single-purpose data shippers


use HTTP Service Action to interface with **Symphony** 2020-01-13T20:22:44.054Z


**ingesting data** into ELK stack


**Logstash** for **server-side** data processing


* enrich/flatten data (e.g. from ID to full records)
* Swiss Army tool
* could write to other stores like S3


**Beats** for (**client-side**) single-purpose data shippers


* Filebeat: tail file
* Metricbeat: metrics like CPU
* Packetbeat: network traffic
* Winlogbeat:
* Auditbeat: replaces auditd, uses same rules
* Heartbeat: actively probe systems
* Functionbeat: collect from serverless framework, like AWS Lambda


template is schema that Elasticsearch will confirm to


Kibana Spaces support different classes of users


