---
title: "University Forum: Elections: What Are They Good For?"
description: "The November 2020 election provides an historic opportunity to shape our future, both in California and the nation. The race for President and Congressional races stands to fundamentally shape the future of race relations, environmental protections, immigration reform, healthcare and health disparities, employment conditions and labor regulation, along with efforts to address the pandemic."
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2020-09-15"

permalink: /:collection/seeds
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','University Forum' | reverse %}

{% include event-listing.html %}
