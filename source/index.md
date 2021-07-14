---
title: UC Santa Cruz Special Events
description: Special events homepage
layout: home-page
---

<!-- Three current events: Tag Home to display -->
<section id="main-content">
  <div class="grid-container large">
    <section class="heading">
      <h4>Check back here soon for upcoming fall events? Let me know if that works for you!</h4>
    </section>
    <!-- <div class="events-card-list fade-out-siblings">
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
  <!-- End three current events: Tag Home to display -->
  <div class="more no-border">
    <a class="primary button" href="https://events.ucsc.edu/">
      See Other Events
    </a>
  </div>
<!-- </section> -->
