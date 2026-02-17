"use client";

import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";
import { motion, useReducedMotion } from "framer-motion";

export default function RupeeRisePage() {
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
            title="RupeeRise"
            role="Lead Product Designer"
            timeline="14-Day Hackathon"
            tags={["Fintech", "Behavioral Design", "Mobile App"]}
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
                            Initial brief focus: Financial literacy for young earners. <br />
                            Early assumption: Users lacked knowledge, and education would solve the problem.
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-[#ef4444] text-xs font-mono uppercase tracking-widest">Problem Reframing</h3>
                        <h2 className="text-3xl font-bold text-white leading-tight font-heading">
                            Behavioral Instability, Not Knowledge Deficit.
                        </h2>
                        <p className="text-[#BDBDBD] text-lg leading-relaxed">
                            Impulsive investing, fear of irreversible loss, and overconfidence influenced by short-term gain narratives. The issue wasn&apos;t access to tools, but the <span className="text-white">lack of guardrails</span>.
                        </p>
                    </div>
                </motion.section>

                {/* 2. The Logic (Bento Grid - 4 Pillars) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="space-y-12"
                >
                    <div className="border-b border-white/10 pb-6 flex justify-between items-end">
                        <h2 className="text-4xl font-bold text-white font-heading">The Logic: 4 Pillars</h2>
                        <span className="text-[#888] text-sm hidden md:block">Adaptive Financial Behaviour System</span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Pillar 1 */}
                        <div className="bg-[#1E1E1E] border border-white/5 p-8 rounded-xl hover:border-[#a7f36f]/30 transition-all group">
                            <h4 className="text-[#a7f36f] text-sm uppercase tracking-widest mb-4 font-mono">01. Behavior Awareness</h4>
                            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Signal Engine</h3>
                            <p className="text-[#BDBDBD] leading-relaxed">
                                Tracking functions as a behavioural signal engine rather than a passive expense log. Detects discretionary spending spikes and provides contextual nudges.
                            </p>
                        </div>

                        {/* Pillar 2 */}
                        <div className="bg-[#1E1E1E] border border-white/5 p-8 rounded-xl hover:border-[#a7f36f]/30 transition-all group">
                            <h4 className="text-[#a7f36f] text-sm uppercase tracking-widest mb-4 font-mono">02. Structured Learning</h4>
                            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Competency Gating</h3>
                            <p className="text-[#BDBDBD] leading-relaxed">
                                Progression is gated by competency to ensure readiness before exposure. Concepts simplified and validated through quizzes.
                            </p>
                        </div>

                        {/* Pillar 3 */}
                        <div className="bg-[#1E1E1E] border border-white/5 p-8 rounded-xl hover:border-[#a7f36f]/30 transition-all group">
                            <h4 className="text-[#a7f36f] text-sm uppercase tracking-widest mb-4 font-mono">03. Simulation First</h4>
                            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Emotional Exposure</h3>
                            <p className="text-[#BDBDBD] leading-relaxed">
                                Real market data simulation. Provides emotional exposure to volatility without financial loss. Mandatory in early stages.
                            </p>
                        </div>

                        {/* Pillar 4 */}
                        <div className="bg-[#1E1E1E] border border-white/5 p-8 rounded-xl hover:border-[#a7f36f]/30 transition-all group">
                            <h4 className="text-[#a7f36f] text-sm uppercase tracking-widest mb-4 font-mono">04. Adaptive Guardrails</h4>
                            <h3 className="text-2xl font-bold text-white mb-4 font-heading">Dynamic Friction</h3>
                            <p className="text-[#BDBDBD] leading-relaxed">
                                Guarded Mode (High Friction) &rarr; Autonomous Mode (Low Friction). If risky patterns emerge, friction is reintroduced.
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

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="aspect-[9/19] bg-[#1E1E1E] rounded-xl border border-white/5 p-2 transition-transform duration-500 hover:-translate-y-2">
                            <GlassImagePlaceholder label="Home & Mood Analysis" className="w-full h-full rounded-lg" />
                        </div>
                        <div className="aspect-[9/19] bg-[#1E1E1E] rounded-xl border border-white/5 p-2 transition-transform duration-500 hover:-translate-y-2 delay-100">
                            <GlassImagePlaceholder label="Investing Simulation" className="w-full h-full rounded-lg" />
                        </div>
                        <div className="aspect-[9/19] bg-[#1E1E1E] rounded-xl border border-white/5 p-2 transition-transform duration-500 hover:-translate-y-2 delay-200">
                            <GlassImagePlaceholder label="Learning Module" className="w-full h-full rounded-lg" />
                        </div>
                    </div>
                </motion.section>

                {/* 4. Impact */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="bg-[#1E1E1E] border border-white/10 rounded-2xl p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center"
                >
                    <div className="flex-1 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#a7f36f] mb-4">Core Metric</h3>
                        <p className="text-2xl md:text-3xl font-bold text-white font-heading">
                            Behavioural progression toward stable financial decision-making.
                        </p>
                    </div>
                    <div className="flex-1 space-y-6 text-[#BDBDBD] border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-12">
                        <p className="italic">&quot;The aim is stable independence through progression, not permanent restriction.&quot;</p>
                        <div className="space-y-2">
                            <p className="font-bold text-white">Validation Feedback:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Simulation reduced intimidation around investing.</li>
                                <li>Progress-based framing felt less stressful than balance-heavy dashboards.</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* Hard Stop Footer */}
                <div className="h-24 bg-[#121212]"></div>
            </div>
        </CaseStudyTemplate>
    );
}
