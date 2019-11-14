---
title: Jerry Garcia's 73rd Birthday
description: Jerry Garcia's 73rd Birthday at the Santa Cruz Museum of Art and History
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2015-08-01"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags',"Jerry Garcia's 73rd Birthday" | reverse %}

{% include event-listing.html %}
