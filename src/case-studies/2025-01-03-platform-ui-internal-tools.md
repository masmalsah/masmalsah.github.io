---
title: Designing and Building Internal Ecommerce Tools
order: 3
date: 2025-01-01
img: platform.webp
home-img: platform.webp
project-start: 2021
description: Improving the usability and scalability of an ecommerce CRM platform—spanning storefront management, campaigns, payments, and analytics.
---

<p class="lead">Designing and building a scalable UI system for the ecommerce platform teams use to manage products, campaigns, and customer operations.</p>

<p>Alongside customer-facing storefronts and campaign funnels, I worked on the frontend and UX of the NextCommerce platform itself—an ecommerce CRM used by marketers and operators to manage the full lifecycle of a brand.</p>

<p>The platform spans storefront configuration, inventory, payments, analytics, and campaign operations. The core challenge was making that complexity <strong>usable, consistent, and scalable</strong> without limiting flexibility.</p>

<hr>

<h2>Scope: A Full Ecommerce Operating System</h2>

<p>The platform UI needed to support multiple domains within a single experience:</p>

<ul>
  <li>Storefront and product configuration</li>
  <li>Inventory and variant management</li>
  <li>Campaign and funnel setup</li>
  <li>Payment flows and order management</li>
  <li>Analytics and reporting</li>
</ul>

<aside class="callout">
  <p><strong>Challenge:</strong> Each area has its own complexity—but users expect a unified, intuitive interface.</p>
</aside>

<hr>

<h2>Improving Usability &amp; Onboarding</h2>

<p>A key focus was how users understand and navigate the platform—especially when onboarding new merchants and teams.</p>

<ul>
  <li>Simplifying workflows for common tasks (product setup, campaign creation)</li>
  <li>Reducing cognitive load through clearer layout and hierarchy</li>
  <li>Standardising interaction patterns across different areas of the platform</li>
  <li>Making complex configurations easier to reason about</li>
</ul>

<blockquote>
  <p>Good UX here isn’t about visual polish—it’s about reducing friction in complex workflows.</p>
</blockquote>

<hr>

<h2>App UI Framework</h2>

<p>To support consistency at scale, I contributed to the <strong><a href="https://app-ui.nextcommerce.com/">Next Commerce Design System (App UI)</a></strong>—the frontend framework for apps that integrate with the NEXT platform.</p>

<figure>
  <img src="/assets/img/portfolio/platform-appui.webp" alt="App UI design system collage showing forms, KPI cards, alerts, and chart components">
  <figcaption>App UI building blocks—forms, KPIs, alerts, and chart patterns documented for reuse across platform surfaces.</figcaption>
</figure>

<p>Built on Bootstrap and distributed via CDN, App UI provides a shared foundation for layout, components, and interaction patterns used across internal tools:</p>

<ul>
  <li>Cards, tables, forms, navigation, and feedback components</li>
  <li>Consistent spacing, typography, and visual hierarchy</li>
  <li>Reusable patterns for data-heavy interfaces (filters, KPIs, charts)</li>
  <li>Documented markup examples teams can adopt without reinventing UI</li>
</ul>

<div class="project-stats-connected">
  <div class="project-stat">
    <strong>Consistency</strong>
    <span>Shared UI patterns across platform surfaces</span>
  </div>
  <div class="project-stat-link" aria-hidden="true">
    <svg viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path id="platform-stat-link-0" d="M 4 12 L 36 12" stroke="#ec4899" stroke-width="1.5" stroke-opacity="0.35"></path>
      <circle class="stat-link-pulse" r="3.5" fill="#ec4899" fill-opacity="0.85">
        <animateMotion dur="1.1s" repeatCount="indefinite"><mpath href="#platform-stat-link-0"></mpath></animateMotion>
      </circle>
      <circle class="stat-link-pulse" r="2" fill="#ec4899" fill-opacity="0.45">
        <animateMotion dur="1.1s" begin="0.55s" repeatCount="indefinite"><mpath href="#platform-stat-link-0"></mpath></animateMotion>
      </circle>
    </svg>
  </div>
  <div class="project-stat">
    <strong>Usability</strong>
    <span>Clearer onboarding and faster task completion</span>
  </div>
  <div class="project-stat-link" aria-hidden="true">
    <svg viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path id="platform-stat-link-1" d="M 4 12 L 36 12" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.35"></path>
      <circle class="stat-link-pulse" r="3.5" fill="#f97316" fill-opacity="0.85">
        <animateMotion dur="1.3s" repeatCount="indefinite"><mpath href="#platform-stat-link-1"></mpath></animateMotion>
      </circle>
      <circle class="stat-link-pulse" r="2" fill="#f97316" fill-opacity="0.45">
        <animateMotion dur="1.3s" begin="0.55s" repeatCount="indefinite"><mpath href="#platform-stat-link-1"></mpath></animateMotion>
      </circle>
    </svg>
  </div>
  <div class="project-stat">
    <strong>Scalability</strong>
    <span>Component system that grows with the product</span>
  </div>
</div>

<hr>

<h2>Frontend Implementation</h2>

<p>Beyond UX design, I worked on frontend implementation so the design system translated into maintainable code.</p>

<ul>
  <li>Building reusable UI components within the platform</li>
  <li>Refining layout systems for complex data views</li>
  <li>Keeping design intent aligned with implementation</li>
  <li>Balancing flexibility with a maintainable structure</li>
</ul>

<p>The goal was a system developers can extend efficiently while keeping UI consistency high.</p>

<hr>

<div class="project-image-grid project-image-grid--3">
  <figure>
    <img src="/assets/img/portfolio/nextcommerce/platform-dashboard.webp" alt="Subscription dashboard cards with MRR, new subscribers, revenue growth, and LTV metrics">
    <figcaption>Operational cards with KPIs, filters, and header actions.</figcaption>
  </figure>
  <figure>
    <img src="/assets/img/portfolio/nextcommerce/platform-analytics.webp" alt="Sales performance chart with net revenue line over sales and returns bars">
    <figcaption>Chart patterns for analytics and reporting views.</figcaption>
  </figure>
  <figure>
    <img src="/assets/img/portfolio/nextcommerce/platform-product-management.webp" alt="Analytics data tables for page, device, and browser performance">
    <figcaption>Data tables for product, order, and inventory workflows.</figcaption>
  </figure>
</div>

<hr>

<h2>System Thinking: Complexity → Clarity</h2>

<table>
  <thead>
    <tr>
      <th>Challenge</th>
      <th>Approach</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Multiple domains (products, campaigns, analytics)</td>
      <td>Unified UI system and navigation patterns</td>
    </tr>
    <tr>
      <td>Complex workflows</td>
      <td>Simplified, structured user flows</td>
    </tr>
    <tr>
      <td>Inconsistent UI</td>
      <td>Shared App UI component system</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>Outcome</h2>

<p>This work improved how teams manage complex ecommerce operations—more consistent UI, clearer workflows, and a shared frontend foundation via App UI.</p>

<p>By aligning the design system with implementation, we created a base that supports current platform features and future growth without reinventing patterns for every surface.</p>
