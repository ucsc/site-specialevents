---
title: 50th Anniversary Retired Staff and Faculty Picnic
description: "Celebrate UC Santa Cruz's 50th Anniversary at a Retired Staff and Faculty Picnic."
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2015-09-15"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','50th Picnic' | reverse %}

{% include event-listing.html %}
