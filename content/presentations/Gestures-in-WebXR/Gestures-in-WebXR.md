---
title: Gestures in WebXR — Barrier Mage
description: Reliable gesture recognition enhances immersion.
date: 2021-09-25
tags:
- webXR
- VR
previewImage:
  url: /img/pentacle-ViolentCloud-750w.jpeg
  width: 608
  height: 405
abstract: The game Barrier Mage implements gesture-based Virtual Reality game play.  The user draws mystic symbols with 6-DOF VR controllers. Each symbol has a different effect. This novel game mechanic eliminates an abstraction layer usual in fantasy games, making this game more immersive.
teaches: WebXR
---


## [Slides](../../keynote/Gestures%20in%20WebXR/)

## Drawing a symbol

{% image "./pentacle-ViolentCloud.jpg", "drawing pentacle to protect from The Violent Cloud", [750, "auto"] %}


## Root-mean-square

<math display="block" class="tml-display" style="display:block math;">
  <msqrt>
    <mfrac>
      <mrow>
        <mo form="prefix" stretchy="false" lspace="0em" rspace="0em">(</mo>
        <msub>
          <mi>x</mi>
          <mn>1</mn>
        </msub>
        <mo>−</mo>
        <msub>
          <mi>x</mi>
          <mn>2</mn>
        </msub>
        <msup>
          <mo form="postfix" stretchy="false">)</mo>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <mo form="prefix" stretchy="false">(</mo>
        <msub>
          <mi>y</mi>
          <mn>1</mn>
        </msub>
        <mo>−</mo>
        <msub>
          <mi>y</mi>
          <mn>2</mn>
        </msub>
        <msup>
          <mo form="postfix" stretchy="false">)</mo>
          <mn>2</mn>
        </msup>
        <mo>+</mo>
        <mo form="prefix" stretchy="false">(</mo>
        <msub>
          <mi>z</mi>
          <mn>1</mn>
        </msub>
        <mo>−</mo>
        <msub>
          <mi>z</mi>
          <mn>2</mn>
        </msub>
        <msup>
          <mo form="postfix" stretchy="false">)</mo>
          <mn>2</mn>
        </msup>
      </mrow>
      <mn>3</mn>
    </mfrac>
  </msqrt>
</math>

used to calculate difference between drawn endpoints & template endpoints


## Barrier Mage basic play

<video class="square" controls playsinline preload="metadata">
	<source src="/no-multiviews/barrier-mage-basic-play-4.mp4" type="video/mp4" />
	Download the <a href="/no-multiviews/barrier-mage-basic-play-4.mp4">MP4</a> video.
</video>

