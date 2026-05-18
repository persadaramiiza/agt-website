import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/data";

export const metadata: Metadata = {
  title: "Industries",
  description: "AGT industry solutions for water treatment, food and beverage, mining, and agriculture.",
};

export default function IndustriesPage() {
  return (
    <main className="bg-background">
      <section className="agt-container py-16 lg:py-20">
        <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent">
          Industries
        </p>
        <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none tracking-[-2px] text-primary md:text-6xl">
          Chemical programs mapped to real industrial use cases.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">
          Explore focused pages for the sectors AGT supports, each with
          challenges, solution areas, and recommended product options.
        </p>
      </section>

      <section className="agt-container grid gap-6 pb-24 md:grid-cols-2">
        {industries.map((industry) => (
          <Link
            href={`/industries/${industry.slug}`}
            key={industry.slug}
            className="group industrial-shadow overflow-hidden rounded-lg bg-white"
          >
            <div className="relative h-64 bg-black">
              <img
                src={industry.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/18 to-transparent" />
              <h2 className="absolute bottom-6 left-6 right-6 text-3xl font-bold text-white">
                {industry.name}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-xs font-bold uppercase tracking-[1px] text-accent">
                {industry.eyebrow}
              </p>
              <p className="mt-3 text-sm leading-6 text-muted">
                {industry.summary}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                Open industry page <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}
