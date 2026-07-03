import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Download } from "lucide-react";
import { industries } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "PT Arbe Global Trading (AGT) | Chemical Supplier Indonesia",
  description:
    "PT Arbe Global Trading (AGT) supplies specialty chemicals and industrial raw materials for water treatment, food and beverage, mining, agriculture, and industrial formulation needs in Indonesia.",
  path: "/",
  keywords: [
    "PT Arbe Global Trading",
    "Arbe Trading",
    "AGT chemical supplier",
    "chemical distributor Indonesia",
    "specialty chemical supplier Indonesia",
    "industrial chemical supplier Indonesia",
  ],
});

const heroIndustryOrder = [
  "agriculture",
  "water-treatment",
  "mining",
  "food-beverage",
];

const approachPillars = [
  {
    title: "Quality Assurance",
    body: "Disciplined vendor qualification and batch verification to protect product consistency.",
  },
  {
    title: "Competitive Pricing",
    body: "Global manufacturer relationships that give our partners access to competitive pricing.",
  },
  {
    title: "Reliable Service",
    body: "Reliable stock availability and logistics execution to support faster lead times and uninterrupted operations.",
  },
];

export default function Home() {
  const heroIndustryCards = heroIndustryOrder
    .map((slug) => industries.find((entry) => entry.slug === slug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <main>
      <section className="relative overflow-hidden bg-[#0056a8]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#004992_0%,#0062bc_58%,#2a8bd9_100%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
        <div className="agt-container relative py-14 md:py-20 lg:py-24">
          <div className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]">
            <div className="max-w-[680px]">
              <h1 className="text-5xl font-black leading-[0.98] text-white sm:text-6xl md:text-7xl">
                Reliable Chemicals.
                <span className="block">Delivered with</span>
                <span className="block">Precision.</span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-[#e5efff] md:text-lg md:leading-8">
                We supply high-quality chemical materials with consistency,
                reliability, and service excellence for the essential industries
                that power Southeast Asia.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/solutions"
                  className="cta-red inline-flex items-center gap-2 rounded-[2px] bg-accent px-7 py-3 text-sm font-bold uppercase tracking-[0.7px] shadow-lg"
                >
                  <span>Explore Solutions</span>
                  <ArrowRight size={14} />
                </Link>
                <Link
                  href="/contact"
                  className="rounded-[2px] border-2 border-white bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.7px] text-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f8fafc]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {heroIndustryCards.map((card) => (
                <Link
                  href={`/industries/${card.slug}`}
                  key={card.name}
                  className="group relative min-h-40 overflow-hidden rounded-[2px] bg-[#003f87] shadow-[0_18px_34px_-24px_rgba(0,0,0,0.75)] sm:min-h-48 lg:min-h-[222px]"
                >
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.06)_0%,rgba(0,0,0,0.64)_100%)]" />
                  <h2 className="absolute bottom-6 left-6 text-2xl font-black tracking-[-0.5px] text-white drop-shadow md:text-3xl">
                    {card.name}
                  </h2>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="agt-container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(420px,0.9fr)] lg:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent">
                The AGT Approach
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-black leading-[1.03] tracking-[-0.8px] md:text-5xl">
                Competitive by price.
                <span className="block">Reliable by supply.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-7 text-muted">
                We don&apos;t just supply chemicals; we integrate into your
                supply chain to solve friction points. Our partners are
                guaranteed reliable access to quality chemical materials,
                responsive lead times, and competitive pricing, helping your
                business operate smoothly and scale with confidence.
              </p>
              <div className="mt-9 grid gap-4">
                {approachPillars.map((item, index) => (
                  <article key={item.title} className="grid grid-cols-[auto_minmax(0,1fr)_auto] gap-5 bg-[#f3f5f7] p-5">
                    <span className="mt-0.5 flex size-7 items-center justify-center rounded-[2px] bg-white text-primary">
                      <Check size={15} strokeWidth={2.5} />
                    </span>
                    <div>
                      <h3 className="text-sm font-black tracking-[-0.1px] text-foreground">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-5 text-muted">
                        {item.body}
                      </p>
                    </div>
                    <span className="pt-1 text-[10px] font-bold text-muted/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                ))}
              </div>
            </div>

            <aside className="rounded-[3px] bg-[#eef0f2] p-8 shadow-[0_18px_38px_-30px_rgba(15,35,63,0.55)]">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-black uppercase tracking-[1.2px] text-muted">
                  Featured Spec
                </p>
                <span className="bg-accent-soft px-2 py-1 text-[10px] font-black uppercase tracking-[0.6px] text-accent">
                  High Impact
                </span>
              </div>
              <div className="mt-14">
                <h3 className="text-4xl font-black tracking-[-1px] text-foreground">
                  PAC-LV
                </h3>
                <p className="mt-1 text-xs font-black uppercase tracking-[1.2px] text-muted">
                  Polyanionic Cellulose
                </p>
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-x-10 gap-y-5">
                {[
                  ["Viscosity (2%)", "145 cps"],
                  ["Degree of Substitution", "0.9"],
                  ["Purity", "96 - 99%"],
                  ["Moisture", "< 8.0%"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[10px] font-black uppercase tracking-[0.7px] text-muted/60">
                      {label}
                    </dt>
                    <dd className="mt-2 text-base font-black text-foreground">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="/documents/products/pac-lv-sds.pdf"
                className="mt-8 flex items-center justify-between border-l-4 border-primary bg-white px-5 py-4 text-sm shadow-[0_12px_28px_-24px_rgba(0,0,0,0.45)]"
              >
                <span>
                  <span className="block font-black text-foreground">
                    Technical Data Sheet
                  </span>
                  <span className="mt-1 block text-xs font-semibold text-muted">
                    PDF - 2.4 MB
                  </span>
                </span>
                <Download size={17} className="text-primary" />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
