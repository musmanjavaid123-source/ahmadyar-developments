import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, Calendar } from "lucide-react";
import { insightsData } from "@/data/insights";

export default function PressInsights() {
  return (
    <section className="py-24 sm:py-32 bg-stone text-charcoal">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-charcoal/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">News & Intelligence</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-charcoal font-normal">
              Media Center & <span className="italic">Market Insights.</span>
            </h2>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal hover:text-bronze font-medium transition-colors group"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Magazine-Style Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {insightsData.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between bg-ivory border border-stone-subtle hover:border-bronze/40 transition-all duration-300 hover:shadow-lg"
            >
              <div>
                <div className="relative aspect-[16/10] w-full overflow-hidden img-zoom-container">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover img-zoom-target"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-obsidian/80 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-widest font-medium">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 space-y-3">
                  <div className="flex items-center gap-2 text-xs text-muted">
                    <Calendar className="w-3.5 h-3.5 text-bronze" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="font-serif-luxury text-xl sm:text-2xl text-charcoal group-hover:text-bronze transition-colors line-clamp-2">
                    <Link href={`/insights/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-2">
                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-medium text-charcoal group-hover:text-bronze transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
