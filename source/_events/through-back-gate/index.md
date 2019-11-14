---
title: Through the Back Gate
description: "Insider’s view of the UC Santa Cruz Farm and UC Santa Cruz Arboretum & Botanic Garden"
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2018-09-8"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Through the Back Gate' | reverse %}

{% include event-listing.html %}
