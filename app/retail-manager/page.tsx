"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import { DesktopMockup } from "@/components/ui/mockups";
import RetailDashboardPreview from "@/components/ui/RetailDashboardPreview";
import { 
    ArrowRight, 
    CheckCircle2, 
    Store, 
    Warehouse, 
    UserCheck,
    HelpCircle,
    TrendingUp,
    Layers,
    Sparkles,
    Brain,
    Clock,
    Target,
    Zap,
    ShieldCheck,
    ArrowRightCircle,
    Boxes
} from "lucide-react";

export default function RetailManagerPage() {
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
            title="Retail Manager Intelligence OS"
            role="Product Designer — Product Strategy, UX/UI & Brand"
            timeline="2026"
            tags={["B2B SaaS", "Retail Technology", "Product Strategy", "UX/UI & Brand"]}
            hideDefaultHero={true}
        >
            <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 md:px-10 space-y-20 md:space-y-28 pb-24">
                
                {/* ========================================================================= */}
                {/* 1. HERO — CONTINUOUS STORY OPENING & THE CONTEXT                          */}
                {/* ========================================================================= */}
                <motion.section
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                    className="relative pt-8 md:pt-16"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                        {/* 45% Text Column */}
                        <div className="lg:col-span-5 space-y-5">
                            <div className="inline-flex items-center gap-3">
                                <span className="h-px w-6 bg-[var(--accent-gold)]" />
                                <span className="text-[var(--accent-gold)] font-sans text-xs md:text-sm tracking-widest uppercase font-bold">
                                    Case Study · B2B SaaS · Retail Technology
                                </span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight font-serif leading-[1.05]">
                                Retail Manager <em className="italic text-[var(--accent-gold)] font-serif font-normal block sm:inline">Intelligence OS</em>
                            </h1>
                            
                            <p className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-[1.3] italic font-normal">
                                From operational data to operational decisions
                            </p>

                            <div className="space-y-3.5 text-[var(--text-secondary)] font-sans text-base md:text-lg leading-relaxed pt-1">
                                <p>
                                    Retail Manager is a desktop-based retail management system that supports day-to-day operations such as billing, inventory, purchasing, deliveries and multi-store stock management.
                                </p>
                                <p>
                                    The system already captures the operational data needed to run these activities. The problem I identified was not a lack of data, but the effort required to find what matters in that data and decide what to do next.
                                </p>
                                <p className="text-sm md:text-base text-[var(--text-secondary)] bg-[var(--bg-sage)] p-4 rounded-xl border border-[var(--surface-border)]">
                                    <strong className="text-[var(--text-primary)] block font-semibold mb-1 font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider">Operational Scenario:</strong>
                                    If tomatoes are selling quickly at one store while excess stock is sitting at another, the information may already exist across the system. Someone still needs to notice the situation, connect the two conditions and decide whether to transfer the stock, discount it or take another action.
                                </p>
                                <p className="font-serif text-xl text-[var(--text-primary)] italic pt-2 border-l-2 border-[var(--accent-gold)] pl-4">
                                    That led me to a simple question: What if Retail Manager could bring important information forward and help users decide what deserves attention?
                                </p>
                                <p className="font-sans text-sm text-[var(--text-tertiary)] italic">
                                    This became the starting point for Retail Manager Intelligence OS.
                                </p>
                            </div>
                        </div>

                        {/* 55% Visual Column (Interactive Desktop Preview) */}
                        <div className="lg:col-span-7 flex justify-center lg:justify-end">
                            <div className="w-full max-w-[760px] shadow-2xl">
                                <DesktopMockup className="max-w-none w-full shadow-2xl">
                                    <RetailDashboardPreview />
                                </DesktopMockup>
                                <p className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-3">
                                    Retail Manager Intelligence OS · Live Recommendation &amp; Multi-Outlet Layer
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Metadata Row (Clean Editorial Grid) */}
                    <div className="mt-12 pt-6 border-t border-[var(--surface-border)]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-y-5 gap-x-6 text-xs md:text-sm font-sans">
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">My Role</span>
                                <span className="text-[var(--text-primary)] font-medium">Product Designer — Product Strategy, UX/UI &amp; Brand</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Client</span>
                                <span className="text-[var(--text-secondary)]">SRD Soft Tech</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Industry</span>
                                <span className="text-[var(--text-secondary)]">B2B SaaS · Retail Technology</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Timeline</span>
                                <span className="text-[var(--text-secondary)]">2026</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Status</span>
                                <span className="text-[var(--text-primary)] font-medium flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)] animate-pulse"></span>
                                    Concept validation · Product in progress
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 2. FINDING THE OPPORTUNITY                                                */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-[var(--surface-border)] pt-12">
                        {/* Section Left */}
                        <div className="lg:col-span-5 space-y-4">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                Research &amp; Analysis
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Finding the opportunity
                            </h2>
                            <div className="space-y-3 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    I first studied how Retail Manager worked across its existing operational workflows.
                                </p>
                                <p>
                                    I then looked at retail ERP products, competitor approaches, industry trends and available public information to understand how other systems handled operational reporting and decision-making.
                                </p>
                                <p className="text-[var(--text-primary)] font-serif text-xl italic pt-1">
                                    The research pointed toward an opportunity: retail systems are already good at recording and reporting data, but users still have to interpret that data themselves.
                                </p>
                            </div>
                        </div>

                        {/* Section Right: Product Model & Hypothesis */}
                        <div className="lg:col-span-7 space-y-5 lg:border-l lg:border-[var(--surface-border)] lg:pl-12">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                Product Model
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                An intelligence layer for actionable signals
                            </h2>
                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                Instead of creating another reporting dashboard, I explored an intelligence layer that could identify meaningful conditions in existing operational data and present them in a way that supports action.
                            </p>

                            {/* Product Model Flow Diagram */}
                            <div className="space-y-4 py-2">
                                <div className="space-y-1.5">
                                    <span className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider font-bold">The Initial Product Model:</span>
                                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[var(--text-primary)] bg-[var(--bg-sage)] p-4 rounded-xl border border-[var(--surface-border)]">
                                        <span>Existing data</span>
                                        <span className="text-[var(--accent-gold)]">→</span>
                                        <span>Important signal</span>
                                        <span className="text-[var(--accent-gold)]">→</span>
                                        <span>Explanation</span>
                                        <span className="text-[var(--accent-gold)]">→</span>
                                        <span className="text-emerald-400 font-semibold">Recommendation</span>
                                        <span className="text-[var(--accent-gold)]">→</span>
                                        <span className="text-[var(--text-primary)] font-bold">Decision</span>
                                    </div>
                                </div>
                            </div>

                            <p className="font-mono text-xs md:text-sm text-[var(--text-tertiary)] italic pt-1">
                                *This was a product hypothesis, not a claim that the problem had already been validated with end users.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 3. TURNING THE OPPORTUNITY INTO A PRODUCT                                 */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="py-4 md:py-8"
                >
                    <div className="border-t border-[var(--surface-border)] pt-12 space-y-8">
                        <div className="max-w-3xl space-y-3">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                Strategy &amp; Stakeholder Validation
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Turning the opportunity into a product
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                            <div className="lg:col-span-7 space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    The broader idea of an intelligence layer was already part of the client&apos;s future product direction.
                                </p>
                                <p>
                                    <strong className="text-[var(--text-primary)] font-medium">My contribution was turning that direction into a concrete product concept and experience.</strong>
                                </p>
                                <p>
                                    I started by creating a product pitch for the founder rather than immediately designing screens. The pitch explained how an Intelligence OS could sit alongside Retail Manager and use its existing operational data to surface useful signals and recommendations.
                                </p>
                                <p>
                                    The founder&apos;s response was specific: he felt the concept could benefit <strong className="text-[var(--text-primary)] font-medium">some of his customers, but not the entire customer base</strong>.
                                </p>
                                <p>
                                    That gave the direction stakeholder validation and helped move the project forward. It was not treated as end-user validation; user testing is part of the next stage.
                                </p>
                            </div>

                            <div className="lg:col-span-5 space-y-4 p-6 bg-[var(--bg-sage)] rounded-xl border border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-1">
                                    Key Milestone
                                </span>
                                <div className="space-y-3 font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                    <div className="font-serif text-xl text-[var(--text-primary)] italic">
                                        &ldquo;Benefits specific customers with operational complexity, not necessarily the entire base.&rdquo;
                                    </div>
                                    <p className="text-xs font-mono text-[var(--text-tertiary)] pt-1">
                                        Focusing the initial target on multi-location and inventory-heavy businesses where owners cannot personally monitor every branch.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 4. DESIGNING THE INTELLIGENCE OS (FOUR PRINCIPLES)                        */}
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
                            Design Principles
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            Designing the Intelligence OS
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 pt-4 border-t border-[var(--surface-border)]">
                        {/* Principle 01 */}
                        <div className="space-y-3">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                                Principle 01
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Make the important information visible first
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    The first design decision was to avoid turning Intelligence OS into another analytics dashboard.
                                </p>
                                <p className="font-serif text-xl text-[var(--text-primary)] italic pl-3 border-l-2 border-[var(--accent-gold)]">
                                    The experience starts with: &ldquo;What needs my attention right now?&rdquo;
                                </p>
                                <p>
                                    Instead of requiring the manager to search through reports, the system surfaces conditions that may require attention:
                                </p>
                                <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-1 text-[var(--text-primary)]">
                                    <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">• Perishable stock at risk</div>
                                    <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">• Low or excess inventory</div>
                                    <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">• Location stock differences</div>
                                    <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">• Delivery discrepancies</div>
                                    <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">• Supplier patterns</div>
                                    <div className="p-2.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)]">• Stock requests</div>
                                </div>
                                <p className="pt-1">
                                    The interface then provides context around the condition and a possible next action.
                                </p>
                            </div>
                        </div>

                        {/* Principle 02 */}
                        <div className="space-y-3 md:border-l md:border-[var(--surface-border)] md:pl-10">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                                Principle 02
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Recommend, don&apos;t decide
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    The system can identify a situation, but it cannot know every piece of business context behind the decision.
                                </p>
                                <p>
                                    If one store has excess tomatoes and another has high demand, for example, the system can recommend considering a transfer. But the manager may instead decide to discount the stock, purchase elsewhere, investigate the demand or do nothing.
                                </p>
                                <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-emerald-500/30 font-mono text-xs text-emerald-400 font-bold">
                                    System recommends → Person decides
                                </div>
                                <p>
                                    The client&apos;s longer-term strategy includes moving toward more controlled automation. For this stage, my design response was to keep operational decisions with the person rather than automate them prematurely.
                                </p>
                            </div>
                        </div>

                        {/* Principle 03 */}
                        <div className="space-y-3 pt-6 border-t border-[var(--surface-border)]">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                                Principle 03
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Read existing data before changing the existing system
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    Retail Manager is already responsible for core business operations.
                                </p>
                                <p>
                                    I therefore designed the initial Intelligence OS as a <strong className="text-[var(--text-primary)] font-medium">read-only layer</strong>. It reads existing operational data without writing back to the legacy system:
                                </p>
                                <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-[var(--surface-border)] font-mono text-xs text-[var(--text-primary)]">
                                    Retail Manager → Intelligence OS → Recommendation → Human decision
                                </div>
                                <p>
                                    This creates a way to test the intelligence capability without making the existing operational system dependent on an unproven layer. Deeper integration can come later once the concept has been validated.
                                </p>
                            </div>
                        </div>

                        {/* Principle 04 */}
                        <div className="space-y-3 pt-6 border-t border-[var(--surface-border)] md:border-l md:border-[var(--surface-border)] md:pl-10">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                                Principle 04
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Don&apos;t make users ask the AI
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    I also chose not to make conversational AI the primary interface.
                                </p>
                                <p>
                                    A manager shouldn&apos;t have to think about what question to type before receiving useful information. Instead, the product proactively surfaces relevant conditions.
                                </p>
                                <p className="font-serif text-lg text-[var(--text-primary)] italic pl-3 border-l-2 border-[var(--accent-gold)]">
                                    The principle was simple: The system should surface what deserves attention instead of making the user search for it.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 5. DESIGNING AROUND OPERATIONAL ROLES & WORKFLOWS                          */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-10 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Role-Based Experience
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Designing around operational roles
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            The same information is not equally useful to everyone using the system.
                        </p>
                    </div>

                    {/* Three Operational Roles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[var(--surface-border)]">
                        <div className="space-y-2 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <div className="flex items-center gap-2 text-[var(--accent-gold)] font-mono text-xs font-bold uppercase">
                                <UserCheck className="w-4 h-4" /> Owner
                            </div>
                            <p className="font-serif text-xl text-[var(--text-primary)] italic">
                                &ldquo;What needs my attention today?&rdquo;
                            </p>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                The overview focuses on important operational conditions and recommended actions.
                            </p>
                        </div>

                        <div className="space-y-2 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <div className="flex items-center gap-2 text-[#60a5fa] font-mono text-xs font-bold uppercase">
                                <Warehouse className="w-4 h-4" /> Warehouse
                            </div>
                            <p className="font-serif text-xl text-[var(--text-primary)] italic">
                                &ldquo;What arrived, what is missing, and what needs to move?&rdquo;
                            </p>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                The experience focuses on receiving, deliveries and stock movement.
                            </p>
                        </div>

                        <div className="space-y-2 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                                <Store className="w-4 h-4" /> Store
                            </div>
                            <p className="font-serif text-xl text-[var(--text-primary)] italic">
                                &ldquo;What&apos;s running low and what do I need to request?&rdquo;
                            </p>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                The experience focuses on stock availability and requests.
                            </p>
                        </div>
                    </div>

                    <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                        This led to a role-based experience rather than one large intelligence dashboard.
                    </p>

                    {/* Core Workflows Section */}
                    <div className="space-y-4 pt-8 border-t border-[var(--surface-border)]">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold block">
                            Initial Scope
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                            The core workflows
                        </h3>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            I translated the product direction into four initial workflows:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                            <div className="p-4 bg-[var(--bg-sage)] border border-[var(--surface-border)] rounded-xl space-y-2">
                                <div className="font-mono text-xs font-bold text-[var(--accent-gold)]">WORKFLOW 01</div>
                                <div className="font-serif text-lg text-[var(--text-primary)] font-bold">Today&apos;s Overview</div>
                                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">
                                    Brings important operational conditions together so a manager can quickly see what needs attention.
                                </p>
                            </div>
                            <div className="p-4 bg-[var(--bg-sage)] border border-[var(--surface-border)] rounded-xl space-y-2">
                                <div className="font-mono text-xs font-bold text-[var(--accent-gold)]">WORKFLOW 02</div>
                                <div className="font-serif text-lg text-[var(--text-primary)] font-bold">Stock View</div>
                                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">
                                    Helps users understand inventory conditions across locations, including stock levels, consumption and days of cover.
                                </p>
                            </div>
                            <div className="p-4 bg-[var(--bg-sage)] border border-[var(--surface-border)] rounded-xl space-y-2">
                                <div className="font-mono text-xs font-bold text-[var(--accent-gold)]">WORKFLOW 03</div>
                                <div className="font-serif text-lg text-[var(--text-primary)] font-bold">Delivery Received</div>
                                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">
                                    Makes it easier to compare ordered quantities with what was actually received and identify discrepancies.
                                </p>
                            </div>
                            <div className="p-4 bg-[var(--bg-sage)] border border-[var(--surface-border)] rounded-xl space-y-2">
                                <div className="font-mono text-xs font-bold text-[var(--accent-gold)]">WORKFLOW 04</div>
                                <div className="font-serif text-lg text-[var(--text-primary)] font-bold">Stock Request</div>
                                <p className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed">
                                    Connects a store&apos;s stock situation with the request process while keeping the decision with the user.
                                </p>
                            </div>
                        </div>

                        <p className="font-sans text-sm md:text-base text-[var(--text-tertiary)] italic pt-2">
                            These workflows were chosen as the initial product surface rather than attempting to cover every possible retail operation at once.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 6. FROM CONCEPT TO WORKING APPLICATION                                    */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-8 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Implementation Scope
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            From concept to working application
                        </h2>
                    </div>

                    <div className="space-y-6 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-4xl">
                        <p>
                            The concept has now been translated into a working application rather than remaining only as a pitch or set of static screens.
                        </p>
                        
                        <div className="p-4 bg-[var(--bg-sage)] rounded-xl border border-[var(--surface-border)] font-mono text-xs sm:text-sm text-[var(--text-primary)] flex items-center gap-2 flex-wrap">
                            <span className="text-[var(--accent-gold)] font-bold uppercase">My Work Expansion:</span>
                            <span>Product strategy</span>
                            <span className="text-[var(--accent-gold)]">→</span>
                            <span>UX/UI</span>
                            <span className="text-[var(--accent-gold)]">→</span>
                            <span>Application design</span>
                            <span className="text-[var(--accent-gold)]">→</span>
                            <span className="text-emerald-400 font-bold">Frontend/backend implementation</span>
                        </div>

                        <p>
                            The application demonstrates how the intelligence layer can connect operational data with recommendations and actions.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-2">
                            <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-1.5">
                                <span className="text-[var(--accent-gold)] font-bold block">INVENTORY TRANSFER LOGIC</span>
                                <p className="text-[var(--text-secondary)] font-sans text-sm">
                                    Excess stock → Identify another store with demand → Recommend transfer → User decides
                                </p>
                            </div>
                            <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-1.5">
                                <span className="text-[var(--accent-gold)] font-bold block">DELIVERY DISCREPANCY LOGIC</span>
                                <p className="text-[var(--text-secondary)] font-sans text-sm">
                                    Ordered quantity → Received quantity → Detect discrepancy → Surface issue → Follow-up action
                                </p>
                            </div>
                        </div>

                        <p className="pt-2">
                            The goal is to make the intelligence useful within the workflow, rather than separating it into another reporting product.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 7. EXPECTED IMPACT                                                        */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-8 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Measurable Objectives
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Expected impact
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            The product is being designed against measurable improvement targets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-[var(--surface-border)]">
                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-serif text-3xl md:text-4xl font-bold text-[var(--accent-gold)]">~50%</span>
                            <p className="font-sans text-sm text-[var(--text-primary)] font-medium">Reduction in manual operational monitoring work</p>
                        </div>
                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-serif text-3xl md:text-4xl font-bold text-emerald-400">40–60%</span>
                            <p className="font-sans text-sm text-[var(--text-primary)] font-medium">Faster identification of important inventory issues</p>
                        </div>
                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">INVENTORY UTILIZATION</span>
                            <p className="font-sans text-sm text-[var(--text-primary)] font-medium">Better use of existing inventory across stores</p>
                        </div>
                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">PERISHABLE CONTROL</span>
                            <p className="font-sans text-sm text-[var(--text-primary)] font-medium">Reduced avoidable loss of perishable stock</p>
                        </div>
                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">BALANCED STOCK</span>
                            <p className="font-sans text-sm text-[var(--text-primary)] font-medium">Fewer situations where one store has excess while another faces shortage</p>
                        </div>
                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">VALUE RECOVERY</span>
                            <p className="font-sans text-sm text-[var(--text-primary)] font-medium">Recovery of value that could otherwise be lost through spoilage</p>
                        </div>
                    </div>

                    <div className="max-w-3xl space-y-3 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed pt-2">
                        <p>
                            For example, if tomatoes are sitting unsold at Store C while Store A is experiencing higher demand, transferring the stock can reduce the need to purchase new inventory and reduce the risk of spoilage.
                        </p>
                        <p>
                            If selling the remaining stock at a discount is appropriate, recovering some value can still be better than allowing the inventory to expire.
                        </p>
                        <p className="font-mono text-xs md:text-sm text-[var(--text-tertiary)] italic pt-1">
                            *These targets define what the product is expected to improve. They are not measured outcomes yet.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 8. WHAT HAPPENS NEXT                                                      */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-8 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Next Phase
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            What happens next
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            The next phase is about turning the product hypothesis into evidence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">STEP 01</span>
                            <h3 className="font-serif text-xl text-[var(--text-primary)] font-bold">Implement with real data</h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Connect Intelligence OS with Retail Manager&apos;s operational data and test it with realistic data volumes.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">STEP 02</span>
                            <h3 className="font-serif text-xl text-[var(--text-primary)] font-bold">Validate with users</h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Test the product with relevant users to understand whether the recommendations are clear, useful and actionable.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">STEP 03</span>
                            <h3 className="font-serif text-xl text-[var(--text-primary)] font-bold">Measure the targets</h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Evaluate whether the product actually reduces manual effort, improves issue identification and helps users make better inventory decisions.
                            </p>
                        </div>

                        <div className="p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-2">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">STEP 04</span>
                            <h3 className="font-serif text-xl text-[var(--text-primary)] font-bold">Iterate</h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Use the findings to improve the recommendations, workflows and product experience before broader implementation.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 9. THE LONGER-TERM OPPORTUNITY                                            */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-10 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Ecosystem Strategy
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            The longer-term opportunity
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            The immediate goal is to prove Intelligence OS within Retail Manager.
                        </p>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            The longer-term strategy is to make the intelligence layer useful across the client&apos;s product ecosystem and eventually explore it as a capability that can work with other legacy business systems.
                        </p>
                    </div>

                    {/* Progression flow */}
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm">
                            <span className="px-3.5 py-2 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)] text-[var(--text-primary)]">
                                Retail Manager <span className="text-[var(--text-tertiary)] text-xs block font-sans">Retail operations</span>
                            </span>
                            <span className="text-[var(--accent-gold)] font-bold">↓</span>
                            <span className="px-3.5 py-2 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)] text-[var(--text-primary)]">
                                RMServe <span className="text-[var(--text-tertiary)] text-xs block font-sans">Restaurant operations</span>
                            </span>
                            <span className="text-[var(--accent-gold)] font-bold">↓</span>
                            <span className="px-3.5 py-2 rounded-lg bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/40 text-[var(--accent-gold)] font-bold">
                                RM Intelligence OS <span className="text-[var(--accent-gold)]/80 text-xs block font-sans">Shared intelligence layer</span>
                            </span>
                            <span className="text-[var(--accent-gold)] font-bold">↓</span>
                            <span className="px-3.5 py-2 rounded-lg bg-[var(--bg-sage)] border border-[var(--surface-border)] text-emerald-400 font-semibold">
                                Legacy Capability <span className="text-[var(--text-tertiary)] text-xs block font-sans">Other legacy business systems</span>
                            </span>
                        </div>

                        <div className="max-w-3xl space-y-4 pt-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                Instead of asking businesses to replace the software already running their operations, the longer-term opportunity is to provide an intelligence layer that can sit on top of existing systems.
                            </p>
                            <p className="font-mono text-xs md:text-sm text-[var(--text-tertiary)] italic">
                                But that comes after proving the core concept first.
                            </p>
                        </div>
                    </div>

                    {/* The Question I'm Testing */}
                    <div className="space-y-4 pt-8 border-t border-[var(--surface-border)] max-w-3xl font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold block">
                            Conclusion
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                            The question I&apos;m testing
                        </h3>
                        <p>
                            Retail Manager already knows a lot about what is happening inside a business.
                        </p>
                        <p>
                            The opportunity is to make that information easier to understand and act on.
                        </p>
                        <blockquote className="p-5 rounded-xl bg-[var(--bg-sage)] border-l-4 border-[var(--accent-gold)] font-serif text-xl sm:text-2xl text-[var(--text-primary)] italic">
                            &ldquo;If the system already has the data, can it help the people running the business see what matters and decide what to do next?&rdquo;
                        </blockquote>
                        <p className="font-serif text-xl text-[var(--text-primary)] font-bold italic pt-2">
                            That is what Retail Manager Intelligence OS is being built to test.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 10. NEXT CASE STUDY NAVIGATION                                            */}
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
                            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] leading-tight">Udyoga Pramoda</h3>
                        </div>
                        <Link
                            href="/udyoga-pramoda"
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
