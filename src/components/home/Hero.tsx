"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Play, Pause, Volume2, VolumeX } from "lucide-react";
import EnquiryModal from "../ui/EnquiryModal";
import { homepageVideos } from "@/data/homepageVideos";

export default function Hero() {
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM property configuration required for cross-browser autoplay
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const syncState = () => {
      setIsPlaying(!video.paused);
      setIsMuted(video.muted);
    };

    video.addEventListener("play", syncState);
    video.addEventListener("pause", syncState);
    video.addEventListener("volumechange", syncState);

    const tryPlay = () => {
      video.defaultMuted = true;
      video.muted = true;
      const promise = video.play();
      if (promise !== undefined) {
        promise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.debug("Autoplay deferred by browser policy:", err.message);
          });
      }
    };

    if (video.readyState >= 2) {
      tryPlay();
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true });
      video.addEventListener("canplay", tryPlay, { once: true });
    }
    tryPlay();

    // Secondary user-gesture fallback to unlock video if autoplay was deferred
    const onUserGesture = () => {
      tryPlay();
      cleanupGestureListeners();
    };

    const cleanupGestureListeners = () => {
      window.removeEventListener("click", onUserGesture);
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("scroll", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
    };

    window.addEventListener("click", onUserGesture, { passive: true, once: true });
    window.addEventListener("touchstart", onUserGesture, { passive: true, once: true });
    window.addEventListener("scroll", onUserGesture, { passive: true, once: true });
    window.addEventListener("keydown", onUserGesture, { passive: true, once: true });

    return () => {
      video.removeEventListener("play", syncState);
      video.removeEventListener("pause", syncState);
      video.removeEventListener("volumechange", syncState);
      video.removeEventListener("loadeddata", tryPlay);
      video.removeEventListener("canplay", tryPlay);
      cleanupGestureListeners();
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  return (
    <section className="relative h-[100svh] min-h-[640px] flex items-end pb-16 sm:pb-20 overflow-hidden bg-obsidian text-ivory">
      {/* Cinematic Full-Viewport Background Video Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          poster={homepageVideos.hero.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="Ahmadyar Developments Cinematic Architectural Horizon"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        >
          <source src={homepageVideos.hero.referenceSource} type="video/mp4" />
          <source src={homepageVideos.hero.remoteFallback} type="video/mp4" />
        </video>

        {/* Cinematic gradient scrim: transparent at top, subtle darkening at bottom for crisp headline legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/85 via-obsidian/30 to-black/20 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Main Hero Headlines & Copy */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-3 py-1.5 px-3.5 bg-black/50 backdrop-blur-md border border-white/15 text-bronze-light">
              <span className="w-1.5 h-1.5 rounded-full bg-bronze animate-pulse" />
              <span className="text-[11px] uppercase tracking-[0.25em] font-medium">
                Dubai • United Arab Emirates
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-normal leading-[1.08] tracking-tight drop-shadow-md">
              Designed for the life <br />
              <span className="italic font-light text-stone/90">you aspire to.</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-stone/90 max-w-2xl font-light leading-relaxed drop-shadow-sm">
              Thoughtfully conceived residences. Distinctive architecture. A considered approach to modern living.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <Link
                href="/projects"
                className="px-8 py-4 bg-bronze hover:bg-bronze-dark text-white text-xs uppercase tracking-widest transition-all duration-300 text-center font-medium shadow-xl hover:shadow-bronze/30 flex items-center justify-center gap-2 group"
              >
                <span>Explore Our Projects</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                href="/about"
                className="px-8 py-4 border border-white/40 hover:border-white text-white hover:bg-white/10 text-xs uppercase tracking-widest transition-all duration-300 text-center font-medium backdrop-blur-sm"
              >
                Discover Ahmadyar
              </Link>
            </div>
          </div>

          {/* Quick Floating Highlight / Flagship Banner */}
          <div className="lg:col-span-4 flex flex-col justify-end lg:items-end">
            <div className="p-6 bg-obsidian/80 backdrop-blur-md border border-white/15 max-w-xs space-y-2.5 shadow-2xl">
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-[0.2em] text-bronze block font-medium">
                  Flagship Development
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <p className="font-serif text-2xl text-ivory">Vestoria Bay</p>
              <p className="text-xs text-stone/80 leading-relaxed font-light">
                Waterfront sanctuary at Dubai Islands. 1 to 4-bedroom residences & penthouses.
              </p>
              <div className="pt-2 flex items-center justify-between border-t border-white/10">
                <Link
                  href="/projects/vestoria-bay"
                  className="text-xs text-bronze hover:underline uppercase tracking-wider font-medium inline-flex items-center gap-1"
                >
                  <span>Project Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-muted">2027</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Scroll Cue + Ambient Video Controls */}
        <div className="pt-12 flex items-center justify-between border-t border-white/10 mt-10 text-xs text-stone/70">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-bronze/60" />
            <span className="tracking-widest uppercase text-[11px]">
              Ahmadyar Developments • Architectural Portfolio
            </span>
          </div>

          <div className="flex items-center gap-6">
            {/* Ambient Video Control Buttons */}
            <div className="hidden sm:flex items-center gap-2 bg-black/40 backdrop-blur-md px-3 py-1.5 border border-white/15 rounded-full pointer-events-auto">
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause background video" : "Play background video"}
                className="p-1 hover:text-white text-stone transition-colors"
                title={isPlaying ? "Pause Video" : "Play Video"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
              </button>
              <span className="w-[1px] h-3 bg-white/20" />
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
                className="p-1 hover:text-white text-stone transition-colors"
                title={isMuted ? "Unmute Audio" : "Mute Audio"}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-bronze" />}
              </button>
            </div>

            <a
              href="#introduction"
              aria-label="Scroll to introduction"
              className="flex items-center gap-2 hover:text-white transition-colors group cursor-pointer"
            >
              <span className="text-[11px] uppercase tracking-widest hidden sm:inline">Scroll to Explore</span>
              <ArrowDown className="w-4 h-4 text-bronze transition-transform group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </div>

      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        defaultProject="Vestoria Bay"
      />
    </section>
  );
}
