"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/product-card";
import {
  filterProducts,
  type ProductFilterOption,
} from "@/lib/product-filter";
import type { Product } from "@/lib/types";

type ProductExplorerProps = {
  products: Product[];
  filters: ProductFilterOption[];
};

export function ProductExplorer({ products, filters }: ProductExplorerProps) {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [query, setQuery] = useState("");

  const visibleProducts = useMemo(
    () => filterProducts(products, filters, activeFilters, query),
    [activeFilters, filters, products, query],
  );

  const toggleFilter = (filterSlug: string) => {
    setActiveFilters((current) =>
      current.includes(filterSlug)
        ? current.filter((item) => item !== filterSlug)
        : [...current, filterSlug],
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setQuery("");
  };

  return (
    <section className="agt-container pb-24">
      <div className="rounded-lg border border-[#dde3ea] bg-white p-5 shadow-[0_18px_42px_-34px_rgba(15,35,63,0.5)] md:p-6">
        <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <label className="relative block">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
            />
            <span className="sr-only">Search products</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by product name, keyword, application, or specification"
              className="min-h-12 w-full rounded-[2px] border border-[#cfd7e2] bg-[#f8fafc] px-11 py-3 text-sm font-medium text-foreground outline-none transition placeholder:text-muted focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/10"
            />
            {query ? (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center rounded-[2px] text-muted transition hover:bg-line hover:text-foreground"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            ) : null}
          </label>

          <p className="text-sm font-bold text-primary">
            {visibleProducts.length} of {products.length} products
          </p>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {filters.map((filter) => {
            const isActive = activeFilters.includes(filter.slug);

            return (
              <button
                key={filter.slug}
                type="button"
                onClick={() => toggleFilter(filter.slug)}
                aria-pressed={isActive}
                className={`rounded-[2px] border px-4 py-2 text-xs font-black uppercase tracking-[0.7px] transition ${
                  isActive
                    ? "border-primary bg-primary text-white shadow-[0_14px_28px_-20px_rgba(0,63,135,0.8)]"
                    : "border-[#cfd7e2] bg-white text-primary hover:border-primary/45 hover:bg-[#f8fafc]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
          {activeFilters.length > 0 || query ? (
            <button
              type="button"
              onClick={clearFilters}
              className="rounded-[2px] border border-transparent px-4 py-2 text-xs font-black uppercase tracking-[0.7px] text-muted transition hover:bg-line hover:text-foreground"
            >
              Clear
            </button>
          ) : null}
        </div>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleProducts.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>

      {visibleProducts.length === 0 ? (
        <div className="mt-8 rounded-lg border border-dashed border-[#cfd7e2] bg-white p-10 text-center">
          <h2 className="text-2xl font-black tracking-[-0.5px] text-foreground">
            No matching products
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted">
            Try another keyword or adjust the selected category filters to
            return to the full AGT product catalog.
          </p>
          <button
            type="button"
            onClick={clearFilters}
            className="cta-red mt-6 inline-flex rounded-[2px] bg-accent px-6 py-3 text-sm font-bold uppercase tracking-[0.7px] text-white"
          >
            Reset catalog
          </button>
        </div>
      ) : null}
    </section>
  );
}
