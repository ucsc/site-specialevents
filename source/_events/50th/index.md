---
title: UC Santa Cruz 50th Anniversary
description: "In 2015, UC Santa Cruz marks its 50th anniversary with a variety of events, including exhibits of iconic art and photographs, special activities, and a series of events in the fall that will celebrate the campus's roots, demonstrate its growth, and showcase its future."
category: Signature
layout: full-page


#### date of the latest event to sort
date: "2015-01-01"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','50th' | reverse %}

{% include event-listing.html %}
