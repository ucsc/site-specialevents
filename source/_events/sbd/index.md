---
title: Scholarship Benefit Dinner
description: "Join us for an inspiring evening as we gather in support of students."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2014-04-25"

permalink: /:collection/sbd
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Scholarship Benefit Dinner' | reverse %}

{% include event-listing.html %}
