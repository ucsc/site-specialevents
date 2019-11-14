---
title: Past Events
layout: full-page
---
{: .underline}
## {{ page.title }}


### Signature Events

{% assign items_grouped = site.events |  sort: 'date' | where: 'category','Signature' %}
<div class="archive-container">
{% for group in items_grouped reversed %}
	<div class="archive-year">
		<h4><a href="{{ group.url }}">{{group.title}}</a></h4>
		<p>{{ group.description }}</p>
	</div>
{% endfor %}
</div>


### Notable Events
<div class="archive-container">
{% assign items_grouped = site.events | where: 'category','Notable' | sort: 'date' %}
{% for group in items_grouped  reversed %}
	<div class="archive-year">
		<h4><a href="{{ group.url }}">{{group.title}}</a></h4>
		<p>{{ group.description }}</p>
	</div>
{% endfor %}
</div>

### Lecture Series
<div class="archive-container">
{% assign items_grouped = site.events | where: 'category','Lecture' | sort: 'date' %}
{% for group in items_grouped reversed %}
	<div class="archive-year">
		<h4><a href="{{ group.url }}">{{group.title}}</a></h4>
		<p>{{ group.description }}</p>
	</div>
{% endfor %}
</div>
