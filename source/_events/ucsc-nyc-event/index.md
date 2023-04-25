---
title: "An Afternoon with UCSC: Celebrating the work of Beth Stephens"
description: "UC Santa Cruz Dean of the Arts Celine Parreñas Shimizu, in partnership with Art Professor Beth Stephens, invites you to a special evening reception at Performance Space New York."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2023-06-18"

permalink: /:collection/performance-space-ny
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','performance-space-new-york' | reverse %}

{% include event-listing.html %}
