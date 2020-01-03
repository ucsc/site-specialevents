---
title: Foundation Medal/Living Legends
description: The UC Santa Cruz Foundation Medal recognizes individuals of exceptionally distinguished achievement whose work and contribution to society exemplify the vision and ideals of UC Santa Cruz
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2019-02-02"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Living Legends' | reverse %}

{% include event-listing.html %}
