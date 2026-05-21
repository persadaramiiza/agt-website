import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Factory, FlaskConical } from "lucide-react";
import { getIndustry, getProduct, industries } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Product } from "@/lib/types";

type IndustryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
  params,
}: IndustryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) return { title: "Industry not found" };

  return {
    title: industry.name,
    description: industry.summary,
  };
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = getIndustry(slug);

  if (!industry) notFound();

  const relatedProducts = industry.productSlugs
    .map((productSlug) => getProduct(productSlug))
    .filter((product): product is Product => Boolean(product));

  return (
    <main className="bg-background">
      <section className="relative overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,63,135,0.96),rgba(0,86,179,0.74)),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.26),transparent_42%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.52)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.52)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="agt-container relative grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
          <div className="self-center">
            <span className="inline-flex rounded-[2px] bg-white/14 px-3 py-1 text-xs font-bold uppercase tracking-[1.2px] text-white">
              {industry.eyebrow}
            </span>
            <h1 className="mt-6 text-5xl font-black leading-none tracking-[-2px] text-white md:text-7xl">
              {industry.name}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-[#d7e2ff]">
              {industry.summary}
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={buildWhatsAppUrl(`${industry.name} industry solutions`)}
                className="cta-red inline-flex items-center gap-2 rounded-[2px] bg-accent px-7 py-4 text-sm font-bold uppercase tracking-[0.7px] shadow-lg"
              >
                Request Industry Quote <ArrowRight size={14} />
              </a>
              <Link
                href="/products"
                className="rounded-[2px] border-2 border-white/70 bg-white/10 px-7 py-4 text-sm font-bold uppercase tracking-[0.7px] text-white shadow-[0_12px_28px_-20px_rgba(255,255,255,0.8)] backdrop-blur transition hover:border-white hover:bg-white/20"
                style={{ color: "#ffffff" }}
              >
                View Products
              </Link>
            </div>
          </div>
          <div className="industrial-shadow overflow-hidden rounded-lg bg-black">
            <img
              src={industry.image}
              alt={industry.name}
              className="h-[360px] w-full object-cover md:h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="agt-container grid gap-10 py-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <span className="inline-flex size-12 items-center justify-center rounded-[2px] bg-primary/10 text-primary">
            <Factory size={24} />
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-[-0.8px]">
            Industry Context
          </h2>
          <p className="mt-4 max-w-xl text-base leading-7 text-muted">
            {industry.description}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-lg bg-white p-8 shadow-[0_4px_16px_-4px_rgba(25,28,30,0.06)]">
            <h3 className="text-xl font-bold">Common Challenges</h3>
            <ul className="mt-6 grid gap-4">
              {industry.challenges.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-accent" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg bg-[#f2f4f6] p-8">
            <h3 className="text-xl font-bold">AGT Support</h3>
            <ul className="mt-6 grid gap-4">
              {industry.solutions.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-6 text-muted">
                  <FlaskConical className="mt-0.5 shrink-0 text-primary" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="agt-container pb-24">
        <div className="mb-8 flex flex-col gap-3 border-b border-line pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent">
              Recommended Products
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-[-0.8px]">
              Product options for {industry.name}
            </h2>
          </div>
          <Link href="/products" className="font-bold text-primary">
            Browse all products
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {relatedProducts.map((product) => (
            <Link
              href={`/products/${product.slug}`}
              key={product.slug}
              className="group rounded-lg bg-white p-6 shadow-[0_4px_16px_-4px_rgba(25,28,30,0.06)] transition hover:-translate-y-1 hover:shadow-[0_14px_36px_-12px_rgba(25,28,30,0.18)]"
            >
              <p className="text-xs font-bold uppercase tracking-[1px] text-primary">
                {product.category}
              </p>
              <h3 className="mt-3 text-xl font-bold group-hover:text-primary">
                {product.name}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">{product.summary}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
