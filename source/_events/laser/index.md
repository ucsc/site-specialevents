---
title: LASER Talks
description: Leonardo Art & Science Evening Rendezvous (LASER) is an international program bringing together artists, scientists, and scholars for presentations and conversations.
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2020-08-06"

permalink: /:collection/laser
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Laser Talk' | reverse %}

{% include event-listing.html %}
