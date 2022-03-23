---
title: "John R. Lewis College Dedication Celebration"
description: "Join us as we celebrate the renaming of College Ten in honor of John R. Lewis. We will celebrate this momentous occasion with powerful speakers and performances, and a call to action to empower our students to seek justice and create necessary trouble in their educational journey and beyond."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2022-05-06"

permalink: /:collection/jrl-celebration
---
<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">{{ page.title }}</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','JRL' | reverse %}

{% include event-listing.html %}
