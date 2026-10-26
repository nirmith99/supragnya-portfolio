"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import { PhoneMockup } from "@/components/ui/mockups";
import InteractiveCompare from "@/components/ui/InteractiveCompare";
import AnnotatedScreen from "@/components/ui/AnnotatedScreen";
import WorkflowTimeline from "@/components/ui/WorkflowTimeline";
import CaseStudyBentoSummary from "@/components/ui/CaseStudyBentoSummary";
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
                <div className="sticky top-16 z-40 bg-[var(--bg-sage)] border border-[var(--surface-border)] py-3 px-5 flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)] shadow-md rounded-xl">
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
                        <div className="lg:col-span-5 space-y-6">
                            <div className="inline-flex items-center gap-3">
                                <span className="h-px w-6 bg-[var(--accent-gold)]" />
                                <span className="text-[var(--accent-gold)] font-sans text-xs md:text-sm tracking-widest uppercase font-bold">
                                    Case Study · Behavioral Fintech
                                </span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight font-serif leading-tight sm:leading-snug md:leading-[1.25]">
                                Turning financial knowledge into <em className="italic text-emerald-400 font-serif font-normal">better decisions.</em>
                            </h1>
                            
                            <p className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-relaxed md:leading-loose italic font-normal">
                                RupeeRise began as a financial-literacy hackathon project. The jury&apos;s question — why would someone come back? — is what turned it into a system built around behavior, not returns.
                            </p>

                            <div className="p-4 bg-[#2C1E16] rounded-xl border border-[var(--surface-border)] font-mono text-xs text-[var(--text-secondary)] space-y-1 shadow-sm">
                                <span className="text-[var(--accent-gold)] font-bold block">PROJECT SUMMARY</span>
                                <p className="leading-relaxed">Lead Product Designer · 2 people (1 Designer + 1 Developer) · 14-day hackathon (~4 days build time) · V1 shipped, V2 conceptual</p>
                            </div>
                        </div>

                        {/* Dual Overlapping Phones Visual - Constrained Editorial Frame */}
                        <div className="lg:col-span-7 flex justify-center lg:justify-end">
                            <figure className="relative w-full max-w-[500px] flex flex-col items-center justify-center my-6 lg:my-0">
                                <div className="relative w-full flex items-center justify-center py-2">
                                    <div className="relative z-20 w-[52%] max-w-[280px] transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                                        <PhoneMockup className="max-w-none w-full">
                                            <img 
                                                src="/images/Rupeerise/dashboard.png" 
                                                alt="RupeeRise Behavioral Finance Dashboard" 
                                                className="w-full h-auto block" 
                                            />
                                        </PhoneMockup>
                                        <p className="text-center font-mono text-[11px] text-[var(--text-tertiary)] mt-2">
                                            Stability Score &amp; Decision Hub
                                        </p>
                                    </div>

                                    <div className="relative z-10 w-[48%] max-w-[260px] -ml-[12%] transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl opacity-90 hover:opacity-100">
                                        <PhoneMockup className="max-w-none w-full">
                                            <img 
                                                src="/images/Rupeerise/insights.png" 
                                                alt="RupeeRise Behavioral Insights Screen" 
                                                className="w-full h-auto block" 
                                            />
                                        </PhoneMockup>
                                        <p className="text-center font-mono text-[11px] text-[var(--text-tertiary)] mt-2">
                                            Behavioral Pattern Insights
                                        </p>
                                    </div>
                                </div>
                                <figcaption className="font-mono text-xs text-[var(--text-tertiary)] mt-3">
                                    Hero Figure: RupeeRise mobile decision surfaces
                                </figcaption>
                            </figure>
                        </div>
                    </div>

                    {/* Executive Bento Summary */}
                    <div className="mt-12">
                        <CaseStudyBentoSummary
                            problem={{
                                tag: "The Information Dilemma",
                                title: "Information everywhere, discipline nowhere",
                                description: "Retail investors drown in fragmented finfluencer noise, yet struggle with FOMO, overtrading, and lack deliberate decision frameworks under real market pressure.",
                                metric: "≥ 6/10",
                                metricLabel: "Interviewees cited info fatigue",
                            }}
                            target={{
                                tag: "Behavioral Transformation",
                                title: "From passive content to disciplined execution",
                                description: "Transition young investors from consumers of financial content into reflective operators who test hypotheses in simulation before risking capital.",
                                metric: "18–35",
                                metricLabel: "Core demographic bracket",
                            }}
                            principle={{
                                tag: "Core Design Law",
                                title: "Score the decision discipline, not the return",
                                description: "A lucky trade with reckless concentration risk is bad behavior. A hedged trade with minor market pullback is good behavior. The UI ranks accordingly.",
                                metric: "Discipline > Luck",
                                metricLabel: "Scoring foundation",
                            }}
                            outcome={{
                                tag: "Architectural Evolution",
                                title: "From hackathon quiz to 5-stage closed loop",
                                description: "Transformed the 14-day hackathon MVP into an end-to-end behavioral finance loop: Learn → Simulate → Decide → Reflect → Improve.",
                                metric: "5 Stages",
                                metricLabel: "Closed behavioral loop",
                            }}
                        />
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
                    <div className="mt-12 p-6 md:p-8 rounded-2xl bg-[#2C1E16] border border-[var(--surface-border)] shadow-xl space-y-6">
                        <div className="text-center max-w-xl mx-auto space-y-1">
                            <span className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-widest font-bold">
                                SIGNATURE DECISION LEDGER
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                RupeeRise is built to tell these two apart
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                            {/* Decision A: Looks like winning */}
                            <div className="p-5 rounded-xl bg-red-950/25 border border-red-500/30 space-y-3">
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
                            <div className="p-5 rounded-xl bg-emerald-950/25 border border-emerald-500/30 space-y-3">
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
                    className="border-t border-[var(--surface-border)] pt-16 pb-6"
                >
                    <div className="max-w-2xl mx-auto space-y-16">
                        {/* 01 Starting Point */}
                        <div className="space-y-4">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                01 — THE STARTING POINT
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-snug">
                                The original assumption was the obvious one
                            </h2>
                            <div className="space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    The hackathon brief was financial literacy. The working theory: if people understood money, investing, or financial instruments better, they&apos;d make better decisions.
                                </p>
                                <p>
                                    So V1 focused on learning and managing money — education, budgeting, savings, investing, market information, mentorship, and quizzes.
                                </p>
                                <div className="p-4 bg-[#2C1E16] rounded-xl border border-[var(--surface-border)] font-mono text-xs md:text-sm text-[var(--text-primary)]">
                                    <span className="text-[var(--accent-gold)] font-bold block mb-1">V1 INTERACTION FLOW</span>
                                    Learn → Manage → Invest → Get guidance
                                </div>
                            </div>
                        </div>

                        {/* 02 Research Synthesis */}
                        <div id="research" className="space-y-6 pt-12 border-t border-[var(--surface-border)]/60 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                02 — RESEARCH SYNTHESIS
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-snug">
                                Two directional signals, from ten conversations
                            </h2>
                            <p className="text-sm md:text-base text-[var(--text-tertiary)] leading-relaxed">
                                ~10 informal 1:1 interviews with Gen Z and Millennials, in person at a café. Some were already investing, some knew about investing, some were actively trading. Unrecorded and exploratory — treated as directional, not representative.
                            </p>

                            <div className="space-y-4 pt-2">
                                <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] space-y-2">
                                    <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">
                                        ≥6 OF 10 PARTICIPANTS
                                    </span>
                                    <h3 className="font-serif text-xl text-[var(--text-primary)] leading-snug">Information was already everywhere</h3>
                                    <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                                        Finfluencer content left people with partial, fragmented knowledge — while they were still trying to make real decisions.
                                    </p>
                                </div>

                                <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] space-y-2">
                                    <span className="font-mono text-xs font-bold text-red-400 uppercase tracking-wider block">
                                        ≥4 OF 10 PARTICIPANTS
                                    </span>
                                    <h3 className="font-serif text-xl text-[var(--text-primary)] leading-snug">Deciding was still hard</h3>
                                    <p className="text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
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
                    className="border-t border-[var(--surface-border)] pt-16 pb-6"
                >
                    <div className="max-w-2xl mx-auto space-y-16">
                        {/* 03 Turning Point */}
                        <div className="space-y-4">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                03 — THE TURNING POINT
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-snug">
                                The jury asked the question that mattered most
                            </h2>
                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                V1 shipped as a functional MVP — rudimentary UI, AI-generated finance quizzes, presented to the hackathon jury. Feedback was positive. They saw potential. But they raised one hard question:
                            </p>
                            
                            <div className="p-6 md:p-8 rounded-2xl bg-[#2C1E16] border border-[var(--surface-border)] hover:border-[var(--accent-gold)]/40 transition-colors space-y-3">
                                <blockquote className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] italic leading-relaxed">
                                    &ldquo;Why would someone come back?&rdquo;
                                </blockquote>
                                <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                                    One-time quiz completion isn&apos;t a reason to return. That question — not a redesign brief — is what sent me back to the interview data.
                                </p>
                            </div>
                        </div>

                        {/* 04 Reframing */}
                        <div id="reframe" className="space-y-4 pt-12 border-t border-[var(--surface-border)]/60 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                04 — REFRAMING THE PROBLEM
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-snug">
                                Knowing isn&apos;t the same as applying
                            </h2>
                            <p>
                                Knowing what a stock, mutual fund, or credit card is doesn&apos;t mean someone can apply that knowledge when making a real decision. I didn&apos;t replace the financial-literacy problem — I extended it:
                            </p>

                            <div className="p-5 md:p-6 rounded-xl bg-[#2C1E16] border border-emerald-500/30 text-emerald-300 font-serif text-xl sm:text-2xl italic leading-relaxed">
                                &ldquo;How might RupeeRise help people turn financial knowledge into more deliberate financial decisions?&rdquo;
                            </div>

                            <p className="font-mono text-xs md:text-sm text-[var(--text-primary)] bg-[#2C1E16] p-4 rounded-xl border border-[var(--surface-border)]">
                                <span className="text-[var(--accent-gold)] font-bold block mb-1">REFRAMED SYSTEM</span>
                                Learn → Understand → Simulate → Decide → Reflect
                            </p>
                        </div>

                        {/* 05 Target Audience */}
                        <div id="ages" className="space-y-6 pt-12 border-t border-[var(--surface-border)]/60">
                            <div className="space-y-2">
                                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                    05 — TARGET AUDIENCE
                                </span>
                                <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                    The need changes with experience
                                </h3>
                                <p className="font-sans text-sm md:text-base text-[var(--text-secondary)]">
                                    A younger user needs more learning. Someone already investing needs more help with decision-making and reflection.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] space-y-2">
                                    <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">12–18 YEARS</span>
                                    <h4 className="font-serif text-lg text-[var(--text-primary)]">Foundational Awareness</h4>
                                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                                        Financial awareness and supervision. Parental controls were on the future roadmap — not built in V2.
                                    </p>
                                </div>

                                <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] space-y-2">
                                    <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">18–25 YEARS</span>
                                    <h4 className="font-serif text-lg text-[var(--text-primary)]">Building Confidence</h4>
                                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                                        Building financial confidence and decision habits before taking major exposure.
                                    </p>
                                </div>

                                <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] space-y-2">
                                    <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">25–35 YEARS</span>
                                    <h4 className="font-serif text-lg text-[var(--text-primary)]">Active Pattern Awareness</h4>
                                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                                        Already financially active — benefits most from understanding their own behavior and decision patterns.
                                    </p>
                                </div>
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
                    className="border-t border-[var(--surface-border)] pt-16 pb-6"
                >
                    <div className="max-w-2xl mx-auto space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            06 — THE V2 SYSTEM
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-snug">
                            A loop, not a funnel
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            Instead of another investment dashboard, V2 connects learning, practice, and reflection into one continuous system:
                        </p>
                    </div>

                    {/* 06 — Workflow Timeline: 5-Stage Behavioral Loop - Constrained Figure */}
                    <div className="max-w-4xl mx-auto my-12">
                        <WorkflowTimeline
                            title="The 5-Stage Behavioral Loop"
                            subtitle="Connecting learning, simulation, commitment, and reflection into one continuous behavioral system."
                            steps={[
                                {
                                    timeWindow: "Stage 01",
                                    stage: "Foundational Learning",
                                    headline: "De-jargonize concepts without hype",
                                    details: "Interactive modules explain mutual funds, bonds, and equities through practical mechanisms rather than speculative excitement or influencer noise.",
                                    role: "New Investor",
                                    indicatorColor: "rgb(209, 191, 160)",
                                    deliverable: "Foundational Concept Modules",
                                },
                                {
                                    timeWindow: "Stage 02",
                                    stage: "Simulation Lab",
                                    headline: "Stress-test instincts against historical shocks",
                                    details: "Users execute mock orders against historical market bubbles (2017 Crypto Surge, 2020 Liquidity Crunch) to experience volatility before risking real savings.",
                                    role: "Active Learner",
                                    indicatorColor: "rgb(56, 189, 248)",
                                    deliverable: "Risk-Free Simulation Sandbox",
                                },
                                {
                                    timeWindow: "Stage 03",
                                    stage: "Pre-Trade Thesis Gate",
                                    headline: "Intentional friction: Articulate the 'Why'",
                                    details: "Before order execution, users must log why this position is taken, target holding period, and predefined stop-loss/exit criteria.",
                                    role: "Disciplined Operator",
                                    indicatorColor: "rgb(245, 158, 11)",
                                    deliverable: "Pre-Execution Thesis Gate",
                                },
                                {
                                    timeWindow: "Stage 04",
                                    stage: "Stability Score Engine",
                                    headline: "Evaluate decision discipline over lucky outcomes",
                                    details: "Our behavioral scoring model measures concentration risk, thesis adherence, and impulse control rather than short-term market returns.",
                                    role: "Self-Reflective Trader",
                                    indicatorColor: "rgb(52, 211, 153)",
                                    deliverable: "Proprietary Stability Gauge",
                                },
                                {
                                    timeWindow: "Stage 05",
                                    stage: "Adaptive Reflection & Mentorship",
                                    headline: "Targeted guidance derived from detected weaknesses",
                                    details: "Weaknesses like overtrading during market rallies connect directly to vetted capital discipline mentors and structured post-trade reviews.",
                                    role: "Long-term Compounding Investor",
                                    indicatorColor: "rgb(192, 132, 252)",
                                    deliverable: "Contextual Guidance Network",
                                },
                            ]}
                        />
                    </div>

                    {/* 07–09 — Interactive Screen Inspector: Stability Score & Decision Hub */}
                    <figure id="score" className="max-w-4xl mx-auto my-16 pt-8 border-t border-[var(--surface-border)]">
                        <AnnotatedScreen
                            title="Decision Hub & Stability Score Inspector"
                            subtitle="Explore how RupeeRise shifts focus from volatile returns to repeatable behavioral habits."
                            imageSrc="/images/Rupeerise/dashboard.png"
                            imageAlt="RupeeRise Stability Score and Decision Hub Screen"
                            hotspots={[
                                {
                                    id: 1,
                                    xPercent: 50,
                                    yPercent: 26,
                                    title: "Stability Score Dial",
                                    category: "Behavioral Metric",
                                    description: "Evaluates trading consistency across concentration risk, thesis adherence, and emotional discipline rather than raw portfolio return.",
                                },
                                {
                                    id: 2,
                                    xPercent: 32,
                                    yPercent: 50,
                                    title: "FOMO Pattern Detection",
                                    category: "Risk Guardrail",
                                    description: "Live detection warns when rapid buy orders cluster during steep market momentum, curbing impulsive chasing before commitment.",
                                },
                                {
                                    id: 3,
                                    xPercent: 70,
                                    yPercent: 50,
                                    title: "Thesis Adherence Meter",
                                    category: "Discipline Tracking",
                                    description: "Tracks whether closed positions respected the pre-trade thesis and exit triggers documented at entry.",
                                },
                                {
                                    id: 4,
                                    xPercent: 50,
                                    yPercent: 78,
                                    title: "Habit Trajectory Graph",
                                    category: "Retention Engine",
                                    description: "Visualizes long-term discipline progression, answering the jury's question ('Why return?') by rewarding steady decision habits.",
                                },
                            ]}
                        />
                        <figcaption className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-4">
                            Figure 1: Decision Hub &amp; Stability Score interactive screen breakdown
                        </figcaption>
                    </figure>

                    {/* 10 — Curated Feature Artifacts: Simulation, Thesis Gate & Insights */}
                    <div id="simulation" className="pt-12 border-t border-[var(--surface-border)] space-y-6">
                        <div className="max-w-2xl mx-auto space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                FEATURE ARTIFACTS
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                Supporting deliberate decision habits
                            </h3>
                            <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                                Three deliberate components built to enforce friction, test hypotheses, and reveal recurring psychological triggers.
                            </p>
                        </div>

                        {/* Constrained UI Screen Container with ample vertical margin */}
                        <div className="max-w-4xl mx-auto my-16">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                                {/* Card 1: Simulation Lab */}
                                <div className="p-6 rounded-2xl bg-[#2C1E16] border border-[var(--surface-border)] flex flex-col justify-between space-y-4 hover:border-[var(--accent-gold)]/40 transition-colors shadow-lg">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-xs text-sky-400 font-bold uppercase">01 · SIMULATION</span>
                                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950/60 text-sky-300 border border-sky-500/30">Sandboxed</span>
                                        </div>
                                        <h4 className="font-serif text-xl text-[var(--text-primary)] font-medium leading-snug">Practice Before Real Stakes</h4>
                                        <p className="font-sans text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                            Simulate historical market crashes and crypto manias. Users test their risk tolerance and panic instincts with zero capital loss.
                                        </p>
                                    </div>
                                    <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40 max-h-[280px] flex items-center justify-center p-2">
                                        <img 
                                            src="/images/Rupeerise/simulation.png" 
                                            alt="Simulation Lab" 
                                            className="h-auto max-h-[260px] w-auto object-contain rounded-lg"
                                        />
                                    </div>
                                </div>

                                {/* Card 2: Thesis Gate */}
                                <div id="thesis" className="p-6 rounded-2xl bg-[#2C1E16] border border-[var(--surface-border)] flex flex-col justify-between space-y-4 hover:border-[var(--accent-gold)]/40 transition-colors shadow-lg">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-xs text-amber-400 font-bold uppercase">02 · THESIS GATE</span>
                                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/60 text-amber-300 border border-amber-500/30">Intentional Friction</span>
                                        </div>
                                        <h4 className="font-serif text-xl text-[var(--text-primary)] font-medium leading-snug">Impulse → Reflection → Action</h4>
                                        <p className="font-sans text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                            Forces users to document trade rationale and stop-loss targets prior to order submission, converting impulse trades into tested theories.
                                        </p>
                                    </div>
                                    <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40 max-h-[280px] flex items-center justify-center p-2">
                                        <img 
                                            src="/images/Rupeerise/fiundation.png" 
                                            alt="Thesis Gate UI" 
                                            className="h-auto max-h-[260px] w-auto object-contain rounded-lg"
                                        />
                                    </div>
                                </div>

                                {/* Card 3: Behavioral Insights */}
                                <div id="insights" className="p-6 rounded-2xl bg-[#2C1E16] border border-[var(--surface-border)] flex flex-col justify-between space-y-4 hover:border-[var(--accent-gold)]/40 transition-colors shadow-lg">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <span className="font-mono text-xs text-emerald-400 font-bold uppercase">03 · INSIGHTS</span>
                                            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/60 text-emerald-300 border border-emerald-500/30">Self-Knowledge</span>
                                        </div>
                                        <h4 className="font-serif text-xl text-[var(--text-primary)] font-medium leading-snug">Spotting Personal Biases</h4>
                                        <p className="font-sans text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                            Surfaces personal trading trends against macroeconomic news: &ldquo;During periods of extreme social hype, your impulse trading increased 3×.&rdquo;
                                        </p>
                                    </div>
                                    <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40 max-h-[280px] flex items-center justify-center p-2">
                                        <img 
                                            src="/images/Rupeerise/insights.png" 
                                            alt="Behavioral Insights UI" 
                                            className="h-auto max-h-[260px] w-auto object-contain rounded-lg"
                                        />
                                    </div>
                                </div>
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
                    className="border-t border-[var(--surface-border)] pt-16 pb-6"
                >
                    <div className="max-w-2xl mx-auto space-y-16">
                        {/* 11 — AI as a Learning Layer */}
                        <div className="space-y-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                11 — AI AS A LEARNING LAYER
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-snug">
                                Explain the pattern, don&apos;t predict the market
                            </h2>
                            <div className="space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    AI was already used in V1 to generate quizzes and puzzles. For V2, the role expands: user, portfolio, and market metadata become inputs for more contextual feedback:
                                </p>
                                <ul className="space-y-2 font-sans text-sm md:text-base text-[var(--text-primary)]">
                                    <li className="flex items-center gap-2">• Why a Stability Score changed</li>
                                    <li className="flex items-center gap-2">• What pattern appeared in recent decisions</li>
                                    <li className="flex items-center gap-2">• How market conditions relate to user behavior</li>
                                    <li className="flex items-center gap-2">• What the user could learn from a previous decision</li>
                                </ul>
                                <div className="p-5 bg-[#2C1E16] rounded-xl border border-[var(--surface-border)] font-serif text-lg text-[var(--text-primary)] italic leading-relaxed">
                                    &ldquo;Don&apos;t predict the market for me. Help me predict my own behavior.&rdquo;
                                </div>
                            </div>
                        </div>

                        {/* 12 — Mentorship */}
                        <div id="mentorship" className="space-y-4 pt-12 border-t border-[var(--surface-border)]/60">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                12 — MENTORSHIP
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-snug">
                                Turn a detected weakness into guidance
                            </h2>
                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                Mentorship was part of the original concept as a browsable directory. In V2, a detected weakness connects directly to relevant guidance:
                            </p>
                            <div className="p-4 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] font-mono text-xs text-[var(--text-primary)]">
                                <span className="text-[var(--accent-gold)] font-bold block mb-1">DYNAMIC ROUTING</span>
                                High credit utilization → Capital Discipline → Debt Optimization → Relevant mentor
                            </div>
                            
                            {/* Inline Editorial Figure */}
                            <figure className="max-w-xs mx-auto my-16 text-center">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img src="/images/Rupeerise/mentorship.png" alt="Mentorship UI" className="w-full h-auto block" />
                                </PhoneMockup>
                                <figcaption className="font-mono text-xs text-[var(--text-tertiary)] mt-4">
                                    Figure: Weakness-driven mentorship routing flow
                                </figcaption>
                            </figure>
                        </div>

                        {/* 13 — Behavioral Guardrails */}
                        <div id="guardrails" className="space-y-4 pt-12 border-t border-[var(--surface-border)]/60">
                            <span className="font-mono text-xs uppercase tracking-widest text-red-400 font-semibold">
                                13 — BEHAVIORAL GUARDRAILS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                What I deliberately chose NOT to build
                            </h2>
                            <div className="space-y-3 font-sans text-sm text-[var(--text-secondary)]">
                                <div className="p-3.5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono block mb-0.5">Trading streaks:</strong> Rewards frequency over judgment.
                                </div>
                                <div className="p-3.5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono block mb-0.5">Profit leaderboards:</strong> Turns outcomes into competition.
                                </div>
                                <div className="p-3.5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono block mb-0.5">Trending-stock feeds:</strong> Increases FOMO.
                                </div>
                                <div className="p-3.5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono block mb-0.5">Engagement rewards:</strong> Drives activity, not discipline.
                                </div>
                                <div className="p-3.5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] font-mono block mb-0.5">Unnecessary price alerts:</strong> Manufactures urgency.
                                </div>
                            </div>
                        </div>

                        {/* 14 — Why Not Zerodha or Groww */}
                        <div id="why-rupeerise" className="space-y-4 pt-12 border-t border-[var(--surface-border)]/60">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                14 — WHY NOT ZERODHA OR GROWW
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                A different problem, not a better feed
                            </h2>
                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                Brokerage products help users manage and execute investments. RupeeRise helps users learn concepts, practise decisions, record reasoning, understand patterns, and build habits over time.
                            </p>
                            <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] font-serif text-lg text-[var(--text-primary)] italic leading-relaxed">
                                &ldquo;Investing apps help me manage my money. RupeeRise helps me understand how I manage myself.&rdquo;
                            </div>
                        </div>

                        {/* 15 — Business Opportunity */}
                        <div id="business" className="space-y-4 pt-12 border-t border-[var(--surface-border)]/60">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                15 — BUSINESS OPPORTUNITY (FUTURE / UNVALIDATED)
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                Behavioral signals could become useful to institutions too
                            </h2>
                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                With user consent, real financial activity could make the behavioral system more useful — giving banks or investment platforms a way to understand customer readiness before recommending products.
                            </p>
                            <div className="p-4 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] font-mono text-xs text-[var(--text-primary)]">
                                <span className="text-[var(--accent-gold)] font-bold block mb-1">PARTNERSHIP HYPOTHESIS</span>
                                User → Consent-based read-only Demat access → Behavioral readiness profile → Better product fit
                            </div>
                            <p className="text-xs text-[var(--text-tertiary)] italic">
                                An investment platform owns the transaction. RupeeRise is designed to understand the behavior around the transaction.
                            </p>

                            {/* Inline Editorial Figure */}
                            <figure className="max-w-xs mx-auto my-16 text-center">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img src="/images/Rupeerise/profile.png" alt="Profile Settings UI" className="w-full h-auto block" />
                                </PhoneMockup>
                                <figcaption className="font-mono text-xs text-[var(--text-tertiary)] mt-4">
                                    Figure: Consent-based read-only Demat profile settings
                                </figcaption>
                            </figure>
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
                    className="border-t border-[var(--surface-border)] pt-16 pb-6 space-y-16"
                >
                    <div className="max-w-2xl mx-auto space-y-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            16 — SHIPPED VS CONCEPTUAL
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-snug">
                            Keeping V1 and V2 honest
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            The developer&apos;s functional MVP did not integrate my redesigned V2 screens. V2 is a conceptual redesign based on original research and later reflection.
                        </p>
                    </div>

                    {/* Interactive Comparison: V1 MVP vs V2 Architecture - Constrained Figure */}
                    <figure className="max-w-4xl mx-auto my-16">
                        <InteractiveCompare
                            id="shipped-compare"
                            title="V1 Hackathon MVP vs V2 Behavioral Architecture"
                            subtitle="Inspect the evolution from informational quizzes to continuous behavioral decision loops."
                            whyRationale="The hackathon jury's question ('Why would someone come back?') forced an architectural pivot. V1 focused on static financial education and quizzes. V2 transforms literacy into continuous behavioral training with simulation sandboxes, thesis logging, and habit scoring."
                            before={{
                                badge: "V1 — Shipped Hackathon MVP",
                                badgeType: "before",
                                title: "Informational Literacy & Quizzes",
                                imageSrc: "/images/Rupeerise/fiundation.png",
                                imageAlt: "V1 Shipped Hackathon MVP",
                                caption: "Shipped in ~4 days build time: basic AI finance quizzes, generic market info, and mentor directory.",
                                highlights: [
                                    "One-time quiz completion gave users no compelling reason to return",
                                    "Did not address emotional FOMO or impulsive buying during market rallies",
                                    "Assumed financial knowledge automatically leads to disciplined execution",
                                ],
                            }}
                            after={{
                                badge: "V2 — Behavioral Redesign",
                                badgeType: "after",
                                title: "5-Stage Decision & Stability System",
                                imageSrc: "/images/Rupeerise/dashboard.png",
                                imageAlt: "V2 Conceptual Behavioral Architecture",
                                caption: "Reframed architecture: historical simulation, mandatory pre-trade thesis gate, and stability scoring.",
                                highlights: [
                                    "Introduces intentional friction prior to trade commitment via thesis logs",
                                    "Scores trading discipline and risk management rather than lucky returns",
                                    "Surfaces personalized psychological biases to curb recurring impulse trading",
                                ],
                            }}
                        />
                        <figcaption className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-4">
                            Figure 2: Architectural evolution from V1 MVP to V2 Behavioral System
                        </figcaption>
                    </figure>

                    {/* Proposed Metrics Targets */}
                    <div id="validation" className="space-y-6 pt-12 border-t border-[var(--surface-border)]">
                        <div className="max-w-2xl mx-auto space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                17 — MEASURING WHETHER IT WORKS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                Proposed validation targets (V2 wasn&apos;t launched)
                            </h2>
                        </div>

                        {/* Scannable Grid in Constrained Container */}
                        <div className="max-w-4xl mx-auto my-8">
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 font-sans text-xs">
                                <div className="p-4 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] shadow-sm">
                                    <span className="font-mono text-xs text-[var(--accent-gold)] block">4-WEEK RETENTION</span>
                                    <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">High</span>
                                    <span className="text-[var(--text-tertiary)] text-[10px]">Useful enough to return</span>
                                </div>
                                <div className="p-4 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] shadow-sm">
                                    <span className="font-mono text-xs text-[var(--accent-gold)] block">THESIS LOG</span>
                                    <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">~70%</span>
                                    <span className="text-[var(--text-tertiary)] text-[10px]">Completion rate target</span>
                                </div>
                                <div className="p-4 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] shadow-sm">
                                    <span className="font-mono text-xs text-[var(--accent-gold)] block">SIM LAB</span>
                                    <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">3+</span>
                                    <span className="text-[var(--text-tertiary)] text-[10px]">Sessions per trade</span>
                                </div>
                                <div className="p-4 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] shadow-sm">
                                    <span className="font-mono text-xs text-[var(--accent-gold)] block">BEHAVIOR CHANGE</span>
                                    <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">Positive</span>
                                    <span className="text-[var(--text-tertiary)] text-[10px]">Reduced impulsivity</span>
                                </div>
                                <div className="p-4 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] shadow-sm">
                                    <span className="font-mono text-xs text-[var(--accent-gold)] block">INSIGHTS</span>
                                    <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">Active</span>
                                    <span className="text-[var(--text-tertiary)] text-[10px]">Visits driven by insights</span>
                                </div>
                                <div className="p-4 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] shadow-sm">
                                    <span className="font-mono text-xs text-[var(--accent-gold)] block">PREMIUM</span>
                                    <span className="font-serif text-xl text-[var(--text-primary)] font-bold block mt-1">~20%</span>
                                    <span className="text-[var(--text-tertiary)] text-[10px]">Conversion hypothesis</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Known Tensions Panel */}
                    <div id="tensions" className="space-y-6 pt-12 border-t border-[var(--surface-border)]">
                        <div className="max-w-2xl mx-auto space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-amber-400 font-semibold">
                                18 — KNOWN TENSIONS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                One open, two resolved in writing — screens haven&apos;t caught up yet
                            </h2>
                        </div>

                        <div className="max-w-2xl mx-auto space-y-4 font-sans text-xs md:text-sm">
                            <div className="p-5 rounded-xl bg-[#2C1E16] border border-amber-500/30 space-y-1.5 shadow-sm">
                                <span className="font-mono text-xs text-amber-400 font-bold">01 · OPEN TENSION</span>
                                <p className="font-semibold text-[var(--text-primary)]">Tier downgrade reads as punishment</p>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    &ldquo;Tier Adjustment Alert&rdquo; violates the principle to inform rather than punish. The mechanism is sound, but the visual framing needs the same constructive treatment as the Stability Score.
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] space-y-1.5 shadow-sm">
                                <span className="font-mono text-xs text-emerald-400 font-bold">02 · RESOLVED IN COPY</span>
                                <p className="font-semibold text-[var(--text-primary)]">Premium stress-testing predicts the market</p>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    Framed as a learning comparison against past behavior rather than a market forecast.
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] space-y-1.5 shadow-sm">
                                <span className="font-mono text-xs text-emerald-400 font-bold">03 · RESOLVED IN COPY</span>
                                <p className="font-semibold text-[var(--text-primary)]">Premium Simulation quietly enables real trades</p>
                                <p className="text-[var(--text-secondary)] leading-relaxed">
                                    Real execution, if introduced, sits behind the exact same Thesis Log and behavioral guardrails.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Additional Screens Gallery */}
                    <div id="more-screens" className="space-y-6 pt-12 border-t border-[var(--surface-border)]">
                        <div className="max-w-2xl mx-auto space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                19 — ADDITIONAL SCREENS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                Rounding out the system
                            </h2>
                        </div>

                        {/* Constrained Mockups Container with ample vertical margin */}
                        <div className="max-w-4xl mx-auto my-16">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <div className="space-y-3">
                                    <PhoneMockup className="max-w-none w-full shadow-xl">
                                        <img src="/images/thumbnails/Rupeerise- dashboard.png" alt="Market Journal" className="w-full h-auto block" />
                                    </PhoneMockup>
                                    <p className="font-mono text-xs text-center text-[var(--text-tertiary)]">Market Journal (Free Tier)</p>
                                </div>
                                <div className="space-y-3">
                                    <PhoneMockup className="max-w-none w-full shadow-xl">
                                        <img src="/images/Rupeerise/simulation.png" alt="Premium Simulation" className="w-full h-auto block" />
                                    </PhoneMockup>
                                    <p className="font-mono text-xs text-center text-[var(--text-tertiary)]">Premium Simulation</p>
                                </div>
                                <div className="space-y-3">
                                    <PhoneMockup className="max-w-none w-full shadow-xl">
                                        <img src="/images/Rupeerise/tier adjustment modal.png" alt="Tier Adjustment Modal" className="w-full h-auto block" />
                                    </PhoneMockup>
                                    <p className="font-mono text-xs text-center text-amber-400">Tier Adjustment Alert (Needs Rework)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Limitations Panel */}
                    <div id="limitations" className="space-y-6 pt-12 border-t border-[var(--surface-border)]">
                        <div className="max-w-2xl mx-auto space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)] font-semibold">
                                20 — LIMITATIONS
                            </span>
                            <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-snug">
                                What ten conversations can and can&apos;t tell you
                            </h2>
                        </div>

                        <div className="max-w-2xl mx-auto space-y-4 font-sans text-xs md:text-sm">
                            <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] space-y-2 shadow-sm">
                                <span className="font-mono text-xs font-bold text-emerald-400">WHAT WE CAN SAY</span>
                                <ul className="space-y-1.5 text-[var(--text-secondary)] leading-relaxed">
                                    <li>• Financial information is already abundant</li>
                                    <li>• Decisions under emotion &amp; uncertainty are hard</li>
                                    <li>• Friction before action introduces helpful reflection</li>
                                </ul>
                            </div>

                            <div className="p-5 rounded-xl bg-[#2C1E16] border border-[var(--surface-border)] space-y-2 shadow-sm">
                                <span className="font-mono text-xs font-bold text-red-400">WHAT WE CAN&apos;T SAY</span>
                                <ul className="space-y-1.5 text-[var(--text-secondary)] leading-relaxed">
                                    <li>• Cannot claim score is live-validated</li>
                                    <li>• Sample size (~10) is exploratory, not statistically representative</li>
                                    <li>• Long-term behavioral retention requires real beta validation</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Reflection & Closing */}
                    <div id="reflection" className="space-y-6 pt-12 border-t border-[var(--surface-border)] max-w-2xl mx-auto font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            21 — WHAT I LEARNED
                        </span>
                        <blockquote className="p-6 md:p-8 rounded-2xl bg-[#2C1E16] border border-[var(--surface-border)] font-serif text-xl sm:text-2xl text-[var(--text-primary)] italic leading-relaxed shadow-lg">
                            &ldquo;Financial literacy isn&apos;t only about knowing concepts. It&apos;s about applying them when a real decision is in front of you.&rdquo;
                        </blockquote>
                        <p>
                            That shift changed RupeeRise from a collection of learning features into a system: Learn → Practise → Decide → Reflect → Improve. The question the jury asked is still the one I&apos;d need to validate first — why would someone come back? V2&apos;s answer isn&apos;t another stock prediction or more trading. It&apos;s the chance to understand how they make decisions, recognize their patterns, and build better habits.
                        </p>
                        <p className="font-serif text-xl text-[var(--text-primary)] font-bold italic pt-2 leading-relaxed">
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
