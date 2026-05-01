# Search Visibility Operations

Updated: 2026-04-27

## Search Console checklist

Canonical domain:
- `https://lookover.io`

Sitemap to submit:
- `https://lookover.io/sitemap.xml`

Required Google Search Console checks:
1. Confirm `https://lookover.io` is verified as a property.
2. Submit the cleaned sitemap after Sprint 4 deploys.
3. Confirm `/about`, `/contact`, `/features`, `/integrations`, `/pricing`, `/audit-in-2-mins`, and `/blog` are discovered.
4. Review `Pages` coverage for excluded URLs, especially remaining placeholder routes like `/careers`, `/legal`, and `/documentation`.

## Pages to monitor weekly

Primary commercial pages:
- `/`
- `/features`
- `/integrations`
- `/pricing`
- `/audit-in-2-mins`
- `/solutions/ai-agent-audit-trails`
- `/solutions/soc-2-for-ai-agents`
- `/solutions/hipaa-audit-logs-for-ai`
- `/solutions/eu-ai-act-logging`

Trust and authority pages:
- `/about`
- `/contact`
- `/authors/lookover-team`

Blog pages:
- `/blog`
- `/blog/eu-ai-act-high-risk-classification`
- `/blog/why-every-ai-agent-needs-an-identity`
- `/blog/audit-trails-for-ai-agents-what-soc2-actually-requires`
- `/blog/zero-trust-for-ai-agents-beyond-the-buzzword`
- `/blog/ai-agent-audit-trail-implementation-guide`
- `/blog/shared-service-accounts-vs-ai-agent-identity`
- `/blog/soc-2-readiness-checklist-for-ai-agents`
- `/blog/hipaa-audit-log-template-for-ai-agents`

Metrics to record:
- Clicks
- Impressions
- Average position
- Indexed status
- Query themes by page

## Page experience review

Current repo-visible findings:
1. The homepage remains a large client component with significant interactive UI, so it is still the highest page-experience risk in the repo.
2. The new `/features`, `/integrations`, and `/pricing` pages are static server-rendered pages and should be cheaper to render and crawl than the homepage.
3. Production builds depend on Google-hosted Geist fonts, so page-experience measurements should be captured against a deployed or fully built environment.

What was attempted in this sprint:
- Local Lighthouse execution was checked first.
- `pnpm exec lighthouse --version` failed because Lighthouse is not installed in this repo.

Manual follow-up for the team:
1. Run Lighthouse or PageSpeed Insights against:
   - `/`
   - `/blog`
   - `/blog/eu-ai-act-high-risk-classification`
   - `/audit-in-2-mins`
2. Record LCP, INP, and CLS for each page.
3. Compare the homepage against the three new commercial pages to validate that the lighter pages become reliable search landing pages.

Likely follow-up work if the homepage underperforms:
- Split `app/page.tsx` into a server wrapper plus smaller client islands.
- Reduce decorative motion or defer non-critical client code.
- Audit hero/demo assets and any render-blocking dependencies.

## Success criteria for this sprint

The sprint should be considered successful in Search Console once:
- the new commercial pages are indexed,
- placeholder pages stay excluded,
- `/audit-in-2-mins` gains impressions from internal links,
- and at least one of the blog posts begins ranking for its cluster terms with clicks or rising impressions.
