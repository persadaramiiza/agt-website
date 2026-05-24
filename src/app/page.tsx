import Link from "next/link";
import {
  ArrowRight,
  ClipboardCheck,
  Droplets,
  Leaf,
  PackageCheck,
  Pickaxe,
  ShieldCheck,
  Truck,
  Utensils,
} from "lucide-react";
import { industries } from "@/lib/data";

const heroIndustryOrder = [
  { slug: "agriculture", icon: Leaf },
  { slug: "water-treatment", icon: Droplets },
  { slug: "mining", icon: Pickaxe },
  { slug: "food-beverage", icon: Utensils },
];

const approachPillars = [
  {
    title: "Specification Fit Before Price",
    body: "We help buyers match grade, purity, viscosity, packaging, and document requirements before quoting so the lowest price does not become the wrong material.",
    metric: "Grade-first",
    icon: ClipboardCheck,
  },
  {
    title: "Supply That Can Be Planned",
    body: "AGT coordinates stock discussion, lead time, and shipment readiness early, giving procurement teams clearer buying windows and fewer last-minute substitutions.",
    metric: "Lead-time aware",
    icon: Truck,
  },
  {
    title: "Documents Ready for QA",
    body: "SDS, specifications, product references, and application notes are kept close to the product conversation so purchasing, QA, and production can move together.",
    metric: "QA-ready",
    icon: ShieldCheck,
  },
];

const supplyMilestones = [
  "Application and grade review",
  "Specification and document matching",
  "Quote, stock, and packaging alignment",
  "Delivery coordination and reorder support",
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
        <div className="agt-container">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(440px,1.08fr)] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent">
                The AGT Approach
              </p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black leading-[1.08] tracking-[-0.8px] md:text-5xl">
                Chemical supply built for procurement confidence.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-[29px] text-muted">
                AGT connects buyers with the right chemical grade, ready
                documentation, and clear delivery planning so purchasing teams
                can move faster without compromising production quality.
              </p>
              <div className="mt-8 grid grid-cols-3 overflow-hidden rounded-lg border border-[#dde3ea] bg-[#dde3ea]">
                {[
                  ["4", "Core industries"],
                  ["17+", "Product lines"],
                  ["QA", "Document support"],
                ].map(([value, label]) => (
                  <div key={label} className="bg-white px-4 py-5">
                    <p className="text-3xl font-black tracking-[-1px] text-primary">
                      {value}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.8px] text-muted">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5">
              {approachPillars.map((item, index) => {
                const Icon = item.icon;

                return (
                  <article
                    key={item.title}
                    className="group grid gap-5 rounded-lg border border-[#dde3ea] bg-[#f8fafc] p-6 shadow-[0_18px_42px_-34px_rgba(15,35,63,0.5)] transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:bg-white md:grid-cols-[auto_minmax(0,1fr)_auto]"
                  >
                    <div className="flex size-12 items-center justify-center rounded-md border border-primary/10 bg-white text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={23} strokeWidth={2.1} />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[1.1px] text-accent">
                        0{index + 1} / {item.metric}
                      </p>
                      <h3 className="mt-2 text-xl font-black tracking-[-0.35px]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-muted">
                        {item.body}
                      </p>
                    </div>
                    <ArrowRight
                      size={18}
                      className="hidden self-center text-primary transition duration-300 group-hover:translate-x-1 md:block"
                    />
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-12 overflow-hidden rounded-lg border border-[#dce3eb] bg-white shadow-[0_24px_54px_-42px_rgba(0,63,135,0.55)]">
            <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
              <div className="bg-primary p-7 text-white md:p-8">
                <div className="flex size-12 items-center justify-center rounded-md bg-white/10">
                  <PackageCheck size={24} />
                </div>
                <h3 className="mt-5 text-2xl font-black tracking-[-0.45px]">
                  From requirement to repeat supply
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#dbeafe]">
                  The buying process is managed around technical fit, document
                  readiness, commercial clarity, and continuity after the first
                  order.
                </p>
                <Link
                  href="/products"
                  className="approach-range-cta mt-6 inline-flex min-h-12 w-fit min-w-[220px] items-center justify-center gap-2 rounded-[2px] border border-white bg-white px-5 py-3 text-xs font-black uppercase tracking-[1px] shadow-[0_14px_28px_-20px_rgba(0,0,0,0.55)] transition hover:-translate-y-0.5 hover:bg-[#f8fafc]"
                >
                  View Product Range
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid bg-[#f8fafc] sm:grid-cols-2 lg:grid-cols-4">
                {supplyMilestones.map((milestone, index) => (
                  <div
                    key={milestone}
                    className="min-h-36 border-b border-[#dde3ea] bg-white p-6 text-foreground sm:border-r lg:border-b-0"
                  >
                    <p className="font-mono text-xs font-bold text-accent">
                      STEP {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-8 text-base font-black leading-6 tracking-[-0.2px] text-primary">
                      {milestone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
