---
title: "A Fortress in Brooklyn"
description: "Join authors Michael Casper and Nathaniel Deutsch in conversation with Lila Corwin Berman about Casper and Deutsch’s new book A Fortress in Brooklyn."
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2020-05-19"

permalink: /:collection/fortress-brooklyn
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Fortress Brooklyn' | reverse %}

{% include event-listing.html %}
