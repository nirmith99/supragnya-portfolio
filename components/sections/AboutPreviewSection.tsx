"use client";

import { memo } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

type AboutPreviewSectionProps = {
  delayMs?: number;
};

const AboutPreviewSection = memo(function AboutPreviewSection({ delayMs = 0 }: AboutPreviewSectionProps) {
  return (
    <Section
      id="about"
      reveal={false}
      delayMs={delayMs}
      className="section-block w-full"
      containerClassName="max-w-[1920px] mx-auto px-5 md:px-[60px]"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-start">

        {/* Left Column (Span 5): Text Content */}
        <div className="md:col-span-5 space-y-8">
          <div className="space-y-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#8B5E3C] font-semibold">
              About Me
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] tracking-[-0.02em] text-[#2D1B0D] font-heading">
              Designing with purpose & <span className="font-serif-italic font-normal text-[#8B5E3C]">precision.</span>
            </h2>
          </div>

          <div className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] font-normal space-y-6">
            <p>
              I&rsquo;m a Product & UX/UI Designer based in Bangalore. I bridge the gap between business goals and user needs — creating interfaces that are both beautiful and functionally robust.
            </p>
            <p>
              My process is rooted in research, rapid prototyping, and obsessive attention to micro-interactions — the invisible details that make a product feel alive.
            </p>
          </div>

          {/* Footer / Status moved to left col for better balance or keep in right? User didn't specify. 
                 "Structure: ... text block (Left) ... modular card grid (Right)"
                 I'll keep the status here or in the grid? The original had it below. I'll move it to the left column bottom to fill space.
             */}
          <div className="pt-8 flex flex-col gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 w-fit bg-[#8B5E3C]/10 rounded-full">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-semibold text-[#8B5E3C] uppercase tracking-wide">Open to work</span>
            </div>
            <div>
              <h4 className="font-bold text-[#2D1B0D] text-sm">Based in Bangalore, India</h4>
              <p className="text-xs text-[var(--text-tertiary)]">Available for new projects</p>
            </div>
          </div>
        </div>

        {/* Right Column (Span 7): Skills Grid */}
        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-4 h-full min-h-[400px]">
            {[
              { title: "Product Design", desc: "End-to-end flows, systems", className: "col-span-1 row-span-2 bg-[#F9F9F9] p-8 rounded-2xl border border-[#2D1B0D]/5 flex flex-col justify-between hover:border-[#8B5E3C]/30 transition-colors" },
              { title: "UX Research", desc: "Interviews, usability tests", className: "col-span-1 bg-[#F9F9F9] p-8 rounded-2xl border border-[#2D1B0D]/5 flex flex-col justify-center hover:border-[#8B5E3C]/30 transition-colors" },
              { title: "Design Systems", desc: "Tokens, components", className: "col-span-1 bg-[#F9F9F9] p-8 rounded-2xl border border-[#2D1B0D]/5 flex flex-col justify-center hover:border-[#8B5E3C]/30 transition-colors" }
            ].map((skill, i) => (
              <div key={i} className={skill.className}>
                <div className="w-10 h-10 mb-4 text-[#8B5E3C] bg-white rounded-full flex items-center justify-center shadow-sm text-xl border border-[#2D1B0D]/5">
                  {i === 0 ? "❖" : i === 1 ? "🔍" : "⚗️"}
                </div>
                <div>
                  <h3 className="font-bold text-[#2D1B0D] text-lg mb-1">{skill.title}</h3>
                  <p className="text-sm text-[var(--text-tertiary)]">{skill.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Section>
  );
});

export default AboutPreviewSection;
