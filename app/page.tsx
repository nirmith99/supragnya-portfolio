/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { MoveRight, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";

const AboutPreviewSection = dynamic(() => import("@/components/sections/AboutPreviewSection"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/ui/Testimonials"), { ssr: true });
import { Navbar } from "@/components/layout/Navbar";
import { PhoneMockup, DesktopMockup } from "@/components/ui/mockups";
import RetailDashboardPreview from "@/components/ui/RetailDashboardPreview";

const fadeUp: any = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } as any
  }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    }
  }
};

const wordVariant: any = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any },
};

const headlineContainer: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const slowScroll = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <main className="relative flex flex-col min-h-screen bg-[var(--bg-sage)] text-[var(--text-primary)]">
      {/* 0. NAVIGATION */}
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[88vh] w-full flex items-center overflow-hidden pt-32 pb-20 md:py-36">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center">
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-[980px] flex flex-col gap-6 lg:gap-8"
          >
            {/* Discipline Eyebrow Pill */}
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--surface-border)] w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse" />
              <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
                Product & Systems Designer · Hyderabad, India
              </span>
            </motion.div>

            {/* Kinetic Headline */}
            <motion.h1
              variants={headlineContainer}
              className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.08] tracking-tight font-medium max-w-[1000px]"
            >
              {["Designer", "driven", "by", "precision,", "where", "logical", "structure", "meets"].map((word) => (
                <motion.span key={word} variants={wordVariant} className="inline-block mr-[0.26em]">{word}</motion.span>
              ))}
              <motion.span variants={wordVariant} className="inline-block mr-[0.26em] text-[var(--accent-gold)] italic font-serif">user</motion.span>
              <motion.span variants={wordVariant} className="inline-block mr-[0.26em] text-[var(--accent-gold)] italic font-serif">instinct,</motion.span>
              {["building", "systems", "that", "scale."].map((word) => (
                <motion.span key={word} variants={wordVariant} className="inline-block mr-[0.26em]">{word}</motion.span>
              ))}
            </motion.h1>

            {/* Sub-headline */}
            <motion.p variants={fadeUp} className="font-sans text-base sm:text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-[660px] text-balance">
              Translating high-density operational constraints into calm, predictable interfaces through behavior-first inquiry and architectural clarity.
            </motion.p>

            {/* Action Buttons */}
            <motion.div variants={fadeUp} className="pt-2 flex flex-wrap items-center gap-5 sm:gap-6">
              <Link
                href="#work"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[var(--accent-gold)] text-[var(--bg-sage)] font-sans text-xs uppercase tracking-widest font-semibold hover:bg-[var(--accent-gold-hover)] transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Selected Work</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#about"
                className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors py-2 px-3 rounded-full hover:bg-[var(--bg-surface)]"
              >
                <span>About & Philosophy</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROJECT: CLINICAL EMERGENCY RESPONSE */}
      <section ref={containerRef} id="work" className="relative w-full flex items-center overflow-hidden py-24 bg-[var(--bg-surface)] bg-grid-pattern border-t border-[var(--surface-border)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-medium text-[var(--accent-gold)] bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                  Healthcare · Clinical Systems
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-sans text-[var(--text-tertiary)] bg-[var(--bg-sage)]/60">
                  Live in active hospital use
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight">
                  Clinical Emergency Response
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
                  Mobile platform for tiered emergency alerts, clinical coordination, and rapid-triage workflows across doctors and emergency nurses.
                </p>
              </div>

              <div>
                <Link
                  href="/emergency-app"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--surface-border-strong)] bg-[var(--bg-sage)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-200 shadow-sm"
                >
                  <span className="font-sans text-xs tracking-widest uppercase font-semibold">Read Case Study</span>
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ y: slowScroll }}
              className="lg:col-span-7 w-full flex items-center justify-center relative group cursor-pointer order-1 lg:order-2"
            >
              <div className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.03] w-full flex justify-center py-6">
                <PhoneMockup className="max-w-[260px] md:max-w-[300px]">
                  <img
                    src="/images/thumbnails/Emergency app - Alarm List (1).png"
                    alt="Clinical Emergency Response"
                    className="w-full h-auto block"
                  />
                </PhoneMockup>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. PROJECT: UDYOGA PRAMODA */}
      <section className="relative w-full flex items-center overflow-hidden py-24 bg-[var(--bg-sage)] bg-grid-pattern border-t border-[var(--surface-border)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              style={{ y: slowScroll }}
              className="lg:col-span-7 w-full flex items-center justify-center relative group cursor-pointer"
            >
              <div className="relative z-10 w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] flex justify-center py-4">
                <DesktopMockup className="max-w-[800px] shadow-2xl">
                  <img
                    src="/images/thumbnails/Udyoga Pramoda Landing.png"
                    alt="Udyoga Pramoda"
                    className="w-full h-auto block"
                  />
                </DesktopMockup>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6 lg:pl-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-medium text-[var(--accent-gold)] bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                  Career Community · Mentorship
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-sans text-[var(--text-tertiary)] bg-[var(--bg-surface)]/60">
                  1,200+ members · 150+ mentors
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight">
                  Udyoga Pramoda
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
                  Making career progress visible and measurable in a volunteer-driven ecosystem connecting grassroots talent with seasoned mentors.
                </p>
              </div>

              <div>
                <Link
                  href="/udyoga-pramoda"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--surface-border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-200 shadow-sm"
                >
                  <span className="font-sans text-xs tracking-widest uppercase font-semibold">Read Case Study</span>
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. PROJECT: RUPEERISE */}
      <section className="relative w-full flex items-center overflow-hidden py-24 bg-[var(--bg-surface)] bg-grid-pattern border-t border-[var(--surface-border)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-medium text-[var(--accent-gold)] bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                  Behavioral Finance · Mobile Experience
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-sans text-[var(--text-tertiary)] bg-[var(--bg-sage)]/60">
                  Decision-first investing
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight">
                  RupeeRise
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
                  Helping next-generation investors transform fragmented financial noise into deliberate, bias-resilient allocation decisions.
                </p>
              </div>

              <div>
                <Link
                  href="/rupeerise"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--surface-border-strong)] bg-[var(--bg-sage)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-200 shadow-sm"
                >
                  <span className="font-sans text-xs tracking-widest uppercase font-semibold">Read Case Study</span>
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ y: slowScroll }}
              className="lg:col-span-7 w-full flex items-center justify-center relative group cursor-pointer order-1 lg:order-2"
            >
              <div className="relative z-10 transition-transform duration-500 ease-out group-hover:scale-[1.03] w-full flex justify-center py-6">
                <PhoneMockup className="max-w-[260px] md:max-w-[300px]">
                  <img
                    src="/images/thumbnails/Rupeerise- dashboard.png"
                    alt="RupeeRise"
                    className="w-full h-auto block"
                  />
                </PhoneMockup>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 5. PROJECT: RETAIL MANAGER */}
      <section className="relative w-full flex items-center overflow-hidden py-24 bg-[var(--bg-sage)] bg-grid-pattern border-t border-[var(--surface-border)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={staggerContainer}
          className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div
              variants={fadeUp}
              style={{ y: slowScroll }}
              className="lg:col-span-7 w-full flex items-center justify-center relative group cursor-pointer"
            >
              <div className="relative z-10 w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] flex justify-center py-4">
                <DesktopMockup className="max-w-[800px] shadow-2xl">
                  <RetailDashboardPreview />
                </DesktopMockup>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-6 lg:pl-8">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full text-xs font-sans font-medium text-[var(--accent-gold)] bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                  B2B SaaS · Retail Technology
                </span>
                <span className="px-2.5 py-1 rounded-full text-[11px] font-sans text-[var(--text-tertiary)] bg-[var(--bg-surface)]/60">
                  Shared Intelligence OS
                </span>
              </div>

              <div className="space-y-3">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-[3.2rem] leading-[1.08] tracking-tight">
                  Retail Manager Intelligence OS
                </h2>
                <p className="font-sans text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
                  Bridging operational inventory data with automated operational choices: a real-time intelligence layer for multi-store retail teams.
                </p>
              </div>

              <div>
                <Link
                  href="/retail-manager"
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[var(--surface-border-strong)] bg-[var(--bg-surface)] text-[var(--text-primary)] hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] transition-all duration-200 shadow-sm"
                >
                  <span className="font-sans text-xs tracking-widest uppercase font-semibold">Read Case Study</span>
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 6. ABOUT SECTION */}
      <AboutPreviewSection />

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* 8. FOOTER */}
      <footer id="contact" className="relative w-full border-t border-[var(--surface-border)] bg-[var(--bg-sage)]">
        <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.1] tracking-tight text-[var(--text-primary)]">
                Let&apos;s build systems<br />
                <em className="italic text-[var(--accent-gold)]">worth remembering.</em>
              </h2>
              <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed max-w-sm">
                Available for full-time product design roles and select high-impact advisory projects. Based in Hyderabad, India.
              </p>
            </div>

            {/* Right */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pt-2">
              <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-gold)] mb-2 font-semibold">Email</p>
                <a
                  href="mailto:99supragnya@gmail.com"
                  className="font-sans text-[15px] font-medium text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors break-all"
                >
                  99supragnya@gmail.com
                </a>
              </div>
              <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent-gold)] mb-2 font-semibold">LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/supragnya-purohith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[15px] font-medium text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                >
                  linkedin.com/in/supragnya-purohith
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[var(--surface-border)] pt-8 mt-16">
            <span className="font-mono text-xs text-[var(--text-tertiary)]">© 2026 Supragnya Purohith</span>
            <div className="flex items-center gap-6 font-mono text-xs text-[var(--text-tertiary)]">
              <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
              <Link href="/#work" className="hover:text-[var(--text-primary)] transition-colors">Work</Link>
              <Link href="/#about" className="hover:text-[var(--text-primary)] transition-colors">About</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}