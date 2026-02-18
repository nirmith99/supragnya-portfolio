"use client";

import { memo } from "react";
import Section from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Discovery & Logic",
        description: "I start by deconstructing the problem. I map stakeholder requirements to user needs, identifying the core friction points before drawing a single pixel.",
    },
    {
        number: "02",
        title: "System Architecture",
        description: "I build the skeletal structure. This means defining user flows, information hierarchy, and the component logic that ensures scalability.",
    },
    {
        number: "03",
        title: "Interface Craft",
        description: "I apply the visual language. This is where clarity meets interaction physics—creating a UI that feels premium, tactile, and confident.",
    },
    {
        number: "04",
        title: "Production & Ship",
        description: "I deliver code-ready assets. My handoffs are precise, ensuring the final build matches the vision down to the last flexbox gap.",
    },
];

const ProcessSection = memo(function ProcessSection() {
    const shouldReduceMotion = useReducedMotion();

    // 3D Tilt Variants
    const cardVariants = {
        hidden: { opacity: 0, rotateX: 15, scale: 0.95, y: 30 },
        visible: {
            opacity: 1,
            rotateX: 0,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                mass: 1
            } as any
        }
    } as any;

    const simpleVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <Section
            id="process-section"
            reveal={false}
            className="process-section py-20 md:py-32"
            containerClassName="space-y-16 md:space-y-20"
        >
            <div className="w-full h-[1px] bg-[#8B5E3C] opacity-20 mb-20" /> {/* Section Divider */}

            <div className="layout-padding space-y-4 text-center">
                <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#8B5E3C] font-semibold">
                    The Methodology
                </p>
                <h2 className="text-4xl md:text-5xl font-black leading-tight text-[#121212] font-heading">
                    From Chaos to <span className="font-serif-italic font-normal text-[#8B5E3C]">Clarity.</span>
                </h2>
                <p className="text-lg text-[var(--text-secondary)] font-normal max-w-xl mx-auto">
                    A structured approach to solving complex product challenges, ensuring every design decision is rooted in logic.
                </p>
            </div>

            <div className="layout-padding grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Connector Line (Desktop) - Updated Color */}
                <div className="hidden lg:block absolute top-[28px] left-0 right-0 h-[1px] bg-[#8B5E3C]/20 z-0" />

                {steps.map((step, index) => (
                    <motion.div
                        key={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-10%" }}
                        variants={shouldReduceMotion ? simpleVariants : cardVariants}
                        transition={{ delay: index * 0.1 }}
                        className="relative z-10 group"
                    >
                        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-white border border-[#8B5E3C]/20 flex items-center justify-center text-[#8B5E3C] font-mono font-bold text-sm md:text-base mb-6 shadow-sm group-hover:bg-[#8B5E3C] group-hover:text-white transition-colors duration-300 relative z-20">
                            {step.number}
                        </div>
                        <h3 className="text-xl font-bold text-[#121212] mb-3 group-hover:text-[#8B5E3C] transition-colors duration-300 font-heading">
                            {step.title}
                        </h3>
                        <p className="text-sm md:text-base leading-relaxed text-[var(--text-secondary)]">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
});

export default ProcessSection;
