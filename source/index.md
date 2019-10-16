---
title: UC Santa Cruz Special Events
description: Special events homepage
layout: home-page
---

<section class="content-centered">
<div class="grid-container large">
<p>Intro copy: <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam molestiae voluptate quisquam, distinctio ducimus, ipsum perspiciatis vitae eaque ut maiores adipisci possimus et a nobis explicabo, obcaecati! In, voluptatibus harum.</p>
</div>
</section>



<section id="main-content">
<div class="grid-container large">
<section class="heading">
<h2 class="underline">Special Events</h2>
</section>

<div class="events-card-list fade-out-siblings">
{% assign event-list = site.events | sort: 'date' | where: 'tags','Current' | reverse %}
{% for event in event-list limit: 3 offset: 1 %}

<a class="events-card" href="{{site.baseurl}}{{ event.url }}.html">
<div class="events-card-content">
<div class="date">
<div class="month">
{% assign m = event.billboard.month %}
{% case m %}
{% when 'January' %} Jan
{% when 'February' %} Feb
{% when 'March' %} Mar
{% when 'April' %} Apr
{% when 'May' %} May
{% when 'June' %} Jun
{% when 'July' %} Jul
{% when 'August' %} Aug
{% when 'September' %} Sept
{% when 'October' %} Oct
{% when 'November' %} Nov
{% when 'December' %} Dec
{% endcase %}
</div>
<div class="day">{{ event.billboard.date | truncatewords: 1,'' }}</div>
</div>

<div class="inner">
<div class="image">
<img src="{{ site.baseurl }}{{ event.billboard.image }}" alt="{{ event.title }}"/>
</div>
<div class="card-content">
<h4 class="header underline">{{ event.title }}</h4>
<p class="event-description">{{ event.description }}</p>
<div class="tags">
<span class="topics-title">
<div class="time">
<i class="fa fa-clock-o turquiose-text"></i>{{ event.billboard.month }} {{ event.billboard.date }} {% if event.billboard.starttime != null %} at {% endif %}{{ event.billboard.starttime }} 
{% if event.billboard.endtime != null %} to {{ event.billboard.endtime }} {% endif %}
</div>
<div class="location">
<i class="fa fa-map-marker turquiose-text"></i> {{ event.location.address }}
</div>
</span>
</div>
</div>
</div>   
</div>
</a>
{% endfor %}
</div>
</div>

<div class="more no-border">
<a class="primary button" href="https://events.ucsc.edu/">
See Other Events
</a>
</div>

</section>
