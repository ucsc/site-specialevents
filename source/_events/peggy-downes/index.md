---
title: Peggy Downes Baskin Ethics Lecture Series
description: 'The Peggy Downes Baskin Ethics Lecture Series is a lively forum for the discussion and exploration of ethics-related challenges in human endeavors.'
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2020-04-5"

permalink: /:collection/peggy-downes
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Peggy Downes' | reverse %}

{% include event-listing.html %}
