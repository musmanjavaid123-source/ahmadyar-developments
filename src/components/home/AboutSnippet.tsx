import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutSnippet() {
  return (
    <section className="py-24 sm:py-32 bg-ivory text-charcoal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Editorial Visual */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto shadow-xl border border-stone-subtle img-zoom-container">
              <Image
                src="/images/heritage/legacy-history.jpg"
                alt="Ahmadyar Group 32-year legacy"
                fill
                className="object-cover img-zoom-target"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="sm:absolute -bottom-6 -right-6 max-w-[240px] p-5 bg-white border border-stone-subtle shadow-lg space-y-1 mt-4 sm:mt-0">
              <span className="text-[10px] uppercase tracking-widest text-bronze block">Corporate Foundation</span>
              <p className="font-serif-luxury text-sm text-charcoal">
                “Resilience, precision engineering and long-term vision.”
              </p>
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">About the Developer</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-charcoal font-normal leading-tight">
              Built on experience. <br />
              <span className="italic">Focused on what comes next.</span>
            </h2>

            <p className="text-base text-charcoal-light font-light leading-relaxed">
              The journey of Ahmadyar Group began 32 years ago, evolving from an ambitious regional enterprise into a diversified conglomerate spanning fuel logistics, ready-mix concrete production, industrial supply, and prime real estate.
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-muted leading-relaxed">
              <p>
                In 2004, Ahmad Yar Group was formally established, expanding into civil infrastructure and manufacturing. Today, Ahmadyar Developments harnesses this formidable construction capability directly in Dubai, developing prime residential enclaves with complete ownership of structural quality, delivery timelines, and customer care.
              </p>
              <p>
                Headquartered at Park Heights Square 2 in Dubai Hills, our multidisciplinary team of architects, engineers, and real estate specialists works in unison to ensure every address delivers lasting value for residents and investors alike.
              </p>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-charcoal hover:bg-bronze text-white text-xs uppercase tracking-widest transition-colors font-medium group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
