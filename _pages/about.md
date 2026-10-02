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

<!-- Name/subtitle and photo side by side with tops aligned at every width; Career below the name.
     Wide screens: Career stays in the left column beside the photo. Narrow screens: Career spans the full width.
     The layout's own header is hidden on this page and re-rendered inside the grid. -->
<style>
  .post > .post-header {
    display: none;
  }
  .about-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 28%;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      "head photo"
      "career photo";
    column-gap: 2rem;
    align-items: start;
  }
  .about-head {
    grid-area: head;
  }
  .about-head .post-title {
    margin-top: 0;
  }
  .about-career {
    grid-area: career;
  }
  .about-career td:first-child {
    white-space: nowrap;
  }
  .about-photo {
    grid-area: photo;
  }
  .about-photo figure,
  .about-photo img {
    margin-top: 0;
  }
  @media (max-width: 767px) {
    .about-grid {
      grid-template-columns: minmax(0, 1fr) 35%;
      grid-template-rows: auto auto;
      grid-template-areas:
        "head photo"
        "career career";
      column-gap: 1rem;
    }
    .about-head .post-title {
      font-size: 1.75rem;
    }
  }
</style>

<div class="about-grid">
<div class="about-head">
<h1 class="post-title">{{ site.title }}</h1>
<p class="desc">{{ page.subtitle }}</p>
</div>
<div class="about-career" markdown="1">

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
