"use client";

import Image from "next/image";
import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import { motion } from "framer-motion";

export default function EmergencyAppPage() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } as any
        }
    };

    return (
        <CaseStudyTemplate
            title="Emergency Response App"
            role="UX / UI Designer"
            timeline="2–3 Months · Jun 2025"
            tags={["Healthcare", "Crisis UX", "Mobile System"]}
            hideDefaultHero={true}
        >
            <div className="max-w-[1400px] w-full mx-auto px-4 md:px-8 space-y-32 md:space-y-48 pb-32">
                
                {/* 00 / HERO */}
                <motion.section
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative pt-24 md:pt-32 w-full"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                        <div className="lg:col-span-6 space-y-6 relative z-10">
                            <div className="inline-flex items-center gap-2 mb-4">
                                <div className="h-px w-8 bg-[var(--accent-gold)]" />
                                <span className="text-[var(--accent-gold)] font-sans text-xs tracking-widest uppercase font-bold">Case Study · 2025</span>
                            </div>
                            <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] font-bold text-[var(--text-primary)] tracking-tighter text-balance font-serif leading-[0.95]">
                                Emergency<br />Response <em className="italic text-[var(--text-secondary)] font-light">App</em>
                            </h1>
                            <p className="font-serif text-3xl md:text-4xl text-[var(--accent-gold)] leading-[1.2] italic max-w-xl pt-4">
                                Cognitive Clarity at 2 AM.
                            </p>
                        </div>
                        <div className="lg:col-span-6 relative h-[600px] md:h-[700px] w-full mt-16 lg:mt-0">
                             {/* Decorative Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[var(--accent-gold)]/10 blur-[120px] rounded-full z-0 pointer-events-none"></div>
                            
                            {/* Staggered Mockups */}
                            <div className="absolute left-0 bottom-[10%] w-[55%] aspect-[9/19] z-20 shadow-2xl rounded-[32px] overflow-hidden border-[6px] border-[#2A3423] transform -rotate-2 hover:rotate-0 transition-transform duration-500 ease-out">
                                <Image src="/images/emergency-app/alarm-list.png" alt="Alarm List" fill className="object-cover object-top" />
                            </div>
                            <div className="absolute right-[5%] top-[5%] w-[50%] aspect-[9/19] z-10 shadow-2xl rounded-[32px] overflow-hidden border-[6px] border-[#2A3423] transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out opacity-80 hover:opacity-100">
                                <Image src="/images/emergency-app/chat.png" alt="Team Chat" fill className="object-cover object-top" />
                            </div>
                        </div>
                    </div>

                    {/* Metadata Strip */}
                    <div className="mt-24 pt-8 border-t border-[var(--surface-border)] grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent-gold)] mb-2">Role</p>
                            <p className="font-sans text-sm text-[var(--text-secondary)]">Lead UX/UI Designer</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent-gold)] mb-2">Timeline</p>
                            <p className="font-sans text-sm text-[var(--text-secondary)]">2–3 Months · 2025</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent-gold)] mb-2">Platform</p>
                            <p className="font-sans text-sm text-[var(--text-secondary)]">iOS &amp; Android</p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest font-bold text-[var(--accent-gold)] mb-2">Focus</p>
                            <p className="font-sans text-sm text-[var(--text-secondary)]">Crisis UX, Workflows</p>
                        </div>
                    </div>
                </motion.section>

                {/* 01 PROBLEM */}
                <motion.section 
                    variants={sectionVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-100px" }} 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
                >
                    <div className="lg:col-span-3">
                        <div className="sticky top-32">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#ef4444]">01 / Problem</span>
                        </div>
                    </div>
                    <div className="lg:col-span-7 space-y-12">
                        <h2 className="font-serif text-4xl md:text-5xl text-[var(--text-primary)] leading-[1.3]">
                            An existing system. Not broken — just <em className="italic text-[var(--text-secondary)]">cognitively expensive</em> at the worst possible moment.
                        </h2>

                        <div className="space-y-6 font-sans text-xl text-[var(--text-secondary)] leading-[1.7]">
                            <p>
                                The hospital had a working emergency app built by another vendor. The brief wasn&apos;t to replace it — it was to <strong className="text-[var(--text-primary)] font-medium">simplify it for real emergency behaviour</strong>, especially during night shifts. Vitals, patient history, chat, and action buttons all competed for attention on the same screen.
                            </p>
                            <p>
                                I worked from thorough understanding of the existing system. Every structural decision was a direct response to observed patterns in the previous flow — not assumption. The issue wasn&apos;t missing functionality. It was mental effort during the most critical window of use.
                            </p>
                        </div>
                        
                        <div className="bg-[#ef4444]/10 border border-[#ef4444]/20 rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-1 h-full bg-[#ef4444]" />
                            <p className="font-serif text-2xl text-[var(--text-primary)] leading-[1.5] italic mb-6">
                                &quot;Make the text bigger. We need to reach the doctor immediately — we can&apos;t be searching through the screen when a STEMI comes in.&quot;
                            </p>
                            <p className="text-[10px] text-[#ef4444] uppercase tracking-widest font-bold">— From Prototype Walkthroughs · Head Nurse &amp; Nurse Practitioner</p>
                        </div>
                    </div>
                </motion.section>

                {/* 02 CONSTRAINTS */}
                <motion.section 
                    variants={sectionVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-100px" }} 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
                >
                    <div className="lg:col-span-3">
                        <div className="sticky top-32">
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--text-tertiary)]">02 / Constraints</span>
                            <h2 className="font-serif text-3xl text-[var(--text-primary)] mt-4 mb-4">The Environment Decisions Were Made In</h2>
                            <p className="text-sm text-[var(--text-secondary)] leading-[1.6]">
                                Understanding these constraints explains every decision that follows. Not excuses — the actual conditions.
                            </p>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-3xl p-8 shadow-sm hover:border-[var(--accent-gold)]/50 transition-colors">
                            <h4 className="font-bold text-[var(--text-primary)] text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" /> Stack</h4>
                            <p className="text-[var(--text-secondary)] leading-[1.7] font-sans">Ionic + React. A mid-project migration meant component reuse was necessary. Rather than fight limitations, I focused redesign effort on the surfaces that directly influenced emergency response behaviour.</p>
                        </div>
                        <div className="bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-3xl p-8 shadow-sm hover:border-[var(--accent-gold)]/50 transition-colors">
                            <h4 className="font-bold text-[var(--text-primary)] text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" /> No Design System</h4>
                            <p className="text-[var(--text-secondary)] leading-[1.7] font-sans">No inherited component library. Every screen — alarm list, chat, notifications, patient detail, EMS, onboarding... designed screen by screen from content requirements.</p>
                        </div>
                        <div className="bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-3xl p-8 shadow-sm hover:border-[var(--accent-gold)]/50 transition-colors">
                            <h4 className="font-bold text-[var(--text-primary)] text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" /> Stakeholder Pull</h4>
                            <p className="text-[var(--text-secondary)] leading-[1.7] font-sans">The team initially wanted to replicate the previous app&apos;s density. I agreed on their highest-value requests in exchange for protecting the scan-before-act structure.</p>
                        </div>
                        <div className="bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-3xl p-8 shadow-sm hover:border-[var(--accent-gold)]/50 transition-colors">
                            <h4 className="font-bold text-[var(--text-primary)] text-sm uppercase tracking-widest mb-4 flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" /> Scope</h4>
                            <p className="text-[var(--text-secondary)] leading-[1.7] font-sans">The brief was to improve an existing system, not rebuild it. I worked from thorough understanding of the previous flow — every decision responding to true patterns.</p>
                        </div>
                    </div>
                </motion.section>

                {/* 03 MARQUEE: PRINCIPLE */}
                <motion.section 
                    variants={sectionVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-100px" }} 
                    className="w-full"
                >
                    <div className="relative py-24 md:py-32 w-full flex flex-col items-center justify-center text-center border-y border-[var(--surface-border)] overflow-hidden">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50%] bg-[var(--accent-gold)]/5 blur-[120px] rounded-full z-0 pointer-events-none"></div>
                        <div className="relative z-10 max-w-4xl px-4">
                            <span className="text-[var(--accent-gold)] text-xs font-bold uppercase tracking-[0.3em] mb-8 block">03 / The Core Principle</span>
                            <h2 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-[var(--text-primary)] tracking-tighter leading-[1.1] mb-8">
                                Separate <em className="italic text-[var(--accent-gold)] font-light">Scanning</em><br />from Acting.
                            </h2>
                            <p className="text-xl md:text-2xl text-[var(--text-secondary)] leading-[1.6] max-w-2xl mx-auto font-sans">
                                Understand first. Decide next. Then act. Never all three simultaneously.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-6xl mx-auto">
                        <div className="bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-[2.5rem] p-10 lg:p-14 shadow-sm hover:shadow-xl transition-shadow">
                            <span className="inline-block border border-[var(--surface-border)] text-[var(--text-tertiary)] font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full mb-8">Layer 1</span>
                            <h3 className="font-serif text-4xl text-[var(--text-primary)] mb-4">Scan Layer</h3>
                            <p className="text-[var(--text-secondary)] mb-8 text-lg">Context first — no actions. What is happening and how urgent is it?</p>
                            <ul className="space-y-4 font-sans text-[var(--text-secondary)] mb-12">
                                <li className="flex items-start gap-3"><span className="text-[var(--accent-gold)] mt-0.5">✦</span><span>Patient Name — primary element</span></li>
                                <li className="flex items-start gap-3"><span className="text-[#ef4444] mt-0.5">✦</span><span className="text-[var(--text-primary)] font-medium">Live countdown — bold red, unmissable</span></li>
                                <li className="flex items-start gap-3"><span className="text-[var(--accent-gold)] mt-0.5">✦</span><span>Alert timestamp &amp; facility</span></li>
                                <li className="flex items-start gap-3"><span className="text-[var(--accent-gold)] mt-0.5">✦</span><span>Status as full-width colour strip</span></li>
                            </ul>
                            <div className="pt-6 border-t border-[var(--surface-border)]">
                                <p className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-tertiary)] mb-3">Intentionally Excluded</p>
                                <p className="text-sm text-[var(--text-tertiary)] font-sans">Contact numbers, Chat interface, Full history.</p>
                            </div>
                        </div>

                        <div className="bg-[#1A2116] border border-[#2A3423] rounded-[2.5rem] p-10 lg:p-14 shadow-sm hover:shadow-xl transition-shadow">
                            <span className="inline-block border border-[#3E4A35] text-[var(--accent-gold)] font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full mb-8 bg-[#2A3423]/50">Layer 2</span>
                            <h3 className="font-serif text-4xl text-[#F4F1EA] mb-4">Action Layer</h3>
                            <p className="text-[#AAB4A4] mb-8 text-lg">One tap — after context. Never competing with the scan.</p>
                            <ul className="space-y-4 font-sans text-[#AAB4A4] mb-12">
                                <li className="flex items-start gap-3"><span className="text-[var(--accent-gold)] mt-0.5">✦</span><span>Details — full context</span></li>
                                <li className="flex items-start gap-3"><span className="text-[var(--accent-gold)] mt-0.5">✦</span><span>Chat — team coordination</span></li>
                                <li className="flex items-start gap-3"><span className="text-[var(--accent-gold)] mt-0.5">✦</span><span>Members &amp; Updates</span></li>
                            </ul>
                            <div className="pt-6 border-t border-[#3E4A35]">
                                <p className="text-[10px] uppercase font-bold tracking-widest text-[#AAB4A4] mb-3">Architectural Shift</p>
                                <p className="text-sm text-[var(--text-tertiary)] font-sans">Surfaced from a hidden overflow menu into a persistent 5-action row on the card itself.</p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* 04 PROCESS AND FLOW BLOCK */}
                <motion.section 
                    variants={sectionVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-100px" }} 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
                >
                    <div className="lg:col-span-3">
                        <div className="sticky top-32">
                            <span className="text-sm font-bold uppercase tracking-widest text-[#64748b]">04 / Flow</span>
                            <h2 className="font-serif text-3xl text-[var(--text-primary)] mt-4 mb-4">The 30-Second<br/>Emergency Arc</h2>
                            <p className="text-sm text-[var(--text-secondary)] leading-[1.6]">
                                Three screens. One unbroken flow.
                            </p>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-9">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Alarm */}
                            <div className="space-y-8">
                                <div className="bg-[var(--bg-surface)] border-[8px] border-[#1A2116] rounded-[2rem] aspect-[9/19] relative overflow-hidden shadow-2xl">
                                    <Image src="/images/emergency-app/alarm-list.png" alt="Alarm List" fill className="object-cover object-top" />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[var(--text-primary)]">01 / Scan</h4>
                                    <h3 className="font-serif text-2xl text-[var(--accent-gold)]">Alarm List</h3>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed pb-4 border-b border-[var(--surface-border)]">Patient-first hierarchy. Bold red countdown. 5-action row always present.</p>
                                    <p className="text-xs text-[var(--text-tertiary)] pt-2 leading-relaxed">Timer redesigned from light inline text to primary visual element. Patient name prioritized over hospital.</p>
                                </div>
                            </div>
                            
                            {/* Chat */}
                            <div className="space-y-8 md:pt-16">
                                <div className="bg-[var(--bg-surface)] border-[8px] border-[#1A2116] rounded-[2rem] aspect-[9/19] relative overflow-hidden shadow-2xl">
                                    <Image src="/images/emergency-app/chat.png" alt="Team Chat" fill className="object-cover object-top" />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[var(--text-primary)]">02 / Act</h4>
                                    <h3 className="font-serif text-2xl text-[var(--accent-gold)]">Team Chat</h3>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed pb-4 border-b border-[var(--surface-border)]">Context-aware coordination per patient. Video call initiated inline.</p>
                                    <p className="text-xs text-[var(--text-tertiary)] pt-2 leading-relaxed">System messages confirm actor presence immediately. Separated clearly from the initial scanning layer.</p>
                                </div>
                            </div>

                            {/* Audit */}
                            <div className="space-y-8 md:pt-32">
                                <div className="bg-[var(--bg-surface)] border-[8px] border-[#1A2116] rounded-[2rem] aspect-[9/19] relative overflow-hidden shadow-2xl">
                                    <Image src="/images/emergency-app/notification-screen.png" alt="Notifications" fill className="object-cover object-top" />
                                </div>
                                <div className="space-y-3">
                                    <h4 className="font-bold text-xs uppercase tracking-widest text-[var(--text-primary)]">03 / Audit</h4>
                                    <h3 className="font-serif text-2xl text-[var(--accent-gold)]">Notifications</h3>
                                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed pb-4 border-b border-[var(--surface-border)]">Full audit trail. Every status change, assignment, and actor attribution.</p>
                                    <p className="text-xs text-[var(--text-tertiary)] pt-2 leading-relaxed">Timestamp precision supports post-event retrospective reviews. Ultimate accountability layer.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>


                {/* 05 ARCHITECTURAL AXIOMS */}
                <motion.section 
                    variants={sectionVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-100px" }} 
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24"
                >
                    <div className="lg:col-span-3">
                        <div className="sticky top-32">
                            <span className="text-sm font-bold uppercase tracking-widest text-[var(--text-tertiary)]">05 / Decisions</span>
                            <h2 className="font-serif text-3xl text-[var(--text-primary)] mt-4 mb-4">What I Built<br/>&amp; Why</h2>
                        </div>
                    </div>

                    <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                        <div className="border-t border-[var(--surface-border)] pt-8">
                            <div className="text-[var(--accent-gold)] font-serif text-4xl mb-4 italic">01.</div>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">Patient Over Institution</h3>
                            <p className="text-[var(--text-secondary)] leading-[1.6]">The previous system led with hospital name. I shifted primary hierarchy to patient name — in an emergency list, staff are thinking about people, not facilities.</p>
                        </div>
                        <div className="border-t border-[var(--surface-border)] pt-8">
                            <div className="text-[var(--accent-gold)] font-serif text-4xl mb-4 italic">02.</div>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">The Timer Had To Shout</h3>
                            <p className="text-[var(--text-secondary)] leading-[1.6]">The elapsed timer used to be light inline text. I made it large, primary, and bold red. Time elapsed is the most critical defining data point before intervention.</p>
                        </div>
                        <div className="border-t border-[var(--surface-border)] pt-8">
                            <div className="text-[var(--accent-gold)] font-serif text-4xl mb-4 italic">03.</div>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">Surface, Don&apos;t Hide</h3>
                            <p className="text-[var(--text-secondary)] leading-[1.6]">Actions were buried in an overflow menu. I moved them to a persistent 5-icon row on each card. Always one tap, always visible — no secondary hunting required.</p>
                        </div>
                        <div className="border-t border-[var(--surface-border)] pt-8">
                            <div className="text-[var(--accent-gold)] font-serif text-4xl mb-4 italic">04.</div>
                            <h3 className="font-serif text-2xl text-[var(--text-primary)] mb-3">The STEMI Exception</h3>
                            <p className="text-[var(--text-secondary)] leading-[1.6]">A dedicated escape hatch was needed. A floating action button specifically for raising a STEMI alarm was created. No navigation to a chat thread required for top-tier emergencies.</p>
                        </div>
                    </div>
                </motion.section>

                {/* 06 MARQUEE: OUTCOME */}
                <motion.section 
                    variants={sectionVariants} 
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-100px" }} 
                    className="w-full"
                >
                    <div className="bg-[#1A2116] border border-[#2A3423] rounded-[3rem] p-12 md:p-20 relative shadow-2xl overflow-hidden flex flex-col items-center text-center">
                        <div className="absolute top-[-50%] right-[-10%] w-[80%] h-[150%] bg-[var(--accent-gold)]/10 blur-[150px] rounded-full z-0 pointer-events-none transform -rotate-45"></div>
                        
                        <div className="relative z-10 w-full">
                            <span className="inline-block border border-[#3E4A35] text-[var(--accent-gold)] font-bold text-[10px] uppercase tracking-widest px-4 py-2 rounded-full mb-16 bg-[#2A3423]/50">06 / Outcome</span>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-start mb-20 w-full max-w-5xl mx-auto">
                                <div className="space-y-4">
                                    <div className="font-serif text-6xl md:text-8xl text-[var(--accent-gold)] italic leading-none font-light">
                                        &lt;30<span className="text-4xl">s</span>
                                    </div>
                                    <p className="font-sans text-xs uppercase tracking-widest font-bold text-[#AAB4A4] border-t border-[#3E4A35] pt-4 mx-8 md:mx-0">
                                        Alert Response<br/>Target Met
                                    </p>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="font-serif text-6xl md:text-8xl text-[#F4F1EA] leading-none font-light">
                                        Live
                                    </div>
                                    <p className="font-sans text-xs uppercase tracking-widest font-bold text-[#AAB4A4] border-t border-[#3E4A35] pt-4 mx-8 md:mx-0">
                                        Shipped directly<br/>into Hospitals
                                    </p>
                                </div>
                                
                                <div className="space-y-4">
                                    <div className="font-serif text-6xl md:text-8xl text-[#F4F1EA] italic leading-none font-light">
                                        Calm
                                    </div>
                                    <p className="font-sans text-xs uppercase tracking-widest font-bold text-[#AAB4A4] border-t border-[#3E4A35] pt-4 mx-8 md:mx-0">
                                        Reduced friction<br/>under pressure
                                    </p>
                                </div>
                            </div>
                            
                            <p className="font-serif text-2xl md:text-3xl text-center text-[#F4F1EA] italic max-w-4xl mx-auto leading-relaxed mt-16 pb-8">
                                &quot;This project wasn&apos;t about adding features — it was about removing friction from an already capable system. Seeing how nurses actually hold the phone mid-task at 3 AM was more valuable than any filtered feedback.&quot;
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* CASE STUDY FOOTER */}
                <section className="w-full border-t border-[var(--surface-border)] pt-16 pb-8">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
                        <div>
                            <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)] mb-3">Next Case Study</p>
                            <h3 className="font-serif text-[1.75rem] text-[var(--text-primary)] leading-[1.2]">RupeeRise</h3>
                        </div>
                        <a
                            href="/rupeerise"
                            className="group flex items-center gap-3 w-fit pb-1 border-b border-[var(--surface-border)] hover:border-[var(--text-primary)] transition-all duration-300"
                        >
                            <span className="font-sans text-sm tracking-widest uppercase font-bold text-[var(--text-primary)]">View Case Study →</span>
                        </a>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-t border-[var(--surface-border)] pt-6 mt-12">
                        <a href="/#work" className="font-mono text-[11px] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors">← Back to Selected Work</a>
                        <span className="font-mono text-[11px] text-[var(--text-tertiary)]">© 2025 Supragnya Purohith</span>
                    </div>
                </section>

            </div>
        </CaseStudyTemplate>
    );
}
