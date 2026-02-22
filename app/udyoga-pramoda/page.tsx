"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import CaseStudyTemplate from '@/components/templates/CaseStudyTemplate';
import GlassImagePlaceholder from '@/components/ui/GlassImagePlaceholder';

export default function UdyogaPramodaPage() {
    const shouldReduceMotion = useReducedMotion();

    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
            } as any
        }
    };

    return (
        <CaseStudyTemplate
            title="Udyoga Pramoda"
            role="End-to-End Product Designer"
            timeline="Live Production"
            tags={["EdTech", "Community Platform", "Web System"]}
        >
            <div className="space-y-24 md:space-y-32">

                {/* 1. Hero Section */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="space-y-8"
                >
                    <div className="space-y-4 max-w-4xl">
                        <h1 className="text-4xl md:text-6xl font-bold font-heading text-[#2D1B0D] leading-tight">
                            Udyoga Pramoda: Designing a Mentor-Gated Progression System
                        </h1>
                        <h2 className="text-xl md:text-2xl font-medium text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                            Translating an informal mentorship culture into a structured, measurable operational system for 1,000+ users without increasing mentor burden.
                        </h2>
                    </div>

                    <div className="mt-12 aspect-[16/9] md:aspect-[21/9] relative rounded-2xl overflow-hidden border border-[#2D1B0D]/10 shadow-lg bg-[#F5F5F5]">
                        <GlassImagePlaceholder
                            label="Hero composite showing the Redesigned Aspirant Dashboard, Mentor View, and Admin Funnel"
                            className="w-full h-full rounded-2xl"
                        />
                    </div>
                </motion.section>

                {/* 2. Overview */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-[#8B5E3C]">The Challenge</h3>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            Udyoga Pramoda, a community-led career initiative, scaled from a small group to over 1,046 active users. While the mentorship was impactful, the manual operations—coordinated largely via WhatsApp—collapsed under the scale. The challenge was to structure this informal process into a scalable digital product without turning it into a bureaucratic burden for busy volunteer mentors.
                        </p>
                    </div>
                    <div className="space-y-8 md:col-span-1">
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[#8B5E3C]">My Role</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                End-to-End Product Designer. I collaborated closely with an independent developer to audit live data, define the product strategy, create the information architecture, and design the final UI and design system.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-[#8B5E3C]">Tools & Stack</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Figma (UI & Design System), FigJam (IA & Flows), and collaboration with a developer using the shadcn component library.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 3. The Problem Space (Context) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="max-w-3xl space-y-8"
                >
                    <div className="border-b border-[#2D1B0D]/10 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#2D1B0D]">
                            The Problem Space (Context)
                        </h2>
                    </div>
                    <div className="space-y-6">
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            The initiative operated on a high-trust model: senior professionals volunteered their limited time outside of their full-time jobs to mentor aspirants. Only after a mentor explicitly validated an aspirant&apos;s &quot;readiness&quot; through tasks and workshops were they encouraged to apply for jobs.
                        </p>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            As participation hit 1,000+ users, this trust-based coordination broke down. There was no centralized view of readiness, validation lived in siloed chat logs, and administrators had zero visibility into the overall placement funnel. The system was fragile and unmeasurable.
                        </p>
                    </div>
                </motion.section>

                {/* 4. Discovery & Research (Auditing the Data) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="space-y-12"
                >
                    <div className="border-b border-[#2D1B0D]/10 pb-4 max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#2D1B0D]">
                            Discovery & Research
                        </h2>
                        <p className="text-xl text-[var(--text-secondary)] mt-4">Auditing the Data</p>
                    </div>

                    <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                        Instead of starting from scratch, we analyzed data from the initial users and conducted a heuristic audit of a functional MVP shipped to solve immediate database needs.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8">
                        {/* Insight 1 */}
                        <div className="bg-[#F5F5F5] border border-[#2D1B0D]/10 p-8 rounded-2xl space-y-6">
                            <h3 className="text-xl font-bold font-heading text-[#2D1B0D]">Key Insight 1: The Funnel Reality</h3>
                            <p className="text-[var(--text-secondary)]">Initial data revealed a stark pattern:</p>
                            <ul className="space-y-3 font-medium text-[#2D1B0D]">
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8B5E3C]"></span> <span className="font-bold">150</span> Active Aspirants</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8B5E3C]"></span> <span className="font-bold">50</span> Mentor-validated as &quot;Job-Ready&quot;</li>
                                <li className="flex items-center gap-3"><span className="w-2 h-2 rounded-full bg-[#8B5E3C]"></span> <span className="font-bold">25+</span> Secured Placements</li>
                            </ul>
                            <p className="text-[var(--text-secondary)] pt-4 border-t border-[#2D1B0D]/10">
                                This revealed a <strong className="text-[#2D1B0D]">50% placement conversion rate</strong> from validated aspirants. The bottleneck wasn&apos;t placement matching—it was the operational friction of getting users validated.
                            </p>
                        </div>

                        {/* Insight 2 */}
                        <div className="bg-white border border-[#2D1B0D]/10 p-8 rounded-2xl space-y-6 shadow-sm">
                            <h3 className="text-xl font-bold font-heading text-[#2D1B0D]">Key Insight 2: Heuristic Failure of the MVP</h3>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                An audit of the live MVP dashboard revealed it functioned as a database viewer rather than a guided journey. It stacked eight widgets (Jobs, Events, Mentors) with equal visual weight, causing cognitive overload.
                            </p>
                            <p className="text-[var(--text-secondary)] leading-relaxed">
                                Aspirants lacked &quot;visibility of system status&quot;—they could not see their current stage or the next required action to achieve validation.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 5. Defining the Problem & Strategy */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="max-w-4xl space-y-12"
                >
                    <div className="border-b border-[#2D1B0D]/10 pb-4">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#2D1B0D]">
                            Defining the Problem & Strategy
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-4 relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#ef4444] rounded-full"></div>
                            <h3 className="text-xl font-bold font-heading text-[#2D1B0D] pl-6">The Core Problem</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed pl-6">
                                The platform lacked structured progression. The open-access nature of the MVP overwhelmed aspirants with options rather than guiding them toward readiness validation.
                            </p>
                        </div>
                        <div className="space-y-4 relative">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#8B5E3C] rounded-full"></div>
                            <h3 className="text-xl font-bold font-heading text-[#2D1B0D] pl-6">The Strategy: Mentor-Gated Progression</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed pl-6">
                                We shifted from a passive content platform to an active progression system. Access to the final stage (the Job Board) was &quot;gated&quot; behind a mentor&apos;s approval click, ensuring readiness reflected demonstrated capability, not just self-reporting.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 6. Design Principles */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="space-y-12 bg-[#F5F5F5] -mx-5 md:-mx-[60px] px-5 md:px-[60px] py-20 rounded-3xl"
                >
                    <div className="max-w-4xl mx-auto space-y-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#2D1B0D] text-center">
                            Design Principles
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#2D1B0D]/10 shadow-sm space-y-3">
                                <span className="text-[#8B5E3C] font-bold font-heading text-xl">01</span>
                                <h3 className="text-lg font-bold text-[#2D1B0D]">Respect Volunteer Capacity</h3>
                                <p className="text-[var(--text-secondary)]">Busy professionals need efficiency. Validation must be lightweight (one-click actions), not complex forms.</p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#2D1B0D]/10 shadow-sm space-y-3">
                                <span className="text-[#8B5E3C] font-bold font-heading text-xl">02</span>
                                <h3 className="text-lg font-bold text-[#2D1B0D]">Progression Over Options</h3>
                                <p className="text-[var(--text-secondary)]">Guide the user sequentially. Don&apos;t distract un-validated aspirants with job postings they aren&apos;t ready for.</p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#2D1B0D]/10 shadow-sm space-y-3">
                                <span className="text-[#8B5E3C] font-bold font-heading text-xl">03</span>
                                <h3 className="text-lg font-bold text-[#2D1B0D]">Unambiguous System State</h3>
                                <p className="text-[var(--text-secondary)]">Use strict visual indicators for status (Pending vs. Validated) to eliminate coordination chaos.</p>
                            </div>
                            <div className="bg-white p-6 md:p-8 rounded-2xl border border-[#2D1B0D]/10 shadow-sm space-y-3">
                                <span className="text-[#8B5E3C] font-bold font-heading text-xl">04</span>
                                <h3 className="text-lg font-bold text-[#2D1B0D]">Build for the Stack</h3>
                                <p className="text-[var(--text-secondary)]">Design using atomic components that map cleanly to standard code libraries like <strong className="text-[#2D1B0D]">shadcn</strong>.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 7. Design Execution */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="space-y-24"
                >
                    <div className="border-b border-[#2D1B0D]/10 pb-4 max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#2D1B0D]">
                            Design Execution
                        </h2>
                    </div>

                    {/* IA */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl font-bold font-heading text-[#2D1B0D]">Information Architecture (IA)</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                We restructured the ecosystem into distinct portals based on the user&apos;s role:
                            </p>
                            <ul className="space-y-4">
                                <li className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    <strong className="text-[#2D1B0D]">Aspirant Portal:</strong> Focused on the <strong className="text-[#2D1B0D]">Current Stage Tracker</strong> and Assigned Tasks. The Job Board remains locked until validation.
                                </li>
                                <li className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    <strong className="text-[#2D1B0D]">Mentor Portal:</strong> A streamlined workspace focused on the <strong className="text-[#2D1B0D]">Aspirant Roster</strong> and a lightweight Validation Center.
                                </li>
                                <li className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                    <strong className="text-[#2D1B0D]">Admin Portal:</strong> Focused on high-level funnel analytics and capacity management.
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full bg-[#F5F5F5] rounded-2xl border border-[#2D1B0D]/10 p-6 aspect-square md:aspect-[4/3]">
                            <GlassImagePlaceholder
                                label="Information Architecture Diagram"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                    </div>

                    {/* Visual Design */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                        <div className="flex-1 w-full order-2 md:order-1 bg-[#F5F5F5] rounded-2xl border border-[#2D1B0D]/10 p-6 aspect-square md:aspect-[4/3]">
                            <GlassImagePlaceholder
                                label="Design System Components / Status Badges"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                        <div className="flex-1 space-y-6 order-1 md:order-2">
                            <h3 className="text-2xl font-bold font-heading text-[#2D1B0D]">Visual Design & System (Figma to Code)</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                I created a robust design system in Figma centered around status indicators (Pending, Submitted, Validated). The UI prioritized clarity over visual flair, using standard component patterns that allowed for fast, reliable development.
                            </p>
                        </div>
                    </div>

                    {/* Final UI */}
                    <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
                        <div className="flex-1 space-y-6">
                            <h3 className="text-2xl font-bold font-heading text-[#2D1B0D]">Final UI: The Redesigned Dashboards</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                The final designs focused on the journey. The new Aspirant Dashboard immediately orients the user to their current stage (e.g., &quot;Stage 2: Skill Building&quot;) and presents the primary &quot;Next Task&quot; above all other content.
                            </p>
                        </div>
                        <div className="flex-1 w-full bg-[#F5F5F5] rounded-2xl border border-[#2D1B0D]/10 p-6 aspect-[16/9]">
                            <GlassImagePlaceholder
                                label="Side-by-Side comparison of MVP Dashboard vs. Final Redesign"
                                className="w-full h-full rounded-xl"
                            />
                        </div>
                    </div>
                </motion.section>

                {/* 8. Results & Impact */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="max-w-5xl mx-auto space-y-12 border-t border-[#2D1B0D]/10 pt-20"
                >
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-[#2D1B0D]">
                            Results & Impact
                        </h2>
                    </div>

                    <div className="bg-white border border-[#2D1B0D]/10 shadow-sm rounded-3xl p-8 md:p-12 relative overflow-hidden mt-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
                            <div className="space-y-2">
                                <span className="block text-4xl md:text-5xl font-black font-heading text-[#2D1B0D]">1,046</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-[#8B5E3C]">Active Users</span>
                                <p className="text-xs text-[var(--text-tertiary)] mt-2">managed on the platform</p>
                            </div>
                            <div className="space-y-2">
                                <span className="block text-4xl md:text-5xl font-black font-heading text-[#2D1B0D]">50%</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-[#8B5E3C]">Conversion</span>
                                <p className="text-xs text-[var(--text-tertiary)] mt-2">for mentor-validated aspirants</p>
                            </div>
                            <div className="space-y-2">
                                <span className="block text-4xl md:text-5xl font-black font-heading text-[#2D1B0D]">25+</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-[#8B5E3C]">Placements</span>
                                <p className="text-xs text-[var(--text-tertiary)] mt-2">successfully secured roles</p>
                            </div>
                            <div className="space-y-2">
                                <span className="block text-4xl md:text-5xl font-black font-heading text-[#2D1B0D]">₹7.5</span>
                                <span className="text-sm font-bold uppercase tracking-widest text-[#8B5E3C]">LPA Avg Salary</span>
                                <p className="text-xs text-[var(--text-tertiary)] mt-2">achieved average</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 9. Reflection */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="max-w-4xl mx-auto space-y-8 pt-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-heading text-[#2D1B0D] text-center mb-8">
                        Reflection
                    </h2>
                    <div className="bg-[#FFF8F5] border-l-4 border-[#8B5E3C] p-8 md:p-10 rounded-r-2xl">
                        <p className="text-xl md:text-2xl font-heading text-[#2D1B0D] leading-relaxed italic">
                            &quot;This project reinforced that meaningful product design often isn&apos;t about inventing new features, but about designing the <strong className="text-[#8B5E3C]">governance structure</strong> that makes a complex system work. Success came from identifying the operational constraint—busy volunteer capacity—and designing a progression system that respected it.&quot;
                        </p>
                    </div>
                </motion.section>

                {/* Hard Stop Footer */}
                <div className="h-24 bg-[#F5F5F5] -mx-5 md:-mx-[60px] px-5 md:px-[60px] mt-24"></div>
            </div>
        </CaseStudyTemplate>
    );
}
