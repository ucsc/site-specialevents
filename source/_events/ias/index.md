---
title: "Visualizing Abolition"
description: "The Institute of the Arts and Sciences and The Humanities Institute are pleased to present a poetry reading and conversation with award-winning American poet Reginald Dwayne Betts and renowned social psychologist Craig Haney, moderated by Professor Gina Dent."
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2021-05-18"

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
