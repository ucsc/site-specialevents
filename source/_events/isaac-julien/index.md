---
title: "An Evening at the Tate Britain Featuring Professor Isaac Julien"
description: "UC Santa Cruz Chancellor Cynthia Larive, in partnership with the leadership of UC UK, invites you and a guest to a special evening at the Tate Britain to celebrate the first major UK exhibition by one of today's most compelling artists and filmmakers—UC Santa Cruz Professor Sir Isaac Julien."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2023-04-27"

permalink: /:collection/isaac-julien
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','isaac' | reverse %}

{% include event-listing.html %}
