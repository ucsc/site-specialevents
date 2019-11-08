---
title: The attics of our lives - UC Santa Cruz
description: The attics of our lives event listing
category: Notable
layout: full-page
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Attic' | reverse %}

{% include event-listing.html %}
