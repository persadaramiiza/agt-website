import type { Metadata } from "next";
import {
  Award,
  Beaker,
  CalendarCheck,
  CheckCircle2,
  ClipboardCheck,
  Globe2,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Arbe",
  description: "Why AGT Arbe Chemindo is built for chemical reliability.",
};

export default function WhyArbePage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden py-32">
        <img
          src="/images/resources/Aset%20Foto%20CMC%20dan%20AGT/pabrik%20arbe.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(158deg,#003f87_0%,#0056b3_100%)] opacity-90 mix-blend-multiply" />
        <div className="agt-container relative">
          <h1 className="max-w-2xl text-5xl font-black leading-none tracking-[-1.5px] text-white md:text-6xl">
            Reliable Chemical Supply for the Industries That Move Southeast Asia Forward
          </h1>
          <p className="mt-6 max-w-2xl text-2xl leading-8 text-[#bbd0ff]">
            AGT was established to support essential industries by providing
            dependable access to high-quality chemical materials. We serve the
            food & beverage, mining, agriculture, and water treatment sectors
            with a commitment to helping our partners operate efficiently,
            compete effectively, and grow with confidence.
          </p>
        </div>
      </section>

      <section className="agt-container grid gap-16 py-24 lg:grid-cols-12">
        <div className="self-center lg:col-span-5">
          <span className="inline-flex items-center gap-2 rounded bg-line px-3 py-1 text-xs font-bold uppercase tracking-[0.6px] text-muted">
            <Globe2 size={12} /> Our Legacy
          </span>
          <h2 className="mt-8 text-4xl font-extrabold leading-[1.2] tracking-[-0.9px]">
            Decades of Industrial Reliability.
          </h2>
          <p className="mt-6 text-lg leading-[29px] text-muted">
            AGT is part of Arbe Group, a leading specialty chemicals group with
            deep expertise in water-soluble cellulose-based chemicals for oil &
            gas, food & beverage, homecare and personal care sectors.
          </p>
          <p className="mt-5 text-lg leading-[29px] text-muted">
            PT Arbe Chemindo is Southeast Asia&apos;s largest producer of Sodium
            Carboxymethyl Cellulose and Polyanionic Cellulose, combining decades
            of industry experience, technical knowledge, and supply discipline to
            serve customers with quality and reliability.
          </p>
          <a
            href="https://arbechem.com"
            className="mt-5 inline-flex font-bold text-primary underline"
          >
            Visit Arbechem.com
          </a>
          <div className="mt-8">
            <div className="group relative overflow-hidden rounded-lg border border-[#d6dde7] bg-white p-1 shadow-[0_18px_42px_-28px_rgba(0,63,135,0.5)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#0067d8] to-accent" />
              <div className="relative overflow-hidden rounded-md bg-[linear-gradient(135deg,#ffffff_0%,#f0f5fb_100%)] p-6">
                <div className="absolute right-[-34px] top-[-52px] size-32 rounded-full border-[18px] border-primary/5 transition duration-500 group-hover:scale-110" />
                <div className="relative flex items-start gap-5">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded bg-primary text-white shadow-[0_12px_24px_-16px_rgba(0,63,135,0.8)]">
                    <CalendarCheck size={23} />
                  </span>
                  <div>
                    <div className="flex items-end gap-2">
                      <p className="text-5xl font-black leading-none tracking-[-1.5px] text-primary">
                        35+
                      </p>
                      <p className="pb-1 text-xs font-bold uppercase tracking-[0.8px] text-accent">
                        Years
                      </p>
                    </div>
                    <p className="mt-3 text-base font-black text-foreground">
                      Years of Excellence
                    </p>
                    <p className="mt-2 max-w-xs text-sm leading-6 text-muted">
                      Long-running manufacturing discipline, technical knowledge,
                      and dependable supply standards from Arbe Group.
                    </p>
                  </div>
                </div>
                <div className="relative mt-5 flex items-center gap-2 border-t border-line pt-4 text-xs font-bold uppercase tracking-[0.6px] text-primary">
                  <ShieldCheck size={15} />
                  Quality-backed chemical supply
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg border border-[#d6dde7] bg-white shadow-[0_22px_56px_-34px_rgba(0,63,135,0.55)] lg:col-span-7">
          <img
            src="/images/resources/Aset%20Foto%20CMC%20dan%20AGT/%5B0%5D%20You%20Grow%2C%20We%20Grow.jpg"
            alt="Arbe team at manufacturing facility"
            className="h-full min-h-[560px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,63,135,0.02)_0%,rgba(0,63,135,0.28)_100%)]" />
          <div className="absolute right-5 top-5 rounded bg-white/90 p-4 shadow-[0_18px_42px_-28px_rgba(0,63,135,0.55)] backdrop-blur-xl">
            <img
              src="/images/brand/agt-logo.png"
              alt="Arbe Global Trading"
              className="h-12 w-auto"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f2f4f6] py-24">
        <div className="agt-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold tracking-[-0.9px]">
              Bridging scaled manufacturing with localized chemical distribution.
            </h2>
            <p className="mt-5 text-lg leading-7 text-muted">
              Our clients trust us to deliver quality-assured feedstock on time,
              at competitive prices, across every scale of operation.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <article className="group relative overflow-hidden rounded-lg border border-[#d6dde7] bg-white p-8 shadow-[0_18px_44px_-32px_rgba(0,63,135,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-34px_rgba(0,63,135,0.55)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-primary" />
              <div className="absolute right-[-60px] top-[-76px] size-44 rounded-full border-[28px] border-primary/5 transition duration-500 group-hover:scale-110" />
              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[1px] text-accent">
                      Quality System
                    </p>
                    <h3 className="mt-3 text-3xl font-black tracking-[-0.7px] text-primary">
                      Uncompromising Quality Assurance
                    </h3>
                  </div>
                  <span className="flex size-14 shrink-0 items-center justify-center rounded bg-primary text-white shadow-[0_16px_28px_-18px_rgba(0,63,135,0.9)]">
                    <Award size={25} />
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 text-muted">
                  Every product is supported by structured quality control,
                  reliable sourcing standards, and documented specifications. We
                  help ensure each material meets the required quality,
                  consistency, and performance before it reaches your business.
                </p>
                <div className="mt-8 grid gap-3">
                  {["Documented specifications", "Batch verification", "Reliable sourcing standards"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-t border-line pt-3 text-sm font-semibold text-[#2f3540]"
                    >
                      <ClipboardCheck className="text-primary" size={18} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-lg border border-[#d6dde7] bg-white p-8 shadow-[0_18px_44px_-32px_rgba(0,63,135,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-34px_rgba(0,63,135,0.55)]">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
              <div className="absolute right-[-60px] top-[-76px] size-44 rounded-full border-[28px] border-accent/5 transition duration-500 group-hover:scale-110" />
              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[1px] text-accent">
                      Application Fit
                    </p>
                    <h3 className="mt-3 text-3xl font-black tracking-[-0.7px] text-primary">
                      Technical Expertise
                    </h3>
                  </div>
                  <span className="flex size-14 shrink-0 items-center justify-center rounded bg-primary text-white shadow-[0_16px_28px_-18px_rgba(0,63,135,0.9)]">
                    <Beaker size={25} />
                  </span>
                </div>
                <p className="mt-6 text-base leading-7 text-muted">
                  Our sector-focused teams specialize in supplying essential
                  materials to core industries, helping customers identify the
                  right product, specification, and formulation for their
                  application with confidence.
                </p>
                <div className="mt-8 grid gap-3">
                  {["Product-grade guidance", "Application review", "Sector-focused recommendations"].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 border-t border-line pt-3 text-sm font-semibold text-[#2f3540]"
                    >
                      <CheckCircle2 className="text-primary" size={18} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </div>
          <div className="mt-8 grid gap-4 rounded-lg bg-background p-8 md:grid-cols-4">
            {["API Monogram 13A", "Halal Certified", "ISO 9001:2015", "GMP Standards"].map(
              (item) => (
                <div key={item} className="rounded bg-[#f2f4f6] px-5 py-4">
                  <p className="text-sm font-bold text-[#1e3a8a]">{item}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
