"use client";

import Image from "next/image";
import Link from "next/link";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import { motion } from "framer-motion";
import { 
    ArrowRight,
    Building2,
    Truck
} from "lucide-react";
import { PhoneMockup } from "@/components/ui/mockups";

export default function EmergencyAppPage() {
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
            role="UX/UI Designer"
            timeline="June 2025 – October 2025"
            tags={["Healthcare UX", "STEMI Response", "Mobile Application", "Clinical Workflows"]}
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
                                    Case Study · Healthcare UX
                                </span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight font-serif leading-[1.05]">
                                Clinical Emergency <em className="italic text-[var(--accent-gold)] font-serif font-normal">Response</em>
                            </h1>
                            
                            <p className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-[1.3] italic font-normal">
                                Helping doctors and nurses coordinate STEMI emergencies with clarity
                            </p>

                            <div className="space-y-3.5 text-[var(--text-secondary)] font-sans text-base md:text-lg leading-relaxed pt-1">
                                <p>
                                    A mobile healthcare application that helps medical teams raise, receive, verify, and coordinate STEMI alerts.
                                </p>
                                <p>
                                    The application supports emergency situations both <strong className="text-[var(--text-primary)] font-medium">within the same hospital branch</strong> and <strong className="text-[var(--text-primary)] font-medium">between different branches</strong>, helping medical teams understand the patient, urgency, and next steps.
                                </p>
                                <p>
                                    I worked across the experience to make emergency information, alerts, patient details, and communication easier to understand and act on.
                                </p>
                            </div>
                        </div>

                        {/* 60% Visual Column (Large Dual Overlapping Mockups) */}
                        <div className="lg:col-span-7 flex justify-center lg:justify-end">
                            <div className="relative w-full max-w-[560px] flex items-center justify-center py-2">
                                {/* Phone 1: Active Alarm Feed */}
                                <div className="relative z-20 w-[52%] max-w-[290px] transform -rotate-2 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                                    <PhoneMockup className="max-w-none w-full">
                                        <img 
                                            src="/images/emergency-app/alarm-list.png" 
                                            alt="Clinical Emergency Response Active Alarm Feed" 
                                            className="w-full h-auto block" 
                                        />
                                    </PhoneMockup>
                                    <p className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-2.5">
                                        Active STEMI Alarm Feed
                                    </p>
                                </div>

                                {/* Phone 2: Dedicated Team Coordination */}
                                <div className="relative z-10 w-[48%] max-w-[270px] -ml-[12%] transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl opacity-90 hover:opacity-100">
                                    <PhoneMockup className="max-w-none w-full">
                                        <img 
                                            src="/images/emergency-app/chat.png" 
                                            alt="Clinical Emergency Response Team Chat Screen" 
                                            className="w-full h-auto block" 
                                        />
                                    </PhoneMockup>
                                    <p className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-2.5">
                                        Dedicated Team Chat
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
                                <span className="text-[var(--text-primary)] font-medium">UX/UI Designer</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Users</span>
                                <span className="text-[var(--text-secondary)]">Doctors, nurses &amp; personnel</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Timeline</span>
                                <span className="text-[var(--text-secondary)]">June 2025 – October 2025</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Platform</span>
                                <span className="text-[var(--text-secondary)]">Mobile application</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Contribution</span>
                                <span className="text-[var(--text-secondary)]">UX/UI, IA, Workflow Design</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Status</span>
                                <span className="text-[var(--text-primary)] font-medium flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Implemented
                                </span>
                            </div>
                        </div>

                        {/* NDA Notice directly under metadata */}
                        <p className="mt-5 text-xs text-[var(--text-tertiary)] italic font-mono">
                            *This project is under NDA. Client-identifying information has been masked or anonymized.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 2. THE PRODUCT — COMPACT VISUAL BRANCHING SYSTEM                          */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-8"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            The Product
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            One emergency can involve multiple teams
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            The application helps medical teams coordinate STEMI cases from the moment an emergency is identified through verification, communication, and treatment.
                        </p>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            There were two main situations the product needed to support.
                        </p>
                    </div>

                    {/* Integrated Branching System (Compact Diagram, No Cards) */}
                    <div className="pt-4 border-t border-[var(--surface-border)]">
                        {/* Tree Root */}
                        <div className="flex flex-col items-center text-center pb-6">
                            <span className="px-5 py-2 rounded-full border border-[var(--accent-gold)]/40 bg-[var(--bg-sage)] text-[var(--text-primary)] font-mono text-xs md:text-sm font-bold tracking-wider">
                                STEMI IDENTIFIED
                            </span>
                            <div className="w-px h-6 bg-[var(--surface-border)] my-1"></div>
                            <div className="w-3/4 max-w-[520px] h-px bg-[var(--surface-border)] relative">
                                <div className="absolute -left-1 -top-1 w-2 h-2 rounded-full bg-[var(--accent-gold)]"></div>
                                <div className="absolute -right-1 -top-1 w-2 h-2 rounded-full bg-[#60a5fa]"></div>
                            </div>
                        </div>

                        {/* Dual Branch Flow */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-2">
                            {/* Branch A: Same Branch */}
                            <div className="space-y-3 lg:border-r lg:border-[var(--surface-border)]/60 lg:pr-8">
                                <div className="space-y-1">
                                    <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider flex items-center gap-1.5">
                                        <Building2 className="w-3.5 h-3.5" /> Situation 01 · Same Branch
                                    </span>
                                    <h3 className="font-serif text-xl md:text-2xl text-[var(--text-primary)]">
                                        When treatment happens at the same branch
                                    </h3>
                                </div>
                                <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                                    A medical professional identifies a STEMI patient and raises an alert. The relevant team receives the alert, verifies the information, understands the urgency, and coordinates internally before the patient proceeds for treatment.
                                </p>
                                <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-[var(--text-primary)] pt-1">
                                    <span className="text-[var(--text-secondary)]">Alert raised</span>
                                    <span className="text-[var(--accent-gold)]">→</span>
                                    <span className="text-[var(--text-secondary)]">Team notified</span>
                                    <span className="text-[var(--accent-gold)]">→</span>
                                    <span className="text-[var(--text-secondary)]">Alert verified</span>
                                    <span className="text-[var(--accent-gold)]">→</span>
                                    <span className="text-[var(--text-secondary)]">Internal coordination</span>
                                    <span className="text-[var(--accent-gold)]">→</span>
                                    <span className="text-[var(--accent-gold)] font-bold">Treatment</span>
                                </div>
                            </div>

                            {/* Branch B: Another Branch */}
                            <div className="space-y-3 lg:pl-4">
                                <div className="space-y-1">
                                    <span className="font-mono text-xs font-bold text-[#60a5fa] uppercase tracking-wider flex items-center gap-1.5">
                                        <Truck className="w-3.5 h-3.5" /> Situation 02 · Another Branch
                                    </span>
                                    <h3 className="font-serif text-xl md:text-2xl text-[var(--text-primary)]">
                                        When the patient needs another branch
                                    </h3>
                                </div>
                                <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                                    A patient may be identified at a branch that does not have the equipment needed for STEMI treatment. The alert helps notify the appropriate receiving branch. The receiving team verifies the patient information, coordinates the transfer, and prepares to continue treatment when the patient arrives.
                                </p>
                                <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs text-[var(--text-primary)] pt-1">
                                    <span className="text-[var(--text-secondary)]">Alert raised</span>
                                    <span className="text-[#60a5fa]">→</span>
                                    <span className="text-[var(--text-secondary)]">Receiving branch notified</span>
                                    <span className="text-[#60a5fa]">→</span>
                                    <span className="text-[var(--text-secondary)]">Alert verified</span>
                                    <span className="text-[#60a5fa]">→</span>
                                    <span className="text-[var(--text-secondary)]">EMS transfer</span>
                                    <span className="text-[#60a5fa]">→</span>
                                    <span className="text-[var(--text-secondary)]">Receiving team prepares</span>
                                    <span className="text-[#60a5fa]">→</span>
                                    <span className="text-[#60a5fa] font-bold">Treatment</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-3xl leading-relaxed pt-2">
                        This meant the application had to support both <strong className="text-[var(--text-primary)] font-medium">coordination within a branch</strong> and <strong className="text-[var(--text-primary)] font-medium">coordination between branches</strong>.
                    </p>
                </motion.section>

                {/* ========================================================================= */}
                {/* 3. THE DESIGN CHALLENGE — LARGE ORIGINAL SCREEN WITH ANNOTATIONS          */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-8"
                >
                    <div className="max-w-3xl space-y-3">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#ef4444] font-semibold">
                            The Design Challenge
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            How do you make a high-pressure experience easier to understand?
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed pt-1">
                            During a design review, I noticed that the Alarm List was carrying a large amount of information in each card:
                        </p>
                        <p className="font-mono text-xs sm:text-sm md:text-base text-[var(--text-primary)] leading-relaxed">
                            Patient information · Case ID · Contact details · Alarm timing · Patient status · Facility information · EMS information · Actions
                        </p>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            The information was useful. The problem was that too many elements were competing for attention.
                        </p>
                    </div>

                    {/* Large Inspectable Original Screen */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-2">
                        <div className="lg:col-span-7 flex justify-center">
                            <div className="relative w-full max-w-[360px] md:max-w-[420px]">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img 
                                        src="/images/emergency-app/alarm-list.png" 
                                        alt="Original Alarm List Screen" 
                                        className="w-full h-auto block" 
                                    />
                                </PhoneMockup>
                                
                                {/* Pinned Subtle Annotations */}
                                <div className="absolute top-[28%] -right-3 sm:-right-6 bg-[var(--bg-sage)] border border-[#ef4444]/60 text-[var(--text-primary)] px-3.5 py-1.5 rounded-full text-xs font-mono shadow-2xl hidden sm:flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
                                    <span>PATIENT NAME (Low prominence)</span>
                                </div>
                                <div className="absolute top-[48%] -left-3 sm:-left-6 bg-[var(--bg-sage)] border border-[#ef4444]/60 text-[var(--text-primary)] px-3.5 py-1.5 rounded-full text-xs font-mono shadow-2xl hidden sm:flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span>
                                    <span>PATIENT STATUS (Buried in metadata)</span>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-5">
                            <div className="space-y-3">
                                <h3 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)]">
                                    Two things were particularly difficult to identify quickly:
                                </h3>
                                
                                <div className="space-y-3 pt-1">
                                    <div className="pl-4 border-l-2 border-[#ef4444] space-y-0.5">
                                        <p className="font-serif text-xl md:text-2xl text-[var(--text-primary)]">Who is the patient?</p>
                                    </div>
                                    <div className="pl-4 border-l-2 border-[#ef4444] space-y-0.5">
                                        <p className="font-serif text-xl md:text-2xl text-[var(--text-primary)]">What is the patient&apos;s current status?</p>
                                    </div>
                                </div>
                            </div>

                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                For a medical professional receiving an alert, these answers need to be easy to find.
                            </p>
                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                I wanted to improve the hierarchy without removing the information or functionality clinicians needed.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 4. THE DESIGN GOAL — STRONG TYPOGRAPHIC MOMENT                            */}
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
                            The Design Goal
                        </span>

                        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[var(--text-primary)] leading-[1.25] tracking-tight">
                            &ldquo;A clinician should be able to understand the alert and reach the action they need <span className="italic text-[var(--accent-gold)] font-serif font-normal">within roughly 30 seconds</span>.&rdquo;
                        </blockquote>

                        <div className="max-w-xl mx-auto space-y-2.5 pt-2 font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
                            <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-[var(--accent-gold)] font-medium">
                                This was a design target, not a measured performance metric.
                            </p>
                            <p>
                                So the goal wasn&apos;t simply to make the interface look cleaner. It was to make the information and actions clinicians needed <strong className="text-[var(--text-primary)] font-medium">easier to find and understand</strong>.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 5. DESIGN DECISION 01 — PATIENT IDENTITY & STATUS (STRONGEST SECTION)     */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-8"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Design Decision 01
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Make patient identity and status easier to understand
                        </h2>
                    </div>

                    {/* LARGE SIDE-BY-SIDE BEFORE / AFTER */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center">
                            {/* Original */}
                            <div className="w-full max-w-[280px] md:max-w-[300px] space-y-2">
                                <PhoneMockup className="max-w-none w-full">
                                    <img 
                                        src="/images/emergency-app/alarm-list.png" 
                                        alt="Previous Alarm List Hierarchy" 
                                        className="w-full h-auto block opacity-75 hover:opacity-100 transition-opacity" 
                                    />
                                </PhoneMockup>
                                <p className="text-center font-mono text-xs text-[#ef4444] font-medium">
                                    BEFORE: Buried patient identity
                                </p>
                            </div>

                            {/* Redesigned */}
                            <div className="w-full max-w-[280px] md:max-w-[300px] space-y-2">
                                <PhoneMockup className="max-w-none w-full ring-2 ring-emerald-500/40 rounded-[2.8rem] md:rounded-[3.2rem]">
                                    <img 
                                        src="/images/thumbnails/Emergency app - Alarm List (1).png" 
                                        alt="Redesigned Alarm List Hierarchy" 
                                        className="w-full h-auto block" 
                                    />
                                </PhoneMockup>
                                <p className="text-center font-mono text-xs text-emerald-400 font-medium">
                                    AFTER: Strong anchor &amp; prominent status
                                </p>
                            </div>
                        </div>

                        {/* Narrative & Questions */}
                        <div className="lg:col-span-5 space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                One of my key changes was improving the visibility of the <strong className="text-[var(--text-primary)] font-medium">patient name and current patient status</strong> in the Alarm List.
                            </p>
                            <p>
                                In the previous design, the patient name was not prominent enough, and the patient&apos;s status was also difficult to identify at a glance.
                            </p>

                            <div className="space-y-1.5 pt-1 text-[var(--text-primary)] font-serif text-lg">
                                <p>• Who is the patient?</p>
                                <p>• What is their current status?</p>
                                <p>• How urgent is the situation?</p>
                            </div>

                            <p>
                                I changed the visual hierarchy so the <strong className="text-[var(--text-primary)] font-medium">patient name became a stronger anchor</strong> and the <strong className="text-[var(--text-primary)] font-medium">patient status became more visible</strong> within the card.
                            </p>

                            <div className="pt-3 border-t border-[var(--surface-border)]">
                                <span className="font-mono text-xs text-[var(--text-tertiary)] block mb-1">
                                    Suggested and discussed with:
                                </span>
                                <span className="text-[var(--text-primary)] font-mono text-xs font-semibold">
                                    Doctors · End Client · Product Manager · Manager
                                </span>
                            </div>

                            <p className="text-xs md:text-sm text-[var(--text-secondary)] italic">
                                The goal was to make the most important patient information easier to recognize without requiring clinicians to scan through the entire card.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 6. DESIGN DECISION 02 — ALARM LIST VS COMMUNICATION                       */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-8"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Design Decision 02
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Keep emergency alerts and communication separate
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed pt-1">
                            The application also supported communication between medical staff through groups and conversations.
                        </p>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            I kept <strong className="text-[var(--text-primary)] font-medium">Alarm List</strong> and <strong className="text-[var(--text-primary)] font-medium">Communication</strong> as separate experiences because they serve different purposes.
                        </p>
                    </div>

                    {/* Dual Screens Side by Side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 pt-2">
                        {/* Alarm List Screen */}
                        <div className="space-y-5">
                            <div className="w-full max-w-[320px] md:max-w-[360px] mx-auto">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img 
                                        src="/images/emergency-app/alarm-list.png" 
                                        alt="Alarm List Experience" 
                                        className="w-full h-auto block" 
                                    />
                                </PhoneMockup>
                            </div>
                            <div className="space-y-2 max-w-sm mx-auto">
                                <h3 className="font-serif text-2xl text-[var(--text-primary)] border-b border-[var(--surface-border)] pb-2">
                                    Alarm List
                                </h3>
                                <p className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                                    Understand and respond
                                </p>
                                <ul className="text-sm text-[var(--text-secondary)] space-y-1.5 font-sans">
                                    <li>• What is happening?</li>
                                    <li>• Who is the patient?</li>
                                    <li>• How urgent is it?</li>
                                    <li>• What action is needed?</li>
                                </ul>
                            </div>
                        </div>

                        {/* Communication Screen */}
                        <div className="space-y-5">
                            <div className="w-full max-w-[320px] md:max-w-[360px] mx-auto">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img 
                                        src="/images/emergency-app/chat.png" 
                                        alt="Communication & Team Coordination Screen" 
                                        className="w-full h-auto block" 
                                    />
                                </PhoneMockup>
                            </div>
                            <div className="space-y-2 max-w-sm mx-auto">
                                <h3 className="font-serif text-2xl text-[var(--text-primary)] border-b border-[var(--surface-border)] pb-2">
                                    Communication
                                </h3>
                                <p className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                                    Coordinate with the team
                                </p>
                                <ul className="text-sm text-[var(--text-secondary)] space-y-1.5 font-sans">
                                    <li>• Who do I need to coordinate with?</li>
                                    <li>• What does the team need to know?</li>
                                    <li>• What do we need to discuss?</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-3xl pt-2">
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            Both are important to emergency response, but they shouldn&apos;t compete with each other. Separating them allowed the alert experience to stay focused while giving teams a dedicated place to communicate.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 7. DESIGN DECISION 03 — TIERED ALERTS                                     */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-8"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Design Decision 03
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Make different levels of urgency easier to understand
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        <div className="lg:col-span-7 flex justify-center">
                            <div className="w-full max-w-[340px] md:max-w-[400px]">
                                <PhoneMockup className="max-w-none w-full shadow-2xl">
                                    <img 
                                        src="/images/emergency-app/notification-screen.png" 
                                        alt="Tiered Urgency Alert Modal and Notification UI" 
                                        className="w-full h-auto block" 
                                    />
                                </PhoneMockup>
                            </div>
                        </div>

                        <div className="lg:col-span-5 space-y-5 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                The application supported <strong className="text-[var(--text-primary)] font-medium">tiered alerts</strong> because not every emergency requires the same level of attention.
                            </p>
                            <p>
                                I worked on how these different levels of urgency were represented so medical personnel could understand the priority of an alert more easily.
                            </p>
                            <p className="font-serif text-xl md:text-2xl text-[var(--text-primary)] italic pt-1">
                                The goal was to communicate urgency clearly without adding unnecessary complexity.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 8. ITERATION SECTION — ORIGINAL → FIRST ITERATION → FINAL                 */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-10"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Designing the Experience
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            From the original design to the final direction
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            The redesign went through multiple iterations.
                        </p>
                    </div>

                    {/* Fluid 3-Step Iteration Progression */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-start pt-2">
                        {/* Iteration 1 */}
                        <div className="space-y-4">
                            <div className="w-full max-w-[270px] mx-auto">
                                <PhoneMockup className="max-w-none w-full">
                                    <img 
                                        src="/images/emergency-app/alarm-list.png" 
                                        alt="Original Screen" 
                                        className="w-full h-auto block" 
                                    />
                                </PhoneMockup>
                            </div>
                            <div className="space-y-1.5 border-t border-[var(--surface-border)] pt-3">
                                <span className="font-mono text-xs font-bold text-[var(--text-tertiary)] block">01 / ORIGINAL</span>
                                <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                    The original Alarm List placed a large amount of information into each card. The information was useful, but too much of it competed for attention. The patient name and status were also not prominent enough.
                                </p>
                            </div>
                        </div>

                        {/* Iteration 2 */}
                        <div className="space-y-4">
                            <div className="w-full max-w-[270px] mx-auto">
                                <PhoneMockup className="max-w-none w-full">
                                    <img 
                                        src="/images/thumbnails/Emergency app- Alarm List.png" 
                                        alt="First Iteration Screen" 
                                        className="w-full h-auto block" 
                                    />
                                </PhoneMockup>
                            </div>
                            <div className="space-y-1.5 border-t border-[var(--surface-border)] pt-3">
                                <span className="font-mono text-xs font-bold text-[var(--accent-gold)] block">02 / FIRST ITERATION</span>
                                <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                    I explored a more compact direction with a clearer status and information hierarchy. This reduced the visual load, but I realized that I was simplifying too aggressively. Important information and workflow context still needed to remain accessible.
                                </p>
                            </div>
                        </div>

                        {/* Iteration 3 */}
                        <div className="space-y-4">
                            <div className="w-full max-w-[270px] mx-auto">
                                <PhoneMockup className="max-w-none w-full ring-2 ring-[var(--accent-gold)]/50 rounded-[2.8rem] md:rounded-[3.2rem]">
                                    <img 
                                        src="/images/thumbnails/Emergency app - Alarm List (1).png" 
                                        alt="Final Direction Screen" 
                                        className="w-full h-auto block" 
                                    />
                                </PhoneMockup>
                            </div>
                            <div className="space-y-1.5 border-t border-[var(--accent-gold)]/50 pt-3">
                                <span className="font-mono text-xs font-bold text-emerald-400 block">03 / FINAL DIRECTION</span>
                                <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                    The final direction kept the information and actions clinicians needed while giving greater prominence to what they needed first. The patient name became easier to identify. The patient status became more visible. The overall information hierarchy became easier to scan.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="pt-2 text-center">
                        <p className="font-serif text-lg sm:text-xl text-[var(--accent-gold)] italic">
                            The balance became: Clear information + accessible actions + lower cognitive load
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 9. ORGANIZING THE EXPERIENCE                                              */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-8"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Information Architecture
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Organizing the Experience
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed pt-1">
                            The application supported several actions around an emergency case.
                        </p>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)]">
                            I organized these so that different tasks had clearer entry points, including:
                        </p>
                    </div>

                    {/* Action Entries Flow */}
                    <div className="flex flex-wrap items-center gap-3 pt-1">
                        {["Details", "Chat", "Members", "EMS", "Updates"].map((action, idx) => (
                            <span 
                                key={idx} 
                                className="font-serif text-xl md:text-2xl px-5 py-2 rounded-full border border-[var(--surface-border)] bg-[var(--bg-sage)] text-[var(--text-primary)]"
                            >
                                {action}
                            </span>
                        ))}
                    </div>

                    {/* Conceptual Domain Distinction (No Cards) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-[var(--surface-border)]">
                        <div className="space-y-1.5 pt-1">
                            <span className="font-mono text-xs text-[var(--accent-gold)] font-bold">CORE DOMAIN 01</span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">Responding to an emergency</h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Direct alert triage, status verification, and clinical response.
                            </p>
                        </div>
                        <div className="space-y-1.5 pt-1 md:border-l md:border-[var(--surface-border)] md:pl-6">
                            <span className="font-mono text-xs text-[var(--accent-gold)] font-bold">CORE DOMAIN 02</span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">Communicating about the emergency</h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Inter-team group discussions, facility transfer coordination, and timeline updates.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-1 max-w-2xl font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                        <p>
                            The intention was not to remove functionality.
                        </p>
                        <p>
                            It was to make the different tasks easier to understand and access.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 10. FAMILIAR PATTERNS & CONSTRAINTS (Quiet Supporting Section)            */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 border-t border-[var(--surface-border)] pt-12"
                >
                    {/* Working with Familiar Patterns */}
                    <div className="lg:col-span-6 space-y-4">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Clinical Conventions
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-[1.2]">
                            Working With Familiar Patterns
                        </h2>
                        <div className="space-y-3 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                This was a high-stakes healthcare environment, so I didn&apos;t want to introduce new interaction patterns simply for the sake of being different.
                            </p>
                            <p>
                                I looked at familiar patterns used in US healthcare products, including patterns influenced by established systems such as <strong className="text-[var(--text-primary)] font-medium">Epic</strong>.
                            </p>
                            <p>
                                The existing application did not consistently follow those familiar patterns.
                            </p>
                            <p>
                                Instead of making clinicians learn a completely new way of working, I used familiar patterns as a reference and adapted the experience around the needs of the product.
                            </p>
                        </div>
                    </div>

                    {/* Working Within Real Constraints */}
                    <div className="lg:col-span-6 space-y-4 lg:border-l lg:border-[var(--surface-border)] lg:pl-10">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--text-tertiary)] font-semibold">
                            Context
                        </span>
                        <h2 className="font-serif text-2xl md:text-3xl text-[var(--text-primary)] leading-[1.2]">
                            Working Within Real Constraints
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            This was not a greenfield project. I worked within:
                        </p>
                        
                        {/* Clean Typographic List (NO CARDS) */}
                        <ul className="space-y-2 font-sans text-sm md:text-base text-[var(--text-primary)]">
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]"></span>
                                Existing product architecture
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]"></span>
                                Ionic framework constraints
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]"></span>
                                Existing navigation and workflows
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]"></span>
                                Client requirements
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]"></span>
                                Technical limitations
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]"></span>
                                Limited project time
                            </li>
                            <li className="flex items-center gap-2.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]"></span>
                                Established healthcare interaction patterns
                            </li>
                        </ul>

                        <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed pt-1">
                            These constraints meant I had to improve the experience within the existing product rather than assume the entire application could be redesigned from scratch.
                        </p>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 11. TESTING & 12. OUTCOME (Simple, Factual, Restrained)                  */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="border-t border-[var(--surface-border)] pt-12 space-y-8"
                >
                    <div className="max-w-3xl space-y-2">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            Validation &amp; Outcome
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Testing with doctors and nurses
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
                        {/* Large Number Hero */}
                        <div className="lg:col-span-4 space-y-1">
                            <div className="font-serif text-6xl sm:text-7xl md:text-8xl font-light text-[var(--text-primary)] tracking-tight">
                                3–4
                            </div>
                            <p className="font-mono text-xs md:text-sm uppercase tracking-wider text-[var(--accent-gold)] font-semibold">
                                Doctors and nurses tested the redesign
                            </p>
                        </div>

                        {/* Validation copy & outcome points */}
                        <div className="lg:col-span-8 space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                The purpose was to check whether the new structure made sense to the people who would actually use the application and whether the information and actions they needed were still accessible.
                            </p>

                            <div className="space-y-2 pt-1">
                                <div className="flex items-start gap-2.5 text-[var(--text-primary)] font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                                    <span>The end client was satisfied with the result and reported <strong className="text-[var(--text-primary)] font-bold">no performance or usage issues</strong>.</span>
                                </div>
                                <div className="flex items-start gap-2.5 text-[var(--text-primary)] font-medium">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0"></span>
                                    <span>The redesigned experience was subsequently <strong className="text-[var(--text-primary)] font-bold">implemented in the product</strong>.</span>
                                </div>
                            </div>

                            <p>
                                The redesigned experience made the emergency information easier to scan while keeping the information and actions medical teams needed.
                            </p>

                            <p className="font-mono text-xs text-[var(--text-tertiary)] italic pt-2">
                                *The 30-second figure was a design target, not a post-launch performance metric.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 13. NEXT CASE STUDY (No inspirational quotes or reflections)              */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="border-t border-[var(--surface-border)] pt-12 pb-6 space-y-8"
                >
                    {/* Navigation Footer */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                        <div>
                            <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-tertiary)] mb-1">Next Case Study</p>
                            <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] leading-tight">RupeeRise</h3>
                        </div>
                        <Link
                            href="/rupeerise"
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


