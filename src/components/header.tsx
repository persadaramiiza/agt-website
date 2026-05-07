import Link from "next/link";
import { Beaker } from "lucide-react";

const navItems = [
  { href: "/products", label: "Products" },
  { href: "/solutions", label: "Solutions" },
  { href: "/why-arbe", label: "Why Arbe" },
  { href: "/resources", label: "Resources" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/85 shadow-[0_12px_32px_-4px_rgba(25,28,30,0.08)] backdrop-blur-xl">
      <div className="agt-container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Beaker className="hidden text-primary sm:block" size={18} />
          <span className="text-sm font-black tracking-[-0.7px] text-[#1e3a8a] sm:text-xl">
            AGT ARBE CHEMINDO
          </span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b-2 border-transparent pb-1 text-xs font-medium uppercase tracking-[-0.3px] text-[#64748b] transition hover:border-accent hover:text-[#1e40af]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="rounded-[2px] bg-accent px-4 py-2 text-xs font-bold uppercase tracking-[0.7px] text-white shadow-[0_4px_7px_rgba(187,0,33,0.28)] sm:px-6 sm:text-sm"
        >
          Request a Quote
        </Link>
      </div>
    </header>
  );
}
