export type ProductDocument = {
  label: string;
  href: string;
};

export type ProductGrade = {
  name: string;
  viscosity: string;
  solution?: string;
  purity?: string;
  degreeOfSubstitution?: string;
  ph?: string;
};

export type ProductGradeGroup = {
  name: string;
  summary: string;
  applications: string[];
  grades: ProductGrade[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  summary: string;
  description: string;
  applications: string[];
  specs: { label: string; value: string }[];
  gradeGroups?: ProductGradeGroup[];
  caseExamples: string[];
  documents: ProductDocument[];
  image: string;
};

export type ProductCategoryGroup = {
  slug: string;
  name: string;
  summary: string;
  products: Product[];
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

export type Industry = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  challenges: string[];
  solutions: string[];
  productSlugs: string[];
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
