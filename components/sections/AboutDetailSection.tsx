"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mail, ExternalLink, CheckCircle2, MapPin } from "lucide-react";

export default function AboutDetailSection() {
  return (
    <div className="pt-28 pb-20 w-full min-h-screen bg-[var(--bg-sage)] bg-grid-pattern text-[var(--text-primary)]">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        
        {/* Back Link */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[var(--accent-gold)]" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Hero Area */}
        <div className="space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--surface-border)] w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] animate-pulse" />
            <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
              About Supragnya
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.08]">
            Product & Systems Designer focused on <span className="italic text-[var(--accent-gold)] font-serif">clarity under pressure.</span>
          </h1>

          <p className="font-sans text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            I work at the intersection of product architecture and human interaction — transforming complex, multi-sided systems into tools that feel intuitive, calm, and dependable.
          </p>
        </div>

        {/* Profile Details & Bio */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-6">
            <div className="w-24 h-24 rounded-2xl overflow-hidden ring-2 ring-[var(--accent-gold)]/40 shadow-lg">
              <Image
                src="/images/avatar.png"
                alt="Supragnya"
                width={96}
                height={96}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-medium text-[var(--text-primary)]">Supragnya Purohith</h2>
              <p className="text-sm text-[var(--accent-gold)] font-medium mt-1">Product Designer</p>
              <div className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)] mt-3">
                <MapPin className="w-3.5 h-3.5 text-[var(--accent-gold)]" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--surface-border)] space-y-3">
              <a
                href="mailto:99supragnya@gmail.com"
                className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors"
              >
                <Mail className="w-4 h-4 text-[var(--accent-gold)]" />
                <span className="truncate">99supragnya@gmail.com</span>
              </a>
              <a
                href="https://www.linkedin.com/in/supragnya-purohith/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors"
              >
                <ExternalLink className="w-4 h-4 text-[var(--accent-gold)]" />
                <span>linkedin.com/in/supragnya-purohith</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
            <div className="p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-4">
              <h3 className="font-serif text-2xl font-medium text-[var(--text-primary)]">Design Philosophy</h3>
              <p className="text-base text-[var(--text-secondary)] leading-relaxed">
                Good design reveals itself when things get noisy. In clinical emergencies, financial commitments, or complex retail operations, users don&rsquo;t have patience for decorative flourishes — they need instant situational clarity, unambiguous hierarchy, and resilient feedback.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
                <h4 className="font-serif text-xl font-medium text-[var(--text-primary)]">Work Values</h4>
                <ul className="space-y-2.5 text-sm text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span>Systems over isolated screens</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span>Evidence over assumptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span>Collaborative engineering handoffs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)] shrink-0 mt-0.5" />
                    <span>Extreme craft with accountability</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
                <h4 className="font-serif text-xl font-medium text-[var(--text-primary)]">Core Capabilities</h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {[
                    "Clinical Workflows",
                    "Design Systems",
                    "Behavioral FinTech",
                    "B2B SaaS OS",
                    "Information Architecture",
                    "Rapid Prototyping",
                    "Usability Testing",
                    "Cross-functional Alignment"
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-full text-xs font-sans text-[var(--text-secondary)] bg-[var(--bg-sage)] border border-[var(--surface-border)]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
