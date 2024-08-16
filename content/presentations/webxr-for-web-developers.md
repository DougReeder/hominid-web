---
title: WebXR for Web Developers
description: Doing VR and AR on the WWW requires a raft of APIs, libraries, languages, services, file formats, design metrics and approaches that web developers don't normally use.
date: 2024-08-07
tags:
- webXR
- JavaScript
- VR
- AR
abstract: Doing VR and AR on the WWW requires a raft of APIs, libraries, languages, services, file formats, design metrics and approaches that web developers don't normally use. I'll cover what's needed and where XR on the WWW is going.
teaches: WebXR
---

_Delivered to [VRColumbus](https://www.meetup.com/vr-columbus/) in [May 2024](https://www.meetup.com/vr-columbus/events/300924576/) and [ColumbusJS](https://columbusjs.org/) in [August 2024](https://www.meetup.com/columbusjs/events/302520579/)_

## [Slides](../../keynote/WebXR%20for%20Web%20Developers)


## vs. native

* Native apps can fully utilize hardware, but are siloed in development and distributed by gatekeepers
* Web apps can reach anyone, but you must allow for differing capabilities and can't achieve the performance of native
	* may also run on personal computers or mobile (depending on interactions), for those without a headset
	* could have presenter(s) in headset and audience mostly on personal computers or mobile


## Browser Graphics

* everything displayed in a window is in **Document Object Model** (DOM)
* conventional web programming comes down to manipulating the DOM, using a weakly-typed language w/ automatic memory management
* almost the polar opposite of environment for high-performance graphics


## APIs for WebXR

* **Full-screen mode** eliminates windowing & browser chrome, for immersion
* **Canvas** is HTML Element (in the DOM) you can draw into
	* covers rectangular part or all of window
	* bitmapped
	* doesn't contain DOM, nor retain your draw calls
* current: **WebGL 2**: context of HTML Canvas
	* based closely on [OpenGL ES 3.0](https://en.wikipedia.org/wiki/OpenGL_ES#OpenGL_ES_2.0),
	* you will program to a utility library (or else wind up writing your own)
	* focus is on the shader program
		* libraries have all standard shaders
		* custom shaders for unusual cases
		* example: aframe-shader-buildings
			* each building is just an ell-shaped box made from 12 triangles; all buildings of a style are one object
			* switches from texture for walls to cubemap for windows
	* Shaders written in GLSL a C-like language (you serve GLSL files just like HTML, CSS & JavaScript)

      * [custom shader for analog dial](https://dougreeder.github.io/aframe-dial/example.html)

      * [custom shader using vertex displacement](https://www.clicktorelease.com/code/vertex-displacement-noise-3d-webgl-glsl-three-js/add-some-colour-movement.html)

      * [custom shader to create thousands of buildings cheaply](https://dougreeder.github.io/aframe-shader-buildings/example.html)

      * [game using building shader](https://dougreeder.github.io/elfland-glider/city/)

* future: **WebGPU** in progress
	* new kind of Context for HTML Canvas element
	* no baggage from 1990s
	* supports modern GPU architectures
	* abstraction on top of Vulkan, Metal & DirectX 12
	* focuses on resource re-use via "pipelines" & "RenderBundles"
* **WebXR**: A web standard for working with VR & AR
	* complements WebGL/WebGPU
	* VR/AR life-cycle
		* start & stop immersive & AR modes
		* frame timing (may be different than main display)
	* provides new inputs
		* head pose for camera
		* Controller position and buttons
		* Hand tracking
		* transient inputs (like laser pointer): mobile tap or Vision OS click
	* exposes platform features like AR plane detection
* **WebAssembly** (WASM)
	* near native speed
	* just computation, no DOM access nor I/O
	* support for strongly typed languages; around 40 programming languages reportedly compile to WASM
	* physics engines, SLAM engines
	* 2.0 in draft
	* developer survey: need for improvement in four areas: WASI, debugging support, integration with JavaScript and browser APIs, and build tooling


## Performance

* Decide your **target device class**: mobile (billions), standalone headsets (10s of millions), or personal computers (millions)
* To keep frames/sec up, watch these metrics
	* number of triangles per frame:
		* mobile: < 100,000–200,000
		* standalone headsets: < 750,000–1,000,000
	* draw calls per frame:
		* mobile: < 100–150
		* standalone headsets: < 100–175
* metrics
	* **draw calls**: not much more than 100 draw calls (object & material) on mobile, including standalone headsets
	* **number of triangles**


## Google \<model-viewer>

* only displays 3-D models
* web component (element in DOM tree)


## Frameworks

* Three.js
	* imperative programming
	* low-level; more code needs to be written than other frameworks
	* minimal dev tools
	* no built-in physics engine, but almost every physics engine documents how to use with Three.js
	* extensions tend to be low-level
		* example: subdivision vs. glow (halo)
	* experimental support for WebGPU
* Babylon.js
	* One True Way to do things; reputation of steeper knowledge curve
	* built-in support for almost anything you need (but if it doesn't work the way you need, you may be out of luck)
	* physics engine: Cannon.js or Oimo
	* community contributions
	* tools like Playground
	* most features support using WebGPU
* A-Frame
	* Easy to get started; simplest scenes just require HTML
	* Programming guidelines, but you can do what you like
		* also, open-source chaos
		* impedance change when you get down to Three.js level
	* A-Frame Inspector, like browser tools
	* no built-in physics engine
	* a component for anything you want to do (for example, Gaussian Splatting), but it may not be maintained or work with latest. In particular, many components were written for earlier versions of Three.js that use WebGL 1
	* many components are just wrappers for Three.js functionality
	* Lower layers use Three.js; awkward to use Three.js plugins
  * [A-Frame component](https://github.com/DougReeder/aframe-glow/tree/modernize) built on Three.JS extension


## Engines

* Unity (exporter plugin)
	* not web-friendly,
		* long load times
		* minimal access to web APIs
		* can't get help via posting a simple example online
	* not all Unity capabilities
	* experimental support for WebGPU
	* good for showing off a single level of a native game
* PlayCanvas
	* integrates with ammo.js physics engine
	* visual editor
	* rendering optimized for mobile
	* built-in code, editor, less friendly to using your own IDE
	* WebGPU support in development
* 8th wall
	* SLAM engine doesn't depend on WebXR API (so runs on iPhones)
	* focussed on AR advertising campaigns
	* expensive
	* must build on top of a framework such as A-Frame
* Wonderland
	* several excellent example games
	* free up to $120k/yr
* others with less mind-share
	* Godot
		* 2-D & 3-D game engine for native
		* impedance mismatch with WebXR
	* Elixir
		* Rapier physics engine
		* compatibility w/ Three.js plugins
	* Cocos Creator
		* 2-D & 3-D game engine for native
		* supports WebGPU
	* Etherial


## Tools for non-programmers

* LearnBright
	* "learning modules" only
* MetaVRse Engine


## Development (generally)

* 3D file formats: GLTF/GLB with many frameworks offering support for older standards like OBJ, STL and proprietary standards like FBX, USD.
* Can use multiple threads via Workers & WebAssembly (but it's awkward and less efficient than native)
* Weakly typed languages can be transpiled to JavaScript
* Strongly typed languages can be compiled to WebAssembly
* Pick a framework or engine — begin with the end in mind
	* game vs. experience vs. presentation
		* physics engine required?
	* try framework examples, on your target platforms, to see what apps are focussed on
	* licensing / who's backing it? / how long will your project be maintained?
		* Amazon abandoned Sumerian in 2022
	* What you're familiar with
* In any framework, you may need to write/re-write a component to do what you need

* Browser extension: WebXR API Emulator
* Standalone headsets: chrome://inspect/#devices
* 3D file formats: GLTF/GLB with many frameworks offering support for older standards like OBJ, STL and proprietary standards like FBX, USD.
* Can use multiple threads via Workers & WebAssembly (but it's awkward and less efficient than native)
* Weakly typed languages can be transpiled to JavaScript; strongly typed languages can be compiled to WebAssembly


## Development Support

* WebXR discord
* Framework forums / communities
* Voices of VR podcast has done many episodes on WebXR and the broader Immersive Web community.


## Browser & OS Support

### Quest 2/3/Pro

* Oculus Browser: full support
* Wolvic (based on Firefox): supports basic features

### Pico headsets

* Firefox may or may not still work
* Wolvic (based on Firefox): supports basic features


### Vision OS


* Safari: enabled by default in VisonOS 2


### Personal Computers


* Chromium browsers: most features
* Safari: behind flag
* Firefox behind flag, no longer maintained
* Opera: many features


### Android

* Chromium browsers: most features including AR

### iOS

* Safari: not implemented
* other browsers (only in Europe for now) ?

### Linux

* Chromium browsers: experimental support


## Outstanding WebXR sites

* [Wol](https://meetwol.com): Mixed-reality, voice interaction
* [VRPlanets](https://travisbarrydick.github.io/vr-planets/dist/): learn orbital mechanics
* [3DStreet](https://3dstreet.app/): urban planning
* [Moonrider](https://moonrider.xyz/): Beat Saber clone
* [Project Flowerbed](https://flowerbed.metademolab.com/): interactions

## Live-coding
* [code repo](https://github.com/DougReeder/live-coding-world)
* [A-Frame environment components](https://aframe.wiki/en/#!pages/environment.md)
* [A-Frame components](https://aframe.wiki/en/#!pages/component-directory.md)
* [multi-user world](https://live-coding.surge.sh/) — if you don't have a friend handy, open two windows
