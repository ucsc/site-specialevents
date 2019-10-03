---
title: The Kraw Lecture Series on Science and Technology
description: The Kraw Lecture Series event listing
layout: full-page
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Kraw Lecture' | reverse %}

{% include event-listing.html %}
