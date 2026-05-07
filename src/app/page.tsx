import Link from "next/link";
import { ArrowRight, Check, Download, FlaskConical, Leaf, Waves } from "lucide-react";
import { approachItems, figmaAssets, industries } from "@/lib/design";

const partners = ["AQUACORP", "MINERALIS", "AGRIYIELD", "NUTRITECH", "CHEMSOLVE"];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[linear-gradient(145deg,#003f87_0%,#0056b3_50%,#e0e3e5_100%)] opacity-95" />
        <img
          src={figmaAssets.heroLab}
          alt=""
          className="absolute bottom-0 right-0 top-0 h-full w-1/2 object-cover opacity-20 mix-blend-overlay"
        />
        <div className="agt-container relative flex min-h-[742px] items-center py-24">
          <div className="max-w-[768px]">
            <h1 className="text-5xl font-bold leading-none tracking-[-1.44px] text-white md:text-7xl">
              Precision in
              <span className="block text-[#d7e2ff]">Chemical Solutions</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#bbd0ff] md:text-2xl">
              Solving complex industrial problems with exactitude. We engineer
              stability and efficiency for the world&apos;s most demanding
              manufacturing environments.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2 rounded-[2px] bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[0.7px] text-white shadow-lg"
              >
                Explore Solutions <ArrowRight size={14} />
              </Link>
              <Link
                href="/contact"
                className="rounded-[2px] border-2 border-white/30 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.7px] text-white backdrop-blur"
              >
                Contact Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-background py-12">
        <div className="agt-container">
          <p className="text-center text-xs font-semibold uppercase tracking-[1.2px] text-[#727784]">
            Trusted by industry leaders
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10 opacity-60 md:gap-20">
            {partners.map((partner) => (
              <span key={partner} className="text-lg font-black text-[#424752]">
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="agt-container">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-bold tracking-[-0.9px]">
                Our Industries
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-[29px] text-muted">
                Targeted chemical applications designed for specific operational
                demands across four key sectors.
              </p>
            </div>
            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.7px] text-primary"
            >
              View all sectors <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <article className="relative overflow-hidden rounded-lg bg-[#f2f4f6] p-8 lg:col-span-2 lg:row-span-2 lg:min-h-[504px]">
              <img
                src={figmaAssets.waterPlant}
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              <div className="relative flex h-full flex-col justify-end">
                <Waves className="mb-6 rounded bg-primary/10 p-3 text-primary" size={48} />
                <h3 className="text-3xl font-bold">Water Treatment</h3>
                <p className="mt-4 max-w-md text-base leading-6 text-muted">
                  Advanced coagulants and flocculants for municipal and
                  industrial wastewater purification, ensuring regulatory
                  compliance.
                </p>
                <div className="mt-6 flex gap-2">
                  <span className="rounded-[2px] bg-line px-3 py-1 text-xs uppercase tracking-[0.3px] text-muted">
                    Coagulants
                  </span>
                  <span className="rounded-[2px] bg-line px-3 py-1 text-xs uppercase tracking-[0.3px] text-muted">
                    Flocculants
                  </span>
                </div>
              </div>
            </article>
            {industries
              .filter((industry) => !industry.featured)
              .map((industry) => (
                <article
                  key={industry.name}
                  className={
                    industry.name === "Agriculture"
                      ? "rounded-lg bg-primary p-8 text-white"
                      : "rounded-lg bg-[#f2f4f6] p-8"
                  }
                >
                  {industry.name === "Agriculture" ? (
                    <Leaf className="mb-5 rounded bg-white/20 p-2 text-white" size={40} />
                  ) : (
                    <FlaskConical className="mb-5 rounded bg-line p-2 text-primary" size={40} />
                  )}
                  <h3 className="text-xl font-bold">{industry.name}</h3>
                  <p
                    className={
                      industry.name === "Agriculture"
                        ? "mt-3 text-sm leading-5 text-[#bbd0ff]"
                        : "mt-3 text-sm leading-5 text-muted"
                    }
                  >
                    {industry.description}
                  </p>
                </article>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="agt-container grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent">
              The AGT Approach
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-[1.12] tracking-[-0.9px]">
              Engineered for Stability.
              <span className="block">Formulated for Scale.</span>
            </h2>
            <p className="mt-6 text-lg leading-[29px] text-muted">
              We don&apos;t just supply chemicals; we integrate into your supply
              chain to solve friction points. Our technical team analyzes your
              specific operational environment to recommend the precise
              formulation required.
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
            <h3 className="mt-8 text-3xl font-black">CMC-HV 9000</h3>
            <p className="mt-2 text-sm uppercase tracking-[0.7px] text-muted">
              Sodium Carboxymethyl Cellulose
            </p>
            <dl className="my-8 grid gap-6 sm:grid-cols-2">
              {[
                ["Viscosity (1% Sol)", "8000 - 10000 mPa.s"],
                ["Degree of Substitution", "0.7 - 0.9"],
                ["Purity", "> 99.5%"],
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
