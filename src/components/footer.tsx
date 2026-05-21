import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0]/40 bg-[#f8fafc]">
      <div className="agt-container grid gap-10 py-16 md:grid-cols-4">
        <div>
          <Image
            src="/images/brand/agt-logo.png"
            alt="Arbe Global Trading"
            width={961}
            height={186}
            className="h-10 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-[22.75px] text-[#64748b]">
            Reliable chemical materials and distribution support for essential
            industries across Southeast Asia.
          </p>
          <p className="mt-4 text-xs leading-5 text-[#94a3b8]">
            Copyright 2024 Arbe Chemindo. Reliable Chemicals. Delivered with Precision.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.7px] text-[#1e3a8a]">
            Industries
          </p>
          <div className="mt-5 grid gap-3 text-sm text-[#64748b] underline">
            <Link href="/industries/water-treatment">Water Treatment</Link>
            <Link href="/industries/mining">Mining</Link>
            <Link href="/industries/food-beverage">Food & Beverage</Link>
            <Link href="/industries/agriculture">Agriculture</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.7px] text-[#1e3a8a]">
            Products
          </p>
          <div className="mt-5 grid gap-3 text-sm text-[#64748b] underline">
            {products.slice(0, 6).map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`}>
                {product.name}
              </Link>
            ))}
            <Link href="/products" className="font-bold text-primary">
              View all products
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.7px] text-[#1e3a8a]">
            Support
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block text-sm font-bold text-[#dc2626] underline"
          >
            Request a Quote
          </Link>
          <p className="mt-4 text-sm leading-[22px] text-[#64748b]">
            admin@arbetrading.com
          </p>
        </div>
      </div>
    </footer>
  );
}
