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
            Precision in Every Molecule.
          </h1>
          <p className="mt-6 max-w-2xl text-2xl leading-8 text-[#bbd0ff]">
            Beyond supplying chemicals, we engineer stability. Discover the
            legacy, expertise, and global reach that defines AGT Arbe Chemindo.
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
            Part of the globally recognized Arbechem Group, AGT brings a wealth
            of international experience localized for precise operational needs.
            We&apos;ve built our reputation on purity and supply chain reliability.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-6">
            <div className="bg-line p-6">
              <p className="text-4xl font-black text-primary">30+</p>
              <p className="mt-2 text-sm font-medium text-muted">Years of Excellence</p>
            </div>
            <div className="bg-line p-6">
              <p className="text-4xl font-black text-accent">50+</p>
              <p className="mt-2 text-sm font-medium text-muted">Global Markets</p>
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
              Leveraging global manufacturing standards to deliver localized
              problem-solving capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f2f4f6] py-24">
        <div className="agt-container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold tracking-[-0.9px]">
              The Science of Certainty.
            </h2>
            <p className="mt-5 text-lg leading-7 text-muted">
              We don&apos;t leave quality to chance. Our rigorous testing and deep
              technical expertise ensure every batch meets exact specifications.
            </p>
          </div>
          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            <article className="rounded-lg bg-background p-10 lg:col-span-2">
              <Award className="text-accent" size={32} />
              <h3 className="mt-6 text-2xl font-bold">
                Uncompromising Quality Assurance
              </h3>
              <p className="mt-4 max-w-xl text-base leading-6 text-muted">
                ISO-certified processes and state-of-the-art laboratory testing
                validate every formulation. We document every variable so you
                have complete confidence in stability and performance.
              </p>
            </article>
            <article className="rounded-lg bg-background p-10">
              <Beaker className="text-primary" size={32} />
              <h3 className="mt-6 text-xl font-bold">Technical Expertise</h3>
              <p className="mt-4 text-sm leading-[22px] text-muted">
                Our chemists and engineers consult on application, optimization,
                and safety protocols.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
