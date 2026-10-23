import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Check, MapPin, Building, Calendar, Download, Sparkles } from "lucide-react";
import { projectsData } from "@/data/projects";
import EnquiryForm from "@/components/ui/EnquiryForm";

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.name} | ${project.locationArea}`,
    description: project.summary,
    openGraph: {
      title: `${project.name} | Ahmadyar Developments Dubai`,
      description: project.summary,
      images: [{ url: project.heroImage, alt: project.name }],
    },
  };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projectsData.filter((p) => p.slug !== project.slug);

  return (
    <div className="bg-ivory text-charcoal min-h-screen">
      {/* Immersive Project Hero */}
      <section className="relative min-h-[85vh] flex items-end pb-16 bg-obsidian text-ivory overflow-hidden pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={project.heroImage}
            alt={project.name}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-obsidian/70 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full space-y-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-stone hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-bronze text-white text-[10px] uppercase tracking-widest font-medium">
              {project.status}
            </span>
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-stone text-[10px] uppercase tracking-widest font-medium">
              {project.category}
            </span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-white font-normal leading-tight">
            {project.name}
          </h1>

          <div className="flex items-center gap-2 text-sm text-stone/90">
            <MapPin className="w-4 h-4 text-bronze" />
            <span>{project.location}</span>
          </div>
        </div>
      </section>

      {/* Overview & Key Metrics Bar */}
      <section className="py-12 bg-stone border-b border-stone-subtle">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-xs">
            {project.specs.map((spec, i) => (
              <div key={i} className="space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-muted block">{spec.label}</span>
                <span className="font-medium text-charcoal block leading-snug">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial Concept & Narrative */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <span className="eyebrow-label">Architectural Narrative</span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal leading-tight">
                  {project.tagline}
                </h2>
              </div>

              <div className="space-y-4 text-base text-charcoal/90 leading-relaxed font-light">
                <p>{project.fullDescription}</p>
                <p>{project.architecturalConcept}</p>
              </div>

              {/* Verified highlights list */}
              <div className="p-8 bg-white border border-stone-subtle space-y-4 shadow-sm">
                <span className="text-xs uppercase tracking-widest text-bronze font-medium block">
                  Project Highlights
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-charcoal/80">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-bronze shrink-0" />
                    <span>Prime location in {project.locationArea}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-bronze shrink-0" />
                    <span>Direct engineering supervision by Ahmad Yar Group</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-bronze shrink-0" />
                    <span>Integrated Smart Home IoT connectivity</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-bronze shrink-0" />
                    <span>Resort-standard wellness and fitness amenities</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Sticky Lead Capture Sidebar */}
            <div className="lg:col-span-5 sticky top-28 bg-white border border-stone-subtle p-8 sm:p-10 shadow-xl">
              <span className="eyebrow-label block mb-1">Inquire Directly</span>
              <h3 className="font-serif-luxury text-2xl text-charcoal mb-2">
                Register for {project.name}
              </h3>
              <p className="text-xs text-muted mb-6">
                Receive private floor plans, verified construction updates, and available payment schedules.
              </p>
              <EnquiryForm defaultProject={project.name} theme="light" buttonText={`Inquire for ${project.name}`} />
            </div>
          </div>
        </div>
      </section>

      {/* Curated Architectural Gallery */}
      <section className="py-24 bg-stone border-y border-stone-subtle">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="mb-14 space-y-3">
            <span className="eyebrow-label">Visual Journal</span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-charcoal font-normal">
              Architectural Perspectives.
            </h2>
            <p className="text-sm text-muted font-light max-w-xl">
              Immerse yourself in the spatial design, bespoke finishes, and expansive vistas of {project.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.gallery.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white border border-stone-subtle overflow-hidden shadow-md"
              >
                <div className="relative aspect-[16/10] w-full img-zoom-container">
                  <Image
                    src={item.url}
                    alt={item.caption}
                    fill
                    className="object-cover img-zoom-target"
                  />
                </div>
                <div className="p-4 bg-white text-xs text-muted">
                  <span className="text-bronze font-medium mr-2">0{index + 1}</span>
                  <span>{item.caption}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities & Wellness */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="eyebrow-label">Curated Amenities</span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl text-charcoal font-normal">
              Designed for Comfort & Connection
            </h2>
            <p className="text-sm text-muted">
              Every shared environment at {project.name} is conceived to nurture wellness, social warmth, and daily recreation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.amenities.map((amenity, i) => (
              <div
                key={i}
                className="p-8 bg-white border border-stone-subtle space-y-3 hover:border-bronze/50 transition-colors shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center text-bronze mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="font-serif-luxury text-xl text-charcoal">{amenity.title}</h3>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Developments */}
      <section className="py-20 bg-stone border-t border-stone-subtle">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="eyebrow-label">More Addresses</span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-charcoal">
                Explore Other Developments
              </h3>
            </div>
            <Link
              href="/projects"
              className="text-xs uppercase tracking-widest text-bronze hover:underline"
            >
              View All Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <Link
                key={rel.slug}
                href={`/projects/${rel.slug}`}
                className="group block bg-white border border-stone-subtle overflow-hidden shadow-sm hover:shadow-lg transition-all"
              >
                <div className="relative aspect-[16/9] w-full img-zoom-container">
                  <Image
                    src={rel.cardImage}
                    alt={rel.name}
                    fill
                    className="object-cover img-zoom-target"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-2.5 py-1 bg-obsidian/85 text-ivory text-[10px] uppercase tracking-wider font-medium">
                      {rel.status}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h4 className="font-serif-luxury text-2xl text-charcoal group-hover:text-bronze transition-colors">
                      {rel.name}
                    </h4>
                    <p className="text-xs text-muted">{rel.locationArea}</p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-bronze" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
