export interface ProjectSpec {
  label: string;
  value: string;
}

export interface ProjectAmenity {
  title: string;
  description: string;
  iconName?: string;
}

export interface Project {
  slug: string;
  name: string;
  location: string;
  locationArea: string;
  tagline: string;
  status: "Under Construction" | "Upcoming" | "Completed" | "New Launch";
  category: "Waterfront Residences" | "Urban Luxury Residences" | "Contemporary Living";
  heroImage: string;
  cardImage: string;
  lifestyleImage: string;
  gallery: Array<{
    url: string;
    caption: string;
  }>;
  summary: string;
  fullDescription: string;
  architecturalConcept: string;
  specs: ProjectSpec[];
  amenities: ProjectAmenity[];
  brochureFileName?: string;
  virtualTourAvailable: boolean;
  featured: boolean;
}

export const projectsData: Project[] = [
  {
    slug: "vestoria-bay",
    name: "Vestoria Bay",
    location: "Dubai Islands, Dubai, UAE",
    locationArea: "Dubai Islands",
    tagline: "A Rare Coastal Sanctuary Between Azure Waters and Endless Horizons",
    status: "Under Construction",
    category: "Waterfront Residences",
    heroImage: "/images/projects/vestoria-exterior.jpg",
    cardImage: "/images/projects/vestoria-exterior.jpg",
    lifestyleImage: "/images/projects/vestoria-lifestyle.jpg",
    gallery: [
      {
        url: "/images/projects/vestoria-exterior.jpg",
        caption: "Wave-inspired sculptural facade rising on the prime corner of Dubai Islands",
      },
      {
        url: "/images/projects/vestoria-interior.jpg",
        caption: "Spacious contemporary salon with floor-to-ceiling glass and panoramic sea vistas",
      },
      {
        url: "/images/projects/vestoria-interior-living.jpg",
        caption: "Refined neutral palettes and tactile natural finishes evoking coastal dunes",
      },
      {
        url: "/images/projects/vestoria-lifestyle.jpg",
        caption: "Sunlit terraces and expansive outdoor living designed for peaceful recreation",
      },
    ],
    summary:
      "Vestoria Bay is positioned on a prime corner plot within Dubai Islands, offering residents breathtaking maritime views and a lifestyle shaped by coastal tranquility. Featuring an exclusive collection of 1 to 4-bedroom apartments, penthouses, and townhouses.",
    fullDescription:
      "Welcome to Vestoria Bay, an architectural jewel positioned directly on Dubai Islands. Designed for connoisseurs of tranquil waterfront living, each residence features expansive balconies, cross-ventilated layouts, and organic materials that harmonize with the gentle rhythms of the Arabian Gulf. Its sculptural, wave-inspired facade mimics the graceful contours of shoreline dunes, bathing the interiors in generous natural light while maintaining complete residential privacy.",
    architecturalConcept:
      "Sculpted by acclaimed architectural visionaries, Vestoria Bay responds intimately to its maritime context. Fluid curves soften the building's perimeter, generating deep overhangs that naturally shade private verandas while framing infinite horizon views. Inside, warm bronze metallic accents pair with natural stone and tailored timber joinery.",
    specs: [
      { label: "Location", value: "Dubai Islands, Prime Corner Plot" },
      { label: "Property Typologies", value: "1, 2, 3 & 4-Bedroom Residences, Penthouses & Townhouses" },
      { label: "Status", value: "Under Construction" },
      { label: "Handover", value: "2027" },
      { label: "Architecture", value: "Contemporary Coastal Organic" },
      { label: "Ceiling Heights", value: "Up to 3.4m with full-height glazing" },
    ],
    amenities: [
      {
        title: "Infinity Horizon Pool",
        description: "Elevated temperature-controlled swimming deck oriented toward open sunset waters.",
      },
      {
        title: "Smart Home Automation",
        description: "Integrated IoT ecosystem orchestrating climate, ambient lighting, and access control.",
      },
      {
        title: "Private Wellness Club",
        description: "State-of-the-art cardiovascular studio, steam sanctuary, and private yoga deck.",
      },
      {
        title: "Coastal Landscaped Promenade",
        description: "Direct pedestrian connectivity to shoreline boardwalks, seaside cafes, and yacht marinas.",
      },
      {
        title: "Concierge & Valet",
        description: "Attentive 24/7 lobby concierge, private resident lounges, and secure underground parking.",
      },
    ],
    brochureFileName: "Vestoria_Bay_Brochure.pdf",
    virtualTourAvailable: true,
    featured: true,
  },
  {
    slug: "la-vera-creek",
    name: "La Vera Creek",
    location: "Nad Al Hammar, Dubai, UAE",
    locationArea: "Nad Al Hammar",
    tagline: "A True Rhythm of Living in Dubai's Emerging Residential Enclave",
    status: "Under Construction",
    category: "Contemporary Living",
    heroImage: "/images/projects/la-vera-creek.jpg",
    cardImage: "/images/projects/la-vera-creek.jpg",
    lifestyleImage: "/images/projects/la-vera-interior-1.jpg",
    gallery: [
      {
        url: "/images/projects/la-vera-creek.jpg",
        caption: "Architectural elevation exhibiting crisp geometric profiles and lush podium landscaping",
      },
      {
        url: "/images/projects/la-vera-interior-1.jpg",
        caption: "Bespoke open-plan living room with seamless transitions between dining and lounge",
      },
      {
        url: "/images/projects/la-vera-interior-2.jpg",
        caption: "Designer kitchen fitted with concealed premium appliances and refined stone islands",
      },
      {
        url: "/images/projects/la-vera-interior-3.jpg",
        caption: "Master sanctuary featuring tailored acoustic panelling and warm ambient illumination",
      },
    ],
    summary:
      "La Vera Creek introduces a harmonious residential presence to Nad Al Hammar, uniting timeless modern architecture with lush social gardens, integrated smart technology, and generous family spaces.",
    fullDescription:
      "La Vera Creek embodies 'A True Rhythm of Living', deliberately conceived to provide an oasis of balance within easy reach of Downtown Dubai and Dubai International Airport. The residences feature highly functional floor plans, maximizing daylight and everyday comfort while integrating next-generation IoT infrastructure for frictionless living.",
    architecturalConcept:
      "The design language of La Vera Creek balances architectural solidity with expansive glass ribbons. Warm earthly tones reflect the surrounding regional landscape, while layered terraces step back to establish private green pockets that invite gentle breezes.",
    specs: [
      { label: "Location", value: "Nad Al Hammar, Dubai" },
      { label: "Property Typologies", value: "1, 2 & 3-Bedroom Contemporary Apartments" },
      { label: "Status", value: "Under Construction" },
      { label: "Handover", value: "Q4 2026" },
      { label: "Connectivity", value: "10 mins to DXB Airport, 15 mins to Downtown" },
      { label: "Technology", value: "Full IoT Smart Home Automation" },
    ],
    amenities: [
      {
        title: "Integrated IoT Living",
        description: "Intelligent climate control, smart mobile access, and optimized energy management.",
      },
      {
        title: "Resort-Grade Lagoon Deck",
        description: "Expansive swimming pool bordered by sun loungers and shaded family cabanas.",
      },
      {
        title: "Social Podium & Garden Walkways",
        description: "Interconnected landscaped corridors with shaded seating and lush native flora.",
      },
      {
        title: "Fitness & Recovery Suites",
        description: "Fully equipped athletic center and dedicated movement studio for daily wellness.",
      },
      {
        title: "Family Play & Recreation Zones",
        description: "Secure, thoughtfully designed open-air play areas for children and community gatherings.",
      },
    ],
    brochureFileName: "La_Vera_Creek_Brochure.pdf",
    virtualTourAvailable: true,
    featured: true,
  },
  {
    slug: "palatium-residences",
    name: "Palatium Residences",
    location: "Jumeirah Village Circle (JVC), Dubai, UAE",
    locationArea: "Jumeirah Village Circle",
    tagline: "Sophisticated Urban Wellness in the Heart of Vibrant JVC",
    status: "Under Construction",
    category: "Urban Luxury Residences",
    heroImage: "/images/projects/palatium-facade.jpg",
    cardImage: "/images/projects/palatium-facade.jpg",
    lifestyleImage: "/images/projects/palatium-pool.jpg",
    gallery: [
      {
        url: "/images/projects/palatium-facade.jpg",
        caption: "Monumental facade combining rhythmic vertical louvers with deep shaded balconies",
      },
      {
        url: "/images/projects/palatium-pool.jpg",
        caption: "Spectacular rooftop infinity pool with tranquil skyline perspectives across Dubai",
      },
      {
        url: "/images/projects/palatium-landscape.jpg",
        caption: "Sensory landscaped podium courtyards providing peaceful respite amidst urban life",
      },
      {
        url: "/images/projects/vestoria-lifestyle.jpg",
        caption: "Thoughtfully conceived lifestyle facilities promoting relaxation, connection, and health",
      },
    ],
    summary:
      "Palatium Residences redefines modern lifestyle living in Jumeirah Village Circle (JVC). Crafted for discerning urbanites and savvy investors, the development offers smart-enabled studios, 1, 2, and 3-bedroom residences with resort-style wellness amenities.",
    fullDescription:
      "Positioned within one of Dubai's highest-yielding residential neighborhoods, Palatium Residences combines metropolitan convenience with a private wellness sanctuary. The architecture prioritizes generous proportions, floor-to-ceiling glass, and seamless transitions between indoor living and generous private balconies. Backed by Ahmad Yar Group's 32-year construction heritage, the project assures peerless craftsmanship and long-term asset value.",
    architecturalConcept:
      "Palatium Residences adopts a clean, restrained modern aesthetic. Crisp horizontal slab lines are balanced by vertical bronze elements, casting dynamic shadows throughout the day. Acoustic insulation and solar-reflective glazing ensure whisper-quiet, thermally efficient interiors.",
    specs: [
      { label: "Location", value: "District 13, Jumeirah Village Circle (JVC), Dubai" },
      { label: "Property Typologies", value: "Studios, 1, 2 & 3-Bedroom Smart Residences" },
      { label: "Status", value: "Under Construction" },
      { label: "Handover", value: "2026" },
      { label: "Investment Yield", value: "High capital appreciation corridor" },
      { label: "Finishes", value: "European ceramics, branded sanitaryware, smart appliances" },
    ],
    amenities: [
      {
        title: "Panoramic Rooftop Pool",
        description: "Infinity-edge pool with skyline views, shaded sunbeds, and evening mood lighting.",
      },
      {
        title: "Zen Wellness & Yoga Sanctuary",
        description: "Dedicated tranquil studio designed for meditation, yoga, and holistic restorative sessions.",
      },
      {
        title: "Smart Home Infrastructure",
        description: "Mobile app-controlled temperature, automated door locks, and scene lighting.",
      },
      {
        title: "Landscaped Podium Gardens",
        description: "Botanical courtyards with barbecue stations, outdoor seating, and reading nooks.",
      },
      {
        title: "Boutique Resident Lounge",
        description: "Quiet co-working suites and private reception lounge for personal or business hosting.",
      },
    ],
    brochureFileName: "Palatium_Residences_Brochure.pdf",
    virtualTourAvailable: true,
    featured: true,
  },
];
