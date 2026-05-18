import Link from "next/link";
import { ArrowRight, Check, Download } from "lucide-react";
import { approachItems } from "@/lib/design";

const heroIndustryCards = [
  {
    slug: "agriculture",
    name: "Agriculture",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "water-treatment",
    name: "Water Treatment",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "mining",
    name: "Mining",
    image: "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#003f87_0%,#0056b3_58%,#74b7e8_100%)]" />
        <div className="absolute inset-0 opacity-[0.13] [background-image:linear-gradient(rgba(255,255,255,0.55)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.55)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute bottom-0 right-0 h-2/3 w-2/3 bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.16)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
        <div className="agt-container relative flex min-h-[calc(100svh-4rem)] flex-col justify-center py-8 lg:py-10">
          <div className="grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr]">
            <div className="max-w-[680px]">
              <h1 className="text-4xl font-bold leading-none text-white sm:text-5xl md:text-6xl">
                Reliable Chemicals.
                <span className="block text-[#d7e2ff]">Delivered with Precision.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-[#e4edff] md:text-xl md:leading-8">
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
                  className="rounded-[2px] border-2 border-white/45 bg-white/10 px-7 py-3 text-sm font-bold uppercase tracking-[0.7px] text-white backdrop-blur transition hover:bg-white/18"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {heroIndustryCards.map((card) => (
                <Link
                  href={`/industries/${card.slug}`}
                  key={card.name}
                  className="group industrial-shadow relative h-36 overflow-hidden rounded-[2px] bg-black sm:h-44 lg:h-[30vh] lg:min-h-44 lg:max-h-64"
                >
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[rgba(0,63,135,0.42)]" />
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/72 to-transparent" />
                  <div className="relative flex h-full items-end p-4 sm:p-5">
                    <h2 className="text-lg font-bold text-white drop-shadow sm:text-2xl">
                      {card.name}
                    </h2>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="agt-container grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent">
              The AGT Approach
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.12]">
              Competitive by price.
              <span className="block">Reliable by supply.</span>
            </h2>
            <p className="mt-6 text-lg leading-[29px] text-muted">
              We don&apos;t just supply chemicals; we integrate into your supply
              chain to solve friction points. Our partners are guaranteed
              reliable access to quality chemical materials, responsive lead
              times, and competitive pricing, helping your business operate
              smoothly and scale with confidence.
            </p>
            <div className="mt-10 grid gap-4">
              {approachItems.map((item, index) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded bg-[#f2f4f6] p-6"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded bg-white text-primary">
                    <Check size={14} />
                  </span>
                  <div>
                    <h3 className="font-bold">{item.title}</h3>
                    <p className="mt-1 text-sm leading-5 text-muted">
                      {item.body}
                    </p>
                  </div>
                  <span className="ml-auto font-mono text-xs text-[#727784]">
                    0{index + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="industrial-shadow self-center rounded-lg bg-[#eceef0] p-8">
            <div className="flex items-center justify-between border-b border-[#c2c6d4]/30 pb-5">
              <span className="text-xs font-bold uppercase tracking-[1.2px] text-muted">
                Featured Spec
              </span>
              <span className="rounded-[2px] bg-accent/10 px-2 py-1 text-[10px] font-bold uppercase text-accent">
                High Impact
              </span>
            </div>
            <h3 className="mt-8 text-3xl font-black">PAC-LV</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.7px] text-muted">
              Polyanionic Cellulose
            </p>
            <dl className="my-8 grid gap-6 sm:grid-cols-2">
              {[
                ["Viscosity (2%)", "145 cps"],
                ["Degree of Substitution", "0.9"],
                ["Purity", "96 - 99%"],
                ["Moisture", "< 8.0%"],
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs uppercase tracking-[0.6px] text-[#727784]">
                    {label}
                  </dt>
                  <dd className="mt-1 font-medium">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="flex items-center justify-between rounded border-l-4 border-primary bg-white px-5 py-4">
              <div>
                <p className="text-sm font-bold">Technical Data Sheet</p>
                <p className="text-xs text-muted">PDF - 2.4 MB</p>
              </div>
              <Download size={16} className="text-primary" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
