"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Section from "@/components/ui/Section";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSelectedWork = () => {
    const section = document.getElementById("selected-work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Section
        id="hero-section"
        reveal={false}
        className="grain-overlay relative flex min-h-screen items-center overflow-hidden bg-[#0B1F1A] text-white [background-image:radial-gradient(120%_120%_at_20%_12%,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_56%)]"
        containerClassName="relative z-10 flex min-h-screen items-center px-8 py-20 md:px-10"
      >
        <div className="grid w-full gap-14 lg:grid-cols-[1.06fr_0.94fr] lg:items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.14em] text-white/75">
              UX/UI Designer | Product Designer
            </p>
            <h1 className="max-w-[1100px] text-[clamp(36px,5vw,64px)] font-bold leading-[1.1] tracking-[-0.02em] text-white [overflow-wrap:anywhere]">
              Designing <span className="text-[#1F6F5A]">clarity</span> for complex digital
              systems.
            </h1>
            <p className="max-w-[680px] text-[1.06rem] leading-relaxed text-[#B8C2BD]">
              I bridge curiosity and logic to craft structured, user-centered experiences that
              help teams ship with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-[#124A3B] hover:bg-[#1A604D] focus-visible:ring-[#1A604D] focus-visible:ring-offset-[#0B1F1A] transition-all duration-300 ease-out"
                onClick={scrollToSelectedWork}
              >
                View Work
              </Button>
              <Button
                variant="secondary"
                className="border-white/30 text-white/95 hover:border-white/55 hover:bg-white/10 focus-visible:ring-offset-[#0B1F1A] transition-all duration-300 ease-out"
                onClick={() => setIsModalOpen(true)}
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="mx-auto flex w-full max-w-[440px] items-center justify-center lg:mx-0 lg:justify-end">
            <Image
              src="/images/avatar.png"
              alt="Portrait of Supragnya Purohith"
              width={760}
              height={980}
              className="h-auto w-full rounded-[10px] object-cover"
            />
          </div>
        </div>
        <ScrollIndicator />
      </Section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
