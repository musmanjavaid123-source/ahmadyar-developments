import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ShowreelPlayer from "../video/ShowreelPlayer";
import { homepageVideos } from "@/data/homepageVideos";

export default function CompanyShowreelSection() {
  return (
    <section className="py-24 sm:py-32 bg-obsidian text-ivory overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16 pb-6 border-b border-white/10">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label text-bronze">Brand Showreel</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-ivory font-normal leading-tight">
              A vision shaped by <br />
              <span className="italic">thoughtful development.</span>
            </h2>
          </div>

          <div className="lg:col-span-4 lg:text-right">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone hover:text-bronze font-medium transition-colors group"
            >
              <span>Explore Our Story</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Supporting Copy */}
        <div className="max-w-3xl mb-12">
          <p className="text-sm sm:text-base text-stone/80 font-light leading-relaxed">
            Discover the vision, design philosophy, and construction mastery behind Ahmadyar Developments. Backed by 32 years of industrial engineering under Ahmad Yar Group, we create architectural addresses that honor the rhythm of human life.
          </p>
        </div>

        {/* Large Cinematic Showreel Media Player */}
        <div className="w-full max-w-5xl mx-auto">
          <ShowreelPlayer
            src={homepageVideos.aboutShowreel.referenceSource}
            remoteFallback={homepageVideos.aboutShowreel.remoteFallback}
            poster={homepageVideos.aboutShowreel.poster}
            title="Ahmadyar Developments — Architectural Journey"
            subtitle="Corporate Showreel • Ahmad Yar Group"
          />
        </div>

        {/* Editorial Subnote */}
        <div className="mt-8 text-center">
          <p className="text-[11px] text-muted/60 tracking-wider">
            Audio playback is muted by default to preserve a calm browsing experience. Click the sound control to enable narration and score.
          </p>
        </div>
      </div>
    </section>
  );
}
