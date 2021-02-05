---
title: Kraw Lecture Series on Science and Technology
description: "Please join us for our second Kraw lecture focused on climate change. Dan Costa, distinguished professor of ecology and evolutionary biology and director of the Institute of Marine Sciences at UC Santa Cruz, will share how the changing climate is associated with a reduction in true Antarctic species like Adélie and emperor penguins and crabeater seals, while subantarctic species like elephant seals and chinstrap penguins are becoming more common."
category: Lecture
layout: full-page


#### date of the latest event to sort
date: "2021-02-16"

permalink: /:collection/kraw-lecture
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Kraw Lecture' | reverse %}

{% include event-listing.html %}
