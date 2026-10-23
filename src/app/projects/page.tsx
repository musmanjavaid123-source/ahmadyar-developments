"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Building2, Calendar, ShieldCheck } from "lucide-react";
import { projectsData } from "@/data/projects";

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const locations = ["All", "Dubai Islands", "Nad Al Hammar", "Jumeirah Village Circle"];

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((p) => p.locationArea.toLowerCase().includes(activeFilter.toLowerCase()));

  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-28 pb-32">
      {/* Editorial Header */}
      <section className="py-16 sm:py-24 border-b border-charcoal/10 bg-stone/40">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">Curated Developments</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl text-charcoal font-normal">
              Residential Portfolio.
            </h1>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              Explore our current developments situated across Dubai’s most desirable coastal and urban enclaves. Each project embodies architectural distinction, sustainable structural craftsmanship, and integrated IoT technology.
            </p>
          </div>

          {/* Location Filter Tabs */}
          <div className="mt-12 flex flex-wrap gap-2 sm:gap-3">
            {locations.map((loc) => (
              <button
                key={loc}
                onClick={() => setActiveFilter(loc)}
                className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 border ${
                  activeFilter === loc
                    ? "bg-charcoal text-white border-charcoal"
                    : "bg-white text-charcoal border-stone-subtle hover:border-bronze"
                }`}
              >
                {loc}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.slug}
                className="lg:col-span-12 group bg-white border border-stone-subtle overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[480px] img-zoom-container">
                    <Image
                      src={project.heroImage}
                      alt={project.name}
                      fill
                      className="object-cover img-zoom-target"
                    />
                    <div className="absolute top-6 left-6 z-10 flex gap-2">
                      <span className="px-3 py-1 bg-obsidian/85 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-widest font-medium">
                        {project.status}
                      </span>
                      <span className="px-3 py-1 bg-bronze text-white text-[10px] uppercase tracking-widest font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-8">
                    <div className="space-y-5">
                      <div className="flex items-center gap-2 text-xs text-muted">
                        <MapPin className="w-3.5 h-3.5 text-bronze" />
                        <span>{project.location}</span>
                      </div>

                      <h2 className="font-serif-luxury text-3xl sm:text-4xl text-charcoal group-hover:text-bronze transition-colors">
                        {project.name}
                      </h2>

                      <p className="italic text-sm text-charcoal/80 font-serif-luxury">
                        “{project.tagline}”
                      </p>

                      <p className="text-xs sm:text-sm text-muted leading-relaxed">
                        {project.summary}
                      </p>

                      {/* Specs highlights */}
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-charcoal/10 text-xs">
                        <div className="space-y-1">
                          <span className="text-muted text-[11px] uppercase tracking-wider block">Property Types</span>
                          <span className="font-medium text-charcoal">
                            {project.specs.find((s) => s.label.includes("Typologies"))?.value || "Luxury Residences"}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <span className="text-muted text-[11px] uppercase tracking-wider block">Handover</span>
                          <span className="font-medium text-charcoal">
                            {project.specs.find((s) => s.label.includes("Handover"))?.value || "Upcoming"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-stone-subtle flex items-center justify-between">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-bronze hover:bg-bronze-dark text-white text-xs uppercase tracking-widest font-medium transition-colors"
                      >
                        <span>Explore Project</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      <span className="text-xs text-muted">
                        0{idx + 1} / 0{filteredProjects.length}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Delivery Banner */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-12">
        <div className="p-10 bg-obsidian text-ivory border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <span className="eyebrow-label text-bronze">The Ahmadyar Promise</span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ivory">
              Direct Engineering & Timely Execution
            </h3>
            <p className="text-xs text-muted max-w-xl">
              All developments benefit from in-house ready-mix concrete sourcing, civil engineering coordination, and strict Dubai regulatory compliance through Ahmad Yar Group.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-8 py-3.5 border border-bronze text-bronze hover:bg-bronze hover:text-white text-xs uppercase tracking-widest whitespace-nowrap transition-colors"
          >
            Consult Our Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
