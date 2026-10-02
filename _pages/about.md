---
layout: about
title: about
permalink: /
subtitle: <!--<a href='#'>Affiliations</a>. --> Doctoral Student / Institute of Science Tokyo

selected_papers: false # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder
---

<!-- Name, subtitle and Career on the left, profile photo on the right, tops aligned (stacks on narrow screens).
     The layout's own header is hidden on this page and re-rendered inside the grid. -->
<style>
  .post > .post-header {
    display: none;
  }
  .about-main > .post-title {
    margin-top: 0;
  }
  .about-photo figure,
  .about-photo img {
    margin-top: 0;
  }
  .about-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 28%;
    gap: 2rem;
    align-items: start;
  }
  .about-main td:first-child {
    white-space: nowrap;
  }
  @media (max-width: 767px) {
    .about-grid {
      grid-template-columns: 1fr;
    }
    .about-photo {
      order: -1;
      max-width: 320px;
    }
  }
</style>

<div class="about-grid">
<div class="about-main" markdown="1">

<h1 class="post-title">{{ site.title }}</h1>
<p class="desc">{{ page.subtitle }}</p>

## Career

| Period              | Degree / Program                                                                                                                      |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Apr 2025 – present  | Doctoral Program, Department of Mechanical Engineering, Institute of Science Tokyo                                                    |
| Apr 2023 – Mar 2025 | Master's Program, Department of Mechanical Engineering, Tokyo Institute of Technology (Institute of Science Tokyo since October 2024) |
| Apr 2019 – Mar 2023 | Bachelor's Program, Department of Mechanical Engineering, Tokyo Institute of Technology                                               |

</div>
<div class="about-photo">
{% include figure.liquid loading="eager" path="assets/img/prof_pic.jpg" class="img-fluid z-depth-1 rounded" alt="prof_pic.jpg" %}
</div>
</div>
