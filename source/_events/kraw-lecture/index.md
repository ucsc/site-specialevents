---
title: Kraw Lecture Series on Science and Technology
description: "Featuring acclaimed UC Santa Cruz scientists and technologists who are grappling with some of the biggest questions of our time. Made possible by a generous gift from UC Santa Cruz alumnus George Kraw (Cowell '71, history and Russian literature)."
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2020-07-23"

permalink: /:collection/kraw-lecture
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Kraw Lecture' | reverse %}

{% include event-listing.html %}
