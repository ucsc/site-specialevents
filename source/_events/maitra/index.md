---
title: Sidhartha Maitra Memorial Lecture
description: "The Maitra lecture series, established in 2001, seeks to enrich the intellectual life of UC Santa Cruz and the Santa Cruz community."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2020-02-23"

permalink: /:collection/maitra
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Maitra' | reverse %}

{% include event-listing.html %}
