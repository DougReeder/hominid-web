---
title: Scratch! for webOS review
date: 2010-11-04
tags:
  - application
  - webOS
---

The necessary functions for a word processor are here, but the user interface could use some thought.

The initial scene is largely blank. It turns out to be a list of documents. This list really needs an `emptyTemplate` to explain that it’s an (empty) list of documents, and the user should create a new document, import from the file system, or import from Google Docs.

Given that there’s a command menu button to create a new document, the “Add Scratch” item at the bottom of the list is superfluous. Since you can create new documents by importing from the file system or from Google Docs, it’s also inconsistent.

Tapping the import button or selecting the Import option in the app menu gets you an import scene with drawers for importing from a local file, a URL, and Google Docs. Tapping the import button should pop up a submenu with these three choices. The app menu should have these three choices as direct subitems to Import. Selecting the “import from file” option should pop up the File Picker directly. Selecting the “import from URL” option should pop up a scene with just the “URL” section of the import scene. Selecting the “import form Google Docs” option should pop up a scene with just the “Google Docs” section of the import scene.

After you import a file, there is no indication whether import succeeded or failed. You’re just back at the import scene. The document is not displayed, as it should be.

A text file imported from the file system has no title; it should initially be set to the filename.

It’s hard to understand, when creating a new document, how “Folder” is supposed to work. It’s not a list selector, it’s not a text field. Tapping it pops up a dialog with two buttons whose purpose is opaque. If you fiddle enough, you get a text field, but it’s not clear what’s happening. Nor does Folder seem to be used anywhere else in the application.

At the bottom of the new document scene is an unlabeled text field of uncertain purpose. It turns out to be the body of the document.

The “Navigate > End” command does not appear to work.

It does not appear possible to set the style, and then type text in that style (aside from bold, italic and underline) – you must enter text, then apply styling. Styling is by default applied to “this block”. There’s no indication of what a “block” is.

If there’s a problem exporting to Google Docs, the spinner keeps spinning after the dialog goes away, so it’s difficult to know that you should type a correction in your username or password, rather than wait. After exporting is successful, you’re left at the export scene, as you might want to export again (to e-mail?) – you must use the “back” gesture to get back to your document.
