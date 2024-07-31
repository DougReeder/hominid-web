---
title: From Notes-in-tasks to Tasks-in-notes
date: 2023-06-08
tags:
  - getting things done
  - application
  - PWA
  - webOS
---
## Outline Tracker

I learned Palm webOS programming to write [_Outline Tracker_], a To-Do List app.
The main feature was filtering to display only the tasks you could work on at the current time,
at your current "Place", and not blocked by other tasks.
Tasks could also repeat on either a strict or lax schedule, and were visible in the webOS Calendar app.
They also had a person responsible for them.

However, items in local Projects could be toggled between Tasks with a checkbox, and Notes without.
In addition, each item could also have _content text_, which was only displayed when the item was expanded.

[_Outline Tracker_]: /outlinetracker/index.html

<div class="center-horizontal">

![screen shot showing content text](/outlinetracker/visuals/content_text.png)

</div>

It could act as an outliner, importing from [_XOXO_] files.
A Project could be all text, with no Tasks.

The data model was very general, essentially a superset of all the To-Do apps I studied.
Unfortunately, this did not lend itself to a low-friction user interface.
Creating multiple tasks required switching between the hardware keyboard and on-screen buttons.
New Places could only be created in a separate screen.
The UI was fine for creating a few complex items, but was clunky for making a shopping list.
It pushed the user toward a few large Projects, instead of many small ones, which doesn't match much outside a job.
It also lacked an "inbox" where the user could quickly create a task, and later fill in the details.

[_XOXO_]: https://microformats.org/wiki/xoxo

It also had Basecamp (now Basecamp Classic) Projects, which could be synchronized between devices.
These were restricted to Basecamp's more rigid data model, where lists could have context text,
but tasks could not. Tasks, however, could have multiple text Comments.
It also has text-only Messages at the top level.

Other To-Do apps likewise allow text that isn't explicitly a task, in various places.

## Notes Together

After the demise of webOS, I started a line of research that eventually led to [_Notes Together_], a note-taking app.
It's marquee feature is full-text search (using Indexed DB under the hood),
eliminating the need to curate notes with categories or explicit tags.
Users are encouraged to toss in snippets of text or pictures and get back to whatever they were doing.
Semantic formatting such as headings, lists, tables, block quotes and monospaced code blocks
is retained. Styling is discarded, so pasted and user-typed text harmonize.
Syncing with [_remoteStorage_] avoids compromising the data model to work with third-party software.

[_Notes Together_]: /notes-together/
[_remoteStorage_]: https://remotestorage.io/

I found myself keeping notes with lists of groceries to buy and which episodes I had seen in a TV series.
Shopping lists are entered very naturally, by typing return after every item (like all word processing apps).
The Unicode checkmark ✔️ was useful here, but clunky to insert.
So I added code for unordered and ordered checklists (_Task Lists_ and _Sequences_, respectively).
A very few clicks can paste in anything that resembles a list and transform it to a checklist.
(Completed Tasks are moved to the bottom of the list instead of being hidden,
so it's easy to recover from a fat-fingered tap.)
Thus, a note-taking app became a lower-friction place than a To-Do app to keep simple to-do lists.

{% image "./Notes-Together-Task-List.jpeg", "a Task List in Notes Together", ["320"] %}

Text associated with a task is not confined to certain fields —
you write a document and place the checklist anywhere you like, even in a table cell.
You don't have to move the cursor between fields; it's all one document.

Notes Together will never be able to show you _only_ the tasks you can work on here-and-now,
or _just_ the tasks you're waiting on others to do.
Nor will you be able to see work errands and household errands in the same list
(unless you keep everything in one giant list ☹).
Nor does it help you with repeating chores
(though you can lock a note against edits, and repeatedly check and uncheck the items).
However, every note has an associated Date,
so it's possible to have a Task List for each day on which something is due
(though then you can't see all the tasks in one list).
Lists can contain sub-lists, so Tasks can contain sub-Tasks.
(I haven't yet written code to check an item when the last item on a sub-list is checked.)
Every word is indexed, so there's not a separate list of tags that the user must curate, unlike Outline Tracker.

So Notes Together can't slice and dice tasks like Outline Tracker, but everything you _can_ do is low-friction.
I find it more pleasant to use to track my To-Dos.

## Conclusion

Despite starting from different places, my two apps ended up having surprisingly similar capabilities.
Ease of use turned out to be more important than the "correct" data model.

It's said that every Unix application expands until it can read email.  Here's hoping I never reach that point. ☺︎
