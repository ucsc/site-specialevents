---
title: Faculty & Staff Campaign Launch
description: Celebrate the public launch of The Campaign for UC Santa Cruz
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2013-10-16"

permalink: /:collection/campaign-celebration
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Campaign Celebration' | reverse %}

{% include event-listing.html %}
