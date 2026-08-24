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
    Globe,
    Sparkles
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
            role="Product Designer"
            timeline="2026"
            tags={["B2B SaaS", "Retail Technology", "Product Strategy", "UX/UI & Brand"]}
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
                                    SRD Soft Tech develops business software for retail and food-service businesses. Its <strong className="text-[var(--text-primary)] font-medium">Retail Manager</strong> product supports core operations such as billing, inventory, procurement, stock movement and multi-store management.
                                </p>
                                <p>
                                    I initially joined to help SRD build its <strong className="text-[var(--text-primary)] font-medium">brand and digital presence</strong>. As I started understanding the product and comparing it with other retail ERP platforms, I identified an opportunity to make its operational data more useful for the people making business decisions.
                                </p>
                                <p className="font-serif text-xl text-[var(--text-primary)] italic pt-1">
                                    That became the starting point for exploring RM Intelligence OS.
                                </p>
                            </div>
                        </div>

                        {/* 60% Visual Column (Interactive Desktop Preview) */}
                        <div className="lg:col-span-7 flex justify-center lg:justify-end">
                            <div className="w-full max-w-[760px] shadow-2xl">
                                <DesktopMockup className="max-w-none w-full shadow-2xl">
                                    <RetailDashboardPreview />
                                </DesktopMockup>
                                <p className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-3">
                                    RM Intelligence OS · Live Recommendation &amp; Multi-Outlet Layer
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Metadata Row (Clean Editorial Grid, No Cards) */}
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
                                    Working product in progress
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 2. UNDERSTANDING THE EXISTING PRODUCT & OPPORTUNITY                       */}
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
                                Operational Workflows
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Understanding the existing product
                            </h2>
                            <div className="space-y-3 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    I started by looking at how Retail Manager actually worked across its operational workflows and how similar retail ERP products approached the same space.
                                </p>
                                <p>
                                    Retail Manager already captured a significant amount of operational information through areas such as billing, inventory, procurement, stock movement and reporting.
                                </p>
                                <p className="text-[var(--text-primary)] font-serif text-xl italic pt-1">
                                    The opportunity wasn&apos;t to build another ERP or another dashboard.
                                </p>
                            </div>
                        </div>

                        {/* Section Right: Opportunity Paradigm */}
                        <div className="lg:col-span-7 space-y-5 lg:border-l lg:border-[var(--surface-border)] lg:pl-12">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                Product Insight
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Reducing the gap from data to decision
                            </h2>
                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                It was to reduce the gap between:
                            </p>

                            {/* Paradigm Shift Flow (Compact Diagram, No Cards) */}
                            <div className="space-y-4 py-2">
                                <div className="space-y-1.5">
                                    <span className="font-mono text-xs text-[#ef4444] uppercase tracking-wider font-bold">The Existing Gap:</span>
                                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[var(--text-secondary)] bg-[var(--bg-sage)] p-3 rounded-lg border border-[var(--surface-border)]">
                                        <span>Operational data</span>
                                        <span className="text-[var(--text-tertiary)]">→</span>
                                        <span>Reports</span>
                                        <span className="text-[var(--text-tertiary)]">→</span>
                                        <span>User interprets</span>
                                        <span className="text-[#ef4444]">→</span>
                                        <span className="text-[var(--text-primary)] font-bold">Decision</span>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider font-bold">And Move Toward:</span>
                                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[var(--text-primary)] bg-[var(--bg-sage)] p-3 rounded-lg border border-emerald-500/40">
                                        <span className="text-emerald-400 font-semibold">Operational data</span>
                                        <span className="text-emerald-400">→</span>
                                        <span>Pattern</span>
                                        <span className="text-emerald-400">→</span>
                                        <span className="text-[var(--accent-gold)] font-bold">Recommendation</span>
                                        <span className="text-emerald-400">→</span>
                                        <span className="text-emerald-400 font-bold">Human decision</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 3. PRODUCT HYPOTHESIS & MAKING THE OPPORTUNITY CONCRETE                    */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="py-4 md:py-8"
                >
                    <div className="border-y border-[var(--surface-border)] py-14 md:py-20 max-w-4xl mx-auto text-center space-y-6">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-bold">
                            Product Hypothesis
                        </span>

                        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] leading-[1.3] tracking-tight">
                            &ldquo;If the system already knows what is happening, can it help the people running the business understand what deserves their attention and decide what to do next?&rdquo;
                        </blockquote>

                        <div className="max-w-2xl mx-auto space-y-2.5 pt-2 font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                            <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-[var(--accent-gold)] font-medium">
                                This was my product hypothesis, based on product analysis, secondary research and competitive analysis—not formal user research.
                            </p>
                        </div>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4 pt-10 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold block">
                            Strategy &amp; Pitch
                        </span>
                        <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                            Making the opportunity concrete
                        </h3>
                        <p>
                            I started with a founder-facing presentation rather than jumping directly into detailed UI.
                        </p>
                        <p>
                            The presentation made the Intelligence OS direction concrete: an intelligence layer that could sit on top of Retail Manager and help identify and prioritize operational issues.
                        </p>
                        <p>
                            The founder&apos;s response was specific. He felt what I had created could <strong className="text-[var(--text-primary)] font-medium">benefit some of his customers, but not the entire customer base</strong>.
                        </p>
                        <p>
                            That helped narrow the opportunity.
                        </p>
                        <p>
                            Rather than positioning Intelligence OS as something every Retail Manager customer needed, it made more sense for businesses with enough operational complexity to benefit from decision support.
                        </p>
                        <p>
                            The client&apos;s strategy similarly identifies multi-location and inventory-heavy businesses, particularly owners who cannot personally monitor every branch, as an initial target.
                        </p>
                        <p>
                            The broader intelligence vision already existed within SRD. <strong className="text-[var(--text-primary)] font-medium">My contribution was making that opportunity concrete and showing how it could work as a product.</strong>
                        </p>
                        <p className="font-mono text-xs md:text-sm text-[var(--text-tertiary)] italic pt-2">
                            *At this stage, I had stakeholder validation, not end-user validation.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 4. THE PROJECT EXPANDED BEYOND THE ORIGINAL BRIEF                         */}
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
                            Scope Expansion
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            The project expanded beyond the original brief
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                        <div className="lg:col-span-7 space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                After the initial pitch, the engagement moved beyond the Intelligence OS concept.
                            </p>
                            <p>
                                The founder asked me to work on the <strong className="text-[var(--text-primary)] font-medium">company website</strong>, as customers were asking for a digital presence for SRD.
                            </p>
                            <p>
                                The website then became a way to communicate the broader product ecosystem:
                            </p>
                            
                            <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-[var(--surface-border)] font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                                SRD Soft Tech → Retail Manager → RMServe → RM Intelligence OS
                            </div>

                            <p className="pt-2">
                                From there, the project continued into the application experience and the practical work of moving the concept toward a working product.
                            </p>
                        </div>

                        <div className="lg:col-span-5 space-y-3 p-6 bg-[var(--bg-sage)] rounded-xl border border-[var(--surface-border)]">
                            <span className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider font-bold block mb-1">
                                Evolution of the Engagement
                            </span>
                            <div className="space-y-3 font-mono text-xs sm:text-sm">
                                <div>
                                    <span className="text-[var(--text-tertiary)] block text-xs">What started as:</span>
                                    <span className="text-[var(--text-primary)] font-semibold">Branding → Website</span>
                                </div>
                                <div className="h-px bg-[var(--surface-border)] my-1"></div>
                                <div>
                                    <span className="text-[var(--accent-gold)] block text-xs">Expanded into:</span>
                                    <span className="text-emerald-400 font-semibold leading-relaxed">
                                        Product understanding → Product opportunity → Intelligence OS → Application
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 5. THE PRODUCT DECISIONS                                                  */}
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
                            Core Architecture
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            The product decisions
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 pt-4 border-t border-[var(--surface-border)]">
                        {/* Decision 01 */}
                        <div className="space-y-3">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                                Decision 01
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Recommendation-first, not another dashboard
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    Retail Manager already reports operational information. I wanted Intelligence OS to answer a different question:
                                </p>
                                <p className="font-serif text-xl text-[var(--text-primary)] italic pl-3 border-l-2 border-[var(--accent-gold)]">
                                    &ldquo;What deserves my attention right now?&rdquo;
                                </p>
                                <p>
                                    Instead of creating another reporting layer, the experience surfaces conditions such as stock-out risk, excess inventory, slow-moving stock and other operational exceptions, then provides context around why they matter.
                                </p>
                                <p>
                                    The recommendation becomes the starting point, rather than another chart the user has to interpret.
                                </p>
                            </div>
                        </div>

                        {/* Decision 02 */}
                        <div className="space-y-3 md:border-l md:border-[var(--surface-border)] md:pl-10">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                                Decision 02
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Human decision, not automatic action
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    A detected problem doesn&apos;t always have one correct response. A stock condition could lead to:
                                </p>
                                <p className="font-mono text-xs sm:text-sm text-[var(--text-primary)] font-semibold">
                                    Purchase · Transfer · Discount · Investigate · Take no action
                                </p>
                                <p>
                                    The system identifies the condition and suggests possible actions, but the responsible person makes the final decision.
                                </p>
                                <p>
                                    The client&apos;s strategy describes a longer progression toward controlled automation. <strong className="text-[var(--text-primary)] font-medium">My design response at this stage was to keep Intelligence OS recommendation-led and human-controlled while the concept is being validated.</strong>
                                </p>
                            </div>
                        </div>

                        {/* Decision 03 */}
                        <div className="space-y-3 pt-6 border-t border-[var(--surface-border)]">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                                Decision 03
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Read-only before deeper integration
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    Retail Manager already runs the company&apos;s core operations. The goal wasn&apos;t to replace it.
                                </p>
                                <p>
                                    So the initial Intelligence OS architecture is deliberately <strong className="text-[var(--text-primary)] font-medium">read-only</strong>:
                                </p>
                                <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-[var(--surface-border)] font-mono text-xs text-[var(--text-primary)]">
                                    Existing system → Operational data → Intelligence OS → Recommendation → Human decision
                                </div>
                                <p>
                                    The intelligence layer reads existing data without writing back into the operational system.
                                </p>
                                <p>
                                    This allows the new capability to be explored without making the existing product dependent on an unvalidated intelligence layer. It also leaves room for deeper integration later, once the intelligence capability has been proven.
                                </p>
                            </div>
                        </div>

                        {/* Decision 04 */}
                        <div className="space-y-3 pt-6 border-t border-[var(--surface-border)] md:border-l md:border-[var(--surface-border)] md:pl-10">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider">
                                Decision 04
                            </span>
                            <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                Explainable intelligence before &ldquo;AI everywhere&rdquo;
                            </h3>
                            <div className="space-y-3 font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    The first version shouldn&apos;t depend on complex machine learning simply to appear intelligent.
                                </p>
                                <p>
                                    The client&apos;s strategy describes progressing from dependable, explainable conditions toward prediction, prioritization and eventually controlled automation.
                                </p>
                                <p>
                                    I translated that into a simple principle:
                                </p>
                                <div className="p-3 bg-[var(--bg-sage)] rounded-lg border border-[var(--surface-border)] font-mono text-xs text-emerald-400 font-bold">
                                    Detect → Explain → Recommend → Let the person decide
                                </div>
                                <p>
                                    The recommendation needs to be understandable enough for someone to trust and act on.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 6. DESIGNING AROUND OPERATIONAL ROLES & WORKFLOWS                          */}
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
                            The same information isn&apos;t equally useful to everyone.
                        </p>
                    </div>

                    {/* Three Operational Roles */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-4 border-t border-[var(--surface-border)]">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-[var(--accent-gold)] font-mono text-xs font-bold uppercase">
                                <UserCheck className="w-4 h-4" /> Owner
                            </div>
                            <p className="font-serif text-xl text-[var(--text-primary)] italic">
                                &ldquo;What needs my attention today?&rdquo;
                            </p>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                A concise view of important business conditions.
                            </p>
                        </div>

                        <div className="space-y-2 md:border-l md:border-[var(--surface-border)] md:pl-6">
                            <div className="flex items-center gap-2 text-[#60a5fa] font-mono text-xs font-bold uppercase">
                                <Warehouse className="w-4 h-4" /> Warehouse
                            </div>
                            <p className="font-serif text-xl text-[var(--text-primary)] italic">
                                &ldquo;What arrived, and what needs to move?&rdquo;
                            </p>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Focus on deliveries, shortages and stock movement.
                            </p>
                        </div>

                        <div className="space-y-2 md:border-l md:border-[var(--surface-border)] md:pl-6">
                            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                                <Store className="w-4 h-4" /> Store
                            </div>
                            <p className="font-serif text-xl text-[var(--text-primary)] italic">
                                &ldquo;What&apos;s low, and how do I request it?&rdquo;
                            </p>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Focus on stock visibility and requests.
                            </p>
                        </div>
                    </div>

                    <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] max-w-2xl leading-relaxed">
                        The underlying data remains connected, but the experience is shaped around each person&apos;s responsibility.
                    </p>

                    {/* From Strategy to Working Product Workflows */}
                    <div className="space-y-4 pt-6 border-t border-[var(--surface-border)]">
                        <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                            From strategy to working product
                        </h3>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            The current product exploration focuses on a small set of core workflows:
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                            <div className="p-4 bg-[var(--bg-sage)] border border-[var(--surface-border)] rounded-lg space-y-1">
                                <div className="font-mono text-xs font-bold text-[var(--accent-gold)]">WORKFLOW 01</div>
                                <div className="font-serif text-lg text-[var(--text-primary)]">Today&apos;s Overview</div>
                                <p className="font-sans text-xs text-[var(--text-secondary)]">Surface important business conditions.</p>
                            </div>
                            <div className="p-4 bg-[var(--bg-sage)] border border-[var(--surface-border)] rounded-lg space-y-1">
                                <div className="font-mono text-xs font-bold text-[var(--accent-gold)]">WORKFLOW 02</div>
                                <div className="font-serif text-lg text-[var(--text-primary)]">Stock View</div>
                                <p className="font-sans text-xs text-[var(--text-secondary)]">Identify and investigate low or critical inventory.</p>
                            </div>
                            <div className="p-4 bg-[var(--bg-sage)] border border-[var(--surface-border)] rounded-lg space-y-1">
                                <div className="font-mono text-xs font-bold text-[var(--accent-gold)]">WORKFLOW 03</div>
                                <div className="font-serif text-lg text-[var(--text-primary)]">Delivery Received</div>
                                <p className="font-sans text-xs text-[var(--text-secondary)]">Compare ordered versus received quantities.</p>
                            </div>
                            <div className="p-4 bg-[var(--bg-sage)] border border-[var(--surface-border)] rounded-lg space-y-1">
                                <div className="font-mono text-xs font-bold text-[var(--accent-gold)]">WORKFLOW 04</div>
                                <div className="font-serif text-lg text-[var(--text-primary)]">Stock Request</div>
                                <p className="font-sans text-xs text-[var(--text-secondary)]">Connect store requests with fulfilment.</p>
                            </div>
                        </div>

                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed pt-2">
                            The project has now moved beyond the original branding work into a working product direction, with the website, implementation and real-data integration still in progress.
                        </p>
                        <p className="font-sans text-sm md:text-base text-[var(--text-tertiary)] italic">
                            The current application is being used as a <strong className="text-[var(--text-secondary)] font-medium">testing ground for the product concept</strong>, not presented as a finished production deployment.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 7. WHAT IS ESTABLISHED — AND WHAT STILL NEEDS PROOF                       */}
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
                            Validation Status
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            What is established — and what still needs proof
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Established */}
                        <div className="space-y-3">
                            <h3 className="font-mono text-xs sm:text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Established
                            </h3>
                            <ul className="space-y-2.5 font-sans text-sm md:text-base text-[var(--text-primary)]">
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                    Intelligence OS product direction
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                    Initial product principles
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                    Founder/stakeholder validation
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                    High-fidelity product experience
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0"></span>
                                    Working product direction
                                </li>
                            </ul>
                        </div>

                        {/* Still to validate */}
                        <div className="space-y-3 md:border-l md:border-[var(--surface-border)] md:pl-10">
                            <h3 className="font-mono text-xs sm:text-sm font-bold text-[var(--accent-gold)] uppercase tracking-wider flex items-center gap-2">
                                <HelpCircle className="w-4 h-4" /> Still to validate
                            </h3>
                            <ul className="space-y-2.5 font-sans text-sm md:text-base text-[var(--text-secondary)]">
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0"></span>
                                    Do users understand the recommendations?
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0"></span>
                                    Do they trust them?
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0"></span>
                                    Do recommendations influence what they investigate or act on?
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0"></span>
                                    Which intelligence signals are actually useful?
                                </li>
                                <li className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)] shrink-0"></span>
                                    Does the product become part of their regular workflow?
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed italic pt-2">
                        I am <strong className="text-[var(--text-primary)] font-medium">not claiming increased sales, reduced stockouts or revenue impact</strong>. Those outcomes still need real-user and production validation.
                    </p>
                </motion.section>

                {/* ========================================================================= */}
                {/* 8. WHERE IT GOES NEXT & THE NEXT PROOF                                     */}
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
                            Platform Roadmap
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Where it goes next
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            The broader product direction is:
                        </p>
                    </div>

                    {/* Progression flow */}
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm">
                            <span className="px-3.5 py-1.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)] text-[var(--text-primary)]">
                                Retail Manager (Retail operations)
                            </span>
                            <span className="text-[var(--accent-gold)] font-bold">*</span>
                            <span className="px-3.5 py-1.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)] text-[var(--text-primary)]">
                                RMServe (Restaurant operations)
                            </span>
                            <span className="text-[var(--accent-gold)] font-bold">↓</span>
                            <span className="px-3.5 py-1.5 rounded bg-[var(--accent-gold)]/20 border border-[var(--accent-gold)]/40 text-[var(--accent-gold)] font-bold">
                                RM Intelligence OS (Shared intelligence layer)
                            </span>
                            <span className="text-[var(--accent-gold)] font-bold">↓</span>
                            <span className="px-3.5 py-1.5 rounded bg-[var(--bg-sage)] border border-[var(--surface-border)] text-emerald-400">
                                Future platform capability
                            </span>
                        </div>

                        <div className="pt-2">
                            <span className="font-mono text-xs text-[var(--text-tertiary)] uppercase tracking-wider block mb-1.5">
                                The Progression is:
                            </span>
                            <p className="font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                                Record → Visibility → Attention → Recommendation → Controlled automation
                            </p>
                        </div>

                        <p className="font-sans text-base text-[var(--text-secondary)] max-w-3xl leading-relaxed">
                            The longer-term opportunity is to prove the intelligence layer within SRD&apos;s own products before considering how selected intelligence capabilities could extend to other business systems.
                        </p>
                    </div>

                    {/* The Next Proof */}
                    <div className="space-y-4 pt-6 border-t border-[var(--surface-border)] max-w-3xl font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                        <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                            The next proof
                        </h3>
                        <p>
                            I started this project by helping SRD communicate what it already had.
                        </p>
                        <p>
                            Understanding the product led me to a bigger question:
                        </p>
                        <p className="font-serif text-xl text-[var(--text-primary)] italic pl-4 border-l-2 border-[var(--accent-gold)]">
                            &ldquo;If a business system already knows what is happening, can it help the people running the business decide what to do next?&rdquo;
                        </p>
                        <p>
                            I took that question from <strong className="text-[var(--text-primary)] font-medium">product understanding → opportunity → strategy → stakeholder validation → product decisions → working product</strong>.
                        </p>
                        <p>
                            The next step is to put it in front of real users and find out whether the intelligence actually helps them make better operational decisions.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 9. NEXT CASE STUDY NAVIGATION                                             */}
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
