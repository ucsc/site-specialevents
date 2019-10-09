---
title: A Monument Man in the Courtroom
description: A Monument Man in the Courtroom event listing
layout: full-page
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Ratner Lecture' | reverse %}

{% include event-listing.html %}