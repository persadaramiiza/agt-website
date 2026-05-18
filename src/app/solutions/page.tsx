import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CircleDollarSign,
  Droplets,
  Factory,
  FlaskConical,
  Wheat,
} from "lucide-react";
import { figmaAssets, solutions } from "@/lib/design";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Solutions",
  description: "AGT strategic chemical interventions for industrial problems.",
};

const solutionVisuals = [
  {
    label: "Drilling fluid stability",
    icon: Droplets,
    accent: "from-[#003f87] to-[#0067d8]",
  },
  {
    label: "Mineral processing",
    icon: Factory,
    accent: "from-[#17324d] to-[#0056b3]",
  },
  {
    label: "Food formulation",
    icon: Wheat,
    accent: "from-[#0067a8] to-[#0092b8]",
  },
  {
    label: "Cost-in-use control",
    icon: CircleDollarSign,
    accent: "from-[#7f0017] to-[#bb0021]",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-background">
      <section className="border-b border-line bg-[linear-gradient(135deg,#f8f9fb_0%,#eceef0_100%)] py-24">
        <div className="agt-container grid gap-12 lg:grid-cols-2">
          <div className="self-center">
            <span className="inline-flex rounded bg-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.6px] text-muted">
              Strategic Solutions
            </span>
            <h1 className="mt-6 text-5xl font-extrabold leading-none tracking-[-1.5px] md:text-6xl">
              We Don&apos;t Just Sell Chemicals,
              <span className="block text-accent">We Solve Problems.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-[29px] text-muted">
              At AGT, we deliver targeted chemical solutions designed to improve
              process efficiency, reduce operational challenges, and help your
              business achieve consistent, reliable results.
            </p>
            <a
              href={buildWhatsAppUrl("solution consultation")}
              className="cta-red mt-8 inline-flex items-center gap-2 rounded-[2px] bg-accent px-8 py-3 text-base font-medium text-white"
            >
              Find Your Solution <ArrowRight size={14} />
            </a>
          </div>
          <div className="industrial-shadow overflow-hidden rounded-lg bg-[#f2f4f6]">
            <img
              src={figmaAssets.solutionsLab}
              alt=""
              className="h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="interventions" className="agt-container py-20">
        <h2 className="text-3xl font-bold tracking-[-0.75px]">
          Customer Challenges We Address
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-6 text-muted">
          Our specialized programs address critical pain points across key
          industrial sectors, combining application expertise with tailored
          formulations to ensure consistent and efficient production output.
        </p>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {solutions.map((item, index) => {
            const visual = solutionVisuals[index];
            const Icon = visual.icon;

            return (
            <article
              key={item.title}
              className="group relative overflow-hidden rounded-lg border border-[#d8dde5] bg-white shadow-[0_10px_30px_-18px_rgba(25,28,30,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_54px_-28px_rgba(0,63,135,0.45)]"
            >
              <div className={`h-2 bg-gradient-to-r ${visual.accent}`} />
              <div className="relative overflow-hidden bg-[linear-gradient(135deg,#f8f9fb_0%,#eef3f8_100%)] px-7 py-7">
                <div className="absolute right-[-48px] top-[-64px] size-44 rounded-full border-[28px] border-primary/5 transition duration-500 group-hover:scale-110" />
                <div className="absolute bottom-[-70px] right-12 size-36 rounded-full border-[18px] border-accent/5" />
                <div className="relative flex items-start gap-5">
                  <span className={`flex size-14 shrink-0 items-center justify-center rounded bg-gradient-to-br ${visual.accent} text-white shadow-[0_14px_28px_-18px_rgba(0,63,135,0.8)]`}>
                    <Icon size={24} />
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[1px] text-accent">
                      {visual.label}
                    </p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-0.5px] text-primary">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="grid gap-px bg-[#e3e7ec] md:grid-cols-2">
                <div className="bg-white p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded bg-[#ffdad6] text-[#ba1a1a]">
                      <FlaskConical size={16} />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.8px] text-[#ba1a1a]">
                      The Problem
                    </p>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-muted">{item.problem}</p>
                </div>
                <div className="bg-white p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded bg-primary/10 text-primary">
                      <ArrowRight size={16} />
                    </span>
                    <p className="text-xs font-bold uppercase tracking-[0.8px] text-primary">
                      Our Solution
                    </p>
                  </div>
                  <p className="mt-4 text-sm font-medium leading-6 text-[#2f3540]">
                    {item.solution}
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-4 bg-[#f8fafc] px-7 py-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.8px] text-primary">
                      {item.productSlug === "contact" ? "Service Highlight" : "Product Highlight"}
                    </p>
                    <p className="mt-2 text-base font-black text-foreground">{item.highlight}</p>
                  </div>
                  <Link
                    href={item.productSlug === "contact" ? "/contact" : `/products/${item.productSlug}`}
                    className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-accent/25 bg-white px-4 py-2 text-sm font-bold text-accent transition hover:border-accent hover:bg-accent hover:text-white"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
              </div>
            </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
