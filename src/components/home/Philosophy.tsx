import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Philosophy() {
  return (
    <section id="introduction" className="py-24 sm:py-32 bg-ivory text-charcoal overflow-hidden border-b border-charcoal/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Introduction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">Introducing Ahmadyar</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal leading-tight">
              Creating places <br />
              <span className="italic">with purpose.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-light leading-relaxed font-light">
              At Ahmadyar Developments, we bring together considered design, construction expertise and a long-term perspective to create residential spaces shaped around the way people live.
            </p>

            <div className="space-y-4 pt-2 text-sm text-muted leading-relaxed font-light">
              <p>
                Backed by more than 32 years of multidisciplinary engineering, ready-mix concrete production, and infrastructure excellence through our parent entity, Ahmad Yar Group, our developments in Dubai are built on tangible substance.
              </p>
              <p>
                From prime coastal enclaves on Dubai Islands to connected family communities in Nad Al Hammar and Jumeirah Village Circle, each project reflects a singular discipline: unwavering delivery on time, with uncompromising material integrity and built-in IoT living.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal hover:text-bronze font-medium py-2 border-b border-charcoal/30 hover:border-bronze transition-colors group"
              >
                <span>Discover Ahmadyar Heritage</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Architectural Image Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] w-full max-w-lg mx-auto img-zoom-container shadow-2xl border border-stone-subtle">
              <Image
                src="/images/heritage/home-about-bg.webp"
                alt="Ahmadyar Developments Architectural Vision"
                fill
                priority
                className="object-cover img-zoom-target"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/35 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Editorial Quote Card */}
            <div className="sm:absolute -bottom-8 -left-6 max-w-xs mt-6 sm:mt-0 p-6 bg-stone border border-stone-subtle shadow-xl space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-bronze block font-medium">Group Pedigree</span>
              <p className="font-serif-luxury text-lg text-charcoal leading-snug">
                “Over three decades of multidisciplinary engineering informing every residential blueprint.”
              </p>
              <span className="text-[11px] text-muted block pt-1">Founded 1992 • Ahmad Yar Group</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
