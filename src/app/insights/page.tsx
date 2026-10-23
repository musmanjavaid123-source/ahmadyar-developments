import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Calendar, Clock, Newspaper } from "lucide-react";
import { insightsData } from "@/data/insights";

export const metadata: Metadata = {
  title: "News & Media Center | Insights & Press Releases",
  description:
    "Explore the latest press releases, media coverage, and real estate market intelligence from Ahmadyar Developments in Dubai.",
};

export default function InsightsPage() {
  const [featured, ...otherArticles] = insightsData;

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-28 pb-32">
      {/* Editorial Header */}
      <section className="py-20 sm:py-28 bg-stone/40 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">Media & Market Insights</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-charcoal font-normal leading-tight">
              News & Intelligence.
            </h1>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              Official press coverage, executive viewpoints, and analytical research on Dubai’s prime off-plan residential developments and market fundamentals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Lead Story */}
      {featured && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
            <div className="bg-white border border-stone-subtle overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] img-zoom-container">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover img-zoom-target"
                  />
                  <div className="absolute top-6 left-6 z-10 flex gap-2">
                    <span className="px-3 py-1 bg-bronze text-white text-[10px] uppercase tracking-widest font-medium">
                      Featured Press
                    </span>
                    <span className="px-3 py-1 bg-obsidian/85 text-ivory text-[10px] uppercase tracking-widest font-medium">
                      {featured.category}
                    </span>
                  </div>
                </div>

                <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-bronze" />
                        {featured.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-bronze" />
                        {featured.readTime}
                      </span>
                    </div>

                    <h2 className="font-serif-luxury text-2xl sm:text-4xl text-charcoal hover:text-bronze transition-colors">
                      <Link href={`/insights/${featured.slug}`}>
                        {featured.title}
                      </Link>
                    </h2>

                    <p className="text-sm text-muted leading-relaxed font-light">
                      {featured.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-subtle">
                    <Link
                      href={`/insights/${featured.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-medium text-charcoal hover:text-bronze transition-colors group"
                    >
                      <span>Read Complete Story</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Grid of Other Articles */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {otherArticles.map((article) => (
              <article
                key={article.slug}
                className="group bg-white border border-stone-subtle hover:border-bronze/40 transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between"
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
                      <span className="px-3 py-1 bg-obsidian/85 text-ivory text-[10px] uppercase tracking-widest font-medium">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 space-y-4">
                    <div className="flex items-center gap-3 text-xs text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-bronze" />
                        {article.date}
                      </span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className="font-serif-luxury text-2xl sm:text-3xl text-charcoal group-hover:text-bronze transition-colors">
                      <Link href={`/insights/${article.slug}`}>
                        {article.title}
                      </Link>
                    </h3>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed font-light line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
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
    </div>
  );
}
