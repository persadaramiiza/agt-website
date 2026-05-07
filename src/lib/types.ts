export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  applications: string[];
  specs: { label: string; value: string }[];
  image: string;
};

export type Resource = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  publishedAt: string;
  readTime: string;
  body: string[];
};

export type InquiryPayload = {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  product?: string;
  message: string;
  sourcePath?: string;
};
