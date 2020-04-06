---
title: Founders Celebration
description: "A celebration of the alumni and faculty who exemplify the best of UC Santa Cruz."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2018-10-20"

permalink: /:collection/founders
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Founders' | reverse %}

{% include event-listing.html %}
