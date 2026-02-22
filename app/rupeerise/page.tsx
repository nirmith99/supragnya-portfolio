"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import CaseStudyTemplate from '@/components/templates/CaseStudyTemplate';

export default function RupeeRise() {
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
            title="RupeeRise"
            role="Lead Product Designer"
            timeline="14-Day Hackathon"
            tags={["Fintech", "Behavioral Design", "Mobile App"]}
        >
            <div className="space-y-24 md:space-y-32">

                {/* 1. Hero Section */}
                <motion.section
                    initial="hidden"
                    animate="visible"
                    variants={sectionVariants}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl font-bold font-heading text-[#2D1B0D]">
                            RupeeRise
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-heading text-[var(--text-secondary)]">
                            Master the Art of Spending and Saving.
                        </h2>
                        <p className="text-xl md:text-2xl text-[var(--text-tertiary)] max-w-2xl font-medium">
                            A Financial Decision Stability System for Young Earners.
                        </p>
                    </div>

                    {/* Constraint Tags */}
                    <div className="flex flex-wrap gap-3 pt-4">
                        {[
                            "14-Day Timeline",
                            "Alongside Full-Time Role",
                            "Remote Collaboration",
                            "Clickable Prototype Only",
                            "No Live Trading",
                            "No Demat Integration",
                            "No Compliance Layer"
                        ].map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 bg-[#F5F5F5] border border-[#2D1B0D]/10 text-[var(--text-secondary)] text-sm rounded-full font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Hero Image */}
                    <div className="mt-12 aspect-video relative rounded-2xl overflow-hidden border border-[#2D1B0D]/10 shadow-lg bg-[#F5F5F5] flex items-center justify-center">
                        <div className="relative w-full h-[80%] max-w-4xl mx-auto">
                            <Image
                                src="/images/rupeerise/SimulationLab.png"
                                alt="RupeeRise Simulation Lab Interface"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </motion.section>

                {/* 2. Context & Research */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="max-w-3xl space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold font-heading text-[#2D1B0D] border-b border-[#2D1B0D]/10 pb-4">
                            Context
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            The hackathon brief asked us to close financial literacy gaps among Millennials and Gen Z. It&apos;s a well-worn prompt—most teams would reach for it and build another learn-and-earn app. Before committing to a direction, I wanted to understand if literacy was actually the problem.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold font-heading text-[#2D1B0D]">
                            What the Research Actually Said
                        </h3>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            Informal interviews with 20-28 year olds didn&apos;t surface ignorance - they surfaced behavioral contradiction. These were people who could explain credit card interest, who&apos;d watched crypto crash documentaries, who knew the theory. And yet they were panic selling, trend-chasing, and misusing credit under pressure.
                        </p>
                    </div>

                    {/* Blockquote / Callout for Patterns */}
                    <div className="bg-[#F5F5F5] border-l-4 border-[#8B5E3C] p-6 rounded-r-xl">
                        <h4 className="font-bold text-[#2D1B0D] mb-3">Patterns Found:</h4>
                        <ul className="list-disc pl-5 space-y-2 text-[var(--text-secondary)]">
                            <li>Credit misuse despite knowing the math</li>
                            <li>Overconfidence after short-term wins</li>
                            <li>Trend-driven investing</li>
                            <li>Panic selling during volatility</li>
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            <strong className="text-[#2D1B0D]">Secondary Research:</strong> Financial awareness gaps persist - but awareness alone hasn&apos;t translated to behavioral change. 45%+ of fintech users are already under 30—<span className="text-[#2D1B0D] font-medium">access is not the problem.</span>
                        </p>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed border-t border-[#2D1B0D]/10 pt-6">
                            <strong className="text-[#2D1B0D]">Validation Data:</strong> ~60% of young earners showed interest in a structured stability system - not another literacy course. ~30% of mentors validated instability not ignorance as the real issue they saw repeatedly.
                        </p>
                    </div>
                </motion.section>

                {/* 3. Competitive Landscape (HTML Table) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="space-y-8"
                >
                    <h2 className="text-4xl font-bold font-heading text-[#2D1B0D] border-b border-[#2D1B0D]/10 pb-4">
                        Competitive Landscape
                    </h2>
                    <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                        Mapping the existing landscape confirmed the behavioral gap wasn&apos;t being addressed anywhere.
                    </p>

                    <div className="w-full overflow-x-auto border border-[#2D1B0D]/10 rounded-xl shadow-sm">
                        <table className="w-full text-left border-collapse min-w-[800px]">
                            <thead>
                                <tr className="bg-[#F5F5F5] border-b border-[#2D1B0D]/10">
                                    <th className="p-4 font-bold text-[#2D1B0D]">Features</th>
                                    <th className="p-4 font-medium text-[var(--text-secondary)]">StockGro</th>
                                    <th className="p-4 font-medium text-[var(--text-secondary)]">CRED</th>
                                    <th className="p-4 font-medium text-[var(--text-secondary)]">Jupiter / Fi</th>
                                    <th className="p-4 font-medium text-[var(--text-secondary)]">Jar</th>
                                    <th className="p-4 font-bold text-[#8B5E3C] bg-white border-l border-r border-[#2D1B0D]/10">RupeeRise</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-[#2D1B0D]/10 bg-white">
                                {[
                                    { feature: "Market simulation", stockgro: "✓", cred: "-", jupiter: "-", jar: "-", rupee: "✓" },
                                    { feature: "Spending Insights", stockgro: "-", cred: "-", jupiter: "✓", jar: "-", rupee: "✓" },
                                    { feature: "Behavioral gating", stockgro: "-", cred: "-", jupiter: "-", jar: "-", rupee: "✓" },
                                    { feature: "Stability score", stockgro: "-", cred: "-", jupiter: "-", jar: "-", rupee: "✓" },
                                    { feature: "Staged exposure", stockgro: "-", cred: "-", jupiter: "-", jar: "-", rupee: "✓" },
                                    { feature: "No profit incentive", stockgro: "-", cred: "-", jupiter: "-", jar: "-", rupee: "✓" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="p-4 font-medium text-[#2D1B0D]">{row.feature}</td>
                                        <td className="p-4 text-[var(--text-tertiary)]">{row.stockgro}</td>
                                        <td className="p-4 text-[var(--text-tertiary)]">{row.cred}</td>
                                        <td className="p-4 text-[var(--text-tertiary)]">{row.jupiter}</td>
                                        <td className="p-4 text-[var(--text-tertiary)]">{row.jar}</td>
                                        <td className="p-4 font-bold text-[#8B5E3C] border-l border-r border-[#2D1B0D]/10">{row.rupee}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-[#F5F5F5] p-6 rounded-xl border border-[#2D1B0D]/10 mt-6 max-w-3xl">
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed font-medium">
                            <strong className="text-[#2D1B0D]">Synthesis:</strong> Access to financial tools has increased faster than the behavioral maturity to use them safely. No existing platform was designed to close that gap. The problem was never knowledge—<span className="text-[#8B5E3C] italic">it was decision stability under pressure.</span>
                        </p>
                    </div>
                </motion.section>

                {/* 4. The Hackathon Reality (Before Section) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="space-y-8"
                >
                    <h3 className="text-2xl font-bold font-heading text-[#2D1B0D]">
                        The V1: What we shipped in 14 days
                    </h3>
                    <p className="text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                        To meet the sprint deadline, we shipped a standard interface. While it functioned, the architecture treated education and execution as separate domains.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 grayscale-[50%] hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100">
                        {['Homepage.png', 'Education 2.png', 'Education.png', 'Fin Shots.jpg'].map((img, i) => (
                            <div key={i} className="aspect-[9/16] bg-[#F5F5F5] rounded-lg border border-[#2D1B0D]/10 overflow-hidden relative shadow-sm">
                                <Image
                                    src={`/images/rupeerise/${img}`}
                                    alt={`V1 Iteration ${img}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </motion.section>

                {/* 5. Problem Reframe & Hypothesis */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="max-w-3xl space-y-10"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold font-heading text-[#2D1B0D] border-b border-[#2D1B0D]/10 pb-4">
                            Reframing the Problem
                        </h2>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            The research made one thing clear: building another literacy product would miss the actual failure point. So I reframed the brief entirely.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white border border-[#2D1B0D]/10 p-8 rounded-2xl shadow-sm">
                            <h3 className="text-sm uppercase tracking-widest text-[#8B5E3C] font-bold mb-4">The New HMW</h3>
                            <p className="text-2xl md:text-3xl font-heading text-[#2D1B0D] leading-snug">
                                &quot;How might we build financial decision stability in high-access financial environments?&quot;
                            </p>
                        </div>
                        <div className="pl-6 border-l-4 border-[#2D1B0D]/10">
                            <h3 className="text-sm uppercase tracking-widest text-[#2D1B0D] font-bold mb-2">Hypothesis</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed italic">
                                If financial exposure is staged based on demonstrated behavioral stability, reactive financial decisions and long-term financial damage can be reduced—even in environments where access to capital and trading tools is frictionless.
                            </p>
                        </div>
                    </div>

                    {/* Known Tension Callout Box */}
                    <div className="bg-[#FFF8F5] border border-[#8B5E3C]/20 p-6 md:p-8 rounded-xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#8B5E3C]"></div>
                        <h4 className="font-bold text-[#8B5E3C] mb-3 flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m11.5 15 3.5-3.5" /><path d="m22 2-3 3" /><path d="m5 16-3 3" /><path d="m5 3-3 3" /><path d="m14 19 3 3" /><path d="m19 14 3 3" /><path d="m11.16 7.66-2.5-2.5a2 2 0 0 0-2.83 2.83l2.5 2.5" /><path d="M12.83 16.34l2.5 2.5a2 2 0 0 0 2.83-2.83l-2.5-2.5" /></svg>
                            Known Tension
                        </h4>
                        <p className="text-[var(--text-secondary)] leading-relaxed">
                            A behaviorally stable user facing a genuine emergency (medical, financial crisis) could be locked out of their own capital by the gating model. The system would need an override mechanism for verified life events. <span className="font-medium text-[#2D1B0D]">This edge case was identified but not solved within the hackathon scope.</span>
                        </p>
                    </div>
                </motion.section>

                {/* 6. The System & Key Decisions */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="max-w-4xl space-y-12"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold font-heading text-[#2D1B0D] border-b border-[#2D1B0D]/10 pb-4">
                            The System
                        </h2>
                        <p className="text-xl text-[var(--text-secondary)] leading-relaxed font-medium">
                            RupeeRise is built around one number: the <strong className="text-[#8B5E3C]">Stability Score (0-100)</strong>. Everything feeds into it. Nothing is isolated.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[#F5F5F5] border border-[#2D1B0D]/10 p-6 rounded-xl">
                            <h4 className="font-bold text-[#2D1B0D] mb-1">Volatility Reaction Index</h4>
                            <p className="text-sm text-[var(--text-secondary)]">Do you sell when markets dip?</p>
                        </div>
                        <div className="bg-[#F5F5F5] border border-[#2D1B0D]/10 p-6 rounded-xl">
                            <h4 className="font-bold text-[#2D1B0D] mb-1">Trade Consistency</h4>
                            <p className="text-sm text-[var(--text-secondary)]">Are your decisions predictable over time?</p>
                        </div>
                        <div className="bg-[#F5F5F5] border border-[#2D1B0D]/10 p-6 rounded-xl">
                            <h4 className="font-bold text-[#2D1B0D] mb-1">Capital Discipline Score</h4>
                            <p className="text-sm text-[var(--text-secondary)]">Do you meet EMIs, avoid credit overuse?</p>
                        </div>
                        <div className="bg-[#F5F5F5] border border-[#2D1B0D]/10 p-6 rounded-xl">
                            <h4 className="font-bold text-[#2D1B0D] mb-1">Diversification Health</h4>
                            <p className="text-sm text-[var(--text-secondary)]">Are you concentrated in one bet?</p>
                        </div>
                    </div>

                    <div className="space-y-8 pt-8 border-t border-[#2D1B0D]/10">
                        <h3 className="text-2xl font-bold font-heading text-[#2D1B0D]">
                            Key Design Decisions
                        </h3>

                        <div className="space-y-6 pl-4 md:pl-8 border-l border-[#2D1B0D]/10">
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                <strong className="text-[#2D1B0D]">Profit is intentionally excluded from the Stability Score.</strong> Rewarding profit would directly contradict the behavioral thesis—a lucky user could score well and earn exposure they haven&apos;t behaviorally demonstrated.
                            </p>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                <strong className="text-[#2D1B0D]">We chose exposure gating over education-first.</strong> Research showed knowledge alone doesn&apos;t change decisions under pressure—the system had to make access conditional on demonstrated stability.
                            </p>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                <strong className="text-[#2D1B0D]">No auto-liquidation.</strong> Forced selling punishes users during volatility—exactly when behavioral support is needed most. New exposure is throttled instead; real capital is never force-sold.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* 7. Core Modules (Strict Zigzag Layout) */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="space-y-24 pt-12"
                >
                    <div className="border-b border-[#2D1B0D]/10 pb-6 text-center max-w-2xl mx-auto">
                        <h2 className="text-4xl font-bold font-heading text-[#2D1B0D]">Core Modules</h2>
                        <p className="text-[var(--text-tertiary)] mt-4 text-lg">The architecture guiding stability.</p>
                    </div>

                    {/* Row 1: Foundation (Text Left, Image Right) */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        <div className="flex-1 space-y-6 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] border border-[#2D1B0D]/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
                                Module 1
                            </div>
                            <h3 className="text-3xl font-bold font-heading text-[#2D1B0D] leading-tight">
                                Foundation
                            </h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Before any investing—emergency fund, credit utilization, debt-to-income, cashflow structure. Credit misuse directly dents the Stability Score. Daily financial behavior is investment readiness.
                            </p>
                        </div>
                        <div className="flex-1 w-full order-1 md:order-2 bg-[#F5F5F5] rounded-2xl border border-[#2D1B0D]/10 p-6 flex items-center justify-center">
                            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[400px] shadow-2xl rounded-xl overflow-hidden">
                                <Image
                                    src="/images/rupeerise/FoundationLayer.png"
                                    alt="Foundation Layer Interface"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Simulation Lab (Image Left, Text Right) */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        <div className="flex-1 w-full order-1 bg-[#F5F5F5] rounded-2xl border border-[#2D1B0D]/10 p-6 flex items-center justify-center">
                            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[400px] shadow-2xl rounded-xl overflow-hidden">
                                <Image
                                    src="/images/rupeerise/SimulationLab.png"
                                    alt="Simulation Lab Interface"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6 order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] border border-[#2D1B0D]/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
                                Module 2
                            </div>
                            <h3 className="text-3xl font-bold font-heading text-[#2D1B0D] leading-tight">
                                Simulation Lab <span className="text-[var(--text-tertiary)] font-normal ml-2 text-2xl">(0-90%)</span>
                            </h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Historical volatility scenarios-2008 crash, 2017 crypto hype, pandemic dips. Every decision flows through: context &rarr; asset grid &rarr; thesis log &rarr; stability impact feedback. No live trading, no real money.
                            </p>
                        </div>
                    </div>

                    {/* Row 3: Informative Friction (Text Left, Image Right) */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        <div className="flex-1 space-y-6 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] border border-[#2D1B0D]/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
                                Module 3
                            </div>
                            <h3 className="text-3xl font-bold font-heading text-[#2D1B0D] leading-tight">
                                Informative Friction
                            </h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                When a Tier 1 user attempts an action beyond their cap, the UI doesn&apos;t show a dead-end. It shows how far away they are from unlocking, what specific behaviors are holding their score back, and a direct path to improve. The friction is informative, not punitive.
                            </p>
                        </div>
                        <div className="flex-1 w-full order-1 md:order-2 bg-[#F5F5F5] rounded-2xl border border-[#2D1B0D]/10 p-6 flex items-center justify-center">
                            <div className="relative w-full aspect-[9/16] md:aspect-[3/4] max-w-[320px] shadow-2xl rounded-xl overflow-hidden">
                                <Image
                                    src="/images/rupeerise/TierDowngradeModal.png"
                                    alt="Tier Downgrade Modal"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Insights & Mentorship (Image Left, Text Right) */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        <div className="flex-1 w-full order-1 bg-[#F5F5F5] rounded-2xl border border-[#2D1B0D]/10 p-6 flex items-center justify-center relative overflow-hidden h-[500px]">
                            {/* Stacked Images Effect */}
                            <div className="absolute top-8 left-8 w-[250px] aspect-[9/16] shadow-xl rounded-xl overflow-hidden border border-[#2D1B0D]/10 -rotate-6 z-10 transition-transform hover:z-30 hover:rotate-0 duration-500">
                                <Image
                                    src="/images/rupeerise/InsightsJournal.png"
                                    alt="Insights Journal Background"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="absolute top-20 right-8 w-[250px] aspect-[9/16] shadow-2xl rounded-xl overflow-hidden border border-[#2D1B0D]/10 rotate-3 z-20 transition-transform hover:z-30 hover:rotate-0 duration-500">
                                <Image
                                    src="/images/rupeerise/MentorshipHub.png"
                                    alt="Mentorship Hub Foreground"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex-1 space-y-6 order-2">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] border border-[#2D1B0D]/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
                                Module 4
                            </div>
                            <h3 className="text-3xl font-bold font-heading text-[#2D1B0D] leading-tight">
                                Insights & Mentorship
                            </h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Free Journal Mode builds macro awareness. Premium Applied Risk Intelligence connects live signals to a user&apos;s own exposure history contextualizing risk before they act on it. Mentorship is not a marketplace. Structured reinforcement covering credit, debt, allocation, and economic cycle planning. Users must complete a reflection before booking—<span className="italic">Intentional friction.</span>
                            </p>
                        </div>
                    </div>

                    {/* Row 5: Real Exposure Mode (Text Left, Image Right) */}
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                        <div className="flex-1 space-y-6 order-2 md:order-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5F5F5] border border-[#2D1B0D]/10 rounded-full text-xs font-bold uppercase tracking-widest text-[#8B5E3C]">
                                Module 5
                            </div>
                            <h3 className="text-3xl font-bold font-heading text-[#2D1B0D] leading-tight">
                                Real Exposure Mode
                            </h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Unlocks post 90% Stability + Tier eligibility. Premium only. Same behavioral principles from simulation now with real capital behind them.
                            </p>
                        </div>
                        <div className="flex-1 w-full order-1 md:order-2 bg-[#F5F5F5] rounded-2xl border border-[#2D1B0D]/10 p-6 flex items-center justify-center">
                            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-[400px] shadow-2xl rounded-xl overflow-hidden">
                                <Image
                                    src="/images/rupeerise/PremiumSimulation.png"
                                    alt="Premium Simulation / Real Exposure Mode"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 8. Outcome & What I'd Do Differently */}
                <motion.section
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={sectionVariants}
                    className="max-w-4xl space-y-12 border-t border-[#2D1B0D]/10 pt-20"
                >
                    <h2 className="text-4xl font-bold font-heading text-[#2D1B0D]">
                        Outcome & What I&apos;d Do Differently
                    </h2>

                    <div className="bg-white border border-[#2D1B0D]/10 shadow-sm rounded-2xl p-8 md:p-12 relative overflow-hidden">
                        <div className="absolute -top-10 -left-6 text-[180px] text-[#2D1B0D]/5 font-heading leading-none selection:bg-transparent">
                            &quot;
                        </div>
                        <p className="relative z-10 text-2xl md:text-3xl font-heading text-[#2D1B0D] leading-relaxed italic">
                            Market-ready concept - requires security hardening before production.
                        </p>
                        <p className="relative z-10 mt-6 font-bold text-[#8B5E3C] uppercase tracking-widest text-sm">— Jury Feedback</p>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold font-heading text-[#2D1B0D]">What I learned:</h3>
                        <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                            The shift from &quot;how do we teach people about money&quot; to &quot;how do we structurally reduce behavioral damage&quot; is not a small pivot. It changed the entire design model - from content delivery to behavioral gating. <strong className="text-[#2D1B0D]">That reframe was the most important decision we made</strong>, and it only happened because we spent time in research before opening Figma.
                        </p>
                    </div>

                    <div className="bg-[#F5F5F5] border border-[#2D1B0D]/10 p-8 rounded-2xl space-y-6">
                        <h3 className="text-xl font-bold font-heading text-[#2D1B0D] flex items-center gap-3">
                            <span className="w-8 h-8 rounded-full bg-[#8B5E3C] text-white flex items-center justify-center text-sm font-sans">!</span>
                            Future Scope
                        </h3>
                        <ul className="space-y-4 text-lg text-[var(--text-secondary)]">
                            <li className="flex gap-3">
                                <span className="text-[#8B5E3C]">&rarr;</span>
                                Calibrate score with real behavioral data.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#8B5E3C]">&rarr;</span>
                                Validate severity thresholds via beta.
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#8B5E3C]">&rarr;</span>
                                Design for the edge case: stable user, urgent capital need.
                            </li>
                        </ul>
                    </div>
                </motion.section>

                {/* Hard Stop Footer */}
                <div className="h-24 bg-[#F5F5F5] -mx-5 md:-mx-[60px] px-5 md:px-[60px] mt-24"></div>
            </div>
        </CaseStudyTemplate>
    );
}
