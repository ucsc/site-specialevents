---
title: The attics of our lives - UC Santa Cruz
description: A preview exhibit of the Grateful Dead Archive
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2011-11-5"

permalink: /:collection/attics
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Attic' | reverse %}

{% include event-listing.html %}
