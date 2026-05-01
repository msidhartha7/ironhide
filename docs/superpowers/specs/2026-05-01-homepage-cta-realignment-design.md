# Homepage CTA Realignment Design

## Goal

Update Lookover's marketing entrypoints so the primary homepage conversion sends users directly to `https://app.lookover.io`, while a separate secondary CTA offers call scheduling for buyers who want a walkthrough or technical discussion.

## Scope

This design covers the live homepage in `app/page.tsx` and the most obvious shared marketing CTA surfaces that currently reinforce the old "early access" posture:

- `app/page.tsx`
- `components/blog/BlogCTA.tsx`
- `app/contact/page.tsx`

This design does not include pricing changes, navigation restructuring, authentication flows, analytics instrumentation changes, or a broad CTA abstraction unless implementation reveals repetition that is materially error-prone.

## Current State

The live homepage currently uses "Early Access" framing in both the hero and final CTA sections. The hero's main CTA anchors to the page's final CTA block, and the final CTA block sends both actions to Calendly. Separate reusable marketing surfaces also continue to position scheduling as the primary path.

This creates two problems:

1. The homepage suggests the product is still gated even though the desired primary action is to open the app directly.
2. Different marketing surfaces express different conversion priorities, which weakens clarity and makes future CTA updates easy to miss.

## User Experience Design

### 1. Homepage CTA hierarchy

The homepage should present a clear two-path conversion model:

- Primary path: open the app immediately at `https://app.lookover.io`
- Secondary path: schedule a call via Calendly

The visual hierarchy should make the self-serve path dominant:

- Primary CTA keeps the filled/high-emphasis button treatment
- Secondary CTA uses an outline or lower-emphasis treatment
- Both CTAs remain adjacent in the hero and final CTA sections

This preserves a fast path for operators who already know they want to try the product, while still supporting buyers who need a walkthrough before adopting.

### 2. Messaging changes

Homepage copy should stop implying the product is only available via gated onboarding where that conflicts with the new CTA model.

Expected changes:

- Replace "Get Early Access" language with direct-use language such as "Open App" or equivalent action-first wording
- Remove or soften the "Early Access" badge if it undermines the new self-serve intent
- Update the final CTA paragraph so it describes immediate product access plus optional call support, rather than positioning onboarding as the only path

The contact and blog CTA surfaces should also stop making demos the default top action when the page intent is broader than sales qualification.

## Component Design

### `app/page.tsx`

This file is the live homepage and should be treated as the source of truth for the primary marketing conversion path.

Changes:

- Hero section:
  - Replace the current primary CTA target with `https://app.lookover.io`
  - Replace the secondary CTA with a scheduling CTA to Calendly
  - Update button labels to reflect direct product access vs. call setup
  - Remove the anchor dependency on `#early-access` for the main conversion path
- Final CTA section:
  - Replace the primary Calendly CTA with `https://app.lookover.io`
  - Keep a separate secondary scheduling CTA
  - Rewrite the supporting copy so it no longer depends on "early access" framing
  - Consider renaming the section `id` if it remains user-visible in code semantics, though this is optional unless it causes confusion elsewhere

### `components/blog/BlogCTA.tsx`

This shared CTA should align with the new conversion hierarchy:

- Primary button should open `https://app.lookover.io`
- Secondary button should either keep the quickstart or become the call CTA based on available space and hierarchy

Recommended approach:

- Primary: open app
- Secondary: book a call

This keeps the blog CTA consistent with the homepage's self-serve-first positioning.

### `app/contact/page.tsx`

The contact page should remain oriented toward conversations, but it should acknowledge the direct product path.

Recommended adjustment:

- Add or elevate an "Open the app" path among the contact options
- Keep scheduling available and prominent because the page intent is still contact-oriented
- Update labels so the distinction between "try now" and "talk to us" is explicit

## Data and Navigation Flow

No new application state or backend integration is required.

The interaction model is simple:

1. User lands on a marketing page.
2. If they want immediate product access, they click the primary CTA and leave for `https://app.lookover.io`.
3. If they want assistance or a sales/technical walkthrough, they click the call CTA and leave for Calendly.

All outbound links should continue to use standard external link handling where appropriate.

## Error Handling and Edge Cases

This change is low complexity, but implementation should still avoid avoidable regressions:

- Ensure external app and Calendly links use the intended target behavior consistently
- Avoid leaving any hero CTA anchored to a deleted or semantically stale section
- Avoid contradictory copy such as "Early Access" adjacent to "Open App"
- Keep mobile layouts stable when moving from one CTA to two adjacent CTAs

## Testing Strategy

This change mainly requires UI verification rather than new domain logic tests.

Implementation should verify:

- Hero primary CTA points to `https://app.lookover.io`
- Hero secondary CTA points to Calendly
- Final CTA primary and secondary links are split correctly
- Blog CTA and contact page no longer default entirely to "book a demo"
- No stale "Get Early Access" wording remains on the aligned surfaces unless intentionally preserved
- The CTA layout remains readable on desktop and mobile

If the repo already has suitable UI or snapshot coverage patterns for simple marketing pages, they can be extended. Otherwise, manual verification is sufficient for this scoped change.

## Risks

- Updating only the homepage but not nearby shared marketing surfaces would leave the site inconsistent.
- Over-correcting every CTA sitewide would expand scope beyond the requested change.
- Rewording copy too aggressively could unintentionally shift positioning beyond CTA intent.

The implementation should therefore focus on the homepage first, plus a small set of obvious shared CTA surfaces that currently reinforce the outdated conversion model.
