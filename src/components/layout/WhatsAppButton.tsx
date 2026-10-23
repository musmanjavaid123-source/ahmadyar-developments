"use client";

import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import { companyData } from "@/data/company";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside aria-label="Direct WhatsApp Contact" className="fixed bottom-6 right-6 z-40 flex items-center">
      {/* Tooltip */}
      <div
        className={`mr-3 px-3.5 py-1.5 bg-obsidian text-ivory text-xs border border-white/10 shadow-lg pointer-events-none transition-all duration-300 hidden sm:block ${
          hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2"
        }`}
      >
        <span className="text-bronze font-medium">WhatsApp Advisory:</span> Connect directly
      </div>

      <a
        href={companyData.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Connect with Ahmadyar Developments on WhatsApp"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-13 h-13 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white shadow-xl flex items-center justify-center p-3.5 transition-transform duration-300 hover:scale-105"
      >
        <MessageSquare className="w-6 h-6" />
      </a>
    </aside>
  );
}
