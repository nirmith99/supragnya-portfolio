"use client";

import { memo } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

type AboutPreviewSectionProps = {
  delayMs?: number;
};

const AboutPreviewSection = memo(function AboutPreviewSection({ delayMs = 0 }: AboutPreviewSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const contentVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  } as any;

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  } as any;

  return (
    <Section
      id="about"
      reveal={false}
      delayMs={delayMs}
      className="section-block py-20 md:py-32"
      containerClassName="layout-padding grid md:grid-cols-2 gap-12 md:gap-24 items-center"
    >
      <div className="md:col-span-2 w-full h-[1px] bg-[#8B5E3C] opacity-20 mb-20 md:mb-0" /> {/* Section Divider for mobile/top */}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={contentVariants}
        className="space-y-8 order-2 md:order-1"
      >
        <div className="space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#8B5E3C] font-semibold">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.035em] text-[#121212] font-heading">
            I design for teams that need <span className="font-serif-italic font-normal text-[#8B5E3C]">behavior-first</span> thinking.
          </h2>
        </div>

        <div className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-normal space-y-6">
          <p>
            With 1 year and 11 months of experience, my practice combines systems thinking, strategic framing, and detail-driven interaction design.
          </p>
          <p>
            I focus on making complexity understandable so teams can move faster with fewer blind spots.
          </p>
        </div>

        <div className="pt-4">
          <a href="mailto:hello@supragnyapurohith.com" className="inline-block border-b border-[#8B5E3C] text-[#8B5E3C] pb-1 hover:text-[#121212] hover:border-[#121212] transition-colors font-medium">
            Get in touch
          </a>
        </div>
      </motion.div>

      {/* Visual / Image Side */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={imageVariants}
        className="order-1 md:order-2 relative aspect-square bg-[var(--bg-surface)] rounded-full overflow-hidden border border-black/5"
      >
        {/* Simple geometric placeholder until image is provided */}
        <div className="absolute inset-0 bg-[#F9F9F9]"></div>
        <div className="absolute inset-12 rounded-full border border-[#8B5E3C]/10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#8B5E3C]/20 font-heading font-bold text-9xl">S</div>
      </motion.div>
    </Section>
  );
});

export default AboutPreviewSection;
