---
title: The Original Thinkers Series
description: "Original thinkers from one great university ask the big questions and push boundaries in talks that illustrate the breadth of UC Santa Cruz research."
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2014-05-31"

permalink: /:collection/original-thinkers
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Original Thinkers' | reverse %}

{% include event-listing.html %}
