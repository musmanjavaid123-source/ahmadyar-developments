import React from "react";
import Image from "next/image";

export default function TheDifference() {
  const pillars = [
    {
      number: "01",
      title: "Thoughtful Architectural Design",
      subtitle: "Proportion, Flow & Natural Light",
      description:
        "Every floor plan is engineered with spatial intention. We eliminate wasted circulation space, maximize natural daylighting, and create cross-ventilated residences that foster balance and everyday calm.",
    },
    {
      number: "02",
      title: "Construction Quality & Engineering",
      subtitle: "32-Year Industrial Foundation",
      description:
        "Backed by over 32 years of industrial engineering, ready-mix concrete production, and infrastructure excellence through Ahmad Yar Group, our structural integrity and material standards are uncompromising.",
    },
    {
      number: "03",
      title: "Integrated Smart Living & IoT",
      subtitle: "Intuitive Technology Built In",
      description:
        "Seamless home automation comes standard. From intelligent zoned climate control to automated security and ambient lighting, our residences respond effortlessly to modern lifestyles.",
    },
    {
      number: "04",
      title: "Strategic Corridor Planning",
      subtitle: "Enduring Capital Resilience",
      description:
        "We selectively develop in high-growth Dubai corridors—such as Dubai Islands, Nad Al Hammar, and JVC—ensuring substantial capital appreciation and competitive rental yield potential.",
    },
    {
      number: "05",
      title: "Dedicated Handover & Care",
      subtitle: "Accountability Beyond Delivery",
      description:
        "We believe trust is earned through execution. Our dedicated client relations team provides transparent site progress updates and an attentive, professional transition from contract to key handover.",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-ivory text-charcoal border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-20 pb-6 border-b border-charcoal/10">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">Development Philosophy</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal leading-tight">
              Considered at <span className="italic">every stage.</span>
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-sm text-muted font-light leading-relaxed">
              A developer with direct construction roots brings a fundamentally different mindset: one centered on tangible execution, structural longevity, and resident wellbeing.
            </p>
          </div>
        </div>

        {/* Pillars Grid with restrained divider lines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="p-8 sm:p-10 bg-white border border-stone-subtle hover:border-bronze/40 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <span className="font-serif-luxury text-3xl text-bronze/50 group-hover:text-bronze transition-colors block font-light">
                  {pillar.number}
                </span>
                <span className="text-[10px] uppercase tracking-widest text-bronze block font-medium">
                  {pillar.subtitle}
                </span>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-charcoal leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 border-t border-stone-subtle/70 mt-6 flex items-center justify-between text-[10px] text-muted uppercase tracking-widest">
                <span>Ahmadyar Principles</span>
                <span className="text-bronze">Standard</span>
              </div>
            </div>
          ))}

          {/* Complementary Visual Tile */}
          <div className="relative min-h-[300px] bg-obsidian text-ivory p-8 sm:p-10 flex flex-col justify-between overflow-hidden shadow-sm group">
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/projects/palatium-landscape.jpg"
                alt="Architectural Landscaping"
                fill
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/70 to-transparent" />
            </div>

            <div className="relative z-10 space-y-2">
              <span className="eyebrow-label text-bronze">The Engineering Edge</span>
              <h4 className="font-serif-luxury text-2xl text-white">Direct Execution</h4>
            </div>

            <div className="relative z-10">
              <p className="text-xs text-stone/80 font-light leading-relaxed mb-4">
                In-house concrete batching and supply chain security eliminate sub-contractor bottlenecks.
              </p>
              <span className="text-[11px] uppercase tracking-widest text-bronze font-medium">
                Ahmad Yar Group Heritage
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
