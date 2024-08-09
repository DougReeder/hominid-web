---
title: Loose-Schema Databases and Heterogeneous Data
description: New databases are emerging, which embrace data in varying formats from varying sources.
date: 2011-05-09
tags:
- NoSQL
- CouchDB
- map‐reduce
- webOS
- MongoDB
- DB8
- indexing/search
---

_Delivered to [ColumbusJS](https://columbusjs.org/) in May 2011_

## [Slides](../../Loose-Schema%20Databases.pdf)

Abstract
--------
Traditional databases are designed around homogenous data. Heterogenous data can be shoehorned into a homogenous format, but constraints are hard to enforce.  A new generation of databases is emerging, which embraces data in varying formats from varying sources.  Access may be with familiar relational operations, or radically different operations such as Map-Reduce.


Outline
-------

* need for loose schema
	* heterogeneous data: different communities conceptualize "similar" info differently.   Users now expect computers to adapt to them, rather than users adapting to computers.
		* music meta-data: pop vs. classical: artist vs. composer+performer+conductor
		* to-do items: due date as floating/julian day number vs. absolute times/timestamp, responsible person vs. associated people, source-code management system
		* medical tests: range of BP values not same as range of blood glucose, systolic must be greater than diastolic

* heterogenous data, homogenous format
	* converting to homogenous format generally involves a loss of data, or at least an alteration of data.  Contact: title+given+ornamental+family+suffix name -> given+family
	* round-trip data to external sources: alteration generates a spurious change notification, losing data is unacceptable

* partial solution: shoehorning: text field encoded as CSV, JSON or XML
	* DB can't search, only payload
	* DB can't enforce relations or business constraints

* heterogenous data, manual union schema
	* schema must be updated before new data can be stored
	* storage may be inefficient
	* works fine for music meta-data, fails for medical tests

* SQLite: relational + flexibility
	* absent fields don't take up storage; sparse DB okay
	* columns have type affinity
	* ROWID is integer only, is twice as fast
	* single-user

* Normalization
	* array and object fields violate 1NF (depending on your definition of atomicity)
	* still should normalize and selectively denormalize

* CouchDB
	* written in Erlang for robust concurrent systems; no shared state threading and all data is immutable
	* crash-only file is always in a consistent state
	* "shared-nothing" clustering,
	* RESTful JSON HTTP API + 3rd party client libraries
	* stores "documents"; JSON I/O
		* unique ID
		* no fixed schema, no declarative schema, update function can check consistency
	* lockless & optimistic: if revision number doesn't match, update fails.  Resolution similar to Subversion: client merge, re-submit

	* incremental replication, partial replicas possible;
	* also runs on handhelds

	* queries: only Map-Reduce
		* 1st query against a "view" is slow, but later queries only require incremental updating
		* map phase maps documents to N-dimensional array of keys
		* reduce phase (optional) computes sums, averages, unions, etc over one or more dimensions

		* undone subtasks
			* map: if task, write 1 to each parent key, if undone, write 1 to each parent key
			* reduce: sum of each

* DB8
	* webOS-only, Palm-Bus access
	* similar data model to CouchDB, but must write own connector
	* single DB shared by all apps
	* backed-up to HP/Palm servers
	* multiple devices, one profile: may duplicate data
	* Universal Search ("Just Type"): simpler than under Palm OS
	* sidenote on good UI: standard kinds use union schema: phone app only searches for contacts with phone number, e-mail app only searches for contacts with e-mail addr
	* 3rd party "kinds" may extend multiple other kinds, incl. standard calendar event and contact kinds.   Can extend contact with case details for CRM
	* supports "webOS Synergy™"
		* separate sources have separate records, app presents merged view
		* Calendar: all day or start & end time
		* Contacts: heuristic identifies same person

  * Watches
    * asynchronous message from database to app, indicating change in some subset of data
    * not clear whether enabled by non-relational design
    * enables simpler app design

* Mongo DB
	* document-oriented: no server-side JOINs; embed documents
	* queries: analog of most SQL ops
	* map-reduce


## Software referenced

* [CouchDB](https://couchdb.apache.org/)
* [DB8](https://webostv.developer.lge.com/develop/guides/db8-basic)
* [MongoDB](https://www.mongodb.com/docs/manual/)
