---
title: "Undiscovered Shakespeare: Troilus and Cressida – PT 1"
description: "This three-part virtual reading of one of Shakespeare’s most unusual tragedies continues the “Undiscovered Shakespeare” collaboration between Santa Cruz Shakespeare, The Humanities Institute, and The Shakespeare Workshop."
category: Notable
layout: full-page


#### date of the latest event to sort
date: "2020-06-16"

permalink: /:collection/shakespeare
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Shakespeare' | reverse %}

{% include event-listing.html %}
