import type { Industry, Product, Resource } from "./types";

const productImages = {
  powderScoop:
    "https://images.unsplash.com/photo-1693996045463-6ea86d10a2e7?auto=format&fit=crop&w=1200&q=80",
  powderGranules:
    "https://images.unsplash.com/photo-1750639096812-6f2b5e6c024b?auto=format&fit=crop&w=1200&q=80",
  powderLab:
    "https://images.unsplash.com/photo-1709296167942-799280f2a55c?auto=format&fit=crop&w=1200&q=80",
  powderBottles:
    "https://images.unsplash.com/photo-1774169440279-ff1f9ecfc523?auto=format&fit=crop&w=1200&q=80",
  industrialDrums:
    "https://images.unsplash.com/photo-1567016958860-87d898933af1?auto=format&fit=crop&w=1200&q=80",
  waterTreatment:
    "https://images.unsplash.com/photo-1775704012923-8a94fccad402?auto=format&fit=crop&w=1200&q=80",
};

export const products: Product[] = [
  {
    slug: "cmc",
    name: "CMC",
    category: "Cellulose Derivatives",
    summary:
      "Carboxymethyl Cellulose for viscosity control, stabilization, and water retention.",
    description:
      "A high-purity, versatile rheology modifier providing exceptional viscosity control, stabilization, and water retention across industrial applications.",
    applications: ["Food Industry", "Mining", "Paper", "Ceramic", "Textile"],
    specs: [
      { label: "Viscosity (2% Solution)", value: "50 - 10,000 mPa.s" },
      { label: "Degree of Substitution", value: "0.7 - 1.2" },
      { label: "Purity", value: ">= 99.5%" },
      { label: "Moisture", value: "<= 8.0%" },
    ],
    caseExamples: [
      "Mining flotation programs using CMC as a depressant and process modifier.",
      "Ice cream producers use 0.2-0.5% food-grade CMC to improve creamy texture, melt resistance, and shelf-life stability.",
      "Textile printing teams use CMC as a printing thickener to improve pattern sharpness and viscosity stability.",
    ],
    documents: [
      { label: "SDS CMC Food Grades", href: "/documents/products/cmc-food-grades-sds.pdf" },
      { label: "SDS CMC HVT", href: "/documents/products/cmc-hvt-sds.pdf" },
      { label: "CMC Case Example", href: "/documents/products/cmc-case-example.pdf" },
      {
        label: "Arbecel Spec & Application",
        href: "/documents/products/arbecel-spec-and-application.xlsx",
      },
    ],
    image: productImages.powderScoop,
  },
  {
    slug: "maltodextrin",
    name: "Maltodextrine",
    category: "Food Stabilization",
    summary:
      "High-purity carbohydrate support for texture, body, and shelf-life control.",
    description:
      "A reliable food and industrial ingredient used to improve mouthfeel, stabilize moisture, and support consistent processing behavior.",
    applications: ["Food Processing", "Beverage Systems", "Industrial Blends"],
    specs: [
      { label: "DE Value", value: "10 - 12" },
      { label: "Water", value: "<= 6%" },
      { label: "Solubility", value: ">= 98%" },
      { label: "pH Value", value: "4.5 - 6.5" },
    ],
    caseExamples: [
      "Sachet beverage producers use maltodextrin as a carrier and filler.",
      "Snack manufacturers use maltodextrin in seasoning powder systems.",
      "Ice cream producers use maltodextrin to improve body and mouthfeel.",
    ],
    documents: [
      { label: "MSDS Maltodextrin", href: "/documents/products/maltodextrin-de-10-12-msds.pdf" },
      { label: "Spec Maltodextrin DE 10-12", href: "/documents/products/maltodextrin-de-10-12-spec.pdf" },
    ],
    image: productImages.powderLab,
  },
  {
    slug: "dextrose-monohydrate",
    name: "Dextrose Monohydrate",
    category: "Food & Beverage",
    summary:
      "Crystalline carbohydrate ingredient for food, beverage, and fermentation applications.",
    description:
      "A reliable dextrose grade for teams that need consistent sweetness, fermentation support, and controlled formulation behavior.",
    applications: ["Food Processing", "Beverage Systems", "Fermentation"],
    specs: [
      { label: "Purity", value: ">= 99.0%" },
      { label: "Moisture", value: "<= 10.0%" },
      { label: "pH Value", value: "4.0 - 6.5" },
      { label: "Packaging", value: "25 kg PP bag" },
    ],
    caseExamples: [
      "Brown sugar producers use dextrose as a sweetener.",
      "Hard candy producers use dextrose as a sweetener and bulking agent.",
      "Dextrose is used in feed additives for livestock and poultry.",
    ],
    documents: [
      { label: "MSDS Dextrose Fufeng", href: "/documents/products/dextrose-fufeng-msds.pdf" },
      { label: "Spec Dextrose Fufeng", href: "/documents/products/dextrose-fufeng-spec.pdf" },
      { label: "MSDS Dextrose Lihua", href: "/documents/products/dextrose-lihua-msds.pdf" },
      { label: "Spec Dextrose Lihua", href: "/documents/products/dextrose-lihua-spec.pdf" },
    ],
    image: productImages.powderScoop,
  },
  {
    slug: "corn-starch",
    name: "Corn Starch",
    category: "Food & Beverage",
    summary:
      "Starch-based thickening and texturizing support for industrial formulations.",
    description:
      "A practical starch ingredient for food stabilization, process consistency, and industrial formulation support.",
    applications: ["Food Processing", "Texturizing", "Industrial Blends"],
    specs: [
      { label: "Appearance", value: "White powder" },
      { label: "Moisture", value: "Max. 13.5 - 14.0%" },
      { label: "Total Starch", value: "Min. 98.0%" },
      { label: "Fineness (Mesh 100)", value: "Min. 98.5%" },
    ],
    caseExamples: [
      "Sauce and instant soup producers use corn starch as a thickener.",
      "Fast-food restaurants use corn starch in fried chicken batter coating.",
      "Corn starch is used in yarn sizing for textile manufacturing.",
    ],
    documents: [
      { label: "MSDS Corn Starch", href: "/documents/products/corn-starch-msds.pdf" },
      { label: "Spec Corn Starch", href: "/documents/products/corn-starch-spec.pdf" },
    ],
    image: productImages.powderLab,
  },
  {
    slug: "tcca",
    name: "TCCA 90%",
    category: "Water Treatment",
    summary:
      "Chlorination support for water treatment and sanitation workflows.",
    description:
      "A water-treatment chemical option available in powder, tablet, and granule grades for controlled sanitation, disinfection, and industrial treatment planning.",
    applications: ["Water Treatment", "Sanitation", "Industrial Cleaning"],
    specs: [
      { label: "Available Grades", value: "Powder, tablet, granule" },
      { label: "Tablet Size", value: "200 g" },
      { label: "Granule Mesh", value: "5-8 / 5-15" },
      { label: "Use Case", value: "Disinfection support" },
    ],
    caseExamples: [
      "Shrimp farms use TCCA powder to sterilize ponds before stocking.",
      "Hotels and waterparks use TCCA 200 g tablets to maintain stable pool chlorine.",
      "Factories use TCCA granular for cooling tower treatment to prevent slime and algae growth.",
    ],
    documents: [
      { label: "MSDS TCCA", href: "/documents/products/tcca-msds.pdf" },
      { label: "COA TCCA Tablet", href: "/documents/products/tcca-tablet-coa.pdf" },
    ],
    image: productImages.powderGranules,
  },
  {
    slug: "citric-acid",
    name: "Citric Acid",
    category: "Food & Beverage",
    summary:
      "Acidity regulator and chelating support for food, beverage, and industrial formulations.",
    description:
      "A versatile acidulant for pH control, preservation support, acidity control, and formulation adjustment across selected applications.",
    applications: ["Food Processing", "Beverage Systems", "pH Control", "Industrial Formulation"],
    specs: [
      { label: "Form", value: "Crystalline powder" },
      { label: "Packaging", value: "25 kg bag" },
      { label: "Use Case", value: "Acidity regulator" },
      { label: "Documentation", value: "Available on request" },
    ],
    caseExamples: [
      "Food and beverage production teams use citric acid for pH and acidity control.",
      "Industrial formulation teams use citric acid for chelation and adjustment.",
    ],
    documents: [
      { label: "MSDS available on request", href: "/contact?product=Citric%20Acid" },
      { label: "Spec available on request", href: "/contact?product=Citric%20Acid" },
    ],
    image: productImages.powderBottles,
  },
];

export const industries: Industry[] = [
  {
    slug: "agriculture",
    name: "Agriculture",
    eyebrow: "Crop & Soil Performance",
    summary:
      "Chemical and cellulose-based support for more consistent agricultural inputs and field performance.",
    description:
      "AGT helps agriculture-focused manufacturers and distributors qualify stabilizers, binders, and formulation aids that improve handling, dispersion, and product consistency from production to field application.",
    image:
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Maintaining consistent viscosity and suspension in agrochemical formulations.",
      "Reducing separation, clumping, and handling issues during storage.",
      "Supporting reliable delivery across humid and demanding field conditions.",
    ],
    solutions: [
      "CMC-based viscosity and suspension control for liquid formulations.",
      "Starch and carbohydrate ingredients for binding and carrier applications.",
      "Technical review to match grade, packaging, and documentation needs.",
    ],
    productSlugs: ["corn-starch", "dextrose-monohydrate", "cmc"],
  },
  {
    slug: "water-treatment",
    name: "Water Treatment",
    eyebrow: "Process Water & Wastewater",
    summary:
      "Treatment chemistry for industrial water quality, sanitation, and operational stability.",
    description:
      "AGT supports teams working on process water, wastewater, and sanitation programs with practical product options and technical discussion around dosage, handling, and documentation.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Managing turbidity, organic load, and changing feed-water conditions.",
      "Maintaining sanitation targets without disrupting plant operations.",
      "Selecting chemicals with the right documentation and supply reliability.",
    ],
    solutions: [
      "Coagulation, flocculation, and treatment additive recommendations.",
      "TCCA support for selected sanitation and disinfection workflows.",
      "Application review for dosage planning and sample qualification.",
    ],
    productSlugs: ["tcca", "citric-acid", "cmc"],
  },
  {
    slug: "mining",
    name: "Mining",
    eyebrow: "Mineral Processing",
    summary:
      "Mining formulation support for recovery, separation, binding, and process efficiency.",
    description:
      "For mineral processors, AGT focuses on practical chemical programs that support flotation, pelletizing, water management, and operational consistency across variable ore conditions.",
    image:
      "https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Ore variability that affects recovery rate and reagent consumption.",
      "Binder and depressant performance under demanding process conditions.",
      "Water reuse targets that require stable treatment chemistry.",
    ],
    solutions: [
      "CMC support for binding, depressant, and selected flotation applications.",
      "Citric acid support for selected pH adjustment and chelation workflows.",
      "Technical discussion to align product grade with plant conditions.",
    ],
    productSlugs: ["cmc", "citric-acid"],
  },
  {
    slug: "food-beverage",
    name: "Food & Beverage",
    eyebrow: "Texture & Stability",
    summary:
      "Food ingredient support for texture, mouthfeel, pH control, and formulation consistency.",
    description:
      "AGT supplies food and beverage manufacturers with stabilizers, carbohydrate ingredients, and acidulants used to improve consistency, processing behavior, and finished product quality.",
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
    challenges: [
      "Controlling texture, body, and moisture behavior across batches.",
      "Maintaining shelf-life and sensory consistency in processed products.",
      "Coordinating ingredient documentation for purchasing and QA teams.",
    ],
    solutions: [
      "CMC, maltodextrine, and starch support for stabilizing and texturizing.",
      "Dextrose, citric acid, maltodextrine, and corn starch options for formulation and process needs.",
      "COA, SDS, packaging, and sample discussion during qualification.",
    ],
    productSlugs: [
      "cmc",
      "maltodextrin",
      "dextrose-monohydrate",
      "corn-starch",
      "citric-acid",
    ],
  },
];

export const resources: Resource[] = [
  {
    slug: "mining-flocculation-techniques",
    title: "Maximizing Mining Efficiency: Advanced Flocculation Techniques",
    category: "Mining Efficiency",
    excerpt:
      "How polymeric flocculants transform mineral processing, improving recovery rates while reducing water consumption.",
    publishedAt: "2024-10-15",
    readTime: "4 min read",
    body: [
      "Mining operations often face variable ore behavior, inconsistent recovery, and water-management pressure. A small mismatch in reagent selection can increase dosage, lower concentrate quality, and create avoidable downtime.",
      "CMC and related polymer programs can support depressant behavior, slurry stability, and separation consistency when the grade is matched to the ore profile and operating condition.",
      "AGT helps customers review application context, target recovery, dosage range, documentation needs, and supply continuity before moving into sample qualification.",
    ],
  },
  {
    slug: "water-treatment-heavy-industry",
    title: "Sustainable Water Treatment Solutions for Heavy Industry",
    category: "Water Treatment",
    excerpt:
      "Circular economy principles in industrial wastewater management using advanced CMC formulations.",
    publishedAt: "2024-10-12",
    readTime: "3 min read",
    body: [
      "Heavy industry water-treatment programs need stable disinfection, practical handling, and documentation that supports plant-level compliance workflows.",
      "Products such as TCCA and Kaporit can support sanitation, algae control, swimming pool treatment, process-water programs, and wastewater disinfection when applied with the right dosage plan.",
      "Before requesting a quote, buyers should prepare water profile, application target, preferred form, monthly volume, packaging needs, and required MSDS or COA documentation.",
    ],
  },
  {
    slug: "maltodextrin-food-processing",
    title: "The Role of Maltodextrin in Modern Food Processing",
    category: "Food Stabilization",
    excerpt:
      "Precise maltodextrin applications improve texture and shelf-life in processed foods.",
    publishedAt: "2024-10-08",
    readTime: "5 min read",
    body: [
      "Maltodextrin DE 10-12 is widely used as a carrier, filler, carbohydrate source, and body-building ingredient in food and beverage formulations.",
      "In practical production, maltodextrin can support sachet beverages, seasoning powder systems, milk formulas, snack applications, and ice cream texture improvement.",
      "AGT supports buyers with product specification, MSDS availability, packaging discussion, and application-fit review before sampling or recurring supply.",
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getIndustry(slug: string) {
  return industries.find((industry) => industry.slug === slug);
}

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
