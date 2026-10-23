import React from "react";
import { companyData } from "@/data/company";

export default function CompanyMetrics() {
  return (
    <section className="py-24 sm:py-32 bg-obsidian text-ivory border-y border-white/10 relative overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-bronze/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="eyebrow-label text-bronze">Enterprise Foundation</span>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-ivory font-normal">
            Heritage in numbers.
          </h2>
          <p className="text-sm text-muted font-light leading-relaxed">
            Ahmadyar Developments is backed by the multi-decade industrial scale and construction discipline of Ahmad Yar Group.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {companyData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-8 lg:px-10 text-center flex flex-col justify-between space-y-4"
            >
              <div>
                <p className="font-serif-luxury text-5xl sm:text-6xl text-bronze font-light mb-3">
                  {metric.number}
                </p>
                <h3 className="text-xs uppercase tracking-widest text-ivory font-medium">
                  {metric.label}
                </h3>
              </div>
              <p className="text-xs text-muted leading-relaxed font-light">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Footnote Attribution as instructed in Master Prompt */}
        <div className="mt-16 text-center">
          <p className="text-[11px] text-muted/60 tracking-wider">
            *Enterprise history reflects the collective foundations of Ahmad Yar Group (established 1992). Developments executed by Ahmadyar Developments LLC, Dubai, UAE.
          </p>
        </div>
      </div>
    </section>
  );
}
