---
layout: page
permalink: /publications/
title: Publications
description:
years: [2016, 2018, 2019, 2020, 2021]
nav: true
---

<div class="publications">

{ % assign sorted_years = page.years | sort %}
{% for y in sort_years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
