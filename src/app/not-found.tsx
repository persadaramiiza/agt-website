import { ButtonLink } from "@/components/button-link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        404
      </p>
      <h1 className="mt-3 text-4xl font-semibold">Page not found</h1>
      <p className="mt-4 text-muted">
        The page you requested is not available.
      </p>
      <ButtonLink href="/" className="mt-8">
        Back to home
      </ButtonLink>
    </main>
  );
}
