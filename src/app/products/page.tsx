import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { getProductCategoryGroups } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore AGT specialty chemical products and request product-specific quotes.",
};

export default function ProductsPage() {
  const productCategoryGroups = getProductCategoryGroups();

  return (
    <main className="bg-background">
      <section className="agt-container py-16">
        <span className="inline-flex rounded bg-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.6px] text-muted">
          Product Portfolio
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-none tracking-[-1.5px] md:text-6xl">
          AGT product portfolio organized by chemical category
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[29px] text-muted">
          Browse product categories with specification highlights, application
          fit, documentation availability, and direct quote access.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={buildWhatsAppUrl("AGT product portfolio")}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-red inline-flex rounded-[2px] bg-accent px-7 py-3 text-sm font-bold uppercase tracking-[0.7px] text-white"
          >
            Request an Instant Quote
          </a>
          <Link
            href="/contact"
            className="inline-flex rounded-[2px] border border-line bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.7px] text-primary"
          >
            Contact Sales
          </Link>
        </div>
      </section>

      <section className="agt-container pb-10">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {productCategoryGroups.map((group) => (
            <a
              key={group.slug}
              href={`#${group.slug}`}
              className="group rounded-lg border border-[#dfe4ea] bg-white p-5 shadow-[0_14px_36px_-30px_rgba(15,35,63,0.5)] transition duration-200 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_24px_46px_-32px_rgba(15,35,63,0.55)]"
            >
              <h2 className="text-base font-bold tracking-[-0.2px] text-foreground">
                {group.name}
              </h2>
              <p className="mt-3 text-sm leading-6 text-muted">{group.summary}</p>
              <div className="mt-5 flex items-center justify-between border-t border-[#e6e8ea] pt-4">
                <span className="text-xs font-bold uppercase tracking-[1px] text-primary">
                  {group.products.length}{" "}
                  {group.products.length === 1 ? "product" : "products"}
                </span>
                <span className="text-xs font-semibold text-muted transition group-hover:text-primary">
                  View category
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="agt-container pb-24">
        <div className="grid gap-14">
          {productCategoryGroups.map((group) => (
            <section key={group.slug} id={group.slug} className="scroll-mt-28">
              <div className="mb-6 flex flex-col gap-3 border-b border-[#e6e8ea] pb-5 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[1.4px] text-accent">
                    Product Category
                  </p>
                  <h2 className="mt-2 text-3xl font-black tracking-[-1px] text-foreground">
                    {group.name}
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-6 text-muted">
                  {group.summary}
                </p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {group.products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
