---
title: Sinsheimer Distinguished Lecture in Biology
description: The Sinsheimer Distinguished Lectureship in Biology was established in 1992 by Chancellor emeritus Robert L. Sinsheimer and his wife, Karen.
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2016-05-05"
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Sinsheimer' | reverse %}

{% include event-listing.html %}
