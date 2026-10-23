/**
 * HOMEPAGE VIDEO ASSETS CONFIGURATION
 * 
 * Central registry for all architectural cinematic videos used across the
 * Ahmadyar Developments digital experience.
 * 
 * High-performance local video paths in /public/videos/ ensure instant loading,
 * zero network delay, zero CORS issues, and smooth looping.
 */

export interface VideoAsset {
  id: string;
  name: string;
  referenceSource: string;
  remoteFallback: string;
  poster: string;
  description: string;
  intendedPlacement: string;
}

export const homepageVideos: Record<string, VideoAsset> = {
  hero: {
    id: "hero-chateau",
    name: "Chateau Hero",
    referenceSource: "/videos/hero.mp4",
    remoteFallback: "https://mr8.ae/video/chateau-hero-web.mp4",
    poster: "/images/projects/vestoria-exterior.jpg",
    description: "Full-viewport cinematic architectural introduction",
    intendedPlacement: "Homepage Hero Section (100svh)",
  },
  featuredCardPrimary: {
    id: "card-interstellar",
    name: "Interstellar Card",
    referenceSource: "/videos/interstellar.mp4",
    remoteFallback: "https://mr8.ae/video/interstellar-card-web.mp4",
    poster: "/images/projects/vestoria-exterior.jpg",
    description: "Cinematic looping preview for flagship development card (Vestoria Bay)",
    intendedPlacement: "Featured Portfolio — Primary Large Card",
  },
  aboutShowreel: {
    id: "showreel-about",
    name: "Brand Showreel",
    referenceSource: "/videos/showreel.mp4",
    remoteFallback: "https://mr8.ae/video/showreel-about-web.mp4?v=audio1",
    poster: "/images/heritage/home-about-bg.webp",
    description: "Interactive brand story moment with accessible play/pause & audio controls",
    intendedPlacement: "Company Showreel Section (Section 4)",
  },
  cardBrunello: {
    id: "card-brunello",
    name: "Brunello Card",
    referenceSource: "/videos/brunello.mp4",
    remoteFallback: "https://mr8.ae/video/brunello-card-web.mp4",
    poster: "/images/projects/la-vera-creek.jpg",
    description: "Architectural video card preview (La Vera Creek)",
    intendedPlacement: "Featured Portfolio — Secondary Card 1",
  },
  cardGarda: {
    id: "card-garda",
    name: "Garda Card",
    referenceSource: "/videos/garda.mp4",
    remoteFallback: "https://mr8.ae/video/garda-card-web.mp4",
    poster: "/images/projects/palatium-facade.jpg",
    description: "Architectural video card preview (Palatium Residences)",
    intendedPlacement: "Featured Portfolio — Secondary Card 2",
  },
  cardArte: {
    id: "card-arte",
    name: "Arte Card",
    referenceSource: "/videos/arte.mp4",
    remoteFallback: "https://mr8.ae/video/arte-card-web.mp4",
    poster: "/images/projects/palatium-pool.jpg",
    description: "Architectural video card preview (Dubai Islands Masterplan)",
    intendedPlacement: "Featured Portfolio — Supporting Card 3",
  },
  cardGavi: {
    id: "card-gavi",
    name: "Gavi Card",
    referenceSource: "/videos/gavi.mp4",
    remoteFallback: "https://mr8.ae/video/gavi-card-web.mp4",
    poster: "/images/projects/vestoria-interior.jpg",
    description: "Interior design spatial preview",
    intendedPlacement: "Featured Portfolio — Supporting Card 4",
  },
  cardDivos: {
    id: "card-divos",
    name: "Divos Card",
    referenceSource: "/videos/divos.mp4",
    remoteFallback: "https://mr8.ae/video/divos-card-web.mp4",
    poster: "/images/projects/palatium-landscape.jpg",
    description: "Amenity and landscaping spatial preview",
    intendedPlacement: "Featured Portfolio — Supporting Card 5",
  },
};
