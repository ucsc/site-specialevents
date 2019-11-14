---
title: Silicon Valley Campus Grand Opening
description: "The opening celebration of the UC Santa Cruz Silicon Valley Campus, a multidisciplinary teaching and research hub"
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2016-09-28"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Silicon Valley Campus' | reverse %}

{% include event-listing.html %}
