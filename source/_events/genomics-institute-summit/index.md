---
title: Genomics Institute Summit
description: UC Santa Cruz has pioneered genomics research, using genomes to empower the global scientific community to develop breakthroughs in the areas of health and evolutionary biology
layout: full-page

#### date of the latest event to sort
date: "2017-01-01"

permalink: /:collection/genomics-institute-summit
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Genomics Institute Summit' | reverse %}

{% include event-listing.html %}
