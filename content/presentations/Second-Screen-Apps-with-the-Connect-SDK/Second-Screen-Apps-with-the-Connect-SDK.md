---
title: “Second Screen” apps with the Connect SDK
description: Throwing content from a phone  to a smart TV enables new interactions.
date: 2014-09-17
tags:
- iOS
- Android
- mobile
previewImage:
  url: /img/compatibility-matix-750w.png
  width: 608
  height: 784
---

_Delivered to [ColumbusJS](https://columbusjs.org/) in [September 2014](https://columbusjs.org/09-17-2014/javascript-hardware-night.html)_

### Motivation
* “Smart TVs” much less interactive than computers
  * one set of preferences per app (typically)
  * Search is laborious
  * No e-mail/tweet from friend that knows you
* “Smart TV” interfaces are clunky at best
* Most people in front of a TV have a mobile device nearby


### What it’s not
* Screen mirroring (ala AirPlay Mirroring or Chromecast tab mirroring)
* Additional display over Wi-Fi
* Local Media Streaming (ala Play on Roku or AirPlay streaming)


### Development & Testing
Half a dozen Android or iOS libraries required

Setup takes a day, not an hour, unless you’re already familiar with Android development / iOS development.

Testing: buy hardware for any platform you really care about.
Only emulator is webOS TV, and that appears to be buggy.


### Compatibility - Mobile OS
iOS, Android, or Cordova for both.

No announced plan for Windows Phone nor web app (Firefox OS, ChromeOS)

### Compatibility - TV OS
8 platforms:
LG webOS,
Chromecast,
Apple TV,
Roku,
Fire TV,
LG Smart TV ’13,
LG Smart TV ’12,
DIAL

23 features:
Apps,
Media,
System Controls,
TV Controls

{% image "./compatibility-matix.png", "Compatibility matrix", [750, "auto"] %}

Broad support for
* Launching app w/ known ID
* Throw video from URL
* Throw YouTube video (& possibly Hulu, NetFlix)
* Throw audio from URL
* Throw photo from URL
* Throw URL to browser?

Other features may not be available on users' devices.

### Demonstrate Connect SDK API Sampler
#### Media tab
* Throw photo
* Throw audio
#### Apps tab
* Launch Enyo 2 Sampler


### Use Cases

* Game using mobile as tilt controller, e.g. Wii game (TV-centric)
* Progress through sequence of videos on tablet, optionally displaying on TV e.g. Reading Bear (mobile-centric)
* Run web server on phone, display photos on TV, e.g. Zap Photoshare (mobile-centric)
* Multiplayer real-time strategy, displaying player-private info on mobile (joint)
* Collaborative editing, e.g. Subethaedit, Etherpad (joint)


### UX Positives
TV apps needn’t depend on awkward TV UI.

Don’t need a large phone to view photos or videos, if you can throw them up on a large display.

Avoid logging in to TV


### UX Gotchas
UI can be good while UX is poor.

[ask who’s on local Wi-Fi]
Must be on same Wi-Fi network: Ok for home, work, close friends. Poor for Meetup, meeting at clients.

FireTV & DIAL TVs can only “Launch My app” & beam YouTube.
Easy to exclude from list, but leaves user frustrated.

Some games are much easier if you can always glance at the map


### Conclusion
* This might be the tipping point where users expect devices to work together (like VCRs and TVs did)
* Or maybe it won’t catch on, and companies will re-impose their walled gardens

---

[Connect SDK website](https://connectsdk.com/)


## Underlying Technologies
* mDNS
* WebSockets
* DIAL & Chromecast
* Apple TV
