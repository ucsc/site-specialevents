---
title: UC Santa Cruz Friends Holiday Party 2014
description: 'UC Santa Cruz Friends Holiday Party: Connect and have fun with UC Santa Cruz'
layout: full-page

#### date of the latest event to sort
date: "2014-12-07"

permalink: /:collection/friends-holiday
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Friends Holiday Party' | reverse %}

{% include event-listing.html %}
