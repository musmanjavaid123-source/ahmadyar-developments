"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Instagram, Facebook, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { companyData } from "@/data/company";
import { projectsData } from "@/data/projects";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes("@")) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-obsidian text-ivory pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Newsletter & Statement Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-6 space-y-5">
            <span className="eyebrow-label text-bronze">Private Portfolio Inquiries</span>
            <h3 className="font-serif-luxury text-3xl sm:text-4xl text-ivory max-w-lg leading-tight">
              Stay informed on upcoming off-plan architectural launches.
            </h3>
            <p className="text-sm text-muted max-w-md leading-relaxed">
              Receive confidential briefings, pre-market releases, and architectural disclosures directly from Ahmadyar Developments.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            {newsletterSuccess ? (
              <div className="flex items-center gap-3 p-4 border border-bronze/40 bg-bronze/10 text-ivory text-sm">
                <CheckCircle2 className="w-5 h-5 text-bronze shrink-0" />
                <span>Thank you. You will receive private previews and market insights.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="px-5 py-4 bg-obsidian-card border border-white/15 text-sm text-ivory placeholder-muted focus:outline-none focus:border-bronze flex-1"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-bronze hover:bg-bronze-dark text-white text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
            <p className="text-[11px] text-muted/60 mt-3">
              We respect your privacy. Unsubscribe at any time. View our{" "}
              <Link href="/privacy" className="underline hover:text-bronze">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>

        {/* Middle Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 py-16 border-b border-white/10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6 pr-6">
            <Link href="/" className="inline-block">
              <div className="relative w-48 h-10">
                <Image
                  src="/images/brand/logo-footer.svg"
                  alt="Ahmadyar Developments"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-xs text-muted leading-relaxed max-w-sm">
              Backed by over 32 years of enterprise engineering and infrastructure mastery through Ahmad Yar Group. Crafting bespoke residential spaces across Dubai that champion timeless architecture, smart IoT living, and lasting investment value.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-muted hover:text-bronze hover:border-bronze transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-muted hover:text-bronze hover:border-bronze transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-muted hover:text-bronze hover:border-bronze transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Developments Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-bronze font-medium">Developments</h4>
            <ul className="space-y-2.5 text-xs text-muted">
              {projectsData.map((project) => (
                <li key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="hover:text-ivory transition-colors block py-0.5"
                  >
                    <span className="text-ivory font-medium block">{project.name}</span>
                    <span className="text-[11px] text-muted">{project.locationArea}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/projects"
                  className="text-bronze hover:underline text-[11px] uppercase tracking-wider inline-flex items-center gap-1"
                >
                  <span>View All Projects</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-bronze font-medium">Company</h4>
            <ul className="space-y-2.5 text-xs text-muted">
              <li>
                <Link href="/about" className="hover:text-ivory transition-colors block py-0.5">
                  About Our Legacy
                </Link>
              </li>
              <li>
                <Link href="/our-approach" className="hover:text-ivory transition-colors block py-0.5">
                  Our Approach & Philosophy
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-ivory transition-colors block py-0.5">
                  News & Media Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-ivory transition-colors block py-0.5">
                  Contact Headquarters
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-ivory transition-colors block py-0.5">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-ivory transition-colors block py-0.5">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-bronze font-medium">Dubai Headquarters</h4>
            <ul className="space-y-3 text-xs text-muted">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-bronze shrink-0 mt-0.5" />
                <span>{companyData.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-bronze shrink-0" />
                <a
                  href={`tel:${companyData.contact.phone}`}
                  className="hover:text-ivory transition-colors"
                >
                  {companyData.contact.phoneFormatted}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-bronze shrink-0" />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="hover:text-ivory transition-colors"
                >
                  {companyData.contact.email}
                </a>
              </li>
              <li className="pt-2">
                <a
                  href={companyData.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 border border-bronze/40 text-bronze text-xs hover:bg-bronze hover:text-white transition-colors"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-muted space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} Ahmadyar Developments. All rights reserved. A member of Ahmad Yar Group.</p>
          <div className="flex items-center space-x-6">
            <Link href="/privacy" className="hover:text-ivory transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-ivory transition-colors">
              Terms & Conditions
            </Link>
            <span>•</span>
            <Link href="/cookies" className="hover:text-ivory transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
