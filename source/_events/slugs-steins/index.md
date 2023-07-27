---
title: "Slugs & Steins"
description: "Reading Dickens Today with Professor John Jordan"
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2023-07-10"

permalink: /:collection/slugs-steins
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Slugs Steins' | reverse %}

{% include event-listing.html %}
