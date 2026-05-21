import { Product, CollectionCard, Testimonial } from "./types";

export const COLLECTIONS: CollectionCard[] = [
  {
    id: "coll-1",
    name: "The Sherwani Edit",
    description: "Royal silhouettes met with modern structured cuts for high-stature elegance.",
    gradient: "linear-gradient(135deg, #111111 0%, #1c1510 50%, #2f2113 100%)", // Deep bronze raw silk
    isNew: false,
    image: "/src/assets/images/royal_sherwani_1779384764489.png"
  },
  {
    id: "coll-2",
    name: "Sovereign Bandhgalas",
    description: "Ornate high-collar structures, hand-stitched detailing, designed for imperial visual elegance.",
    gradient: "linear-gradient(135deg, #111111 0%, #15101c 50%, #221330 100%)", // Midnight plum georgette
    isNew: false,
    image: "/src/assets/images/sovereign_bandhgala_coll_1779384916002.png"
  },
  {
    id: "coll-3",
    name: "Luxury Co-ords",
    description: "Symmetry and class. Premium matching hand-spun cotton and raw linen co-ord sets.",
    gradient: "linear-gradient(135deg, #111111 0%, #101c15 50%, #133022 100%)", // Antique emerald khadi
    isNew: true,
    image: "/src/assets/images/emerald_coords_1779384894958.png"
  },
  {
    id: "coll-4",
    name: "Royal Outerwear",
    description: "Bold statements for high evenings. Made unapologetic, made to command presence.",
    gradient: "linear-gradient(135deg, #111111 0%, #1c1010 50%, #301313 100%)", // Royal burgundy velvet
    isNew: false,
    image: "/src/assets/images/royal_outerwear_coll_1779384934013.png"
  }
];

export const PRODUCTS: Product[] = [
  {
    id: "prod-1",
    name: "Imperial Crimson Sherwani",
    price: 14999,
    category: "Sherwanis",
    description: "Structured luxury velvet silhouette with absolute shoulder definition. Highlighted with deep metallic zardozi work running flawlessly around the collar and cuffs.",
    gradient: "radial-gradient(circle at 50% 50%, #22080a 0%, #0d0203 100%)",
    isBestseller: true,
    image: "/src/assets/images/royal_sherwani_1779384764489.png"
  },
  {
    id: "prod-2",
    name: "Emperor's Obsidian Bandhgala",
    price: 12499,
    category: "Bandhgalas",
    description: "Crafted in heavy genuine raw silk and wool blend with a classic stand-up high collar, featuring custom gold-embroidered button borders and precise posture contours.",
    gradient: "radial-gradient(circle at 50% 50%, #1d1b11 0%, #0c0a05 100%)",
    isBestseller: false,
    image: "/src/assets/images/obsidian_bandhgala_1779384876882.png"
  },
  {
    id: "prod-3",
    name: "Atelier Emerald Co-ords",
    price: 8999,
    category: "Co-ords",
    description: "A streamlined, symmetric combination of a modern stand-collar jacket and matching crisp trousers. Tailored in luxurious green hand-spun raw silk for comfortable and active mobility.",
    gradient: "radial-gradient(circle at 50% 50%, #0c1a1e 0%, #04080a 100%)",
    isBestseller: false,
    image: "/src/assets/images/emerald_coords_1779384894958.png"
  }
];

export const PILLARS = [
  {
    id: "pillar-1",
    title: "Premium Fabrics",
    description: "Luxurious heavy drape materials including high-count linens, fine jacquards, and velvet sheets that hold shape flawlessly.",
    // A stylized thread/loom geometric CSS representation
    iconSvg: "M12 2v20M5 12h14M2 17l10-10 10 10"
  },
  {
    id: "pillar-2",
    title: "Handcrafted Details",
    description: "Detailed hand stitching, customized metallic crest buttons, and precise gold fabric bindings that reflect true Indian royalty.",
    // A needle structure
    iconSvg: "M2 22L20 4M20 4a2 2 0 102-2 2 2 0 00-2 2zM15 9l1 1"
  },
  {
    id: "pillar-3",
    title: "Rooted in India",
    description: "Proudly designed and tailored inside premium Indian micro-studios. Promoting legacy weavers and modern native craftsmanship.",
    // Indian lotus or mandala geometric representation
    iconSvg: "M12 2l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z"
  },
  {
    id: "pillar-4",
    title: "Made to Last",
    description: "Built with premium double-lock seams and wear-resistant fibers to survive countless celebratory evenings without fading.",
    // Shield or infinite loom loop
    iconSvg: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t-1",
    quote: "Finally a brand that makes me feel like royalty without leaving India. The drape of the Imperial Crimson is simply incredible.",
    author: "Priya S.",
    location: "Mumbai"
  },
  {
    id: "t-2",
    quote: "Wore the sherwani at my cousin's wedding. Couldn't stop the compliments. It sits perfectly on the shoulders.",
    author: "Rahul M.",
    location: "Delhi"
  },
  {
    id: "t-3",
    quote: "The fabric quality is unmatched. Truly heavy, premium texture that flows well. Worth every rupee.",
    author: "Ananya K.",
    location: "Bangalore"
  }
];
