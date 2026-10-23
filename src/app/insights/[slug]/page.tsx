import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Calendar, Clock, Share2 } from "lucide-react";
import { insightsData } from "@/data/insights";

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return insightsData.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = insightsData.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Ahmadyar Insights`,
    description: article.excerpt,
    openGraph: {
      title: `${article.title} | Ahmadyar Developments`,
      description: article.excerpt,
      images: [{ url: article.image, alt: article.title }],
      type: "article",
      publishedTime: article.isoDate,
    },
  };
}

export default function ArticleDetailPage({ params }: ArticlePageProps) {
  const article = insightsData.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = insightsData.filter((a) => a.slug !== article.slug);

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-28 pb-32">
      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-6 sm:px-8 pt-12 pb-16">
        <div className="space-y-6">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted hover:text-charcoal transition-colors mb-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-bronze text-white text-[10px] uppercase tracking-widest font-medium">
              {article.category}
            </span>
            <span className="text-xs text-muted flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-bronze" />
              {article.date}
            </span>
            <span className="text-muted">•</span>
            <span className="text-xs text-muted flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-bronze" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-charcoal font-normal leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-charcoal/80 font-light italic leading-relaxed pt-2 border-l-2 border-bronze pl-4">
            {article.excerpt}
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] w-full my-12 shadow-xl border border-stone-subtle overflow-hidden">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Article Body */}
        <div className="space-y-6 text-base sm:text-lg text-charcoal/90 leading-relaxed font-light">
          {article.content.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Article Attribution & Footer */}
        <div className="mt-16 pt-8 border-t border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-muted">
          <div>
            <span className="block font-medium text-charcoal">Published by Ahmadyar Developments</span>
            <span>Suite 701 & 706, Park Heights Square 2, Dubai Hills, Dubai, UAE</span>
          </div>

          <Link
            href="/contact"
            className="px-5 py-2.5 bg-stone hover:bg-stone-subtle text-charcoal text-xs uppercase tracking-wider font-medium transition-colors"
          >
            Media Inquiries
          </Link>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12 pt-16 border-t border-charcoal/10">
          <div className="mb-10">
            <span className="eyebrow-label">Further Reading</span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-charcoal">
              Related Articles & Insights
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="group block bg-white border border-stone-subtle p-6 hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/9] w-full mb-4 img-zoom-container">
                  <Image
                    src={rel.image}
                    alt={rel.title}
                    fill
                    className="object-cover img-zoom-target"
                  />
                </div>
                <span className="text-[10px] uppercase tracking-wider text-bronze block mb-1">
                  {rel.category}
                </span>
                <h4 className="font-serif-luxury text-xl text-charcoal group-hover:text-bronze transition-colors line-clamp-2">
                  {rel.title}
                </h4>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
