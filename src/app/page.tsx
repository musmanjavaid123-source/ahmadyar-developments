import React from "react";
import Hero from "@/components/home/Hero";
import Philosophy from "@/components/home/Philosophy";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import CompanyShowreelSection from "@/components/home/CompanyShowreelSection";
import TheDifference from "@/components/home/TheDifference";
import CompanyMetrics from "@/components/home/CompanyMetrics";
import HomeEnquiryCTA from "@/components/home/HomeEnquiryCTA";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1: CINEMATIC HERO */}
      <Hero />

      {/* SECTION 2: INTRODUCTION */}
      <Philosophy />

      {/* SECTION 3: FEATURED DEVELOPMENTS */}
      <FeaturedProjects />

      {/* SECTION 4: COMPANY SHOWREEL */}
      <CompanyShowreelSection />

      {/* SECTION 5: DEVELOPMENT PHILOSOPHY */}
      <TheDifference />

      {/* SECTION 6: COMPANY FACTS */}
      <CompanyMetrics />

      {/* SECTION 7: PROJECT ENQUIRY */}
      <HomeEnquiryCTA />
    </>
  );
}
