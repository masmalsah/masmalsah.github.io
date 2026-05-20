---
# Reference only — not published, not listed on the site.
title: Case study article template (reference)
permalink: false
eleventyExcludeFromCollections: true
order: 999
date: 2000-01-01
description: Internal template. Copy sections into real case studies as needed.
---

<!--
  HOW TO USE
  - Duplicate a dated case study .md (e.g. 2025-01-01-slug.md), keep case-studies.11tydata.json layout/permalink.
  - Delete any section below you do not need; order is a suggestion, not a rule.
  - Front matter: only title, order, date, description, img, project-date, link (if external) are typical.
-->

<p>Opening paragraphs: context and scope. One or two short blocks before the first <code>&lt;h2&gt;</code>.</p>

<h2>What I worked on</h2>

<ul>
  <li>Bullet for a concrete contribution</li>
  <li>Another outcome or responsibility</li>
</ul>

<p>Optional closing paragraph for this section.</p>

<!-- Optional: lead line after hero-style intro -->
<p class="lead">Lead paragraph (<code>class="lead"</code>) for a short emphasis line.</p>

<!-- Optional: aside -->
<aside class="callout">
  <p><strong>Note:</strong> Caveats, constraints, or annotations (<code>aside.callout</code>).</p>
</aside>

<!-- Optional: pull quote -->
<blockquote>
  <p>Pull quote or framing principle.</p>
</blockquote>

<!-- Optional: three-up metrics -->
<h2>Stats row</h2>

<p>Three focus areas (<code>project-stats-grid</code> / <code>project-stat</code>).</p>

<div class="project-stats-grid">
  <div class="project-stat">
    <strong>Label</strong>
    <span>Short supporting line</span>
  </div>
  <div class="project-stat">
    <strong>Label</strong>
    <span>Short supporting line</span>
  </div>
  <div class="project-stat">
    <strong>Label</strong>
    <span>Short supporting line</span>
  </div>
</div>

<!-- Optional: image grid (adjust --3 to match column count if needed) -->
<h2>Image grid</h2>

<div class="project-image-grid project-image-grid--3">
  <figure>
    <div class="case-study-thumb-placeholder" aria-hidden="true"></div>
    <figcaption>Caption.</figcaption>
  </figure>
  <figure>
    <div class="case-study-thumb-placeholder" aria-hidden="true"></div>
    <figcaption>Caption.</figcaption>
  </figure>
  <figure>
    <div class="case-study-thumb-placeholder" aria-hidden="true"></div>
    <figcaption>Caption.</figcaption>
  </figure>
</div>

<!-- Optional: before / after -->
<h2>Comparison</h2>

<div class="project-comparison-grid">
  <figure>
    <div class="case-study-thumb-placeholder" aria-hidden="true"></div>
    <figcaption>Before / baseline.</figcaption>
  </figure>
  <figure>
    <div class="case-study-thumb-placeholder" aria-hidden="true"></div>
    <figcaption>After / improved.</figcaption>
  </figure>
</div>

<!-- Optional: table -->
<h2>Table</h2>

<table>
  <thead>
    <tr>
      <th>Column</th>
      <th>Column</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Row</td>
      <td>Row</td>
    </tr>
  </tbody>
</table>

<!-- Optional: code sample; if the snippet contains Nunjucks-like braces, wrap the block in Eleventy raw tags. -->
<h2>Code</h2>

<pre><code>// Example snippet</code></pre>
