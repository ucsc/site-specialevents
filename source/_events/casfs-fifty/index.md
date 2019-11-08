---
title: First 50 Celebration, UCSC Farm & Garden
description: First 50 Celebration, UCSC Farm & Garden event listing
category: Signature
layout: full-page
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','50 Farm & Garden' | reverse %}

{% include event-listing.html %}