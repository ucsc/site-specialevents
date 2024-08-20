---
title: Sidhartha Maitra Memorial Lecture
description: "The Maitra lecture series, established in 2001, seeks to enrich the intellectual life of UC Santa Cruz and the Santa Cruz community."
category: Signature
layout: full-page

#### date of the latest event to sort
date: "2020-02-23"

permalink: /:collection/maitra
---

<section class="content-centered">
  <div class="grid-container large">
      <section class="heading">
      	<h2 class="underline">{{ page.title }}</h2>
    	</section>
      <p>Dr. Sidhartha Maitra was a mathematician, engineer, and entrepreneur with a scientific appreciation of humanistic approaches and perspectives. Dr. Anuradha Luther Maitra established the series in memory of her late husband. She is an economist, entrepreneur, and generous friend to our campus, having taught at the university and served as UC Santa Cruz Foundation trustee for more than two decades, including a term as president. </p>
  </div>
</section>




<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Maitra' | reverse %}

{% include event-listing.html %}
