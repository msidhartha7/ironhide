# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

LookOver is a marketing/landing page for an identity-first authorization platform for agentic AI systems. The product helps enterprises secure their GenAI infrastructure with identity management, access control, and audit trails.

## Commands

```bash
pnpm dev      # Start development server (localhost:3000)
pnpm build    # Production build
pnpm lint     # Run ESLint
pnpm start    # Start production server
```

This project uses pnpm (v10.28.0) as the package manager.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **React**: v19
- **Styling**: Tailwind CSS v4 with custom theme
- **UI Components**: shadcn/ui (new-york style) with Radix UI primitives
- **Animations**: Framer Motion, tw-animate-css
- **Icons**: Lucide React
- **Theme**: next-themes (dark mode default)

## Architecture

### Directory Structure

- `app/` - Next.js App Router pages and layouts
- `components/` - React components organized by purpose:
  - `ui/` - shadcn/ui primitives (Button, Card)
  - `landing/` - Landing page sections (Header, Hero, Footer, etc.)
  - `layout/` - Layout wrappers (BackgroundProvider)
  - `analytics/` - Google Analytics integration
- `lib/` - Utilities and shared logic
  - `utils.ts` - Tailwind class merging utility (`cn`)
  - `seo.ts` - Metadata builder for SEO

### Key Patterns

**SEO Metadata**: Use `buildMetadata()` from `lib/seo.ts` for consistent Open Graph, Twitter cards, and canonical URLs across pages.

**Dynamic Routes**: The `[slug]/page.tsx` handles placeholder "coming soon" pages. Add new routes to the `PAGES` constant.

**Styling**:
- Custom color scales: `brand-*` (blue) and `night-*` (dark backgrounds)
- Glass morphism effect: use `glass-panel` utility class
- CSS custom properties defined in `globals.css` for theming

**Component Conventions**:
- Landing page sections are client components (`"use client"`)
- shadcn/ui components use the `cn()` helper for conditional classes
