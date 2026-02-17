"use client";

import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";
import { motion, useReducedMotion } from "framer-motion";

export default function UdyogaPramodaPage() {
    const shouldReduceMotion = useReducedMotion();

    const standardVariants = {
        hidden: { opacity: 0, rotateX: 15, scale: 0.95, y: 50 },
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
    };

    const reducedVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const sectionVariants: any = shouldReduceMotion ? reducedVariants : standardVariants;

    return (
        <CaseStudyTemplate
            title="Udyoga Pramoda"
            role="Product Designer"
            timeline="Live Production"
            tags={["EdTech", "Community Platform", "Web System"]}
        >
            <div className="space-y-32">
                {/* 1. Context & Problem */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24"
                >
                    <div className="space-y-6">
                        <h3 className="text-[#a7f36f] text-xs font-mono uppercase tracking-widest">Context</h3>
                        <p className="text-[#BDBDBD] text-lg leading-relaxed">
                            A community-led career initiative. Senior professionals mentor early-career aspirants.
                            Functional culturally, but governance became fragile as it scaled beyond 150 aspirants.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-[#ef4444] text-xs font-mono uppercase tracking-widest">The Problem</h3>
                        <h2 className="text-3xl font-bold text-white leading-tight font-heading">
                            Informal Validation & Invisible Funnel.
                        </h2>
                        <p className="text-[#BDBDBD] text-lg leading-relaxed">
                            Mentor validation lived in WhatsApp threads. No centralized tracking. Placements were anecdotal. The challenge was structuring progression without increasing mentor workload.
                        </p>
                    </div>
                </motion.section>

                {/* 2. The Logic (Bento Grid) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="space-y-12"
                >
                    <div className="border-b border-white/10 pb-6">
                        <h2 className="text-4xl font-bold text-white font-heading">The Logic: Mentor-Gated Progression</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Logic Item 1: Core Insight (Wide) */}
                        <div className="md:col-span-2 bg-[#1E1E1E] border border-white/5 p-8 rounded-xl flex flex-col justify-center relative overflow-hidden group hover:border-[#a7f36f]/30 transition-all">
                            <h4 className="text-[#a7f36f] text-sm uppercase tracking-widest mb-4 font-mono">Core Insight</h4>
                            <p className="text-2xl font-bold text-white leading-relaxed font-heading">
                                Mentors already controlled progression informally. The platform simply <span className="text-[#a7f36f]">structured and surfaced</span> that control through visible state transitions.
                            </p>
                        </div>

                        {/* Logic Item 2: The Flow */}
                        <div className="md:col-span-1 bg-[#121212] border border-white/10 p-8 rounded-xl flex flex-col justify-center">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-xs font-bold">1</div>
                                    <p className="text-[#BDBDBD] text-sm">Aspirant submits task</p>
                                </div>
                                <div className="h-4 w-0.5 bg-white/10 ml-4"></div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-xs font-bold">2</div>
                                    <p className="text-[#BDBDBD] text-sm">Mentor Reviews</p>
                                </div>
                                <div className="h-4 w-0.5 bg-white/10 ml-4"></div>
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 rounded-full bg-[#a7f36f] text-black flex items-center justify-center text-xs font-bold">3</div>
                                    <p className="text-white font-bold text-sm">State Change: Reliable</p>
                                </div>
                            </div>
                        </div>

                        {/* Logic Item 3: System Architecture */}
                        <div className="md:col-span-3 bg-[#1E1E1E] border border-white/5 p-8 rounded-xl relative overflow-hidden">
                            <h4 className="text-[#BDBDBD] text-sm uppercase tracking-widest mb-6 font-mono">Start → Validated → Placed</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-black/40 p-4 rounded border border-white/10 text-center">
                                    <span className="block text-2xl font-bold text-white mb-1">150</span>
                                    <span className="text-xs text-[#888] uppercase">Aspirants Onboarded</span>
                                </div>
                                <div className="bg-black/40 p-4 rounded border border-white/10 text-center">
                                    <span className="block text-2xl font-bold text-[#a7f36f] mb-1">50</span>
                                    <span className="text-xs text-[#888] uppercase">Mentor Validated</span>
                                </div>
                                <div className="bg-black/40 p-4 rounded border border-white/10 text-center">
                                    <span className="block text-2xl font-bold text-white mb-1">25+</span>
                                    <span className="text-xs text-[#888] uppercase">Secured Placements</span>
                                </div>
                            </div>
                            <p className="mt-4 text-center text-sm text-[#BDBDBD] opacity-70">
                                ~50% conversion from validated pool.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 3. UI Showcase */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="space-y-12"
                >
                    <div className="border-b border-white/10 pb-6">
                        <h2 className="text-4xl font-bold text-white font-heading">Interface Design</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <div className="aspect-[4/3] bg-[#1E1E1E] rounded-xl border border-white/5 p-2">
                                <GlassImagePlaceholder label="Aspirant Dashboard" className="w-full h-full rounded-lg" />
                            </div>
                            <p className="text-sm text-[#888] text-center">Transparent status tracking for aspirants</p>
                        </div>
                        <div className="space-y-4">
                            <div className="aspect-[4/3] bg-[#1E1E1E] rounded-xl border border-white/5 p-2">
                                <GlassImagePlaceholder label="Mentor Validation View" className="w-full h-full rounded-lg" />
                            </div>
                            <p className="text-sm text-[#888] text-center">Quick-action validation tools for mentors</p>
                        </div>
                    </div>
                </motion.section>

                {/* 4. Impact */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="bg-white text-black rounded-2xl p-8 md:p-16"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <span className="block text-5xl font-black font-heading mb-2">25+</span>
                            <span className="text-sm font-bold uppercase tracking-widest opacity-60">Placements Secured</span>
                        </div>
                        <div>
                            <span className="block text-5xl font-black font-heading mb-2">~7.5</span>
                            <span className="text-sm font-bold uppercase tracking-widest opacity-60">LPA Avg Salary</span>
                        </div>
                        <div>
                            <span className="block text-5xl font-black font-heading mb-2">33%</span>
                            <span className="text-sm font-bold uppercase tracking-widest opacity-60">Validation Rate</span>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-black/10">
                        <p className="text-lg font-medium">
                            &quot;Reduced coordination ambiguity and improved readiness-to-placement visibility.&quot;
                        </p>
                    </div>
                </motion.section>

                {/* Hard Stop Footer */}
                <div className="h-24 bg-[#121212]"></div>
            </div>
        </CaseStudyTemplate>
    );
}
