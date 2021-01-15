---
title: "Beyond the End of the World Lecture Series: Nick Estes and Melanie Yazzie of The Red Nation"
description: "Nick Estes (Lower Brule Sioux) and Melanie Yazzie (Diné) of The Red Nation, respond to the prompt: What lies beyond dystopian catastrophism, and how can we cultivate radical futures of social justice and ecological flourishing?"
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2021-01-21"

permalink: /:collection/university-forum
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Beyond' | reverse %}

{% include event-listing.html %}
