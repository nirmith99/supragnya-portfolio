"use client";

import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";
import { motion, useReducedMotion } from "framer-motion";

export default function EmergencyAppPage() {
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
            }
        }
    };

    const reducedVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const sectionVariants = shouldReduceMotion ? reducedVariants : standardVariants;

    return (
        <CaseStudyTemplate
            title="Emergency Response App"
            role="UX/UI Designer"
            timeline="Mid-Project Stack Shift"
            tags={["Healthcare", "Crisis UX", "Mobile System"]}
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
                            A mobile emergency response system used by hospital staff to receive cardiac alerts and coordinate response. The objective was not to rebuild it, but to <span className="text-white font-medium">simplify it for real emergency behavior</span>—especially during night shifts.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-[#ef4444] text-xs font-mono uppercase tracking-widest">The Problem</h3>
                        <h2 className="text-3xl font-bold text-white leading-tight font-heading">
                            Cognitive Overload at 2 AM.
                        </h2>
                        <p className="text-[#BDBDBD] text-lg leading-relaxed">
                            In cardiac emergencies, the first <span className="text-white">30 seconds</span> determine response quality. Nurses had to interpret data while deciding actions. Data, chat, and alerts were mixed, slowing recognition when clarity mattered most.
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
                        <h2 className="text-4xl font-bold text-white font-heading">The Logic</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(300px,auto)]">
                        {/* Bento Item 1: Core Principle (Wide) */}
                        <div className="md:col-span-3 bg-[#1E1E1E] border border-white/5 p-8 md:p-12 rounded-xl flex flex-col justify-center items-center text-center relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-0"></div>
                            <h3 className="relative z-10 text-[#a7f36f] text-sm uppercase tracking-widest mb-6 border border-[#a7f36f]/30 px-3 py-1 rounded-full">Core Design Principle</h3>
                            <div className="relative z-10 text-4xl md:text-6xl font-black text-white leading-tight font-heading">
                                Separate <br /><span className="text-[#a7f36f]">Scanning</span> from <span className="text-[#a7f36f]">Acting</span>.
                            </div>
                            <p className="relative z-10 mt-6 text-[#BDBDBD] max-w-lg">
                                Users should first understand what is happening, then decide, then act. Not all at once.
                            </p>
                        </div>

                        {/* Bento Item 2: Scan Layer */}
                        <div className="md:col-span-1 bg-[#121212] border border-white/10 p-8 rounded-xl flex flex-col relative group hover:border-[#a7f36f]/30 transition-colors">
                            <h4 className="text-xl font-bold text-white mb-2 font-heading">1. Scan Layer</h4>
                            <p className="text-[#BDBDBD] text-sm mb-6">context First. Purely for fast comprehension.</p>
                            <ul className="space-y-2 text-[#888] text-sm flex-1">
                                <li className="flex gap-2"><span className="text-[#a7f36f]">+</span> Patient Vitals (Enlarged)</li>
                                <li className="flex gap-2"><span className="text-[#a7f36f]">+</span> Ward / Room Location</li>
                                <li className="flex gap-2"><span className="text-[#a7f36f]">+</span> Severity Level</li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <span className="text-xs text-[#ef4444] uppercase tracking-wider">No Actions Allowed</span>
                            </div>
                        </div>

                        {/* Bento Item 3: Action Layer */}
                        <div className="md:col-span-1 bg-[#121212] border border-white/10 p-8 rounded-xl flex flex-col relative group hover:border-[#a7f36f]/30 transition-colors">
                            <h4 className="text-xl font-bold text-white mb-2 font-heading">2. Action Layer</h4>
                            <p className="text-[#BDBDBD] text-sm mb-6">After context is set. Access to tools.</p>
                            <ul className="space-y-2 text-[#888] text-sm flex-1">
                                <li className="flex gap-2"><span className="text-[#a7f36f]">+</span> Call Physician</li>
                                <li className="flex gap-2"><span className="text-[#a7f36f]">+</span> Team Chat</li>
                                <li className="flex gap-2"><span className="text-[#a7f36f]">+</span> Full Patient History</li>
                            </ul>
                            <div className="mt-6 pt-6 border-t border-white/5">
                                <span className="text-xs text-[#a7f36f] uppercase tracking-wider">One Tap Away</span>
                            </div>
                        </div>

                        {/* Bento Item 4: IA Diagram Placeholder */}
                        <div className="md:col-span-1 bg-[#1E1E1E] p-1 rounded-xl border border-white/5 overflow-hidden relative">
                            <GlassImagePlaceholder label="IA Diagram" className="w-full h-full opacity-50" />
                            <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm p-3 rounded border border-white/10">
                                <p className="text-xs text-[#BDBDBD]">Information Architecture</p>
                            </div>
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
                        <div className="aspect-[9/16] bg-[#1E1E1E] rounded-xl border border-white/5 p-2 rotate-1 hover:rotate-0 transition-transform duration-500">
                            <GlassImagePlaceholder label="Main Alert Screen (Scan)" className="w-full h-full rounded-lg" />
                        </div>
                        <div className="aspect-[9/16] bg-[#1E1E1E] rounded-xl border border-white/5 p-2 -rotate-1 hover:rotate-0 transition-transform duration-500 md:mt-12">
                            <GlassImagePlaceholder label="Action Sheet (Act)" className="w-full h-full rounded-lg" />
                        </div>
                    </div>
                </motion.section>

                {/* 4. Impact */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="bg-[#a7f36f] text-[#121212] rounded-2xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="flex-1 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest border-b border-black/10 pb-2 mb-4">Impact</h3>
                        <div className="text-5xl md:text-7xl font-black font-heading leading-none">
                            &lt;30s
                        </div>
                        <p className="text-xl font-medium opacity-80">
                            Consistent response target met for cardiac alerts.
                        </p>
                    </div>
                    <div className="flex-1 space-y-6 text-lg font-medium opacity-90 border-t md:border-t-0 md:border-l border-black/10 pt-6 md:pt-0 md:pl-12">
                        <p>&quot;Staff described the experience as more comfortable than existing complex systems during emergency contexts.&quot;</p>
                        <p className="text-sm uppercase tracking-wide font-bold">— Ward Coordinator</p>

                        <div className="pt-4 mt-4 border-t border-black/10">
                            <p className="text-sm">Additional Outcome:</p>
                            <p className="font-bold">Reduced hesitation and faster clarity under pressure.</p>
                        </div>
                    </div>
                </motion.section>

                {/* Hard Stop Footer */}
                <div className="h-24 bg-[#121212]"></div>
            </div>
        </CaseStudyTemplate>
    );
}
