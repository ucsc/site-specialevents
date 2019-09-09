---
title: Special Events Archive
layout: full-page
---


{% assign event-cat = site.events | group_by: 'category' %}
{% for item in event-cat %}
{{ item.name }}
{% assign event-tag = site.events | where: 'event-type','Signature Series' %}
{% for event in event-tag  %}
{{ event.billboard.year  }}
{% endfor %}
{% endfor %}


<section class="grid-centered">
<div class="grid-container large">
<h2>Past Signature Events</h2>
<div class="generic-card-list">
{% assign event-tag = site.events | where: 'event-type','Signature Series'  %}
{% assign event-cat = site.events.category %}
{% if event.category == event.cat %}
{% for event in event-tag %}
<a class="generic-card" href="javascript:void(0)" aria-label="">
<div class="image">
<img src="{{ site.baseurl }}{{ event.billboard.image }}" />
</div>
<div class="card-text">
<h4 class="underline">{{ event.category }}</h4>
<p>{{ event.description }}</p>
<form action="#" class="cell large-12 yeardropdown">
<select onchange="javascript:location.href = this.value;">
<option>Select a year</option>
<option value="{{ site.baseurl }}{{ event.url }}">{{ event.billboard.year }}</option>
</select>
</form>
</div>
</a>
{% endfor %}
{% endif %}
</div>
</div>
</section>


<section class="grid-centered">
<div class="grid-container large">
<h2>Past Signature Events</h2>
<div class="generic-card-list">
{% assign event-tag = 'Signature Series'  %}
{% assign event-cat = site.events | group_by: "category" %}
{% if site.events.event-type == event-tag %}
{% for event in event-cat %}
<a class="generic-card" href="javascript:void(0)" aria-label="">
<div class="image">
<img src="{{ site.baseurl }}{{ event.billboard.image }}" />
</div>
<div class="card-text">
<h4 class="underline">{{ event.category }}</h4>
<p>{{ event.description }}</p>
<form action="#" class="cell large-12 yeardropdown">
<select onchange="javascript:location.href = this.value;">
<option>Select a year</option>
<option value="{{ site.baseurl }}{{ event.url }}">{{ event.billboard.year }}</option>
</select>
</form>
</div>
</a>
{% endfor %}
{% endif %}
</div>
</div>
</section>


