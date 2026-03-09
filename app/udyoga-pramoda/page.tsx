"use client";

import React from 'react';
import { motion } from 'framer-motion';
import CaseStudyTemplate from '@/components/templates/CaseStudyTemplate';
import GlassImagePlaceholder from '@/components/ui/GlassImagePlaceholder';

export default function UdyogaPramodaPage() {
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
            title="Udyoga Pramoda"
            role="End-to-End Product Designer"
            timeline="Live Production"
            tags={["EdTech", "Community Platform", "Web System"]}
        >
            <div className="max-w-[1100px] mx-auto space-y-24 md:space-y-32">

                {/* 1. Hero Section */}
                <motion.section initial="hidden" animate="visible" variants={sectionVariants} className="space-y-8 max-w-[720px]">
                    <h2 className="text-3xl md:text-4xl font-heading text-[var(--text-secondary)] italic">
                        Designing a Mentor-Gated Progression System
                    </h2>
                    <p className="text-xl text-[var(--text-tertiary)] pt-4 max-w-2xl">
                        Translating an informal mentorship culture into a structured, measurable operational system for 1,000+ users without increasing mentor burden.
                    </p>

                    <div className="flex flex-wrap gap-2 pt-6">
                        {["End-to-End Design", "Live Production", "Data-Driven Resign"].map((tag) => (
                            <span key={tag} className="px-3 py-1 bg-[var(--bg-surface)] border border-[var(--surface-border)] text-[var(--text-secondary)] text-xs rounded-full font-medium tracking-wide">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.section>

                <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                    <div className="w-full aspect-[21/9] md:aspect-[16/9] relative rounded-2xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--surface-border)] shadow-xl hidden md:flex items-center justify-center p-8">
                        <GlassImagePlaceholder label="Hero composite showing Redesigned Dashboards" className="w-[90%] h-[90%] opacity-50 mix-blend-luminosity hover:mix-blend-normal hover:opacity-100 transition-all duration-700" />
                    </div>
                </motion.div>

                {/* 2. Challenge & Role */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="max-w-[720px] space-y-12">
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl text-[var(--text-primary)] border-b border-[var(--surface-border)] pb-4 tracking-tight">The Context & Challenge</h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                            Udyoga Pramoda scaled from a small group to over 1,046 active users. While the mentorship was impactful, the manual operations—coordinated largely via WhatsApp—collapsed under the scale. The challenge was to structure this informal process into a scalable digital product without turning it into a bureaucratic burden for busy volunteer mentors.
                        </p>
                    </div>

                    <div className="bg-[var(--bg-surface)] border-l-4 border-[var(--accent-gold)] p-8 rounded-r-2xl my-10 shadow-sm">
                        <p className="font-serif text-2xl text-[var(--text-primary)] leading-tight mb-4">
                            The fragility of trust at scale.
                        </p>
                        <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                            The core operation relied on a high-trust model: mentors validating an aspirant&apos;s &quot;readiness&quot; before they applied for jobs. As numbers grew, this validation lived in siloed chat logs, and overall funnel visibility vanished.
                        </p>
                    </div>
                </motion.section>

                {/* 3. Discovery & MVP Audit */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="max-w-[720px] space-y-12">
                    <div className="space-y-6">
                        <h2 className="font-serif text-4xl text-[var(--text-primary)] border-b border-[var(--surface-border)] pb-4 tracking-tight">Auditing the MVP</h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                            Instead of starting from scratch, we analyzed data from the initial users and conducted a heuristic audit of a functional MVP shipped to solve immediate database needs.
                        </p>
                    </div>

                    <div className="space-y-10">
                        <div>
                            <p className="text-xs font-bold tracking-[0.12em] uppercase text-[var(--accent-gold)] mb-4">Insight 1: The Funnel Reality</p>
                            <ul className="space-y-3 font-medium text-[var(--text-primary)] pl-4 border-l border-[var(--surface-border)]">
                                <li className="flex items-center gap-3">150 <span className="font-normal text-[var(--text-secondary)]">Active Aspirants</span></li>
                                <li className="flex items-center gap-3">50 <span className="font-normal text-[var(--text-secondary)]">Mentor-validated as &quot;Job-Ready&quot;</span></li>
                                <li className="flex items-center gap-3 text-[var(--accent-gold)]">25+ <span className="font-normal text-[var(--text-secondary)]">Secured Placements</span></li>
                            </ul>
                            <p className="text-lg text-[var(--text-secondary)] leading-[1.8] mt-6">
                                This revealed a <strong className="text-[var(--text-primary)]">50% placement conversion rate</strong> from validated aspirants. The bottleneck wasn&apos;t placement matching—it was the operational friction of getting users validated.
                            </p>
                        </div>

                        <div>
                            <p className="text-xs font-bold tracking-[0.12em] uppercase text-[var(--accent-gold)] mb-4">Insight 2: Cognitive Overload</p>
                            <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                                The MVP functions as a database viewer rather than a guided journey. It stacked eight widgets with equal visual weight. Aspirants lacked &quot;visibility of system status&quot;—they could not see their current stage or the next required action.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 4. Strategy & Principles */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="space-y-12 max-w-[900px]">
                    <div className="border-b border-[var(--surface-border)] pb-8 mb-12">
                        <p className="text-xs font-bold tracking-[0.12em] uppercase text-[var(--accent-gold)] mb-6">The Pivot</p>
                        <p className="font-serif text-3xl md:text-5xl text-[var(--text-primary)] leading-[1.2] tracking-tight text-balance">
                            From a <em className="text-[var(--text-secondary)] not-italic line-through mr-2">Passive Content Platform</em> to an <em className="text-[var(--accent-gold)] not-italic">Active Progression System.</em>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {[
                            { title: "Respect Volunteer Capacity", desc: "Validation must be lightweight (one-click actions), not complex manual forms." },
                            { title: "Progression Over Options", desc: "Guide sequentially. Don't distract un-validated aspirants with jobs they aren't ready for." },
                            { title: "Unambiguous State", desc: "Strict visual indicators for status (Pending vs. Validated) to eliminate chaos." },
                            { title: "Build for the Stack", desc: "Design using atomic, reproducible components mapped directly to shadcn." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-3">
                                <span className="text-[var(--accent-gold)] font-bold text-sm tracking-widest uppercase">Rule 0{idx + 1}</span>
                                <h3 className="text-xl font-bold font-serif text-[var(--text-primary)]">{item.title}</h3>
                                <p className="text-[var(--text-secondary)] leading-[1.6]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 5. Execution (Images) */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="space-y-24 pt-16 border-t border-[var(--surface-border)]/50">
                    <div className="max-w-[720px] text-center mx-auto space-y-4">
                        <h2 className="font-serif text-4xl text-[var(--text-primary)] tracking-tight">Design Execution</h2>
                        <p className="text-lg text-[var(--text-secondary)]">Information Architecture & Dashboard Unification.</p>
                    </div>

                    {/* Stack 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        <div className="flex-1 space-y-6">
                            <h3 className="font-serif text-3xl text-[var(--text-primary)]">Restructuring Portals</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                                The ecosystem was split by user role: <strong className="text-[var(--text-primary)]">Aspirant Portal</strong> (Stage Tracker & Tasks), <strong className="text-[var(--text-primary)]">Mentor Portal</strong> (Roster & Validation Center), and <strong className="text-[var(--text-primary)]">Admin Portal</strong> (Funnel Analytics).
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-3xl p-8 md:p-12 flex justify-center items-center shadow-sm">
                            <div className="relative w-full aspect-square md:aspect-[4/3]">
                                <GlassImagePlaceholder label="Information Architecture Diagram" className="w-full h-full rounded-xl shadow-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Stack 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 border-t border-[var(--surface-border)]/50 pt-24">
                        <div className="flex-1 space-y-6">
                            <h3 className="font-serif text-3xl text-[var(--text-primary)]">The Journey-First Dashboard</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-[1.8]">
                                The new Aspirant Dashboard immediately orients the user to their current stage (e.g., &quot;Stage 2: Skill Building&quot;) and presents the primary &quot;Next Task&quot; above all other content. Content is gated to prevent premature applications.
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-3xl p-8 md:p-12 flex justify-center items-center shadow-sm">
                            <div className="relative w-full aspect-[16/9]">
                                <GlassImagePlaceholder label="MVP vs Redesign Comparison" className="w-full h-full rounded-xl shadow-lg" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 6. Results */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="max-w-[1100px] pt-24 border-t border-[var(--surface-border)] mt-24">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-4xl text-[var(--text-primary)] tracking-tight">Real World Impact</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10 p-8 md:p-16 rounded-[2rem] bg-[var(--text-primary)] text-[var(--bg-sage)] overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-gold)]/10 rounded-full blur-[80px]"></div>

                        <div className="space-y-4">
                            <span className="block text-5xl md:text-6xl font-black font-heading text-[var(--accent-gold)]">1k+</span>
                            <span className="text-xs font-bold uppercase tracking-widest block opacity-70">Active Users</span>
                            <p className="text-sm font-medium mt-2 leading-[1.6]">managed on the platform without friction</p>
                        </div>
                        <div className="space-y-4">
                            <span className="block text-5xl md:text-6xl font-black font-heading text-[var(--accent-gold)]">50%</span>
                            <span className="text-xs font-bold uppercase tracking-widest block opacity-70">Conversion</span>
                            <p className="text-sm font-medium mt-2 leading-[1.6]">for mentor-validated aspirants holding steady</p>
                        </div>
                        <div className="space-y-4">
                            <span className="block text-5xl md:text-6xl font-black font-heading text-[var(--accent-gold)]">25+</span>
                            <span className="text-xs font-bold uppercase tracking-widest block opacity-70">Placements</span>
                            <p className="text-sm font-medium mt-2 leading-[1.6]">successfully secured roles through the system</p>
                        </div>
                        <div className="space-y-4">
                            <span className="block text-5xl md:text-6xl font-black font-heading text-[var(--accent-gold)]">₹7.5L</span>
                            <span className="text-xs font-bold uppercase tracking-widest block opacity-70">Average Salary</span>
                            <p className="text-sm font-medium mt-2 leading-[1.6]">achieved across all verified placements</p>
                        </div>
                    </div>

                    <div className="max-w-[720px] mx-auto mt-24">
                        <p className="text-xl md:text-2xl font-serif text-[var(--text-primary)] leading-relaxed italic text-center">
                            &quot;This project reinforced that meaningful product design often isn&apos;t about inventing new features, but about designing the <strong className="text-[var(--accent-gold)]">governance structure</strong> that makes a complex system work.&quot;
                        </p>
                    </div>
                </motion.section>

                {/* Footer Spacer */}
                <div className="h-24"></div>
            </div>
        </CaseStudyTemplate>
    );
}
