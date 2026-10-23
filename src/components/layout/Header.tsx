"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ArrowUpRight } from "lucide-react";
import EnquiryModal from "../ui/EnquiryModal";
import { companyData } from "@/data/company";

interface HeaderProps {
  forceSolid?: boolean;
}

export default function Header({ forceSolid = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const pathname = usePathname();

  const isHome = pathname === "/";
  const isSolid = forceSolid || !isHome || scrolled;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Projects", href: "/projects" },
    { label: "About Us", href: "/about" },
    { label: "Our Approach", href: "/our-approach" },
    { label: "News & Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isSolid
            ? "glass-header-light py-4 shadow-sm"
            : "glass-header-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center group">
            <div className="flex items-center gap-3">
              <div className="relative w-36 sm:w-44 h-9">
                <Image
                  src={isSolid ? "/images/brand/logo-dark.svg" : "/images/brand/logo-gold.svg"}
                  alt="Ahmadyar Developments"
                  fill
                  priority
                  className="object-contain object-left transition-opacity duration-300"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-9">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.2em] transition-all duration-300 hover:text-bronze ${
                    isSolid
                      ? active
                        ? "text-bronze font-medium"
                        : "text-charcoal hover:text-bronze"
                      : active
                      ? "text-bronze font-medium"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href={`tel:${companyData.contact.phone}`}
              className={`flex items-center gap-2 text-xs tracking-wider transition-colors ${
                isSolid ? "text-muted hover:text-charcoal" : "text-white/75 hover:text-white"
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-bronze" />
              <span>{companyData.contact.phoneFormatted}</span>
            </a>

            <button
              onClick={() => setEnquiryModalOpen(true)}
              className={`px-5 py-2.5 text-xs uppercase tracking-widest transition-all duration-300 border ${
                isSolid
                  ? "border-bronze text-bronze hover:bg-bronze hover:text-white"
                  : "border-white/40 text-white hover:bg-white hover:text-charcoal"
              }`}
            >
              Enquire Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center space-x-3">
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className={`px-3 py-1.5 text-[11px] uppercase tracking-wider border ${
                isSolid ? "border-bronze text-bronze" : "border-white/60 text-white"
              }`}
            >
              Enquire
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation" : "Open navigation"}
              className={`p-2 transition-colors ${
                isSolid ? "text-charcoal" : "text-white"
              }`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 bg-obsidian text-ivory flex flex-col justify-between transition-all duration-500 lg:hidden ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="px-6 py-6 border-b border-white/10 flex items-center justify-between">
          <Link href="/" onClick={() => setMobileMenuOpen(false)}>
            <div className="relative w-40 h-8">
              <Image
                src="/images/brand/logo-gold.svg"
                alt="Ahmadyar Developments"
                fill
                className="object-contain object-left"
              />
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
            className="p-2 text-white/80 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="px-8 py-10 flex-1 flex flex-col justify-center space-y-6">
          <span className="eyebrow-label text-bronze/80">Navigation</span>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between text-2xl sm:text-3xl font-serif-luxury text-ivory hover:text-bronze transition-colors group"
            >
              <span>{link.label}</span>
              <ArrowUpRight className="w-5 h-5 text-bronze opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
          ))}
        </div>

        <div className="p-8 border-t border-white/10 bg-obsidian-card space-y-4">
          <div className="text-xs text-muted leading-relaxed">
            <p className="text-ivory font-medium mb-1">Dubai Hills Headquarters</p>
            <p>{companyData.address.full}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setEnquiryModalOpen(true);
              }}
              className="w-full py-3.5 bg-bronze text-white text-xs uppercase tracking-widest text-center"
            >
              Enquire Now
            </button>
            <a
              href={companyData.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 border border-white/20 text-ivory text-xs uppercase tracking-widest text-center hover:bg-white/5 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* Global Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
      />
    </>
  );
}
