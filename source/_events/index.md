---
title: Special Events Archive
layout: full-page
---

<section class="grid-centered">
<div class="grid-container medium">
<h2 class="underline">Signature Events</h2>
{% assign items_grouped = site.events | group_by: 'category' %}
{% for group in items_grouped %}
<div class="yoyo">
<h4>{{group.name}}</h4>
<div style="margin-bottom: 1rem; border-bottom: 1px solid #ddd;">
{% for item in group.items reversed %}
<a href="{{ site.baseurl }}{{ item.url }}">{{ item.billboard.year }}</a>
{% endfor %}
</div>
</div>
{% endfor %}

