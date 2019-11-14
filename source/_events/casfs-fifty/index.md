---
title: First 50 Celebration, UCSC Farm & Garden
description: The First Fifty Celebration’s three days of events combine an engaging lineup of speakers, workshops, tours, and music, with great local food and time for mingling with old-timers and newcomers to the sustainable agriculture community
category: Signature
layout: full-page


#### date of the latest event to sort
date: "2017-07-28"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','50 Farm & Garden' | reverse %}

{% include event-listing.html %}