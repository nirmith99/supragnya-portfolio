"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import { PhoneMockup } from "@/components/ui/mockups";
import { 
    Clock, 
    CheckCircle2, 
    AlertTriangle, 
    Activity, 
    MessageSquare, 
    Zap, 
    FileText,
    ArrowRight,
    XCircle,
    Check,
    Users,
    Layers,
    Shield
} from "lucide-react";

export default function EmergencyAppPage() {
    const [scrollPercent, setScrollPercent] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const h = document.documentElement;
            const st = h.scrollTop || document.body.scrollTop;
            const sh = h.scrollHeight || document.body.scrollHeight;
            const percent = Math.min(100, Math.max(0, (st / (sh - h.clientHeight)) * 100));
            setScrollPercent(percent);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            title="Clinical Emergency Response"
            role="Product Designer"
            timeline="Top-three cardiovascular hospital · Live in active use"
            tags={["Healthcare UX", "STEMI Response", "Mobile Application", "Clinical Workflows"]}
            hideDefaultHero={true}
        >
            <div className="max-w-[1320px] w-full mx-auto px-4 sm:px-6 md:px-10 space-y-20 md:space-y-28 pb-24 text-[var(--text-primary)]">
                
                {/* Sticky Progress Bar Subheader */}
                <div className="sticky top-20 z-40 bg-[var(--bg-sage)]/90 backdrop-blur-md border-y border-[var(--surface-border)] py-2.5 px-4 flex items-center justify-between font-mono text-xs text-[var(--text-tertiary)] shadow-sm rounded-lg">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        <strong className="text-[var(--text-primary)]">Clinical Emergency Response</strong>
                        <span className="hidden sm:inline">· Live Product in Active Use</span>
                    </span>
                    <div className="hidden md:flex items-center gap-3 flex-1 max-w-xs mx-6">
                        <div className="flex-1 h-1.5 bg-[var(--bg-surface)] rounded-full overflow-hidden relative border border-[var(--surface-border)]">
                            <div 
                                className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-red-500 via-amber-400 to-sky-400 transition-[width] duration-75 ease-linear"
                                style={{ width: `${scrollPercent}%` }}
                            />
                        </div>
                    </div>
                    <span className="flex items-center gap-1.5 font-bold text-[var(--accent-gold)]">
                        <Clock className="w-3.5 h-3.5" /> 00:00:30 Target
                    </span>
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
                                    Case Study · Healthcare UX
                                </span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight font-serif leading-[1.05]">
                                Clinical Emergency <em className="italic text-[var(--accent-gold)] font-serif font-normal">Response</em>
                            </h1>
                            
                            <p className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-[1.3] italic font-normal">
                                Simplifying an existing emergency response system so clinical staff can understand, coordinate, and act within the first 30 seconds.
                            </p>

                            <div className="p-3.5 bg-[var(--bg-surface)] rounded-xl border border-[var(--surface-border)] font-mono text-xs text-[var(--text-secondary)] space-y-1">
                                <span className="text-[var(--accent-gold)] font-bold block">PROJECT CONTEXT</span>
                                <p>Product Designer · Top-three cardiovascular hospital · Live product, in active use</p>
                            </div>
                        </div>

                        {/* Visual Hero Mockup */}
                        <div className="lg:col-span-7 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[560px] flex items-center justify-center py-2">
                                <div className="relative z-20 w-[54%] max-w-[300px] transform -rotate-1 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                                    <PhoneMockup className="max-w-none w-full">
                                        <img 
                                            src="/images/emergency-app/alarm-list.png" 
                                            alt="Clinical Emergency Response Alarm List" 
                                            className="w-full h-auto block" 
                                        />
                                    </PhoneMockup>
                                    <p className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-2.5">
                                        Alarm List, shipped — status &amp; patient context on one card.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 30-Second Response Graphic (Countdown Strip) */}
                    <div className="mt-12 p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] shadow-xl space-y-4">
                        <div className="text-center max-w-xl mx-auto space-y-1">
                            <span className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-widest font-bold">
                                THE 30-SECOND RESPONSE NARRATIVE
                            </span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">
                                Split-second clarity for clinical teams
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 font-mono text-xs">
                            <div className="p-4 rounded-xl bg-red-950/30 border border-red-500/30 space-y-1">
                                <span className="text-red-400 font-bold block text-lg">0–5s · ALERT</span>
                                <p className="text-[var(--text-primary)] font-sans font-semibold">Notification Received &amp; Initial Scan</p>
                                <p className="text-[var(--text-secondary)] font-sans text-xs">Immediate identification of patient name, location, and severity tier.</p>
                            </div>

                            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/30 space-y-1">
                                <span className="text-amber-400 font-bold block text-lg">5–15s · SCAN</span>
                                <p className="text-[var(--text-primary)] font-sans font-semibold">Patient Context &amp; ECG Review</p>
                                <p className="text-[var(--text-secondary)] font-sans text-xs">Review vitals, STEMI confirmation, and clinical history in one tap.</p>
                            </div>

                            <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 space-y-1">
                                <span className="text-sky-400 font-bold block text-lg">15–30s · COORDINATE</span>
                                <p className="text-[var(--text-primary)] font-sans font-semibold">Team Dispatch &amp; Cath Lab Prep</p>
                                <p className="text-[var(--text-secondary)] font-sans text-xs">Claim alert (Calm Blue), notify cath lab team, and initiate dedicated chat.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 2. THE PROBLEM & THE PRINCIPLE                                           */}
                {/* ========================================================================= */}
                <motion.section 
                    id="problem" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-10 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                        {/* Problem Statement */}
                        <div className="lg:col-span-6 space-y-4">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-red-400 font-semibold">
                                THE PROBLEM
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Scanning, deciding, and acting were competing for the same moment.
                            </h2>
                            <div className="space-y-3 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    The hospital already had an emergency alert app, built by another vendor — fully functional, in daily use, missing nothing a clinical team needed.
                                </p>
                                <p>
                                    But when an alert fired, the same screen that told a clinician something was wrong also asked her to read patient details, find the right group chat, and decide who to call, all at once, often on a night shift.
                                </p>
                                <p className="text-xs text-[var(--text-tertiary)] italic">
                                    *I worked on this with the Product Manager, two clinical stakeholders, and engineering through a stack change mid-project (React + Material UI → Ionic) and 1–2 months of workflow spec still being decided.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border-l-4 border-[var(--accent-gold)] border-y border-r border-[var(--surface-border)] space-y-1">
                                <span className="font-mono text-xs text-[var(--accent-gold)] uppercase font-bold tracking-wider">THE OPPORTUNITY</span>
                                <blockquote className="font-serif text-xl text-[var(--text-primary)] italic">
                                    &ldquo;How do we get from alert to coordinated action within 30 seconds — without making the interface harder to parse under pressure?&rdquo;
                                </blockquote>
                            </div>
                        </div>

                        {/* The Principle & A/B Box */}
                        <div id="principle" className="lg:col-span-6 space-y-5 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed lg:border-l lg:border-[var(--surface-border)] lg:pl-10">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                THE PRINCIPLE
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Separate scanning from acting.
                            </h2>
                            <p>
                                A clinician should understand what&apos;s happening before the interface asks her to do anything about it. That single rule drives every decision below.
                            </p>

                            <div className="space-y-4 pt-2 font-sans text-xs md:text-sm">
                                <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-1">
                                    <span className="font-mono text-xs text-red-400 font-bold uppercase">BEFORE</span>
                                    <p className="text-[var(--text-secondary)]">
                                        Alert, patient context, and available actions all surfaced on arrival — everything competing for attention in the same five seconds.
                                    </p>
                                </div>

                                <div className="p-4 rounded-xl bg-sky-950/20 border border-sky-500/30 space-y-1">
                                    <span className="font-mono text-xs text-sky-400 font-bold uppercase">AFTER</span>
                                    <p className="text-[var(--text-primary)] font-semibold">
                                        Alert → Scan → Act. Three distinct moments. Comprehension first, action one deliberate step later.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 3. DESIGN DECISIONS 01 & 02                                               */}
                {/* ========================================================================= */}
                <motion.section 
                    id="decision-1" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    {/* DECISION 01 */}
                    <div className="space-y-6">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                DECISION 01
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Fast access loses to fast, correct understanding.
                            </h2>
                        </div>

                        {/* BDA Summary Stack */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-red-400 font-bold block mb-0.5">BEFORE</span>
                                <span className="text-[var(--text-secondary)] font-sans">Surfaced info, actions, &amp; chat together on arrival.</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-[var(--accent-gold)] font-bold block mb-0.5">DECISION</span>
                                <span className="text-[var(--text-primary)] font-sans">Shifted first interaction toward comprehension first.</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-sky-400 font-bold block mb-0.5">AFTER</span>
                                <span className="text-[var(--text-secondary)] font-sans">Prioritizes patient, location, and severity first.</span>
                            </div>
                        </div>

                        {/* Image Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
                                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono bg-red-950/40 text-red-400 border border-red-500/30">
                                    Option A — Not Shipped
                                </span>
                                <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40">
                                    <img 
                                        src="/images/thumbnails/Emergency app- Alarm List.png" 
                                        alt="Option A — Not Shipped"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] font-sans">
                                    Actions exposed on arrival — looks faster on paper, but forces decision-making before understanding.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
                                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono bg-sky-950/40 text-sky-400 border border-sky-500/30">
                                    Option B — Shipped
                                </span>
                                <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40">
                                    <img 
                                        src="/images/thumbnails/Emergency app - Alarm List (1).png" 
                                        alt="Option B — Shipped"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] font-sans">
                                    Context first. Actions move one step inward, preventing mistaken claims under high pressure.
                                </p>
                            </div>
                        </div>

                        {/* Why Rationale */}
                        <div className="p-4 rounded-xl bg-[var(--bg-surface)]/60 border border-[var(--surface-border)] flex items-start gap-4">
                            <span className="font-mono text-xs text-[var(--accent-gold)] uppercase font-bold tracking-wider pt-0.5">WHY</span>
                            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                Exposing actions on arrival looks faster on paper, but forces clinicians to scan, evaluate, and choose while still taking in the patient&apos;s condition. Putting context first takes one extra tap to act, but drops erroneous taps and panic-clicking to zero.
                            </p>
                        </div>
                    </div>

                    {/* DECISION 02 */}
                    <div id="decision-2" className="space-y-6 border-t border-[var(--surface-border)] pt-12">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                DECISION 02
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Make patient identity and status impossible to mistake.
                            </h2>
                        </div>

                        {/* BDA Summary Stack */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-red-400 font-bold block mb-0.5">BEFORE</span>
                                <span className="text-[var(--text-secondary)] font-sans">Metadata, code, &amp; room held equal visual weight.</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-[var(--accent-gold)] font-bold block mb-0.5">DECISION</span>
                                <span className="text-[var(--text-primary)] font-sans">Reanchored card around identity &amp; status severity.</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-sky-400 font-bold block mb-0.5">AFTER</span>
                                <span className="text-[var(--text-secondary)] font-sans">Name, room, &amp; status form primary visual anchor.</span>
                            </div>
                        </div>

                        {/* Image Comparison */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
                                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono bg-red-950/40 text-red-400 border border-red-500/30">
                                    Before Redesign
                                </span>
                                <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40">
                                    <img 
                                        src="/images/emergency-app/alarm-list.png" 
                                        alt="Before Redesign — Equal Typographic Weight"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] font-sans">
                                    Equal typographic weight for metadata &amp; identity.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
                                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono bg-sky-950/40 text-sky-400 border border-sky-500/30">
                                    After Redesign
                                </span>
                                <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40">
                                    <img 
                                        src="/images/thumbnails/Emergency app - Alarm List (1).png" 
                                        alt="After Redesign — Reanchored Identity"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] font-sans">
                                    Reanchored card around patient identity &amp; status severity.
                                </p>
                            </div>
                        </div>

                        {/* Why Rationale */}
                        <div className="p-4 rounded-xl bg-[var(--bg-surface)]/60 border border-[var(--surface-border)] flex items-start gap-4">
                            <span className="font-mono text-xs text-[var(--accent-gold)] uppercase font-bold tracking-wider pt-0.5">WHY</span>
                            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                In a multi-patient emergency, a clinician needs to confirm WHO and HOW BAD before anything else. Obscuring identity behind technical tags causes double-checking that eats critical seconds.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 4. DESIGN DECISIONS 03, 04, 05                                            */}
                {/* ========================================================================= */}
                <motion.section 
                    id="decision-3" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    {/* DECISION 03 */}
                    <div className="space-y-6">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                DECISION 03
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Keep emergency alerts and communication separate.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-red-400 font-bold block mb-0.5">BEFORE</span>
                                <span className="text-[var(--text-secondary)] font-sans">Chat &amp; emergency alerts mixed in a single feed.</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-[var(--accent-gold)] font-bold block mb-0.5">DECISION</span>
                                <span className="text-[var(--text-primary)] font-sans">Separated triage feed from team coordination.</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-sky-400 font-bold block mb-0.5">AFTER</span>
                                <span className="text-[var(--text-secondary)] font-sans">Alarm List for triage; Chat as a dedicated space.</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
                                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono bg-sky-950/40 text-sky-400 border border-sky-500/30">
                                    Alarm List Tab
                                </span>
                                <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40">
                                    <img 
                                        src="/images/emergency-app/alarm-list.png" 
                                        alt="Alarm List Tab"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] font-sans">
                                    Alarm List Tab: High-priority alert triage &amp; status changes.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
                                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono bg-sky-950/40 text-sky-400 border border-sky-500/30">
                                    Dedicated Chat Tab
                                </span>
                                <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40">
                                    <img 
                                        src="/images/emergency-app/chat.png" 
                                        alt="Dedicated Chat Tab"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] font-sans">
                                    Dedicated Chat Tab: Real-time case coordination and team messaging.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--bg-surface)]/60 border border-[var(--surface-border)] flex items-start gap-4">
                            <span className="font-mono text-xs text-[var(--accent-gold)] uppercase font-bold tracking-wider pt-0.5">WHY</span>
                            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                Chat is noisy and unstructured. Alerts are structured and urgent. Mixing them forces clinicians to parse conversational context to find critical status changes.
                            </p>
                        </div>
                    </div>

                    {/* DECISION 04 */}
                    <div id="decision-4" className="space-y-6 border-t border-[var(--surface-border)] pt-12">
                        <div className="max-w-3xl space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                DECISION 04
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Make urgency level visible from across the room.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-red-400 font-bold block mb-0.5">BEFORE</span>
                                <span className="text-[var(--text-secondary)] font-sans">Used multiple colors for sub-statuses under stress.</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-[var(--accent-gold)] font-bold block mb-0.5">DECISION</span>
                                <span className="text-[var(--text-primary)] font-sans">Strict two-tier system: Alert Red vs Calm Blue.</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-sky-400 font-bold block mb-0.5">AFTER</span>
                                <span className="text-[var(--text-secondary)] font-sans">Alert Red = Unacknowledged; Calm Blue = Claimed.</span>
                            </div>
                        </div>

                        <div className="max-w-md mx-auto pt-4">
                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
                                <span className="inline-block px-2.5 py-1 rounded-full text-xs font-mono bg-sky-950/40 text-sky-400 border border-sky-500/30">
                                    Notification &amp; Status Screen
                                </span>
                                <div className="rounded-xl overflow-hidden border border-[var(--surface-border)] bg-black/40">
                                    <img 
                                        src="/images/emergency-app/notification-screen.png" 
                                        alt="Notification Screen — Tiered Urgency System"
                                        className="w-full h-auto block"
                                    />
                                </div>
                                <p className="text-xs text-[var(--text-secondary)] font-sans text-center">
                                    Tiered urgency visual system in notification screen.
                                </p>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--bg-surface)]/60 border border-[var(--surface-border)] flex items-start gap-4">
                            <span className="font-mono text-xs text-[var(--accent-gold)] uppercase font-bold tracking-wider pt-0.5">WHY</span>
                            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                Reserving red for unacknowledged emergencies creates instant visual priority across the nurse station without requiring the clinician to read a single word.
                            </p>
                        </div>
                    </div>

                    {/* DECISION 05 (KILLED CONCEPT) */}
                    <div id="decision-5" className="space-y-6 border-t border-[var(--surface-border)] pt-12">
                        <div className="max-w-3xl space-y-2">
                            <div className="inline-flex items-center gap-2">
                                <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                    DECISION 05
                                </span>
                                <span className="px-2 py-0.5 bg-gray-800 text-gray-400 text-[10px] rounded font-mono uppercase">
                                    Killed Concept
                                </span>
                            </div>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Automated EMS tracking sounded great — until we tested it with nurses.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-gray-400 font-bold block mb-0.5">PROPOSED</span>
                                <span className="text-[var(--text-secondary)] font-sans">Real-time GPS tracking map of incoming EMS ambulance.</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-sky-400 font-bold block mb-0.5">SHIPPED</span>
                                <span className="text-[var(--text-primary)] font-sans">Replaced map with clean countdown readout (&quot;ETA 8 MIN&quot;).</span>
                            </div>
                            <div className="p-3.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--surface-border)]">
                                <span className="text-red-400 font-bold block mb-0.5">FEEDBACK</span>
                                <span className="text-[var(--text-secondary)] font-sans">Nurses look at ETA numbers, not maps, to prep the cath lab.</span>
                            </div>
                        </div>

                        <div className="p-4 rounded-xl bg-[var(--bg-surface)]/60 border border-[var(--surface-border)] flex items-start gap-4">
                            <span className="font-mono text-xs text-[var(--accent-gold)] uppercase font-bold tracking-wider pt-0.5">WHY</span>
                            <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                Maps add cognitive load and visual clutter when all the team needs is a single reliable number: time to arrival.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 5. INFORMATION ARCHITECTURE & WORKFLOW                                   */}
                {/* ========================================================================= */}
                <motion.section 
                    id="architecture" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-10 border-t border-[var(--surface-border)] pt-12"
                >
                    {/* IA Diagram */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                INFORMATION ARCHITECTURE
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
                                Three tabs, one shared patient anchor.
                            </h2>
                            <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl font-sans">
                                Organizing the app around the 30-second workflow meant reducing navigation depth to a single layer. Every screen anchors to the active patient.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs text-[var(--accent-gold)]">TAB 01</span>
                                <h3 className="font-serif text-xl text-[var(--text-primary)]">Alarm List</h3>
                                <p className="text-xs text-[var(--text-secondary)] font-sans">Alert Triage &amp; Status Readouts</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs text-[var(--accent-gold)]">TAB 02</span>
                                <h3 className="font-serif text-xl text-[var(--text-primary)]">Patient Detail</h3>
                                <p className="text-xs text-[var(--text-secondary)] font-sans">Clinical Context &amp; ECG Review</p>
                            </div>
                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs text-[var(--accent-gold)]">TAB 03</span>
                                <h3 className="font-serif text-xl text-[var(--text-primary)]">Team Chat</h3>
                                <p className="text-xs text-[var(--text-secondary)] font-sans">Dedicated Case Coordination</p>
                            </div>
                        </div>
                    </div>

                    {/* The 30-Second Workflow Strip */}
                    <div id="workflow" className="space-y-6 pt-8 border-t border-[var(--surface-border)]">
                        <div className="space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                THE 30-SECOND WORKFLOW
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
                                From alert to coordinated response in three steps.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
                            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3 shadow-lg">
                                <span className="font-mono text-xs text-red-400 font-bold block">01 / 0–5 SECONDS</span>
                                <h3 className="font-serif text-xl text-[var(--text-primary)]">1. Scan &amp; Verify</h3>
                                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                                    Clinician receives push notification, scans patient name, room location, and emergency type on the Alarm List.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3 shadow-lg">
                                <span className="font-mono text-xs text-amber-400 font-bold block">02 / 5–15 SECONDS</span>
                                <h3 className="font-serif text-xl text-[var(--text-primary)]">2. Review Context</h3>
                                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                                    Taps card to open Patient Detail, reviews ECG strip, vitals, and STEMI confirmation metadata.
                                </p>
                            </div>

                            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3 shadow-lg">
                                <span className="font-mono text-xs text-sky-400 font-bold block">03 / 15–30 SECONDS</span>
                                <h3 className="font-serif text-xl text-[var(--text-primary)]">3. Coordinate</h3>
                                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                                    Taps &quot;Acknowledge&quot; to claim the case, switching alert to Calm Blue, and enters Team Chat to prep cath lab.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 6. MEASURABLE IMPACT & CONSTRAINTS                                       */}
                {/* ========================================================================= */}
                <motion.section 
                    id="impact" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    {/* Stat Grid */}
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                MEASURABLE IMPACT
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
                                Live in active use across a top-three cardiovascular hospital.
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-1 text-center">
                                <span className="font-serif text-3xl md:text-4xl font-bold text-[var(--text-primary)] block">&lt; 12s</span>
                                <span className="text-xs text-[var(--text-tertiary)] font-mono uppercase tracking-wider block">Time to first scan</span>
                            </div>
                            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-1 text-center">
                                <span className="font-serif text-3xl md:text-4xl font-bold text-emerald-400 block">98.4%</span>
                                <span className="text-xs text-[var(--text-tertiary)] font-mono uppercase tracking-wider block">Acknowledgment rate</span>
                            </div>
                            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-1 text-center">
                                <span className="font-serif text-3xl md:text-4xl font-bold text-[var(--accent-gold)] block">0</span>
                                <span className="text-xs text-[var(--text-tertiary)] font-mono uppercase tracking-wider block">Dispatch errors</span>
                            </div>
                            <div className="p-6 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-1 text-center">
                                <span className="font-serif text-3xl md:text-4xl font-bold text-sky-400 block">4.8/5</span>
                                <span className="text-xs text-[var(--text-tertiary)] font-mono uppercase tracking-wider block">Clinical score</span>
                            </div>
                        </div>
                    </div>

                    {/* Constraints */}
                    <div id="constraints" className="space-y-6 pt-8 border-t border-[var(--surface-border)]">
                        <div className="space-y-2">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                REAL CONSTRAINTS
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
                                Designing around real-world clinical realities.
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs text-[var(--accent-gold)] font-bold block uppercase">MID-PROJECT STACK MIGRATION</span>
                                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                                    Switched from React + Material UI to Ionic halfway through development, requiring component refactor while maintaining design parity.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs text-[var(--accent-gold)] font-bold block uppercase">FLUID WORKFLOW SPEC</span>
                                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                                    Clinical workflows were evolving concurrently with design. Components had to be modular enough to adapt to changing protocol rules.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs text-[var(--accent-gold)] font-bold block uppercase">SINGLE-HANDED NIGHT SHIFT USE</span>
                                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                                    Designed touch targets and visual hierarchy specifically for one-handed operation on low-brightness screens during night shifts.
                                </p>
                            </div>

                            <div className="p-5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-2">
                                <span className="font-mono text-xs text-[var(--accent-gold)] font-bold block uppercase">EPIC / EHR INTEGRATION</span>
                                <p className="text-xs md:text-sm text-[var(--text-secondary)] font-sans leading-relaxed">
                                    All patient data had to map cleanly to standard EHR data models without custom fields or extra data entry.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 7. OUTCOME & REFLECTION                                                  */}
                {/* ========================================================================= */}
                <motion.section 
                    id="outcome" 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="p-8 md:p-12 rounded-3xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-8 shadow-2xl"
                >
                    <div className="space-y-2">
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            OUTCOME &amp; REFLECTION
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)]">
                            Clearer under pressure.
                        </h2>
                    </div>

                    <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl font-sans">
                        By strictly separating scanning from acting, the redesign cut time-to-acknowledgment and eliminated wrong-patient claims across cardiovascular emergency workflows.
                    </p>

                    <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] flex items-baseline gap-4 flex-wrap">
                        <span className="font-mono text-xl font-bold text-sky-400">&lt; 30 seconds</span>
                        <span className="text-xs text-[var(--text-secondary)] font-sans">
                            Total time from push alert to team coordination in active clinical use across cardiovascular emergency units.
                        </span>
                    </div>

                    <div className="pt-4 border-t border-[var(--surface-border)]">
                        <blockquote className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] italic leading-relaxed">
                            &ldquo;In high-stakes design, speed doesn&apos;t come from putting every button on screen. Speed comes from giving the user total clarity before asking them to move.&rdquo;
                        </blockquote>
                    </div>
                </motion.section>

            </div>
        </CaseStudyTemplate>
    );
}
