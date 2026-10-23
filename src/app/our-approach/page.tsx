import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Layers, Compass, CheckCircle2, Cpu, Trees, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Approach | Architectural Precision & Development Philosophy",
  description:
    "Discover Ahmadyar Developments' considered methodology: strategic land acquisition, architectural intelligence, integrated IoT, and direct construction mastery.",
};

export default function OurApproachPage() {
  const steps = [
    {
      step: "01",
      title: "Strategic Land Intelligence",
      subtitle: "Acquiring in High-Growth Dubai Corridors",
      description:
        "We identify locations positioned at the intersection of infrastructural investment, lifestyle prestige, and capital appreciation. By selecting corner plots on Dubai Islands, connected family enclaves in Nad Al Hammar, and high-yielding districts in JVC, we ensure enduring value for residents and investors alike.",
      icon: Compass,
      image: "/images/projects/vestoria-exterior.jpg",
    },
    {
      step: "02",
      title: "Human-Centric Architecture",
      subtitle: "Designing for Daylight, Flow, and Proportion",
      description:
        "True luxury begins with spatial intelligence. We eliminate unusable corridor dead-space, specify high ceilings (up to 3.4m), orient buildings to maximize panoramic horizons, and integrate deep shaded verandas that reduce heat gain while celebrating outdoor Dubai living.",
      icon: Layers,
      image: "/images/projects/vestoria-interior.jpg",
    },
    {
      step: "03",
      title: "Direct Engineering & Concrete Mastery",
      subtitle: "Uncompromising Structural Oversight",
      description:
        "Unlike developers who rely wholly on outsourced third-party execution, Ahmadyar Developments draws upon Ahmad Yar Group's 32-year legacy in ready-mix concrete production and civil infrastructure. This direct technical pedigree guarantees certified material batches, tight tolerances, and predictable construction milestones.",
      icon: ShieldCheck,
      image: "/images/projects/la-vera-creek.jpg",
    },
    {
      step: "04",
      title: "Seamless Smart Living Infrastructure",
      subtitle: "Intuitive IoT Built In, Not Added On",
      description:
        "We treat home automation as an intrinsic utility. Every apartment is pre-wired with intelligent IoT hubs controlling zoned climate systems, automated access, and scene lighting. This enhances everyday convenience while optimizing energy efficiency.",
      icon: Cpu,
      image: "/images/projects/la-vera-interior-1.jpg",
    },
    {
      step: "05",
      title: "Holistic Wellness & Landscaped Enclaves",
      subtitle: "Restoration as an Everyday Ritual",
      description:
        "Our developments integrate resort-grade infinity pools, fully equipped cardio suites, steam sanctuaries, and lush podium walking gardens with native drought-tolerant plants. We shape spaces where neighbors connect and individuals decompress.",
      icon: Trees,
      image: "/images/projects/palatium-pool.jpg",
    },
    {
      step: "06",
      title: "Transparent Delivery & Handover Care",
      subtitle: "Accountability from Groundbreak to Key Handover",
      description:
        "We believe trust is forged through transparency. Our dedicated client relations team provides verified monthly site progress reports, digital inspection documentation, and attentive post-handover property care.",
      icon: CheckCircle2,
      image: "/images/projects/palatium-landscape.jpg",
    },
  ];

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-28 pb-32">
      {/* Page Header */}
      <section className="py-20 sm:py-28 bg-stone/40 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">Methodology & Discipline</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-charcoal font-normal leading-tight">
              Our Development <br />
              <span className="italic">Approach.</span>
            </h1>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              How we conceive, engineer, and deliver distinctive residential landmarks in Dubai. A disciplined balance between architectural poetry and industrial engineering mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Development Steps Breakdown */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="space-y-28">
            {steps.map((item, index) => {
              const isEven = index % 2 === 1;
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
                >
                  <div
                    className={`lg:col-span-6 space-y-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div className="flex items-center gap-3 text-bronze">
                      <span className="font-serif-luxury text-3xl font-light">{item.step}</span>
                      <span className="w-8 h-[1px] bg-bronze/40" />
                      <span className="text-xs uppercase tracking-widest font-medium">
                        {item.subtitle}
                      </span>
                    </div>

                    <h2 className="font-serif-luxury text-3xl sm:text-4xl text-charcoal font-normal leading-snug">
                      {item.title}
                    </h2>

                    <p className="text-sm sm:text-base text-muted font-light leading-relaxed">
                      {item.description}
                    </p>

                    <div className="pt-2">
                      <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center text-bronze">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  <div
                    className={`lg:col-span-6 relative aspect-[16/11] w-full img-zoom-container shadow-xl border border-stone-subtle ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover img-zoom-target"
                    />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-obsidian/85 text-ivory text-[10px] uppercase tracking-widest font-medium">
                        Step {item.step}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sustainable Engineering Section */}
      <section className="py-24 bg-stone border-y border-stone-subtle">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
            <span className="eyebrow-label">Responsible Innovation</span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-charcoal font-normal">
              Sustainability Built Into the Foundations
            </h2>
            <p className="text-sm sm:text-base text-muted font-light">
              We design for Dubai’s climate with thermally broken facades, solar-reflective glass, and water-efficient landscaping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-xs sm:text-sm">
            <div className="p-8 bg-white border border-stone-subtle space-y-3">
              <span className="text-bronze font-serif-luxury text-2xl block">01</span>
              <h3 className="font-serif-luxury text-xl text-charcoal">Thermal Insulation</h3>
              <p className="text-muted leading-relaxed font-light">
                High-performance double glazing and thermal envelope engineering significantly reduce residential cooling loads.
              </p>
            </div>

            <div className="p-8 bg-white border border-stone-subtle space-y-3">
              <span className="text-bronze font-serif-luxury text-2xl block">02</span>
              <h3 className="font-serif-luxury text-xl text-charcoal">Water Conservation</h3>
              <p className="text-muted leading-relaxed font-light">
                Smart drip irrigation systems and low-flow sanitary fittings reduce water consumption throughout the development.
              </p>
            </div>

            <div className="p-8 bg-white border border-stone-subtle space-y-3">
              <span className="text-bronze font-serif-luxury text-2xl block">03</span>
              <h3 className="font-serif-luxury text-xl text-charcoal">Smart Energy Management</h3>
              <p className="text-muted leading-relaxed font-light">
                IoT energy monitoring empowers residents to monitor consumption in real time and schedule climate profiles efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-16">
        <div className="p-10 sm:p-14 bg-obsidian text-ivory border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="eyebrow-label text-bronze">Private Presentation</span>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-ivory">
              Review Our Engineering Specifications
            </h3>
            <p className="text-xs text-muted max-w-lg">
              Speak directly with an Ahmadyar Development director regarding technical blueprints, construction timelines, and investment yields.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-4 bg-bronze hover:bg-bronze-dark text-white text-xs uppercase tracking-widest font-medium transition-colors whitespace-nowrap"
          >
            Arrange Private Meeting
          </Link>
        </div>
      </section>
    </div>
  );
}
