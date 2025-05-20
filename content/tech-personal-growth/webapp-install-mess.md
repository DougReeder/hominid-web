---
title: The Mess That Is Installing a WebApp
description: Almost all platforms support installing a PWA, but prompting the user is still fragmented.
date: 2023-12-06
tags:
- webapp
- PWA
---
## Progressive Web Apps (PWAs)

A persistent argument for native apps over webapps has been that webapps didn't behave like native apps.
They couldn't access device APIs,
were slow to start up and couldn't run offline,
always appeared in a browser window with navigation UI,
and did not appear in the lists of running or recent apps.

Now, almost all of the APIs that most apps need (such as geolocation, push messaging and Bluetooth)
are available to webapps, often under the banner of [HTML5](https://developer.mozilla.org/en-US/docs/Web/API).
[Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers),
the [Cache API](https://developer.mozilla.org/en-US/docs/Web/API/Cache),
[Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) and [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) allow webapps to start instantly
and run offline.
A [Web App Manifest](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Manifest) provides the OS with the info
it needs to "install" the webapp, so it can appear in its own window, be listed with native apps, have a full
set of icons, be a destination for sharing, etc.

The new APIs enjoy broad support from the browser makers (with Safari trailing three to four years behind),
albeit not all features are implemented on all platforms.

What's more, these technologies are independent, allowing webapps to implement the app-like features
only where they need them.  Websites that users already interact with can instantly start and run offline,
regardless of whether they are installed, or even can be installed on a given platform.
That's the "Progressive" part.

## Installation

While all the browser makers are positive about allowing apps to be installed in some sense, they differ
in the user experience.

Apple doesn't want webapps to compete with its App Store and their 30% cut on all content,
so Safari makes the user illogically search in the "Share" menu to find "Add to Home Screen" on mobile
and "Add to Dock" on Macs.

Mozilla has also decided that installation should initiated by the user, as bookmarks always have been.
That is reasonable (though any website can be bookmarked, but only some can be installed) and they do little to educate users about this feature.
They also only implement it on Android. When Mozilla was pushing its Firefox OS, they asked developers to
use non-standard APIs and repackage their webapps, but now they show little interest in standards to make it easy
to install webapps. That comes across as "Not Invented Here".

Google has proposed and implemented the `beforeinstallprompt` event allowing webapps to trigger a standard browser
dialog prompting the user to install (or decline to install) the webapp.
This `beforeinstallprompt` event is also sanity-gated.
That is, the dialog is not displayed on the first visit to the webapp. Other criteria also apply, such as
"don't allow until the user has interacted with the webapp" and "don't prompt the user too often"

Given that Chromium browsers have implemented `beforeinstallprompt`
and Firefox and Safari have definitely decided not to implement it (see https://github.com/w3c/manifest/issues/835),
an installable webapp must implement something along the lines of:

```JavaScript
if (appSpecificUserEngagementDetected) {
	if (installPromptDeferred) { // BeforeInstallPromptEvent saying system install prompt is available
		enqueueSnackbar(`Install this webapp for easy access and a separate window.`,
			{callback: async () => {await installPromptDeferred.prompt(); /* ... */}});
	} else if (/\b(iPad|iPhone|iPod)\b/.test(navigator.userAgent) &&
			/WebKit/.test(navigator.userAgent) &&
			!/Edge/.test(navigator.userAgent) &&
			!window.MSStream) {
		enqueueSnackbar(`For easy access and a separate window, tap the share button then "Add to Home Screen"`);
	} else if (/\b(Macintosh)\b/.test(navigator.userAgent) &&
			/Safari/.test(navigator.userAgent) &&
			! /\b(Chrom\w{1,3}\/[\d.]+)\b/.test(navigator.userAgent)) {
		enqueueSnackbar(`For easy access and a separate window, click the share button then "Add to Dock"`);
	} else if (/\bMobile\b/.test(navigator.userAgent) &&
			/\b(Firefox\/[\d.]+)\b/.test(navigator.userAgent) &&
			! /\b(Seamonkey\/[\d.]+)\b/.test(navigator.userAgent)) {
		enqueueSnackbar(`For easy access and a separate window, from the Firefox menu select "Install"`);
	}
}
```

That is, each webapp must detect, not a feature, but the user interface for installation
(that is, if the browser is Safari Mobile, Safari Mac, or Firefox Android), and educate the user about it.
Browser sniffing is notoriously unreliable, but is the only way to customize for browser UI.
Also, each installable webapp must write its own user education text, and preferably localize it.
After all this work, the code is fragile against changes to the user interface of Safari and Firefox.

A better solution would be for Safari and Firefox to provide standardized and localized user education UI.
Installation is unfamiliar to most users, and doesn't apply to most websites, so when better to educate users
than when they've engaged with an installable webapp?

I have therefore proposed that Mozilla implement standardized and localized user education (a dialog)
in Firefox Android, triggered by an API with different semantics than Google's `beforeinstallprompt`,
but the same signature.
Thus, almost all installable web apps would immediately take advantage of it.

Please comment on [my proposal on Mozilla Connect](https://connect.mozilla.org/t5/ideas/standardize-amp-localize-user-education-re-install-pwa-command/idi-p/46661),
to help it gain critical mass, so Mozilla will take it seriously.
Alas, it's not vetted yet :-( so please check again next week.
