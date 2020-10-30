---
title: "Visualizing Abolition with Angela Y. Davis and Gina Dent"
description: "Angela Y. Davis and Gina Dent, noted antiprison activists, scholars, and educators, for an online conversation about critical issues in the arts, visual culture, and abolition."
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2020-11-17"

permalink: /:collection/ias
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','IAS' | reverse %}

{% include event-listing.html %}
