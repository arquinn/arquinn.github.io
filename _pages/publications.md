---

layout: page
permalink: /publications/
title: Publications
description:
nav: true
---

<div class="publications">
{% assign conferences = site.publications | where: "type", "conference" | reverse %}
{% assign workshops = site.publications | where: "type", "workshop" | reverse %}

<h3> Conferences </h3>
<ol class="bibliography">
{% for paper in conferences %}
  <li>
  <div class="row">
    <div class="abbr">
      {% if paper.abbr %}
        <abbr class="badge">{{paper.abbr}}</abbr>
      {% endif %}
      {% for award in paper.award %}
           <p class="award"> {{award}} </p>
      {% endfor %}
    </div>

    <div class="main">
      <div class="citation">
      <p>
      <strong>{{paper.title}}.</strong>
      {% for author in paper.authors %}
        {% unless forloop.last %}
	   {% if author == site.scholar.name %}
	      <em>{{author}}</em>,
	   {% else %}
	      {{author}},
	   {% endif %}
	{% else %}
 	   {% if author == site.scholar.name %}
	      <em>{{author}}</em>.
	   {% else %}
	      {{author}}.
	   {% endif %}
	{% endunless %}
      {% endfor %}
      In {{paper.booktitle}}. {{paper.month}} {{paper.year}}
      </p>
      </div>
      <div class="links">
        {% if paper.abstract %}
          <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
        {% endif %}
	{% if paper.pdf %}
	  {% if paper.pdf contains '://' %}
	     <a href="{{ paper.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank">PDF</a>
	  {% else %}
	     <a href="{{ paper.pdf | prepend: '/assets/pdf/' | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">PDF</a>
	  {% endif %}
	{% endif %}
	<!-- Hidden abstract block -->
	{% if paper.abstract %}
	  <div class="abstract hidden">
	     <p>{{ paper.abstract }}</p>
	  </div>
	{% endif %}
      </div> <!-- end of linkds -->
    </div> <!-- end of col-sm-8-->
  </div> <!--end of row-->
  </li>
{% endfor %}
</ol>



<h3> Workshops </h3>
<ol class="bibliography">
{% for paper in workshops %}
  <li>
  <div class="row">
    <div class="abbr">
      {% if paper.abbr %}
        <abbr class="badge">{{paper.abbr}}</abbr>
      {% endif %}
      {% for award in paper.award %}
           <p class="award"> {{award}} </p>
      {% endfor %}
    </div>

    <div class="main">
      <div class="citation">
      <p>
      <strong>{{paper.title}}.</strong>
      {% for author in paper.authors %}
        {% unless forloop.last %}
	   {% if author == site.scholar.name %}
	      <em>{{author}}</em>,
	   {% else %}
	      {{author}},
	   {% endif %}
	{% else %}
 	   {% if author == site.scholar.name %}
	      <em>{{author}}</em>.
	   {% else %}
	      {{author}}.
	   {% endif %}
	{% endunless %}
      {% endfor %}
      In {{paper.booktitle}}. {{paper.month}} {{paper.year}}
      </p>
      </div>
      <div class="links">
        {% if paper.abstract %}
          <a class="abstract btn btn-sm z-depth-0" role="button">Abs</a>
        {% endif %}
	{% if paper.pdf %}
	  {% if paper.pdf contains '://' %}
	     <a href="{{ paper.pdf }}" class="btn btn-sm z-depth-0" role="button" target="_blank">PDF</a>
	  {% else %}
	     <a href="{{ paper.pdf | prepend: '/assets/pdf/' | relative_url }}" class="btn btn-sm z-depth-0" role="button" target="_blank">PDF</a>
	  {% endif %}
	{% endif %}
	<!-- Hidden abstract block -->
	{% if paper.abstract %}
	  <div class="abstract hidden">
	     <p>{{ paper.abstract }}</p>
	  </div>
	{% endif %}
      </div> <!-- end of linkds -->
    </div> <!-- end of col-sm-8-->
  </div> <!--end of row-->
  </li>
{% endfor %}
</ol>
</div>
