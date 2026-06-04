import type { Metadata } from "next";
import { ResourceExplorer } from "@/components/resource-explorer";
import { resources } from "@/lib/data";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Chemical Resources",
  description:
    "Read AGT resources and practical notes for industrial chemical buyers, water treatment teams, food processors, and procurement teams.",
  path: "/resources",
  keywords: [
    "chemical buyer resources",
    "water treatment chemical guide",
    "industrial chemical articles",
  ],
});

export default function ResourcesPage() {
  return (
    <main className="bg-background">
      <section className="agt-container py-12">
        <h1 className="text-5xl font-black tracking-[-3px] text-primary md:text-6xl">
          Resources & Insights
        </h1>
        <p className="mt-4 max-w-2xl text-xl leading-[32px] text-muted">
          Technical articles, industry news, and expert insights to help you
          optimize your chemical processes.
        </p>
      </section>

      <ResourceExplorer resources={resources} />
    </main>
  );
}
