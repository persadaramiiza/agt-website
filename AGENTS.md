# AGENTS.md

## Project Overview

This repository contains the AGT / Arbechem Group website. It uses Next.js 14 App Router, React 18, strict TypeScript, Tailwind CSS 4, Drizzle ORM, and PostgreSQL through the Neon serverless driver.

Treat the current repository as the source of truth. Inspect nearby routes, components, types, and data before changing behavior. Keep changes focused on the requested task and preserve unrelated user work.

## Repository Map

- `src/app/`: App Router pages, layouts, metadata routes, and API Route Handlers.
- `src/app/api/inquiry/route.ts`: server-side inquiry endpoint.
- `src/components/`: shared UI and interactive client components.
- `src/lib/data.ts`: typed local content for products, industries, and resources.
- `src/lib/types.ts`: shared domain and inquiry types.
- `src/lib/forms.ts`: inquiry parsing and validation.
- `src/lib/seo.ts`: shared SEO configuration and helpers.
- `src/lib/salesforce.ts`: server-side Salesforce submission stub.
- `src/db/`: Drizzle schema, database client, and inquiry persistence.
- `drizzle/`: generated SQL migrations and Drizzle metadata.
- `public/`: production-served images and product documents.
- `server.js`: custom Node.js entry point for compatible hosting, including the cPanel-oriented deployment setup.
- `deploy-cpanel-*`: deployment snapshots; do not edit them as application source.

## Source-of-Truth Boundaries

- Products, industries, and resources are currently rendered from typed local data, primarily `src/lib/data.ts`. Adding a table to `src/db/schema.ts` does not make these pages database-driven.
- The backend is embedded in Next.js through Route Handlers; there is no separate API server or full CMS/admin application.
- Inquiry persistence is optional. `src/db/client.ts` returns no database client when `DATABASE_URL` is absent.
- Salesforce submission is optional and incomplete as a production integration. The existing file is an environment-driven stub, not evidence that authentication, field mappings, or client CRM rules are finalized.

## Setup and Commands

Use `npm`; `package-lock.json` is authoritative.

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
npm run db:generate
npm run db:migrate
```

- Copy `.env.example` to `.env.local` for local configuration.
- `npm run dev` starts the Next.js development server.
- `npm run build` is the required production compilation check.
- Run database commands only when a schema change or an explicitly requested migration requires them.

## Implementation Conventions

### TypeScript and React

- Maintain strict typing. Do not introduce `any` when an existing or narrow new type can describe the value.
- Prefer Server Components. Add `"use client"` only when browser APIs, state, effects, or event handlers require it.
- Use the `@/*` alias for imports from `src` when it improves clarity.
- Follow existing App Router patterns for `page.tsx`, `layout.tsx`, dynamic segments, metadata, `not-found.tsx`, `robots.ts`, and `sitemap.ts`.
- Reuse existing components and utilities before adding abstractions. Do not perform unrelated refactors.

### UI and Styling

- Preserve the design tokens and shared primitives defined in `src/app/globals.css` and `src/lib/design.ts`.
- Match existing spacing, container, typography, color, and interaction patterns.
- Keep responsive behavior intact and use semantic HTML, visible focus states, useful alternative text, and labeled form controls.
- Use `next/image` where appropriate. Keep served assets under `public/` and reference them with root-relative URLs such as `/images/...`.
- When adding remote image hosts, update `next.config.mjs` deliberately and restrict patterns to the required hosts.

### Content, Routes, and SEO

- Update typed content and its related types together. Preserve unique, URL-safe slugs.
- Check listing pages, dynamic detail pages, filters, inquiry product selections, metadata, sitemap output, and asset/document links when content changes affect them.
- Do not invent product specifications, certifications, safety claims, or document availability. Use supplied or repository-backed facts.
- Keep canonical URLs and site identity consistent with `src/lib/seo.ts` and current production-domain conventions.

## Inquiry, Database, and Salesforce Rules

- Keep inquiry changes consistent across the form UI, `InquiryPayload`, parsing, validation, API responses, persistence, and Salesforce mapping.
- Treat all request data as untrusted. Validate required fields server-side and return structured errors with appropriate HTTP status codes.
- Preserve the current optional-integration behavior: missing `DATABASE_URL` or Salesforce configuration should produce an explicit skipped state rather than pretending data was stored or submitted.
- Never expose database or Salesforce credentials to client code. Only variables intentionally safe for browsers may use the `NEXT_PUBLIC_` prefix.
- Do not log access tokens, connection strings, raw secrets, or unnecessary personal inquiry data.
- If `src/db/schema.ts` changes intentionally, run `npm run db:generate` and review the generated SQL before migration. Do not hand-edit Drizzle metadata casually or run `npm run db:migrate` against an unspecified environment.
- Salesforce production work must confirm the org/environment, authentication flow, target object, field mapping, API-user permissions, and rules such as lead source, owner, assignment rule, or campaign.
- Preserve failure semantics. If persistence or CRM submission fails, do not return a success claim that contradicts the actual result.

## Environment Variables

The documented variables are:

- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`
- `DATABASE_URL`
- `SALESFORCE_LEAD_ENDPOINT`
- `SALESFORCE_ACCESS_TOKEN`
- `SALESFORCE_ORG_ID`

Update `.env.example` when adding configuration, using safe placeholders only. Never commit `.env.local`, credentials, tokens, or production connection strings.

## Verification

Before claiming completion, run:

```bash
npm run lint
npm run build
```

Also perform checks appropriate to the change:

- UI changes: inspect affected routes at desktop and mobile widths; check keyboard interaction and console errors.
- Content changes: open affected listing/detail routes and verify images and documents resolve.
- Inquiry changes: test validation errors, a valid submission, and configured/unconfigured integration paths where credentials are available.
- Schema changes: inspect generated SQL and verify the intended migration target before applying it.
- SEO changes: inspect generated metadata, canonical URLs, sitemap, and robots output.

If a check cannot run because credentials, services, or local tooling are unavailable, state exactly what was and was not verified.

## Guardrails

- Do not edit generated or vendored output such as `.next/`, `node_modules/`, or build artifacts.
- Do not modify `deploy-cpanel-*`, old logs, or migration history unless the task explicitly requires it.
- Do not delete, overwrite, or revert unrelated working-tree changes.
- Do not add dependencies without a concrete need; keep `package.json` and `package-lock.json` synchronized when dependencies change.
- Do not claim the site has a full CMS, a standalone backend, guaranteed database persistence, or a completed Salesforce integration unless the implementation has actually changed to support that claim.
- Keep commits and final reports scoped. List modified files, verification performed, and any remaining risk or unverified path.
