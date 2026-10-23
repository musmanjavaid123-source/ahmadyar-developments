import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Ahmadyar Developments",
  description: "Official Cookie Policy of Ahmadyar Developments website.",
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <div className="space-y-4 mb-12 border-b border-charcoal/10 pb-8">
          <span className="eyebrow-label">Transparency & Preferences</span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl text-charcoal font-normal">
            Cookie Policy
          </h1>
          <p className="text-xs text-muted">
            Last Updated: October 2026 • Ahmadyar Developments
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-charcoal/90 leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files placed on your device to enhance navigation, remember your preferences, and deliver optimized digital experiences.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">2. How We Use Cookies</h2>
            <p>
              We use essential cookies to maintain secure sessions, functional cookies to remember language or viewing preferences, and analytical cookies to evaluate site traffic and improve performance across desktop and mobile devices.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">3. Controlling Your Preferences</h2>
            <p>
              You can adjust your browser settings to accept, block, or delete cookies at any time. Note that disabling essential cookies may impact certain interactive features such as consultation forms and floor plan requests.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
