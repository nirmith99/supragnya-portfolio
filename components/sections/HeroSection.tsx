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
        className="hero text-white"
        /* Added pt-32 md:pt-48 to clear fixed navbar and provide breathing room */
        containerClassName="hero-inner flex items-start pt-32 md:pt-48"
      >
        <div className="hero-layout grid w-full lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
          <motion.div
            className="hero-copy space-y-6 md:space-y-8"
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
              className="hero-title max-w-[18ch] text-[clamp(40px,5vw,72px)] font-black leading-[1.0] tracking-[-0.03em] text-white font-heading"
            >
              Designing <span className="block text-[#a7f36f]">clarity</span> for complex digital systems.
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

          {/* Placeholder for Hero Image - Matched to new theme (grayscale/matte) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1], delay: 0.4 }}
            className="hero-image-wrap hidden lg:flex mx-auto w-full max-w-[520px] items-center justify-center lg:mx-0 lg:justify-end"
          >
            {/* Using existing image but could optionally apply grayscale filter via class */}
            <Image
              src="/images/avatar.png"
              alt="Portrait of Supragnya Purohith"
              width={760}
              height={980}
              className="hero-image h-auto w-full object-contain filter grayscale contrast-110 brightness-95"
              priority
            />
          </motion.div>
        </div>
        <ScrollIndicator />
      </Section>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
});

export default HeroSection;
