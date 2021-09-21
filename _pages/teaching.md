---
layout: page
permalink: /teaching/
title: Teaching
description: 
nav: true
---
<div class="projects">
    <div class="grid">
        {% for project in site.teaching  %}
     	    {% include projects.html %}
	{% endfor %}
    </div>
</div>