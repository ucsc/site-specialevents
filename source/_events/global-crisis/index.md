---
title: "An evening with Jennifer Brea"
description: "Join Academy-Award Nominated Filmmaker Jennifer Brea and anthropologist and writer Megan Moodie for an evening of conversation and reflection on chronic illness, the global crisis of care, and Covid-19."
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2021-01-14"

permalink: /:collection/university-forum
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Brea' | reverse %}

{% include event-listing.html %}
