import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmadyardevelopments.com"),
  title: {
    default: "Ahmadyar Developments | Luxury Real Estate Developers Dubai",
    template: "%s | Ahmadyar Developments",
  },
  description:
    "Discover bespoke Dubai residential developments by Ahmadyar Developments. Backed by 32+ years of engineering mastery through Ahmad Yar Group, delivering architectural landmarks across Dubai Islands, Nad Al Hammar, and JVC.",
  keywords: [
    "Ahmadyar Developments",
    "Real Estate Developers Dubai",
    "Luxury Property Developers UAE",
    "Vestoria Bay Dubai Islands",
    "La Vera Creek Nad Al Hammar",
    "Palatium Residences JVC",
    "Off-plan properties Dubai",
    "Ahmad Yar Group",
  ],
  authors: [{ name: "Ahmadyar Developments" }],
  creator: "Ahmadyar Developments",
  publisher: "Ahmadyar Developments",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ahmadyardevelopments.com",
    title: "Ahmadyar Developments | Luxury Real Estate Developers Dubai",
    description:
      "Distinctive contemporary residences across Dubai. Architectural excellence, intelligent IoT living, and long-term investment confidence.",
    siteName: "Ahmadyar Developments",
    images: [
      {
        url: "/images/projects/vestoria-exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmadyar Developments Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmadyar Developments | Luxury Real Estate Developers Dubai",
    description:
      "Distinctive contemporary residences in Dubai backed by 32+ years of engineering heritage.",
    images: ["/images/projects/vestoria-exterior.jpg"],
  },
  icons: {
    icon: "/images/brand/favicon.png",
    apple: "/images/brand/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Ahmadyar Developments",
    url: "https://ahmadyardevelopments.com",
    logo: "https://ahmadyardevelopments.com/images/brand/logo-gold.svg",
    image: "https://ahmadyardevelopments.com/images/projects/vestoria-exterior.jpg",
    description: companyData.description,
    telephone: companyData.contact.phoneFormatted,
    email: companyData.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Suite 701 & 706, Park Heights Square 2, Dubai Hills",
      addressLocality: "Dubai",
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Ahmad Yar Group",
      foundingDate: "1992",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ivory text-charcoal min-h-screen flex flex-col antialiased selection:bg-bronze selection:text-white">
        {/* Accessible skip link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-bronze text-white text-xs uppercase tracking-widest"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
