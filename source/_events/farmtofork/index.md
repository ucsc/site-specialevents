---
title: Farm & Garden
description: UC Santa Cruz Farm & Garden Benefit Dinner
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2018-08-19"


permalink: /:collection/farmtofork
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Farm & Garden' | reverse %}

{% include event-listing.html %}
