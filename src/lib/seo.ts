import type { Metadata } from "next";

const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.arbetrading.com";

const canonicalSiteUrl = configuredSiteUrl
  .replace(/\/$/, "")
  .replace("https://arbetrading.com", "https://www.arbetrading.com");

export const siteConfig = {
  name: "Arbe Global Trading",
  shortName: "AGT",
  url: canonicalSiteUrl,
  description:
    "Arbe Global Trading supplies specialty chemicals for water treatment, food and beverage, mining, agriculture, and industrial formulation needs in Indonesia.",
  email: "admin@arbetrading.com",
  phone: "+628138080876",
  keywords: [
    "chemical distributor Indonesia",
    "specialty chemical supplier Indonesia",
    "industrial chemical supplier",
    "water treatment chemical supplier",
    "food grade chemical supplier",
    "caustic soda supplier Indonesia",
    "TCCA 90 supplier Indonesia",
    "CMC food grade Indonesia",
    "polyaluminium chloride supplier",
    "Arbe Global Trading",
  ],
};

export function absoluteUrl(path = "") {
  const siteUrl = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  return encodeURI(`${siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`);
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords = [],
  image = "/images/brand/agt-logo.png",
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
}): Metadata {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image);

  return {
    title,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: imageUrl,
          alt: siteConfig.name,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}
