---
title: Unquite minds
description: "A Gala Dinner Spiced with Tantalizing Talks"
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2013-06-1"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Unquite Minds' | reverse %}

{% include event-listing.html %}
