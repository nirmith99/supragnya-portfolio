/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import dynamic from "next/dynamic";

const AboutPreviewSection = dynamic(() => import("@/components/sections/AboutPreviewSection"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/ui/Testimonials"), { ssr: true });
const HeroPencil = dynamic(() => import("@/components/HeroPencil"), { ssr: false });
import { PhoneMockup, DesktopMockup } from "@/components/ui/mockups";

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } as any
  }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

// Word-by-word headline animation
const wordVariant: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } as any },
};

const headlineContainer: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } },
};

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const slowScroll = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <main className="relative flex flex-col min-h-screen bg-[var(--bg-sage)] text-[var(--text-primary)]">

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden">
        {/* Subtle Ambient Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-[var(--accent-gold)]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 pt-20 flex flex-col justify-center relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="lg:col-span-8 flex flex-col gap-8 lg:gap-10"
            >
              <motion.h1
                variants={headlineContainer}
                className="font-serif text-5xl md:text-6xl lg:text-[4rem] leading-[1.1] tracking-tight font-medium max-w-[1000px]"
              >
                {["Designer", "driven", "by", "precision,", "where", "logical", "structure", "meets"].map((word) => (
                  <motion.span key={word} variants={wordVariant} className="inline-block mr-[0.28em]">{word}</motion.span>
                ))}
                <motion.span variants={wordVariant} className="inline-block mr-[0.28em] text-[var(--accent-gold)] italic font-serif">user</motion.span>
                <motion.span variants={wordVariant} className="inline-block mr-[0.28em] text-[var(--accent-gold)] italic font-serif">instinct,</motion.span>
                {["building", "systems", "that", "scale."].map((word) => (
                  <motion.span key={word} variants={wordVariant} className="inline-block mr-[0.28em]">{word}</motion.span>
                ))}
              </motion.h1>

              <motion.p variants={fadeUp} className="font-sans text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-[600px] text-balance">
                Focusing on making complex systems feel simple through behavior-first design and technical clarity.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-4">
                <Link href="#work" className="group flex items-center gap-3 w-fit text-[var(--accent-gold)] pb-1 border-b border-[var(--surface-border)] hover:border-[var(--accent-gold)] transition-all duration-300">
                  <span className="font-sans text-sm tracking-widest uppercase font-bold">View Selected Work</span>
                  <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-4 flex justify-center lg:justify-end"
            >
              <div className="relative group perspective-1000 w-full flex justify-center lg:justify-end min-h-[400px]">
                <HeroPencil />
              </div>
            </motion.div>

          </div>
        </div>
      </section>



      {/* 2. PROJECT: EMERGENCY RESPONSE APP */}
      {/* We use a slightly lighter background block to separate sections softly within the dark mode */}
      <section ref={containerRef} id="work" className="relative w-full flex items-center overflow-hidden py-20 bg-[var(--bg-surface)] bg-grid-pattern">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={staggerContainer}
          className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
              <div className="flex flex-col gap-3">
                <h3 className="font-sans text-[10px] tracking-widest uppercase font-bold text-[var(--accent-gold)]">Healthcare / Architecture</h3>
                <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] tracking-tight">Emergency Response App</h2>
              </div>
              <p className="font-sans text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg">
                Architectural logic and sub-30-second response times for cardiovascular care.
              </p>
              <Link href="/emergency-app" className="group flex items-center gap-3 w-fit mt-2 pb-1 border-b border-[var(--surface-border)] hover:border-[var(--text-primary)] transition-all duration-300">
                <span className="font-sans text-sm tracking-widest uppercase font-bold text-[var(--text-primary)]">Read Case Study</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--text-primary)]" />
              </Link>
              <a href="#" data-prototype="emergency-app" className="font-sans text-xs text-[var(--text-tertiary)] hover:text-[var(--accent-gold)] transition-colors">View Prototype →</a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ y: slowScroll }}
              className="lg:col-span-7 w-full flex items-center justify-center relative group cursor-pointer order-1 lg:order-2"
            >
              <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-105 w-full flex justify-center py-8">
                  <PhoneMockup className="max-w-[260px] md:max-w-[300px]">
                      <img
                          src="/images/thumbnails/Emergency app - Alarm List (1).png"
                          alt="Emergency Response App"
                          className="w-full h-auto block"
                      />
                  </PhoneMockup>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 3. PROJECT: UDYOGA PRAMODA */}
      <section className="relative w-full flex items-center overflow-hidden py-20 bg-[var(--bg-sage)] bg-grid-pattern">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={staggerContainer}
          className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            <motion.div
              variants={fadeUp}
              style={{ y: slowScroll }}
              className="lg:col-span-7 w-full flex items-center justify-center relative group cursor-pointer"
            >
              <div className="relative z-10 w-full transition-transform duration-700 ease-out group-hover:scale-[1.02] flex justify-center">
                  <DesktopMockup className="max-w-[800px] shadow-2xl">
                      <img
                          src="/images/thumbnails/Udyoga Pramoda Landing.png"
                          alt="Udyoga Pramoda"
                          className="w-full h-auto block"
                      />
                  </DesktopMockup>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-8 lg:pl-10">
              <div className="flex flex-col gap-3">
                <h3 className="font-sans text-[10px] tracking-widest uppercase font-bold text-[var(--accent-gold)]">Community / Systems</h3>
                <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] tracking-tight">Udyoga Pramoda</h2>
              </div>
              <p className="font-sans text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg">
                Live-production mentor-gated community progression system.
              </p>
              <Link href="/udyoga-pramoda" className="group flex items-center gap-3 w-fit mt-2 pb-1 border-b border-[var(--surface-border)] hover:border-[var(--text-primary)] transition-all duration-300">
                <span className="font-sans text-sm tracking-widest uppercase font-bold text-[var(--text-primary)]">Read Case Study</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--text-primary)]" />
              </Link>
              <a href="#" data-prototype="udyoga-pramoda" className="font-sans text-xs text-[var(--text-tertiary)] hover:text-[var(--accent-gold)] transition-colors">View Prototype →</a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* 4. PROJECT: RUPEERISE */}
      <section className="relative w-full flex items-center overflow-hidden py-20 bg-[var(--bg-surface)] bg-grid-pattern">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={staggerContainer}
          className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col justify-center"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
            <motion.div variants={fadeUp} className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
              <div className="flex flex-col gap-3">
                <h3 className="font-sans text-[10px] tracking-widest uppercase font-bold text-[var(--accent-gold)]">Fintech / Habit Design</h3>
                <h2 className="font-serif text-5xl lg:text-6xl leading-[1.05] tracking-tight">RupeeRise</h2>
              </div>
              <p className="font-sans text-lg lg:text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg">
                Habit-first wealth management designed in a 14-day sprint.
              </p>
              <Link href="/rupeerise" className="group flex items-center gap-3 w-fit mt-2 pb-1 border-b border-[var(--surface-border)] hover:border-[var(--text-primary)] transition-all duration-300">
                <span className="font-sans text-sm tracking-widest uppercase font-bold text-[var(--text-primary)]">Read Case Study</span>
                <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--text-primary)]" />
              </Link>
              <a href="#" data-prototype="rupeerise" className="font-sans text-xs text-[var(--text-tertiary)] hover:text-[var(--accent-gold)] transition-colors">View Prototype →</a>
            </motion.div>

            <motion.div
              variants={fadeUp}
              style={{ y: slowScroll }}
              className="lg:col-span-7 w-full flex items-center justify-center relative group cursor-pointer order-1 lg:order-2"
            >
              <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-105 w-full flex justify-center py-8">
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

      {/* 5. ABOUT SECTION */}
      <AboutPreviewSection />

      {/* 6. TESTIMONIALS */}
      <Testimonials />

      {/* 7. FOOTER */}
      <footer id="contact" className="relative w-full border-t border-[var(--surface-border)] bg-[var(--bg-sage)]">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <h2 className="font-serif text-5xl md:text-[3.25rem] leading-[1.1] tracking-tight text-[var(--text-primary)]">
                Let&apos;s build something<br />
                <em className="italic text-[var(--accent-gold)]">worth remembering.</em>
              </h2>
              <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed max-w-xs mt-4">
                Available for full-time roles and select freelance projects. Based in Hyderabad, India.
              </p>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-8 lg:pt-2">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)] mb-2">Email</p>
                <a
                  href="mailto:supragnyapurohith@gmail.com"
                  className="font-sans text-[15px] text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                >
                  supragnyapurohith@gmail.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)] mb-2">LinkedIn</p>
                <a
                  href="https://linkedin.com/in/supragnya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[15px] text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                >
                  linkedin.com/in/supragnya
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[var(--surface-border)] pt-6 mt-16">
            <span className="font-mono text-[11px] text-[var(--text-tertiary)]">© 2025 Supragnya Purohith</span>
            <div className="flex items-center gap-6 font-mono text-[11px] text-[var(--text-tertiary)]">
              <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">Home</Link>
              <Link href="#work" className="hover:text-[var(--text-primary)] transition-colors">Work</Link>
              <Link href="#about" className="hover:text-[var(--text-primary)] transition-colors">About</Link>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}