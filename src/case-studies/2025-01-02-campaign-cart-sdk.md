---
title: Building Scalable Ecommerce Funnels with the Campaign Cart SDK
order: 2
date: 2025-01-01
img: campaigns.jpg
project-date: 2021–2025
description: Moving from custom API-driven checkouts to a scalable SDK and template system—reducing complexity, improving reliability, and accelerating campaign development.
---

<p class="lead">Standardising high-converting ecommerce funnels through the Campaign Cart SDK, Campaign Page Kit, and shared starter templates.</p>

<p>Early campaign development at NextCommerce relied heavily on the <strong>Campaigns API</strong>—a CORS-enabled checkout API that handles products, pricing, payments, and order creation without a merchant backend—to build custom, high-performance funnel experiences.</p>

<p>While this approach provided full flexibility, it also led to a pattern of <strong>bespoke, one-off implementations</strong>—each campaign built independently, with duplicated logic and increasing maintenance overhead.</p>

<p>Over time, this created inconsistency across funnels and introduced risk, as small implementation differences could lead to bugs, tracking issues, or degraded user experience.</p>

<hr>

<h2>From API Flexibility to System Constraints</h2>

<p>Using the Campaigns API, we were able to build fast, lightweight external checkouts tailored to specific campaigns.</p>

<p>However, the lack of shared structure meant:</p>

<ul>
  <li>Repeated implementation of the same cart and pricing logic</li>
  <li>Inconsistent handling of bundles, variants, and upsells</li>
  <li>Increased likelihood of edge cases and regressions</li>
  <li>Slower onboarding for new developers and agencies</li>
</ul>

<blockquote>
  <p>Flexibility enabled speed early on—but without constraints, it introduced long-term complexity.</p>
</blockquote>

<hr>

<h2>Introducing the Campaign Cart SDK</h2>

<p>To address this, I was closely involved in adopting and shaping the <strong>Campaign Cart SDK</strong>—a frontend abstraction layer that standardises how UI interacts with cart and checkout logic.</p>

<p>Instead of each implementation managing its own state and API interactions, the SDK provides a consistent interaction model across all campaigns.</p>

<ul>
  <li>Centralised handling of cart state and updates</li>
  <li>Standardised event system for user interactions and analytics</li>
  <li>Declarative UI patterns using data attributes</li>
  <li>Predictable integration with packages, offers, and campaign configuration</li>
</ul>

<aside class="callout">
  <p><strong>Key shift:</strong> Moving from “build everything manually” to “plug into a shared system with defined behaviour.”</p>
</aside>

<hr>

<h2>Campaign Page Kit & Starter Templates</h2>

<p>Alongside the SDK, I worked on a structured template system built on the <strong>Campaign Page Kit</strong> and a shared library of starter templates—so new funnels are scaffolded, configured, and deployed as static sites rather than built from scratch each time.</p>

<p>Each campaign follows a consistent funnel model—from pre-checkout content through checkout, post-purchase offers, and confirmation—with reusable patterns teams can adapt instead of one-off pages:</p>

<ul>
  <li>Checkout layouts for different product and variant complexity</li>
  <li>Reusable upsell and bundle-selection patterns</li>
  <li>Matching pre-checkout and landing sections tied to the same campaign setup</li>
  <li>Built-in conventions for layout, performance, and analytics</li>
</ul>

<p>This gives teams a consistent starting point, integrates directly with the SDK, and keeps focus on content and UX rather than infrastructure.</p>

<div class="project-stats-connected">
  <div class="project-stat">
    <strong>Consistency</strong>
    <span>Shared templates reduce variation across campaigns</span>
  </div>
  <div class="project-stat-link" aria-hidden="true">
    <svg viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path id="stat-link-0" d="M 4 12 L 36 12" stroke="#ec4899" stroke-width="1.5" stroke-opacity="0.35"></path>
      <circle class="stat-link-pulse" r="3.5" fill="#ec4899" fill-opacity="0.85">
        <animateMotion dur="1.1s" repeatCount="indefinite"><mpath href="#stat-link-0"></mpath></animateMotion>
      </circle>
      <circle class="stat-link-pulse" r="2" fill="#ec4899" fill-opacity="0.45">
        <animateMotion dur="1.1s" begin="0.55s" repeatCount="indefinite"><mpath href="#stat-link-0"></mpath></animateMotion>
      </circle>
    </svg>
  </div>
  <div class="project-stat">
    <strong>Speed</strong>
    <span>Faster setup and iteration for new funnels</span>
  </div>
  <div class="project-stat-link" aria-hidden="true">
    <svg viewBox="0 0 40 24" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path id="stat-link-1" d="M 4 12 L 36 12" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.35"></path>
      <circle class="stat-link-pulse" r="3.5" fill="#f97316" fill-opacity="0.85">
        <animateMotion dur="1.3s" repeatCount="indefinite"><mpath href="#stat-link-1"></mpath></animateMotion>
      </circle>
      <circle class="stat-link-pulse" r="2" fill="#f97316" fill-opacity="0.45">
        <animateMotion dur="1.3s" begin="0.55s" repeatCount="indefinite"><mpath href="#stat-link-1"></mpath></animateMotion>
      </circle>
    </svg>
  </div>
  <div class="project-stat">
    <strong>Reliability</strong>
    <span>Reduced bugs and tracking inconsistencies</span>
  </div>
</div>

<hr>

<h2>Single Source of Truth</h2>

<p>A major goal of this system was to <strong>minimise error propagation</strong> by establishing a single source of truth for how campaigns are built.</p>

<p>Instead of logic being duplicated across projects:</p>

<ul>
  <li>Core functionality lives within the SDK</li>
  <li>Templates define structure and best practices</li>
  <li>Developers extend within a controlled framework</li>
</ul>

<p>This dramatically reduced inconsistencies and made it easier to maintain and evolve the system over time.</p>

<hr>

<h2>AI-Assisted Template Structuring</h2>

<p>To further improve developer experience, we aligned templates with the platform’s AI context workflow—<code>campaign-init --ai-context</code> can install project guidance (<code>CLAUDE.md</code>, <code>AGENTS.md</code>, <code>.cursor/rules/</code>) from the official template context doc so assistants understand Page Kit structure, SDK attributes, and conventions from day one.</p>

<p>We also structured campaigns for human and AI readability:</p>

<ul>
  <li>Clear, predictable file structures and naming conventions per slug</li>
  <li>Self-documenting components and layout patterns</li>
  <li>Context-friendly markup that can be interpreted and extended safely</li>
</ul>

<p>The goal was to enable both internal teams and agencies to move faster—with less need for deep platform knowledge.</p>

<hr>

<h2>Design → Code Integration</h2>

<p>I also worked closely with designers to bridge the gap between design and implementation.</p>

<p>This included collaboration on an internal tool that extracts coded section templates from design outputs—helping translate Figma layouts into reusable frontend components.</p>

<p>This reduced friction between design and development, and ensured that UI patterns remain consistent across campaigns.</p>

<hr>

<div class="project-image-grid project-image-grid--3">
  <figure>
    <img src="/assets/img/portfolio/nextcommerce/funnel-bundle-selector.jpg" alt="Bundle selector">
    <figcaption>Bundle selection patterns powered by the SDK.</figcaption>
  </figure>
  <figure>
    <img src="/assets/img/portfolio/nextcommerce/funnel-upsell.jpg" alt="Upsell step">
    <figcaption>Structured upsell flows with consistent logic.</figcaption>
  </figure>
  <figure>
    <img src="/assets/img/portfolio/nextcommerce/funnel-multistep.jpg" alt="Multi-step funnel">
    <figcaption>Multi-step checkout flows using shared templates.</figcaption>
  </figure>
</div>

<hr>

<h2>System Thinking: From Fragmentation to Structure</h2>

<table>
  <thead>
    <tr>
      <th>Before</th>
      <th>After</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Custom API integrations per campaign</td>
      <td>Shared SDK interaction model</td>
    </tr>
    <tr>
      <td>Duplicated logic across projects</td>
      <td>Centralised functionality</td>
    </tr>
    <tr>
      <td>Inconsistent UX and behaviour</td>
      <td>Predictable, reusable patterns</td>
    </tr>
  </tbody>
</table>

<hr>

<h2>Outcome</h2>

<p>The transition to an SDK, Page Kit, and template-driven system significantly improved how campaigns are built and maintained.</p>

<p>It enabled faster development, reduced errors, and created a more consistent experience across funnels—including more reliable analytics and tracking—while still allowing enough flexibility for campaign-specific needs.</p>

<p>This work helped shift campaign development from fragmented implementations to a <strong>scalable, system-driven approach</strong> that continues to support high-performing ecommerce funnels.</p>
