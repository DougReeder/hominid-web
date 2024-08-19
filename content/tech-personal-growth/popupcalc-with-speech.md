---
title: Adding Speech to PopupCalc
description: Experiments revealed issues with latency and usefulness
date: 2011-10-11
tags:
  - user experience
  - webOS
previewImage:
  url: /img/popupcalc.webp
  width: 339
  height: 388
---

There are several places where speech output might be useful in a touchscreen calculator.

Touchscreens have no tactile feedback, making it difficult for users to be sure they've tapped the correct button. Autocorrect is not possible for numbers. Thus, speaking the name of each button as it is pressed gives users the immediate feedback of a keyclick. However, this does not require text-to-speech, only a recording of each key name.

Due to the large latency in using the `flite` plugin (`sdltts`), an implementation of this in PopupCalc failed to provide the immediate feedback users need.

Speaking the name of each digit is not how humans say numbers, so a "Speak Operand" option was added. Numbers can't be spoken until they're completely entered, as signaled by an operator.

Thus, a calculation is spoken as the phrases
"two times", "three plus", "four equals ten", rather than the natural "two times three", "plus four", "equals ten". While an interesting user interface experiment, I judged this to not be useful for end users.

<div class="center-horizontal">
	<video controls width="320" height="404" src="/no-multiviews/PopupCalc speech 3.mp4" poster="/img/popupcalc.webp" playsinline preload="metadata">
			Download the <a href="/no-multiviews/PopupCalc speech 3.mp4">PopupCalc with speech</a> MP4 video.
	</video>
</div>

Speaking the result of a calculation is another approach.
Implementing this using the `flite` plugin (`sdltts`) results in a noticeable latency, but might sometimes be useful.

Another possibility is speaking the whole calculation.
This allows a user to check that the calculation was entered correctly, reducing the need for a "paper tape" widget. The latency is not a problem here.
It's also useful when one person is doing calculations for a group (say, at a meeting).
It's most useful when training someone to do calculations, but PopupCalc only handles simple calculations and more complicated calculations are rarely done with calculators anymore.
