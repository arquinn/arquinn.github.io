---
layout: page
permalink: /teaching/
title: Teaching
description: 
nav: true
---
<div class="projects">
    <div class="grid">
    	{% assign syllabuses = site.teaching | where: "category", "syllabus" %}
        {% for project in syllabuses %}
     	    {% include projects.html %}
	{% endfor %}
    </div>
</div>