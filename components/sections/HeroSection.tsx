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
        className="hero text-[var(--text-primary)] relative min-h-screen flex flex-col justify-center"
        containerClassName="hero-inner flex flex-col items-center justify-center pt-32 md:pt-48 pb-20 layout-padding text-center"
      >
        <div className="max-w-5xl mx-auto relative">
          {/* Decorative Floating Elements (Optional - kept simple for now) */}

          <motion.div
            className="hero-copy space-y-12 animate-assembly"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Primary Headline */}
            <motion.h1
              variants={itemVariants}
              className="hero-title text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] tracking-tight font-heading font-bold text-[#121212]"
            >
              Designer driven by <span className="font-serif-italic font-normal">precision</span>, where logical structure meets <span className="font-serif-italic font-normal">user instinct</span>, building systems that actually scale.
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={itemVariants}
              className="hero-description max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-[var(--text-secondary)] font-normal"
            >
              Focusing on making complex systems feel simple through behavior-first design and technical clarity.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="hero-actions flex flex-wrap justify-center gap-6 pt-4"
            >
              <Button
                onClick={scrollToSelectedWork}
                className="bg-[#8B5E3C] text-white hover:bg-[#70482B] rounded-full px-8 py-4 text-lg"
              >
                View Work
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsModalOpen(true)}
                className="bg-transparent text-[#121212] border border-[#121212]/20 hover:border-[#8B5E3C] hover:text-[#8B5E3C] rounded-full px-8 py-4 text-lg"
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator - Updated Colors */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
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
