---
title: Martin Luther Jr. Convocation
description: Annual convocation celebrates the life and dream of Dr. Martin Luther King Jr.
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2020-02-10"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','MLK' | reverse %}

{% include event-listing.html %}
