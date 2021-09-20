---
layout: page
permalink: /teaching/
title: teaching
description: 
nav: true
---

 <!-- Display projects without categories -->
    {% assign sorted_projects = site.projects | sort: "importance" %}
    <!-- Generate cards for each project -->
     <div class="grid">
        {% for project in sorted_projects %}
          {% include projects.html %}
        {% endfor %}
 </div>