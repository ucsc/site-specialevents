---
title: Social Justice Lecture Series
description: "UC Santa Cruz Social Justice lecture series"
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2017-04-07"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Social Justices' | reverse %}

{% include event-listing.html %}
