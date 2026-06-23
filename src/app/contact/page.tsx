import type { Metadata } from "next";
import Image from "next/image";
import { InquiryForm } from "@/components/inquiry-form";
import { products } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact AGT",
  description:
    "Contact Arbe Global Trading for chemical product inquiries, quotation requests, MSDS/SDS, specifications, and technical discussions.",
  path: "/contact",
  keywords: [
    "chemical quotation Indonesia",
    "request chemical quote",
    "MSDS request",
    "chemical supplier contact",
  ],
});

type ContactPageProps = {
  searchParams: Promise<{ product?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { product } = await searchParams;

  return (
    <main className="bg-background">
      <section className="border-b border-line bg-[linear-gradient(135deg,#f8f9fb_0%,#eceef0_100%)] py-20">
        <div className="agt-container">
          <span className="inline-flex rounded bg-line px-3 py-1 text-xs font-semibold uppercase tracking-[0.6px] text-muted">
            Contact Expert
          </span>
          <h1 className="mt-6 max-w-3xl text-5xl font-black leading-none tracking-[-1.5px] md:text-6xl">
            Request a quote or technical discussion
          </h1>
        </div>
      </section>
      <section className="agt-container grid grid-cols-[minmax(0,1fr)] gap-10 py-20 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
        <aside className="min-w-0 rounded-lg bg-[#f2f4f6] p-6 md:p-8">
          <Image
            src="/images/brand/agt-logo.png"
            alt="Arbe Global Trading"
            width={961}
            height={186}
            className="h-12 w-auto"
          />
          <p className="mt-4 text-sm leading-[22px] text-muted">
            Precision in chemical manufacturing and supply chain solutions for
            modern industrial demands.
          </p>
          <div className="mt-8 grid gap-6 text-sm text-muted">
            <div>
              <p className="font-bold text-foreground">Head Office</p>
              <p className="mt-2 leading-[22px]">
                Satrio Tower, 20th Floor
                <br />
                Jl. Prof. DR. Satrio, Kuningan
                <br />
                Jakarta Selatan, DKI Jakarta 12950
              </p>
            </div>
            <div>
              <p className="font-bold text-foreground">Warehouse</p>
              <p className="mt-2 leading-[22px]">
                PT. ARBE GLOBAL TRADING
                <br />
                Kawasan Jababeka II
                <br />
                Jalan Industri Selatan V Blok FF 1N
                <br />
                Desa Pasir Sari, Kecamatan Cikarang Selatan
                <br />
                Kabupaten Bekasi, Jawa Barat 17530
              </p>
            </div>
            <div>
              <p className="font-bold text-foreground">Contact</p>
              <p className="mt-2 leading-[22px]">
                No. Telp: 0813-8080-876
                <br />
                admin@arbetrading.com
              </p>
            </div>
          </div>
        </aside>
        <section className="industrial-shadow min-w-0 rounded-lg bg-white p-6 md:p-8">
          <InquiryForm products={products} defaultProduct={product} />
        </section>
      </section>
    </main>
  );
}
