"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import { DesktopMockup } from "@/components/ui/mockups";
import { 
    ArrowRight, 
    CheckCircle2, 
    UserCheck, 
    Users, 
    ShieldCheck, 
    Briefcase,
    Calendar,
    GraduationCap,
    TrendingUp,
    Layers,
    Sparkles,
    CheckSquare,
    Award,
    HeartHandshake
} from "lucide-react";

export default function UdyogaPramodaPage() {
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
            title="Udyoga Pramoda"
            role="Product Designer — UX, UI & Product"
            timeline="May–July 2025"
            tags={["Career Community", "Mentorship Platform", "EdTech", "Web Product"]}
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
                        {/* 45% Text Column */}
                        <div className="lg:col-span-5 space-y-5">
                            <div className="inline-flex items-center gap-3">
                                <span className="h-px w-6 bg-[var(--accent-gold)]" />
                                <span className="text-[var(--accent-gold)] font-sans text-xs md:text-sm tracking-widest uppercase font-bold">
                                    Case Study · Career Community &amp; EdTech
                                </span>
                            </div>
                            
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight font-serif leading-[1.05]">
                                Udyoga <em className="italic text-[var(--accent-gold)] font-serif font-normal">Pramoda</em>
                            </h1>
                            
                            <p className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] leading-[1.3] italic font-normal">
                                Making progress visible in a volunteer-driven career community
                            </p>

                            <div className="space-y-3.5 text-[var(--text-secondary)] font-sans text-base md:text-lg leading-relaxed pt-1">
                                <p>
                                    Udyoga Pramoda started as a community platform for <strong className="text-[var(--text-primary)] font-medium">jobs, events, classes and mentors</strong>.
                                </p>
                                <p>
                                    The platform could help young people discover opportunities and connect with working professionals. But I noticed a problem after people joined: <strong className="text-[var(--text-primary)] font-medium">many participants did not consistently attend classes or complete the work given to them.</strong>
                                </p>
                                <p>
                                    For a volunteer-driven mentor community, that created a bigger problem. Mentors were giving their time to help people grow, but there was little visibility into who was actually learning, who was putting in consistent effort, and who needed attention.
                                </p>
                            </div>
                        </div>

                        {/* 55% Visual Column (Desktop Mockup using Next Image) */}
                        <div className="lg:col-span-7 flex justify-center lg:justify-end">
                            <div className="w-full max-w-[760px] shadow-2xl">
                                <DesktopMockup className="max-w-none w-full shadow-2xl">
                                    <Image 
                                        src="/images/thumbnails/Udyoga Pramoda Landing.png" 
                                        alt="Udyoga Pramoda Community Platform Landing & Progression View" 
                                        width={1200}
                                        height={750}
                                        priority
                                        className="w-full h-auto block" 
                                    />
                                </DesktopMockup>
                                <p className="text-center font-mono text-xs text-[var(--text-tertiary)] mt-3">
                                    Udyoga Pramoda · Making Learner Progression &amp; Effort Visible
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Project Snapshot / Metadata Grid */}
                    <div className="mt-12 pt-6 border-t border-[var(--surface-border)]">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-5 gap-x-6 text-xs md:text-sm font-sans">
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Role</span>
                                <span className="text-[var(--text-primary)] font-medium">Product Designer — UX, UI &amp; Product</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Timeline</span>
                                <span className="text-[var(--text-secondary)]">May–July 2025</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Team</span>
                                <span className="text-[var(--text-secondary)]">1 Designer + 1 Developer</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Platform</span>
                                <span className="text-[var(--text-secondary)]">Web</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Involvement</span>
                                <span className="text-[var(--text-secondary)]">UX/UI, Product Thinking, Flows, Deployment</span>
                            </div>
                            <div>
                                <span className="text-[var(--text-tertiary)] uppercase tracking-wider block mb-1 font-mono text-xs">Outcome</span>
                                <span className="text-[var(--text-primary)] font-medium">1,247 Users · 25 Placements</span>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 2. THE CORE IDEA & 01 — WHERE IT STARTED                                  */}
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
                            Core Redesign Thesis
                        </span>

                        <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl text-[var(--text-primary)] leading-[1.3] tracking-tight">
                            &ldquo;Make progress visible to the people who can act on it.&rdquo;
                        </blockquote>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pt-12">
                        <div className="lg:col-span-5 space-y-4">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                01 — Where It Started
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Udyoga Pramoda already had the pieces of a career ecosystem
                            </h2>
                            <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                The first version wasn&apos;t trying to compete with every career platform. It brought together things that were already happening within the community:
                            </p>
                        </div>

                        <div className="lg:col-span-7 space-y-5 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed lg:border-l lg:border-[var(--surface-border)] lg:pl-12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono text-[var(--text-primary)]">
                                <div className="p-3.5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-1">
                                    <span className="text-[var(--accent-gold)] font-bold block uppercase">Jobs</span>
                                    <p className="font-sans text-xs text-[var(--text-secondary)]">People could discover opportunities.</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-1">
                                    <span className="text-[var(--accent-gold)] font-bold block uppercase">Events &amp; Classes</span>
                                    <p className="font-sans text-xs text-[var(--text-secondary)]">Community conducted sessions, hackathons and skill programs.</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-1">
                                    <span className="text-[var(--accent-gold)] font-bold block uppercase">Mentors</span>
                                    <p className="font-sans text-xs text-[var(--text-secondary)]">Browse working professionals and send connection requests.</p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-1">
                                    <span className="text-[var(--accent-gold)] font-bold block uppercase">Community Communication</span>
                                    <p className="font-sans text-xs text-[var(--text-secondary)]">WhatsApp groups helped communication outside the product.</p>
                                </div>
                            </div>

                            <p>
                                Mentors were professionals volunteering their time to help younger people develop skills. They could accept or reject connection requests, guide mentees and share relevant opportunities from their professional networks.
                            </p>

                            <div className="pt-2">
                                <span className="font-mono text-xs text-[var(--text-tertiary)] uppercase tracking-wider block mb-1.5">
                                    The Basic Journey Existed:
                                </span>
                                <div className="flex flex-wrap items-center gap-2 font-mono text-xs sm:text-sm text-[var(--text-primary)] bg-[var(--bg-sage)] p-4 rounded-xl border border-[var(--surface-border)]">
                                    <span>Discover</span>
                                    <span className="text-[var(--accent-gold)]">→</span>
                                    <span>Connect</span>
                                    <span className="text-[var(--accent-gold)]">→</span>
                                    <span>Learn</span>
                                    <span className="text-[var(--accent-gold)]">→</span>
                                    <span className="text-[var(--accent-gold)] font-bold">Find opportunities</span>
                                </div>
                            </div>

                            <p className="font-serif text-xl text-[var(--text-primary)] italic pt-2">
                                The problem wasn&apos;t access. It was what happened after someone joined.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 3. 02 — THE PROBLEM I NOTICED & 03 — THE OPPORTUNITY                       */}
                {/* ========================================================================= */}
                <motion.section 
                    variants={fadeUp} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-40px" }}
                    className="space-y-12 border-t border-[var(--surface-border)] pt-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
                        {/* 02 Problem */}
                        <div className="space-y-4">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#ef4444] font-semibold">
                                02 — The Problem I Noticed
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                Participation was visible. Commitment wasn&apos;t.
                            </h2>
                            <div className="space-y-3.5 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    Through my involvement in the community, I noticed that people would often join classes or programs but stop participating midway.
                                </p>
                                <p>
                                    Some attended regularly. Some completed the work. Others joined but gradually disappeared.
                                </p>
                                <p>
                                    For a normal content platform, that might simply look like low engagement. But Udyoga Pramoda was different because the people providing the guidance were <strong className="text-[var(--text-primary)] font-medium">volunteers</strong>.
                                </p>
                                <p>
                                    A mentor might spend their limited free time teaching a class or helping a mentee. If the mentee wasn&apos;t following through, the mentor had little evidence that their effort was translating into progress.
                                </p>
                                <p className="font-serif text-xl text-[var(--text-primary)] italic pl-4 border-l-2 border-[#ef4444]">
                                    &ldquo;Who is actually progressing?&rdquo;
                                </p>
                                <p className="text-sm text-[var(--text-tertiary)] italic">
                                    A registration told them someone joined. A WhatsApp group told them someone was present. Neither necessarily showed consistent effort.
                                </p>
                            </div>
                        </div>

                        {/* 03 Opportunity */}
                        <div className="space-y-4 md:border-l md:border-[var(--surface-border)] md:pl-10">
                            <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-emerald-400 font-semibold">
                                03 — The Opportunity
                            </span>
                            <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                                What if the platform could show the work happening between connection and opportunity?
                            </h2>
                            <div className="space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                                <p>
                                    I didn&apos;t want to turn Udyoga Pramoda into another learning-management system. The goal was to add a lightweight progression layer to the community that already existed.
                                </p>

                                <div className="space-y-2 pt-1">
                                    <span className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider font-bold">
                                        The Core Loop:
                                    </span>
                                    <div className="flex flex-col gap-1.5 font-mono text-xs text-[var(--text-primary)] bg-[var(--bg-sage)] p-4 rounded-xl border border-emerald-500/40">
                                        <div>1. Mentor gives guidance</div>
                                        <div className="text-[var(--accent-gold)]">↓</div>
                                        <div>2. Mentor assigns a task</div>
                                        <div className="text-[var(--accent-gold)]">↓</div>
                                        <div>3. Mentee completes the task</div>
                                        <div className="text-[var(--accent-gold)]">↓</div>
                                        <div>4. Mentee submits the work</div>
                                        <div className="text-[var(--accent-gold)]">↓</div>
                                        <div>5. Mentor reviews it</div>
                                        <div className="text-emerald-400 font-bold">↓</div>
                                        <div className="text-emerald-400 font-bold">6. Progress becomes visible</div>
                                    </div>
                                </div>

                                <p className="font-serif text-xl text-[var(--text-primary)] italic pt-1">
                                    Not just &ldquo;Did this person join?&rdquo; but &ldquo;Are they actually putting in the effort?&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 4. 04 — WHY VISIBLE PROGRESS MATTERS & 05 — DIFFERENTIATION                */}
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
                            04 — Multi-Sided Signal
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            The same progress signal helps three sides of the community
                        </h2>
                        <p className="font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            The redesign wasn&apos;t just about giving mentees a task list. It made progress useful to everyone involved.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-2">
                        <div className="space-y-2 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <div className="flex items-center gap-2 text-[var(--accent-gold)] font-mono text-xs font-bold uppercase">
                                <GraduationCap className="w-4 h-4" /> Mentee
                            </div>
                            <h3 className="font-serif text-xl text-[var(--text-primary)] italic">
                                &ldquo;What should I do next?&rdquo;
                            </h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Tasks turn vague mentoring into concrete action.
                            </p>
                        </div>

                        <div className="space-y-2 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <div className="flex items-center gap-2 text-[#60a5fa] font-mono text-xs font-bold uppercase">
                                <UserCheck className="w-4 h-4" /> Mentor
                            </div>
                            <h3 className="font-serif text-xl text-[var(--text-primary)] italic">
                                &ldquo;Is this person actually progressing?&rdquo;
                            </h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Completed work gives mentors evidence they can use when deciding how to guide the mentee, what to teach next, and whether they are ready to recommend an opportunity.
                            </p>
                        </div>

                        <div className="space-y-2 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase">
                                <ShieldCheck className="w-4 h-4" /> Admin
                            </div>
                            <h3 className="font-serif text-xl text-[var(--text-primary)] italic">
                                &ldquo;Where is the community actually moving?&rdquo;
                            </h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Admins can see more than registrations and identify people who are consistently putting in effort, even before a placement happens.
                            </p>
                        </div>
                    </div>

                    {/* 05 — Why this makes Udyoga Pramoda different */}
                    <div className="space-y-5 pt-8 border-t border-[var(--surface-border)] max-w-4xl">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            05 — Positioning &amp; Differentiation
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            A job board measures opportunities. Udyoga Pramoda can represent the journey toward them.
                        </h2>
                        <div className="space-y-4 font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                            <p>
                                Platforms such as LinkedIn or Naukri are primarily designed around:
                            </p>
                            <div className="font-mono text-xs sm:text-sm text-[var(--text-tertiary)] bg-[var(--bg-sage)] p-4 rounded-xl border border-[var(--surface-border)] inline-block">
                                Profile → Job → Application → Hiring
                            </div>
                            <p>
                                Udyoga Pramoda serves a different part of the journey. Its value is in the space between:
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-serif text-xl text-[var(--text-primary)] italic">
                                <div className="p-4 rounded-xl bg-[var(--bg-sage)] border-l-4 border-[var(--surface-border)]">&ldquo;I want a job.&rdquo;</div>
                                <div className="p-4 rounded-xl bg-[var(--bg-sage)] border-l-4 border-[var(--accent-gold)]">&ldquo;I&apos;m ready for this opportunity.&rdquo;</div>
                            </div>
                            <p>
                                The platform brings together: <strong className="text-[var(--text-primary)] font-medium">Learning + Mentorship + Effort + Progress + Opportunities</strong>.
                            </p>
                            <p>
                                Someone doesn&apos;t need to already have a strong professional profile to get value from the platform. They can <strong className="text-[var(--text-primary)] font-medium">build evidence of their effort inside the community.</strong>
                            </p>
                            <p>
                                And importantly, <strong className="text-[var(--text-primary)] font-medium">placement isn&apos;t the only measure of progress.</strong> Someone might not get placed immediately. But if they attend sessions, connect with mentors, complete tasks, improve their skills and consistently participate, the platform can make that effort visible.
                            </p>
                            <blockquote className="p-5 rounded-xl bg-[var(--bg-sage)] border-l-4 border-[var(--accent-gold)] font-serif text-xl sm:text-2xl text-[var(--text-primary)] italic">
                                &ldquo;Udyoga Pramoda helps a community recognise people who are actively becoming opportunity-ready.&rdquo;
                            </blockquote>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 5. 06 MENTEE, 07 MENTOR, 08 ADMIN & 09 SYSTEM FLOW                         */}
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
                            06, 07 &amp; 08 — Role-Specific Experiences
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            Designing for each participant&apos;s mental model
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Mentee */}
                        <div className="space-y-3 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <span className="font-mono text-xs font-bold text-[var(--accent-gold)] uppercase tracking-wider block">
                                06 / MENTEE EXPERIENCE
                            </span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">
                                Progress first. Opportunity alongside it.
                            </h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                The redesigned mentee dashboard brings current activity into one place: Progress, Tasks, Mentor connections, Upcoming sessions, Events, and Job opportunities.
                            </p>
                            <div className="space-y-1 font-mono text-xs text-[var(--text-primary)] pt-1 border-t border-[var(--surface-border)]">
                                <div className="text-[var(--accent-gold)] font-bold mb-1 pt-1 uppercase">Task Flow:</div>
                                <div>1. Mentor assigns a task</div>
                                <div>2. Mentee receives in My Tasks</div>
                                <div>3. Mentee completes &amp; submits</div>
                                <div>4. Mentor reviews work</div>
                                <div>5. Mentor validates / directs</div>
                            </div>
                        </div>

                        {/* Mentor */}
                        <div className="space-y-3 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <span className="font-mono text-xs font-bold text-[#60a5fa] uppercase tracking-wider block">
                                07 / MENTOR EXPERIENCE
                            </span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">
                                Don&apos;t turn volunteering into administration.
                            </h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Mentors are volunteers. The dashboard surfaces decisions that matter:
                            </p>
                            <ul className="space-y-1.5 font-sans text-xs text-[var(--text-secondary)] pt-1 border-t border-[var(--surface-border)]">
                                <li>• <strong className="text-[var(--text-primary)] font-medium">Mentees needing attention</strong> — work needing review</li>
                                <li>• <strong className="text-[var(--text-primary)] font-medium">Progress</strong> — clear standing per mentee</li>
                                <li>• <strong className="text-[var(--text-primary)] font-medium">Sessions</strong> — upcoming mentoring activity</li>
                                <li>• <strong className="text-[var(--text-primary)] font-medium">Opportunities</strong> — share jobs with community</li>
                            </ul>
                        </div>

                        {/* Admin */}
                        <div className="space-y-3 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider block">
                                08 / ADMIN EXPERIENCE
                            </span>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)]">
                                Visibility across the community, not spreadsheets.
                            </h3>
                            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
                                Changes admin role from tracking registrations to understanding community progression:
                            </p>
                            <ul className="space-y-1 font-sans text-xs text-[var(--text-secondary)] pt-1 border-t border-[var(--surface-border)]">
                                <li>• Who is actively participating?</li>
                                <li>• Who is completing assigned work?</li>
                                <li>• Who may need additional support?</li>
                                <li>• Who is consistently engaged?</li>
                                <li>• Who is progressing before placement?</li>
                            </ul>
                        </div>
                    </div>

                    {/* 09 — The System & 10 — Mental Models */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 border-t border-[var(--surface-border)]">
                        <div className="lg:col-span-6 space-y-4">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                09 — The System Loop
                            </span>
                            <div className="font-mono text-xs text-[var(--text-primary)] bg-[var(--bg-sage)] p-4 rounded-xl border border-[var(--surface-border)] space-y-1">
                                <div>DISCOVER (Jobs / Events)</div>
                                <div className="text-[var(--text-tertiary)]">↓</div>
                                <div>CONNECT (Mentor)</div>
                                <div className="text-[var(--text-tertiary)]">↓</div>
                                <div>LEARN (Guidance / Classes)</div>
                                <div className="text-[var(--text-tertiary)]">↓</div>
                                <div>ACT (Mentor-assigned task)</div>
                                <div className="text-[var(--text-tertiary)]">↓</div>
                                <div>COMPLETE (Submit work)</div>
                                <div className="text-[var(--text-tertiary)]">↓</div>
                                <div>REVIEW (Mentor validates)</div>
                                <div className="text-emerald-400 font-bold">↓</div>
                                <div className="text-emerald-400 font-bold">PROGRESS (Effort becomes visible)</div>
                                <div className="text-emerald-400 font-bold">↓</div>
                                <div className="text-[var(--accent-gold)] font-bold">OPPORTUNITY (Jobs / Referrals)</div>
                            </div>
                        </div>

                        <div className="lg:col-span-6 space-y-4 lg:pl-6">
                            <span className="font-mono text-xs uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                                10 — Why I Chose Role-Specific Experiences
                            </span>
                            <p className="font-sans text-base text-[var(--text-secondary)] leading-relaxed">
                                The three users weren&apos;t solving the same problem:
                            </p>
                            <div className="space-y-3 font-serif text-lg text-[var(--text-primary)]">
                                <div className="p-3 rounded-lg bg-[var(--bg-sage)] border-l-4 border-[var(--accent-gold)]">
                                    <strong>Mentee:</strong> &ldquo;What do I need to do next?&rdquo;
                                </div>
                                <div className="p-3 rounded-lg bg-[var(--bg-sage)] border-l-4 border-[#60a5fa]">
                                    <strong>Mentor:</strong> &ldquo;Who needs my attention?&rdquo;
                                </div>
                                <div className="p-3 rounded-lg bg-[var(--bg-sage)] border-l-4 border-emerald-400">
                                    <strong>Admin:</strong> &ldquo;Who is progressing?&rdquo;
                                </div>
                            </div>
                            <p className="font-sans text-sm text-[var(--text-secondary)]">
                                Instead of giving everyone the same dashboard, I designed around these different mental models.
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* ========================================================================= */}
                {/* 6. 11 SHIPPED, 12 OUTCOMES, 13 WHAT CHANGED & 14 LEARNINGS               */}
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
                            11 &amp; 12 — Delivery &amp; Results
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.15]">
                            What we shipped &amp; what the product achieved
                        </h2>
                    </div>

                    {/* Delivery Clarification */}
                    <div className="max-w-3xl font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed space-y-3">
                        <p>
                            This wasn&apos;t a large product team. I worked with <strong className="text-[var(--text-primary)] font-medium">one developer</strong> to build the initial V1 product and then redesigned the experience based on what I observed in the community.
                        </p>
                        <p>
                            The redesign was developed and shipped as the next product direction. However, <strong className="text-[var(--text-primary)] font-medium">the redesigned UI had not yet been updated on the public website</strong>. The product work, flows and implementation were completed, while the public-facing website still showed the earlier visual experience.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4 border-t border-[var(--surface-border)]">
                        <div>
                            <div className="font-serif text-5xl md:text-6xl text-[var(--text-primary)] font-light">1,247</div>
                            <div className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1">active users</div>
                        </div>
                        <div>
                            <div className="font-serif text-5xl md:text-6xl text-[var(--text-primary)] font-light">156</div>
                            <div className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1">mentors</div>
                        </div>
                        <div>
                            <div className="font-serif text-5xl md:text-6xl text-[var(--text-primary)] font-light">25</div>
                            <div className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1">placements</div>
                        </div>
                        <div>
                            <div className="font-serif text-5xl md:text-6xl text-[var(--text-primary)] font-light">60+</div>
                            <div className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1">connections</div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                            <div className="font-serif text-5xl md:text-6xl text-[var(--text-primary)] font-light">₹7.5<span className="text-2xl">L</span></div>
                            <div className="font-mono text-xs text-[var(--accent-gold)] uppercase tracking-wider mt-1">avg LPA package</div>
                        </div>
                    </div>

                    <p className="font-sans text-sm md:text-base text-[var(--text-tertiary)] italic pt-1">
                        I don&apos;t attribute all of these outcomes to the redesign itself. The contribution of the redesign was creating a stronger product structure around the learning, mentoring and progression that already existed in the community.
                    </p>

                    {/* 13 What Changed (Before / After) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[var(--surface-border)]">
                        <div className="space-y-2 p-5 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
                            <span className="font-mono text-xs font-bold text-[#ef4444] uppercase tracking-wider">Before</span>
                            <div className="font-mono text-xs sm:text-sm text-[var(--text-primary)]">
                                Jobs + Events + Mentors + Community
                            </div>
                            <p className="font-sans text-sm text-[var(--text-secondary)] pt-1">The platform helped people find and connect.</p>
                        </div>
                        <div className="space-y-2 p-5 rounded-xl bg-[var(--bg-sage)] border border-emerald-500/40">
                            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wider">After the Redesign</span>
                            <div className="font-mono text-xs sm:text-sm text-[var(--text-primary)] font-bold">
                                Jobs + Events + Mentors + Tasks + Progress
                            </div>
                            <p className="font-sans text-sm text-[var(--text-secondary)] pt-1">The platform could also represent what happened after the connection.</p>
                        </div>
                    </div>

                    {/* 14 What I Learned */}
                    <div className="space-y-4 pt-6 border-t border-[var(--surface-border)] max-w-4xl font-sans text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                        <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[var(--accent-gold)] font-semibold">
                            14 — What I Learned
                        </span>
                        <h2 className="font-serif text-3xl sm:text-4xl text-[var(--text-primary)] leading-[1.15]">
                            Engagement is not the same as progress
                        </h2>
                        <p>
                            A person joining an event is an activity. A person completing the work, returning to their mentor, improving their skills and continuing the journey is progress.
                        </p>
                        <p>
                            That distinction changed how I thought about the product. I stopped looking at the platform as: <em>&ldquo;How do we give people more opportunities?&rdquo;</em> and started looking at it as: <em>&ldquo;How do we help the community recognise and support the people who are actually working toward those opportunities?&rdquo;</em>
                        </p>

                        <blockquote className="p-5 rounded-xl bg-[var(--bg-sage)] border-l-4 border-[var(--accent-gold)] font-serif text-xl sm:text-2xl text-[var(--text-primary)] italic">
                            &ldquo;Udyoga Pramoda doesn&apos;t just connect young people to opportunities. It makes the effort between learning and opportunity visible.&rdquo;
                        </blockquote>
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
