import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Beaker, Download, FileText } from "lucide-react";
import { figmaAssets } from "@/lib/design";
import { getProduct, products } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

const applications = [
  {
    title: "Oil Drilling",
    body: "Acts as an effective fluid-loss controller and viscosifier in drilling muds, maintaining stability under pressure.",
    tags: ["Fluid Loss", "Viscosifier"],
  },
  {
    title: "Mining",
    body: "Used as a pelletizing binder in iron ore processing and as a depressant in flotation to improve grade recovery.",
    tags: ["Binder", "Depressant"],
  },
  {
    title: "Food & Beverage",
    body: "Provides excellent thickening, stabilization, and moisture retention in baked goods and sauces.",
    tags: ["Stabilizer", "Thickener"],
  },
];

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

  const heroImage = product.slug === "cmc" ? figmaAssets.cmcPowder : product.image;

  return (
    <main className="bg-background">
      <section className="agt-container grid gap-12 py-20 lg:grid-cols-2 lg:py-24">
        <div className="self-center">
          <span className="inline-flex rounded-[2px] border border-[#c2c6d4]/20 bg-line px-3 py-1 text-xs uppercase tracking-[1.2px] text-muted">
            {product.category}
          </span>
          <h1 className="mt-6 text-6xl font-black leading-none tracking-[-3px] text-foreground md:text-7xl">
            {product.name}
          </h1>
          <h2 className="mt-3 text-3xl font-bold tracking-[-0.9px] text-primary md:text-4xl">
            {product.name === "CMC" ? "Carboxymethyl Cellulose" : product.category}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-[29px] text-muted">
            {product.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={buildWhatsAppUrl(product.name)}
              className="rounded-[2px] bg-accent px-8 py-4 text-sm font-bold uppercase tracking-[1.4px] text-white shadow-[0_4px_7px_rgba(187,0,33,0.39)]"
            >
              Request Quote
            </a>
            <Link
              href="/resources"
              className="rounded-[2px] border border-[#c2c6d4]/30 bg-white px-8 py-4 text-sm font-bold uppercase tracking-[1.4px] text-primary"
            >
              Download TDS
            </Link>
          </div>
        </div>
        <div className="industrial-shadow overflow-hidden rounded-lg bg-white">
          <img src={heroImage} alt={product.name} className="h-96 w-full object-cover" />
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
        <h2 className="border-b border-[#e6e8ea] pb-4 text-2xl font-bold tracking-[-0.6px]">
          Applications
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {applications.map((app) => (
            <article key={app.title} className="rounded-lg bg-[#f2f4f6] p-8">
              <Beaker className="text-primary" size={28} />
              <h3 className="mt-5 text-xl font-bold">{app.title}</h3>
              <p className="mt-3 text-sm leading-[22px] text-muted">{app.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-[2px] bg-line px-2 py-1 text-[10px] uppercase tracking-[1px] text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
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
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-[2px] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[1.4px] text-primary"
            >
              <FileText size={16} /> TDS Download
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 rounded-[2px] bg-white px-6 py-3 text-sm font-bold uppercase tracking-[1.4px] text-primary"
            >
              <Download size={16} /> MSDS Download
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
