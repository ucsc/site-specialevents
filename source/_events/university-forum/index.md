---
title: "University Forum"
description: "Immigration policies in the United States: Understanding violence nation-wide and in Santa Cruz"
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2021-04-21"

permalink: /:collection/university-forum
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','University Forum' | reverse %}

{% include event-listing.html %}
