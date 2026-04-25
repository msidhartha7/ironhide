# SEO Improvement Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Lookover's SEO by fixing indexation and canonical issues, adding structured data, strengthening trust signals, improving internal linking, and building a focused content growth loop.

**Architecture:** Start with technical SEO fixes so search engines only crawl and index the right URLs. Then improve semantic signals and trust with structured data, author/about pages, and cited content. Finally, strengthen internal linking and publish high-intent landing pages and supporting content around the existing AI security/compliance topic cluster.

**Tech Stack:** Next.js App Router, TypeScript, static metadata via `buildMetadata()`, local blog registry in `lib/blog.ts`, Node assert-based SEO tests.

---

## File Map

**Existing files likely to change**
- `app/[slug]/page.tsx`: placeholder page behavior, metadata, and indexing policy.
- `app/sitemap.ts`: remove low-value URLs and keep sitemap aligned to canonical/indexable pages.
- `lib/seo.ts`: shared metadata defaults and any structured metadata helpers.
- `app/layout.tsx`: sitewide metadata/script placement for organization-level schema if needed.
- `app/blog/[slug]/page.tsx`: article schema, breadcrumbs, and improved metadata.
- `app/blog/page.tsx`: blog listing metadata and internal linking improvements.
- `lib/blog.ts`: enrich post data for schema, author, and image support.
- `components/blog/BlogHeader.tsx`: linked author presentation if author pages are added.
- `components/blog/BlogCTA.tsx`: point post readers toward the best commercial page.
- `app/archive/page.tsx`: redirect, removal, or distinct archive behavior.
- `tests/seo.test.ts`: expand regression coverage for canonical, robots, sitemap, and schema behavior.

**Likely new files**
- `app/about/page.tsx`: real company/about page.
- `app/contact/page.tsx`: real contact page.
- `app/authors/[slug]/page.tsx` or `app/team/[slug]/page.tsx`: author profile pages.
- `lib/schema.ts`: reusable JSON-LD builders for `Organization`, `BlogPosting`, and `BreadcrumbList`.
- `tests/seo/*.test.ts` or expanded `tests/seo.test.ts`: focused SEO regression checks.
- `docs/superpowers/plans/2026-04-25-seo-improvement-plan.md`: this plan file.

---

### Task 1: Stop Indexing Placeholder Pages

**Files:**
- Modify: `app/[slug]/page.tsx`
- Modify: `app/sitemap.ts`
- Test: `tests/seo.test.ts`

- [ ] Audit all routes currently driven by `PAGES` and classify each as one of:
  - `publish now`
  - `keep live but noindex`
  - `remove until real content exists`
- [ ] Update `app/[slug]/page.tsx` so placeholder pages do not default to `index, follow`.
- [ ] For routes that should not exist yet, return `notFound()` instead of rendering a generic placeholder.
- [ ] For routes that remain temporarily live, set metadata to `noindex, follow`.
- [ ] Remove all non-canonical placeholder URLs from `app/sitemap.ts`.
- [ ] Add a regression test that fails if placeholder pages are emitted as indexable.

**Definition of done**
- Placeholder pages are either gone or non-indexable.
- Sitemap only lists real canonical pages.

---

### Task 2: Fix Canonical and OG URL Bugs

**Files:**
- Modify: `app/[slug]/page.tsx`
- Modify: `lib/seo.ts`
- Test: `tests/seo.test.ts`

- [ ] Fix the `[slug]` route metadata flow so canonical and `og:url` use the actual slug path.
- [ ] Verify canonical generation remains correct for `/`, `/blog`, `/audit-in-2-mins`, and blog posts.
- [ ] Add a test that fails if any generated canonical or `og:url` contains `undefined`.
- [ ] Add a test that validates canonical values for representative pages.

**Definition of done**
- No route emits `https://lookover.io/undefined`.
- Canonical and OG URLs match the intended final URL for each published page.

---

### Task 3: Resolve Duplicate or Near-Duplicate Routes

**Files:**
- Modify: `app/archive/page.tsx`
- Modify: `app/sitemap.ts`
- Test: `tests/seo.test.ts`

- [ ] Decide the fate of `/archive`: redirect to `/`, remove it, or convert it into a real archive experience.
- [ ] If removing, replace the page with a redirect or 404 behavior.
- [ ] If keeping, give it distinct content, distinct metadata, and a clear intent separate from `/`.
- [ ] Verify `/archive` is not listed in the sitemap unless it is a real canonical page.

**Definition of done**
- `/archive` no longer competes with the homepage as duplicate content.

---

### Task 4: Add Organization Structured Data

**Files:**
- Modify: `app/layout.tsx` or `app/page.tsx`
- Create: `lib/schema.ts`
- Test: `tests/seo.test.ts`

- [ ] Create a reusable `Organization` JSON-LD builder in `lib/schema.ts`.
- [ ] Include `name`, `url`, `logo`, and public social profiles where applicable.
- [ ] Render the organization schema on the homepage, or on the homepage plus a future About page if that provides clearer identity signals.
- [ ] Add a test that verifies the rendered HTML contains organization schema.

**Definition of done**
- The homepage includes valid organization-level structured data.

---

### Task 5: Add BlogPosting Structured Data

**Files:**
- Modify: `lib/blog.ts`
- Modify: `app/blog/[slug]/page.tsx`
- Create or Modify: `lib/schema.ts`
- Test: `tests/seo.test.ts`

- [ ] Extend `BlogPost` data to support any missing schema fields:
  - `coverImage`
  - `author` identifier
  - optional `updatedAt`
- [ ] Create a `BlogPosting` JSON-LD helper in `lib/schema.ts`.
- [ ] Render `BlogPosting` schema on each post page with:
  - headline
  - description
  - author
  - `datePublished`
  - `dateModified` when available
  - image
  - canonical URL
- [ ] Use the cover image when available and define a fallback social/article image when not.
- [ ] Add a regression test for schema presence on at least one post page.

**Definition of done**
- Each published article exposes machine-readable blog/article metadata.

---

### Task 6: Add Breadcrumb Structure

**Files:**
- Modify: `app/blog/[slug]/page.tsx`
- Modify: `lib/schema.ts`
- Optionally Modify: `components/blog/BlogHeader.tsx`
- Test: `tests/seo.test.ts`

- [ ] Add visible breadcrumbs to the blog post UI, or at minimum emit `BreadcrumbList` schema.
- [ ] Use the hierarchy `Home > Blog > Post`.
- [ ] Ensure breadcrumb URLs match the canonical URLs exactly.
- [ ] Add a test for breadcrumb schema if implemented.

**Definition of done**
- Blog posts expose a clear hierarchical relationship to the blog hub and homepage.

---

### Task 7: Publish Real About and Contact Pages

**Files:**
- Create: `app/about/page.tsx`
- Create: `app/contact/page.tsx`
- Modify: `components/landing/Footer.tsx`
- Modify: `app/sitemap.ts`

- [ ] Replace placeholder `/about` with a real company page.
- [ ] Replace placeholder `/contact` with a real contact page.
- [ ] Add real metadata for both pages.
- [ ] Link both pages from the footer and any relevant trust/navigation areas.
- [ ] Include them in the sitemap only after they contain real content.

**Definition of done**
- Users and search engines can identify who is behind the site and how to contact them.

---

### Task 8: Add Author Pages and Stronger Byline Signals

**Files:**
- Create: `app/authors/[slug]/page.tsx` or equivalent
- Modify: `lib/blog.ts`
- Modify: `components/blog/BlogHeader.tsx`
- Modify: `app/blog/[slug]/page.tsx`

- [ ] Define a simple author model for current blog authors.
- [ ] Create one author profile page for the current publishing identity.
- [ ] Link the blog byline to the author page.
- [ ] Add relevant expertise/context for why the author or editorial team is qualified to write on AI security and compliance.
- [ ] Reference the author page in article schema using `author.url` or `sameAs`.

**Definition of done**
- Blog bylines are not just text; they resolve to a trust-building identity page.

---

### Task 9: Add Primary Source Citations to Compliance Posts

**Files:**
- Modify: `lib/blog.ts`

- [ ] Review each compliance/security post for key claims that should be cited.
- [ ] Add links to primary sources where appropriate:
  - official regulations
  - standards bodies
  - government or institutional references
- [ ] Add a `Sources` or `References` section to posts where it improves trust and scannability.
- [ ] Check that linked text reads naturally and does not interrupt the article flow.

**Definition of done**
- High-trust posts show readers and search engines that claims are grounded in primary material.

---

### Task 10: Improve Internal Linking to the Main Conversion Page

**Files:**
- Modify: `components/blog/BlogCTA.tsx`
- Modify: `app/page.tsx`
- Modify: `app/blog/[slug]/page.tsx`
- Modify: `lib/blog.ts`

- [ ] Change the blog CTA secondary path from `/` to `/audit-in-2-mins` where intent matches.
- [ ] Add homepage links to `/audit-in-2-mins` from relevant sections if missing.
- [ ] Add contextual links from audit/compliance posts into `/audit-in-2-mins`.
- [ ] Verify the page is reachable from multiple relevant internal pages within one or two clicks.

**Definition of done**
- `/audit-in-2-mins` is no longer an isolated landing page.

---

### Task 11: Strengthen Topical Internal Linking Across Content

**Files:**
- Modify: `lib/blog.ts`
- Modify: `components/blog/RelatedPosts.tsx` if needed

- [ ] Add contextual internal links inside each post body to related posts and relevant landing pages.
- [ ] Ensure every post links upward to a commercial or pillar destination where sensible.
- [ ] Review related-post selection for topical relevance, not just tag overlap.
- [ ] Keep anchor text descriptive and aligned to search intent without stuffing.

**Definition of done**
- The blog behaves like a topic cluster, not a set of disconnected articles.

---

### Task 12: Tighten Homepage Search Intent

**Files:**
- Modify: `lib/seo.ts`
- Modify: `app/page.tsx`

- [ ] Review the homepage title and description for a single dominant commercial theme.
- [ ] Reduce reliance on long `keywords` metadata lists that do not add practical value.
- [ ] Align the homepage H1 and supporting sections around the same commercial topic.
- [ ] Keep copy targeted to AI agent audit trails, compliance, identity, and authorization rather than broad generic AI security.

**Definition of done**
- The homepage has a sharper commercial SEO target and cleaner messaging.

---

### Task 13: Define Keyword Clusters and Page Mapping

**Files:**
- Create: `docs/seo/keyword-clusters.md` (or similar)

- [ ] Define one primary cluster for `AI agent audit trails`.
- [ ] Define one primary cluster for `AI agent identity / authorization`.
- [ ] Define one primary cluster for `SOC 2 / HIPAA / EU AI Act for AI agents`.
- [ ] Map each cluster to:
  - one pillar or landing page
  - supporting informational pages
  - internal linking targets
- [ ] Identify gaps where no real landing page exists yet.

**Definition of done**
- Future content production has a focused map instead of ad hoc topics.

---

### Task 14: Replace Placeholder Commercial Pages with Real Landing Pages

**Files:**
- Create or Replace: `app/features/page.tsx`
- Create or Replace: `app/integrations/page.tsx`
- Create or Replace: `app/pricing/page.tsx`
- Optionally Create: dedicated solution pages under `app/`

- [ ] Publish a real `/features` page.
- [ ] Publish a real `/integrations` page.
- [ ] Publish a real `/pricing` page if pricing can be communicated publicly.
- [ ] Consider high-intent solution pages such as:
  - `AI audit trails`
  - `SOC 2 for AI agents`
  - `HIPAA audit logs for AI`
- [ ] Give each page unique copy, metadata, headings, and CTA intent.

**Definition of done**
- High-intent commercial queries resolve to real landing pages instead of placeholders.

---

### Task 15: Build Supporting Content Around Existing Authority

**Files:**
- Modify: `lib/blog.ts`
- Potentially Create: new post-supporting assets in `public/blog/`

- [ ] Expand around current strengths instead of publishing broad generic AI content.
- [ ] Prioritize content types with clear search intent:
  - implementation guides
  - checklists
  - comparison pages
  - compliance templates
- [ ] Publish supporting pages for each target cluster before expanding to new topic areas.
- [ ] Link each new piece into its parent cluster.

**Definition of done**
- Content growth reinforces the same authority areas already established.

---

### Task 16: Add SEO Regression Tests

**Files:**
- Modify: `tests/seo.test.ts`
- Optionally Create: additional SEO test files under `tests/`

- [ ] Add tests for canonical URL generation.
- [ ] Add tests for placeholder pages being `noindex` or absent.
- [ ] Add tests for sitemap contents.
- [ ] Add tests for schema presence on homepage and blog posts.
- [ ] Keep tests lightweight enough to run as part of normal verification.

**Definition of done**
- SEO regressions become test failures instead of silent production issues.

---

### Task 17: Set Up Search Visibility Measurement

**Files:**
- Modify: docs or operational checklist only unless app instrumentation changes are needed

- [ ] Confirm Google Search Console is connected to the canonical production domain.
- [ ] Submit the cleaned sitemap after technical fixes ship.
- [ ] Track clicks, impressions, and index coverage for:
  - homepage
  - `/audit-in-2-mins`
  - `/blog`
  - each published blog post
- [ ] Review excluded and discovered-but-not-indexed URLs after rollout.

**Definition of done**
- SEO improvements can be measured, not guessed.

---

### Task 18: Review Page Experience on Key SEO Pages

**Files:**
- No code changes required initially; follow-up changes may affect app/page/component files

- [ ] Run Lighthouse or PageSpeed Insights for:
  - homepage
  - blog listing
  - top blog post
  - `/audit-in-2-mins`
- [ ] Focus on LCP, INP, and CLS issues on landing pages with ranking and conversion value.
- [ ] Fix obvious issues such as oversized assets, blocking resources, or unstable layout if found.
- [ ] Re-run checks after fixes.

**Definition of done**
- Important search landing pages meet a reasonable page experience baseline.

---

## Suggested Sprint Order

### Sprint 1: Technical SEO Stabilization
- [ ] Task 1: Stop Indexing Placeholder Pages
- [ ] Task 2: Fix Canonical and OG URL Bugs
- [ ] Task 3: Resolve Duplicate or Near-Duplicate Routes
- [ ] Task 16: Add SEO Regression Tests

### Sprint 2: Search Understanding and Semantics
- [ ] Task 4: Add Organization Structured Data
- [ ] Task 5: Add BlogPosting Structured Data
- [ ] Task 6: Add Breadcrumb Structure
- [ ] Task 10: Improve Internal Linking to the Main Conversion Page

### Sprint 3: Trust and Authority
- [ ] Task 7: Publish Real About and Contact Pages
- [ ] Task 8: Add Author Pages and Stronger Byline Signals
- [ ] Task 9: Add Primary Source Citations to Compliance Posts
- [ ] Task 11: Strengthen Topical Internal Linking Across Content

### Sprint 4: Content Architecture and Growth
- [ ] Task 12: Tighten Homepage Search Intent
- [ ] Task 13: Define Keyword Clusters and Page Mapping
- [ ] Task 14: Replace Placeholder Commercial Pages with Real Landing Pages
- [ ] Task 17: Set Up Search Visibility Measurement
- [ ] Task 18: Review Page Experience on Key SEO Pages

### Sprint 5+: Recurring Content Expansion
- [ ] Task 15: Build Supporting Content Around Existing Authority

---

## Highest-ROI Starting Tasks

- [ ] Remove or `noindex` placeholder pages.
- [ ] Fix canonical `/undefined` output.
- [ ] Remove placeholder pages from the sitemap.
- [ ] Add `BlogPosting` schema to post pages.
- [ ] Point internal CTA and blog traffic toward `/audit-in-2-mins`.

