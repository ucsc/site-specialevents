---
title: "Research Center for the Americas: Sharing Futures, Speaking Truths"
description: "Please join us for a celebration with civil rights and feminist icon Dolores Huerta (distinguished honoree) and community organizer Cristina Jiménez (keynote speaker), co-founder of United We Dream, in honor of the 30th anniversary of the Research Center for the Americas (RCA)."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2022-05-06"

permalink: /:collection/rca
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','RCA' | reverse %}

{% include event-listing.html %}
