---
title: How is HP-Palm going to port webOS to Windows?
description: There are many technical and user experience challenges
date: 2011-03-15
tags:
  - webOS
  - Windows
---

## Porting

A build of WebKit for x86, should be straightforward, though there's many details that need to be got right. WebOS apps use an asynchronous protocol called PalmBus to communicate with system services, so that code must be ported from ARM webOS. Instead of sharing one small screen, each app can have its own window, sized appropriately.

Services written in C/C++ may have been written assuming only ARM processors, but that's in-house code at least. Again, many details must be got right.

JavaScript services are problematic, since Node for Windows is not yet fully working. Worse (from HP's standpoint), Cygwin (the Unix-compatability layer for Windows) is GPL, not LGPL:

Most of the tools are covered by the GNU GPL, some are public domain, and others have a X11 style license. To cover the GNU GPL requirements, the basic rule is if you give out any binaries, you must also make the source available….

The Cygwin™ API library found in the `winsup` subdirectory of the source code is also covered by the GNU GPL (with exceptions; see below). By default, all executables link against this library (and in the process include GPL'd Cygwin™ glue code). This means that unless you modify the tools so that compiled executables do not make use of the Cygwin™ library, your compiled programs will also have to be free software distributed under the GPL with source code available to all.

If the Cygwin license only "infects" Node, that should be a win for everyone: HP-Palm supports Node under Windows, while the rest of webOS remains private to HP-Palm. However, Node in webOS is customized to add PalmBus support, which complicates matters.  HP-Palm will need good work from their programmer-lawyers to thread this strait.

DB8 is the central database of user information in webOS 2. Replicating it and the user's Palm Profile from Windows to handhelds should be straightforward once the above is complete. Currently, PalmProfiles are only backed up once a day. Users will want faster replication between their PC and their handhelds. At the Palm Developer day in May 2010, CouchDB was mentioned in conjunction with DB8. CouchDB has real-time replication; let's hope no DB8 design decisions were made which make real-time replication difficult. This is also needed by users with a tablet and smartphone, so one can guess this is in-hand (or will be in-hand by June).

What features of desktop computers will need support? File system requests already go over the PalmBus, so accessing desktop user files will be supported. TouchPads can print to network printers; presumably local Windows printers will be straightforward to add to that system. Presumably audio support will match that available in other WebKit builds such as Safari for Windows. Bluetooth I'd guess will not be supported in the first release, since audio and keyboards will be handled separately. There's no support for USB under webOS currently, so don't expect webOS under Windows to support it any time soon.

## User Experience

Mouse and pointer are different than a touchscreen, but the new Enyo framework has been demonstrated running in a browser, so developers will have the ability to test apps with both mouse and finger. Whether they succeed in well supporting both remains to be seen.

"Syncing to my desktop" is the number-one feature request for Outline Tracker. Having the same interface on both will lower the friction of using both. Web apps are useful, but notes and tasks stored locally are better. Alas, Mac and Linux users will be left out for the foreseeable future.

Currently, people use handhelds as an adjunct to desktop computers.  Many people do not work at a desk; current solutions ([Outline Tracker & Basecamp Classic Case Study](https://hominidsoftware.com/outlinetracker/case_study.html)) use different apps on handhelds and the desktop. This (and/or the Motorola Atrix) could shift the balance.

Does the future belong to the system that can best replicate users' data, and the user experience, across all of a user's devices? I don't know, but I look forward to finding out.
