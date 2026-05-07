import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { ButtonLink } from "./button-link";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="overflow-hidden rounded-md border border-line bg-surface">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          {product.category}
        </p>
        <h2 className="mt-2 text-xl font-semibold">{product.name}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{product.summary}</p>
        <ButtonLink
          href={`/products/${product.slug}`}
          variant="ghost"
          className="mt-4 px-0"
        >
          View detail
          <ArrowUpRight size={16} />
        </ButtonLink>
      </div>
    </article>
  );
}
