---
title: Scaling Storefront Experiences at NextCommerce
order: 1
date: 2025-01-01
img: prime-frontend.jpg
project-start: 2020
description: Evolving the storefront themes into a scalable, data-driven system—combining reusable architecture, dynamic rendering, and configurable UI.
---

<p class="lead">Designing and building the base theme, reusable sections, and template systems used to launch and scale storefronts across brands.</p>

<p>At NextCommerce, I worked on evolving the storefront layer from a collection of templates into a flexible, system-driven experience architecture.</p>

<p>Built on <strong>Django-style storefront templates</strong> (template tags and filters), themes act as a <strong>dynamic rendering layer</strong>—translating ecommerce data such as products, pricing, and configuration into user-facing experiences.</p>

<p>My role focused on frontend development—designing and building the base theme (extended from the platform’s theme model and the public <a href="https://github.com/NextCommerceCo/intro-bootstrap">intro-bootstrap</a> starter), reusable sections, and conventions that agencies and internal teams use with <strong>Theme Kit</strong> (<code>ntk</code>) to develop, push, and watch changes locally.</p>

---

<h2>Storefront Themes as a System Layer</h2>

<p>Storefront themes are more than presentation—they sit between backend ecommerce logic and frontend UI, shaping how data becomes a usable experience.</p>

<ul>
  <li>Rendering product and pricing data dynamically</li>
  <li>Supporting variant selection and product state changes</li>
  <li>Adapting to catalogue, product, cart, and content page types</li>
  <li>Ensuring consistency across brands and markets</li>
</ul>

<aside class="callout">
  <p><strong>Key idea:</strong> Themes are not just UI—they define how ecommerce data is structured, interpreted, and experienced.</p>
</aside>

---

<h2>Foundation: Base Theme & Reusable Architecture</h2>

<p>A core part of this work was developing the <strong>base storefront theme</strong>—a shared foundation used across multiple brands and projects.</p>

<p>This established a consistent structure for how storefronts are built and extended, reducing duplication and improving long-term maintainability.</p>

<ul>
  <li>Aligned with the platform theme layout: <code>layouts/</code>, <code>partials/</code>, <code>templates/</code>, <code>assets/</code>, and <code>configs/</code></li>
  <li>Defined layout primitives and section-based architecture</li>
  <li>Created reusable components for product, content, and marketing use cases</li>
  <li>Standardised how data is passed into templates and rendered</li>
  <li>Enabled safe extension for agencies and client teams via Theme Kit</li>
</ul>

<p>This allowed teams to build new storefronts quickly without needing to recreate core structure or logic.</p>

---

<h2>Theme Architecture & Developer Conventions</h2>

<p>The base theme wasn’t just a collection of components—it defined a set of conventions for how storefronts should be structured and extended.</p>

<p>I focused on creating a system that other developers and agencies could work within confidently, with clear patterns for layout, data usage, and component structure.</p>

<ul>
  <li>Predictable file structure and template organization</li>
  <li>Clear separation between layout, sections, and reusable components</li>
  <li>Consistent naming conventions and data access patterns</li>
  <li>Guardrails to reduce fragile or inconsistent implementations</li>
</ul>

<aside class="callout">
  <p><strong>Key idea:</strong> Good systems don’t just enable flexibility—they guide developers toward the right implementation by default.</p>
</aside>

---

<h2>Template Logic & Theme Objects</h2>

<p>Storefront themes use the platform’s Django-style template language, where backend ecommerce data is exposed through structured theme objects directly in the rendering layer.</p>

<p>I worked with these objects to drive UI behaviour across product pages, collections, and promotional content.</p>

<ul>
  <li><strong>Product objects</strong> define attributes, pricing, and availability</li>
  <li><strong>Variant data</strong> supports dynamic selection and UI updates</li>
  <li><strong>Cart and storefront context</strong> shape user interactions</li>
  <li><strong>Theme settings</strong> enable configurable content and layout</li>
</ul>

<blockquote>
  <p>The complexity isn’t just displaying data—it’s ensuring the UI accurately reflects all possible product states, pricing conditions, and user interactions.</p>
</blockquote>

---

<h2>Product Variants & Dynamic UI</h2>

<p>Product variant handling is a key part of the storefront experience layer.</p>

<p>I worked on frontend patterns that ensure variant selection is reflected correctly in the UI—affecting pricing, availability, and selection-driven content.</p>

<ul>
  <li>Variant-aware product interfaces</li>
  <li>Clear handling of availability and out-of-stock states</li>
  <li>Dynamic updates based on user selection</li>
  <li>Reusable patterns across multiple storefront implementations</li>
</ul>

<p>This ensured that complex product configurations remained intuitive and consistent for users.</p>

---

<h2>Theme Editing & Configuration</h2>

<p>Beyond development, themes needed to be usable by operators, marketers, and agencies working across multiple brands.</p>

<p>I helped structure themes to support configurable settings—allowing content and layout to be adjusted without modifying code.</p>

<ul>
  <li><code>configs/settings_schema.json</code> driving the theme editor and <code>settings_data.json</code> for stored values</li>
  <li>Configurable sections and content blocks</li>
  <li>Flexible layout variations within a shared structure</li>
  <li>Safer editing workflows for non-technical users</li>
</ul>

<aside class="callout">
  <p><strong>Key idea:</strong> A good theme system is not just reusable in code—it’s editable in the right ways by the teams using it day to day.</p>
</aside>

---

<h2>Designing for Developer & AI Workflows</h2>

<p>The theme system was also structured with modern development workflows in mind—including AI-assisted development.</p>

<p>This meant creating templates and components that are easy to understand, extend, and reason about—both for developers and tools that rely on contextual code interpretation.</p>

<ul>
  <li>Self-descriptive components and template structure</li>
  <li>Clear data flow and minimal hidden logic</li>
  <li>Consistent patterns that can be reliably extended</li>
</ul>

<p>This approach improves onboarding speed and reduces the likelihood of errors, especially when multiple teams or agencies are working within the same system.</p>

---

<h2>Geo-Aware UX & Localization</h2>

<p>Storefronts needed to dynamically adapt based on user location—impacting currency, language, product availability, and pricing.</p>

<p>I implemented frontend patterns that integrate with backend signals to ensure:</p>

<ul>
  <li>Accurate currency formatting and price display</li>
  <li>Region-specific product configurations</li>
  <li>Seamless switching between locales</li>
</ul>

<p>This ensured users always saw a relevant and consistent experience.</p>

---

<h2>Performance in High-Traffic Storefronts</h2>

<p>Storefronts often operate in performance-sensitive environments—heavy media, third-party integrations, and spikes from marketing traffic.</p>

<div class="project-stats-grid">
  <div class="project-stat">
    <strong>Rendering</strong>
    <span>Efficient template and component output</span>
  </div>
  <div class="project-stat">
    <strong>Assets</strong>
    <span>Optimized media and script loading</span>
  </div>
  <div class="project-stat">
    <strong>Tracking</strong>
    <span>Storefront event tracking wired for analytics and marketing integrations</span>
  </div>
</div>

<p>This required balancing performance with flexibility—ensuring fast load times without limiting functionality.</p>

---

<h2>Store Customisation Beyond the Core Theme Layer</h2>

<p>Alongside the core theme system, I also worked in areas where more advanced storefront behaviour was required.</p>

<p>In these cases, the <strong>Storefront GraphQL API</strong> supports behaviours that outgrow templates alone—custom cart drawers, pre-purchase upsells, and other dynamic cart interactions—while the core theme layer stays maintainable.</p>

<p>This gives merchants tailored UX without pushing every edge case into theme markup.</p>

---

<div class="project-image-grid project-image-grid--3 project-image-grid--1-1">
  <figure>
    <img src="/assets/img/portfolio/custom-side-cart.png" alt="Side cart drawer with shipping progress, line items, and often-bought-together upsells">
    <figcaption>Storefront GraphQL customizing theme components: a side cart with progress messaging, quantity controls, and cross-sell without leaving product context.</figcaption>
  </figure>
  <figure>
    <img src="/assets/img/portfolio/variant-picker-section-1.png" alt="Theme editor preview with PDP variant picker and live storefront">
    <figcaption>Configurable PDP: theme settings drive imagery and layout while the preview reflects variant selection in real time.</figcaption>
  </figure>
  <figure>
    <img src="/assets/img/portfolio/featured-product-section-2.png" alt="Featured product section in the theme editor with live ONYX storefront preview">
    <figcaption>Featured product blocks: operators tune colors, copy, and product binding—rendered as modular storefront sections.</figcaption>
  </figure>
</div>

---

<h2>System Thinking: Data → UI</h2>

<table>
  <thead>
    <tr>
      <th>Concern</th>
      <th>Direction</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Templates vs composability</td>
      <td>Reusable components across brands</td>
    </tr>
    <tr>
      <td>Static UI</td>
      <td>Data-driven rendering</td>
    </tr>
    <tr>
      <td>One-off builds</td>
      <td>Shared system architecture</td>
    </tr>
  </tbody>
</table>

---

<h2>Outcome</h2>

<p>The result was a storefront system that treats themes as a <strong>programmable layer</strong>—capable of adapting to different products, markets, and merchandising needs.</p>

<p>By combining Theme Kit workflows, configurable theme settings, reusable components, and GraphQL where needed, we created a system that supports both flexibility and consistency across projects.</p>

<p>This reduced duplication, improved developer experience, and made it easier for teams to build and maintain high-performing storefronts at scale.</p>
