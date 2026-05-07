import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#e2e8f0]/40 bg-[#f8fafc]">
      <div className="agt-container grid gap-10 py-16 md:grid-cols-4">
        <div>
          <p className="text-lg font-bold tracking-[-0.45px] text-[#1e3a8a]">
            AGT ARBE CHEMINDO
          </p>
          <p className="mt-4 max-w-xs text-sm leading-[22.75px] text-[#64748b]">
            Precision in chemical manufacturing and supply chain solutions for
            modern industrial demands.
          </p>
          <p className="mt-4 text-xs leading-5 text-[#94a3b8]">
            © 2024 Arbe Chemindo. Precision in Chemical Solutions.
          </p>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.7px] text-[#1e3a8a]">
            Industries
          </p>
          <div className="mt-5 grid gap-3 text-sm text-[#64748b] underline">
            <Link href="/solutions">Water Treatment</Link>
            <Link href="/solutions">Mining Efficiency</Link>
            <Link href="/solutions">Food Stabilization</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.7px] text-[#1e3a8a]">
            Products
          </p>
          <div className="mt-5 grid gap-3 text-sm text-[#64748b] underline">
            <Link href="/products/cmc">CMC</Link>
            <Link href="/products/maltodextrin">Maltodextrin</Link>
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
            Contact Expert →
          </Link>
        </div>
      </div>
    </footer>
  );
}
