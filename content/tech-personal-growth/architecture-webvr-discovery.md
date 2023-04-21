---
title: A User-Empowering Architecture for WebVR Discovery
description: A better way to find VR & AR content on the Web is needed.
date: 2019-03-29
tags:
  - VR
  - webXR
  - feed
  - user experience
---
Currently, it’s hard to browse the VR web. Sites are available over HTTP but hard to find. If you know the URL, you can laboriously type it in on a virtual keyboard, but that’s not something most users are willing to do.

Search using existing web crawlers is possible, but typing fewer characters than a URL is only less annoying, not really low friction. Voice search is possible in low-noise environments, but presents privacy issues, even if speech recognition is done on-device. Current web crawlers also lack a filter for VR and/or 360 content.

Another possibility is presenting the user with multiple feeds of content. This is the approach taken by Oculus. However, given Facebook’s history, a substantial number of users will not trust Oculus to work in their best interest, or treat content outside the Facebook ecosystem equally.

The feed approach could satisfy users concerned about privacy and control if the user could control what sources were used to generate the feeds. RSS feeds would be ideal. [WebXR experiences
(Meta Quest tested)](https://vrsites.com/) [WebVR Directory by Supermedium](https://webvr.directory/) [Experiments with Google](https://experiments.withgoogle.com/collection/webvr) and [Acer WebVR Start Page](https://acerwebvr.github.io/) are websites that curate WebVR experiences. [A-Frame Blog](https://aframe.io/blog/) is a blog collecting projects, tools, and events related to the A-Frame framework.

Scraping summaries from web pages that reference WebVR content is possible, but fragile. Feed items could be generated from site metadata, including Open Graph Protocol and oEmbed. Something along the lines of Slack’s Unfurl Cascade is probably best.

Identifying links to WebVR sites is a bit tricky - there is no Open Graph type for WebVR. For the general case you’d need to run enough JavaScript to detect usage of WebVR APIs. Some shortcuts are possible, such as looking for script tags for WebVR frameworks. Distinguishing 360 photo or video content from full VR may not be generally possible. Identifying other content of interest is even trickier to do on the fly.

There should be straightforward UI to add and remove sources. It might or might not make sense to take a user’s Favorites as sources.

The UI should present at least two composite feeds - one of liked content the user can return to, and another of new items.

Finally, the system should order items using an estimation of how well the user will like the content. Framerate, number of page crashes and time-on-page could be tracked. Some tweaking should be possible - perhaps giving a simple thumb-up or thumb-down on each item of content. A headset that can run VR ought to be able to crunch a fair amount of data, to predict what a user most wants.

