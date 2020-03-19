---
title: Margaret Atwood at UC Santa Cruz
description: 'Margaret Atwood to UC Santa (date TBD) where she’ll be in conversation with author Kate Schatz (Stevenson ‘03, Creative Writing), the New York Times-bestselling author of Rad American Women A-Z, as part of Baskin Ethics Lecture Series. Prepare for Atwood’s visit by joining The Deep Read, a new initiative of The Humanities Institute.'
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2020-04-5"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Atwood' | reverse %}

{% include event-listing.html %}
