---
title: Special Events Archive
layout: full-page
---


<section class="grid-centered">
<div class="grid-container large">
<h2>Past Signature Events</h2>
<div class="generic-card-list">
{% assign items_grouped = site.events | group_by: 'category' | %}
{% for group in items_grouped %}
<a class="generic-card" href="javascript:void(0)" aria-label="">
<div class="card-text">
<div class="image">
<img src="{{ site.baseurl }}{{ group.billboard.image }}" />
</div>
<h4 class="underline">{{group.name}}</h4>
<form action="#" class="cell large-12 yeardropdown">
<select onchange="javascript:location.href = this.value;">
<option>Select a year</option>
{% for item in group.items %}
<option value="{{ site.baseurl }}{{ item.url }}">{{ item.billboard.year }}</option>
{% endfor %}
</select>
</form>
</div>
</a>
{% endfor %}
</div>
</div>
</section>






{% assign items_grouped = site.events | group_by: 'category' %}
{% for group in items_grouped %}
<h3>{{group.name}}</h3>
{% for item in group.items %}
<p>{{item.billboard.year}}</p>
{% endfor %}
{% endfor %}



