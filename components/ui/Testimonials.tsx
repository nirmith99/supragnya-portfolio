"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const testimonials = [
    {
        id: "01",
        quote: "Supragnya didn't just design screens; he mapped out the entire logic flow for our platform. The result was an interface that users intuitively understood from day one.",
        author: "Product Director",
        company: "TechOps Inc.",
    },
    {
        id: "02",
        quote: "His ability to bridge the gap between complex engineering constraints and clean consumer UX is rare. The 'Glassmorphic' aesthetic he introduced completely elevated our brand.",
        author: "Lead Engineer",
        company: "FinVerse",
    },
    {
        id: "03",
        quote: "A true strategic partner. We came to him for a UI refresh, and he ended up saving us months of dev time by simplifying our core user journey before a single pixel was drawn.",
        author: "Founder & CEO",
        company: "HealthNova",
    }
];

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const sectionY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

    return (
        <section
            ref={containerRef}
            className="w-full relative py-20 lg:py-32 overflow-hidden bg-[var(--bg-sage)] text-[var(--text-primary)] border-t border-[var(--surface-border)]"
        >
            {/* Archival Index Background Grid (Subtle Lines) */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "linear-gradient(to right, var(--text-primary) 1px, transparent 1px), linear-gradient(to bottom, var(--text-primary) 1px, transparent 1px)",
                    backgroundSize: "4vw 4vw"
                }}
            />

            <motion.div
                style={{ y: sectionY }}
                className="max-w-[1400px] mx-auto px-6 lg:px-20 relative z-10"
            >
                {/* Archival Header */}
                <div className="flex flex-col gap-4 mb-20 border-b border-[var(--surface-border)] pb-8">
                    <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] opacity-50">
                        Endorsements
                    </p>
                    <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-medium tracking-tight">
                        What the people who worked with me say.
                    </h2>
                </div>

                {/* The Grid / Glassmorphism 2.0 Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={test.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className="group relative flex flex-col h-full bg-[var(--bg-surface)] text-[var(--bg-sage)] border border-black/20 p-10 rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.4)] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 isolate overflow-hidden"
                        >
                            {/* Internal Archival Framing (Subtle) */}
                            <div className="absolute top-0 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent opacity-[0.05]" />

                            <div className="flex justify-between items-start mb-12">
                                <span className="font-mono text-sm opacity-40 font-bold">[{test.id}]</span>
                                <span className="w-8 h-8 rounded-full bg-[var(--accent-gold)]/20 text-[var(--accent-gold)] flex items-center justify-center font-serif text-2xl leading-none pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    &quot;
                                </span>
                            </div>

                            <p className="font-sans text-[1.05rem] leading-[1.8] font-medium text-white/90 flex-grow">
                                &quot;{test.quote}&quot;
                            </p>

                            <div className="mt-12 pt-6 border-t border-white/10">
                                <p className="font-bold text-sm uppercase tracking-wider text-[var(--text-primary)]">
                                    {test.author}
                                </p>
                                <p className="font-mono text-[0.7rem] uppercase tracking-widest opacity-60 mt-1">
                                    @ {test.company}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
