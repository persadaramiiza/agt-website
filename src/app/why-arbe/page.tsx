import type { Metadata } from "next";
import { Award, Beaker, Globe2 } from "lucide-react";
import { figmaAssets } from "@/lib/design";

export const metadata: Metadata = {
  title: "Why Arbe",
  description: "Why AGT Arbe Chemindo is built for chemical reliability.",
};

export default function WhyArbePage() {
  return (
    <main className="bg-background">
      <section className="relative overflow-hidden py-32">
        <img
          src={figmaAssets.whyHero}
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
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="bg-line p-6">
              <p className="text-4xl font-black text-primary">35+</p>
              <p className="mt-2 text-sm font-medium text-muted">Years of Excellence</p>
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden rounded-lg bg-line lg:col-span-7">
          <img
            src={figmaAssets.globalPlant}
            alt=""
            className="h-[500px] w-full object-cover"
          />
          <div className="absolute bottom-8 right-8 w-72 rounded bg-white/80 p-6 backdrop-blur-xl">
            <h3 className="flex items-center gap-2 text-lg font-bold text-primary">
              <Globe2 size={20} /> Arbechem Group
            </h3>
              <p className="mt-2 text-sm leading-[22px] text-muted">
              Scaled manufacturing capacity is paired with localized chemical
              distribution for Indonesian and Southeast Asian partners.
            </p>
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
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <article className="rounded-lg bg-background p-10 lg:col-span-2">
              <Award className="text-accent" size={32} />
              <h3 className="mt-6 text-2xl font-bold">
                Uncompromising Quality Assurance
              </h3>
              <p className="mt-4 max-w-xl text-base leading-6 text-muted">
                Every product is supported by structured quality control,
                reliable sourcing standards, and documented specifications. We
                help ensure each material meets the required quality,
                consistency, and performance before it reaches your business.
              </p>
            </article>
            <article className="rounded-lg bg-background p-10">
              <Beaker className="text-primary" size={32} />
              <h3 className="mt-6 text-xl font-bold">Technical Expertise</h3>
              <p className="mt-4 text-sm leading-[22px] text-muted">
                Our sector-focused teams specialize in supplying essential
                materials to core industries, helping customers identify the
                right product, specification, and formulation for their
                application with confidence.
              </p>
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
