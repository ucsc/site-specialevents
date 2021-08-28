---
title: Kraw Lecture Series on Science and Technology
description: "The past, present, and future of DNA-based forensics."
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2021-09-22"

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
