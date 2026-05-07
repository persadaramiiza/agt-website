import type { Metadata } from "next";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

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
          Key products for industrial stability and formulation control
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-[29px] text-muted">
          Browse AGT product lines, review application fit, and continue with a
          structured inquiry or instant quote.
        </p>
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
