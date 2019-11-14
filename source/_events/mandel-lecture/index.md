---
title: Mandel Lectures
description: "After almost 10 years in space, NASA's Kepler Mission was recently retired, but not without making an indelible imprint on humankind's understanding of the universe."
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2019-06-5"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Mandel Lecture' | reverse %}

{% include event-listing.html %}
