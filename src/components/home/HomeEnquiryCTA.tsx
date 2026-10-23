import React from "react";
import EnquiryForm from "../ui/EnquiryForm";
import { companyData } from "@/data/company";
import { Phone, Mail, MapPin } from "lucide-react";

export default function HomeEnquiryCTA() {
  return (
    <section className="py-24 sm:py-32 bg-obsidian text-ivory relative overflow-hidden">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian-card to-obsidian opacity-90 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Address & Contact Context */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="eyebrow-label text-bronze">Direct Consultation</span>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl md:text-6xl text-ivory font-normal leading-tight">
                Let’s find your <br />
                <span className="italic">next address.</span>
              </h2>
              <p className="text-sm sm:text-base text-stone/80 font-light leading-relaxed">
                Connect with our advisory team to discover off-plan residential releases, schedule private showroom appointments, or request verified architectural blueprints.
              </p>
            </div>

            <div className="p-8 bg-obsidian-card border border-white/10 space-y-6">
              <span className="text-xs uppercase tracking-widest text-bronze block font-medium">
                Dubai Advisory Headquarters
              </span>

              <div className="space-y-4 text-xs sm:text-sm text-stone/90">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                  <span>{companyData.address.full}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-bronze shrink-0" />
                  <a href={`tel:${companyData.contact.phone}`} className="hover:text-bronze transition-colors">
                    {companyData.contact.phoneFormatted}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-bronze shrink-0" />
                  <a href={`mailto:${companyData.contact.email}`} className="hover:text-bronze transition-colors">
                    {companyData.contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={companyData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-white/10 hover:bg-bronze text-white text-xs uppercase tracking-widest text-center block transition-colors"
                >
                  Direct WhatsApp Advisory
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Enquiry Form */}
          <div className="lg:col-span-7 bg-obsidian-card border border-white/10 p-8 sm:p-12 shadow-2xl">
            <div className="mb-8">
              <span className="eyebrow-label text-bronze block mb-1">Confidential Inquiry</span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-ivory">
                Register Your Property Interest
              </h3>
              <p className="text-xs text-muted mt-1.5">
                Our advisors respond within one business day with full unit availability and payment structures.
              </p>
            </div>

            <EnquiryForm theme="dark" buttonText="Submit Property Enquiry" />
          </div>
        </div>
      </div>
    </section>
  );
}
