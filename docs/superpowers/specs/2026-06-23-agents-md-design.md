# AGENTS.md Design

## Objective

Create a repository-specific root `AGENTS.md` that enables coding agents to work safely and effectively in the AGT website without first rediscovering its architecture and conventions.

## Scope

The document will be concise and operational. It will cover:

- the application architecture and source-of-truth boundaries;
- important repository paths;
- setup, development, lint, build, and database commands;
- conventions for TypeScript, React, Next.js, styling, content, API routes, database changes, SEO, and assets;
- environment-variable and secret-handling rules;
- change-specific verification and completion expectations.

It will not define a new product architecture, deployment pipeline, branching policy, or test framework.

## Repository Facts to Encode

- The project uses Next.js 14 App Router, React 18, strict TypeScript, Tailwind CSS 4, Drizzle ORM, and PostgreSQL through Neon's serverless driver.
- `npm` is the declared package manager and `package-lock.json` is authoritative.
- Product, industry, and resource content is currently maintained as typed local data, primarily in `src/lib/data.ts`; the database schema does not make those pages database-driven.
- Server-side behavior is embedded in Next.js Route Handlers. The inquiry flow validates form data, optionally persists it when `DATABASE_URL` exists, and optionally submits it to Salesforce.
- Salesforce support in `src/lib/salesforce.ts` is an integration stub driven by server-only environment variables, not proof of a completed production integration.
- `server.js` is the custom Node entry point used by compatible hosting such as the current cPanel-oriented deployment setup.

## Document Structure

1. Project overview and governing principle.
2. Repository map and source-of-truth notes.
3. Setup and common commands.
4. Coding and content conventions.
5. Backend, database, Salesforce, and environment rules.
6. Verification checklist.
7. Guardrails for generated files, secrets, migrations, and unrelated user changes.

## Behavioral Requirements

Agents following the file should:

- inspect nearby implementation before editing and keep changes scoped;
- preserve existing design tokens and component patterns;
- use the `@/*` import alias for source imports where appropriate;
- update typed content and related routes/metadata consistently;
- validate inquiry changes across parsing, validation, persistence, CRM mapping, and UI response handling;
- generate a Drizzle migration when schema changes are intentional, without editing migration metadata casually;
- avoid committing secrets or exposing server-only variables through `NEXT_PUBLIC_*`;
- avoid editing generated or vendored directories such as `.next`, `node_modules`, and deployment snapshots unless explicitly requested;
- run `npm run lint` and `npm run build` before claiming completion, plus targeted checks appropriate to the modified area;
- report verification failures accurately instead of claiming success.

## Acceptance Criteria

- A single English-language `AGENTS.md` exists at the repository root.
- Its commands match `package.json` and use `npm`.
- Its architectural statements match the current repository implementation.
- It distinguishes static typed content, optional database persistence, and the incomplete Salesforce integration.
- It includes actionable verification and safety rules without becoming a generic engineering handbook.
- It contains no secrets, placeholders, or unsupported claims.
