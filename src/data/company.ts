export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  heritage: string;
  parentGroup: string;
  foundedYear: number;
  yearsOfExperience: number;
  address: {
    suite: string;
    building: string;
    area: string;
    city: string;
    country: string;
    full: string;
    mapUrl: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    whatsapp: string;
    whatsappDisplay: string;
    whatsappUrl: string;
    email: string;
  };
  socials: {
    instagram: string;
    facebook: string;
    linkedin: string;
  };
  metrics: Array<{
    number: string;
    label: string;
    sublabel: string;
  }>;
}

export const companyData: CompanyInfo = {
  name: "Ahmadyar Developments",
  tagline: "Designed for the life you aspire to.",
  description:
    "Ahmadyar Developments is a premier Dubai-based real estate developer backed by over 32 years of regional engineering, trading, and construction expertise through our parent entity, Ahmad Yar Group. We specialize in residential developments situated in high-growth prime corridors, uniting contemporary architecture, intelligent IoT living, and wellness-centric amenities.",
  heritage:
    "Founded in 1992 as a pioneering enterprise under Tavakal Ahmadyar and formally established in 2004, Ahmad Yar Group has evolved into a diversified conglomerate with operations spanning fuel logistics, ready-mix concrete production, infrastructure, and luxury real estate. Ahmadyar Developments channels this formidable technical pedigree into creating bespoke residential landmarks across Dubai.",
  parentGroup: "Ahmad Yar Group",
  foundedYear: 1992,
  yearsOfExperience: 32,
  address: {
    suite: "Suite 701 & 706",
    building: "Park Heights Square 2",
    area: "Dubai Hills Estate",
    city: "Dubai",
    country: "United Arab Emirates",
    full: "Suite 701 & 706, Park Heights Square 2, Dubai Hills, Dubai, UAE",
    mapUrl: "https://maps.google.com/?q=Park+Heights+Square+2+Dubai+Hills+Dubai",
  },
  contact: {
    phone: "+97142971500",
    phoneFormatted: "+971 4 297 1500",
    whatsapp: "971545052829",
    whatsappDisplay: "+971 54 505 2829",
    whatsappUrl: "https://wa.me/971545052829?text=Hello%20Ahmadyar%20Developments,%20I%20would%20like%20to%20enquire%20about%20your%20properties.",
    email: "info@ahmadyardevelopments.com",
  },
  socials: {
    instagram: "https://www.instagram.com/ahmadyardevelopments/",
    facebook: "https://www.facebook.com/ahmadyardevelopments/",
    linkedin: "https://www.linkedin.com/company/ahmadyar-developments/",
  },
  metrics: [
    {
      number: "32+",
      label: "Years Enterprise Heritage",
      sublabel: "Backed by Ahmad Yar Group's infrastructure mastery since 1992",
    },
    {
      number: "3",
      label: "Prime Dubai Developments",
      sublabel: "Flagship masterworks across Dubai Islands, Nad Al Hammar & JVC",
    },
    {
      number: "100%",
      label: "Delivery Commitment",
      sublabel: "Uncompromising engineering quality and precision execution",
    },
    {
      number: "4+",
      label: "Regional Operations",
      sublabel: "Extensive regional footprint across engineering and development",
    },
  ],
};
