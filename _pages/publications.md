---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Compact publication list: use the full row width, and put venue, note and buttons on one line -->
<style>
  @media (min-width: 576px) {
    .publications .row > .col-sm-8 {
      flex: 0 0 83.3333%;
      max-width: 83.3333%;
    }
  }
  .publications h2.bibliography {
    margin-top: 1.25rem;
    padding-top: 0.75rem;
    margin-bottom: 0.75rem;
  }
  .publications ol.bibliography li {
    margin-bottom: 0.9rem;
    line-height: 1.45;
  }
  .publications ol.bibliography li .abbr abbr {
    margin-bottom: 0;
  }
  .publications ol.bibliography li .periodical {
    display: inline;
    margin-right: 0.5rem;
  }
  .publications ol.bibliography li .links {
    display: inline-block;
  }
  .publications ol.bibliography li .links a.btn {
    padding: 0 0.6rem;
    font-size: 0.75rem;
    line-height: 1.5;
    margin-top: 0;
    margin-bottom: 0;
  }
</style>

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography">Journal Papers (Peer-reviewed)</h2>
{% bibliography --group_by none --query @*[category=journal] %}

<h2 class="bibliography">International Conferences (Peer-reviewed)</h2>
{% bibliography --group_by none --query @*[category=international] %}

<h2 class="bibliography">Domestic Conferences (Non-peer-reviewed)</h2>
{% bibliography --group_by none --query @*[category=domestic] %}

</div>
