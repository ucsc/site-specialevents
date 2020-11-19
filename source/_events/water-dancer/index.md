---
title: Ta-Nehisi Coates, The Water Dancer
description: "Bookshop Santa Cruz, The Humanities Institute at UC Santa Cruz, and Marcus Books present: A virtual event with Ta-Nehisi Coates, in conversation with Adam Serwer, on Friday, November 20th, at 6:00 p.m. Pacific."
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2020-11-20"

permalink: /:collection/laser
published: true
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Water Dancer' | reverse %}

{% include event-listing.html %}
