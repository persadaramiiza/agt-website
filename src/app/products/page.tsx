import type { Metadata } from "next";
import Link from "next/link";
import { ProductExplorer } from "@/components/product-explorer";
import { getProductFilterOptions } from "@/lib/product-filter";
import { industries, products } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = createPageMetadata({
  title: "Chemical Products",
  description:
    "Explore AGT chemical products including CMC, TCCA 90, caustic soda, PAC, kaporit, corn starch, dextrose, maltodextrin, tapioca starch, glycerin, and ISP.",
  path: "/products",
  keywords: [
    "chemical products Indonesia",
    "CMC food grade",
    "TCCA 90",
    "caustic soda flake",
    "PAC water treatment",
  ],
});

export default function ProductsPage() {
  const productFilters = getProductFilterOptions(industries);

  return (
    <main className="bg-background">
      <section className="agt-container py-16">
        <span className="inline-flex rounded bg-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.6px] text-muted">
          Product Portfolio
        </span>
        <h1 className="mt-6 max-w-4xl text-5xl font-black leading-none tracking-[-1.5px] md:text-6xl">
          AGT master product catalog
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[29px] text-muted">
          Search the complete AGT product listing and filter by application
          category without leaving the catalog page.
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

      <ProductExplorer products={products} filters={productFilters} />
    </main>
  );
}
