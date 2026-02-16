"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, memo } from "react";
import Section from "@/components/ui/Section";


type SelectedWorkSectionProps = {
  delayMs?: number;
};

type Project = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    title: "RupeeRise",
    description:
      "A financial learning companion designed to help young earners build confidence with money before taking financial risks. Prioritizes learning, habit formation, and controlled exposure to financial tools over transactions or dense dashboards.",
    href: "/rupeerise",
    imageSrc: "/images/projects/rupeerise-real.png",
    imageAlt: "RupeeRise - Financial Learning & Habit Building"
  },
  {
    title: "Udyoga Pramoda",
    description:
      "A high-impact, charity-led platform focused on professional growth for graduates. Emphasizes successful placements, mentorship connectivity, and building trust in career progression.",
    href: "/udyoga-pramoda",
    imageSrc: "/images/projects/udyoga-real.png",
    imageAlt: "Udyoga Pramoda - Career Growth & Mentorship"
  },
  {
    title: "Emergency Response App",
    description:
      "A high-stakes, high-utility tool for cardiovascular emergencies. Designed for speed, clarity, and life-saving interactions with an extreme focus on immediate 'Next Actions' and critical data hierarchy.",
    href: "/emergency-app",
    imageSrc: "/images/projects/emergency-real.png",
    imageAlt: "Emergency Response - Critical Care Interface"
  }
];

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

function useRevealOnScroll<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion, threshold]);

  return { ref, isVisible, prefersReducedMotion };
}

function ProjectItem({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible, prefersReducedMotion } = useRevealOnScroll<HTMLElement>(0.15);
  const isRevealed = prefersReducedMotion || isVisible;
  const isEven = index % 2 === 0;

  return (
    <article
      ref={ref}
      className={cn(
        "group py-20 lg:py-32 border-b border-white/10 last:border-0 relative",
        "transition-all duration-700 ease-out",
        isRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}
    >
      <div className={cn(
        "flex flex-col-reverse gap-12 lg:gap-24 items-center",
        isEven ? "lg:flex-row-reverse" : "lg:flex-row"
      )}>
        {/* Text Content */}
        <div className="flex-1 space-y-6 lg:space-y-8 w-full">
          <div className="flex items-center gap-4 text-[#a7f36f] font-mono text-sm tracking-wider opacity-90">
            <span>0{index + 1}</span>
            <span className="h-[1px] w-12 bg-[#a7f36f]/40"></span>
            <span className="uppercase tracking-[0.16em]">Case Study</span>
          </div>

          <h3 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-[1.1] text-[#F4F1E8] group-hover:text-[#a7f36f] transition-colors duration-300">
            <Link href={project.href} className="outline-none focus-visible:text-[#a7f36f]">
              {project.title}
            </Link>
          </h3>

          <p className="max-w-xl text-lg leading-relaxed text-[#cadcd5] font-light">
            {project.description}
          </p>

          <div className="pt-6">
            <Link
              href={project.href}
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#D4A373] text-[#022c22] font-semibold tracking-wide uppercase text-sm hover:bg-[#c49261] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg hover:shadow-[#D4A373]/20"
            >
              View Case Study
            </Link>
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 w-full aspect-[16/10] relative group/image rounded-lg overflow-hidden border border-white/5">
          <Link href={project.href} className="block w-full h-full">
            {/* Transparent background allowing Deep Forest to show through if image has transparency, 
                 but images fill the space. Added hover scale effect. */}
            <div className="absolute inset-0 bg-[#022c22]/10 z-0"></div>
            <Image
              src={project.imageSrc}
              alt={project.imageAlt}
              fill
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover/image:scale-[1.05]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            {/* Subtle matte highlight on top */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover/image:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </Link>
        </div>
      </div>
    </article>
  );
}

// SecondaryProjectCard removed as part of Narrative Strategy refactor (all projects are now Featured/Hero style)

const SelectedWorkSection = memo(function SelectedWorkSection({ delayMs = 0 }: SelectedWorkSectionProps) {
  // All projects are now treated as "Featured" for the cinematic stream
  // const [featuredProject, ...secondaryProjects] = projects;

  if (!projects.length) {
    return null;
  }

  return (
    <Section
      id="selected-work"
      delayMs={delayMs}
      staggerChildren={false}
      className="selected-work section-block scroll-mt-[var(--nav-height)] py-20 md:py-24"
      containerClassName="space-y-20 md:space-y-24"
    >
      <header className="space-y-5">
        <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-[#a7f36f] font-semibold">Selected Work</p>
        <h2 className="max-w-[1000px] text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.035em] text-[#F4F1E8]">
          Products shaped with <span className="bg-gradient-to-r from-[#a7f36f] to-[#b8ff80] bg-clip-text text-transparent">rigor</span>, empathy, and execution focus.
        </h2>
      </header>

      {/* Editorial Stream: Alternating Layout */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectItem key={project.href} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
});

export default SelectedWorkSection;
