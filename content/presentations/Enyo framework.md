---
title: "Enyo: Yet Another Framework or The Next Step Beyond Dojo?"
description: Web apps on mobile require a new framework
date: 2012-02-16
tags:
- webapp
- webOS
- mobile
- JavaScript
teaches: Enyo framework
---

*talk delivered at CAS, the Chemical Abstracts Service of the American Chemical Society*

## Outline

Who's it from?
* Palm/HP: needed an HTML5 rival to iPad & desktop apps
* Scott Miles (architect) & Steve Orvell (team member) were early contributors to Dojo

Why A New Framework?
* fast rendering
* equally supports mobile & desktop
* composition of objects (scalable to large apps & varying screen sizes)
* dynamic widget creation
* design-tool friendly (April '12)

What is Enyo Not?
* not for enhancing web pages; it's a framework for writing web apps
* not for older browsers (IE8+, most Chrome/Safari, most Firefox)

Enyo Constructors are simple to write
```javascript
enyo.kind({
name: "Foo"
})
var f = new Foo();
```

Subclassing is easy, and doesn't require a new directory.
```javascript
enyo.kind({
name: "Bar",
kind: "Foo",
newProperty: 42
});
```

Observation: rendering engines are fast at turning big block of HTML to a DOM, slow to update DOM
* only HTML is stub (dependencies handled by depends.js); root object instantiates all others, directly or indirectly
* dynamic widget creation is similar to quasi-static widget creation
	(This style can be used in Dojo.)

Objects interact in 3 ways
* creation & deletion
* message passing
* (visual objects) layout

Message Passing requires
* sender has been created and not yet destroyed
* receiver has been created and not yet destroyed
* channel has been set up and not yet torn down
	So why not make owner the message passing channel?

Component: Enyo Kind that participates in lifecycle & message-passing

Control: Enyo kind associated w/ 1 or more DOM Elements (like a Dijit), and so participates in layout


Ownership/Containment example:
* app
* header
* radio buttons
* scroller
* list
* ajax

Owners call ordinary methods on their children. Familiar, flexible.

DOM events bubble as usual

Custom Events sent to owners.  No addListener machinery -> must check that strings match

PubSub -> Enyo:
* Components publish to owners. No subscription to events, just methods.

* Since owners don't need to contain children, dialogs can be packaged with the Controls that invoke them.

Example: Date picker
![DatePicker graphic](https://sdk.webosarchive.org/enyojs/enyo2.6/docs/developer-guide/assets/dg-controls-date-picker.png)

a Control with one DOM Element:
```javascript
{tag: "hr"}
```
or
```javascript
{className: "sidebar"}
````


a Control with multiple DOM Elements:
```javascript
{content: "<ol><li>alpha</li><li>beta</li></ol>"}
```

a Control with many DOM nodes:
```javascript
{kind: "HtmlContent", srcId: "myContent", onLinkClick: "htmlContentLinkClick"}
````
index.html:
```javascript
<div id="myContent">a lot of HTML...which ends here</div>
```

a Control from a framework widget:
```javascript
{kind: "Button", caption: "OK", onclick: "okClick"}
```

a Control from your agglomeration of widgets:
```javascript
{kind: "MyControlPanel"}
```

It's turtles all the way down! (Everything is a Control.)


Why JavaScript alone and no HTML?
* building DOM goes faster using innerHTML than DOM methods
* build DOM tree all at once
* easier to read

panel of Controls same as standard widget -> start with standard widget, replace with custom. \
example: ?

Layout: encourages but does not require CSS3 Flex Boxes (not emulated for IE8/9)

Ajax API same as Control API. \
Any async API (e.g. WebSQL) same as Control API. \
A list shouldn't care whether it's receiving info from a button press, WebSQL callback, or AJAX callback.


Combining With Other Frameworks
* orthogonal to module loaders
* wrap POJSO w/ thin Enyo facade (manually for now, auto in future). Methods map directly. Custom Events must be added as needed.

Message-Passing \
Dojo: Pub-Sub or ?. MUX.  Separate objects for separate channels. Stovepiped. \
Enyo: Owner. MUX, transform.  One object may support multiple channels

[show example code]

Status as of early February 2012:
* 1.0 (Webkit-only) complete
* 2.0 (core only)
--------------
Module Pattern \
Facade Pattern \
Mediator Pattern
