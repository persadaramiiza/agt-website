import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getResource, resources } from "@/lib/data";

type ResourcePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({
  params,
}: ResourcePageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    return { title: "Resource not found" };
  }

  return {
    title: resource.title,
    description: resource.excerpt,
  };
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const { slug } = await params;
  const resource = getResource(slug);

  if (!resource) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-5 py-14">
      <p className="text-sm font-semibold uppercase tracking-wider text-primary">
        {resource.category}
      </p>
      <h1 className="mt-3 text-4xl font-semibold md:text-5xl">
        {resource.title}
      </h1>
      <p className="mt-4 text-sm text-muted">
        {resource.publishedAt} · {resource.readTime}
      </p>
      <article className="mt-10 grid gap-6 text-base leading-8 text-muted">
        {resource.body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </main>
  );
}
