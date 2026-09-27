---
layout: page
permalink: /hobbies/
title: hobbies
description:
nav: true
nav_order: 4
---

<!-- _pages/hobbies.md -->
<!-- Each card links to a page in _hobbies/. Those pages are password protected; see bin/protect-page.mjs. -->
<div class="projects">
  {% assign sorted_hobbies = site.hobbies | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_hobbies %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
