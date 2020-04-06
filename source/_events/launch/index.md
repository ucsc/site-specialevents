---
title: Launch!
description: We launch. Ideas, dreams, passions, big thoughts, lives, careers.
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2014-04-25"

permalink: /:collection/launch
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Launch' | reverse %}

{% include event-listing.html %}
