---
title: "University Forum: The lessons of COVID for global and community health"
description: "The UC Santa Cruz University Forum presents The lessons of COVID for global and community health with Politics Professor Matt Sparke."
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2020-08-04"

permalink: /:collection/seeds
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','University Forum' | reverse %}

{% include event-listing.html %}
