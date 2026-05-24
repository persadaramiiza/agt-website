"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FileText, Search } from "lucide-react";
import { useState } from "react";
import type { Resource } from "@/lib/types";
import { figmaAssets } from "@/lib/design";

const categoryImages: Record<string, string> = {
  "Mining Efficiency": figmaAssets.resourceFeatured,
  "Water Treatment": figmaAssets.resourceWater,
  "Food Stabilization": figmaAssets.resourceFood,
};

function getResourceImage(resource: Resource) {
  return categoryImages[resource.category] ?? figmaAssets.resourceNews;
}

export function ResourceExplorer({ resources }: { resources: Resource[] }) {
  const categories = ["All Topics", ...Array.from(new Set(resources.map((item) => item.category)))];
  const [activeCategory, setActiveCategory] = useState("All Topics");
  const [query, setQuery] = useState("");

  const normalizedQuery = query.trim().toLowerCase();
  const filteredResources = resources.filter((resource) => {
    const matchesCategory =
      activeCategory === "All Topics" || resource.category === activeCategory;
    const searchable = `${resource.title} ${resource.category} ${resource.excerpt}`.toLowerCase();
    return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
  });

  const featured = filteredResources[0];
  const remaining = filteredResources.slice(1);

  return (
    <>
      <section className="agt-container">
        <div className="flex flex-col gap-5 rounded-lg bg-[#f2f4f6] p-4 lg:flex-row lg:items-center lg:justify-between">
          <label className="relative w-full lg:w-96">
            <span className="sr-only">Search resources</span>
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search resources..."
              className="h-12 w-full rounded-t-[2px] border border-[#c2c6d4] border-b-2 bg-line pl-12 pr-4 text-base outline-none"
            />
          </label>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = category === activeCategory;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={
                    active
                      ? "cta-blue rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white"
                      : "rounded-xl border border-[#c2c6d4] bg-background px-4 py-2 text-sm font-medium"
                  }
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="agt-container py-12">
        {featured ? (
          <article className="industrial-shadow grid overflow-hidden rounded-2xl bg-white lg:grid-cols-2">
            <div className="relative min-h-[320px]">
              <Image
                src={getResourceImage(featured)}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <div className="flex items-center gap-2">
                <span className="rounded-[2px] bg-accent-soft px-2 py-1 text-xs font-bold uppercase tracking-[0.6px] text-[#410005]">
                  Featured
                </span>
                <span className="text-sm text-[#727784]">
                  {featured.publishedAt} · {featured.readTime}
                </span>
              </div>
              <h2 className="mt-5 text-3xl font-bold leading-[1.2] text-primary">
                {featured.title}
              </h2>
              <p className="mt-5 text-base leading-6 text-muted">{featured.excerpt}</p>
              <Link
                href={`/resources/${featured.slug}`}
                className="mt-8 inline-flex items-center gap-2 font-bold text-accent"
              >
                Read Full Article <ArrowRight size={14} />
              </Link>
            </div>
          </article>
        ) : (
          <div className="rounded-lg border border-line bg-white p-10 text-center">
            <h2 className="text-2xl font-bold text-primary">No resources found</h2>
            <p className="mt-3 text-sm leading-6 text-muted">
              Try another keyword or select a different topic.
            </p>
          </div>
        )}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {remaining.map((resource) => (
            <article
              key={resource.slug}
              className="overflow-hidden rounded-lg bg-white shadow-[0_4px_16px_-4px_rgba(25,28,30,0.05)]"
            >
              <div className="relative h-48">
                <Image
                  src={getResourceImage(resource)}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.6px] text-primary">
                  {resource.category}
                  <span className="font-normal text-[#727784]">
                    {" "}
                    · {resource.publishedAt}
                  </span>
                </p>
                <h2 className="mt-3 text-xl font-bold leading-7">{resource.title}</h2>
                <p className="mt-3 text-sm leading-5 text-muted">{resource.excerpt}</p>
                <Link
                  href={`/resources/${resource.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  Read More <ArrowRight size={12} />
                </Link>
              </div>
            </article>
          ))}
          <article className="rounded-lg bg-primary p-8 text-white">
            <FileText size={30} />
            <h2 className="mt-5 text-2xl font-bold">Technical Data Sheets</h2>
            <p className="mt-3 text-sm leading-5 text-[#acc7ff]">
              Access product pages with MSDS, SDS, specification, and case-example files.
            </p>
            <Link
              href="/products"
              className="cta-red mt-6 inline-flex rounded-[2px] bg-accent px-6 py-2 text-sm font-bold"
            >
              Access Portal
            </Link>
          </article>
        </div>
      </section>
    </>
  );
}
