---
title: '"By the Light of Burning Dreams: The Triumphs and Tragedies of the Second American Revolution"'
description: '"By the Light of Burning Dreams: The Triumphs and Tragedies of the Second American Revolution" with David Talbot and Margaret Talbot"'
category: Lecture
layout: full-page

#### date of the latest event to sort
date: "2021-10-19"

permalink: /:collection/living-legend

published: false

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Foundation Medal/Living Legends' | reverse %}

{% include event-listing.html %}
