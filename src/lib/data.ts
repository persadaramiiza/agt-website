import type { Product, Resource } from "./types";

export const products: Product[] = [
  {
    slug: "cmc",
    name: "CMC",
    category: "Cellulose Derivatives",
    summary:
      "Carboxymethyl Cellulose for viscosity control, stabilization, and water retention.",
    description:
      "A high-purity, versatile rheology modifier providing exceptional viscosity control, stabilization, and water retention across industrial applications.",
    applications: ["Oil Drilling", "Mining", "Food & Beverage"],
    specs: [
      { label: "Viscosity (2% Solution)", value: "50 - 10,000 mPa.s" },
      { label: "Degree of Substitution", value: "0.7 - 1.2" },
      { label: "Purity", value: ">= 99.5%" },
      { label: "Moisture", value: "<= 8.0%" },
    ],
    image:
      "https://www.figma.com/api/mcp/asset/11971d45-7044-4b6f-a97e-5212ed1c7206",
  },
  {
    slug: "maltodextrin",
    name: "Maltodextrin",
    category: "Food Stabilization",
    summary:
      "High-purity carbohydrate support for texture, body, and shelf-life control.",
    description:
      "A reliable food and industrial ingredient used to improve mouthfeel, stabilize moisture, and support consistent processing behavior.",
    applications: ["Food Processing", "Beverage Systems", "Industrial Blends"],
    specs: [
      { label: "Form", value: "Fine powder" },
      { label: "Packaging", value: "25 kg bag" },
      { label: "Documentation", value: "SDS and COA available" },
    ],
    image:
      "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "water-treatment-additive",
    name: "Water Treatment Additive",
    category: "Water Treatment",
    summary: "Coagulants and flocculants for industrial water purification.",
    description:
      "Advanced treatment support for municipal and industrial wastewater purification, helping teams manage compliance and process stability.",
    applications: ["Wastewater", "Process Water", "Heavy Industry"],
    specs: [
      { label: "Form", value: "Liquid / powder grades" },
      { label: "Support", value: "Dosage review available" },
      { label: "Use case", value: "Coagulation and flocculation" },
    ],
    image:
      "https://www.figma.com/api/mcp/asset/2eb41415-4e0a-44dd-bef7-8544da511f00",
  },
  {
    slug: "coating-performance-resin",
    name: "Coating Performance Resin",
    category: "Coatings & Adhesives",
    summary: "Resin support for durable coatings and adhesive formulations.",
    description:
      "Designed for formulators who need improved adhesion, film strength, and technical discussion before moving to sample qualification.",
    applications: ["Industrial coating", "Adhesive formulation", "Protective finish systems"],
    specs: [
      { label: "Form", value: "Resin solution" },
      { label: "Sample", value: "Available after technical review" },
      { label: "Use case", value: "Formulation support" },
    ],
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=1200&q=80",
  },
];

export const resources: Resource[] = [
  {
    slug: "selecting-industrial-chemical-suppliers",
    title: "Maximizing Mining Efficiency: Advanced Flocculation Techniques",
    category: "Mining Efficiency",
    excerpt:
      "How polymeric flocculants transform mineral processing, improving recovery rates while reducing water consumption.",
    publishedAt: "2024-10-15",
    readTime: "4 min read",
    body: [
      "Industrial buyers need more than a product list. Supplier selection should include documentation quality, response speed, technical clarity, and delivery reliability.",
      "Before requesting a quote, prepare the application context, estimated monthly volume, packaging preference, and any compliance documents required by your site.",
      "AGT can help qualify product options and route requests to the right commercial or technical contact.",
    ],
  },
  {
    slug: "requesting-product-samples",
    title: "Sustainable Water Treatment Solutions for Heavy Industry",
    category: "Water Treatment",
    excerpt:
      "Circular economy principles in industrial wastewater management using advanced CMC formulations.",
    publishedAt: "2024-10-12",
    readTime: "3 min read",
    body: [
      "Sample qualification moves faster when the supplier understands the intended application and test criteria from the first conversation.",
      "Useful details include current formulation, operating temperature, substrate or water profile, preferred packaging, and expected decision timeline.",
      "A clear request helps AGT recommend the right product, sample size, and next step.",
    ],
  },
  {
    slug: "crm-backed-inquiry-workflow",
    title: "The Role of Maltodextrin in Modern Food Processing",
    category: "Food Stabilization",
    excerpt:
      "Precise maltodextrin applications improve texture and shelf-life in processed foods.",
    publishedAt: "2024-10-08",
    readTime: "5 min read",
    body: [
      "Website forms become more valuable when each submission includes product context, page source, and contact details that are pushed into CRM automatically.",
      "For AGT, the inquiry workflow is designed to support both fast WhatsApp quote requests and structured Salesforce lead tracking.",
      "The result is a clearer handoff from website visitor to sales follow-up.",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
