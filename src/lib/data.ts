import type { Industry, Product, ProductCategoryGroup, Resource } from "./types";

const productImages = {
  causticSoda: "/images/products/caustic-soda-98-flake.png",
  cmc: "/images/products/cmc.png",
  cornStarch: "/images/products/corn-starch-daesang.jpg",
  dextroseFufeng: "/images/products/dextrose-monohydrate-fufeng.jpeg",
  dextroseLihua: "/images/products/dextrose-monohydrate-lihua.webp",
  glycerin: "/images/products/glycerin-wilmar.jpeg",
  isolatedSoyaProtein: "/images/products/isolated-soya-protein.png",
  kaporit: "/images/products/kaporit-60.jpg",
  maltodextrin: "/images/products/maltodextrin-de-10-12-lihua.jpeg",
  pac: "/images/products/polyaluminium-chloride.png",
  tapioka: "/images/products/tapioka-tedco-agri.jpg",
  tccaGranule: "/images/products/tcca-90-granule.png",
  tccaPowder: "/images/products/tcca-90-granule.png",
  tccaTablet: "/images/products/tcca-90-tablet-200-gr.jpg",
};

export const products: Product[] = [
  {
    slug: "cmc",
    name: "Carboxymethyl Cellulose (CMC)",
    category: "Cellulose Derivatives",
    summary:
      "Carboxymethyl Cellulose for viscosity control, stabilization, binding, and water retention.",
    description:
      "A versatile cellulose derivative used as a rheology modifier, stabilizer, binder, and water-retention aid across food, mining, paper, ceramic, and textile applications.",
    applications: ["Food Industry", "Mining", "Paper", "Ceramic", "Textile"],
    specs: [
      { label: "Viscosity (2% Solution)", value: "50 - 10,000 mPa.s" },
      { label: "Degree of Substitution", value: "0.7 - 1.2" },
      { label: "Purity", value: ">= 99.5%" },
      { label: "Moisture", value: "<= 8.0%" },
    ],
    caseExamples: [
      "Mining flotation programs use CMC as a depressant and process modifier.",
      "Food producers use food-grade CMC to improve texture, stability, and water retention.",
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
    image: productImages.cmc,
  },
  {
    slug: "tcca-90-powder",
    name: "Trichloroisocyanuric Acid (TCCA 90% Powder)",
    category: "Water Treatment & Disinfection",
    summary:
      "Powder-grade TCCA for water treatment, wastewater treatment, algae control, and facility disinfection.",
    description:
      "A TCCA powder grade for chlorination programs that need practical handling, sanitation support, and documentation for treatment workflows.",
    applications: [
      "Water Treatment",
      "Wastewater Treatment",
      "Irrigation Algae Control",
      "Production Facility Disinfection",
    ],
    specs: [
      { label: "Grade", value: "90% powder" },
      { label: "Specification", value: "Available" },
      { label: "Use Case", value: "Disinfection support" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Shrimp farms use TCCA powder to sterilize ponds before stocking.",
    ],
    documents: [
      { label: "MSDS TCCA", href: "/documents/products/tcca-msds.pdf" },
    ],
    image: productImages.tccaPowder,
  },
  {
    slug: "tcca-90-tablet-200-gr",
    name: "Trichloroisocyanuric Acid Tablet (TCCA 90%, 200 gr)",
    category: "Water Treatment & Disinfection",
    summary:
      "Tablet-grade TCCA for pool, waterpark, poultry-farm, and water-line sanitation.",
    description:
      "A 200 gram tablet format for teams that need controlled chlorine release, easier dosage handling, and sanitation documentation.",
    applications: ["Water Treatment", "Pool Treatment", "Poultry Sanitation"],
    specs: [
      { label: "Grade", value: "90% tablet" },
      { label: "Tablet Size", value: "200 gr" },
      { label: "Use Case", value: "Chlorination support" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Hotels and waterparks use TCCA tablet 200 gr to maintain stable pool chlorine.",
      "Poultry farms use TCCA for coop disinfection and drinking-water line sanitation.",
    ],
    documents: [
      { label: "MSDS TCCA", href: "/documents/products/tcca-msds.pdf" },
    ],
    image: productImages.tccaTablet,
  },
  {
    slug: "tcca-90-granul-mesh-5-8",
    name: "Trichloroisocyanuric Acid Granule (TCCA 90%, Mesh 5-8)",
    category: "Water Treatment & Disinfection",
    summary:
      "Granular TCCA for cooling-tower treatment and sanitation programs requiring controlled dosing.",
    description:
      "A granular TCCA option for industrial treatment teams that need algae, slime, and sanitation support in process-water systems.",
    applications: ["Water Treatment", "Industrial Cleaning", "Cooling Tower Treatment"],
    specs: [
      { label: "Grade", value: "90% granule" },
      { label: "Mesh", value: "5-8" },
      { label: "Use Case", value: "Cooling tower support" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Factories use TCCA granular for cooling tower treatment to prevent slime and algae growth.",
    ],
    documents: [
      { label: "MSDS TCCA", href: "/documents/products/tcca-msds.pdf" },
    ],
    image: productImages.tccaGranule,
  },
  {
    slug: "kaporit-60",
    name: "Chlorine/Kaporit (60%)",
    category: "Water Treatment & Disinfection",
    summary:
      "Calcium hypochlorite support for water disinfection, pool treatment, sanitation, and wastewater workflows.",
    description:
      "A practical chlorination product for teams managing water treatment, hazardous wastewater, sanitation routines, and selected industrial uses.",
    applications: [
      "Water Treatment",
      "Pool Treatment",
      "Sanitation",
      "Metal Processing",
      "Hazardous Wastewater Treatment",
    ],
    specs: [
      { label: "Active Chlorine", value: "60%" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
      { label: "Use Case", value: "Disinfection support" },
    ],
    caseExamples: [
      "PDAM and water-treatment plants use kaporit for chlorination before distribution.",
      "Food and textile factories use kaporit for liquid-waste treatment before discharge.",
      "Hospitals use kaporit solution for floor, toilet, and isolation-area disinfection.",
      "Farmers and aquaculture teams use kaporit for pond and livestock-area sanitation.",
    ],
    documents: [
      { label: "MSDS Kaporit 60%", href: "/documents/products/kaporit-60-msds.pdf" },
      { label: "Spec Kaporit 60%", href: "/documents/products/kaporit-60-spec.pdf" },
    ],
    image: productImages.kaporit,
  },
  {
    slug: "polyaluminium-chloride",
    name: "Polyaluminium Chloride (PAC)",
    category: "Water Treatment & Disinfection",
    summary:
      "Polyaluminium Chloride support for coagulation, clarification, and industrial water-treatment programs.",
    description:
      "A water-treatment chemical option for teams that need coagulation and clarification support with documentation for municipal, industrial, and wastewater workflows.",
    applications: ["Water Treatment", "Wastewater Treatment", "Industrial Cleaning"],
    specs: [
      { label: "Product Type", value: "Polyaluminium Chloride" },
      { label: "Available Grades", value: "PAC HV / PAC LV" },
      { label: "Use Case", value: "Coagulation support" },
      { label: "SDS", value: "Available" },
    ],
    caseExamples: [
      "Water-treatment teams use PAC to support coagulation, clarification, and suspended-solid reduction workflows.",
    ],
    documents: [
      { label: "SDS PAC HV", href: "/documents/products/pac-hv-sds.pdf" },
      { label: "SDS PAC LV", href: "/documents/products/pac-lv-sds.pdf" },
    ],
    image: productImages.pac,
  },
  {
    slug: "corn-starch-daesang",
    name: "Corn Starch/Pati Jagung (Daesang)",
    category: "Carbohydrates & Starches",
    summary:
      "Corn starch for food thickening, moisture absorption, processed food formulation, and textile support.",
    description:
      "A corn starch ingredient used by food manufacturers for texture and thickening, with selected textile applications for fiber and sizing workflows.",
    applications: ["Food Processing", "Texturizing", "Industrial Blends", "Textile"],
    specs: [
      { label: "Product Type", value: "Corn starch" },
      { label: "Origin", value: "Daesang" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Sauce and instant soup producers use corn starch as a thickener.",
      "Fast-food restaurants use corn starch in fried-chicken batter coating.",
      "Biscuit, noodle, meatball, and processed-food producers use corn starch in dough formulation.",
      "Corn starch is used in yarn sizing for textile manufacturing.",
    ],
    documents: [
      { label: "MSDS Corn Starch", href: "/documents/products/corn-starch-msds.pdf" },
      { label: "Spec Corn Starch", href: "/documents/products/corn-starch-spec.pdf" },
    ],
    image: productImages.cornStarch,
  },
  {
    slug: "dextrose-monohydrate-fufeng",
    name: "Dextrose Monohydrate (Fufeng)",
    category: "Carbohydrates & Starches",
    summary:
      "Dextrose monohydrate for food and beverage sweetening, feed additives, and plant-growth stimulation.",
    description:
      "A crystalline carbohydrate ingredient for production teams that need sweetness, bulking behavior, feed support, and consistent documentation.",
    applications: ["Food Processing", "Beverage Systems", "Feed Additives", "Agriculture"],
    specs: [
      { label: "Product Type", value: "Dextrose monohydrate" },
      { label: "Origin", value: "Fufeng" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Brown sugar producers use dextrose as a sweetener.",
      "Hard-candy producers use dextrose as a sweetener and bulking agent.",
      "Ice cream producers use dextrose in mix formulation.",
      "Dextrose is used in feed additives for livestock and poultry.",
    ],
    documents: [
      { label: "MSDS Dextrose Fufeng", href: "/documents/products/dextrose-fufeng-msds.pdf" },
      { label: "Spec Dextrose Fufeng", href: "/documents/products/dextrose-fufeng-spec.pdf" },
    ],
    image: productImages.dextroseFufeng,
  },
  {
    slug: "dextrose-monohydrate-lihua",
    name: "Dextrose Monohydrate (Lihua)",
    category: "Carbohydrates & Starches",
    summary:
      "Lihua dextrose monohydrate option for carbohydrate, sweetening, and formulation support.",
    description:
      "A dextrose monohydrate product option for food, beverage, feed, and selected agricultural formulation needs.",
    applications: ["Food Processing", "Beverage Systems", "Feed Additives", "Agriculture"],
    specs: [
      { label: "Product Type", value: "Dextrose monohydrate" },
      { label: "Origin", value: "Lihua" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Used as an alternate dextrose source where buyers need matching documentation and supply options.",
    ],
    documents: [
      { label: "MSDS Dextrose Lihua", href: "/documents/products/dextrose-lihua-msds.pdf" },
      { label: "Spec Dextrose Lihua", href: "/documents/products/dextrose-lihua-spec.pdf" },
    ],
    image: productImages.dextroseLihua,
  },
  {
    slug: "isolated-soya-protein",
    name: "Isolated Soya Protein (ISP)",
    category: "Food Proteins & Ingredients",
    summary:
      "Plant-protein ingredient for meat alternatives, binders, thickeners, and protein beverages.",
    description:
      "A soy protein ingredient for manufacturers that need plant-protein content, texture improvement, binding, and ready-to-drink protein applications.",
    applications: ["Food Processing", "Beverage Systems", "Texturizing"],
    specs: [
      { label: "Product Type", value: "Isolated soya protein" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
      { label: "Use Case", value: "Protein and binder support" },
    ],
    caseExamples: [
      "Sausage and nugget producers use ISP to improve texture and yield.",
      "Meatball factories use ISP as an additional binder.",
      "ISP is used in ready-to-drink protein beverages.",
      "ISP is used in selected mayonnaise and dressing applications.",
    ],
    documents: [
      { label: "MSDS Isolated Soya Protein", href: "/documents/products/isolated-soya-protein-msds.pdf" },
      { label: "Spec Isolated Soya Protein", href: "/documents/products/isolated-soya-protein-spec.pdf" },
    ],
    image: productImages.isolatedSoyaProtein,
  },
  {
    slug: "tapioka-tedco-agri",
    name: "Tapioca Starch/Tepung Tapioka (Tedco Agri)",
    category: "Carbohydrates & Starches",
    summary:
      "Tapioca starch for food thickening, bakery binding, gluten-free alternatives, and textile production support.",
    description:
      "A tapioca product for food and beverage teams needing thickening, stabilizing, binding, and selected textile applications.",
    applications: ["Food Processing", "Texturizing", "Industrial Blends", "Textile"],
    specs: [
      { label: "Product Type", value: "Tapioca starch" },
      { label: "Brand", value: "Tedco Agri" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Meatball producers use tapioca as a primary binder in formulation.",
      "Cracker factories use tapioca as a primary base material.",
      "Tapioca is used in noodle and vermicelli formulations.",
    ],
    documents: [
      { label: "MSDS Tapioka", href: "/documents/products/tapioka-msds.pdf" },
      { label: "Spec Tapioka", href: "/documents/products/tapioka-spec.pdf" },
    ],
    image: productImages.tapioka,
  },
  {
    slug: "tcca-90-granul-mesh-5-15-50kg",
    name: "Trichloroisocyanuric Acid Granule (TCCA 90%, Mesh 5-15, 50 kg)",
    category: "Water Treatment & Disinfection",
    summary:
      "50 kg granular TCCA for water treatment, wastewater treatment, irrigation algae control, and facility disinfection.",
    description:
      "A 50 kg granular TCCA option for buyers who need larger packaging for recurring treatment and sanitation workflows.",
    applications: [
      "Water Treatment",
      "Wastewater Treatment",
      "Irrigation Algae Control",
      "Production Facility Disinfection",
    ],
    specs: [
      { label: "Grade", value: "90% granule" },
      { label: "Mesh", value: "5-15" },
      { label: "Packaging", value: "50 kg" },
      { label: "Specification", value: "Available" },
    ],
    caseExamples: [
      "Factories use TCCA granular for cooling tower treatment to prevent slime and algae growth.",
    ],
    documents: [
      { label: "MSDS TCCA", href: "/documents/products/tcca-msds.pdf" },
    ],
    image: productImages.tccaGranule,
  },
  {
    slug: "tcca-90-powder-15kg",
    name: "Trichloroisocyanuric Acid Powder (TCCA 90%, 15 kg)",
    category: "Water Treatment & Disinfection",
    summary:
      "15 kg TCCA powder packaging for water treatment, pond sterilization, and facility disinfection.",
    description:
      "A 15 kg powder packaging option for teams that need TCCA powder in a smaller operational pack size.",
    applications: ["Water Treatment", "Wastewater Treatment", "Production Facility Disinfection"],
    specs: [
      { label: "Grade", value: "90% powder" },
      { label: "Packaging", value: "15 kg" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Shrimp farms use TCCA powder to sterilize ponds before stocking.",
    ],
    documents: [
      { label: "MSDS TCCA", href: "/documents/products/tcca-msds.pdf" },
    ],
    image: productImages.tccaPowder,
  },
  {
    slug: "maltodextrin-de-10-12-lihua",
    name: "Maltodextrin (DE 10-12, Lihua)",
    category: "Carbohydrates & Starches",
    summary:
      "Maltodextrin DE 10-12 for beverages, feed supplements, bakery volume, and texture support.",
    description:
      "A maltodextrin ingredient for sachet beverages, milk formula, snack seasoning, ice cream, and bakery systems requiring body and carrier performance.",
    applications: ["Food Processing", "Beverage Systems", "Feed Additives", "Texturizing"],
    specs: [
      { label: "DE Value", value: "10 - 12" },
      { label: "Origin", value: "Lihua" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Sachet beverage producers use maltodextrin as a carrier and filler.",
      "Milk-formula producers use maltodextrin as an additional carbohydrate source.",
      "Snack factories use maltodextrin in seasoning powder.",
      "Maltodextrin improves body and mouthfeel in ice cream.",
    ],
    documents: [
      { label: "MSDS Maltodextrin", href: "/documents/products/maltodextrin-de-10-12-msds.pdf" },
      { label: "Spec Maltodextrin DE 10-12", href: "/documents/products/maltodextrin-de-10-12-spec.pdf" },
    ],
    image: productImages.maltodextrin,
  },
  {
    slug: "glycerin-wilmar",
    name: "Glycerin/Gliserin (Wilmar)",
    category: "Industrial & Personal Care Chemicals",
    summary:
      "Glycerin for cosmetics, skin care, food humectants, soap, textile softening, vape liquids, and biofuel workflows.",
    description:
      "A glycerin product for manufacturers that need moisturizing, humectant, solvent, softening, or carrier functionality across selected formulations.",
    applications: ["Personal Care", "Food Processing", "Industrial Formulation", "Textile"],
    specs: [
      { label: "Product Type", value: "Glycerin" },
      { label: "Origin", value: "Wilmar" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Lotion and cream producers use glycerin as a moisturizing agent.",
      "Transparent-soap producers use glycerin to improve soap moisture.",
      "Glycerin is used in cigarette and shisha tobacco products.",
      "Cake and confectionery producers use glycerin as a humectant.",
    ],
    documents: [
      { label: "MSDS Glycerin", href: "/documents/products/glycerin-msds.pdf" },
      { label: "Spec Glycerin", href: "/documents/products/glycerin-spec.pdf" },
    ],
    image: productImages.glycerin,
  },
  {
    slug: "caustic-soda-98-flake",
    name: "Sodium Hydroxide/Caustic Soda Flake (98%)",
    category: "Industrial & Personal Care Chemicals",
    summary:
      "Caustic soda flakes for soap and detergent production, textile scouring and bleaching, and alumina processing.",
    description:
      "A high-strength caustic soda flake product for industrial teams that need alkali input for saponification, textile processing, and selected alumina workflows.",
    applications: ["Industrial Formulation", "Textile", "Mining"],
    specs: [
      { label: "Purity", value: "98%" },
      { label: "Form", value: "Flake" },
      { label: "Specification", value: "Available" },
      { label: "MSDS", value: "Available" },
    ],
    caseExamples: [
      "Soap producers use caustic soda for saponification of vegetable oils.",
      "Textile factories use caustic soda for mercerizing cotton fabric.",
      "Caustic soda is used in the Bayer process for extracting alumina from bauxite.",
    ],
    documents: [
      { label: "MSDS Caustic Soda", href: "/documents/products/caustic-soda-msds.pdf" },
    ],
    image: productImages.causticSoda,
  },
];

const productCategoryOrder = [
  "Cellulose Derivatives",
  "Water Treatment & Disinfection",
  "Carbohydrates & Starches",
  "Food Proteins & Ingredients",
  "Industrial & Personal Care Chemicals",
];

const productCategoryDetails: Record<string, { slug: string; summary: string }> = {
  "Cellulose Derivatives": {
    slug: "cellulose-derivatives",
    summary:
      "Cellulose-based additives for viscosity control, stabilization, binding, and water retention.",
  },
  "Water Treatment & Disinfection": {
    slug: "water-treatment-disinfection",
    summary:
      "Chlorination and sanitation products for process water, wastewater, pools, ponds, and facility disinfection.",
  },
  "Carbohydrates & Starches": {
    slug: "carbohydrates-starches",
    summary:
      "Food, beverage, and industrial ingredients for body, texture, carrier systems, and process consistency.",
  },
  "Food Proteins & Ingredients": {
    slug: "food-proteins-ingredients",
    summary:
      "Protein and functional food ingredients for binding, texture, and beverage applications.",
  },
  "Industrial & Personal Care Chemicals": {
    slug: "industrial-personal-care-chemicals",
    summary:
      "Industrial formulation inputs for personal care, soap, textile, and selected heavy-industry workflows.",
  },
};

function slugifyCategory(category: string) {
  return category
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProductCategoryGroups(): ProductCategoryGroup[] {
  const categoryNames = Array.from(
    new Set([...productCategoryOrder, ...products.map((product) => product.category)]),
  );

  return categoryNames
    .map((category) => {
      const groupedProducts = products.filter((product) => product.category === category);
      const details = productCategoryDetails[category];

      return {
        slug: details?.slug ?? slugifyCategory(category),
        name: category,
        summary:
          details?.summary ??
          "Product options grouped by chemistry, application fit, and documentation needs.",
        products: groupedProducts,
      };
    })
    .filter((group) => group.products.length > 0);
}

export const industries: Industry[] = [
  {
    slug: "agriculture",
    name: "Agriculture",
    eyebrow: "Crop & Soil Performance",
    summary:
      "Treatment, sanitation, and input-support products for agricultural and aquaculture operations.",
    description:
      "AGT helps agriculture-focused buyers qualify products for pond preparation, algae control, sanitation routines, feed-related inputs, and selected crop-support applications.",
    image:
      "/images/resources/pertanian.png",
    challenges: [
      "Maintaining clean ponds, irrigation lines, and livestock facilities.",
      "Selecting the right disinfection grade and packaging for field conditions.",
      "Coordinating documentation for feed, farm, and aquaculture supply workflows.",
    ],
    solutions: [
      "TCCA and kaporit support for pond, water-line, and facility sanitation.",
      "Dextrose support for feed additive and crop-input discussions.",
      "Technical review to match grade, packaging, and documentation needs.",
    ],
    productSlugs: [
      "tcca-90-powder",
      "tcca-90-granul-mesh-5-8",
      "kaporit-60",
      "dextrose-monohydrate-fufeng",
      "dextrose-monohydrate-lihua",
    ],
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
      "/images/resources/pengelolaan%20air.png",
    challenges: [
      "Managing turbidity, organic load, and changing feed-water conditions.",
      "Maintaining sanitation targets without disrupting plant operations.",
      "Selecting chemicals with the right documentation and supply reliability.",
    ],
    solutions: [
      "Chlorination and disinfection product recommendations.",
      "TCCA, Chlorine, Polyaluminium Chloride, and Caustic Soda support for selected water-treatment workflows.",
      "Application review for dosage planning and sample qualification.",
    ],
    productSlugs: [
      "tcca-90-powder",
      "tcca-90-tablet-200-gr",
      "tcca-90-granul-mesh-5-8",
      "tcca-90-granul-mesh-5-15-50kg",
      "tcca-90-powder-15kg",
      "kaporit-60",
      "caustic-soda-98-flake",
      "polyaluminium-chloride",
    ],
  },
  {
    slug: "mining",
    name: "Mining",
    eyebrow: "Mineral Processing",
    summary:
      "Industrial chemical support for mineral processing, metal processing, and alumina workflows.",
    description:
      "For mining and mineral-processing teams, AGT focuses on practical industrial chemicals that support alkali processing, metal processing, and selected plant-level workflows.",
    image:
      "/images/resources/tambang.png",
    challenges: [
      "Maintaining consistent chemical supply for demanding plant operations.",
      "Matching industrial grades to process requirements and documentation needs.",
      "Supporting metal, mineral, and alumina-related workflows without product mismatch.",
    ],
    solutions: [
      "CMC support for selected flotation, depressant, and process-modifier applications.",
      "Caustic soda support for selected alumina and industrial alkali workflows.",
      "Kaporit support for selected metal-processing and disinfection needs.",
    ],
    productSlugs: ["cmc", "caustic-soda-98-flake", "kaporit-60"],
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
      "/images/resources/makanan.png",
    challenges: [
      "Controlling texture, body, and moisture behavior across batches.",
      "Maintaining shelf-life and sensory consistency in processed products.",
      "Coordinating ingredient documentation for purchasing and QA teams.",
    ],
    solutions: [
      "CMC, corn starch, tapioca, maltodextrin, and dextrose options for formulation and process needs.",
      "Isolated soya protein and glycerin support for texture, binding, protein, and humectant applications.",
      "SDS, specification, packaging, and sample discussion during qualification.",
    ],
    productSlugs: [
      "cmc",
      "corn-starch-daesang",
      "dextrose-monohydrate-fufeng",
      "dextrose-monohydrate-lihua",
      "isolated-soya-protein",
      "tapioka-tedco-agri",
      "maltodextrin-de-10-12-lihua",
      "glycerin-wilmar",
    ],
  },
];

export const resources: Resource[] = [
  {
    slug: "mining-flocculation-techniques",
    title: "Industrial Chemical Fit for Mineral Processing",
    category: "Mining Efficiency",
    excerpt:
      "How the right industrial chemical grade supports mineral processing, metal processing, and plant reliability.",
    publishedAt: "2024-10-15",
    readTime: "4 min read",
    body: [
      "Mining and mineral-processing operations often face variable process conditions, documentation requirements, and supply-continuity pressure.",
      "Products such as caustic soda and selected chlorination products can support specific alumina, metal-processing, sanitation, and plant-level workflows when matched to the operating context.",
      "AGT helps customers review application context, grade requirements, documentation needs, packaging, and supply continuity before moving into sample qualification.",
    ],
  },
  {
    slug: "water-treatment-heavy-industry",
    title: "Sustainable Water Treatment Solutions for Heavy Industry",
    category: "Water Treatment",
    excerpt:
      "Industrial wastewater and sanitation workflows using fit-for-purpose chlorination products.",
    publishedAt: "2024-10-12",
    readTime: "3 min read",
    body: [
      "Heavy industry water-treatment programs need stable disinfection, practical handling, and documentation that supports plant-level compliance workflows.",
      "Products such as TCCA and Kaporit can support sanitation, algae control, swimming pool treatment, process-water programs, and wastewater disinfection when applied with the right dosage plan.",
      "Before requesting a quote, buyers should prepare water profile, application target, preferred form, monthly volume, packaging needs, and required MSDS documentation.",
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
