"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, memo } from "react";
import Section from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  stats: string; // "sub-30s response", "25+ placements", etc.
  href: string;
  imageSrc: string;
  imageAlt: string;
  colSpan: string; // tailored for bento
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
    colSpan: "md:col-span-2" // Full Width
  },
  {
    title: "RupeeRise",
    subtitle: "A habit-first approach to wealth management",
    description: "A fintech app that builds confidence through simulation and dynamic friction.",
    stats: "Behavior First",
    href: "/rupeerise",
    imageSrc: "/images/thumbnails/rupeerise-real.png",
    imageAlt: "RupeeRise - Behavioral Fintech",
    colSpan: "md:col-span-1" // Split
  },
  {
    title: "Udyoga Pramoda",
    subtitle: "Connecting graduates to mentorship and career opportunities",
    description: "A career platform that validated 150+ aspirants and secured 25+ placements.",
    stats: "25+ Placements",
    href: "/udyoga-pramoda",
    imageSrc: "/images/thumbnails/udyoga-real.png",
    imageAlt: "Udyoga Pramoda - Career Platform",
    colSpan: "md:col-span-1" // Split
  }
];

function ProjectCard({ project, index, shouldReduceMotion }: { project: Project; index: number; shouldReduceMotion: boolean }) {
  // Bierika-style Unfolding Animation
  const cardVariants = {
    hidden: {
      opacity: 0,
      clipPath: "inset(10% 0 10% 0)",
      scaleY: 0.9,
      y: 50
    },
    visible: {
      opacity: 1,
      clipPath: "inset(0% 0 0% 0)",
      scaleY: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 1, 0.5, 1], // Cubic bezier for smooth unfolding
        delay: index * 0.1
      }
    }
  } as any;

  const simpleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={shouldReduceMotion ? simpleVariants : cardVariants}
      className={`group relative bg-[var(--bg-surface)] rounded-[24px] border border-black/5 overflow-hidden flex flex-col ${project.colSpan} hover:shadow-xl transition-shadow duration-500`}
    >
      <Link href={project.href} className="flex-1 flex flex-col h-full outline-none focus-visible:ring-2 focus-visible:ring-[#8B5E3C]">

        {/* Image Area */}
        <div className="relative w-full aspect-[16/9] md:h-[400px] lg:h-[480px] overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />

          {/* Overlay Stats */}
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
            <span className="text-[#8B5E3C] text-xs font-bold uppercase tracking-wider">{project.stats}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-10 flex flex-col flex-1 bg-[var(--bg-surface)]">
          <div className="mb-4">
            <h3 className="text-2xl md:text-4xl font-bold text-[#121212] mt-1 group-hover:text-[#8B5E3C] transition-colors font-heading">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-[var(--text-tertiary)] mt-2 font-medium leading-relaxed max-w-prose">
              {project.subtitle}
            </p>
          </div>

          <div className="mt-auto pt-8 border-t border-black/5 flex items-center gap-3 text-[var(--text-secondary)] text-sm font-semibold group-hover:text-[#8B5E3C] transition-colors">
            <span className="uppercase tracking-widest text-xs">View Case Study</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

const SelectedWorkSection = memo(function SelectedWorkSection({ delayMs = 0 }: { delayMs?: number }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section
      id="selected-work"
      reveal={false}
      className="selected-work py-20 md:py-32"
      containerClassName="space-y-12"
    >
      <div className="w-full h-[1px] bg-[#8B5E3C] opacity-20 mb-20" /> {/* Section Divider */}
      <header className="space-y-5 px-[var(--layout-padding)] text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#8B5E3C] font-semibold">Selected Work</p>
        <h2 className="max-w-[1000px] mx-auto text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.035em] text-[#121212] font-heading">
          Data-Driven <span className="font-serif-italic font-normal text-[#8B5E3C]">Storytelling</span>.
        </h2>
      </header>

      {/* Bento Grid Layout - Full Width with Padding */}
      <div className="layout-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.href}
              project={project}
              index={index}
              shouldReduceMotion={!!shouldReduceMotion}
            />
          ))}
        </div>
      </div>
    </Section>
  );
});

export default SelectedWorkSection;
