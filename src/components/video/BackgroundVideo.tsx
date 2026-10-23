"use client";

import React, { useRef, useEffect } from "react";

interface BackgroundVideoProps {
  src: string;
  poster: string;
  altText?: string;
  priority?: boolean;
  className?: string;
  overlayClass?: string;
}

export default function BackgroundVideo({
  src,
  poster,
  altText = "Architectural video visual",
  priority = false,
  className = "",
  overlayClass = "bg-black/30",
}: BackgroundVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM property enforcement for Chrome, Safari, Edge, Firefox
    video.defaultMuted = true;
    video.muted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const startPlayback = () => {
      if (!video) return;
      video.defaultMuted = true;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.debug("Autoplay waiting for user gesture:", err.message);
        });
      }
    };

    // Force media load and trigger playback immediately
    video.load();
    startPlayback();

    // In case browser autoplay policy strictly requires user gesture,
    // trigger playback on first user touch, click, scroll, or keypress
    const onUserGesture = () => {
      startPlayback();
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
      window.removeEventListener("click", onUserGesture);
      window.removeEventListener("touchstart", onUserGesture);
      window.removeEventListener("scroll", onUserGesture);
      window.removeEventListener("keydown", onUserGesture);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Element with native poster fallback */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        aria-label={altText}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Subtle overlay for headline legibility */}
      {overlayClass && (
        <div className={`absolute inset-0 pointer-events-none ${overlayClass}`} />
      )}
    </div>
  );
}
