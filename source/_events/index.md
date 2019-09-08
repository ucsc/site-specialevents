---
title: Special Events Archive
layout: full-page
---
<section class="grid-centered">
    <div class="grid-container large">
    <h2>Past Signature Events</h2>
        <div class="generic-card-list">
        {% assign event-tag = site.events | where: 'tags','Signature Series' %}
        {% assign event-cat = site.events.catetory %}
            <a class="generic-card" href="javascript:void(0)" aria-label="">
                 {% if event.category == event.cat %}
                 {% for event in event-tag limit: 1 %}
                    <div class="image">
                    <img src="{{ site.baseurl }}{{ event.billboard.image }}" />
                    </div>
                    <div class="card-text">
                    <h4 class="underline">{{ event.category }}</h4>
                    <p>{{ event.description }}</p>
                    {% endfor %}
                    <form action="#" class="cell large-12 yeardropdown">
                    <select>
                    <option>Select a year</option>
                    <option>2015</option>
                    </select>
                    </form>
                    </div>
                    {% endif %}
                    </a>
            
        </div>
    </div>
</section>
