import React from "react";
import Image from "next/image";

export default function LifestyleExperience() {
  const experiences = [
    {
      title: "Smart Home / IoT Automation",
      subtitle: "Effortless Everyday Precision",
      description:
        "Experience seamless living with integrated Smart Home Technology. From adaptive climate control and customized lighting scenes to digital access and automated energy monitoring, every system is connected for ease, comfort, and control—whether you are at home or traveling internationally.",
      image: "/images/projects/vestoria-interior.jpg",
      tag: "Intelligent Living",
    },
    {
      title: "Leisure & Wellness Sanctuaries",
      subtitle: "Restoration as a Daily Ritual",
      description:
        "Our developments feature wellness-focused amenities including infinity pools, fully equipped cardio suites, steam sanctuaries, and private yoga decks—encouraging restorative movement, tranquil decompression, and a life centered around physical and mental wellbeing.",
      image: "/images/projects/palatium-pool.jpg",
      tag: "Holistic Wellness",
    },
    {
      title: "A Community-Centered Approach",
      subtitle: "Landscaped Social Architecture",
      description:
        "Residences are situated within masterplans shaped to bring people together. Lush landscaped walkways, shaded reading pockets, family play parks, and boutique resident lounges provide spaces where community bonds flourish naturally.",
      image: "/images/projects/palatium-landscape.jpg",
      tag: "Social Connection",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-stone text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="eyebrow-label">The Residential Experience</span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal leading-tight">
            More than a residence. <br />
            <span className="italic">A way of living.</span>
          </h2>
          <p className="text-sm sm:text-base text-muted font-light max-w-xl mx-auto leading-relaxed">
            Every Ahmadyar address is designed around human balance—where technological ease, architectural tranquility, and natural landscaping coexist.
          </p>
        </div>

        {/* Alternating Editorial Showcase */}
        <div className="space-y-24">
          {experiences.map((exp, index) => {
            const isReversed = index % 2 === 1;
            return (
              <div
                key={exp.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
              >
                <div
                  className={`lg:col-span-6 relative aspect-[16/11] w-full img-zoom-container shadow-xl border border-stone-subtle ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover img-zoom-target"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-obsidian/80 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-widest font-medium">
                      {exp.tag}
                    </span>
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <span className="text-xs uppercase tracking-widest text-bronze font-medium block">
                    {exp.subtitle}
                  </span>
                  <h3 className="font-serif-luxury text-2xl sm:text-4xl text-charcoal font-normal">
                    {exp.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted leading-relaxed font-light">
                    {exp.description}
                  </p>
                  <div className="pt-2">
                    <span className="w-12 h-[1px] bg-bronze block" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
