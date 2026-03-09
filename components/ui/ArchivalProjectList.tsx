"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        id: "01",
        title: "RupeeRise",
        category: "Fintech App",
        role: "UX Strategy & UI Design",
        year: "2024",
        description: "A fintech app that builds confidence through simulation and dynamic friction. A habit-first approach to wealth management.",
        href: "/rupeerise",
        image: "/images/thumbnails/rupeerise-real.png",
    },
    {
        id: "02",
        title: "Udyoga Pramoda",
        category: "Community Platform",
        role: "Product Design",
        year: "2023",
        description: "A career platform that validated 150+ aspirants and effortlessly secured 25+ placements. Bridging graduates directly to actionable mentorship.",
        href: "/udyoga-pramoda",
        image: "/images/thumbnails/udyoga-real.png",
    },
    {
        id: "03",
        title: "Emergency Response",
        category: "Healthcare",
        role: "Systems Architecture",
        year: "2023",
        description: "Simplifying critical workflows for cardiovascular care via clean architectural logic—landing a consistent sub-30-second response target.",
        href: "/emergency-app",
        image: "/images/thumbnails/emergency-real.png",
    }
];

export default function ArchivalProjectList() {
    return (
        <div className="w-full flex flex-col pt-10">
            {/* Bento Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 auto-rows-[400px]">
                {projects.map((project, index) => {
                    const isFeatured = index === 0;
                    // Alternate backgrounds for rhythm: 
                    // 0: Dark Charcoal (span-2), 1: Light Cream (span-1), 2: Deep Mocha Accent (span-3)
                    let cardClasses = "group relative flex flex-col rounded-[24px] transition-transform duration-500 hover:-translate-y-2 overflow-hidden border ";
                    let textClass = "";

                    if (index === 0) {
                        cardClasses += "md:col-span-2 bg-[var(--accent-brown)] border-white/10";
                        textClass = "text-[var(--bg-white)]";
                    } else if (index === 1) {
                        cardClasses += "col-span-1 bg-[var(--bg-white)] border-black/10";
                        textClass = "text-[var(--bg-base)]";
                    } else {
                        // Make the 3rd one full width to complete the block grid look
                        cardClasses += "md:col-span-3 bg-[var(--bg-surface)] border-white/10";
                        textClass = "text-[var(--bg-white)]";
                    }

                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className={cardClasses}
                        >
                            {/* Image Area (Flush Top) */}
                            <div className="relative w-full h-[240px] md:h-[300px] shrink-0 overflow-hidden bg-[var(--bg-base)]">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="!object-cover w-full h-full object-center group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                                />
                                <div className="absolute top-4 right-4 z-20">
                                    <Link
                                        href={project.href}
                                        className={`w-10 h-10 backdrop-blur-md rounded-full border flex items-center justify-center transition-all duration-500 shadow-md ${index === 1 ? 'bg-black/10 border-black/20 text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-white' : 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-[var(--text-primary)]'}`}
                                    >
                                        <svg className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-500 ease-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>

                            {/* Text Content Area (Bottom) */}
                            <div className="flex flex-col flex-grow z-10" style={{ padding: "clamp(20px, 4vw, 40px)" }}>
                                {/* Header Row */}
                                <div className="flex justify-between items-center mb-6">
                                    <span className={`font-mono text-sm opacity-50 font-bold ${textClass}`}>
                                        {project.id}
                                    </span>
                                    <span className={`font-mono text-xs opacity-70 border px-3 py-1 rounded-full uppercase tracking-wider ${textClass} ${index === 1 ? 'border-black/20' : 'border-white/20'}`}>
                                        {project.year}
                                    </span>
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col flex-grow justify-end gap-3">
                                    <h3 className={`font-serif text-3xl md:text-4xl font-medium tracking-tight ${textClass}`}>
                                        {project.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-2 mb-2 mt-1">
                                        <span className={`inline-flex font-mono text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/5 ${textClass}`}>
                                            {project.category}
                                        </span>
                                        <span className={`inline-flex font-mono text-[0.65rem] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full bg-black/5 ${textClass}`}>
                                            {project.role}
                                        </span>
                                    </div>

                                    <p className={`font-sans text-[0.95rem] opacity-80 mt-2 line-clamp-2 md:line-clamp-3 ${textClass}`}>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
