import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical } from "lucide-react";
import { figmaAssets, solutions } from "@/lib/design";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Solutions",
  description: "AGT strategic chemical interventions for industrial problems.",
};

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
          {solutions.map((item) => (
            <article key={item.title} className="relative overflow-hidden rounded-lg bg-[#f2f4f6] p-8">
              <div className="absolute right-[-64px] top-[-64px] size-32 rounded-bl-xl bg-primary/5" />
              <div className="relative flex items-center gap-4">
                <span className="flex size-12 items-center justify-center rounded-[2px] bg-primary-strong text-white">
                  <FlaskConical size={20} />
                </span>
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
              <div className="relative mt-6 grid gap-6">
                <div className="border-l-4 border-[#ffdad6] bg-white px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.6px] text-[#ba1a1a]">
                    The Problem
                  </p>
                  <p className="mt-2 text-sm leading-5 text-muted">{item.problem}</p>
                </div>
                <div className="border-l-4 border-accent bg-white px-6 py-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.6px] text-accent">
                    Our Solution
                  </p>
                  <p className="mt-2 text-sm font-medium leading-5">{item.solution}</p>
                </div>
                <div className="flex flex-col gap-3 border-l-4 border-primary bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.6px] text-primary">
                      {item.productSlug === "contact" ? "Service Highlight" : "Product Highlight"}
                    </p>
                    <p className="mt-2 text-sm font-bold">{item.highlight}</p>
                  </div>
                  <Link
                    href={item.productSlug === "contact" ? "/contact" : `/products/${item.productSlug}`}
                    className="inline-flex items-center gap-2 text-sm font-bold text-accent"
                  >
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
