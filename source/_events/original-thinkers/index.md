---
title: The Original Thinkers Series
description: Please join us for an evening of conversation and connection
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2014-05-31"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Original Thinkers' | reverse %}

{% include event-listing.html %}
