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
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95, rotate: -2 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <Section
      id="about"
      reveal={false}
      delayMs={delayMs}
      className="section-block py-20 md:py-32"
      containerClassName="layout-padding grid md:grid-cols-2 gap-12 md:gap-24 items-center"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={contentVariants}
        className="space-y-8 order-2 md:order-1"
      >
        <div className="space-y-4">
          <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-[#a7f36f] font-semibold">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.035em] text-white font-heading">
            I design for teams that need <span className="text-[#a7f36f]">behavior-first</span> thinking.
          </h2>
        </div>

        <div className="text-base md:text-lg leading-relaxed text-[#C0C0C0] font-normal space-y-6">
          <p>
            With 1 year and 11 months of experience, my practice combines systems thinking, strategic framing, and detail-driven interaction design.
          </p>
          <p>
            I focus on making complexity understandable so teams can move faster with fewer blind spots.
          </p>
        </div>

        <div className="pt-4">
          {/* Reusing the Button style or component directly if available, else standard link style */}
          <a href="mailto:hello@supragnyapurohith.com" className="inline-block border-b border-[#a7f36f] text-white pb-1 hover:text-[#a7f36f] hover:border-white transition-colors">
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
        className="order-1 md:order-2 relative aspect-square bg-[#1E1E1E] rounded-full overflow-hidden border border-white/5"
      >
        {/* Abstract Circle or Profile Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#121212] via-[#1E1E1E] to-[#333]"></div>
        <div className="absolute inset-4 rounded-full border border-white/5 bg-[url('/images/noise.png')] opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#a7f36f]/20 font-heading font-bold text-9xl">S</div>
      </motion.div>
    </Section>
  );
});

export default AboutPreviewSection;
