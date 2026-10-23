"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { projectsData } from "@/data/projects";

interface EnquiryFormProps {
  defaultProject?: string;
  theme?: "light" | "dark";
  onSuccess?: () => void;
  className?: string;
  buttonText?: string;
}

export default function EnquiryForm({
  defaultProject = "",
  theme = "light",
  onSuccess,
  className = "",
  buttonText = "Submit Enquiry",
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: defaultProject || (projectsData[0]?.name ?? "General Enquiry"),
    message: "",
    consent: true,
    // Honeypot field for spam bots
    hp_company: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Basic frontend validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Phone).");
      return;
    }

    if (!formData.email.includes("@") || !formData.email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        if (onSuccess) onSuccess();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Unable to submit enquiry. Please try again or reach our Dubai office directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please call +971 4 297 1500 or contact us via WhatsApp.");
    }
  };

  const isDark = theme === "dark";

  if (status === "success") {
    return (
      <div className={`p-8 text-center border ${isDark ? "bg-obsidian-card border-obsidian-border text-ivory" : "bg-white border-stone text-charcoal"} ${className}`}>
        <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-bronze/10 text-bronze flex items-center justify-center">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h4 className="font-serif-luxury text-2xl mb-2 text-bronze">Thank You for Your Enquiry</h4>
        <p className="text-sm opacity-80 max-w-md mx-auto leading-relaxed mb-6">
          Your request regarding <strong className="font-semibold">{formData.project}</strong> has been received by the Ahmadyar Developments client advisory team. A dedicated luxury property consultant will connect with you shortly.
        </p>
        <button
          onClick={() => {
            setStatus("idle");
            setFormData({
              name: "",
              email: "",
              phone: "",
              project: defaultProject || projectsData[0].name,
              message: "",
              consent: true,
              hp_company: "",
            });
          }}
          className="text-xs uppercase tracking-widest text-bronze hover:underline py-2"
        >
          Send Another Request
        </button>
      </div>
    );
  }

  const inputBaseStyle = isDark
    ? "bg-obsidian border-white/10 text-ivory placeholder-muted focus:border-bronze focus:ring-1 focus:ring-bronze"
    : "bg-ivory-50 border-stone text-charcoal placeholder-muted focus:border-bronze focus:ring-1 focus:ring-bronze";

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`} noValidate>
      {/* Honeypot anti-spam */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="hp_company">Do not fill this</label>
        <input
          type="text"
          id="hp_company"
          name="hp_company"
          value={formData.hp_company}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {status === "error" && errorMessage && (
        <div className="p-3 text-xs flex items-center gap-2 bg-red-950/20 border border-red-500/40 text-red-600 dark:text-red-400">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest mb-1.5 opacity-80" htmlFor="enquiry-name">
            Full Name *
          </label>
          <input
            id="enquiry-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Alexander Wright"
            className={`w-full px-4 py-3 text-sm border outline-none transition-colors ${inputBaseStyle}`}
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest mb-1.5 opacity-80" htmlFor="enquiry-phone">
            Phone Number *
          </label>
          <input
            id="enquiry-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+971 50 000 0000"
            className={`w-full px-4 py-3 text-sm border outline-none transition-colors ${inputBaseStyle}`}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-widest mb-1.5 opacity-80" htmlFor="enquiry-email">
            Email Address *
          </label>
          <input
            id="enquiry-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="alexander@example.com"
            className={`w-full px-4 py-3 text-sm border outline-none transition-colors ${inputBaseStyle}`}
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-widest mb-1.5 opacity-80" htmlFor="enquiry-project">
            Project of Interest
          </label>
          <select
            id="enquiry-project"
            name="project"
            value={formData.project}
            onChange={handleChange}
            className={`w-full px-4 py-3 text-sm border outline-none transition-colors ${inputBaseStyle}`}
          >
            {projectsData.map((p) => (
              <option key={p.slug} value={p.name} className="bg-white dark:bg-obsidian text-charcoal dark:text-ivory">
                {p.name} — {p.locationArea}
              </option>
            ))}
            <option value="General Portfolio Enquiry" className="bg-white dark:bg-obsidian text-charcoal dark:text-ivory">
              General Portfolio Enquiry
            </option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest mb-1.5 opacity-80" htmlFor="enquiry-message">
          Message or Specific Requirements (Optional)
        </label>
        <textarea
          id="enquiry-message"
          name="message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
          placeholder="Kindly mention preferred unit size, investment timeline, or viewing requests..."
          className={`w-full px-4 py-3 text-sm border outline-none transition-colors resize-none ${inputBaseStyle}`}
        />
      </div>

      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="enquiry-consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-1 h-3.5 w-3.5 rounded border-stone text-bronze focus:ring-bronze"
        />
        <label htmlFor="enquiry-consent" className="text-xs opacity-70 leading-relaxed cursor-pointer select-none">
          I consent to Ahmadyar Developments contacting me via phone, email, or WhatsApp regarding this enquiry and relevant real estate developments in Dubai.
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-2 py-4 px-8 bg-bronze hover:bg-bronze-dark text-white text-xs uppercase tracking-widest font-medium transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Processing Consultation...</span>
          </>
        ) : (
          <>
            <span>{buttonText}</span>
            <Send className="w-3.5 h-3.5" />
          </>
        )}
      </button>
    </form>
  );
}
