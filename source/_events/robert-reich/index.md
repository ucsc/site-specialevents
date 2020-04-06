---
title: Robert Reich on Saving Capitalism
description: '"Saving Capitalism: For the Many, Not the Few"'
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2016-04-05"

permalink: /:collection/robert-reich
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Robert Reich' | reverse %}

{% include event-listing.html %}
