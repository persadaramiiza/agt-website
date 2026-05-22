import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Beaker,
  Download,
  Droplets,
  Factory,
  FileText,
  FlaskConical,
  Hammer,
  Layers3,
  PackageCheck,
  Paintbrush,
  ShieldCheck,
  Shirt,
  Sparkles,
  Utensils,
  Waves,
  Wheat,
} from "lucide-react";
import { getProduct, products } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

type ApplicationCardContent = {
  eyebrow: string;
  description: string;
  capability: string;
  icon: LucideIcon;
};

const applicationContent: Record<string, ApplicationCardContent> = {
  "Food Industry": {
    eyebrow: "Texture & Stability",
    description:
      "Support for viscosity, mouthfeel, water retention, and batch-to-batch stability in food-grade formulations.",
    capability: "Food-grade review",
    icon: Utensils,
  },
  "Food Processing": {
    eyebrow: "Processing Consistency",
    description:
      "Ingredient matching for texture control, moisture behavior, sweetness balance, and production reliability.",
    capability: "Formulation support",
    icon: Wheat,
  },
  "Beverage Systems": {
    eyebrow: "Solubility & Body",
    description:
      "Grade selection for beverage mixes, carriers, acidity control, and consistent sensory performance.",
    capability: "Beverage fit",
    icon: Droplets,
  },
  Fermentation: {
    eyebrow: "Carbohydrate Source",
    description:
      "Reliable carbohydrate input for fermentation workflows that need predictable purity and handling.",
    capability: "Process matching",
    icon: FlaskConical,
  },
  Mining: {
    eyebrow: "Mineral Processing",
    description:
      "Application review for depressant, binder, and process-modifier use under demanding plant conditions.",
    capability: "Ore-condition review",
    icon: Hammer,
  },
  Paper: {
    eyebrow: "Strength & Retention",
    description:
      "CMC support for retention, surface treatment, and consistency needs across selected paper applications.",
    capability: "Grade alignment",
    icon: FileText,
  },
  Ceramic: {
    eyebrow: "Binding & Forming",
    description:
      "Binder and rheology support for ceramic bodies, glaze preparation, and stable forming behavior.",
    capability: "Binder selection",
    icon: Sparkles,
  },
  Textile: {
    eyebrow: "Print & Sizing Control",
    description:
      "Viscosity and thickening support for textile printing, sizing, and sharper production outcomes.",
    capability: "Viscosity control",
    icon: Shirt,
  },
  Texturizing: {
    eyebrow: "Texture System",
    description:
      "Thickening and body-building support for products that need stable texture and controlled processing.",
    capability: "Texture planning",
    icon: Layers3,
  },
  "Industrial Blends": {
    eyebrow: "Blend Reliability",
    description:
      "Practical support for carrier systems, powder handling, dispersion, and repeatable blend performance.",
    capability: "Blend review",
    icon: PackageCheck,
  },
  "Water Treatment": {
    eyebrow: "Treatment Workflow",
    description:
      "Chemical selection support for disinfection, process water, wastewater, and sanitation programs.",
    capability: "Treatment fit",
    icon: Waves,
  },
  "Wastewater Treatment": {
    eyebrow: "Effluent Support",
    description:
      "Product matching for wastewater routines that need disinfection support and practical documentation.",
    capability: "Wastewater review",
    icon: Waves,
  },
  "Irrigation Algae Control": {
    eyebrow: "Algae Control",
    description:
      "Support for selecting treatment products used in irrigation channels and field-water management.",
    capability: "Field-use review",
    icon: Droplets,
  },
  "Production Facility Disinfection": {
    eyebrow: "Facility Hygiene",
    description:
      "Grade and documentation support for disinfection routines in production and processing facilities.",
    capability: "Sanitation fit",
    icon: ShieldCheck,
  },
  "Pool Treatment": {
    eyebrow: "Chlorine Stability",
    description:
      "Treatment-format discussion for pool and waterpark programs that need reliable chlorine control.",
    capability: "Dosage planning",
    icon: Waves,
  },
  "Poultry Sanitation": {
    eyebrow: "Farm Hygiene",
    description:
      "Product-fit review for coop, facility, and drinking-water line sanitation needs.",
    capability: "Farm sanitation",
    icon: ShieldCheck,
  },
  "Cooling Tower Treatment": {
    eyebrow: "System Hygiene",
    description:
      "Support for cooling-tower programs focused on slime, algae, and routine sanitation control.",
    capability: "Tower review",
    icon: Factory,
  },
  Sanitation: {
    eyebrow: "Controlled Disinfection",
    description:
      "Grade and format discussion for sanitation workflows that need practical handling and documentation.",
    capability: "Safety document fit",
    icon: ShieldCheck,
  },
  "Industrial Cleaning": {
    eyebrow: "Facility Support",
    description:
      "Product matching for cleaning and treatment routines where stability, form, and supply continuity matter.",
    capability: "Operational support",
    icon: Factory,
  },
  "Hazardous Wastewater Treatment": {
    eyebrow: "Wastewater Control",
    description:
      "Chemical-fit support for hazardous wastewater workflows that require careful product and document review.",
    capability: "Compliance support",
    icon: ShieldCheck,
  },
  "Metal Processing": {
    eyebrow: "Metal Workflow",
    description:
      "Industrial-grade product matching for selected metal-processing and plant sanitation requirements.",
    capability: "Process review",
    icon: Hammer,
  },
  "Feed Additives": {
    eyebrow: "Feed Support",
    description:
      "Ingredient and document review for feed-related applications and supply qualification.",
    capability: "Feed fit",
    icon: Wheat,
  },
  Agriculture: {
    eyebrow: "Crop & Farm Inputs",
    description:
      "Product-fit review for agricultural inputs, crop-support uses, and field documentation needs.",
    capability: "Field application",
    icon: Wheat,
  },
  "Personal Care": {
    eyebrow: "Care Formulation",
    description:
      "Humectant and formulation support for cosmetic, skin-care, and personal-care product development.",
    capability: "Formulation review",
    icon: Sparkles,
  },
  "pH Control": {
    eyebrow: "Acidity Adjustment",
    description:
      "Support for pH control, acidity balancing, and chelation needs in food and industrial formulations.",
    capability: "Control range review",
    icon: Beaker,
  },
  "Industrial Formulation": {
    eyebrow: "Formulation Fit",
    description:
      "Application guidance for formulation adjustment, compatibility discussion, and documentation readiness.",
    capability: "Compatibility review",
    icon: Paintbrush,
  },
};

function getApplicationContent(application: string): ApplicationCardContent {
  return (
    applicationContent[application] ?? {
      eyebrow: "Application Fit",
      description:
        "AGT can help match the right grade, specification, and documentation package for this application.",
      capability: "Technical review",
      icon: Beaker,
    }
  );
}

function getApplicationIndustryHref(application: string) {
  const industryMap: Record<string, string> = {
    Agriculture: "/industries/agriculture",
    "Beverage Systems": "/industries/food-beverage",
    "Cooling Tower Treatment": "/industries/water-treatment",
    "Feed Additives": "/industries/agriculture",
    "Food Industry": "/industries/food-beverage",
    "Food Processing": "/industries/food-beverage",
    "Hazardous Wastewater Treatment": "/industries/water-treatment",
    "Industrial Cleaning": "/industries/water-treatment",
    "Irrigation Algae Control": "/industries/agriculture",
    "Metal Processing": "/industries/mining",
    Mining: "/industries/mining",
    "Pool Treatment": "/industries/water-treatment",
    "Poultry Sanitation": "/industries/agriculture",
    Sanitation: "/industries/water-treatment",
    Textile: "/industries/food-beverage",
    Texturizing: "/industries/food-beverage",
    "Wastewater Treatment": "/industries/water-treatment",
    "Water Treatment": "/industries/water-treatment",
  };

  return industryMap[application];
}

function getProductTitleClass(name: string) {
  if (name.length > 58) {
    return "text-3xl leading-[1.08] tracking-[-0.9px] sm:text-4xl md:text-[46px] md:leading-[1.05]";
  }

  if (name.length > 38) {
    return "text-4xl leading-[1.05] tracking-[-1.1px] sm:text-5xl md:text-[54px] md:leading-[1.02]";
  }

  return "text-5xl leading-none tracking-[-1.5px] sm:text-6xl md:text-7xl md:tracking-[-2.5px]";
}

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) return { title: "Product not found" };

  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (!product) notFound();
  const productTitleClass = getProductTitleClass(product.name);

  return (
    <main className="bg-background">
      <section className="agt-container grid gap-10 py-16 lg:grid-cols-[minmax(0,0.94fr)_minmax(420px,1.06fr)] lg:items-center lg:py-20">
        <div className="min-w-0 self-center">
          <span className="inline-flex rounded-[2px] border border-[#c2c6d4]/20 bg-line px-3 py-1 text-xs uppercase tracking-[1.2px] text-muted">
            {product.category}
          </span>
          <h1 className={`mt-6 max-w-[760px] text-balance break-words font-black text-foreground ${productTitleClass}`}>
            {product.name}
          </h1>
          <h2 className="mt-4 text-2xl font-bold tracking-[-0.5px] text-primary md:text-3xl">
            {product.slug === "cmc" ? "Cellulose Derivatives" : product.category}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-[29px] text-muted">
            {product.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppUrl(product.name)}
              className="cta-red rounded-[2px] bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[1.4px] text-white shadow-[0_4px_7px_rgba(187,0,33,0.39)]"
            >
              Request an Instant Quote
            </a>
            {product.documents[0] ? (
              <a
                href={product.documents[0].href}
                className="rounded-[2px] border border-[#c2c6d4]/30 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[1.4px] text-primary"
              >
                Download Document
              </a>
            ) : null}
          </div>
        </div>
        <div className="industrial-shadow flex h-96 items-center justify-center overflow-hidden rounded-lg border border-[#e1e6ec] bg-white p-8">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </section>

      <section className="agt-container pb-20">
        <div className="mb-8 flex items-baseline justify-between border-b border-[#e6e8ea] pb-4">
          <h2 className="text-2xl font-bold tracking-[-0.6px]">
            Technical Specifications
          </h2>
          <p className="text-xs uppercase tracking-[1.2px] text-muted">
            Standard Grades
          </p>
        </div>
        <div className="industrial-shadow overflow-hidden rounded-[2px] border border-[#c2c6d4]/15 bg-white">
          <dl className="grid bg-[#e6e8ea] gap-px md:grid-cols-2">
            {product.specs.slice(0, 4).map((spec, index) => (
              <div key={spec.label} className="bg-white p-8">
                <dt className="text-xs uppercase tracking-[1.2px] text-muted">
                  {spec.label}
                </dt>
                <dd
                  className={
                    index < 3
                      ? "mt-3 text-4xl font-black tracking-[-1.8px] text-primary"
                      : "mt-3 text-2xl font-bold"
                  }
                >
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="agt-container pb-20">
        <div className="flex flex-col gap-3 border-b border-[#e6e8ea] pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.4px] text-primary">
              Application Fit
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-[-0.6px]">
              Applications
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-muted">
            Each use case is matched through grade selection, specification
            review, and documentation readiness.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {product.applications.map((application, index) => {
            const content = getApplicationContent(application);
            const Icon = content.icon;
            const industryHref = getApplicationIndustryHref(application);

            return (
              <article
                key={application}
                className="group relative overflow-hidden rounded-lg border border-[#dde3ea] bg-white p-7 shadow-[0_18px_42px_-34px_rgba(15,35,63,0.45)] transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_26px_54px_-34px_rgba(15,35,63,0.55)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-[#008bd2] to-accent" />
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/10 bg-primary/5 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={24} strokeWidth={2.1} />
                  </div>
                  <span className="rounded-full border border-[#dfe4ea] bg-[#f8fafc] px-3 py-1 text-[10px] font-bold uppercase tracking-[1.2px] text-muted">
                    Fit {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-6 text-xs font-bold uppercase tracking-[1.3px] text-accent">
                  {content.eyebrow}
                </p>
                {industryHref ? (
                  <Link
                    href={industryHref}
                    className="mt-2 inline-flex text-xl font-bold tracking-[-0.4px] text-foreground underline decoration-primary/25 underline-offset-4 transition hover:text-primary hover:decoration-primary"
                  >
                    {application}
                  </Link>
                ) : (
                  <h3 className="mt-2 text-xl font-bold tracking-[-0.4px] text-foreground">
                    {application}
                  </h3>
                )}
                <p className="mt-3 text-sm leading-[23px] text-muted">
                  {content.description}
                </p>
                <div className="mt-6 flex items-center gap-2 border-t border-[#e6e8ea] pt-4 text-xs font-bold uppercase tracking-[1.1px] text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {content.capability}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="agt-container pb-20">
        <h2 className="border-b border-[#e6e8ea] pb-4 text-2xl font-bold tracking-[-0.6px]">
          Case Examples
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {product.caseExamples.map((example) => (
            <article key={example} className="rounded-lg bg-white p-6 shadow-[0_4px_16px_-4px_rgba(25,28,30,0.06)]">
              <p className="text-sm leading-6 text-muted">{example}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="agt-container pb-24">
        <div className="rounded-lg border border-[#c2c6d4]/15 bg-[#f2f4f6] p-8 md:flex md:items-center md:justify-between md:p-12">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.6px]">
              Technical Documentation
            </h2>
            <p className="mt-2 text-sm text-muted">
              Access detailed product specifications and safety handling instructions.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-0">
            {product.documents.map((document, index) => (
              <a
                key={document.href}
                href={document.href}
                className="inline-flex items-center gap-2 rounded-[2px] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[1.4px] text-primary"
              >
                {index === 0 ? <FileText size={16} /> : <Download size={16} />}
                {document.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
