---
title: Just Type
description: UI needs to be discoverable
date: 2011-08-13
tags:
  - user experience
  - webOS
  - indexing/search
---

When a user needs to select one item out of hundreds (the typical case on a handheld device), there are a number user interface approaches. "Browse" approaches work when items fit in a hierarchy the user can remember, for example *Artist > Album > Song* or *Account > Mailbox > Message*.

For some datasets there isn't a hierarchy, for others you could impose a hierarchy, but the user may not categorize items the same way.  For example, a user experiencing an "out of memory" error won't know to look in  FAQs on "Configuration".  Here, you need some variation on search.

The chief problem with search is that, typically, the user doesn't know how specific to be.  Too short a search phrase will return too many results.  Too long a search phrase may return no results, if the search phrase is not exactly right.  The solution is "live search" - returning search results as the user types.

Until the release of the TouchPad, all webOS devices had a built-in hardware keyboard.  This allows a distinctive technique - when no text field has the focus, if a character is typed, start searching.  This allowed experienced users to search a list, without cluttering the small screen with a search field or button.  The problem is, there is no indication to new users they can search.  Since the Contacts app is unusable without this technique, one might assume that all users learn it.  But real users don't have to behave like we expect.

Palm assumed that all users set up e-mail on their smartphone, thus requiring support requests be sent by e-mail

There are four scenes in Outline Tracker which use FilterLists, and the hint or help for each was different.  The FAQ list was searchable, and the first FAQ was 'how to search the FAQs'.  This always bothered me, but I couldn't think of a better alternative when I first implemented the FAQ scene.

[//]: # (There were several FAQs on how to search in the)

While adding [support for the on-screen keyboard](https://web.archive.org/web/20141022130716/https://developer.palm.com/distribution/viewtopic.php?f=11&t=17285) to my Mojo app  I rediscovered that the status message list is a FilterList.

I have often had trouble finding the status message I was looking for. The typedown filter would have been great for this. But this is so non-discoverable, that I didn't know it existed in code I wrote myself.

Given also that I added visible text to most of the FilterList scenes, telling users they could "Just Type", I'm thinking the "Just Type" concept (that is, no visible UI to start search) is a real fail.
