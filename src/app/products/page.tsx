import type { Metadata } from "next";
import Link from "next/link";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore AGT specialty chemical products and request product-specific quotes.",
};

export default function ProductsPage() {
  return (
    <main className="bg-background">
      <section className="agt-container py-16">
        <span className="inline-flex rounded bg-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.6px] text-muted">
          Product Portfolio
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-none tracking-[-1.5px] md:text-6xl">
          Complete AGT product portfolio for industrial supply needs
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[29px] text-muted">
          Browse AGT product lines with specifications, application fit, case
          examples, documentation availability, and direct quote access.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={buildWhatsAppUrl("AGT product portfolio")}
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
      <section className="agt-container pb-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
