"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Menu } from "lucide-react";
import { getProduct, industries, products } from "@/lib/data";
import type { Product } from "@/lib/types";

const navItems = [
  { href: "/solutions", label: "Solutions" },
  { href: "/why-arbe", label: "Why Arbe" },
  { href: "/resources", label: "Resources" },
];

const industryMenuOrder = [
  "water-treatment",
  "food-beverage",
  "mining",
  "agriculture",
];

export function Header() {
  const [activeIndustrySlug, setActiveIndustrySlug] = useState<string | null>(null);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(false);
  const orderedIndustries = industryMenuOrder
    .map((slug) => industries.find((industry) => industry.slug === slug))
    .filter((industry): industry is (typeof industries)[number] => Boolean(industry));
  const activeIndustry = orderedIndustries.find(
    (industry) => industry.slug === activeIndustrySlug,
  );
  const visibleProducts = activeIndustry
    ? activeIndustry.productSlugs
        .map((productSlug) => getProduct(productSlug))
        .filter((product): product is Product => Boolean(product))
    : products;
  const closeProductMenu = () => {
    setActiveIndustrySlug(null);
    setIsProductMenuOpen(false);
  };

  return (
    <header className="site-header sticky top-0 z-40 bg-white/85 shadow-[0_12px_32px_-4px_rgba(25,28,30,0.08)] backdrop-blur-xl">
      <div className="agt-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center" aria-label="AGT home">
          <Image
            src="/images/brand/agt-logo.png"
            alt="Arbe Global Trading"
            width={961}
            height={186}
            priority
            className="brand-mark h-9 w-auto sm:h-10"
          />
        </Link>
        <nav className="hidden h-full items-center gap-8 md:flex">
          <div
            className="group relative flex h-full items-center"
            onMouseEnter={() => setIsProductMenuOpen(true)}
            onMouseLeave={closeProductMenu}
            onPointerEnter={() => setIsProductMenuOpen(true)}
          >
            <Link
              href="/products"
              className="nav-link"
              onFocus={() => setIsProductMenuOpen(true)}
              onMouseEnter={() => setIsProductMenuOpen(true)}
              onPointerEnter={() => setIsProductMenuOpen(true)}
              onClick={closeProductMenu}
            >
              Products
            </Link>
            <div
              className={`nav-menu fixed left-1/2 top-16 w-[min(780px,calc(100vw-48px))] -translate-x-1/2 pt-5 transition duration-200 ${
                isProductMenuOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-3 opacity-0 pointer-events-none"
              }`}
            >
              <div
                className="nav-menu-panel industrial-shadow grid grid-cols-[0.72fr_1.28fr] gap-px overflow-hidden rounded-lg border border-[#e0e3e5] bg-[#e0e3e5]"
              >
                <div className="bg-white p-6">
                  <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent">
                    By Industry
                  </p>
                  <div className="mt-5 grid gap-1">
                    {orderedIndustries.map((industry) => (
                      <Link
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        onClick={closeProductMenu}
                        onFocus={() => setActiveIndustrySlug(industry.slug)}
                        onMouseEnter={() => setActiveIndustrySlug(industry.slug)}
                        className={`nav-menu-link flex items-center justify-between rounded-[2px] px-3 py-2 text-sm font-medium hover:bg-[#f2f4f6] hover:text-primary ${
                          activeIndustrySlug === industry.slug
                            ? "bg-[#f2f4f6] text-primary"
                            : "text-[#424752]"
                        }`}
                      >
                        {industry.name}
                        <ChevronRight size={14} />
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-white p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-bold uppercase tracking-[1.2px] text-accent">
                      {activeIndustry ? `For ${activeIndustry.name}` : "By Product"}
                    </p>
                    <Link
                      href={activeIndustry ? `/industries/${activeIndustry.slug}` : "/products"}
                      className="text-xs font-bold uppercase tracking-[0.7px] text-primary"
                      onClick={closeProductMenu}
                    >
                      {activeIndustry ? "View industry" : "View all"}
                    </Link>
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-1">
                    {visibleProducts.map((product) => (
                      <Link
                        key={product.slug}
                        href={`/products/${product.slug}`}
                        className="nav-menu-link rounded-[2px] px-3 py-2 text-sm font-medium text-[#424752] hover:bg-[#f2f4f6] hover:text-primary"
                        onClick={closeProductMenu}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="quote-cta cta-red hidden rounded-[2px] bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.7px] shadow-[0_4px_7px_rgba(187,0,33,0.28)] sm:px-6 sm:text-sm md:inline-flex"
          style={{ color: "#ffffff" }}
        >
          <span style={{ color: "#ffffff" }}>Request a Quote</span>
        </Link>
        <details className="group relative md:hidden">
          <summary className="mobile-menu-button flex size-10 cursor-pointer list-none items-center justify-center rounded-[2px] border border-line bg-white text-primary [&::-webkit-details-marker]:hidden">
            <Menu size={20} />
          </summary>
          <div className="mobile-nav-panel industrial-shadow absolute right-0 top-12 w-[calc(100vw-40px)] max-w-sm rounded-lg border border-line bg-white p-5">
            <div className="grid gap-4">
              <details className="mobile-submenu rounded bg-[#f8f9fb] p-4">
                <summary className="cursor-pointer list-none font-bold text-primary [&::-webkit-details-marker]:hidden">
                  Products
                </summary>
                <div className="mt-4 grid gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[1px] text-accent">
                      By Industry
                    </p>
                    <div className="mt-2 grid gap-2">
                      {orderedIndustries.map((industry) => (
                        <Link
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          className="nav-menu-link rounded-[2px] px-2 py-1 text-sm text-[#424752] hover:bg-white hover:text-primary"
                        >
                          {industry.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[1px] text-accent">
                      By Product
                    </p>
                    <div className="mt-2 grid gap-2">
                      {products.map((product) => (
                        <Link
                          key={product.slug}
                          href={`/products/${product.slug}`}
                          className="nav-menu-link rounded-[2px] px-2 py-1 text-sm text-[#424752] hover:bg-white hover:text-primary"
                        >
                          {product.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link className="font-bold text-primary" href="/products">
                    View all products
                  </Link>
                </div>
              </details>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="font-bold text-[#424752]">
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="quote-cta cta-red inline-flex justify-center rounded-[2px] bg-accent px-4 py-3 text-xs font-bold uppercase tracking-[0.7px]"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
