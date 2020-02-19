---
title: Alumni Weekend
description: Alumni Weekend from 2011 – 2014, and 2020
category: Signature
layout: full-page

#### date of the latest event to sort
date: 2020-04-3
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Alumni Weekend' | reverse %}

{% include event-listing.html %}
