---
title: Robert Reich on Saving Capitalism
description: "lease join us as we dedicate Rachel Carson College (formerly College Eight) and celebrate UC Santa Cruz’s legacy of environmentalism"
category: Lecture
layout: full-page
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Robert Reich' | reverse %}

{% include event-listing.html %}
