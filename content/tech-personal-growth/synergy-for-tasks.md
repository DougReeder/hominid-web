---
title: Synergy for Tasks
description: webOS Tasks should be reworked using the Palm Synergy paradigm
date: 2010-06-06
tags:
  - getting things done
  - webOS
  - DB8
---

## Background
To-Do List/Tasks was one of the four core apps to have a dedicated button under Palm OS. Yet *Tasks*, its analog under webOS, was not reworked using the Synergy idea of presenting data from different back ends with a common UI.

There is value in keeping a to-do list for oneself, but much greater value in tracking tasks performed by a team – what has been done, what needs to be done, when it is due, who’s responsible for what. Most groupware supports some form of task list management. Properly implemented and used, it increases productivity by reducing the number of phone calls, e-mails and meetings required. These services are more than simple to-do lists; they are the working face of modern project management.

Accessing groupware from handheld devices increases its value – project plans can be reviewed and updated during a meeting (without requiring workers to have and bring distracting laptops), indeed any time people are away from their work stations: [case study](https://hominidsoftware.com/outlinetracker/case_study.html) With full-time access to groupware, project plans become living documents.
## Synergy: A Prime Differentiator of webOS
WebOS users praise the way it handles contacts and calendars, using Palm Synergy. Pulling the disparate elements of users’ lives together has been one of the biggest selling points of webOS. Yet the user experience has not been consistently compelling. Jon Stokes of Ars Technica wrote one of the best thought-out reviews of the Pre on its launch ([Ars Reviews the Palm Pre, part 1: the BlackBerry killer](https://arstechnica.com/gadgets/news/2009/06/ars-reviews-the-palm-pre-part-1-the-blackberry-killer.ars)), but bailed out six months later, in part because webOS apps were largely clients for single cloud services – there was nothing compellingly different about the experience for him ([RIP Palm: it’s over, and here’s why](https://arstechnica.com/gadgets/news/2010/03/rip-palm-its-over-and-heres-why.ars/)). He could access cloud services just as well from an Android phone.

## webOS Task List Managers
Many users bemoaned the lack of a decent built-in task list manager, finding the existing Tasks application too simplistic for their needs. Some reviews of webOS devices found the built-in Tasks application adequate for their needs, but none cite it as a reason to switch to webOS. Existing third-party task list managers had some traction – reviews in the App Catalog often praise them in comparison to the built-in Tasks application. *Outline Tracker Free* made Computerworld’s list of [“10 must-have free webOS Apps”](https://www.computerworld.com/s/article/9171378/10_must_have_free_Palm_webOS_apps ). The application “To Do Classic” was popular, despite having essentially the same feature set as the built-in Tasks application.

However, almost no task list managers were included in the lists of must-have paid apps being blogged during Palm’s Summer Half Off sale. The best-selling task list manager in the Palm Hot Apps promotion, Outline Tracker, placed around #52. Just under 20,000 users downloaded Outline Tracker Free (as of the start of July 2010). Using estimates of the total number of webOS devices sold, this is perhaps 2% of the user base.

Task list managers did not become “must-have” apps for the average webOS user.

## Proposal: Synergy for Tasks
I propose that Tasks be reworked using Synergy. DB8 would hold tasks from various back-ends, all inheriting from a common task type. The new Tasks app would display a unified view - users could see their in-house tasks from Outlook in the same view as client-related tasks from Basecamp.

### Data Model
We would need to harmonize the differences between Google Tasks, Done!, Basecamp, etc.
by developing a paradigm which allows the user a single interface to all of them. Any task app has two main controls: one which controls which tasks appear, and one which controls what order they appear in.

#### Controlling Which Tasks Appear
A data model in which each task has zero or more “tags” (and tags can be added at any time) can encompass most paradigms. Tag names are one or a few words.

List-based apps, such as webOS Tasks, allow the user to display the tasks from one list. This can be generalized by treating the list name as a “tag”. When the user selects the list name from a list of “tags”, the list items are displayed, as they match the “tag”.

Apps based on David Allen’s “Getting Things Done” system allow displaying the user’s set of tasks by “context” or “location”. Contexts can be directly modeled as tags.

Additional tags can also be generated. Project-based systems would add a tag for the project name. The account name or task source would also be a tag, allowing selection of all your Google Tasks, for example.

A key point is that tags can “mean” different different things. Some tags could be to-do list names, while others are GTD contexts and still others are “project” names.

The Tasks app wouldn’t care - the user selects a tag from the list of all tags, and the app displays tasks that match.

A beginning user can assign a single tag to each task, and treat it like a bunch of to-do lists. If he later adds multiple tags to slice up his tasks differently, he doesn’t need to copy his tasks to a different system.

#### Controlling the Order
Many task apps have a concept of “priority” or “importance”.
Any system with two, three, four, five, six, ten or twelve levels can be mapped to a 60-level scale - and back again.
Sometimes the desired order is by Due Date. Some systems also support a Start Date.
Alternatively, the user may wish to order tasks herself.
A popup list selecting between these alternatives (much like the webOS Tasks app) should meet most users’ needs

### Synergy Connectors
A Connector would need to be written for each back end.
Like Calendar, there’s no need to de-dupe tasks from different sources, so each Connector must map data from the backend into the harmonized format. In particular, each Connector would need to assign appropriate tags for incoming data, and map tags to appropriate backend data structures.

### Task Insertion
Complementing the Connectors would be a service allowing any app to create a task, with user consent. (Analogous to the API for creating a Contact: [Add Contact](http://www.openwebosproject.org/docs/developer_reference/application_apis/add_contact/)

A task may arrive on a user’s plate from a number of sources (“inboxes” in GTD terms): e-mail, instant messaging, phone, in person, a meeting, or a project review. A task from the real world requires the user to type it in, but digital sources should not. The best typing is none at all.

Many times, receipt of an e-mail should generate a task. If users can only cut and paste the text of an e-mail, it arrives in the task list manager as an undigested blob. Metadata, such as the sender, is lost. There is no way for a task list manager to automatically assign metadata such as due date, nor to tag a task depending on which e-mail account it was sent to. Email apps could use the API to create tasks with pre-filled tags. The e-mail app knows about e-mails, so it is best positioned to create a task from an e-mail. Likewise, the phone app could inject tasks pre-populated with contact information.



### A Task Service, “Inboxes” and non-Task List Manager Apps

The operating system generates a small number of tasks for the user. Updating third-party apps currently depends on the user running the Updates application. While the webOS notification system is exemplary in handling do-it-now or do-it-in-ten-minutes things, it’s not designed for do-it-today or do- it-next-week things. It would be natural for update notices to go on the user’s To-Do list.

Shopping search apps could create and update shopping lists integrated with a user’s other activities. While these apps *could* target the built-in Tasks application with their Tasks, that would give the user no flexibility in which task list manager he or she used.

It is often possible to create a task-oriented view of cloud services which are not primarily task list managers, such as software bug-tracking systems. It is not cost-effective for developers of third party task list managers to support backends like this, but it would be cost-effective in many instances to write glue code between a webOS Task Service and such a backend. Integrating domain-specific systems with general task list management would be a killer app for many users and businesses.


### Universal Search
It would be straightforward to add a unified Task Service to webOS Universal Search.

## Palm Synergy for Tasks
A unified Task Service would thus extend Palm Synergy the logical next step. It would make webOS a preferred front-end to groupware. It would help make the webOS experience compellingly different than other smartphone platforms. I propose that Palm should develop a unified Task Service now.
