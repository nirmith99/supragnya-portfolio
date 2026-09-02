"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import { PhoneMockup } from "@/components/ui/mockups";
import { 
    ArrowRight, 
    CheckCircle2, 
    AlertTriangle, 
    Layers, 
    BookOpen, 
    Activity, 
    SlidersHorizontal, 
    Compass, 
    TrendingUp, 
    XCircle,
    UserCheck,
    Cpu,
    HelpCircle,
    RotateCcw,
    Shield,
    Target,
    Zap,
    Lock,
    Users,
    ChevronRight,
    Brain,
    Scale,
    FileText
} from "lucide-react";

export default function RupeeRisePage() {
    const fadeUp = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } as any
        }
    };

    return (
        <CaseStudyTemplate
            title="RupeeRise"
            role="Lead Product Designer"
            timeline="14-Day Hackathon + Later Portfolio Redesign"
            tags={["Fintech", "Behavioral Finance", "Mobile App", "Decision Systems"]}
            hideDefaultHero={true}
        >
            <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 md:px-10 space-y-20 md:space-y-28 pb-24">
                
                {/* Sticky Progress Bar Subheader */}
                <div className="sticky top-20 z-40 bg-[var(--bg-primary)]/80 backdrop-blur-md border-y border-[var(--surface-border)] py-2.5 px-4 flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)] shadow-sm">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <strong className="text-[var(--text-primary)]">RupeeRise Case Study</strong>
                        <span className="hidden sm:inline">· V1 shipped MVP · V2 conceptual redesign</span>
                    </span>
                    <span>Read time ~9 min</span>
                </div>

                {/* ========================================================================= */}
                {/* 1. HERO — CONTINUOUS STORY OPENING                                        */}
                {/* ========================================================================= */}
                <motion.section
                    id="hero"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="relative pt-4 md:pt-8"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        {/* Text Column */}
                        <div className="lg:col-span-5 space-y-5">
                            <div className="inline-flex items-center gap-3">
                                <span className="h-px w-6 bg-[var(--accent-gold)]" />
                                <span className="text-[var(--accent-gold)] font-sans text-xs md:text-sm tracking-widest uppercase font-bold">
                                    Case Study · Behavioral Fintech
                                </span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight font-serif leading-[1.05]">
                                Turning financial knowledge into <em className="italic text-emerald-400 font-serif font-normal">better decisions.</em>
                            </h1>
                            
                            <p className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-[1.3] italic font-normal">
                                RupeeRise began as a financial-literacy hackathon project. The jury&apos;s question — why would someone come back? — is what turned it into a system built around behavior, not returns.
                            </p>

                            <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-[var(--surface-border)] font-mono text-xs text-[var(--text-secondary)] space-y-1">
                                <span className="text-[var(--accent-gold)] font-bold block">PROJECT SUMMARY</span>
                                <p>Lead Product Designer · 2 people (1 Designer + 1 Developer) · 14-day hackathon (~4 days build time) · V1 shipped, V2 conceptual</p>
                            </div>
                        </div>

                        {/* Dual Overlapping Phones Visual */}
                        <div className="lg:col-span-7 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[560px] flex items-center justify-center py-2">
                                <div className="relative z-20 w-[52%] max-w-[290px] transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                                    <PhoneMockup className="max-w-none w-full">
                                        <img 
                                            src="/images/Rupeerise/dashboard.png" 
                                            alt="RupeeRise Behavioral Finance Dashboard" 
                                            className="w-full h-auto block" 
                                        />
                                    </PhoneMockup>
                                    <p className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-2.5">
                                        Stability Score &amp; Decision Hub
                                    </p>
                                </div>

                                <div className="relative z-10 w-[48%] max-w-[270px] -ml-[12%] transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl opacity-90 hover:opacity-100">
                                    <PhoneMockup className="max-w-none w-full">
                                        <img 
                                            src="/images/Rupeerise/insights.png" 
                                            alt="RupeeRise Behavioral Insights Screen" 
                                            className="w-full h-auto block" 
                                        />
                                    </PhoneMockup>
                                    <p className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-2.5">
                                        Behavioral Pattern Insights
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Meta Grid */}
                    <div className="mt-12 pt-6 border-t border-[var(--surface-border)]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-6 text-xs md:text-sm font-sans">
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Role</span>
                                <span className="text-[var(--text-primary)] font-medium block">Lead Product Designer</span>
                                <span className="text-xs text-[var(--text-tertiary)] block mt-0.5">Research, strategy, UX/UI, prototyping</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Timeline</span>
                                <span className="text-[var(--text-secondary)] block">14-day hackathon</span>
                                <span className="text-xs text-[var(--text-tertiary)] block mt-0.5">~4 days build time, alongside work</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Team</span>
                                <span className="text-[var(--text-secondary)] block">1 Designer + 1 Developer</span>
                                <span className="text-xs text-[var(--text-tertiary)] block mt-0.5">Functional MVP shipped</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Platform</span>
                                <span className="text-[var(--text-secondary)] block">Mobile application</span>
                                <span className="text-xs text-[var(--text-tertiary)] block mt-0.5">Gen Z / Millennial investors</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Research</span>
                                <span className="text-[var(--text-secondary)] block">~10 interviews</span>
                                <span className="text-xs text-[var(--text-tertiary)] block mt-0.5">Exploratory &amp; directional</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Status</span>
                                <span className="text-[var(--text-primary)] font-medium block text-amber-400">V1 shipped, V2 conceptual</span>
                                <span className="text-xs text-[var(--text-tertiary)] block mt-0.5">V2 UI not in hackathon build</span>
                            </div>
                        </div>
                    </div>

                    {/* Signature Decision A/B Comparison Ledger */}
                    <div className="mt-12 p-6 md:p-8 rounded-2xl bg-[var(--bg-sage)]/60 border border-[var(--surface-border)] shadow-xl space-y-6">
                        <div className="text-center max-w-xl mx-auto space-y-1">
                            <span className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-widest font-bold">
                                SIGNATURE DECISION LEDGER
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                RupeeRise is built to tell these two apart
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            {/* Decision A: Looks like winning */}
                            <div className="p-5 rounded-xl bg-red-950/20 border border-red-500/30 space-y-3">
                                <div className="flex items-center justify-between border-b border-red-500/20 pb-2">
                                    <span className="font-mono text-xs text-red-400 font-bold uppercase tracking-wider">DECISION A</span>
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-300 font-mono font-semibold">Looks like winning</span>
                                </div>
                                <div className="space-y-2 text-sm font-sans">
                                    <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Return:</span> <strong className="text-emerald-400 font-mono">+20%</strong></div>
                                    <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Risk Profile:</span> <span className="text-[var(--text-primary)] font-mono">High concentration</span></div>
                                    <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Thesis:</span> <span className="text-red-300 italic">Weak (&ldquo;Feeling lucky&rdquo;)</span></div>
                                    <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Behavior:</span> <span className="text-red-400 font-mono">Reactive / Impulse</span></div>
                                </div>
                                <div className="pt-2 border-t border-red-500/20 text-xs text-red-300 font-mono">
                                    Verdict: A return-based score ranks this higher. It may just be lucky.
                                </div>
                            </div>

                            {/* Decision B: Is actually disciplined */}
                            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
                                <div className="flex items-center justify-between border-b border-emerald-500/20 pb-2">
                                    <span className="font-mono text-xs text-emerald-400 font-bold uppercase tracking-wider">DECISION B</span>
                                    <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-mono font-semibold">Is actually disciplined</span>
                                </div>
                                <div className="space-y-2 text-sm font-sans">
                                    <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Return:</span> <strong className="text-red-400 font-mono">-3%</strong></div>
                                    <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Risk Profile:</span> <span className="text-[var(--text-primary)] font-mono">Defined / Hedged</span></div>
                                    <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Thesis:</span> <span className="text-emerald-300 italic">Clear (&ldquo;Earnings catalyst&rdquo;)</span></div>
                                    <div className="flex justify-between"><span className="text-[var(--text-tertiary)]">Behavior:</span> <span className="text-emerald-400 font-mono">Disciplined / Planned</span></div>
                                </div>
                                <div className="pt-2 border-t border-emerald-500/20 text-xs text-emerald-300 font-mono">
                                    Verdict: The Stability Score ranks this higher. Outcome isn&apos;t the input — behavior is.
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 2. THE STARTING POINT & RESEARCH                                          */}
                {/* ========================================================================= */}
                <motion.section 
                    id="start" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-10 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        {/* Starting Point */}
                        <div className="lg:col-span-5 space-y-4">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                01 — THE STARTING POINT
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                The original assumption was the obvious one
                            </h2>
                            <div className="space-y-3 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    The hackathon brief was financial literacy. The working theory: if people understood money, investing, or financial instruments better, they&apos;d make better decisions.
                                </p>
                                <p>
                                    So V1 focused on learning and managing money — education, budgeting, savings, investing, market information, mentorship, and quizzes.
                                </p>
                                <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-[var(--surface-border)] font-mono text-xs text-[var(--text-primary)]">
                                    V1 Flow: Learn → Manage → Invest → Get guidance
                                </div>
                            </div>
                        </div>

                        {/* Research Synthesis */}
                        <div id="research" className="lg:col-span-7 space-y-5 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed lg:border-l lg:border-[var(--surface-border)] lg:pl-12">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                02 — RESEARCH SYNTHESIS
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Two directional signals, from ten conversations
                            </h2>
                            <p className="text-sm text-[var(--text-tertiary)]">
                                ~10 informal 1:1 interviews with Gen Z and Millennials, in person at a café. Some were already investing, some knew about investing, some were actively trading. Unrecorded and exploratory — treated as directional, not representative.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-2">
                                <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                                    <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">
                                        ≥6 OF 10 PARTICIPANTS
                                    </span>
                                    <h3 className="font-serif text-lg text-[var(--text-primary)]">Information was already everywhere</h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        Finfluencer content left people with partial, fragmented knowledge — while they were still trying to make real decisions.
                                    </p>
                                </div>

                                <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                                    <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider block">
                                        ≥4 OF 10 PARTICIPANTS
                                    </span>
                                    <h3 className="font-serif text-lg text-[var(--text-primary)]">Deciding was still hard</h3>
                                    <p className="text-[var(--text-secondary)] leading-relaxed">
                                        Struggles with FOMO, overtrading, difficulty judging risk. Knowing something about investing and making a stable decision in the moment are two different problems.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 3. THE TURNING POINT & REFRAMING                                          */}
                {/* ========================================================================= */}
                <motion.section 
                    id="jury" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-10 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                03 — THE TURNING POINT
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                The jury asked the question that mattered most
                            </h2>
                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                V1 shipped as a functional MVP — rudimentary UI, AI-generated finance quizzes, presented to the hackathon jury. Feedback was positive. They saw potential. But they raised one hard question:
                            </p>
                            
                            <div className="p-6 rounded-2xl bg-[var(--bg-sage)] border-l-4 border-[var(--accent-gold)] space-y-2">
                                <blockquote className="font-serif text-2xl text-[var(--text-primary)] italic">
                                    &ldquo;Why would someone come back?&rdquo;
                                </blockquote>
                                <p className="font-sans text-sm text-[var(--text-secondary)]">
                                    One-time quiz completion isn&apos;t a reason to return. That question — not a redesign brief — is what sent me back to the interview data.
                                </p>
                            </div>
                        </div>

                        {/* Reframing */}
                        <div id="reframe" className="lg:col-span-6 space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed lg:border-l lg:border-[var(--surface-border)] lg:pl-10">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                04 — REFRAMING THE PROBLEM
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Knowing isn&apos;t the same as applying
                            </h2>
                            <p>
                                Knowing what a stock, mutual fund, or credit card is doesn&apos;t mean someone can apply that knowledge when making a real decision. I didn&apos;t replace the financial-literacy problem — I extended it:
                            </p>

                            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300 font-serif text-xl italic">
                                &ldquo;How might RupeeRise help people turn financial knowledge into more deliberate financial decisions?&rdquo;
                            </div>

                            <p className="font-mono text-xs md:text-sm text-[var(--text-primary)] bg-[var(--bg-sage)] p-3 rounded-lg border border-[var(--surface-border)]">
                                Reframed System: Learn → Understand → Simulate → Decide → Reflect
                            </p>
                        </div>
                    </div>

                    {/* Target Audience Experience Bands */}
                    <div id="ages" className="pt-8 border-t border-[var(--surface-border)] space-y-6">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                05 — TARGET AUDIENCE
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                The need changes with experience
                            </h3>
                            <p className="font-sans text-sm md:text-base text-[var(--text-secondary)]">
                                A younger user needs more learning. Someone already investing needs more help with decision-making and reflection.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">12–18 YEARS</span>
                                <h4 className="font-serif text-lg text-[var(--text-primary)]">Foundational Awareness</h4>
                                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                                    Financial awareness and supervision. Parental controls were on the future roadmap — not built in V2.
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">18–25 YEARS</span>
                                <h4 className="font-serif text-lg text-[var(--text-primary)]">Building Confidence</h4>
                                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                                    Building financial confidence and decision habits before taking major exposure.
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">25–35 YEARS</span>
                                <h4 className="font-serif text-lg text-[var(--text-primary)]">Active Pattern Awareness</h4>
                                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                                    Already financially active — benefits most from understanding their own behavior and decision patterns.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 4. THE V2 SYSTEM LOOP & CORE FEATURES                                     */}
                {/* ========================================================================= */}
                <motion.section 
                    id="loop" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            06 — THE V2 SYSTEM
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            A loop, not a funnel
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            Instead of another investment dashboard, V2 connects learning, practice, and reflection into one continuous system:
                        </p>
                    </div>

                    {/* Interactive Visual Loop Diagram */}
                    <div className="p-6 md:p-8 rounded-2xl bg-[var(--bg-sage)]/60 border border-[var(--surface-border)] space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center">
                            <div className="p-3 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-[var(--accent-gold)] font-bold block">01</span>
                                <span className="font-serif text-sm text-[var(--text-primary)] block font-bold mt-1">Learn</span>
                                <span className="text-[10px] text-[var(--text-tertiary)] block mt-0.5">Foundational concepts</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-blue-400 font-bold block">02</span>
                                <span className="font-serif text-sm text-[var(--text-primary)] block font-bold mt-1">Simulate</span>
                                <span className="text-[10px] text-[var(--text-tertiary)] block mt-0.5">Test scenario lab</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-amber-400 font-bold block">03</span>
                                <span className="font-serif text-sm text-[var(--text-primary)] block font-bold mt-1">Decide</span>
                                <span className="text-[10px] text-[var(--text-tertiary)] block mt-0.5">Thesis log gate</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-emerald-400 font-bold block">04</span>
                                <span className="font-serif text-sm text-[var(--text-primary)] block font-bold mt-1">Reflect</span>
                                <span className="text-[10px] text-[var(--text-tertiary)] block mt-0.5">Stability Score</span>
                            </div>
                            <div className="p-3 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-purple-400 font-bold block">05</span>
                                <span className="font-serif text-sm text-[var(--text-primary)] block font-bold mt-1">Improve</span>
                                <span className="text-[10px] text-[var(--text-tertiary)] block mt-0.5">Mentorship &amp; insights</span>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 07: SIMULATION LAB */}
                    <div id="simulation" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-6 border-t border-[var(--surface-border)]">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                07 — SIMULATION LAB
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Practice, before real money is at risk
                            </h2>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    Users make investment decisions against market scenarios without immediately risking real money. The point isn&apos;t to make investing more exciting — it&apos;s a place to practise how they respond to uncertainty.
                                </p>
                                <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2 text-xs">
                                    <div className="flex items-center gap-2">
                                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono">Free tier</span>
                                        <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">Tier 2 · Capped exposure</span>
                                    </div>
                                    <p className="font-semibold text-[var(--text-primary)]">
                                        Scenario, Stability Guard, and Thesis gate — in one screen
                                    </p>
                                    <p className="text-[var(--text-tertiary)]">
                                        A historical scenario (2017 Crypto Hype) with a live Stability Guard showing FOMO pattern detected, concentration risk, and projected stability impact before the user commits.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 flex justify-center">
                            <div className="w-full max-w-[290px]">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img src="/images/Rupeerise/simulation.png" alt="Simulation Lab Screen" className="w-full h-auto block" />
                                </PhoneMockup>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 08: THESIS LOG */}
                    <div id="thesis" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[var(--surface-border)]">
                        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                            <div className="w-full max-w-[290px]">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img src="/images/Rupeerise/fiundation.png" alt="Foundation & Thesis Log UI" className="w-full h-auto block" />
                                </PhoneMockup>
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                08 — THESIS LOG
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                The friction is intentional
                            </h2>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    I considered making reflection optional — faster, but easier to skip. Instead, before acting, the user answers: why this position, what&apos;s expected, what would trigger an exit.
                                </p>
                                
                                <div className="space-y-2 font-mono text-xs pt-1">
                                    <div className="p-2.5 rounded bg-red-950/20 border border-red-500/30 text-red-300">
                                        Normal Trading App: Impulse → Action
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/30 text-emerald-300">
                                        RupeeRise: Impulse → Reflection → Action
                                    </div>
                                </div>

                                <p className="text-xs text-[var(--text-tertiary)] italic pt-1">
                                    The thesis isn&apos;t graded on entry. Its value comes from comparing stated reasoning against what actually happened, later, in Behavioral Insights — the friction is there for reflection, not to produce another instant score.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 09: STABILITY SCORE */}
                    <div id="score" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[var(--surface-border)]">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                09 — STABILITY SCORE
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Score the decision, not the return
                            </h2>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    This is the decision the case study hangs on — the A/B comparison at the top. A return-based system ranks Decision A higher. But A could have been lucky, and B may have been the more disciplined call.
                                </p>
                                <p className="font-serif text-xl text-[var(--text-primary)] italic border-l-2 border-[var(--accent-gold)] pl-3">
                                    How am I making decisions? — not &ldquo;how much money did I make?&rdquo;
                                </p>
                                <p className="text-xs text-[var(--text-tertiary)]">
                                    There&apos;s a tension here I don&apos;t think fully resolves: a metric is still something users can learn to optimize, even a well-chosen one. The mitigation is that the score moves gradually and every change is explained through behavioral signals.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-6 flex justify-center">
                            <div className="w-full max-w-[290px]">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img src="/images/Rupeerise/dashboard.png" alt="Stability Score Screen" className="w-full h-auto block" />
                                </PhoneMockup>
                            </div>
                        </div>
                    </div>

                    {/* SECTION 10: BEHAVIORAL INSIGHTS */}
                    <div id="insights" className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[var(--surface-border)]">
                        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                            <div className="w-full max-w-[290px]">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img src="/images/Rupeerise/insights.png" alt="Behavioral Insights Screen" className="w-full h-auto block" />
                                </PhoneMockup>
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                10 — BEHAVIORAL INSIGHTS
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Help users understand their own patterns
                            </h2>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    A normal dashboard shows returns and market movement. It doesn&apos;t show how a person behaves. V2 connects personal activity with market context to surface patterns:
                                </p>
                                <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] font-serif text-lg text-[var(--text-primary)] italic">
                                    &ldquo;During previous periods of market hype, your trading activity increased significantly.&rdquo;
                                </div>
                                <p>
                                    Instead of predicting the market for the user, RupeeRise helps the user understand themselves.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 5. AI, MENTORSHIP, GUARDRAILS & COMPARISON                                */}
                {/* ========================================================================= */}
                <motion.section 
                    id="ai" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    {/* AI as a Learning Layer */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                11 — AI AS A LEARNING LAYER
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Explain the pattern, don&apos;t predict the market
                            </h2>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    AI was already used in V1 to generate quizzes and puzzles. For V2, the role expands: user, portfolio, and market metadata become inputs for more contextual feedback:
                                </p>
                                <ul className="space-y-1.5 font-sans text-sm text-[var(--text-primary)]">
                                    <li className="flex items-center gap-2">• Why a Stability Score changed</li>
                                    <li className="flex items-center gap-2">• What pattern appeared in recent decisions</li>
                                    <li className="flex items-center gap-2">• How market conditions relate to user behavior</li>
                                    <li className="flex items-center gap-2">• What the user could learn from a previous decision</li>
                                </ul>
                                <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-[var(--surface-border)] font-serif text-base text-[var(--text-primary)] italic">
                                    &ldquo;Don&apos;t predict the market for me. Help me predict my own behavior.&rdquo;
                                </div>
                            </div>
                        </div>

                        {/* Mentorship */}
                        <div id="mentorship" className="lg:col-span-6 space-y-4 lg:border-l lg:border-[var(--surface-border)] lg:pl-10">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                12 — MENTORSHIP
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Turn a detected weakness into guidance
                            </h2>
                            <p className="font-sans text-base text-[var(--text-secondary)]">
                                Mentorship was part of the original concept as a browsable directory. In V2, a detected weakness connects directly to relevant guidance:
                            </p>
                            <div className="p-3 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)] font-mono text-xs text-[var(--text-primary)]">
                                High credit utilization → Capital Discipline → Debt Optimization → Relevant mentor
                            </div>
                            <div className="w-full max-w-[260px] mx-auto pt-2">
                                <PhoneMockup className="max-w-none w-full shadow-xl">
                                    <img src="/images/Rupeerise/mentorship.png" alt="Mentorship UI" className="w-full h-auto block" />
                                </PhoneMockup>
                            </div>
                        </div>
                    </div>

                    {/* Behavioral Guardrails & Why Not Zerodha */}
                    <div id="guardrails" className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-[var(--surface-border)]">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
                                13 — BEHAVIORAL GUARDRAILS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                What I deliberately chose NOT to build
                            </h2>
                            <div className="space-y-2 text-xs md:text-sm font-sans text-[var(--text-secondary)]">
                                <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono">Trading streaks:</strong> Rewards frequency over judgment.
                                </div>
                                <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono">Profit leaderboards:</strong> Turns outcomes into competition.
                                </div>
                                <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono">Trending-stock feeds:</strong> Increases FOMO.
                                </div>
                                <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono">Engagement rewards:</strong> Drives activity, not discipline.
                                </div>
                                <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono">Unnecessary price alerts:</strong> Manufactures urgency.
                                </div>
                            </div>
                        </div>

                        <div id="why-rupeerise" className="lg:col-span-6 space-y-4 lg:border-l lg:border-[var(--surface-border)] lg:pl-10">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                14 — WHY NOT ZERODHA OR GROWW
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                A different problem, not a better feed
                            </h2>
                            <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                Brokerage products help users manage and execute investments. RupeeRise helps users learn concepts, practise decisions, record reasoning, understand patterns, and build habits over time.
                            </p>
                            <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] font-serif text-lg text-[var(--text-primary)] italic">
                                &ldquo;Investing apps help me manage my money. RupeeRise helps me understand how I manage myself.&rdquo;
                            </div>
                        </div>
                    </div>

                    {/* Business Opportunity & Consent Hook */}
                    <div id="business" className="pt-8 border-t border-[var(--surface-border)] space-y-6">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                15 — BUSINESS OPPORTUNITY (FUTURE / UNVALIDATED)
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Behavioral signals could become useful to institutions too
                            </h2>
                            <p className="font-sans text-base text-[var(--text-secondary)]">
                                With user consent, real financial activity could make the behavioral system more useful — giving banks or investment platforms a way to understand customer readiness before recommending products.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-7 space-y-3 font-sans text-sm text-[var(--text-secondary)]">
                                <div className="p-3 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)] font-mono text-xs text-[var(--text-primary)]">
                                    User → Consent-based read-only Demat access → Behavioral readiness profile → Better product fit
                                </div>
                                <p className="text-xs text-[var(--text-tertiary)] italic">
                                    An investment platform owns the transaction. RupeeRise is designed to understand the behavior around the transaction.
                                </p>
                            </div>

                            <div className="md:col-span-5 flex justify-center">
                                <div className="w-full max-w-[240px]">
                                    <PhoneMockup className="max-w-none w-full shadow-lg">
                                        <img src="/images/Rupeerise/profile.png" alt="Profile Settings UI" className="w-full h-auto block" />
                                    </PhoneMockup>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 6. SHIPPED VS CONCEPTUAL, METRICS & TENSIONS                             */}
                {/* ========================================================================= */}
                <motion.section 
                    id="shipped" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            16 — SHIPPED VS CONCEPTUAL
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Keeping V1 and V2 honest
                        </h2>
                        <p className="font-sans text-base text-[var(--text-secondary)]">
                            The developer&apos;s functional MVP did not integrate my redesigned V2 screens. V2 is a conceptual redesign based on original research and later reflection.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-sm">
                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">
                                V1 — SHIPPED MVP
                            </span>
                            <ul className="space-y-1.5 text-[var(--text-secondary)] text-xs">
                                <li>• Research &amp; original product direction</li>
                                <li>• Functional MVP with rudimentary UI</li>
                                <li>• AI-generated finance quizzes &amp; mentor list</li>
                                <li>• Presented to hackathon jury</li>
                            </ul>
                        </div>

                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-amber-400 uppercase tracking-wider block">
                                V2 — CONCEPTUAL REDESIGN
                            </span>
                            <ul className="space-y-1.5 text-[var(--text-secondary)] text-xs">
                                <li>• Re-examined research + reframed problem</li>
                                <li>• Simulation Lab &amp; mandatory Thesis Log</li>
                                <li>• Stability Score &amp; Behavioral Insights</li>
                                <li>• Contextual mentorship &amp; institutional hook</li>
                            </ul>
                        </div>
                    </div>

                    {/* Proposed Metrics Targets */}
                    <div id="validation" className="space-y-6 pt-6 border-t border-[var(--surface-border)]">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                17 — MEASURING WHETHER IT WORKS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Proposed validation targets (V2 wasn&apos;t launched)
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-sans text-xs">
                            <div className="p-3.5 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-[var(--accent-gold)] block">4-WEEK RETENTION</span>
                                <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">High</span>
                                <span className="text-[var(--text-tertiary)] text-[10px]">Useful enough to return</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-[var(--accent-gold)] block">THESIS LOG</span>
                                <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">~70%</span>
                                <span className="text-[var(--text-tertiary)] text-[10px]">Completion rate target</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-[var(--accent-gold)] block">SIM LAB</span>
                                <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">3+</span>
                                <span className="text-[var(--text-tertiary)] text-[10px]">Sessions per trade</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-[var(--accent-gold)] block">BEHAVIOR CHANGE</span>
                                <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">Positive</span>
                                <span className="text-[var(--text-tertiary)] text-[10px]">Reduced impulsivity</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-[var(--accent-gold)] block">INSIGHTS</span>
                                <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">Active</span>
                                <span className="text-[var(--text-tertiary)] text-[10px]">Visits driven by insights</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-[var(--accent-gold)] block">PREMIUM</span>
                                <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">~20%</span>
                                <span className="text-[var(--text-tertiary)] text-[10px]">Conversion hypothesis</span>
                            </div>
                        </div>
                    </div>

                    {/* Known Tensions Panel */}
                    <div id="tensions" className="space-y-6 pt-6 border-t border-[var(--surface-border)]">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold">
                                18 — KNOWN TENSIONS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                One open, two resolved in writing — screens haven&apos;t caught up yet
                            </h2>
                        </div>

                        <div className="space-y-3 font-sans text-xs md:text-sm">
                            <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/30 space-y-1">
                                <span className="font-mono text-xs text-amber-400 font-bold">01 · OPEN TENSION</span>
                                <p className="font-semibold text-[var(--text-primary)]">Tier downgrade reads as punishment</p>
                                <p className="text-[var(--text-secondary)]">
                                    &ldquo;Tier Adjustment Alert&rdquo; violates the principle to inform rather than punish. The mechanism is sound, but the visual framing needs the same constructive treatment as the Stability Score.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-1">
                                <span className="font-mono text-xs text-emerald-400 font-bold">02 · RESOLVED IN COPY</span>
                                <p className="font-semibold text-[var(--text-primary)]">Premium stress-testing predicts the market</p>
                                <p className="text-[var(--text-secondary)]">
                                    Framed as a learning comparison against past behavior rather than a market forecast.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-1">
                                <span className="font-mono text-xs text-emerald-400 font-bold">03 · RESOLVED IN COPY</span>
                                <p className="font-semibold text-[var(--text-primary)]">Premium Simulation quietly enables real trades</p>
                                <p className="text-[var(--text-secondary)]">
                                    Real execution, if introduced, sits behind the exact same Thesis Log and behavioral guardrails.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Screens Gallery */}
                    <div id="more-screens" className="space-y-6 pt-6 border-t border-[var(--surface-border)]">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                19 — ADDITIONAL SCREENS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Rounding out the system
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <PhoneMockup className="max-w-none w-full shadow-lg">
                                    <img src="/images/thumbnails/Rupeerise- dashboard.png" alt="Market Journal" className="w-full h-auto block" />
                                </PhoneMockup>
                                <p className="font-mono text-xs text-center text-[var(--text-tertiary)]">Market Journal (Free Tier)</p>
                            </div>
                            <div className="space-y-2">
                                <PhoneMockup className="max-w-none w-full shadow-lg">
                                    <img src="/images/Rupeerise/simulation.png" alt="Premium Simulation" className="w-full h-auto block" />
                                </PhoneMockup>
                                <p className="font-mono text-xs text-center text-[var(--text-tertiary)]">Premium Simulation</p>
                            </div>
                            <div className="space-y-2">
                                <PhoneMockup className="max-w-none w-full shadow-lg">
                                    <img src="/images/Rupeerise/tier adjustment modal.png" alt="Tier Adjustment Modal" className="w-full h-auto block" />
                                </PhoneMockup>
                                <p className="font-mono text-xs text-center text-amber-400">Tier Adjustment Alert (Needs Rework)</p>
                            </div>
                        </div>
                    </div>

                    {/* Limitations Panel */}
                    <div id="limitations" className="space-y-6 pt-6 border-t border-[var(--surface-border)]">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)] font-semibold">
                                20 — LIMITATIONS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                What ten conversations can and can&apos;t tell you
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans text-xs md:text-sm">
                            <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs font-bold text-emerald-400">WHAT WE CAN SAY</span>
                                <ul className="space-y-1 text-[var(--text-secondary)]">
                                    <li>• Financial information is already abundant</li>
                                    <li>• Decisions under emotion &amp; uncertainty are hard</li>
                                    <li>• Friction before action introduces helpful reflection</li>
                                </ul>
                            </div>

                            <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs font-bold text-red-400">WHAT WE CAN&apos;T SAY</span>
                                <ul className="space-y-1 text-[var(--text-secondary)]">
                                    <li>• Cannot claim score is live-validated</li>
                                    <li>• Sample size (~10) is exploratory, not statistically representative</li>
                                    <li>• Long-term behavioral retention requires real beta validation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Reflection & Closing */}
                    <div id="reflection" className="space-y-4 pt-6 border-t border-[var(--surface-border)] max-w-3xl font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            21 — WHAT I LEARNED
                        </span>
                        <blockquote className="p-4 rounded-xl bg-[var(--bg-sage)] border-l-4 border-[var(--accent-gold)] font-serif text-xl sm:text-2xl text-[var(--text-primary)] italic">
                            &ldquo;Financial literacy isn&apos;t only about knowing concepts. It&apos;s about applying them when a real decision is in front of you.&rdquo;
                        </blockquote>
                        <p>
                            That shift changed RupeeRise from a collection of learning features into a system: Learn → Practise → Decide → Reflect → Improve. The question the jury asked is still the one I&apos;d need to validate first — why would someone come back? V2&apos;s answer isn&apos;t another stock prediction or more trading. It&apos;s the chance to understand how they make decisions, recognize their patterns, and build better habits.
                        </p>
                        <p className="font-serif text-xl text-[var(--text-primary)] font-bold italic pt-2">
                            RupeeRise isn&apos;t trying to predict the market for the user. It&apos;s trying to help the user understand themselves.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 7. NEXT CASE STUDY NAVIGATION                                             */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="border-t border-[var(--surface-border)] pt-12 pb-6 space-y-8"
                >
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)] mb-1">Next Case Study</p>
                            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] leading-tight">Clinical Emergency Response</h3>
                        </div>
                        <Link
                            href="/emergency-app"
                            className="group flex items-center gap-3 w-fit pb-1 border-b border-[var(--surface-border)] hover:border-[var(--text-primary)] transition-all duration-300"
                        >
                            <span className="font-sans text-sm md:text-base tracking-widest uppercase font-bold text-[var(--text-primary)]">
                                View Case Study
                            </span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[var(--text-primary)]" />
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[var(--surface-border)] pt-5">
                        <Link href="/#work" className="font-mono text-xs text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">
                            ← Back to Selected Work
                        </Link>
                        <span className="font-mono text-xs text-[var(--text-tertiary)]">© 2025 Supragnya Purohith</span>
                    </div>
                </motion.section>

            </div>
        </CaseStudyTemplate>
    );
}
