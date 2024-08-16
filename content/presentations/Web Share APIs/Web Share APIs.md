---
title: Join the Cool Kids — If You're Allowed! — The Web Share APIs
description: The Web Share API and Web Share Target API allow your web app to send and receive content from native apps, like the big social networking apps.
date: 2024-03-06
tags:
- webapp
- PWA
- user experience
- webOS
abstract: The Web Share API and Web Share Target API allow your web app to send and receive content from native apps, like the big social networking apps. But can these APIs meet your needs?
teaches: ["Web Share API", "Web Share Target API"]
---

_Delivered to [ColumbusJS](https://columbusjs.org/) in [March 2024](https://www.meetup.com/columbusjs/events/299341757/)_

## Bio

Doug Reeder has been programming professionally for a quarter century on a wide range of technologies, at organizations large and small. Today he does full-stack web development, consults on WebXR, and pushes back on gatekeepers.


## Outline

### 1974: GUI Copy & Paste

* Larry Tesler & Tim Mott @ Xerox PARC
* App to App within device, only
* Text, later other data types
* later: Drag & Drop


### 1996: Palm OS Sharing

* Few people had direct Internet access; PDAs didn't have IP networking
* Exchange Manager; originated Gavin Peacock
	* IR beaming range 3 feet (OBEX IrDA; Pocket PC 2002 and later)
	* Bluetooth in Palm OS 4
* IR beaming is fast enough for business cards, calendar events, memos (text only). If you're patient, you can share apps or the smaller pictures used back then
* Available, but underutilized, within device:
	* Resco Explorer lets you receive zip archives
	* SiEd lets you receive and edit .c, .html, and .php files
	* VFSExchange (2006) — used mostly for ringtones & Java Midlets

{% image "./VFSExchange-ScreenShot130.png", "screen shot of VFS Exchange", ["608"] %}

* Non-enthusiasts didn't use Beaming — unclear why.

Video of IR beaming [if time]


### 2009: Palm webOS Touch-to-share

* devices exchange URLs
* paradigm is "share what's on the screen"
* video of Zap Photoshare: [https://www.youtube.com/watch?v=2oLfKqpUJT4](https://www.youtube.com/watch?v=2oLfKqpUJT4)


### Now: Social Media is king

* Big demand to share URLs from and to Social Media
* Selecting content on handhelds is tricky, so copy-and-paste is high-friction. ⇒ demand for sharing *within* device
* Native share targets:
	* social media
	* email
	* messaging
	* file storage
	* file transfer
	* print service
	* content transformers (e.g. text-to-speech, Google Lens)
* Browsers already have menu command to share URL of whole page
* Android offers to Share anything copied to the clipboard
* A number of browsers accept shared text, and do a web search with it


### Enter the Web Share API (send)

* original: asynchronous `navigator.share() `
	* can send part of page, or even content that isn't in page at all
	* requires *transient activation* (typically a user click)
	* `title`, `text` & `url` fields
		* can't send multiple URLs nor texts
	* sender dumps it over the wall, receiver free to ignore fields it doesn't want to deal with
	* typically use text or url, not both. Can't be sure what receiver will actually use
	* widely supported (Firefox on Android won't send text)
* later: synchronous `navigator.canShare()`
	* if data in one form is disallowed, you can send in another format
	* almost only use is whether the browser allows new `files` field at all
		* won't tell you if file type is disallowed :-(


### Small signature, complicated use

* url > text, file > text; safest to not send url & files; may need to offer more than one Share option

* URLs: can send if API supported at all
  * sending multiple URLs requires multiple user clicks
  * only `http:` and `https:` schemes
  * aside: theoretical possibilities that probably won't materialize: tel: mailto: sms: mms: irc: sip: xmpp:
* text: call `canShare()`, fall back to simulating click on `mailto:` anchor
* files: multiple ways to fail
	* no API
	* canShare()
	* file type rejected by share()
	* If your use case allows, can fall back to different type (plain text or PDF), `text` field, thence to `mailto:` anchor
	* Notes Together will try up to four different ways to send a note


### File types Chromium on Android will share

* text/plain
* text/html
* text/csv
* text/css — *why?*


### File types Chromium on Android won't share

* **text/tab-separated-values**
* **text/calendar**
* **text/vcard** (iOS Contacts share target)
* text/markdown
* text/rtf
* text/javascript
* text/p .p
* text/awk .awk
* text/uri .uri
* text/gltf


### Web Share demo apps

* Title, text, url, files:
	[https://w3c.github.io/web-share/demos/share-files.html](https://w3c.github.io/web-share/demos/share-files.html)
* Files:
	[https://scrapbook-pwa.web.app/](https://scrapbook-pwa.web.app/)


### Web Share *Target* API (receive)

* installed PWA (requires Web App Manifest & Service Worker)
* browser & OS that supports
* add to Web App Manifest: ` `
```
"share_target": {
    "action": "/create-from-share",
    "method": "POST",
    "enctype": "multipart/form-data",
    "params": {
      "title": "title",
      "text": "text",
      "url": "url",
      "files": [
        {"name": "files", "accept": ["text/*", "image/*", ".text", ".readme""]}
      ]
    }
```

* route can be handled by web server or Service Worker


### Quick review of coding Service Workers

* available APIs differ from window
	* DOM is not available
	* DOMParser().parseFromString is not available
	* URL.createObjectURL is not available in a Service Worker
	* postMessage to client window, which postMessages back
* processing data in Service Worker may lead to duplication of code
* easier to just store data until it can be processed in a window
* Sharing doesn't appear to count as a user action (transient activation)
* testing is tricky — unit tests help, but important parts are inherently outside the browser
* handler should return quickly with redirect to an appropriate path — can continue to process in the background


### Web Share Target demo apps

* Title, text & url:
	[https://w3c.github.io/web-share-target/demos/sharetarget.html](https://w3c.github.io/web-share-target/demos/sharetarget.html)
* File, or link and file:
	[https://scrapbook-pwa.web.app/](https://scrapbook-pwa.web.app/)


### Can't access full native Sharing API

* Can’t share rich text/HTML message

* MacOS
	* can't directly Create Quick Note
	* can't directly Add to Dock

* iOS only allows sharing to one precompiled extension per app, it would be difficult to implement the same experience as Android

* UWP registration is in app package manifest; not clear how browser can create share target for each app, but support is listed for Chrome, Edge and Opera

* Don't hold your breath for more implementations

### App that uses Web Share APIs with fallbacks

_Long-press on summary in list to share_

[Notes Together](https://notestogether.hominidsoftware.com)

## Summary

* Can be on level playing field with native app, but...
* Uneven implementation mean it can't be an essential part of using your webapp
* Arbitrary restrictions & uneven support ⇒ must carefully check beforehand if your use case is supported


