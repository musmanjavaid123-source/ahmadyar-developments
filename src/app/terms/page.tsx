import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Ahmadyar Developments",
  description: "Terms and conditions of use for Ahmadyar Developments website and property inquiries.",
};

export default function TermsPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <div className="space-y-4 mb-12 border-b border-charcoal/10 pb-8">
          <span className="eyebrow-label">Legal Agreement</span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl text-charcoal font-normal">
            Terms & Conditions
          </h1>
          <p className="text-xs text-muted">
            Last Updated: October 2026 • Ahmadyar Developments LLC, Dubai, UAE
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-charcoal/90 leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">1. Terms of Use</h2>
            <p>
              By accessing and utilizing this website, you agree to comply with and be bound by these terms and conditions. The content on this website is for general informational and marketing purposes concerning Ahmadyar Developments projects in Dubai.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">2. Property Information & Renderings</h2>
            <p>
              All architectural renderings, photographic impressions, floor plans, specifications, and dimensions displayed are artistic concepts and indicative designs. Ahmadyar Developments reserves the right to modify specifications in compliance with regulatory approvals and engineering requirements under Dubai Land Department (DLD) protocols.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">3. Intellectual Property</h2>
            <p>
              All trademarks, logos, brand assets, architectural renders, blueprints, copy, and layout design are proprietary to Ahmadyar Developments and Ahmad Yar Group. Unauthorized duplication or distribution is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">4. Governing Law & Jurisdiction</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any disputes shall be submitted to the exclusive jurisdiction of the Courts of Dubai.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
