---
title: From Books to Moocs
description: Books to Moocs event listing
category: Notable
layout: full-page

#### date of the latest event to sort
date: "2014-02-22"

---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Books to Moocs' | reverse %}

{% include event-listing.html %}
