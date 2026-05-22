import Link from "next/link";
import {
  ArrowRight,
  Check,
  Download,
  Droplets,
  Leaf,
  Pickaxe,
  Utensils,
} from "lucide-react";
import { approachItems } from "@/lib/design";
import { industries } from "@/lib/data";

const heroIndustryOrder = [
  { slug: "agriculture", icon: Leaf },
  { slug: "water-treatment", icon: Droplets },
  { slug: "mining", icon: Pickaxe },
  { slug: "food-beverage", icon: Utensils },
];

export default function Home() {
  const heroIndustryCards = heroIndustryOrder
    .map((item) => {
      const industry = industries.find((entry) => entry.slug === item.slug);
      return industry ? { ...industry, icon: item.icon } : null;
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return (
    <main>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#003f87_0%,#0056b3_56%,#89c5ef_100%)]" />
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
                  className="rounded-[2px] border-2 border-white bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.7px] text-primary shadow-lg transition hover:-translate-y-0.5 hover:bg-[#f8fafc]"
                >
                  Request a Quote
                </Link>
              </div>
            </div>
            <div className="industrial-shadow grid overflow-hidden rounded-[2px] border border-white/30 bg-white/35 p-px sm:grid-cols-2">
              {heroIndustryCards.map((card) => (
                (() => {
                  const Icon = card.icon;

                  return (
                    <Link
                      href={`/industries/${card.slug}`}
                      key={card.name}
                      className="group relative min-h-44 overflow-hidden bg-[#003f87] sm:min-h-52 lg:min-h-[218px]"
                    >
                      <img
                        src={card.image}
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(0,41,88,0.92)_0%,rgba(0,63,135,0.64)_48%,rgba(0,63,135,0.18)_100%)] transition duration-500 group-hover:bg-[linear-gradient(105deg,rgba(0,41,88,0.86)_0%,rgba(0,63,135,0.56)_48%,rgba(0,63,135,0.12)_100%)]" />
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_24%,rgba(255,255,255,0.18),transparent_26%)]" />
                      <div className="relative flex h-full flex-col justify-end p-5 text-white md:p-6">
                        <Icon size={30} strokeWidth={1.7} />
                        <span className="mt-3 block h-0.5 w-12 bg-accent" />
                        <h2 className="mt-3 text-xl font-black tracking-[-0.2px] drop-shadow sm:text-2xl">
                          {card.name}
                        </h2>
                        <p className="mt-2 max-w-[260px] text-[11px] font-medium leading-[18px] text-[#e6efff] sm:text-xs sm:leading-5">
                          {card.summary}
                        </p>
                      </div>
                    </Link>
                  );
                })()
              ))}
              <div className="col-span-full flex items-center justify-between bg-[linear-gradient(90deg,#004a9d_0%,#0067c5_100%)] px-5 py-2.5 sm:px-6">
                <img
                  src="/images/brand/agt-logo.png"
                  alt="Arbe Global Trading"
                  className="h-7 w-auto brightness-0 invert sm:h-8"
                />
                <span className="h-0.5 w-16 bg-accent" />
              </div>
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
