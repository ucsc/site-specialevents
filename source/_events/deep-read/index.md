---
title: The Deep Read
description: 'Welcome to The Deep Read, a new program by The Humanities Institute at UC Santa Cruz that invites curious minds to think deeply about literature, art, and the most pressing issues of our day. We’ll read books from a wide range of genres, exploring their implications on our politics, inner lives, and communities.'
category: Notable
layout: full-page


#### date of the latest event to sort
date: "2020-04-18"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<p class="text-center">{{ page.description }}</p>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Universe' | reverse %}

{% include event-listing.html %}
