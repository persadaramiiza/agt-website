import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  title: {
    default: "AGT | Specialty Chemical Solutions",
    template: "%s | AGT",
  },
  description:
    "AGT supplies specialty chemical solutions, product guidance, and fast inquiry support for industrial teams in Indonesia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
