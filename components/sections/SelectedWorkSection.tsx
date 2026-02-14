"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import Section from "@/components/ui/Section";
import emergencyResponseThumbnail from "../../thumbnail images/emergency responce app.png";
import rupeeriseThumbnail from "../../thumbnail images/rupeerise.png";
import udyogaPramodaThumbnail from "../../thumbnail images/Udyoga Pramoda.png";

type SelectedWorkSectionProps = {
  delayMs?: number;
};

type Project = {
  title: string;
  description: string;
  href: string;
  imageSrc: typeof emergencyResponseThumbnail;
  imageAlt: string;
};

const projects: Project[] = [
  {
    title: "Emergency Response App",
    description:
      "A mission-critical product experience designed to support fast, confident decisions during high-pressure incident workflows.",
    href: "/projects/emergency-response",
    imageSrc: emergencyResponseThumbnail,
    imageAlt: "Emergency Response App project thumbnail"
  },
  {
    title: "RupeeRise",
    description:
      "A strategic fintech experience centered on financial clarity, habit-building, and meaningful progress visibility.",
    href: "/projects/rupeerise",
    imageSrc: rupeeriseThumbnail,
    imageAlt: "RupeeRise project thumbnail"
  },
  {
    title: "Udyoga Pramoda",
    description:
      "A structured platform concept shaping job-readiness through guided pathways, role-based insights, and focused momentum.",
    href: "/projects/udyoga-pramoda",
    imageSrc: udyogaPramodaThumbnail,
    imageAlt: "Udyoga Pramoda project thumbnail"
  }
];

function ProjectBlock({ project, index }: { project: Project; index: number }) {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const isReversed = index % 2 === 1;

  useEffect(() => {
    const node = parallaxRef.current;
    if (!node) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateTransform = () => {
      const target = parallaxRef.current;
      if (!target || mediaQuery.matches) {
        if (target) {
          target.style.transform = "translate3d(0, 0, 0)";
        }
        return;
      }

      const rect = target.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const distanceFromCenter = (viewportHeight / 2 - center) / viewportHeight;
      const translateY = Math.max(-40, Math.min(40, distanceFromCenter * 70));

      target.style.transform = `translate3d(0, ${translateY.toFixed(2)}px, 0)`;
    };

    const onScrollOrResize = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateTransform);
    };

    const onMotionPreferenceChange = () => {
      onScrollOrResize();
    };

    updateTransform();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    mediaQuery.addEventListener("change", onMotionPreferenceChange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      mediaQuery.removeEventListener("change", onMotionPreferenceChange);
    };
  }, []);

  return (
    <Link href={project.href} className="group block">
      <article className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
        <div
          className={`w-full max-w-[520px] ${
            isReversed ? "md:order-2 md:justify-self-end" : "md:order-1"
          }`}
        >
          <div className="relative aspect-square overflow-hidden rounded-[16px] shadow-[0_14px_36px_rgba(0,0,0,0.12)]">
            <div
              ref={parallaxRef}
              className="h-full w-full transition-transform duration-300 ease-out will-change-transform"
            >
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.012]"
                sizes="(max-width: 768px) calc(100vw - 64px), 520px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className={`space-y-4 ${isReversed ? "md:order-1" : "md:order-2"}`}>
          <h3 className="text-[32px] font-semibold leading-[1.12] text-[#141414]">
            {project.title}
          </h3>
          <p className="max-w-[680px] text-[clamp(16px,1.6vw,18px)] leading-relaxed text-[#3F3F3F]">
            {project.description}
          </p>
        </div>
      </article>
    </Link>
  );
}

export default function SelectedWorkSection({ delayMs = 0 }: SelectedWorkSectionProps) {
  return (
    <Section
      id="selected-work"
      delayMs={delayMs}
      className="scroll-mt-[72px] bg-[#F5F1E8] py-24 md:py-32"
      containerClassName="space-y-14"
    >
      <header className="space-y-4">
        <p className="text-sm uppercase tracking-[0.14em] text-[#5A5A5A]">Selected Work</p>
        <h2 className="max-w-[1100px] text-[32px] font-semibold leading-[1.15] text-[#141414]">
          Products shaped with rigor, empathy, and execution focus.
        </h2>
      </header>
      <div className="space-y-[120px]">
        {projects.map((project, index) => (
          <ProjectBlock key={project.href} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
