import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Resource } from "@/lib/types";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <Link
      href={`/resources/${resource.slug}`}
      className="block rounded-md border border-line bg-surface p-5 transition hover:border-primary"
    >
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
        {resource.category}
      </p>
      <h2 className="mt-3 text-xl font-semibold">{resource.title}</h2>
      <p className="mt-3 text-sm leading-6 text-muted">{resource.excerpt}</p>
      <div className="mt-5 flex items-center justify-between text-sm text-muted">
        <span>
          {resource.publishedAt} · {resource.readTime}
        </span>
        <ArrowUpRight size={17} />
      </div>
    </Link>
  );
}
