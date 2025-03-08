---
title: Sidhartha Maitra Memorial Lecture
description: "The Maitra lecture series, established in 2001, seeks to enrich the intellectual life of UC Santa Cruz and the Santa Cruz community."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2025-03-13"

permalink: /:collection/maitra
---

<section id="main-content">
<div class="grid-container large">
<section class="heading content-centered">
<h2 class="underline">{{ page.title }}</h2>
<p>The series is named for Dr. Sidhartha Maitra, a mathematician, engineer, and entrepreneur who had a deep appreciation of science, humanistic approaches and perspectives. Dr. Anuradha Luther Maitra established the series more than 20 years ago in memory of her late husband. She is an economist, entrepreneur, and generous friend to our campus, having taught at the university and served as UC Santa Cruz Foundation trustee for more than two decades, including a term as president.</p> 

<p>The Maitra Memorial Lecture Series has established itself by virtue of the renown of its speakers and their creative approaches to universalism, tolerance, societal responsibility, community engagement, and the scientific method. Those areas capture the values that Sid and Anu shared and also reflect our campus values.</p>
</section>





<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Maitra' | reverse %}

{% include event-listing.html %}
