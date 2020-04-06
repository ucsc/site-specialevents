---
title: Rachel Carson College dedication and talk
description: Rachel Carson College dedication and talk event listing
layout: full-page

#### date of the latest event to sort
date: "2016-10-06"

permalink: /:collection/rachel-carson-college
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Rachel Carson' | reverse %}

{% include event-listing.html %}
