---
title: A Conversation About Mass Incarceration Solitary Confinement, and the Future of Criminal Justice Reform
description: The Future of Criminal Justice Reform
category: Lecture
layout: full-page
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Criminal Justice Reform' | reverse %}

{% include event-listing.html %}
