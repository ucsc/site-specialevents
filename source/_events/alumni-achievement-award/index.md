---
title: "Alumni Achievement Award"
description: "In 1984, the UCSC Alumni Office began honoring alumni who have made outstanding contributions to their field. Recipients are alumni of UC Santa Cruz who have rendered special and outstanding service to UCSC or who, by personal achievement, have brought distinction to the university."
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2021-05-25"

permalink: /:collection/atwood
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Alumni Achievement Award' | reverse %}

{% include event-listing.html %}
