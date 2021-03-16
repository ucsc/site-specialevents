---
title: "Sweetness in the Blood: Race, Risk, and Type 2 Diabetes"
description: "In launching the new book, Sweetness in the Blood: Race, Risk, and Type 2 Diabetes, James Doucet-Battle, a medical anthropologist and Assistant Professor of Sociology at the UC Santa Cruz, takes up the important task of weaving together complex strands of theory, practice, and experience into a coherent narrative about Type 2 diabetes, a seemingly simple disease to understand"
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2021-04-07"
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Sweetness in the Blood' | reverse %}

{% include event-listing.html %}
