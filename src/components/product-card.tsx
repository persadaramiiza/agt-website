import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { ButtonLink } from "./button-link";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group overflow-hidden rounded-md border border-line bg-surface shadow-[0_4px_16px_-8px_rgba(25,28,30,0.14)] transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_18px_38px_-18px_rgba(0,63,135,0.35)]">
      <div className="relative aspect-[4/3]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,63,135,0.02)_0%,rgba(0,63,135,0.22)_100%)]" />
        <span className="absolute left-4 top-4 rounded-[2px] bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.6px] text-primary shadow-sm backdrop-blur">
          {product.category}
        </span>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-semibold">{product.name}</h2>
        <p className="mt-3 text-sm leading-6 text-muted">{product.summary}</p>
        <div className="mt-4 grid gap-2 border-t border-line pt-4">
          {product.specs.slice(0, 2).map((spec) => (
            <div key={spec.label} className="flex justify-between gap-4 text-xs">
              <span className="text-muted">{spec.label}</span>
              <span className="font-semibold text-foreground">{spec.value}</span>
            </div>
          ))}
        </div>
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
