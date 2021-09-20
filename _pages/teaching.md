---
layout: page
permalink: /teaching/
title: Teaching
description: 
nav: true
---

    <!-- Generate cards for each project -->
<div class="grid">
   {% for project in site.teaching  %}
      {% include projects.html %}
   {% endfor %}
 </div>