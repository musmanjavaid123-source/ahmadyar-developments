import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, CheckCircle2, Shield, Award, Users, Compass, Building } from "lucide-react";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "About Our Legacy | 32 Years of Engineering Excellence",
  description:
    "Learn about Ahmadyar Developments and our 32-year industrial heritage through Ahmad Yar Group. Founded in 1992, building modern residential landmarks in Dubai.",
};

export default function AboutPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-28 pb-32">
      {/* Editorial Header */}
      <section className="py-20 sm:py-28 bg-stone/40 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">Enterprise Legacy</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-charcoal font-normal leading-tight">
              A Legacy of <br />
              <span className="italic">Execution & Trust.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              For over three decades, Ahmad Yar Group has grown through adaptability, structural discipline, and strategic vision. Today, Ahmadyar Developments brings this deep technical foundation to Dubai’s premier property market.
            </p>
          </div>
        </div>
      </section>

      {/* Historical Narrative */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Image Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] w-full max-w-lg mx-auto shadow-2xl border border-stone-subtle img-zoom-container">
                <Image
                  src="/images/heritage/legacy-history.jpg"
                  alt="Ahmad Yar Group Heritage"
                  fill
                  className="object-cover img-zoom-target"
                />
              </div>
              <div className="sm:absolute -bottom-6 -right-6 max-w-xs p-6 bg-stone border border-stone-subtle shadow-xl space-y-2 mt-4 sm:mt-0">
                <span className="text-[10px] uppercase tracking-widest text-bronze block">Founded 1992</span>
                <p className="font-serif-luxury text-base text-charcoal">
                  “From regional energy logistics to precision residential masterworks.”
                </p>
              </div>
            </div>

            {/* Right Story Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="eyebrow-label">Our History</span>
                <h2 className="font-serif-luxury text-3xl sm:text-5xl text-charcoal font-normal leading-tight">
                  Redefining Premium Real Estate in the UAE
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                <p>
                  In 1992, Tavakal Ahmadyar initiated operations as an energetic petroleum product trader in Kabul, Afghanistan. Over subsequent years, the enterprise demonstrated remarkable resilience, adaptability, and strategic clarity—materializing on regional economic growth to advance operations, diversify business verticals, and establish international footprints.
                </p>
                <p>
                  In 2004, Ahmad Yar Group was formally constituted, marking an essential milestone in corporate evolution. With robust governance in place, the group expanded into fuel and gas distribution, aviation supply, transportation logistics, ready-mix concrete production, and heavy construction infrastructure.
                </p>
                <p>
                  Expanding into ready-mix concrete and civil engineering laid the bedrock for Ahmadyar Developments. When we established our Dubai residential development division, we did not enter as external brokers; we entered with direct control over materials, construction timelines, and structural reliability.
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal/10 grid grid-cols-2 gap-6 text-xs">
                <div>
                  <span className="font-serif-luxury text-3xl text-bronze block">1992</span>
                  <span className="text-muted text-[11px] uppercase tracking-wider">Foundation Established</span>
                </div>
                <div>
                  <span className="font-serif-luxury text-3xl text-bronze block">2004</span>
                  <span className="text-muted text-[11px] uppercase tracking-wider">Group Formalization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Philosophy */}
      <section className="py-24 bg-stone border-y border-stone-subtle">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="eyebrow-label">Leadership Insight</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal leading-tight">
                Purpose. Direction. Impact. What Guides Us Forward.
              </h2>
              <blockquote className="font-serif-luxury text-xl sm:text-2xl text-charcoal/90 italic leading-snug pl-4 border-l-2 border-bronze">
                “Our commitment is to create residential landmarks that don’t simply fill space, but elevate the daily lives of the people who inhabit them. Trust is earned through every milestone we deliver.”
              </blockquote>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                At Ahmadyar Developments, our executive leadership maintains a hands-on approach across land acquisition, architectural concept design, material testing, and customer handover. This meticulous oversight ensures that promises made in project brochures are realized with exact fidelity on site.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/3] w-full shadow-xl border border-stone-subtle img-zoom-container">
                <Image
                  src="/images/heritage/legacy-executive.jpg"
                  alt="Ahmadyar Executive Oversight"
                  fill
                  className="object-cover img-zoom-target"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-3">
            <span className="eyebrow-label">Core Values</span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-charcoal font-normal">
              What Defines Our Craft
            </h2>
            <p className="text-sm text-muted">
              Guiding principles that govern every project from initial land underwriting to resident key handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 sm:p-10 bg-white border border-stone-subtle space-y-4 shadow-sm hover:border-bronze/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-bronze/10 text-bronze flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-charcoal">Structural Integrity</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                Direct integration with our parent group’s concrete engineering and testing guarantees uncompromising structural longevity for generations.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-white border border-stone-subtle space-y-4 shadow-sm hover:border-bronze/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-bronze/10 text-bronze flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-charcoal">Architectural Intention</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                We design homes shaped around the actual human experience—maximizing daylight, acoustic isolation, natural airflows, and generous open verandas.
              </p>
            </div>

            <div className="p-8 sm:p-10 bg-white border border-stone-subtle space-y-4 shadow-sm hover:border-bronze/40 transition-colors">
              <div className="w-12 h-12 rounded-full bg-bronze/10 text-bronze flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-charcoal">Long-Term Partnership</h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                We view every buyer as a long-term partner, offering transparent site milestones, proactive communications, and responsive post-handover support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-10 sm:p-16 bg-obsidian text-ivory border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="eyebrow-label text-bronze">Visit Our Headquarters</span>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-ivory">
              Experience the Ahmadyar Difference
            </h3>
            <p className="text-xs sm:text-sm text-muted max-w-lg">
              Visit our offices at Park Heights Square 2 in Dubai Hills Estate for private presentations and scale model reviews.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-bronze hover:bg-bronze-dark text-white text-xs uppercase tracking-widest font-medium transition-colors whitespace-nowrap"
          >
            Connect With Our Team
          </Link>
        </div>
      </section>
    </div>
  );
}
