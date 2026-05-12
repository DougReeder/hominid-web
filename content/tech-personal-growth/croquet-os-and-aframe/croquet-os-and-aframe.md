---
title: Multiuser WebXR using Croquet OS & A-Frame
description: There's a new network option for A-Frame
date: 2023-04-25
tags:
  - webXR
  - VR
previewImage:
  url: /img/xalot-world.png
  width: 747
  height: 513
---
_Croquet OS_ (then [_Multisynq_], now [_Forerunner_]) is real-time synchronization-as-a-service (and not restricted to WebXR). You don't run your own synchronization server; large traffic volumes require payment.
[Update: [The original Croquet is now open-source][Croquet], and you can choose to run your own reflector, to be independent of the Forerunner network.]

[_Multisynq_]: https://multisynq.io/
[_Forerunner_]: https://forerunnerprotocol.xyz/
[Croquet]: https://github.com/croquet/croquet#croquet-

Croquet does *not* handle voice nor text chat, though you *could* write a text chat feature using it.
Thus, Croquet is good for writing tools which augment other multiuser experiences.
For a full, standalone immersive multi-user experience, it may be less effort to extend some other technology, such as writing a [custom Hubs client].

[custom Hubs client]: https://docs.hubsfoundation.org/dev-client-basics

Croquet is designed around keeping state in its own Model objects, which have a number of restrictions so each client maintains a bit-identical simulation.
Web apps which keep all state and modeling in Croquet Models avoid the who-grabbed-it-first problem.

Croquet has Views to handle display and user input, which can differ between users. They mediate between Models and the rest of your code.

Croquet keeps snapshots on the network, so sessions can be resumed, even if no clients are still online. (Unlike networked-aframe, if I understand it correctly.)
Croquet has its _Worldcore_ library to handle scene graph, position, rotation, etc. Worldcore can render using their _webgl_ package or Three.js. Croquet packages cover most, but not all, of what Three.js does. There is no directory of third-party components available for use.

[A-Frame] maintains a scene graph using Three.js, so you won't use Worldcore with A-Frame. You can the [A-Frame Croquet Component] to synchronize the attributes of A-Frame entities

[A-Frame]: https://aframe.io/
[A-Frame Croquet Component]: https://github.com/NikolaySuslov/aframe-croquet-component

Off-the-shelf A-Frame components maintain state internally. When user input or world modeling (such as collision detection) happens in A-Frame, a synthetic DOM event must be emitted for a View to receive. Typically, the View will need to publish a message to one or more Models. The message must be sent over the network to every client. The Model(s) (on each client) would typically publish a message to other Models or their Views, and the View(s) (on each client) will set attributes on A-Frame objects. This can make debugging tedious, but delay comes mainly from the network.

You could rewrite A-Frame components to keep state in Croquet Models, but at that point it may make more sense to switch to Worldcore.

The [A-Frame State Component] provides a centralized store for state data. An analogous component with similar syntax could be written for Croquet, but that hasn't happened yet.

[A-Frame State Component]: https://www.npmjs.com/package/aframe-state-component

The [A-Frame Croquet Component] allows a world to define an [HTML Template] for user avatars. A different `color` attribute is applied to each user's avatar.
Most primitives (including [gltf-model]) don't use `color`, so the A-Frame Croquet Component will attempt to tint their materials, using the `color` attribute.

[HTML Template]: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/template
[gltf-model]: https://aframe.io/docs/1.7.0/components/gltf-model.html

[{% image "./xalot-world.png", "Xalot world", [750, "auto"] %}](https://xalot.surge.sh/ "Xalot world")

For other users to join the *same* session, a current user must share the URL, including the query string.

Croquet Models are typically synced 20 times per second, not coupled to A-Frame `tick()`. That's fine for low-speed syncing, for example, seeing which way another player's avatar is facing. That's also fine for detecting whether a moving object collides with a stationary object. A-Frame collision detection will not be coupled to Croquet syncing, so high-speed simulation will have issues. For example, calculating if one player's fireball collides with the other player's dodging avatar will depend on which client the calculation is done. Likewise, one client might calculate that one player had grabbed some object first, while another client might calculate that another player had grabbed it first.

A number of edge cases have to be dealt with
* Some attribute types could be serialized, but code still needs to be added to aframe-croquet-component.
* A-Frame components may have non-serializable attributes. HTMLElements are not serializable, so their ID is saved instead. Other non-serializable attributes will cause errors.
* Procedural generation of a world requires waiting until random seeds can be obtained from a model (as only Croquet Models can generate the same random number sequence on every client).

It's easy to [throw together a multi-user experience][share entities] using existing A-Frame components and your A-Frame expertise. However, as an immature library, you might have to code and submit a PR to get advanced capabilities. And it may not be the best choice for an action game or polished experience.

[share entities]: https://github.com/NikolaySuslov/aframe-croquet-component#how-to-share-an-entity-in-an-a-frame-scene-with-other-users

See also this [Comparison of Croquet with Networked A-Frame and Mozilla Hubs](https://aframe.wiki/en/#!pages/multiuser.md#Comparison_Table).

