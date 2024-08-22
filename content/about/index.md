---js
{
title: "About Doug Reeder",
description: "about the website author",
layout: "layouts/person.njk",
eleventyNavigation: {
  key: "About Me",
  order: 6
},
tags: [],
eleventyComputed: {
  linkedData: function(data) {
		return {
			"@context": "https://schema.org/",
			"@type": "ProfilePage",
			description: data.description,
			url: data.metadata.origin + data.page.url,
			dateCreated: "2023-04-18T12:00Z",
			dateModified: data.dateLastModified,
			mainEntity: Object.assign({
				givenName: "Doug",
				familyName: "Reeder",
				description: "I am a full-stack web developer, WebXR consultant, VR enthusiast, and sometime viking. I push back against gatekeepers and work to give users a “bicycle for the mind”",
				jobTitle: "WebXR Consultant & Full-stack Developer"
				}, data.metadata.author),
			mainContentOfPage: {"@type": "WebPageElement", "cssSelector": "main"}
		};
  },
},
}
---
# About Doug Reeder

{{ linkedData.mainEntity.description }}

Contact me at [{{ metadata.author.email }}](mailto:{{ metadata.author.email }}?subject=Tech%20for%20Personal%20Growth)

Free your head from mundane details with [Notes Together](https://notestogether.hominidsoftware.com/)! Toss in text and pictures. Be confident you can find any note on any device. Take control of your data with remoteStorage. Never spend time tidying up — unless you want to!

On your mobile device or in VR, try [Elfland Glider](https://dougreeder.github.io/elfland-glider/)

My gender pronouns are: he, him, his.

