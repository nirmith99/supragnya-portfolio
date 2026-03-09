"use client";

import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";
import { motion } from "framer-motion";

export default function EmergencyAppPage() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } as any
        }
    };

    return (
        <CaseStudyTemplate
            title="Emergency Response App"
            role="UX/UI Designer"
            timeline="Mid-Project Stack Shift"
            tags={["Healthcare", "Crisis UX", "Mobile System"]}
        >
            <div className="max-w-[1100px] mx-auto space-y-24 md:space-y-32">

                {/* 1. Hero Section */}
                <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="space-y-8 max-w-[720px]">
                    <h2 className="text-3xl md:text-4xl font-heading text-[var(--text-secondary)] italic">
                        Cognitive Clarity at 2 AM.
                    </h2>
                    <p className="text-xl text-[var(--text-tertiary)] pt-4">
                        Simplifying cardiac alerts for real-world emergency behavior.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6">
                        {["Mid-Project Pivot", "Healthcare Constraints", "Sub-30-Second Target"].map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-[var(--bg-surface)] border border-[var(--surface-border)] text-[var(--text-secondary)] text-xs rounded-full font-medium tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.section>

                <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                    <div className="w-full aspect-[21/9] md:aspect-[16/9] relative rounded-2xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--surface-border)] shadow-xl hidden md:flex items-center justify-center p-8">
                        <GlassImagePlaceholder label="Emergency Rapid Alert System" className="w-[80%] h-[80%] opacity-40 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" />
                    </div>
                </motion.div>

                {/* 2. Context & Problem */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="max-w-[720px] space-y-12">
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl text-[var(--text-primary)] border-b border-[var(--surface-border)] pb-4 tracking-tight">Context</h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                            A mobile emergency response system used by hospital staff to receive cardiac alerts and coordinate responses. The objective was not to rebuild it, but to <strong className="text-[var(--text-primary)]">simplify it for real emergency behavior</strong>—especially during night shifts.
                        </p>
                    </div>

                    <div className="bg-[var(--bg-surface)] border-l-4 border-[#ef4444] p-8 rounded-r-2xl my-10 shadow-sm">
                        <h4 className="font-bold text-[#ef4444] text-sm uppercase tracking-widest mb-4">The Problem</h4>
                        <p className="font-serif text-2xl text-[var(--text-primary)] leading-tight italic mb-4">
                            Cognitive Overload at 2 AM.
                        </p>
                        <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                            In cardiac emergencies, the first <strong className="text-[var(--text-primary)]">30 seconds</strong> determine response quality. Nurses had to interpret data while deciding actions. Data, chat, and alerts were mixed, slowing recognition when clarity mattered most.
                        </p>
                    </div>
                </motion.section>

                {/* 3. The Logic (Editorial Redesign) */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="space-y-12">
                    <div className="max-w-[720px] space-y-6">
                        <h2 className="font-serif text-4xl text-[var(--text-primary)] border-b border-[var(--surface-border)] pb-4 tracking-tight">The Core Logic</h2>
                    </div>

                    {/* Massive Typography Statement */}
                    <div className="py-12 md:py-16">
                        <div className="max-w-[900px]">
                            <p className="text-xs font-bold tracking-[0.12em] uppercase text-[var(--accent-gold)] mb-6">Core Design Principle</p>
                            <p className="font-serif text-4xl md:text-6xl text-[var(--text-primary)] leading-[1.1] tracking-tight text-balance">
                                Separate <em className="text-[var(--accent-gold)] not-italic">Scanning</em> from <em className="text-[var(--accent-gold)] not-italic">Acting</em>.
                            </p>
                            <p className="text-xl text-[var(--text-secondary)] mt-8 leading-[1.6] max-w-2xl">
                                Users should first understand what is happening, then decide, then act. Not all at once.
                            </p>
                        </div>
                    </div>

                    {/* Layer List Structure */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 pt-8 border-t border-[var(--surface-border)]/50">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-full text-xs font-bold uppercase tracking-widest text-[#ef4444]">
                                1. Scan Layer
                            </div>
                            <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                                Purely for fast comprehension. Context first. <strong className="text-[var(--text-primary)]">No Actions Allowed.</strong>
                            </p>
                            <ul className="space-y-3 pt-2 border-t border-[var(--surface-border)]/50">
                                <li className="flex gap-3 text-md text-[var(--text-tertiary)]"><span className="text-[var(--accent-gold)]">+</span> Patient Vitals (Enlarged)</li>
                                <li className="flex gap-3 text-md text-[var(--text-tertiary)]"><span className="text-[var(--accent-gold)]">+</span> Ward / Room Location</li>
                                <li className="flex gap-3 text-md text-[var(--text-tertiary)]"><span className="text-[var(--accent-gold)]">+</span> Severity Level</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-full text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)]">
                                2. Action Layer
                            </div>
                            <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                                Access to tools only after the context is set. All critical actions <strong className="text-[var(--text-primary)]">One Tap Away.</strong>
                            </p>
                            <ul className="space-y-3 pt-2 border-t border-[var(--surface-border)]/50">
                                <li className="flex gap-3 text-md text-[var(--text-tertiary)]"><span className="text-[var(--accent-gold)]">+</span> Call Physician</li>
                                <li className="flex gap-3 text-md text-[var(--text-tertiary)]"><span className="text-[var(--accent-gold)]">+</span> Team Chat</li>
                                <li className="flex gap-3 text-md text-[var(--text-tertiary)]"><span className="text-[var(--accent-gold)]">+</span> Full Patient History</li>
                            </ul>
                        </div>
                    </div>
                </motion.section>

                {/* 4. UI Showcase (Editorial Format) */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="space-y-16 pt-16">
                    <div className="max-w-[720px] space-y-6">
                        <h2 className="font-serif text-4xl text-[var(--text-primary)] border-b border-[var(--surface-border)] pb-4 tracking-tight">Interface Translation</h2>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        <div className="flex-1 w-full bg-[var(--bg-surface)] rounded-[2rem] p-12 flex justify-center items-center shadow-lg border border-[var(--surface-border)]">
                            <div className="aspect-[9/16] w-full max-w-[280px] -rotate-2 hover:rotate-0 transition-transform duration-500">
                                <GlassImagePlaceholder label="Main Alert Screen (Scan)" className="w-full h-full rounded-2xl shadow-2xl bg-[var(--bg-sage)]" />
                            </div>
                        </div>
                        <div className="flex-1 w-full bg-[var(--bg-surface)] rounded-[2rem] p-12 flex justify-center items-center shadow-lg border border-[var(--surface-border)]">
                            <div className="aspect-[9/16] w-full max-w-[280px] rotate-2 hover:rotate-0 transition-transform duration-500">
                                <GlassImagePlaceholder label="Action Sheet (Act)" className="w-full h-full rounded-2xl shadow-2xl bg-[var(--bg-sage)]" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 5. Impact */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="max-w-[900px] pt-12">
                    <div className="bg-[var(--text-primary)] text-[var(--bg-sage)] rounded-[2rem] p-12 md:p-16 relative shadow-2xl overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-gold)]/20 rounded-full blur-[80px]"></div>

                        <h3 className="text-xs font-bold uppercase tracking-widest text-[var(--accent-gold)] mb-8">Outcome & Impact</h3>
                        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                            <div className="space-y-4">
                                <div className="text-6xl md:text-8xl font-black font-heading leading-none text-[var(--accent-gold)] drop-shadow-lg">
                                    &lt;30s
                                </div>
                                <p className="text-xl font-medium tracking-wide">
                                    Consistent response target <br />met for cardiac alerts.
                                </p>
                            </div>

                            <div className="space-y-8 flex-1 border-t md:border-t-0 md:border-l border-[var(--surface-border)]/30 pt-8 md:pt-0 md:pl-12">
                                <div>
                                    <p className="font-serif text-2xl italic leading-[1.6] mb-4 text-[#F4F1EA]">
                                        &quot;Staff described the experience as more comfortable than existing complex systems during emergency contexts.&quot;
                                    </p>
                                    <p className="text-xs text-[var(--accent-gold)] uppercase tracking-widest font-bold block">— Ward Coordinator</p>
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex gap-3 text-lg text-[#F4F1EA]"><span className="text-[var(--accent-gold)]">✓</span> Reduced hesitation</li>
                                    <li className="flex gap-3 text-lg text-[#F4F1EA]"><span className="text-[var(--accent-gold)]">✓</span> Faster clarity under pressure</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Footer Spacer */}
                <div className="h-24"></div>
            </div>
        </CaseStudyTemplate>
    );
}
