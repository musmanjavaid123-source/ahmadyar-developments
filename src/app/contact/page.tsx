import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight, Instagram, Facebook, Linkedin } from "lucide-react";
import EnquiryForm from "@/components/ui/EnquiryForm";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: "Contact Headquarters | Dubai Hills Sales Gallery",
  description:
    "Connect with Ahmadyar Developments in Dubai. Office address, phone number +971 4 297 1500, WhatsApp advisory, and confidential consultations.",
};

export default function ContactPage() {
  return (
    <div className="bg-ivory text-charcoal min-h-screen pt-28 pb-32">
      {/* Editorial Header */}
      <section className="py-20 sm:py-28 bg-stone/40 border-b border-charcoal/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-bronze" />
              <span className="eyebrow-label">Client Advisory</span>
            </div>
            <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl text-charcoal font-normal leading-tight">
              Get in Touch with Us.
            </h1>
            <p className="text-base sm:text-lg text-muted font-light leading-relaxed">
              Whether you are acquiring a private waterfront residence on Dubai Islands or seeking strategic off-plan investment guidance, our executive advisory team is at your disposal.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Contact Details & Office Location */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="eyebrow-label text-bronze">Corporate Office</span>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl text-charcoal">
                  Dubai Headquarters
                </h2>
                <p className="text-sm text-muted leading-relaxed font-light">
                  Our primary client showroom and corporate offices are centrally located within Dubai Hills Estate.
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                <div className="p-6 bg-white border border-stone-subtle flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center text-bronze shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <span className="text-[11px] uppercase tracking-wider text-muted block font-medium">
                      Office Address
                    </span>
                    <p className="text-charcoal font-medium leading-relaxed">
                      {companyData.address.full}
                    </p>
                    <a
                      href={companyData.address.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-bronze hover:underline inline-flex items-center gap-1 pt-1 font-medium"
                    >
                      <span>Open in Google Maps</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-white border border-stone-subtle flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center text-bronze shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <span className="text-[11px] uppercase tracking-wider text-muted block font-medium">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${companyData.contact.phone}`}
                      className="text-charcoal font-medium hover:text-bronze transition-colors block text-base"
                    >
                      {companyData.contact.phoneFormatted}
                    </a>
                    <span className="text-xs text-muted block">Direct line to client relations</span>
                  </div>
                </div>

                <div className="p-6 bg-white border border-stone-subtle flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center text-bronze shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <span className="text-[11px] uppercase tracking-wider text-muted block font-medium">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${companyData.contact.email}`}
                      className="text-charcoal font-medium hover:text-bronze transition-colors block"
                    >
                      {companyData.contact.email}
                    </a>
                    <span className="text-xs text-muted block">Inquiries reviewed daily</span>
                  </div>
                </div>

                <div className="p-6 bg-white border border-stone-subtle flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center text-bronze shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <span className="text-[11px] uppercase tracking-wider text-muted block font-medium">
                      Instant WhatsApp Advisory
                    </span>
                    <a
                      href={companyData.contact.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-charcoal font-medium hover:text-bronze transition-colors block text-base"
                    >
                      {companyData.contact.whatsappDisplay}
                    </a>
                    <span className="text-xs text-muted block">Direct messaging with property specialist</span>
                  </div>
                </div>

                <div className="p-6 bg-white border border-stone-subtle flex items-start gap-4 shadow-sm">
                  <div className="w-10 h-10 rounded-full bg-bronze/10 flex items-center justify-center text-bronze shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1 text-xs sm:text-sm">
                    <span className="text-[11px] uppercase tracking-wider text-muted block font-medium">
                      Office Hours
                    </span>
                    <p className="text-charcoal font-medium">Monday – Friday: 9:00 AM – 6:00 PM</p>
                    <p className="text-muted text-xs">Saturday: 10:00 AM – 4:00 PM (GST)</p>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-xs uppercase tracking-widest text-muted block mb-3">
                  Follow Ahmadyar Moments
                </span>
                <div className="flex items-center space-x-3">
                  <a
                    href={companyData.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-stone-subtle text-charcoal hover:text-bronze hover:border-bronze transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href={companyData.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-stone-subtle text-charcoal hover:text-bronze hover:border-bronze transition-colors"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={companyData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white border border-stone-subtle text-charcoal hover:text-bronze hover:border-bronze transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Container */}
            <div className="lg:col-span-7 bg-white border border-stone-subtle p-8 sm:p-12 shadow-xl">
              <div className="mb-8">
                <span className="eyebrow-label block mb-1">Direct Consultation</span>
                <h3 className="font-serif-luxury text-3xl text-charcoal">
                  Send a Confidential Enquiry
                </h3>
                <p className="text-xs sm:text-sm text-muted mt-2 leading-relaxed">
                  Please complete the form below. An executive property advisor will contact you with confidential pricing, floor plans, and investment options.
                </p>
              </div>

              <EnquiryForm theme="light" buttonText="Transmit Consultation Request" />
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed or Direct Visual Context */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="p-8 sm:p-12 bg-stone border border-stone-subtle text-center space-y-4">
          <span className="eyebrow-label text-bronze">Directions & Accessibility</span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-charcoal">
            Park Heights Square 2 — Dubai Hills Estate
          </h3>
          <p className="text-xs sm:text-sm text-muted max-w-xl mx-auto">
            Conveniently situated with direct access from Al Khail Road (E44) and Umm Suqeim Street. Dedicated visitor parking and valet services are available at building reception.
          </p>
          <div className="pt-2">
            <a
              href={companyData.address.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3 bg-charcoal hover:bg-bronze text-white text-xs uppercase tracking-widest font-medium transition-colors"
            >
              <span>Launch GPS Navigation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
