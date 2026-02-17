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
    subtitle: "Alert → Scan → Act",
    description: "Simplifying critical care at 2 AM. A mobile system designed to separate scanning from acting, achieving a consistent sub-30-second response target.",
    stats: "<30s Response",
    href: "/emergency-app",
    imageSrc: "/images/projects/emergency-real.png",
    imageAlt: "Emergency Response App - Critical Care Interface",
    colSpan: "md:col-span-2" // Large feature
  },
  {
    title: "RupeeRise",
    subtitle: "Adaptive Financial Guardrails",
    description: " shifting focus from literacy to behavior. A fintech app that builds confidence through simulation and dynamic friction.",
    stats: "Behavior First",
    href: "/rupeerise",
    imageSrc: "/images/projects/rupeerise-real.png",
    imageAlt: "RupeeRise - Behavioral Fintech",
    colSpan: "md:col-span-1"
  },
  {
    title: "Udyoga Pramoda",
    subtitle: "Mentor-Gated Progression",
    description: "Structuring the invisible funnel. A career platform that validated 150+ aspirants and secured 25+ placements through transparent tracking.",
    stats: "25+ Placements",
    href: "/udyoga-pramoda",
    imageSrc: "/images/projects/udyoga-real.png",
    imageAlt: "Udyoga Pramoda - Career Platform",
    colSpan: "md:col-span-1"
  }
];

function ProjectCard({ project, index, shouldReduceMotion }: { project: Project; index: number; shouldReduceMotion: boolean }) {
  const cardVariants = {
    hidden: { opacity: 0, rotateX: 15, scale: 0.95, y: 50 },
    visible: {
      opacity: 1,
      rotateX: 0,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
        delay: index * 0.1
      }
    }
  } as any;

  const simpleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={shouldReduceMotion ? simpleVariants : cardVariants}
      className={`group relative bg-[#1E1E1E] rounded-xl border border-white/5 overflow-hidden flex flex-col ${project.colSpan}`}
    >
      <Link href={project.href} className="flex-1 flex flex-col h-full outline-none focus-visible:ring-2 focus-visible:ring-[#a7f36f]">

        {/* Image Area */}
        <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[300px] lg:h-[400px] overflow-hidden">
          <Image
            src={project.imageSrc}
            alt={project.imageAlt}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />

          {/* Overlay Stats */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <span className="text-[#a7f36f] text-xs font-bold uppercase tracking-wider">{project.stats}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 flex flex-col flex-1 bg-[#1E1E1E] transition-colors duration-300 group-hover:bg-[#1E1E1E]/80">
          <div className="mb-4">
            <span className="text-xs font-mono text-[#888] uppercase tracking-widest">{project.subtitle}</span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 group-hover:text-[#a7f36f] transition-colors font-heading">
              {project.title}
            </h3>
          </div>
          <p className="text-[#C0C0C0] text-sm md:text-base leading-relaxed flex-1">
            {project.description}
          </p>
          <div className="mt-6 pt-6 border-t border-white/5 flex items-center gap-2 text-white/50 text-sm group-hover:text-white transition-colors">
            <span className="uppercase tracking-widest text-xs font-bold">Read Case Study</span>
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
      <header className="space-y-5 px-[var(--layout-padding)]">
        <div className="flex items-center gap-4">
          <div className="h-[1px] w-12 bg-[#a7f36f]/60"></div>
          <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-[#a7f36f] font-semibold">Selected Work</p>
        </div>
        <h2 className="max-w-[1000px] text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.035em] text-white font-heading">
          Data-Driven <span className="text-[#a7f36f]">Storytelling</span>.
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
