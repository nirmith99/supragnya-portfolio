"use client";

import Image from "next/image";
import { useState, memo } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import Section from "@/components/ui/Section";

const HeroSection = memo(function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20; // -10 to 10
    const y = (clientY / innerHeight - 0.5) * 20; // -10 to 10
    setMousePosition({ x, y });
  };

  const scrollToSelectedWork = () => {
    const section = document.getElementById("selected-work");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Kinetic Typography Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <>
      <Section
        id="hero-section"
        reveal={false}
        staggerChildren={false}
        className="hero text-[var(--text-primary)] relative w-full pt-[clamp(100px,12vh,140px)]" // Reduced top padding slightly to fit 1080p better
        containerClassName="max-w-[1920px] mx-auto px-5 md:px-[60px]"
      >
        <div
          className="grid grid-cols-1 md:grid-cols-12 gap-[24px] items-start"
          onMouseMove={handleMouseMove}
        >

          {/* Column 1 (Span 8): Primary Headline and Sub-headline */}
          <motion.div
            className="col-span-1 md:col-span-8 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{
              transform: `translate(${mousePosition.x * -0.5}px, ${mousePosition.y * -0.5}px)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight font-heading font-semibold text-[#2D1B0D]"
            >
              Designer driven by <span className="font-serif-italic font-normal">precision</span>, where logical structure meets <span className="font-serif-italic font-normal">user instinct</span>, building systems that actually scale.
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="max-w-2xl text-lg md:text-xl leading-relaxed text-[var(--text-secondary)] font-normal"
            >
              Focusing on making complex systems feel simple through behavior-first design and technical clarity.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-6 pt-4"
            >
              <Button
                onClick={scrollToSelectedWork}
                className="bg-[#8B5E3C] text-white hover:bg-[#70482B] rounded-full px-8 py-4 text-lg shadow-sm"
              >
                View Work
              </Button>
              <Button
                onClick={() => setIsModalOpen(true)}
                className="bg-[#8B5E3C] text-white hover:bg-[#70482B] rounded-full px-8 py-4 text-lg shadow-sm"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Column 2 (Span 4): Floating Image Bubble Assets */}
          <motion.div
            className="hidden md:block col-span-4 relative h-full min-h-[400px]"
            style={{
              transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
              transition: "transform 0.1s ease-out"
            }}
          >
            {/* Placeholder for floating image bubbles */}
            <div className="absolute inset-0 bg-gray-50 rounded-2xl border-2 border-dashed border-[#2D1B0D]/10 flex items-center justify-center text-[#2D1B0D]/30">
              Floating Image Assets
            </div>
          </motion.div>

        </div>

        {/* Scroll Cue - Anchored and visible above fold */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col items-center gap-3 mt-16 md:mt-24 pb-12"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--text-tertiary)] font-medium">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#8B5E3C] to-transparent bg-[length:100%_200%] animate-scroll-indicator"></div>
        </motion.div>
      </Section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
});

export default HeroSection;
