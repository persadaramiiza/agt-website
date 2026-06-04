import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import {
  Beaker,
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
import { getProduct, industries, products } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import { buildWhatsAppDocumentUrl, buildWhatsAppUrl } from "@/lib/whatsapp";

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
      "Product-fit review for selected mining, mineral-processing, and plant-level chemical workflows.",
    capability: "Process review",
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
    eyebrow: "Textile Processing",
    description:
      "Product matching for textile preparation, sizing, finishing, or processing workflows based on the selected chemical.",
    capability: "Textile fit",
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

function getProductApplicationContent(
  productSlug: string,
  application: string,
): ApplicationCardContent {
  const productOverrides: Record<string, Record<string, ApplicationCardContent>> = {
    "caustic-soda-98-flake": {
      "Industrial Formulation": {
        eyebrow: "Alkali Input",
        description:
          "Strong alkali support for soap, detergent, cleaning, and selected industrial formulation workflows.",
        capability: "Alkali review",
        icon: Beaker,
      },
      Textile: {
        eyebrow: "Scouring & Mercerizing",
        description:
          "Caustic soda support for textile scouring, bleaching preparation, and cotton mercerizing workflows.",
        capability: "Textile process fit",
        icon: Shirt,
      },
      Mining: {
        eyebrow: "Alumina Processing",
        description:
          "Caustic soda support for selected alumina and Bayer-process workflows that need high-strength alkali input.",
        capability: "Alkali process review",
        icon: Hammer,
      },
    },
    "glycerin-wilmar": {
      Textile: {
        eyebrow: "Softening Support",
        description:
          "Glycerin support for textile softening, moisture retention, and selected finishing formulations.",
        capability: "Finishing review",
        icon: Shirt,
      },
    },
  };

  return productOverrides[productSlug]?.[application] ?? getApplicationContent(application);
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
    Texturizing: "/industries/food-beverage",
    "Wastewater Treatment": "/industries/water-treatment",
    "Water Treatment": "/industries/water-treatment",
  };

  return industryMap[application];
}

function getProductIndustryLink(productSlug: string, category: string) {
  const productMap: Record<string, string> = {
    "caustic-soda-98-flake": "/industries/mining",
    "cmc-food-grade": "/industries/food-beverage",
    "cmc-non-food-grade": "/industries/mining",
    "glycerin-wilmar": "/industries/food-beverage",
  };
  const categoryMap: Record<string, string> = {
    "Carbohydrates & Starches": "/industries/food-beverage",
    "Food Proteins & Ingredients": "/industries/food-beverage",
    "Water Treatment & Disinfection": "/industries/water-treatment",
  };

  const directHref = productMap[productSlug] ?? categoryMap[category];

  if (directHref) {
    const industry = industries.find(
      (item) => directHref === `/industries/${item.slug}`,
    );

    return industry ? { href: directHref, name: industry.name } : undefined;
  }

  const relatedIndustry = industries.find((industry) =>
    industry.productSlugs.includes(productSlug),
  );

  return relatedIndustry
    ? { href: `/industries/${relatedIndustry.slug}`, name: relatedIndustry.name }
    : undefined;
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

function isRequestOnlySpec(spec: { label: string; value: string }) {
  const requestOnlyLabels = ["Specification", "MSDS", "SDS"];

  return (
    requestOnlyLabels.includes(spec.label) &&
    spec.value.toLowerCase() === "available"
  );
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

  const metadata = createPageMetadata({
    title: product.name,
    description: product.summary,
    path: `/products/${product.slug}`,
    image: product.image,
    keywords: [
      product.name,
      product.category,
      ...product.applications,
      ...product.specs.map((spec) => `${spec.label} ${spec.value}`),
    ],
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;

  if (slug === "cmc") {
    permanentRedirect("/products/cmc-food-grade");
  }

  const product = getProduct(slug);

  if (!product) notFound();
  const productTitleClass = getProductTitleClass(product.name);
  const productIndustryLink = getProductIndustryLink(product.slug, product.category);
  const hasSingleGradeGroup = product.gradeGroups?.length === 1;
  const visibleSpecs = product.specs.filter((spec) => !isRequestOnlySpec(spec));
  const emailSubject = encodeURIComponent(`Request ${product.name} documentation`);
  const emailBody = encodeURIComponent(
    `Hello AGT team,\n\nI would like to request the specification/MSDS for ${product.name}.\n\nThank you.`,
  );

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
          {productIndustryLink ? (
            <Link
              href={productIndustryLink.href}
              className="mt-4 inline-flex text-2xl font-bold tracking-[-0.5px] text-primary underline decoration-primary/25 underline-offset-4 transition hover:text-primary-strong hover:decoration-primary md:text-3xl"
              style={{ color: "#003f87" }}
            >
              {productIndustryLink.name}
            </Link>
          ) : (
            <h2 className="mt-4 text-2xl font-bold tracking-[-0.5px] text-primary md:text-3xl">
              {product.category}
            </h2>
          )}
          <p className="mt-5 max-w-xl text-lg leading-[29px] text-muted">
            {product.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppUrl(product.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-red rounded-[2px] bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[1.4px] text-white shadow-[0_4px_7px_rgba(187,0,33,0.39)]"
            >
              Request an Instant Quote
            </a>
            {product.documents[0] ? (
              <a
                href={buildWhatsAppDocumentUrl(product.name, product.documents[0].label)}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[2px] border border-[#c2c6d4]/30 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[1.4px] text-primary"
              >
                Request Document via WhatsApp
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
            Product Details
          </p>
        </div>
        <div className="industrial-shadow overflow-hidden rounded-[2px] border border-[#c2c6d4]/15 bg-white">
          <dl className="grid bg-[#e6e8ea] gap-px md:grid-cols-2">
            {visibleSpecs.slice(0, 4).map((spec, index) => (
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

      {product.gradeGroups ? (
        <section className="agt-container pb-20">
          <div className="flex flex-col gap-3 border-b border-[#e6e8ea] pb-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[1.4px] text-primary">
                Grade Selection
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-[-0.6px]">
                {product.gradeGroups.length > 1
                  ? "Food and Non Food CMC Grades"
                  : product.gradeGroups[0].name}
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-6 text-muted">
              Each CMC derivative is matched by application type and target
              viscosity, from low-viscosity systems to high-build formulations.
            </p>
          </div>

          <div
            className={
              hasSingleGradeGroup
                ? "mt-8 grid gap-6"
                : "mt-8 grid gap-6 lg:grid-cols-2"
            }
          >
            {product.gradeGroups.map((group) => (
              <article
                key={group.name}
                className="overflow-hidden rounded-lg border border-[#dde3ea] bg-white shadow-[0_18px_42px_-34px_rgba(15,35,63,0.45)]"
              >
                <div className="border-b border-[#e6e8ea] p-7">
                  <p className="text-xs font-bold uppercase tracking-[1.3px] text-accent">
                    {group.name}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {group.summary}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.applications.map((application) => (
                      <span
                        key={application}
                        className="rounded-full border border-[#dfe4ea] bg-[#f8fafc] px-3 py-1 text-[11px] font-bold text-primary"
                      >
                        {application}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[820px] border-collapse text-left text-sm">
                    <thead className="bg-[#f2f4f6] text-xs uppercase tracking-[1.1px] text-muted">
                      <tr>
                        <th className="px-6 py-4 font-bold">Grade</th>
                        <th className="px-6 py-4 font-bold">Viscosity</th>
                        <th className="px-6 py-4 font-bold">Solution</th>
                        <th className="px-6 py-4 font-bold">Purity</th>
                        <th className="px-6 py-4 font-bold">DS</th>
                        <th className="px-6 py-4 font-bold">pH</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#e6e8ea]">
                      {group.grades.map((grade) => (
                        <tr key={grade.name} className="align-top">
                          <td className="px-6 py-5 font-black text-primary">
                            {grade.name}
                          </td>
                          <td className="px-6 py-5 font-bold text-foreground">
                            {grade.viscosity}
                          </td>
                          <td className="px-6 py-5 text-muted">
                            {grade.solution ?? "-"}
                          </td>
                          <td className="px-6 py-5 text-muted">
                            {grade.purity ?? "-"}
                          </td>
                          <td className="px-6 py-5 text-muted">
                            {grade.degreeOfSubstitution ?? "-"}
                          </td>
                          <td className="px-6 py-5 text-muted">
                            {grade.ph ?? "-"}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>
            ))}
          </div>
        </section>
      ) : null}

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
            Each use case is matched through product selection, specification
            review, and documentation readiness.
          </p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {product.applications.map((application, index) => {
            const content = getProductApplicationContent(product.slug, application);
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
                    className="mt-2 inline-flex text-xl font-bold tracking-[-0.4px] text-primary underline decoration-primary/25 underline-offset-4 transition hover:text-primary-strong hover:decoration-primary"
                    style={{ color: "#003f87" }}
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
              Request product specifications, MSDS/SDS, and safety handling
              instructions from AGT via WhatsApp or email.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-0">
            {product.documents.map((document) => (
              <a
                key={document.href}
                href={buildWhatsAppDocumentUrl(product.name, document.label)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-[2px] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[1.4px] text-primary"
              >
                <FileText size={16} />
                Request {document.label}
              </a>
            ))}
            <a
              href={`mailto:admin@arbetrading.com?subject=${emailSubject}&body=${emailBody}`}
              className="inline-flex items-center gap-2 rounded-[2px] border border-primary/20 bg-white px-6 py-3 text-sm font-bold uppercase tracking-[1.4px] text-primary"
            >
              <FileText size={16} />
              Request via Email
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
