---
title: Flatté Lecture in Science
description: "Stanley Flatté Memorial Lecture presented by the UC Santa Cruz Department of Physics. Don't really have a description for this one.  I can ask Branwyn or Eva if they have a better description of this lecture."
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2019-11-18"

permalink: /:collection/flatte-lecture
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Flatté Lecture' | reverse %}

{% include event-listing.html %}
