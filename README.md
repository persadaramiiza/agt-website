# AGT Website

Next.js website implementation for AGT / Arbechem Group based on `Quotation_AGT_Website Revisi.pdf`, adjusted for a no-CMS modern stack.

## Scope

- Landing page
- Product listing
- Product detail with instant WhatsApp quote
- Contact form
- Resources / blog
- Inquiry API route with Salesforce integration stub
- Typed local content for products and resources
- PostgreSQL schema and inquiry persistence

## Architecture

This project intentionally does not use a CMS. Product and resource content is defined in typed TypeScript modules under `src/lib/data.ts`, which keeps the first version fast, static-friendly, and easy to maintain. If AGT later needs a dynamic admin workflow, the same data contract can be moved to a database or custom admin API without adopting a CMS platform.

Recommended production direction:

- Frontend: Next.js App Router + React + Tailwind CSS
- Content: Static typed content for company profile pages, products, and resources
- Backend: Next.js Route Handlers for inquiry workflows
- Database: PostgreSQL with Drizzle ORM migrations
- CRM: Salesforce lead submission through secure server-side environment variables
- Deployment: Vercel or comparable Node.js hosting with CDN and HTTPS

## Database

Set `DATABASE_URL` in `.env.local` using a PostgreSQL connection string from Neon, Supabase, or another Postgres provider.

```bash
pnpm db:generate
pnpm db:migrate
```

The initial migration creates:

- `products`
- `product_specs`
- `product_applications`
- `resources`
- `inquiries`
- `documents`

The inquiry API writes submissions to `inquiries` when `DATABASE_URL` is configured. If the database is not configured, the website still accepts the request and reports that database persistence was skipped.

## Development

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and fill integration values when available.
