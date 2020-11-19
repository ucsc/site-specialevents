---
title: "A Public Dialogue: Living in a Frayed Democracy"
description: "We’re all impacted by this deeply polarized moment. How do we navigate life while political and cultural divisions are dangerously amplified and the world’s oldest democracies are under threat?"
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2020-12-05"

permalink: /:collection/laser
published: true
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Frayed Democracy' | reverse %}

{% include event-listing.html %}
