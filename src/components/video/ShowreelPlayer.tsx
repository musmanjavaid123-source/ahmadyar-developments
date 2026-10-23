"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";

interface ShowreelPlayerProps {
  src: string;
  remoteFallback?: string;
  poster: string;
  title?: string;
  subtitle?: string;
}

export default function ShowreelPlayer({
  src,
  remoteFallback,
  poster,
  title = "Ahmadyar Brand Showreel",
  subtitle = "Crafting Places with Purpose",
}: ShowreelPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  // Initialize muted properly on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
    }
  }, []);

  // IntersectionObserver: automatically pause when off-screen
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;

        if (!entry.isIntersecting && isPlaying) {
          video.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isPlaying]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => {
        setIsPlaying(true);
        setHasStarted(true);
      }).catch((e) => {
        console.warn("Playback error:", e);
      });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    const newMuted = !video.muted;
    video.muted = newMuted;
    setIsMuted(newMuted);
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    const container = containerRef.current;
    if (!container) return;

    if (!document.fullscreenElement) {
      container.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    if (video.duration) {
      setProgress((video.currentTime / video.duration) * 100);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    if (!video) return;
    setDuration(video.duration);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const video = videoRef.current;
    const bar = e.currentTarget;
    if (!video || !bar) return;

    const rect = bar.getBoundingClientRect();
    const clickPos = (e.clientX - rect.left) / rect.width;
    video.currentTime = clickPos * video.duration;
  };

  // Keyboard controls
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      togglePlay();
    } else if (e.key === "m" || e.key === "M") {
      e.preventDefault();
      const video = videoRef.current;
      if (video) {
        video.muted = !video.muted;
        setIsMuted(video.muted);
      }
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label={`${title} video player. Press Space to play/pause, M to mute/unmute.`}
      className="relative aspect-[16/9] w-full bg-obsidian-card border border-white/10 shadow-2xl overflow-hidden group focus:outline-none focus:ring-2 focus:ring-bronze"
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        playsInline
        muted={isMuted}
        poster={poster}
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onClick={togglePlay}
        className="w-full h-full object-cover cursor-pointer"
      >
        <source src={src} type="video/mp4" />
        {remoteFallback && <source src={remoteFallback} type="video/mp4" />}
      </video>

      {/* Poster Image (shown before first play) */}
      {!hasStarted && (
        <div
          onClick={togglePlay}
          className="absolute inset-0 cursor-pointer z-10"
        >
          <Image
            src={poster}
            alt={title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/30 to-transparent" />
        </div>
      )}

      {/* Center Play/Pause Trigger */}
      <div
        onClick={togglePlay}
        className={`absolute inset-0 flex items-center justify-center z-20 cursor-pointer transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-90" : "opacity-100"
        }`}
      >
        <button
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
          className="w-20 h-20 rounded-full bg-bronze/90 hover:bg-bronze text-white shadow-2xl flex items-center justify-center transition-transform duration-300 hover:scale-110 backdrop-blur-sm"
        >
          {isPlaying ? (
            <Pause className="w-8 h-8 fill-current" />
          ) : (
            <Play className="w-8 h-8 fill-current ml-1" />
          )}
        </button>
      </div>

      {/* Bottom Architectural Controls Bar */}
      <div
        className={`absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-obsidian/95 via-obsidian/60 to-transparent p-6 transition-opacity duration-300 ${
          isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        }`}
      >
        {/* Progress Bar */}
        <div
          onClick={handleSeek}
          className="w-full h-1 bg-white/20 hover:h-2 transition-all cursor-pointer rounded-full mb-4 relative"
        >
          <div
            className="h-full bg-bronze rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-ivory">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase tracking-widest text-bronze block">
              {subtitle}
            </span>
            <p className="font-serif-luxury text-base text-white">{title}</p>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-[11px] text-muted tracking-wider hidden sm:inline">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>

            {/* Audio Toggle */}
            <button
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
              className="p-2 text-white/80 hover:text-white hover:text-bronze transition-colors flex items-center gap-1.5"
            >
              {isMuted ? (
                <>
                  <VolumeX className="w-4 h-4 text-bronze" />
                  <span className="text-[10px] uppercase tracking-wider hidden sm:inline">Muted</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4 text-bronze" />
                  <span className="text-[10px] uppercase tracking-wider hidden sm:inline">Sound On</span>
                </>
              )}
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={toggleFullscreen}
              aria-label="Fullscreen"
              className="p-2 text-white/80 hover:text-white transition-colors"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
