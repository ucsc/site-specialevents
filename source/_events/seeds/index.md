---
title: "SEEDS of Something Different: A Research University with Experimental Roots (2000-2010)"
description: "A live and participatory event series featuring readings from the new illustrated book Seeds of Something Different: the Oral History of the University of California, Santa Cruz."
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2020-07-08"

permalink: /:collection/seeds
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Seeds' | reverse %}

{% include event-listing.html %}
