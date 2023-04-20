---
title: webOS “Desk Accessories”
description: A guest post on the HP webOS Developer Blog
date: 2011-10-25
tags:
  - user experience
  - webOS
---

_**Editor’s note:** This week we are featuring a guest challenge from rockstar webOS developer Doug Reeder. He has pioneered an app interface that he calls Desk Accessories. Your challenge this week is to create an app that uses this kind of interface. Take it away, Doug!_

## Background

[Psychological research](https://arstechnica.com/uncategorized/2007/03/study-says-leave-the-multitasking-to-your-computer/) shows that humans cannot efficiently concentrate on more than one activity at a time. However, there are single activities that require two apps on the screen at once. For example, one might want to compose an e-mail while reading figures from a spreadsheet, or calculate price comparisons while shopping on-line.

## The webOS User Interface

While webOS supports true multitasking, it only lets you interact with one card at a time. However, there are two kinds of webOS windows which a user can interact with while another app’s card is displayed: Dashboards and System popup alerts. You can’t divide your screen between two arbitrary apps, but you can have “desk accessories”: apps which use a part of the screen while leaving most of it for another app.

Dashboards persist until dismissed by the user, and the user can display them with a single swipe at any time. However, they are always exactly 320 pixels wide and 52 pixels tall. The user can display and interact with multiple Dashboards simultaneously.

{% image "./notifications-dashboard.png", "three dashboards on Touchpad" %}

System popup alerts (don’t confuse them with popups, toasters, and alerts managed by Enyo or Mojo) must be 320 pixels wide, but the height is configurable. Once closed, they are gone. Only one can be displayed at a time. While they’re available on both phones and tablets, Popups that are taller than about 240 pixels take up a majority of the screen on a phone, typically making the other app unusable – and if you can’t use the other app, you’re better off putting your app in a card.

{% image "./notes_portrait.png", "Popup Calc over Memos", ["608"] %}

{% image "./ss_pre3_emu.png", "Popup Calc on phone", ["320"] %}

You can put any kind of widget in a Dashboard or System Popup, but there is a big limitation—neither receives keyboard events.

Here are two example apps. [Dashboard Utilities](https://web.archive.org/web/20111107030722/http://developer.palm.com/appredirect/?packageid=com.machiapps.dashboardutilities&applicationid=7009) is a desk accessory that primarily uses a Dashboard. [PopupCalc](https://hominidsoftware.com/popupcalc/index.html) is a desk accessory that primarily uses a System popup.

{% image "./ph_1.png", "Dashboard Utilities dashboards" %}

## Flow of Activity

Dashboards and System popups are simple to create, but you must consider all the flows of user activity. Desk accessories are little-known as yet to webOS users, so you would do well to have your app start by launching a card which explains how to open your Dashboard or Popup.

Any window can be dismissed by the user at any time, so your app must deal with this. webOS keeps track of a “root window” for each app, where it sends events such as applicationRelaunch. For standard apps that don’t specify `"noWindow": true` in appinfo.json, the root window is initially the first card opened, but if that card is tossed away, another window becomes the root window. For headless apps, that specify `"noWindow": true` in appinfo.json, the root window is a headless, non-displayed window. You must deal with the situation where your app has only a Dashboard or Popup in existence when the user taps the app icon in the Launcher—the current root window will receive an applicationRelaunch event. One good way to respond to this is to re-display the card with basic orientation info. Your app icon may be tapped by a user who has no idea that your app is a desk accessory that’s already running.

{% image "./popupcalc_2011-01-09_153312.png", "Popup Calc instruction card", ["608"] %}

webOS has neither a Dock nor a Taskbar to provide ready access to apps. The only instant access is a swipe or tap to open all current Dashboards. Desk accessories must be closeable at any time, and users will expect them to open exactly as they closed. Thus, a Popup desk accessory will typically need a Dashboard to provide an “open” button. As long as either the Popup, Dashboard or card exist, the app will continue running and global variables will be preserved.

Another UI issue for Popups is how to close them. The Center button on tablets and classic Pres will close them. An up-swipe on a phone will close a Popup and go to card mode, but on a tablet it just switches to card mode. A number of users find the Center button on TouchPads to be awkward, so it’s well to include another way to close. Unlike cards, the system does not support swipe-to-remove popups. A button labeled “Close” is easy, but uses precious screen real estate. One solution is some kind of swipe gesture, such as a dragging from inside the Popup to outside the Popup. This echoes the swipe-card-away gesture.

The system does not close a Popup when it goes to Exhibition mode, but desk accessories generally should close themselves, since the user has by definition not interacted with them for a while. If the screen turns off, your Popup should close itself so it won’t display on the lock screen, where it would displace the dashboard notifications the user expects to see. To do this, your Popup should subscribe to the [Display Manager service](https://web.archive.org/web/20111107030722/https://developer.palm.com/content/api/reference/services/display-manager.html) and close itself if `inResponse.event === "displayOff"` or `inResponse.dockMode === true`

Many Dashboard desk accessories will set the window attribute `clickableWhenLocked`, to allow the user to interact with them on the lock screen. Alas, Popups don’t have that option, so you should not set `clickableWhenLocked` for the Dashboard for a Popup desk accessory.

## State Variables

Users expect desk accessories to maintain state, that is, to re-open exactly as they closed. Enyo maintains the object enyo.application in sync across all windows, so properties of enyo.application are a good place to store state variables for a Popup.
Documentation

[enyo.windows](https://web.archive.org/web/20111107030722/https://developer.palm.com/content/api/reference/enyo/enyo-api-reference.html#enyo.windows) allows you to directly create Dashboards and System popups. [enyo.Dashboard](https://web.archive.org/web/20111107030722/https://developer.palm.com/content/api/reference/enyo/enyo-api-reference.html#enyo.Dashboard) is a Kind that supports notifications in a Dashboard; typically a “desk accessory” will not use it.

An overview of Mojo dashboards is on [this page](https://web.archive.org/web/20111107030722/https://developer.palm.com/content/api/dev-guide/mojo/dashboards-notifications.html). Mojo “Dashboard Applications” are covered in the second part of [this page](https://web.archive.org/web/20111107030722/https://developer.palm.com/content/content/api/dev-guide/mojo/background-applications.html).

## Demo App

To ease App Hack development, there is an Enyo demo app which has a card to orient the user, but “lives” in a Dashboard, which contains a button to display a System popup.

You’ll find the demo app on our [GitHub repo](https://web.archive.org/web/20141022053748/https://github.com/webOS-DevRel/Weekly-App-Hack/tree/master/4%20-%20PopupDemo).

The Makefile requires `gmake`. The first time, and after running `make clean`, you must run `make dirs` to create the build directories. Run `make all` to create the .ipk, `make install` to create the .ipk and install it, or `make run` to create the .ipk, install, and run it.

If your development environment includes Miller’s JavaScript Lint, uncomment the Makefile line

```shell
jsl -conf jsl-Enyo-emptyok.conf -nologo -nofilelisting -process $@
```

If your development environment includes YUI, uncomment the Makefile `#ifdef` after

```Makefile
# App source files are copied for debug builds and minified for production builds.
```

and the line after

```Makefile
# Always minifies CSS.
```

## The Rules

1) Submit your app based on the sample above to the App Catalog by November 1st at 11:59pm Pacific Daylight Time. We will be accepting both new apps as well as incorporation of the theme into existing apps as an improvement. A submission to the Beta catalog is acceptable.

2) Notify us that you want to participate in the App Hack by sending us an email containing your app redirect link (it’s generated automatically and placed on the app’s detail page in “My Apps”) and any extra information you want to share with us at apphack@palm.com. This is also due by November 1st at 11:59pm Pacific Daylight Time.  If you do not send us this note, your app will not be considered for the App Hack.

3) By the end of the day on Friday, November 4th 2011, the Developer Relations team will announce the winning app (along with honorable mentions and other entrants). The winner will get a blog post dedicated to him/her and his/her fantastic app.

4) For this round, the winner (and only the winner) will also receive a 16GB TouchPad!
