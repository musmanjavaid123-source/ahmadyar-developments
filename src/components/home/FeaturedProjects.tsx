import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectVideoCard from "../video/ProjectVideoCard";
import { projectsData } from "@/data/projects";
import { homepageVideos } from "@/data/homepageVideos";

export default function FeaturedProjects() {
  const vestoria = projectsData.find((p) => p.slug === "vestoria-bay");
  const laVera = projectsData.find((p) => p.slug === "la-vera-creek");
  const palatium = projectsData.find((p) => p.slug === "palatium-residences");

  return (
    <section className="py-24 sm:py-32 bg-stone text-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-charcoal/10 gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">Curated Developments</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-charcoal font-normal">
              Places that move <span className="italic">you forward.</span>
            </h2>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal hover:text-bronze font-medium transition-colors group"
          >
            <span>View All Developments</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Row 1: Large Featured Card (Vestoria Bay with video preview) */}
        {vestoria && (
          <div className="mb-12">
            <ProjectVideoCard
              title={vestoria.name}
              location={vestoria.locationArea}
              category={vestoria.category}
              status={vestoria.status}
              description={vestoria.summary}
              posterSrc={vestoria.heroImage}
              videoSrc={homepageVideos.featuredCardPrimary.referenceSource}
              href={`/projects/${vestoria.slug}`}
              specs={vestoria.specs}
              isLarge
            />
          </div>
        )}

        {/* Row 2: Asymmetrical 2-Column Grid (La Vera Creek & Palatium Residences with video previews) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {laVera && (
            <ProjectVideoCard
              title={laVera.name}
              location={laVera.locationArea}
              category={laVera.category}
              status={laVera.status}
              description={laVera.summary}
              posterSrc={laVera.cardImage}
              videoSrc={homepageVideos.cardBrunello.referenceSource}
              href={`/projects/${laVera.slug}`}
              specs={laVera.specs}
            />
          )}

          {palatium && (
            <div className="md:translate-y-8">
              <ProjectVideoCard
                title={palatium.name}
                location={palatium.locationArea}
                category={palatium.category}
                status={palatium.status}
                description={palatium.summary}
                posterSrc={palatium.cardImage}
                videoSrc={homepageVideos.cardGarda.referenceSource}
                href={`/projects/${palatium.slug}`}
                specs={palatium.specs}
              />
            </div>
          )}
        </div>

        {/* Row 3: Editorial Previews / Architectural Typologies */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProjectVideoCard
            title="The Waterfront Penthouses"
            location="Vestoria Bay • Dubai Islands"
            category="Skyline Residences"
            status="Under Construction"
            description="Rare corner-aspect penthouses commanding unbroken horizon vistas over the Arabian Gulf."
            posterSrc="/images/projects/vestoria-lifestyle.jpg"
            videoSrc={homepageVideos.cardArte.referenceSource}
            href="/projects/vestoria-bay"
          />

          <ProjectVideoCard
            title="Contemporary Family Suites"
            location="La Vera Creek • Nad Al Hammar"
            category="Masterplanned Enclave"
            status="Under Construction"
            description="Generous 2 and 3-bedroom residences embracing expansive parklands and smart IoT comfort."
            posterSrc="/images/projects/la-vera-interior-1.jpg"
            videoSrc={homepageVideos.cardGavi.referenceSource}
            href="/projects/la-vera-creek"
          />

          <ProjectVideoCard
            title="The Wellness Rooftop Deck"
            location="Palatium Residences • JVC"
            category="Urban Wellness"
            status="Under Construction"
            description="Panoramic infinity pool, restorative Zen garden, and private resident reception lounge."
            posterSrc="/images/projects/palatium-pool.jpg"
            videoSrc={homepageVideos.cardDivos.referenceSource}
            href="/projects/palatium-residences"
          />
        </div>
      </div>
    </section>
  );
}
