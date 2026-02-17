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
        className="hero text-white relative min-h-screen flex flex-col justify-center"
        /* Adaptive padding handled by layout-padding utility */
        containerClassName="hero-inner flex flex-col lg:flex-row items-center pt-32 md:pt-48 pb-20 layout-padding"
      >
        <div className="hero-layout grid w-full lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center">
          <motion.div
            className="hero-copy space-y-6 md:space-y-8 animate-assembly"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={itemVariants}
              className="hero-kicker text-xs md:text-sm uppercase tracking-[0.16em] text-[#a7f36f] font-semibold"
            >
              UX/UI Designer | Product Designer
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="hero-title max-w-[15ch] text-[clamp(40px,6vw,84px)] font-black leading-[0.95] tracking-[-0.03em] text-white font-heading"
            >
              Designing <span className="block text-[#a7f36f]">Clarity</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="hero-description max-w-[600px] text-base md:text-lg leading-relaxed text-[#C0C0C0] font-normal"
            >
              I bridge curiosity and logic to craft structured, user-centered experiences that
              help teams ship with confidence.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="hero-actions flex flex-wrap gap-4 pt-1"
            >
              <Button
                onClick={scrollToSelectedWork}
              >
                View Work
              </Button>
              <Button
                variant="secondary"
                onClick={() => setIsModalOpen(true)}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>

          {/* Avatar Integration - "Avatar" Rule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="hero-image-wrap flex mx-auto w-full max-w-[480px] lg:max-w-[640px] items-end justify-center lg:justify-end relative perspective-1000"
          >
            <div className="relative w-full aspect-[4/5] lg:aspect-square">
              <Image
                src="/images/avatar.png"
                alt="Supragnya Purohith - Designing Clarity"
                fill
                className="object-contain object-bottom filter contrast-110"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>

        {/* Animated Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#a7f36f] to-transparent bg-[length:100%_200%] animate-scroll-indicator"></div>
        </motion.div>
      </Section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
});

export default HeroSection;
