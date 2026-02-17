"use client";

import { memo } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

type AboutPreviewSectionProps = {
  delayMs?: number;
};

const AboutPreviewSection = memo(function AboutPreviewSection({ delayMs = 0 }: AboutPreviewSectionProps) {
  return (
    <Section
      id="about"
      delayMs={delayMs}
      className="section-block py-20 md:py-24"
      containerClassName="space-y-8"
    >
      <div className="space-y-6 md:space-y-8">
        <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-[#A67C52] font-semibold">
          About
        </p>
        <h2 className="max-w-[900px] text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.035em] text-white font-heading">
          I design for teams that need <span className="text-[#a7f36f]">behavior-first</span> thinking.
        </h2>
      </div>
      <div className="max-w-[700px] text-base md:text-lg leading-relaxed text-[#BDBDBD] font-light space-y-6">
        <p>
          With 1 year and 11 months of experience, my practice combines systems thinking, strategic framing, and detail-driven interaction design.
        </p>
        <p>
          I focus on making complexity understandable so teams can move faster with fewer blind spots.
        </p>
      </div>
    </Section>
  );
});

export default AboutPreviewSection;
