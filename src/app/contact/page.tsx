import type { Metadata } from "next";
import Image from "next/image";
import { InquiryForm } from "@/components/inquiry-form";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact AGT for product inquiries and quote requests.",
};

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
          <p className="mt-6 max-w-2xl text-lg leading-[29px] text-muted">
            Share your product interest, application context, and company details.
            The submission is structured for Salesforce lead tracking when
            credentials are configured.
          </p>
        </div>
      </section>
      <section className="agt-container grid gap-10 py-20 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="rounded-lg bg-[#f2f4f6] p-8">
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
                Kawasan Industri Jababeka 2
                <br />
                Jln. Industri Selatan V blok FF1N
                <br />
                Pasirsari, Cikarang Sel.
                <br />
                Kabupaten Bekasi, Jawa Barat 17530
                <br />
                Office: (021) 50991189
              </p>
            </div>
            <div>
              <p className="font-bold text-foreground">Purchasing</p>
              <p className="mt-2 leading-[22px]">admin@arbetrading.com</p>
            </div>
          </div>
        </aside>
        <section className="industrial-shadow rounded-lg bg-white p-6 md:p-8">
          <InquiryForm products={products} defaultProduct={product} />
        </section>
      </section>
    </main>
  );
}
