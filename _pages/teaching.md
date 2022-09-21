---
layout: page
permalink: /teaching/
title: Teaching
description:
nav: true
years: [2022-2023, 2021-2022]
terms: [Fall, Winter, Spring]
---
<div class="projects">
    	{% assign syllabuses = site.teaching | where: "category", "syllabus" | sort: 'year'%}

	{% for y in page.years %}
	   <h2 class="year">{{y}}</h2>
	        <div class="grid">
		{% for term in page.terms %}
		    {% for project in syllabuses %}
		        {% if project.year == y %}
			   {% if project.term == term %}
			       {% include projects.html %}
			   {% endif %}
		        {% endif %}
	 	    {% endfor %}
		{% endfor %}
		</div>
	{% endfor %}
</div>