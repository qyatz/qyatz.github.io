---
layout: page
permalink: /publications/
title: publications
description:
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

<h2 class="bibliography">Journal Papers (Peer-reviewed)</h2>
{% bibliography --query @*[category=journal] %}

<h2 class="bibliography">International Conferences (Peer-reviewed)</h2>
{% bibliography --query @*[category=international] %}

<h2 class="bibliography">Domestic Conferences (Non-peer-reviewed)</h2>
{% bibliography --query @*[category=domestic] %}

</div>
