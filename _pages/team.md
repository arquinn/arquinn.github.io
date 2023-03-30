---
layout: page
permalink: /team/
title: Team
description:
nav: true
---

<div class="team">
{% assign phds = site.team | where: "level", "phd" | sort: "year" %}
{% assign masters = site.team | where: "level", "masters" | sort: "year" %}
{% assign ugs = site.team | where: "level", "ug" | sort: "year" %}

<div class="table-responsive" style="display: table;">
<div style="display: table-row;">
  <div class="table-responsive student-table" style="display: table-cell;">
   <h3> PhDs </h3>
   <table class="table table-sm table-borderless">
   {% for student in phds %}
      <tr>
	 <td class="student-data">
	 {% if student.web %}
	    <a href="{{ student.web }}">{{ student.content  | remove :'<p>' | remove: '</p>' }}</a>
	 {% else %}
	    {{ student.content  | remove :'<p>' | remove: '</p>' }}
	 {% endif %}
	 </td>
      </tr>
   {% endfor %}
   </table>
   </div>

  <div class="table-responsive student-table" style="display: table-cell;">
   <h3> Masters </h3>
   <table class="table table-sm table-borderless">
   {% for student in masters %}
      <tr>
	 <td class="student-data">
	 {% if student.web %}
	    <a href="{{ student.web }}">{{ student.content  | remove :'<p>' | remove: '</p>' }}</a>
	 {% else %}
	    {{ student.content  | remove :'<p>' | remove: '</p>' }}
	 {% endif %}
	 {% if student.at %}
	    ; Graduated (<a href="{{ student.atweb }}">{{ student.at  | remove :'<p>' | remove: '</p>' }}</a>)
	 {% endif %}
	 </td>
      </tr>
   {% endfor %}
   </table>
   </div>
   <div class="table-responsive student-table" style="display: table-cell;">
   <h3> Undergrads </h3>
   <table class="table table-sm table-borderless">
   {% for student in ugs %}
      <tr>
	 <td class="student-data">
	 {% if student.web %}
	    <a href="{{ student.web }}">{{ student.content  | remove :'<p>' | remove: '</p>' }}</a>
	 {% else %}
	    {{ student.content  | remove :'<p>' | remove: '</p>' }}
	 {% endif %}
	 {% if student.at %}
	    ; Graduated (<a href="{{ student.atweb }}">{{ student.at  | remove :'<p>' | remove: '</p>' }}</a>)
	 {% endif %}
	 </td>
      </tr>
   {% endfor %}
   </table>
   </div>
</div>
</div>
