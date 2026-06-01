import type { Industry, Product } from "./types";

export type ProductFilterOption = {
  slug: string;
  label: string;
  productSlugs: string[];
};

const allowedIndustryFilters = [
  "water-treatment",
  "food-beverage",
  "mining",
  "agriculture",
];

export function getProductFilterOptions(
  industries: Industry[],
): ProductFilterOption[] {
  return allowedIndustryFilters
    .map((slug) => {
      const industry = industries.find((item) => item.slug === slug);

      return industry
        ? {
            slug: industry.slug,
            label: industry.name,
            productSlugs: industry.productSlugs,
          }
        : null;
    })
    .filter((option): option is ProductFilterOption => Boolean(option));
}

export function filterProducts(
  products: Product[],
  filters: ProductFilterOption[],
  activeFilterSlugs: string[],
  query: string,
) {
  const normalizedQuery = query.trim().toLowerCase();
  const activeFilterSet = new Set(activeFilterSlugs);
  const activeProductSlugs = new Set(
    filters
      .filter((filter) => activeFilterSet.has(filter.slug))
      .flatMap((filter) => filter.productSlugs),
  );

  return products.filter((product) => {
    const matchesCategory =
      activeProductSlugs.size === 0 || activeProductSlugs.has(product.slug);

    const searchableText = [
      product.name,
      product.category,
      product.summary,
      product.description,
      ...product.applications,
      ...product.specs.map((spec) => `${spec.label} ${spec.value}`),
    ]
      .join(" ")
      .toLowerCase();

    return matchesCategory && searchableText.includes(normalizedQuery);
  });
}
