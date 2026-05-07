import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileText, Search } from "lucide-react";
import { figmaAssets } from "@/lib/design";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "AGT resources and practical notes for industrial chemical buyers.",
};

const filters = ["All Topics", "Mining Efficiency", "Water Treatment", "Food Stabilization"];

const articleCards = [
  {
    title: "Sustainable Water Treatment Solutions for Heavy Industry",
    category: "Water Treatment",
    date: "Oct 12, 2024",
    excerpt:
      "Implementing circular economy principles in industrial wastewater management using advanced CMC formulations.",
    image: figmaAssets.resourceWater,
  },
  {
    title: "The Role of Maltodextrin in Modern Food Processing",
    category: "Food Stabilization",
    date: "Oct 08, 2024",
    excerpt:
      "An in-depth look at how precise maltodextrin applications improve texture and shelf-life in processed foods.",
    image: figmaAssets.resourceFood,
  },
  {
    title: "AGT Expands Production Capacity in Southeast Asia",
    category: "Company News",
    date: "Oct 01, 2024",
    excerpt:
      "New state-of-the-art facility will increase production of premium CMC by 40% to meet growing regional demand.",
    image: figmaAssets.resourceNews,
  },
];

export default function ResourcesPage() {
  return (
    <main className="bg-background">
      <section className="agt-container py-12">
        <h1 className="text-5xl font-black tracking-[-3px] text-primary md:text-6xl">
          Resources & Insights
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-[32px] text-muted">
          Technical articles, industry news, and expert insights to help you
          optimize your chemical processes.
        </p>
      </section>

      <section className="agt-container">
        <div className="flex flex-col gap-5 rounded-lg bg-[#f2f4f6] p-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" size={18} />
            <input
              aria-label="Search resources"
              placeholder="Search resources..."
              className="h-12 w-full rounded-t-[2px] border border-[#c2c6d4] border-b-2 bg-line pl-12 pr-4 text-base outline-none"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter, index) => (
              <button
                key={filter}
                className={
                  index === 0
                    ? "rounded-xl bg-primary px-4 py-2 text-sm font-medium text-white"
                    : "rounded-xl border border-[#c2c6d4] bg-background px-4 py-2 text-sm font-medium"
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="agt-container py-12">
        <article className="industrial-shadow grid overflow-hidden rounded-2xl bg-white lg:grid-cols-2">
          <img
            src={figmaAssets.resourceFeatured}
            alt=""
            className="h-full min-h-[360px] w-full object-cover"
          />
          <div className="flex flex-col justify-center p-8 md:p-12">
            <div className="flex items-center gap-2">
              <span className="rounded-[2px] bg-accent-soft px-2 py-1 text-xs font-bold uppercase tracking-[0.6px] text-[#410005]">
                Featured
              </span>
              <span className="text-sm text-[#727784]">Oct 15, 2024</span>
            </div>
            <h2 className="mt-5 text-3xl font-bold leading-[1.2] text-primary">
              Maximizing Mining Efficiency: Advanced Flocculation Techniques
            </h2>
            <p className="mt-5 text-base leading-6 text-muted">
              Discover how the latest advancements in polymeric flocculants are
              transforming mineral processing, improving recovery rates while
              reducing water consumption.
            </p>
            <Link
              href="/resources/selecting-industrial-chemical-suppliers"
              className="mt-8 inline-flex items-center gap-2 font-bold text-accent"
            >
              Read Full Article <ArrowRight size={14} />
            </Link>
          </div>
        </article>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {articleCards.map((article) => (
            <article
              key={article.title}
              className="overflow-hidden rounded-lg bg-white shadow-[0_4px_16px_-4px_rgba(25,28,30,0.05)]"
            >
              <img src={article.image} alt="" className="h-48 w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.6px] text-primary">
                  {article.category}
                  <span className="font-normal text-[#727784]"> · {article.date}</span>
                </p>
                <h2 className="mt-3 text-xl font-bold leading-7">{article.title}</h2>
                <p className="mt-3 text-sm leading-5 text-muted">{article.excerpt}</p>
                <Link
                  href="/resources/requesting-product-samples"
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
              Access our comprehensive library of TDS and MSDS for all product lines.
            </p>
            <Link
              href="/products/cmc"
              className="mt-6 inline-flex rounded-[2px] bg-accent px-6 py-2 text-sm font-bold"
            >
              Access Portal
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}
