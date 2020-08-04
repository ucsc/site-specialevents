---
title: "Undiscovered Shakespeare: The Wars of the Roses"
description: "Undiscovered Shakespeare: The Wars of the Roses is a public arts and humanities series that brings professional actors and scholars together with the public for live readings and discussion of the works that made Shakespeare famous in the London theater."
category: Notable
layout: full-page


#### date of the latest event to sort
date: "2020-08-05"

permalink: /:collection/seeds
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Shakespeare' | reverse %}

{% include event-listing.html %}
