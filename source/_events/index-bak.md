---
title: Past Events
layout: full-page
published: false
---
{: .underline}
## {{ page.title }}


### Signature Events

<div class="archive-container">
{% assign items_grouped = site.events | where: 'event-type','Signature Event' | sort: 'date' | group_by: 'category' %}
{% for group in items_grouped %}
	<h4>{{group.name}}</h4>
		<div class="archive-year">
			<ul>
			{% for item in group.items reversed %}
				<li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.billboard.year }}</a></li>
			{% endfor %}
			</ul>
		</div>
{% endfor %}
</div>


### Notable Events

<div class="archive-container">
{% assign items_grouped = site.events | where: 'event-type','Notable Event' | sort: 'date' | group_by: 'category' %}
{% for group in items_grouped %}
	<h4>{{group.name}}</h4>
		<div class="archive-year">
			<ul>
			{% for item in group.items reversed %}
				<li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.billboard.year }}</a></li>
			{% endfor %}
			</ul>
		</div>
{% endfor %}
</div>


### Lecture Series

<div class="archive-container">
{% assign items_grouped = site.events | where: 'event-type','Lecture Series' | sort: 'date' | group_by: 'category' %}
{% for group in items_grouped reversed %}
	<h4>{{group.name}}</h4>
		<div class="archive-year">
			<ul>
			{% for item in group.items reversed %}
				<li><a href="{{ site.baseurl }}{{ item.url }}">{{ item.billboard.year }}</a></li>
			{% endfor %}
			</ul>
		</div>
{% endfor %}
</div>


