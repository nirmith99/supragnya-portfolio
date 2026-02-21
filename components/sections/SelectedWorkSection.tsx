"use client";

import Image from "next/image";
import Link from "next/link";
import { memo, useRef } from "react";
import Section from "@/components/ui/Section";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  stats: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  bgColor: string;
};

const projects: Project[] = [
  {
    title: "Emergency Response App",
    subtitle: "Simplifying critical workflows for cardiovascular care through architectural logic.",
    description: "A mobile system designed to separate scanning from acting, achieving a consistent sub-30-second response target.",
    stats: "<30s Response",
    href: "/emergency-app",
    imageSrc: "/images/thumbnails/emergency-real.png",
    imageAlt: "Emergency Response App - Critical Care Interface",
    bgColor: "#FFFFFF"
  },
  {
    title: "RupeeRise",
    subtitle: "A habit-first approach to wealth management",
    description: "A fintech app that builds confidence through simulation and dynamic friction.",
    stats: "Behavior First",
    href: "/rupeerise",
    imageSrc: "/images/thumbnails/rupeerise-real.png",
    imageAlt: "RupeeRise - Behavioral Fintech",
    bgColor: "#FFFFFF"
  },
  {
    title: "Udyoga Pramoda",
    subtitle: "Connecting graduates to mentorship and career opportunities",
    description: "A career platform that validated 150+ aspirants and secured 25+ placements.",
    stats: "25+ Placements",
    href: "/udyoga-pramoda",
    imageSrc: "/images/thumbnails/udyoga-real.png",
    imageAlt: "Udyoga Pramoda - Career Platform",
    bgColor: "#FFFFFF"
  }
];

function ProjectCard({ project, index, total, shouldReduceMotion }: { project: Project; index: number; total: number; shouldReduceMotion: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "start start"]
  });

  // Calculate top offset for stacking effect
  // Base offset + index * increment
  const topOffset = 120 + (index * 40);

  // Subtle Scale effect on enter (optional 2026 trend "Liquid Motion")
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [shouldReduceMotion ? 1 : 0.8, 1]);

  return (
    <motion.div
      ref={containerRef}
      className="sticky w-full mb-[10vh] last:mb-0" // Spacing to allow scroll duration
      style={{
        top: `${topOffset}px`,
        scale: shouldReduceMotion ? 1 : scale,
        opacity: opacity,
        zIndex: index + 10
      }}
    >
      <article
        className="relative bg-white rounded-[32px] border border-[#2D1B0D]/10 overflow-hidden shadow-2xl shadow-black/5 flex flex-col md:flex-row h-[70vh] md:h-[600px]"
      >
        {/* Content Side */}
        <div className={`p-8 md:p-12 lg:p-16 flex flex-col justify-between w-full md:w-5/12 h-full bg-white z-20 
          ${index % 2 === 1 ? 'md:order-2' : ''} 
          ${index === 0 ? 'order-1 md:order-none' : 'order-2 md:order-none'}
        `}>
          <div className="space-y-6">
            <span className="inline-block px-3 py-1 rounded-full border border-[#2D1B0D]/10 text-xs font-bold uppercase tracking-wider text-[#8B5E3C]">
              {project.stats}
            </span>
            <h3 className="text-3xl md:text-5xl font-heading font-semibold text-[#2D1B0D] leading-tight">
              {project.title}
            </h3>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
              {project.subtitle}
            </p>
            <p className="text-base text-[var(--text-tertiary)] leading-relaxed">
              {project.description}
            </p>
          </div>

          <Link
            href={project.href}
            className="inline-flex items-center gap-3 text-[#2D1B0D] font-bold uppercase tracking-widest text-xs group/link mt-8"
          >
            <span>View Case Study</span>
            <span className="bg-[#2D1B0D] text-white w-8 h-8 rounded-full flex items-center justify-center group-hover/link:bg-[#8B5E3C] transition-colors">
              →
            </span>
          </Link>
        </div>

        {/* Image Side */}
        <div className={`relative w-full md:w-7/12 h-full bg-gray-50
           ${index % 2 === 1 ? 'md:order-1' : ''}
           ${index === 0 ? 'order-2 md:order-none' : 'order-1 md:order-none'}
        `}>
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/5" />
        </div>
      </article>
    </motion.div>
  );
}

const SelectedWorkSection = memo(function SelectedWorkSection({ delayMs = 0 }: { delayMs?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="selected-work"
      reveal={false}
      className="selected-work w-full relative"
      containerClassName="max-w-[1920px] mx-auto px-5 md:px-[60px]"
    >
      {/* Curated Work Anchor Header */}
      <header className="mb-20 md:mb-32 mt-20 md:mt-40 text-left border-t border-[#8B5E3C]/20 pt-10">
        <h2 className="text-sm md:text-base font-heading font-semibold text-[#2D1B0D] tracking-wide uppercase mb-2">
          Curated Work
        </h2>
        <p className="text-2xl md:text-3xl font-serif-italic text-[var(--text-secondary)]">
          A selection of projects focusing on healthcare, fintech, and community impact.
        </p>
      </header>

      {/* Stacking Card Container */}
      <div className="relative pb-40"> {/* Logic for pb is to allow scrolling past last card */}
        {projects.map((project, index) => (
          <ProjectCard
            key={project.href}
            project={project}
            index={index}
            total={projects.length}
            shouldReduceMotion={!!shouldReduceMotion}
          />
        ))}
      </div>
    </Section>
  );
});

export default SelectedWorkSection;
