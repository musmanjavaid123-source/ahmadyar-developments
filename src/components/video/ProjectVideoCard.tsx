"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";

interface ProjectVideoCardProps {
  title: string;
  location: string;
  description: string;
  posterSrc: string;
  videoSrc?: string;
  remoteFallback?: string;
  href: string;
  status?: string;
  category?: string;
  specs?: Array<{ label: string; value: string }>;
  isLarge?: boolean;
}

export default function ProjectVideoCard({
  title,
  location,
  description,
  posterSrc,
  videoSrc,
  remoteFallback,
  href,
  status = "Under Construction",
  category = "Residential Development",
  specs = [],
  isLarge = false,
}: ProjectVideoCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const attemptPlay = useCallback(() => {
    const video = videoRef.current;
    if (!video || !videoSrc || prefersReducedMotion) return;

    video.defaultMuted = true;
    video.muted = true;

    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.debug("Card autoplay waiting:", err.message);
        });
    }
  }, [videoSrc, prefersReducedMotion]);

  // IntersectionObserver: only play video when visible
  useEffect(() => {
    if (!videoSrc || prefersReducedMotion || hasError) return;

    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

    video.defaultMuted = true;
    video.muted = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          attemptPlay();
        } else {
          video.pause();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [videoSrc, prefersReducedMotion, hasError, attemptPlay]);

  if (isLarge) {
    return (
      <div
        ref={containerRef}
        className="group relative bg-obsidian-card border border-stone-subtle overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
      >
        <Link href={href} className="block">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch min-h-[440px] sm:min-h-[520px]">
            {/* Visual Media Column */}
            <div className="lg:col-span-7 relative min-h-[360px] sm:min-h-[460px] overflow-hidden">
              {/* Poster Image */}
              <Image
                src={posterSrc}
                alt={title}
                fill
                priority
                className={`object-cover object-center transition-opacity duration-700 ${
                  isPlaying && !prefersReducedMotion && !hasError ? "opacity-0" : "opacity-100"
                }`}
              />

              {/* Looping Video Background */}
              {videoSrc && !prefersReducedMotion && (
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={posterSrc}
                  preload="metadata"
                  onPlaying={() => setIsPlaying(true)}
                  onError={() => setHasError(true)}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:scale-105 transition-transform duration-1000 ${
                    isPlaying && !hasError ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <source src={videoSrc} type="video/mp4" />
                  {remoteFallback && <source src={remoteFallback} type="video/mp4" />}
                </video>
              )}

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/75 via-transparent to-transparent pointer-events-none" />

              {/* Status Badges */}
              <div className="absolute top-6 left-6 z-10 flex gap-2">
                <span className="px-3 py-1 bg-obsidian/90 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-widest font-medium border border-white/10">
                  {status}
                </span>
                <span className="px-3 py-1 bg-bronze text-white text-[10px] uppercase tracking-widest font-medium">
                  Flagship
                </span>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div className="lg:col-span-5 p-8 sm:p-12 bg-ivory text-charcoal flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <MapPin className="w-3.5 h-3.5 text-bronze" />
                  <span>{location}</span>
                </div>

                <h3 className="font-serif-luxury text-3xl sm:text-4xl text-charcoal group-hover:text-bronze transition-colors">
                  {title}
                </h3>

                <p className="text-xs uppercase tracking-widest text-bronze font-medium">
                  {category}
                </p>

                <p className="text-sm text-muted leading-relaxed line-clamp-3">
                  {description}
                </p>

                {specs.length > 0 && (
                  <div className="pt-4 grid grid-cols-2 gap-4 border-t border-charcoal/10 text-xs">
                    {specs.slice(0, 2).map((s, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="text-[11px] text-muted block uppercase tracking-wider">{s.label}</span>
                        <span className="font-medium text-charcoal">{s.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="pt-4 flex items-center justify-between border-t border-charcoal/10">
                <span className="text-xs uppercase tracking-widest font-medium text-charcoal group-hover:text-bronze flex items-center gap-2 transition-colors">
                  <span>Explore Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="text-xs text-muted">01 / Featured</span>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }

  // Supporting / Standard Card
  return (
    <div
      ref={containerRef}
      className="group relative bg-ivory border border-stone-subtle overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
    >
      <Link href={href} className="block">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          {/* Poster Image */}
          <Image
            src={posterSrc}
            alt={title}
            fill
            className={`object-cover object-center transition-opacity duration-700 ${
              isPlaying && !prefersReducedMotion && !hasError ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Looping Video Background */}
          {videoSrc && !prefersReducedMotion && (
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              poster={posterSrc}
              preload="metadata"
              onPlaying={() => setIsPlaying(true)}
              onError={() => setHasError(true)}
              className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ${
                isPlaying && !hasError ? "opacity-100" : "opacity-0"
              }`}
            >
              <source src={videoSrc} type="video/mp4" />
              {remoteFallback && <source src={remoteFallback} type="video/mp4" />}
            </video>
          )}

          {/* Scrim Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian/70 via-transparent to-transparent pointer-events-none" />

          {/* Badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-obsidian/85 backdrop-blur-sm text-ivory text-[10px] uppercase tracking-widest font-medium border border-white/10">
              {status}
            </span>
          </div>
        </div>

        <div className="p-8 space-y-4">
          <div className="flex items-center gap-2 text-xs text-muted">
            <MapPin className="w-3.5 h-3.5 text-bronze" />
            <span>{location}</span>
          </div>

          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-charcoal group-hover:text-bronze transition-colors">
            {title}
          </h3>

          <p className="text-xs uppercase tracking-widest text-bronze font-medium">
            {category}
          </p>

          <p className="text-sm text-muted leading-relaxed line-clamp-2">
            {description}
          </p>

          <div className="pt-4 flex items-center justify-between border-t border-charcoal/10">
            <span className="text-xs text-muted">Verified Development</span>
            <span className="text-xs uppercase tracking-widest font-medium text-charcoal group-hover:text-bronze flex items-center gap-1.5 transition-colors">
              <span>View Details</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
