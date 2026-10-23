import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Ahmadyar Developments",
  description: "Official Privacy Policy of Ahmadyar Developments LLC, Dubai, UAE.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-28 pb-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-16">
        <div className="space-y-4 mb-12 border-b border-charcoal/10 pb-8">
          <span className="eyebrow-label">Legal Disclosure</span>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl text-charcoal font-normal">
            Privacy Policy
          </h1>
          <p className="text-xs text-muted">
            Last Updated: October 2026 • Ahmadyar Developments LLC, Dubai, United Arab Emirates
          </p>
        </div>

        <div className="space-y-8 text-sm sm:text-base text-charcoal/90 leading-relaxed font-light">
          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">1. Introduction</h2>
            <p>
              Ahmadyar Developments LLC (&quot;Ahmadyar&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to safeguarding the personal data and privacy of our clients, prospective purchasers, and website visitors. This Privacy Policy details how we collect, store, process, and protect your information when accessing our website (ahmadyardevelopments.com) or interacting with our Dubai client relations team.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">2. Data We Collect</h2>
            <p>
              When you submit an enquiry, register interest in a development, or communicate with our representatives, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted">
              <li>Full legal name, preferred salutation, and contact information (phone number, email address).</li>
              <li>Property preferences (development of interest, unit configuration, investment criteria).</li>
              <li>Technical analytics (IP address, browser type, device identifiers, session cookies).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">3. Purpose and Legal Basis of Processing</h2>
            <p>
              Your personal information is used exclusively to:
            </p>
            <ul className="list-disc list-inside space-y-1.5 pl-2 text-muted">
              <li>Process real estate consultations, property brochures, and private viewing appointments.</li>
              <li>Comply with regulatory requirements under Dubai Land Department (DLD) and UAE real estate statutes.</li>
              <li>Provide critical project construction updates and verified handover notices.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">4. Data Security & Storage</h2>
            <p>
              We implement industry-standard encryption, firewalls, and strict access controls. We never sell, rent, or trade your personal data to unauthorized third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif-luxury text-2xl text-charcoal">5. Contact Information</h2>
            <p>
              For privacy inquiries, data access requests, or consent revocations, please contact:
            </p>
            <div className="p-4 bg-stone text-xs text-charcoal space-y-1">
              <p className="font-medium">Data Protection Officer</p>
              <p>Ahmadyar Developments LLC</p>
              <p>Suite 701 & 706, Park Heights Square 2, Dubai Hills, Dubai, UAE</p>
              <p>Email: info@ahmadyardevelopments.com • Phone: +971 4 297 1500</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
