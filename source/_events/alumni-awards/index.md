---
title: "UC Santa Cruz Alumni Awards Celebration"
description: "Introducing a reimagined campus experience for UC Santa Cruz alumni. Return to the Redwoods welcomes alumni, friends, and family back to UCSC for a weekend of celebration, exploration, and an opportunity to relive the beauty of our campus. Reserve your apartment or residence hall room and join us in the Redwoods."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2023-10-27"

permalink: /:collection/alumni-awards
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Alumni Awards' | reverse %}

{% include event-listing.html %}
