"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import CaseStudyTemplate from '@/components/templates/CaseStudyTemplate';

export default function UdyogaPramodaPage() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 32 },
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
                    <h2 className="text-[1.953rem] md:text-[2.441rem] font-serif text-[var(--text-secondary)] italic leading-[1.2]">
                        Designing a Mentor-Gated Progression System
                    </h2>
                    <p className="text-[1.25rem] text-[var(--text-tertiary)] pt-8 max-w-2xl leading-[1.5] opacity-[0.87]">
                        Translating an informal mentorship culture into a structured, measurable operational system for 1,000+ users without increasing mentor burden.
                    </p>

                    <div className="flex flex-wrap gap-8 pt-8">
                        {["End-to-End Design", "Live Production", "Data-Driven Resign"].map((tag) => (
                            <span key={tag} className="px-4 py-2 bg-[var(--bg-surface)] border border-[var(--surface-border)] text-[var(--text-secondary)] text-[1rem] rounded-full font-medium tracking-wide shadow-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.section>

                <motion.div initial="hidden" animate="visible" variants={sectionVariants}>
                    <div className="w-full aspect-[21/9] md:aspect-[16/9] relative rounded-2xl overflow-hidden bg-[var(--bg-surface)] border border-[var(--surface-border)] shadow-xl hidden md:flex items-center justify-center p-8 bg-gradient-to-b from-[var(--bg-surface)] to-[var(--bg-surface-hover)]">
                        <div className="relative w-full h-full overflow-hidden rounded-xl border border-[var(--surface-border)] shadow-lg shadow-black/5">
                            <Image 
                                src="/images/Udyoga pramoda/Udyoga Pramoda Landing.png" 
                                alt="Hero composite showing Redesigned Dashboards" 
                                fill 
                                className="object-cover object-top" 
                                priority 
                            />
                            {/* Subtle noise overlay */}
                            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                        </div>
                    </div>
                </motion.div>

                {/* 2. Challenge & Role */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="max-w-[720px] space-y-16">
                    <div className="space-y-8">
                        <h2 className="font-serif text-[1.953rem] md:text-[2.441rem] text-[var(--text-primary)] border-b border-[var(--surface-border)] pb-8 tracking-tight leading-[1.1]">The Context & Challenge</h2>
                        <p className="text-[1.25rem] text-[var(--text-secondary)] leading-[1.5] opacity-[0.87]">
                            Udyoga Pramoda scaled from a small group to over 1,046 active users. While the mentorship was impactful, the manual operations—coordinated largely via WhatsApp—collapsed under the scale. The challenge was to structure this informal process into a scalable digital product without turning it into a bureaucratic burden for busy volunteer mentors.
                        </p>
                    </div>

                    <div className="bg-[var(--bg-surface)] border-l-4 border-[var(--accent-gold)] p-8 rounded-r-2xl my-16 shadow-sm relative overflow-hidden backdrop-blur-sm border-t border-r border-b border-[var(--surface-border)]">
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--bg-surface)] to-transparent opacity-50"></div>
                        <div className="relative z-10">
                            <p className="font-serif text-[1.563rem] text-[var(--text-primary)] leading-[1.2] mb-8">
                                The fragility of trust at scale.
                            </p>
                            <p className="text-[1rem] text-[var(--text-secondary)] leading-[1.5] opacity-[0.87]">
                                The core operation relied on a high-trust model: mentors validating an aspirant&apos;s &quot;readiness&quot; before they applied for jobs. As numbers grew, this validation lived in siloed chat logs, and overall funnel visibility vanished.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 3. Discovery & MVP Audit */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="max-w-[720px] space-y-16">
                    <div className="space-y-8">
                        <h2 className="font-serif text-[1.953rem] md:text-[2.441rem] text-[var(--text-primary)] border-b border-[var(--surface-border)] pb-8 tracking-tight leading-[1.1]">Auditing the MVP</h2>
                        <p className="text-[1.25rem] text-[var(--text-secondary)] leading-[1.5] opacity-[0.87]">
                            Instead of starting from scratch, we analyzed data from the initial users and conducted a heuristic audit of a functional MVP shipped to solve immediate database needs.
                        </p>
                    </div>

                    <div className="space-y-16">
                        <div className="space-y-8">
                            <p className="text-[1rem] font-bold tracking-[0.12em] uppercase text-[var(--accent-gold)]">Insight 1: The Funnel Reality</p>
                            <ul className="space-y-4 font-medium text-[var(--text-primary)] pl-8 border-l border-[var(--surface-border)]">
                                <li className="flex items-center gap-4 text-[1.25rem]">150 <span className="font-normal text-[var(--text-secondary)] opacity-[0.87]">Active Aspirants</span></li>
                                <li className="flex items-center gap-4 text-[1.25rem]">50 <span className="font-normal text-[var(--text-secondary)] opacity-[0.87]">Mentor-validated as &quot;Job-Ready&quot;</span></li>
                                <li className="flex items-center gap-4 text-[1.25rem] text-[var(--accent-gold)]">25+ <span className="font-normal text-[var(--text-secondary)] opacity-[0.87]">Secured Placements</span></li>
                            </ul>
                            <p className="text-[1rem] text-[var(--text-secondary)] leading-[1.5] opacity-[0.87]">
                                This revealed a <strong className="text-[var(--text-primary)] opacity-100">50% placement conversion rate</strong> from validated aspirants. The bottleneck wasn&apos;t placement matching—it was the operational friction of getting users validated.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <p className="text-[1rem] font-bold tracking-[0.12em] uppercase text-[var(--accent-gold)]">Insight 2: Cognitive Overload</p>
                            <p className="text-[1.25rem] text-[var(--text-secondary)] leading-[1.5] opacity-[0.87]">
                                The MVP functions as a database viewer rather than a guided journey. It stacked eight widgets with equal visual weight. Aspirants lacked &quot;visibility of system status&quot;—they could not see their current stage or the next required action.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 4. Strategy & Principles */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="space-y-16 max-w-[900px]">
                    <div className="border-b border-[var(--surface-border)] pb-8 mb-16">
                        <p className="text-[1rem] font-bold tracking-[0.12em] uppercase text-[var(--accent-gold)] mb-8">The Pivot</p>
                        <p className="font-serif text-[1.953rem] md:text-[3.052rem] text-[var(--text-primary)] leading-[1.1] tracking-tight text-balance">
                            From a <em className="text-[var(--text-secondary)] not-italic line-through mr-2">Passive Content Platform</em> to an <em className="text-[var(--accent-gold)] not-italic">Active Progression System.</em>
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {[
                            { title: "Respect Volunteer Capacity", desc: "Validation must be lightweight (one-click actions), not complex manual forms." },
                            { title: "Progression Over Options", desc: "Guide sequentially. Don't distract un-validated aspirants with jobs they aren't ready for." },
                            { title: "Unambiguous State", desc: "Strict visual indicators for status (Pending vs. Validated) to eliminate chaos." },
                            { title: "Build for the Stack", desc: "Design using atomic, reproducible components mapped directly to shadcn." }
                        ].map((item, idx) => (
                            <div key={idx} className="space-y-4">
                                <span className="text-[var(--accent-gold)] font-bold text-[1rem] tracking-widest uppercase mb-4 block opacity-[0.87]">Rule 0{idx + 1}</span>
                                <h3 className="text-[1.563rem] font-bold font-serif text-[var(--text-primary)] leading-[1.2]">{item.title}</h3>
                                <p className="text-[1rem] text-[var(--text-secondary)] leading-[1.5] opacity-[0.87]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 5. Execution (Images) */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="space-y-32 pt-16 border-t border-[var(--surface-border)]/50">
                    <div className="max-w-[720px] text-center mx-auto space-y-8">
                        <h2 className="font-serif text-[1.953rem] md:text-[2.441rem] text-[var(--text-primary)] tracking-tight leading-[1.1]">Design Execution</h2>
                        <p className="text-[1.25rem] text-[var(--text-secondary)] leading-[1.5] opacity-[0.87]">Information Architecture & Dashboard Unification.</p>
                    </div>

                    {/* Stack 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-16 md:gap-32">
                        <div className="flex-1 space-y-8">
                            <h3 className="font-serif text-[1.953rem] text-[var(--text-primary)] leading-[1.2]">Restructuring Portals</h3>
                            <p className="text-[1rem] text-[var(--text-secondary)] leading-[1.5] opacity-[0.87]">
                                The ecosystem was split by user role: <strong className="text-[var(--text-primary)] opacity-100">Aspirant Portal</strong> (Stage Tracker & Tasks), <strong className="text-[var(--text-primary)] opacity-100">Mentor Portal</strong> (Roster & Validation Center), and <strong className="text-[var(--text-primary)] opacity-100">Admin Portal</strong> (Funnel Analytics).
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-2xl p-8 flex justify-center items-center shadow-sm relative overflow-hidden backdrop-blur-md">
                            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg shadow-black/5 border border-[var(--surface-border)]">
                                <Image src="/images/Udyoga pramoda/Udyoga Pramoda Landing (Flow Step).png" alt="Information Architecture Flow" fill className="object-cover object-top" />
                            </div>
                        </div>
                    </div>

                    {/* Stack 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-16 md:gap-32 border-t border-[var(--surface-border)]/50 pt-24">
                        <div className="flex-1 space-y-8">
                            <h3 className="font-serif text-[1.953rem] text-[var(--text-primary)] leading-[1.2]">The Journey-First Dashboard</h3>
                            <p className="text-[1rem] text-[var(--text-secondary)] leading-[1.5] opacity-[0.87]">
                                The new Aspirant Dashboard immediately orients the user to their current stage (e.g., &quot;Stage 2: Skill Building&quot;) and presents the primary &quot;Next Task&quot; above all other content. Content is gated to prevent premature applications.
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-2xl p-8 flex justify-center items-center shadow-sm relative overflow-hidden backdrop-blur-md">
                            <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
                            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden shadow-lg shadow-black/5 border border-[var(--surface-border)]">
                                <Image src="/images/Udyoga pramoda/Udyoga Pramoda Landing (Flow Step) (1).png" alt="Journey-First Dashboard Flow" fill className="object-cover object-top" />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 6. Results */}
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={sectionVariants} className="max-w-[1100px] pt-32 border-t border-[var(--surface-border)] mt-32">
                    <div className="text-center mb-16">
                        <h2 className="font-serif text-[1.953rem] md:text-[2.441rem] text-[var(--text-primary)] tracking-tight leading-[1.1]">Real World Impact</h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-8 relative z-10 p-8 md:p-16 rounded-[2rem] bg-[var(--text-primary)] text-[var(--bg-sage)] overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-gold)]/10 rounded-full blur-[80px]"></div>

                        <div className="space-y-4">
                            <span className="block text-[2.441rem] md:text-[3.052rem] font-black font-heading text-[var(--accent-gold)] leading-[1.1]">1k+</span>
                            <span className="text-[1rem] font-bold uppercase tracking-widest block opacity-70">Active Users</span>
                            <p className="text-[1rem] font-medium mt-4 leading-[1.5] opacity-[0.87]">managed on the platform without friction</p>
                        </div>
                        <div className="space-y-4">
                            <span className="block text-[2.441rem] md:text-[3.052rem] font-black font-heading text-[var(--accent-gold)] leading-[1.1]">50%</span>
                            <span className="text-[1rem] font-bold uppercase tracking-widest block opacity-70">Conversion</span>
                            <p className="text-[1rem] font-medium mt-4 leading-[1.5] opacity-[0.87]">for mentor-validated aspirants holding steady</p>
                        </div>
                        <div className="space-y-4">
                            <span className="block text-[2.441rem] md:text-[3.052rem] font-black font-heading text-[var(--accent-gold)] leading-[1.1]">25+</span>
                            <span className="text-[1rem] font-bold uppercase tracking-widest block opacity-70">Placements</span>
                            <p className="text-[1rem] font-medium mt-4 leading-[1.5] opacity-[0.87]">successfully secured roles through the system</p>
                        </div>
                        <div className="space-y-4">
                            <span className="block text-[2.441rem] md:text-[3.052rem] font-black font-heading text-[var(--accent-gold)] leading-[1.1]">₹7.5L</span>
                            <span className="text-[1rem] font-bold uppercase tracking-widest block opacity-70">Average Salary</span>
                            <p className="text-[1rem] font-medium mt-4 leading-[1.5] opacity-[0.87]">achieved across all verified placements</p>
                        </div>
                    </div>

                    <div className="max-w-[720px] mx-auto mt-32">
                        <p className="text-[1.25rem] md:text-[1.563rem] font-serif text-[var(--text-primary)] leading-[1.5] italic text-center opacity-[0.87]">
                            &quot;This project reinforced that meaningful product design often isn&apos;t about inventing new features, but about designing the <strong className="text-[var(--accent-gold)] opacity-100">governance structure</strong> that makes a complex system work.&quot;
                        </p>
                    </div>
                </motion.section>

                {/* Footer Spacer */}
                <div className="h-32"></div>
            </div>
        </CaseStudyTemplate>
    );
}
