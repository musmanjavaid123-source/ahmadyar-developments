"use client";

import React, { useEffect } from "react";
import { X } from "lucide-react";
import EnquiryForm from "./EnquiryForm";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
  title?: string;
  subtitle?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultProject,
  title = "Register Your Interest",
  subtitle = "Speak directly with an Ahmadyar Developments property specialist for private floor plans, pricing, and viewing appointments.",
}: EnquiryModalProps) {
  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-obsidian/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-ivory border border-stone/80 shadow-2xl p-6 sm:p-10 z-10 animate-fade-in max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-6 right-6 p-2 text-charcoal/60 hover:text-charcoal transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-8">
          <span className="eyebrow-label block mb-1">Ahmadyar Developments</span>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-charcoal">{title}</h3>
          <p className="text-sm text-muted mt-2 leading-relaxed">{subtitle}</p>
        </div>

        <EnquiryForm
          defaultProject={defaultProject}
          theme="light"
          onSuccess={() => {
            // keep open for message or allow user to close
          }}
        />
      </div>
    </div>
  );
}
