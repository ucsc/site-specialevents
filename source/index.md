---
title: UC Santa Cruz Special Events
description: Special events homepage
layout: home-page
---

<!-- Single event -->
<!--<section class="content-w-media right">
  {% assign event-list = site.events | sort: 'date' | where: 'tags','Home' %}
    {% for event in event-list limit: 1 %}
      {% if event.tag != 'Featured' %}
        <div class="grid-container large">
          <div class="inner">
            <div class="content">
                <h2 class="underline"><h4 class="header underline">{{ event.title }}</h4></h2>
                <p>
                  Date: <strong>{{ event.billboard.month }} {{ event.billboard.date | truncate: 2,'' }} </strong><br>
                  <i class="fa fa-map-marker turquiose-text"></i> {{ event.location.address }}
                </p>
                <p>{{ event.description }}</p>
                <div class="content-foot-links">
                    <a href="{{site.baseurl}}{{ event.url }}.html" class="btn-link">Event Details</a>
                </div>
            </div>
            <div class="media">
                <img src="{{ site.baseurl }}{{ event.billboard.image }}" alt="{{ event.title }}"/>
            </div>
          </div>
        </div>
      {% endif %}
    {% endfor %}
</section>
-->

<!-- Single event -->

<!-- Three current events: Tag Home to display -->
<!-- <section id="main-content">
  <div class="grid-container large">
    <section class="heading">
      <h2 class="underline">Signature Events</h2>
    </section>
    <div class="events-card-list fade-out-siblings">
      {% assign event-list = site.events | sort: 'date' | where: 'tags','Home' %}
      {% for event in event-list limit: 3 %}
        {% if event.tag != 'Featured' %}
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
                  {% when 'TBD' %} TBD
                  {% when 'Virtual Event' %} VE
                  {% endcase %}
                </div>
                  <div class="day">{{ event.billboard.date | truncate: 2,'' }}</div>
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
                      <i class="fa fa-clock-o turquiose-text"></i>{{ event.billboard.month }} {{ event.billboard.date }}, {{ event.billboard.year }} {% if event.billboard.starttime != null %} at {% endif %}{{ event.billboard.starttime }} 
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
        {% endif %}
      {% endfor %}
    </div>
  </div>
  -->
  <!-- End three current events: Tag Home to display -->
  <div class="more no-border">
    <a class="primary button" href="https://calendar.ucsc.edu/">
      See Other Events
    </a>
  </div>
<!-- </section> -->
