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
    RotateCcw
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
                
                {/* ========================================================================= */}
                {/* 1. HERO — CONTINUOUS STORY OPENING                                        */}
                {/* ========================================================================= */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="relative pt-8 md:pt-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        {/* 40% Text Column */}
                        <div className="lg:col-span-5 space-y-5">
                            <div className="inline-flex items-center gap-3">
                                <span className="h-px w-6 bg-[var(--accent-gold)]" />
                                <span className="text-[var(--accent-gold)] font-sans text-xs md:text-sm tracking-widest uppercase font-bold">
                                    Case Study · Behavioral Finance
                                </span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight font-serif leading-[1.05]">
                                Rupee<em className="italic text-[var(--accent-gold)] font-serif font-normal">Rise</em>
                            </h1>
                            
                            <p className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-[1.3] italic font-normal">
                                From financial literacy to more deliberate financial decisions
                            </p>

                            <div className="space-y-3.5 text-[var(--text-secondary)] font-sans text-base md:text-lg leading-relaxed pt-1">
                                <p>
                                    RupeeRise began as a financial-literacy product for Gen Z and Millennials. The initial assumption was straightforward: <strong className="text-[var(--text-primary)] font-medium">young people make poor financial decisions because they don&apos;t know enough about money.</strong>
                                </p>
                                <p>
                                    Later, while revisiting the project for my portfolio, I returned to the interview findings and conducted additional secondary research. That changed how I interpreted the problem.
                                </p>
                                <p>
                                    The question shifted from <em>&ldquo;How do we give people more financial knowledge?&rdquo;</em> to: <strong className="text-[var(--text-primary)] font-medium">&ldquo;How might we help people make more deliberate decisions when information, uncertainty and emotion collide?&rdquo;</strong>
                                </p>
                            </div>
                        </div>

                        {/* 60% Visual Column (Dual Overlapping Phones) */}
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

                    {/* Metadata Row (Clean Editorial Grid, No Cards) */}
                    <div className="mt-12 pt-6 border-t border-[var(--surface-border)]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-6 text-xs md:text-sm font-sans">
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Role</span>
                                <span className="text-[var(--text-primary)] font-medium">Lead Product Designer</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Team</span>
                                <span className="text-[var(--text-secondary)]">Designer + Developer</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Timeline</span>
                                <span className="text-[var(--text-secondary)]">14-Day Hackathon + Redesign</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Platform</span>
                                <span className="text-[var(--text-secondary)]">Mobile</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Original Output</span>
                                <span className="text-[var(--text-secondary)]">Functional MVP + Prototype</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Current Status</span>
                                <span className="text-[var(--text-primary)] font-medium">Conceptual redesign</span>
                            </div>
                        </div>

                        {/* Two Phases Note */}
                        <div className="mt-6 pt-4 border-t border-[var(--surface-border)]/60 text-xs md:text-sm font-sans text-[var(--text-secondary)] space-y-1">
                            <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent-gold)] font-semibold">
                                A note on the redesign &amp; two distinct phases:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                                <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                    <span className="font-bold text-[var(--text-primary)] block mb-0.5">Phase 01 · Hackathon:</span>
                                    <span>Research → Original RupeeRise → Functional MVP → AI quiz generation → Presentation</span>
                                </div>
                                <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                                    <span className="font-bold text-[var(--accent-gold)] block mb-0.5">Phase 02 · Portfolio Revisit:</span>
                                    <span>Re-examined research → Secondary research → Reframed problem → Conceptual product redesign</span>
                                </div>
                            </div>
                            <p className="text-xs text-[var(--text-tertiary)] italic pt-1">
                                *The behavioral-finance experience shown later in this case study was not the product integrated into the hackathon MVP.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 2. 01 STARTING POINT & 02 V1: THE FIRST PRODUCT                           */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-10 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        {/* 01 Starting Point */}
                        <div className="lg:col-span-5 space-y-4">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                01 — The Starting Point
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                The hackathon framed the problem around financial literacy
                            </h2>
                            <div className="space-y-3 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    RupeeRise was created during the Udyog Pramoda 14-Day Job Ready Challenge. The &ldquo;Smart Finance for Gen Z &amp; Millennials&rdquo; brief focused on poor financial decisions and financial literacy across budgeting, investments, debt and savings.
                                </p>
                                <div className="p-3 border-l-2 border-[var(--accent-gold)] font-serif text-lg text-[var(--text-primary)] italic">
                                    &ldquo;If young people are making poor financial decisions, they need better financial knowledge and tools.&rdquo;
                                </div>
                                <p>
                                    I didn&apos;t have evidence yet that this was the complete problem. But it was a reasonable hypothesis to test.
                                </p>
                            </div>
                        </div>

                        {/* 02 V1: The First Product */}
                        <div className="lg:col-span-7 space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed lg:border-l lg:border-[var(--surface-border)] lg:pl-12">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                02 — V1: The First Product
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                RupeeRise started as a broader personal-finance product
                            </h2>
                            <p>
                                The first version tried to support several parts of the user&apos;s financial journey:
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm pt-1">
                                <div className="space-y-1">
                                    <strong className="text-[var(--text-primary)] block font-mono text-xs uppercase text-[var(--accent-gold)]">Learn</strong>
                                    <span>Read content, browse Fin Shots, take daily quizzes, learn basic investment concepts.</span>
                                </div>
                                <div className="space-y-1">
                                    <strong className="text-[var(--text-primary)] block font-mono text-xs uppercase text-[var(--accent-gold)]">Manage</strong>
                                    <span>See available balance, track monthly budget, create savings goals, set financial reminders.</span>
                                </div>
                                <div className="space-y-1">
                                    <strong className="text-[var(--text-primary)] block font-mono text-xs uppercase text-[var(--accent-gold)]">Invest</strong>
                                    <span>Discover investments, explore trending stocks, learn about opportunities.</span>
                                </div>
                                <div className="space-y-1">
                                    <strong className="text-[var(--text-primary)] block font-mono text-xs uppercase text-[var(--accent-gold)]">Get guidance</strong>
                                    <span>Browse mentors, explore specialties, compare ratings, access free classes.</span>
                                </div>
                            </div>

                            <p className="font-mono text-xs sm:text-sm text-[var(--text-primary)] bg-[var(--bg-sage)] p-3 rounded-lg border border-[var(--surface-border)]">
                                Learn → Manage → Invest → Get guidance
                            </p>

                            <p className="font-serif text-xl text-[var(--text-primary)] italic">
                                Does having more financial information actually lead to better financial decisions?
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 3. 03 RESEARCH & 04 THE ASSUMPTION I REVISITED                             */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            03 — Research Synthesis
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            I wanted to understand what was happening beyond the product screens
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            I conducted approximately <strong className="text-[var(--text-primary)] font-medium">10 exploratory 1:1 interviews</strong> with Gen Z and Millennials in person at a café. The conversations were treated as exploratory qualitative research. Two patterns stood out:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Pattern 01 */}
                        <div className="space-y-3">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                                PATTERN 01 · ≥ 6 PARTICIPANTS
                            </span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">
                                Financial information was already everywhere
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    At least 6 participants agreed that financial content from finfluencers can leave people with fragmented or incomplete financial knowledge, even while they continue to invest or trade.
                                </p>
                                <p>
                                    They were already consuming information from creators and picking up advice. But individual pieces of information don&apos;t automatically create a complete understanding of what to do in a particular financial situation.
                                </p>
                            </div>
                        </div>

                        {/* Pattern 02 */}
                        <div className="space-y-3 md:border-l md:border-[var(--surface-border)] md:pl-10">
                            <span className="font-mono text-xs font-bold text-[#ef4444] uppercase tracking-wider">
                                PATTERN 02 · ≥ 4 PARTICIPANTS
                            </span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">
                                Some participants still struggled at the decision moment
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    At least 4 participants described difficulties such as <strong className="text-[var(--text-primary)] font-medium">FOMO, overtrading, difficulty judging risk, or hesitation/fear around investing</strong>.
                                </p>
                                <p className="font-serif text-xl text-[var(--text-primary)] italic">
                                    &ldquo;Knowing something about investing and making a stable decision in the moment are two different problems.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 04 The Assumption I Revisited */}
                    <div className="space-y-4 pt-8 border-t border-[var(--surface-border)] max-w-3xl">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            04 — Reframing
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Financial education wasn&apos;t wrong. It was incomplete.
                        </h2>
                        <div className="space-y-3 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                The research didn&apos;t tell me to remove financial education. A beginner genuinely needs financial concepts, budgeting, and savings goals. But once someone starts making investment decisions, they need <strong className="text-[var(--text-primary)] font-medium">context, risk awareness, a way to rehearse decisions, reflection before acting, and feedback on their own behavior</strong>.
                            </p>
                            <div className="space-y-2 pt-2">
                                <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-[var(--surface-border)] font-mono text-xs text-[var(--text-secondary)]">
                                    <span className="text-[#ef4444] line-through">Lack of financial knowledge → poor financial decisions</span>
                                </div>
                                <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-emerald-500/40 font-mono text-xs text-[var(--text-primary)] font-semibold">
                                    <span className="text-emerald-400">Fragmented info + uncertainty + emotion → potentially unstable decisions</span>
                                </div>
                            </div>
                            <p className="font-serif text-xl text-[var(--text-primary)] italic pt-1">
                                &ldquo;How might we help young investors turn fragmented financial information into more deliberate financial decisions?&rdquo;
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 4. 05 LAYERED SYSTEM & 06 PRODUCT THESIS                                  */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            05 — Layered Architecture
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            From one product to a layered system
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            I designed RupeeRise as a progression through different levels of financial decision-making:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                        <div className="space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">
                                Layer 01 · Foundation
                            </span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">Build financial knowledge</h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Financial concepts, budgeting, savings goals, and structured financial basics.
                            </p>
                        </div>

                        <div className="space-y-2 md:border-l md:border-[var(--surface-border)] md:pl-6">
                            <span className="font-mono text-xs font-bold text-[#60a5fa] uppercase tracking-wider block">
                                Layer 02 · Bridge
                            </span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">Prepare before real exposure</h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Market context, historical scenarios, simulation lab, and risk awareness.
                            </p>
                        </div>

                        <div className="space-y-2 md:border-l md:border-[var(--surface-border)] md:pl-6">
                            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                                Layer 03 · Behavioral
                            </span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">Make decision patterns visible</h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Stability Score, Thesis Log, Behavioral Insights, and contextual mentorship.
                            </p>
                        </div>
                    </div>

                    <div className="pt-2">
                        <p className="font-mono text-xs sm:text-sm text-center text-[var(--text-primary)] bg-[var(--bg-sage)] p-3 rounded-lg border border-[var(--surface-border)]">
                            Learn → Understand → Simulate → Decide → Reflect
                        </p>
                    </div>

                    {/* 06 The Product Thesis */}
                    <div className="space-y-4 pt-8 border-t border-[var(--surface-border)] max-w-3xl">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            06 — The Product Thesis
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Three core principles
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
                            <div className="space-y-1">
                                <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">01</span>
                                <h3 className="font-serif text-lg text-[var(--text-primary)]">Measure behavior, not just outcomes</h3>
                                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">Financial returns don&apos;t necessarily tell us whether a decision was disciplined.</p>
                            </div>
                            <div className="space-y-1">
                                <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">02</span>
                                <h3 className="font-serif text-lg text-[var(--text-primary)]">Add friction at the decision moment</h3>
                                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">If impulsive behavior is part of the problem, removing every barrier works against the purpose.</p>
                            </div>
                            <div className="space-y-1">
                                <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">03</span>
                                <h3 className="font-serif text-lg text-[var(--text-primary)]">Reward discipline, not activity</h3>
                                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">Rewarding trading frequency reinforces the behavior we aim to help control.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 5. 07 STABILITY SCORE, 08 SIMULATION LAB, 09 THESIS LOG, 10 INSIGHTS      */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-14 border-t border-[var(--surface-border)] pt-12"
                >
                    {/* 07 Stability Score */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                07 — Stability Score
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                What if making money isn&apos;t the same as making a good decision?
                            </h2>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    I separated <strong className="text-[var(--text-primary)] font-medium">financial outcome</strong> from <strong className="text-[var(--text-primary)] font-medium">decision quality</strong>. Profit is deliberately excluded as the primary signal.
                                </p>
                                <p>
                                    The Stability Score evaluates: <strong className="text-[var(--text-primary)] font-medium">Risk awareness · Decision consistency · Diversification · Reaction patterns · Financial discipline</strong>.
                                </p>
                                <p className="font-mono text-xs text-[var(--accent-gold)]">
                                    Stability Score → What changed? → Which behavior contributed? → What can I improve?
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-6 flex justify-center">
                            <div className="w-full max-w-[280px]">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img src="/images/Rupeerise/dashboard.png" alt="Stability Score UI" className="w-full h-auto block" />
                                </PhoneMockup>
                            </div>
                        </div>
                    </div>

                    {/* 08 Simulation Lab & 09 Thesis Log */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[var(--surface-border)]">
                        <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
                            <div className="w-full max-w-[280px]">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img src="/images/Rupeerise/simulation.png" alt="Simulation Lab UI" className="w-full h-auto block" />
                                </PhoneMockup>
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-4 order-1 lg:order-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                08 — Simulation Lab &amp; 09 — Thesis Log
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                The friction is the intervention
                            </h2>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    In the Simulation Lab, users encounter historical market scenarios and decide what they would do before taking greater exposure: <strong className="text-[var(--text-primary)] font-medium">Scenario → Decision → Outcome → Reflection</strong>.
                                </p>
                                <p>
                                    For meaningful decisions, the user must articulate a written Thesis Log: <em>Why am I taking this position? Why now? What do I expect? What would make me exit?</em>
                                </p>
                                <p className="font-serif text-xl text-[var(--text-primary)] italic pl-3 border-l-2 border-[var(--accent-gold)]">
                                    &ldquo;The friction isn&apos;t a usability failure. It&apos;s the intervention.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 10 Behavioral Insights & 11 Contextual Mentorship */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center pt-8 border-t border-[var(--surface-border)]">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                10 — Behavioral Insights &amp; 11 — Mentorship
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Don&apos;t just show what happened. Show how the user behaved.
                            </h2>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    Behavioral Insights connects decisions over time (e.g. repeated buying after rapid price movements $\rightarrow$ possible FOMO pattern $\rightarrow$ reflection). Rather than &ldquo;You made a bad decision,&rdquo; it surfaces: <em>&ldquo;This pattern appears repeatedly in your recent decisions.&rdquo;</em>
                                </p>
                                <p>
                                    Mentorship transforms from a passive directory into an intervention triggered when a behavioral need is detected.
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-6 flex justify-center">
                            <div className="w-full max-w-[280px]">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img src="/images/Rupeerise/insights.png" alt="Behavioral Insights Screen" className="w-full h-auto block" />
                                </PhoneMockup>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 6. 12 DECISION LOOP, 13 FIVE DECISIONS, 14 WHAT NOT TO BUILD              */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            12 &amp; 13 — System Loop &amp; Design Decisions
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            Five decisions that shaped the product
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                        <div className="space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">DECISION 01</span>
                            <h3 className="font-serif text-xl text-[var(--text-primary)]">Remove profit from the Stability Score</h3>
                            <p>Measure behavioral stability instead of portfolio performance. A profitable decision can still be impulsive or poorly reasoned.</p>
                        </div>

                        <div className="space-y-2 md:border-l md:border-[var(--surface-border)] md:pl-8">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">DECISION 02</span>
                            <h3 className="font-serif text-xl text-[var(--text-primary)]">Make the Thesis Log mandatory</h3>
                            <p>Require reflection before meaningful simulated decisions. Optional reflection is easiest to skip when most needed.</p>
                        </div>

                        <div className="space-y-2 pt-4 border-t border-[var(--surface-border)]">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">DECISION 03</span>
                            <h3 className="font-serif text-xl text-[var(--text-primary)]">Reward discipline, not frequency</h3>
                            <p>Progress signals reflection, consistency, risk awareness, and diversification—not trading volume.</p>
                        </div>

                        <div className="space-y-2 pt-4 border-t border-[var(--surface-border)] md:border-l md:border-[var(--surface-border)] md:pl-8">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">DECISION 04</span>
                            <h3 className="font-serif text-xl text-[var(--text-primary)]">Make the premium boundary contextual</h3>
                            <p>Free answers &ldquo;How am I doing?&rdquo; while Premium answers &ldquo;Why am I behaving this way, and what should I do differently?&rdquo;</p>
                        </div>

                        <div className="space-y-2 pt-4 border-t border-[var(--surface-border)] md:col-span-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)]">DECISION 05</span>
                            <h3 className="font-serif text-xl text-[var(--text-primary)]">Inform, don&apos;t punish</h3>
                            <p>Framed as information rather than punishment: What changed → Why it changed → What behavior contributed → What can I improve?</p>
                        </div>
                    </div>

                    {/* 14 What I deliberately chose NOT to build */}
                    <div className="space-y-4 pt-8 border-t border-[var(--surface-border)] max-w-3xl">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#ef4444] font-semibold">
                            14 — Deliberate Omissions
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-[1.2]">
                            What I deliberately chose not to build
                        </h2>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-sans text-xs sm:text-sm text-[var(--text-secondary)]">
                            <li>• <strong className="text-[var(--text-primary)]">Trending-stock feeds:</strong> Could create urgency and FOMO.</li>
                            <li>• <strong className="text-[var(--text-primary)]">Influencer marketplace:</strong> Could reinforce herd behavior.</li>
                            <li>• <strong className="text-[var(--text-primary)]">Trading streaks:</strong> Could reward frequency over quality.</li>
                            <li>• <strong className="text-[var(--text-primary)]">Profit leaderboards:</strong> Could confuse luck with skill.</li>
                            <li>• <strong className="text-[var(--text-primary)]">Price-movement push alerts:</strong> Could create unnecessary urgency.</li>
                            <li>• <strong className="text-[var(--text-primary)]">Automatic punitive restrictions:</strong> Removes user control.</li>
                        </ul>
                        <p className="font-serif text-lg text-[var(--text-primary)] italic pt-1">
                            &ldquo;A financial product shouldn&apos;t optimize engagement at the expense of decision quality.&rdquo;
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 7. 15–20 SHIPPED, METRICS, LIMITATIONS & REFLECTION                       */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            16, 17 &amp; 18 — Delivery &amp; Proposed Metrics
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            What shipped &amp; validation targets
                        </h2>
                    </div>

                    <div className="max-w-3xl font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed space-y-3">
                        <p>
                            <strong className="text-[var(--text-primary)] font-medium">AI in the project:</strong> AI was part of the hackathon MVP for generating finance quizzes. When I reframed RupeeRise around behavioral decision-making, I didn&apos;t force AI into the redesign. I do not claim AI-powered behavioral analysis or risk scoring.
                        </p>
                        <p>
                            <strong className="text-[var(--text-primary)] font-medium">Separating the MVP:</strong> During the hackathon, we built a functional MVP with rudimentary UI. My redesigned UI was not integrated into that build. The behavioral-finance system is a conceptual product redesign.
                        </p>
                    </div>

                    {/* Proposed Metrics Targets */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-[var(--surface-border)]">
                        <div>
                            <div className="font-serif text-4xl md:text-5xl text-[var(--text-primary)]">~70%</div>
                            <div className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1">Thesis Log Target</div>
                        </div>
                        <div>
                            <div className="font-serif text-4xl md:text-5xl text-[var(--text-primary)]">3+</div>
                            <div className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1">Simulations Before Trade</div>
                        </div>
                        <div>
                            <div className="font-serif text-4xl md:text-5xl text-[var(--text-primary)]">30-Day</div>
                            <div className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1">Stability Direction</div>
                        </div>
                        <div>
                            <div className="font-serif text-4xl md:text-5xl text-[var(--text-primary)]">~20%</div>
                            <div className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1">Premium Hypothesis</div>
                        </div>
                    </div>

                    {/* 19 Limitations & 20 What I Would Do Differently */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[var(--surface-border)]">
                        <div className="space-y-2 font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                            <span className="font-mono text-xs font-bold text-[var(--text-tertiary)] uppercase tracking-wider block">19 / Limitations</span>
                            <p>Small exploratory sample (~10 participants). I do not claim all young investors experience these problems or that the score has been live-validated.</p>
                        </div>
                        <div className="space-y-2 font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed md:border-l md:border-[var(--surface-border)] md:pl-8">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">20 / What I Would Do Differently</span>
                            <p>Validate whether users recognize behavioral patterns and whether reflection actually changes their next decision before designing the score.</p>
                        </div>
                    </div>

                    {/* Final Reflection */}
                    <div className="space-y-4 pt-6 border-t border-[var(--surface-border)] max-w-3xl font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Reflection
                        </span>
                        <p>
                            RupeeRise changed how I think about the difference between giving users information and helping users make decisions. People were already consuming financial information; the real challenge was applying it under uncertainty and emotion.
                        </p>
                        <div className="pt-2 border-l-2 border-[var(--accent-gold)] pl-4 font-serif text-xl sm:text-2xl text-[var(--text-primary)] italic">
                            &ldquo;When a user already knows enough, what can the product do at the exact moment knowledge needs to become a decision?&rdquo;
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 8. NEXT CASE STUDY NAVIGATION                                             */}
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
