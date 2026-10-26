"use client";

import { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Layers, Search, Component, ArrowUpRight, ShieldCheck, MapPin } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeLeft: any = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const fadeRight: any = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease } },
};

const cardVariant: any = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
};

const capabilities = [
  {
    icon: Layers,
    title: "Product & Systems Architecture",
    description: "Structuring high-density operational workflows, complex state spaces, and multi-sided platforms so they feel calm, predictable, and frictionless.",
    tags: ["Complex Workflows", "Information Architecture", "System Scaling"],
    colSpan: "col-span-12 lg:col-span-12",
    featured: true,
  },
  {
    icon: Search,
    title: "UX Research & Usability Validation",
    description: "Deep stakeholder interviews with doctors, emergency responders, and operators to translate ambiguous human constraints into evidence-based software.",
    tags: ["Field Inquiries", "Task Benchmarks", "Usability Audits"],
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
    featured: false,
  },
  {
    icon: Component,
    title: "Design Systems & Prototyping",
    description: "Building production-grade component architectures, semantic token layers, and obsessive micro-interactions in lockstep with engineering teams.",
    tags: ["Token Schemas", "Design-to-Code", "Motion Specs"],
    colSpan: "col-span-12 sm:col-span-6 lg:col-span-6",
    featured: false,
  },
];

type AboutPreviewSectionProps = {
  delayMs?: number;
};

const AboutPreviewSection = memo(function AboutPreviewSection({ delayMs = 0 }: AboutPreviewSectionProps) {
  return (
    <section
      id="about"
      className="section-block w-full relative overflow-hidden bg-[var(--bg-sage)] border-t border-[var(--surface-border)]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Bio & Core Philosophy */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
                  About Supragnya
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.08] tracking-tight text-[var(--text-primary)] font-serif">
                Designing with purpose & <span className="font-serif-italic font-normal text-[var(--accent-gold)]">precision.</span>
              </h2>
            </div>

            <div className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] space-y-5">
              <p>
                I&rsquo;m a Product & Systems Designer based in Hyderabad. I specialize in turning high-stakes, multi-variable environments — from hospital emergency response rooms to multi-store retail platforms — into cohesive, human-centered software.
              </p>
              <p>
                My process is rooted in behavioral research, rapid functional prototypes, and obsessive attention to system feedback — the subtle details that turn a utility into a tool users trust under pressure.
              </p>
            </div>

            {/* Profile Card / Availability */}
            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] shadow-sm flex items-center gap-5">
              <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-[var(--accent-gold)]/50 shrink-0 shadow-md">
                <Image
                  src="/images/avatar.png"
                  alt="Supragnya Purohith"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-semibold text-[var(--accent-gold)] uppercase tracking-wider">
                    Open to opportunities
                  </span>
                </div>
                <h4 className="font-serif font-medium text-[var(--text-primary)] text-base">
                  Supragnya Purohith
                </h4>
                <div className="flex items-center gap-1.5 text-xs text-[var(--text-tertiary)]">
                  <MapPin className="w-3 h-3 text-[var(--accent-gold)]" />
                  <span>Hyderabad, India · Full-time & Select Advisory</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Refined Bento Grid */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-12 gap-4">
              {capabilities.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    custom={i}
                    variants={cardVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className={`${item.colSpan} p-6 md:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] hover:border-[var(--accent-gold)]/40 hover:bg-[var(--bg-surface-hover)] transition-all duration-300 flex flex-col justify-between group`}
                  >
                    <div>
                      <div className="w-11 h-11 mb-6 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] flex items-center justify-center text-[var(--accent-gold)] group-hover:scale-105 group-hover:border-[var(--accent-gold)]/50 transition-all duration-300 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="font-serif font-medium text-[var(--text-primary)] text-xl md:text-2xl mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)] mb-6">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4 border-t border-[var(--surface-border)]">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-full text-xs font-sans text-[var(--text-secondary)] bg-[var(--bg-sage)] border border-[var(--surface-border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
});

export default AboutPreviewSection;
