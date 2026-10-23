"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Compass, Layers, Sparkles } from "lucide-react";
import EnquiryModal from "../ui/EnquiryModal";

export default function ProjectSpotlight() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <section className="py-24 sm:py-32 bg-obsidian text-ivory overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Column */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/11] w-full overflow-hidden shadow-2xl border border-white/10 img-zoom-container">
              <Image
                src="/images/projects/la-vera-creek.jpg"
                alt="La Vera Creek by Ahmadyar Developments"
                fill
                className="object-cover img-zoom-target"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 z-10 flex items-center gap-3">
                <span className="px-3 py-1 bg-bronze text-white text-[10px] uppercase tracking-widest font-medium">
                  Project Spotlight
                </span>
                <span className="text-xs text-stone/90 tracking-wider">Nad Al Hammar • Dubai</span>
              </div>
            </div>

            {/* Asymmetrical Detail Overlay */}
            <div className="hidden sm:block absolute -bottom-8 -right-8 w-60 p-5 bg-obsidian-card border border-white/15 shadow-2xl space-y-2">
              <div className="flex items-center gap-2 text-bronze text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="uppercase tracking-widest text-[10px]">Smart Living</span>
              </div>
              <p className="font-serif-luxury text-base text-ivory">Integrated IoT Ecosystem</p>
              <p className="text-[11px] text-muted">Complete app-orchestrated environmental & access control.</p>
            </div>
          </div>

          {/* Right Editorial Storytelling */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="eyebrow-label text-bronze">Spotlight Development</span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-ivory font-normal leading-tight">
                La Vera Creek
              </h2>
              <p className="italic text-lg text-stone/90 font-serif-luxury">
                A True Rhythm of Living.
              </p>
            </div>

            <p className="text-sm text-stone/80 leading-relaxed font-light">
              Situated in the emerging residential corridor of Nad Al Hammar, La Vera Creek presents a harmonious sanctuary that bridges timeless modern architecture with vibrant green community living.
            </p>

            <div className="space-y-3 py-2 border-y border-white/10 text-xs text-stone/90">
              <div className="flex items-center gap-3 py-1">
                <Compass className="w-4 h-4 text-bronze shrink-0" />
                <span>Prime location 10 mins from DXB Airport and 15 mins from Downtown Dubai.</span>
              </div>
              <div className="flex items-center gap-3 py-1">
                <Layers className="w-4 h-4 text-bronze shrink-0" />
                <span>1, 2, and 3-bedroom luxury layouts with deep shaded balconies.</span>
              </div>
              <div className="flex items-center gap-3 py-1">
                <Check className="w-4 h-4 text-bronze shrink-0" />
                <span>Under construction with timely delivery backed by Ahmad Yar Group.</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/projects/la-vera-creek"
                className="px-6 py-3.5 bg-bronze hover:bg-bronze-dark text-white text-xs uppercase tracking-widest text-center transition-colors flex items-center justify-center gap-2 font-medium"
              >
                <span>Discover Project</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <button
                onClick={() => setEnquiryOpen(true)}
                className="px-6 py-3.5 border border-white/30 hover:border-white text-ivory hover:bg-white/5 text-xs uppercase tracking-widest text-center transition-colors font-medium"
              >
                Request Floor Plans
              </button>
            </div>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultProject="La Vera Creek"
      />
    </section>
  );
}
