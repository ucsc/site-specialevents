---
title: "The Deep Read: Margaret Atwood"
description: "The Deep Read: Margaret Atwood Live September 22"
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2020-09-22"

permalink: /:collection/atwood
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Margaret Atwood' | reverse %}

{% include event-listing.html %}
