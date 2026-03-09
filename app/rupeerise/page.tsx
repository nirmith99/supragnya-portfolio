"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import CaseStudyTemplate from '@/components/templates/CaseStudyTemplate';
import { Activity, CheckCircle2 } from 'lucide-react';

export default function RupeeRise() {
    const sectionVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
    };

    return (
        <CaseStudyTemplate
            title="RupeeRise"
            role="Lead Product Designer"
            timeline="14-Day Hackathon"
            tags={["Fintech", "Behavioral Design"]}
            hideDefaultHero={true}
        >
            {/* Custom Hero */}
            <motion.section
                variants={sectionVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="mb-32 mt-4 md:mt-8 w-full max-w-[1400px] mx-auto"
            >
                <div className="flex items-center gap-4 mb-12">
                    <div className="h-px w-12 bg-[var(--accent-gold)]/50" />
                    <span className="text-[var(--accent-gold)] font-sans text-xs tracking-[0.2em] uppercase font-bold">Case Study · Lead Product Designer</span>
                </div>

                <h1 className="text-6xl md:text-9xl font-bold mb-8 text-[var(--text-primary)] tracking-tighter text-balance font-serif">
                    RupeeRise
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16">
                    <div className="lg:col-span-7">
                        <p className="font-serif text-3xl md:text-5xl text-[var(--accent-gold)] mb-6 leading-[1.1]">
                            Master the Art of Spending and Saving.
                        </p>
                        <p className="font-sans text-lg md:text-xl text-[var(--text-secondary)] mb-12 leading-relaxed max-w-2xl">
                            A Financial Decision Stability System for Young Earners — designed entirely from ground zero in 14 days.
                        </p>
                    </div>
                    <div className="lg:col-span-5 lg:pl-12 lg:border-l border-[var(--surface-border)]">
                        <div className="flex flex-col gap-4">
                            <span className="text-xs uppercase tracking-[0.15em] font-bold text-[var(--text-tertiary)] mb-2">Project Constraints</span>
                            {["14-Day Timeline", "Remote Collaboration", "Clickable Prototype Only", "No Live Trading", "No Demat Integration", "No Compliance Layer"].map(tag => (
                                <div key={tag} className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]/40" />
                                    <span className="text-[var(--text-primary)] text-sm tracking-wide font-medium">
                                        {tag}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="relative w-full h-[380px] md:h-[560px] flex items-end justify-center mt-24 mb-16 overflow-hidden md:overflow-visible">
                    <div className="absolute bottom-[-60px] left-1/2 -translate-x-1/2 w-[600px] h-[200px] pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse, rgba(74,92,63,0.35) 0%, transparent 70%)' }}></div>

                    {/* Left 2 */}
                    <div className="relative shrink-0 transition-transform duration-500 ease-out hover:-translate-y-3 z-3 w-[120px] h-[254px] md:w-[175px] md:h-[370px]" style={{ transform: 'translateY(80px) rotate(-8deg) translateX(30px)' }}>
                        <div className="w-full h-full rounded-[20px] md:rounded-[28px] overflow-hidden border-2 border-[var(--surface-border)] shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(245,240,232,0.04)] bg-[var(--bg-surface)]">
                            <Image src="/images/rupeerise/InsightsJournal.png" alt="Insights Journal" fill className="object-cover object-top" />
                        </div>
                    </div>

                    {/* Left 1 */}
                    <div className="relative shrink-0 transition-transform duration-500 ease-out hover:-translate-y-3 z-4 w-[138px] h-[290px] md:w-[200px] md:h-[420px]" style={{ transform: 'translateY(40px) rotate(-4deg) translateX(20px)' }}>
                        <div className="w-full h-full rounded-[20px] md:rounded-[28px] overflow-hidden border-2 border-[var(--surface-border)] shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(245,240,232,0.04)] bg-[var(--bg-surface)]">
                            <Image src="/images/rupeerise/SimulationLab.png" alt="Simulation Lab" fill className="object-cover object-top" />
                        </div>
                    </div>

                    {/* Center */}
                    <div className="relative shrink-0 transition-transform duration-500 ease-out hover:-translate-y-3 z-5 w-[160px] h-[340px] md:w-[230px] md:h-[490px]" style={{ transform: 'translateY(0px)' }}>
                        <div className="w-full h-full rounded-[20px] md:rounded-[28px] overflow-hidden border-2 border-[var(--surface-border)] shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(245,240,232,0.04)] bg-[var(--bg-surface)]">
                            <Image src="/images/rupeerise/FoundationLayer.png" alt="Foundation Layer" fill className="object-cover object-top" />
                        </div>
                    </div>

                    {/* Right 1 */}
                    <div className="relative shrink-0 transition-transform duration-500 ease-out hover:-translate-y-3 z-4 w-[138px] h-[290px] md:w-[200px] md:h-[420px]" style={{ transform: 'translateY(40px) rotate(4deg) translateX(-20px)' }}>
                        <div className="w-full h-full rounded-[20px] md:rounded-[28px] overflow-hidden border-2 border-[var(--surface-border)] shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(245,240,232,0.04)] bg-[var(--bg-surface)]">
                            <Image src="/images/rupeerise/TierDowngradeModal.png" alt="Tier Downgrade" fill className="object-cover object-top" />
                        </div>
                    </div>

                    {/* Right 2 */}
                    <div className="relative shrink-0 transition-transform duration-500 ease-out hover:-translate-y-3 z-3 w-[120px] h-[254px] md:w-[175px] md:h-[370px]" style={{ transform: 'translateY(80px) rotate(8deg) translateX(-30px)' }}>
                        <div className="w-full h-full rounded-[20px] md:rounded-[28px] overflow-hidden border-2 border-[var(--surface-border)] shadow-[0_32px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(245,240,232,0.04)] bg-[var(--bg-surface)]">
                            <Image src="/images/rupeerise/MentorshipHub.png" alt="Mentorship Hub" fill className="object-cover object-top" />
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Context - Editorial Layout */}
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full max-w-[1000px] mx-auto mb-40">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="font-serif text-5xl sticky top-32 text-[var(--text-primary)] tracking-tight">Context</h2>
                    </div>
                    <div className="md:col-span-8 prose prose-lg prose-invert text-[var(--text-secondary)]">
                        <p className="text-xl leading-relaxed mb-12 text-[var(--text-primary)]">
                            The hackathon brief asked us to close financial literacy gaps among Millennials and Gen Z. It&apos;s a well-worn prompt—most teams would reach for it and build another learn-and-earn app. Before committing to a direction, I wanted to understand if literacy was actually the problem.
                        </p>

                        <div className="h-px w-full bg-[var(--surface-border)] my-12" />

                        <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-8">What the Research Actually Said</h3>
                        <p className="leading-relaxed mb-12">
                            Informal interviews with 20–28 year olds didn&apos;t surface ignorance — they surfaced <strong className="text-[var(--accent-gold)] font-medium">behavioral contradiction</strong>. These were people who could explain credit card interest, who&apos;d watched crypto crash documentaries, who knew the theory. And yet they were panic selling, trend-chasing, and misusing credit under pressure.
                        </p>

                        <div className="border-l-2 border-[var(--accent-gold)] pl-8 py-2 my-16">
                            <h4 className="font-serif text-xl text-[var(--text-primary)] mb-6 uppercase tracking-widest text-sm">Patterns Found in Research</h4>
                            <ul className="space-y-6 m-0 p-0 list-none">
                                {[
                                    "Credit misuse despite knowing the math",
                                    "Overconfidence after short-term wins",
                                    "Trend-driven investing, not conviction-driven",
                                    "Panic selling during volatility"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-[var(--text-secondary)]">
                                        <span className="font-mono text-[var(--text-tertiary)] text-sm mt-1">0{i + 1}</span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Stat Row - Full Width */}
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full border-y border-[var(--surface-border)] py-24 mb-40 bg-[var(--bg-surface)]">
                <div className="max-w-[1200px] mx-auto px-5 md:px-[60px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
                        <div className="space-y-4">
                            <div className="text-7xl font-serif text-[var(--accent-gold)] tracking-tighter">~60%</div>
                            <div className="text-base font-sans tracking-wide text-[var(--text-secondary)] leading-relaxed max-w-xs">Young earners interested in a structured stability system</div>
                        </div>
                        <div className="space-y-4 md:border-l border-[var(--surface-border)] md:pl-12">
                            <div className="text-7xl font-serif text-[var(--accent-gold)] tracking-tighter">~30%</div>
                            <div className="text-base font-sans tracking-wide text-[var(--text-secondary)] leading-relaxed max-w-xs">Mentors validated instability — not ignorance — as the core issue</div>
                        </div>
                        <div className="space-y-4 md:border-l border-[var(--surface-border)] md:pl-12">
                            <div className="text-7xl font-serif text-[var(--accent-gold)] tracking-tighter">45%+</div>
                            <div className="text-base font-sans tracking-wide text-[var(--text-secondary)] leading-relaxed max-w-xs">Fintech users in India are already under 30. Access ≠ problem.</div>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full max-w-[800px] mx-auto mb-40 text-center">
                <p className="text-2xl md:text-3xl font-serif leading-relaxed text-[var(--text-primary)]">
                    Secondary sources confirmed it. Financial awareness gaps persist, but awareness alone hasn&apos;t translated to behavioral change. <br /><br />
                    <em className="text-[var(--accent-gold)] not-italic border-b border-[var(--accent-gold)] pb-1">Access to financial tools has increased faster than behavioral maturity to use them safely.</em>
                </p>
            </motion.section>

            {/* Competitive Landscape */}
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full max-w-[1200px] mx-auto mb-40">
                <div className="mb-16">
                    <h2 className="font-serif text-5xl mb-6 text-[var(--text-primary)] tracking-tight">Competitive Landscape</h2>
                    <p className="text-[var(--text-secondary)] text-xl max-w-2xl leading-relaxed">Mapping the existing landscape confirmed the behavioral gap wasn&apos;t being addressed anywhere.</p>
                </div>

                <div className="overflow-x-auto pb-4 mb-20">
                    <table className="w-full text-left min-w-[800px] border-collapse bg-transparent">
                        <thead>
                            <tr className="border-b-2 border-[var(--surface-border)] text-xs uppercase tracking-widest font-semibold text-[var(--text-tertiary)]">
                                <th className="py-6 px-4 font-semibold w-1/4">Feature</th>
                                <th className="py-6 px-4 font-semibold">StockGro</th>
                                <th className="py-6 px-4 font-semibold">CRED</th>
                                <th className="py-6 px-4 font-semibold">Jupiter / Fi</th>
                                <th className="py-6 px-4 font-semibold">Jar</th>
                                <th className="py-6 px-4 font-semibold text-[var(--accent-gold)]">RupeeRise</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm font-medium">
                            {[
                                { f: "Market simulation", vals: [true, false, false, false, true] },
                                { f: "Spending insights", vals: [false, false, true, false, true] },
                                { f: "Behavioral gating", vals: [false, false, false, false, true] },
                                { f: "Stability score", vals: [false, false, false, false, true] },
                                { f: "Staged exposure control", vals: [false, false, false, false, true] },
                                { f: "Profit excluded from score", vals: [false, false, false, false, true] },
                            ].map((row, i) => (
                                <tr key={i} className="border-b border-[var(--surface-border)] hover:bg-[var(--bg-surface)] transition-colors group">
                                    <td className="py-5 px-4 text-[var(--text-primary)] text-base font-serif">{row.f}</td>
                                    {row.vals.map((val, vi) => (
                                        <td key={vi} className={`py-5 px-4 ${vi === 4 ? 'text-[var(--accent-gold)] bg-[var(--accent-gold)]/5' : 'text-[var(--text-tertiary)]'}`}>
                                            {val ? <CheckCircle2 className={`w-5 h-5 ${vi === 4 ? 'text-[var(--accent-gold)]' : 'text-[var(--text-tertiary)]/50'}`} /> : <span>—</span>}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="pl-8 border-l-2 border-[var(--accent-gold)] max-w-3xl">
                    <span className="uppercase tracking-widest text-xs font-bold text-[var(--text-tertiary)] block mb-4">Synthesis</span>
                    <p className="text-[var(--text-primary)] leading-relaxed m-0 text-2xl font-serif">
                        The problem was never knowledge — <em className="text-[var(--accent-gold)] not-italic">it was decision stability under pressure.</em> No existing platform was designed to close that gap. Every competitor either gamified engagement or optimized for access.
                    </p>
                </div>
            </motion.section>

            {/* Reframing */}
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="max-w-[1000px] mx-auto mb-40">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="font-serif text-5xl sticky top-32 text-[var(--text-primary)] tracking-tight">Reframing</h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-[var(--text-secondary)] text-xl mb-16 leading-relaxed">
                            The research made one thing clear: building another literacy product would miss the actual failure point. So I reframed the brief entirely.
                        </p>

                        <div className="mb-16">
                            <div className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--text-tertiary)] mb-6">The Old HMW</div>
                            <p className="line-through text-[var(--text-tertiary)] text-2xl mb-12 decoration-[var(--surface-border)] decoration-2 font-serif">
                                How might we improve financial literacy among young earners?
                            </p>

                            <div className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--accent-gold)] mb-6">The New HMW</div>
                            <p className="text-4xl md:text-5xl font-serif text-[var(--text-primary)] leading-tight tracking-tight">
                                How might we build financial decision stability in high-access environments?
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Stability Score */}
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full max-w-[1200px] mx-auto mb-40">
                <div className="max-w-[800px] mx-auto mb-20 text-center">
                    <h2 className="font-serif text-5xl mb-8 text-[var(--text-primary)] tracking-tight">The Stability Score</h2>
                    <p className="text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
                        RupeeRise measures integrated behavioral stability — not knowledge, not returns. The score is a composite of four behavioral inputs, each tracking a different failure mode.
                    </p>
                    <p className="text-sm uppercase tracking-widest text-[var(--accent-gold)] font-bold">
                        Profit is intentionally excluded from the score.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--surface-border)] rounded-sm overflow-hidden mb-32">
                    {[
                        { t: "Volatility Reaction Index", p: "How do you behave when markets move sharply? Panic selling and hype-buying both score low." },
                        { t: "Trade Consistency", p: "Are your decisions predictable over time, or erratic and trend-driven?" },
                        { t: "Capital Discipline Score", p: "Do you meet EMIs, avoid credit overuse, and stay within your cashflow structure?" },
                        { t: "Diversification Health", p: "Are you concentrated in one bet, or distributing risk meaningfully across asset classes?" }
                    ].map((card, i) => (
                        <div key={i} className="bg-[var(--bg-sage)] p-10 flex flex-col hover:bg-[var(--bg-surface)] transition-colors">
                            <span className="text-[var(--text-tertiary)] font-mono text-sm mb-6">0{i + 1}</span>
                            <h4 className="font-serif text-2xl text-[var(--text-primary)] mb-4">{card.t}</h4>
                            <p className="text-base text-[var(--text-secondary)] leading-relaxed">{card.p}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
                    <div className="md:col-span-5">
                        <h3 className="font-serif text-4xl mb-6 text-[var(--text-primary)] leading-tight">Risk Tiers & Exposure Control</h3>
                        <p className="text-[var(--text-secondary)] text-lg leading-relaxed">
                            Score thresholds map to four tiers. Exposure caps scale dynamically. Real capital is never force-liquidated — new exposure is throttled instead.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="space-y-0 border-y border-[var(--surface-border)]">
                            {[
                                { b: "Tier 1", n: "Restricted", d: "Simulation only. Foundation building required." },
                                { b: "Tier 2", n: "Controlled", d: "Micro-exposure with mandatory thesis logging." },
                                { b: "Tier 3", n: "Moderate", d: "Broader access with behavioral guardrails active." },
                                { b: "Tier 4", n: "Advanced", d: "Full real exposure mode unlocked at 90%+ stability." }
                            ].map((tier, i) => (
                                <div key={i} className="flex flex-col sm:flex-row sm:items-center py-8 border-b border-[var(--surface-border)] last:border-0 gap-6">
                                    <div className="sm:w-32 shrink-0">
                                        <div className="inline-block text-[var(--accent-gold)] text-xs font-bold tracking-[0.15em] uppercase px-3 py-1 border border-[var(--accent-gold)]/30 rounded-full">
                                            {tier.b}
                                        </div>
                                    </div>
                                    <div className="sm:w-48 shrink-0 font-serif text-2xl text-[var(--text-primary)]">{tier.n}</div>
                                    <div className="text-[0.95rem] text-[var(--text-secondary)] leading-relaxed">
                                        {tier.d}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* IA Diagram - 100% Fidelity Port (Dark Mode Optimized) */}
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full">
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .ia-wrap { background: transparent; padding: 60px 0; margin: 40px 0; overflow-x: auto; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw; }
                    .ia-inner { min-width: 1000px; max-w-6xl; margin: 0 auto; font-family: var(--font-geist), sans-serif; padding: 0 40px; max-width: 1200px; }
                    
                    /* Custom Dark Mode Adjustments */
                    .ia-legend-dot { width: 10px; height: 10px; border-radius: 2px; flex-shrink: 0; }
                    
                    .ia-root { background: var(--bg-surface); border: 1px solid var(--surface-border); border-radius: 4px; padding: 24px 32px; display: inline-flex; align-items: center; gap: 32px; position: relative; z-index: 2; flex-wrap: wrap; }
                    .ia-root-chip { background: transparent; border: 1px solid var(--surface-border); border-radius: 4px; padding: 6px 12px; font-size: 0.75rem; color: var(--text-secondary); font-weight: 500; }
                    .ia-root-chip.ia-accent { background: rgba(209,191,160,0.1); border-color: var(--accent-gold); color: var(--accent-gold); font-weight: 600; }
                    
                    .ia-stem { width: 1px; background: var(--surface-border); margin: 0 auto; height: 32px; }
                    .ia-drop { width: 1px; background: var(--surface-border); height: 32px; flex-shrink: 0; margin: 0 auto; }
                    
                    .ia-modules { display: grid; grid-template-columns: repeat(5, 1fr); gap: 20px; position: relative; }
                    .ia-modules::before { content: ''; position: absolute; top: 0; left: 10%; right: 10%; height: 1px; background: var(--surface-border); }
                    
                    .ia-card { background: var(--bg-sage); border: 1px solid var(--surface-border); border-radius: 4px; overflow: hidden; height: 100%; display: flex; flex-direction: column; }
                    .ia-card.featured { border-color: var(--accent-gold); }
                    .ia-card-head { padding: 16px; border-bottom: 1px solid var(--surface-border); display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; }
                    .ia-card-head.featured { background: rgba(209,191,160,0.03); border-bottom-color: rgba(209,191,160,0.2); }
                    .ia-badge { font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; border-radius: 2px; padding: 4px 8px; flex-shrink: 0; }
                    .ia-badge.free { background: rgba(255,255,255,0.05); color: var(--text-secondary); }
                    .ia-badge.premium { background: rgba(209,191,160,0.1); color: var(--accent-gold); }
                    
                    .ia-card-body { padding: 16px; flex: 1; display: flex; flex-direction: column; gap: 16px; }
                    .ia-group-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent-gold); padding-bottom: 6px; border-bottom: 1px solid var(--surface-border); margin-bottom: 8px; }
                    .ia-group-label.amber { color: var(--accent-gold); opacity: 0.8; }
                    .ia-item { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 6px; }
                    .ia-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--text-tertiary); flex-shrink: 0; margin-top: 7px; opacity: 0.5; }
                    .ia-dot.amber { background: var(--accent-gold); opacity: 0.8; }
                    .ia-item-text { font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4; }
                    .ia-item-text strong { color: var(--text-primary); font-weight: 600; }
                    
                    .ia-divider { display: flex; align-items: center; gap: 16px; width: 100%; margin: 24px 0; }
                    .ia-divider-line { flex: 1; height: 1px; border-top: 1px dashed var(--surface-border); opacity: 0.5; }
                    .ia-divider-text { font-size: 0.7rem; font-weight: 700; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-tertiary); }
                    
                    .ia-interrupt { background: var(--bg-surface); border: 1px solid var(--surface-border); border-radius: 4px; padding: 24px 32px; display: flex; gap: 40px; flex-wrap: wrap; margin-bottom: 16px; }
                    .ia-interrupt-tag { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #ef4444; border: 1px solid rgba(239,68,68,0.3); border-radius: 2px; padding: 4px 10px; display: inline-block; margin-bottom: 12px; }
                    .ia-interrupt-cells { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; flex: 1; min-width: 600px; }
                    .ia-interrupt-cell { background: rgba(0,0,0,0.15); border: 1px solid var(--surface-border); border-radius: 4px; padding: 16px; }
                    .ia-interrupt-cell-label { font-size: 0.65rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-tertiary); margin-bottom: 6px; }
                    .ia-interrupt-cell-text { font-size: 0.8rem; color: var(--text-primary); line-height: 1.5; }
                    
                    .ia-flow { background: var(--bg-surface); border: 1px solid var(--surface-border); border-radius: 4px; padding: 32px 40px; }
                    .ia-flow-box { background: transparent; border: 1px solid var(--accent-gold); border-radius: 4px; padding: 10px 20px; font-size: 0.85rem; font-weight: 500; color: var(--accent-gold); white-space: nowrap; margin-bottom: 8px; }
                    .ia-flow-arrow { width: 40px; height: 1px; background: var(--surface-border); flex-shrink: 0; margin-bottom: 24px; position: relative; }
                    .ia-flow-arrow::after { content: ''; position: absolute; right: 0; top: -3px; border-left: 6px solid var(--surface-border); border-top: 3px solid transparent; border-bottom: 3px solid transparent; }
                `}} />

                <div className="max-w-[1000px] mx-auto mb-12 px-5 md:px-[60px] text-center">
                    <h2 className="font-serif text-5xl mb-6 text-[var(--text-primary)] tracking-tight">Information Architecture</h2>
                    <p className="text-[var(--text-secondary)] text-xl leading-relaxed max-w-3xl mx-auto">
                        Every module feeds into the Stability Engine — nothing is isolated. The IA is designed so that behavioral data from all modules converge into a single score that controls exposure.
                    </p>
                </div>

                <div className="ia-wrap">
                    <div className="ia-inner">
                        <div className="flex gap-8 mb-12">
                            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-widest font-bold text-[var(--text-secondary)]"><div className="ia-legend-dot" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--surface-border)' }}></div>Free</div>
                            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-widest font-bold text-[var(--text-secondary)]"><div className="ia-legend-dot" style={{ background: 'rgba(209,191,160,0.1)', border: '1px solid var(--accent-gold)' }}></div>Premium</div>
                            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-widest font-bold text-[var(--text-secondary)]"><div className="ia-legend-dot" style={{ border: '1px solid var(--surface-border)' }}></div>Locked / Conditional</div>
                            <div className="flex items-center gap-3 text-[0.7rem] uppercase tracking-widest font-bold text-[var(--text-secondary)]"><div className="ia-legend-dot" style={{ background: 'rgba(0,0,0,0.3)' }}></div>System Interrupt</div>
                        </div>

                        {/* Root Node */}
                        <div className="ia-root w-full">
                            <div className="min-w-[250px]">
                                <div className="text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--text-tertiary)] mb-2">0 · Global System Layer</div>
                                <div className="text-3xl font-serif text-[var(--text-primary)] tracking-tight">Stability Engine</div>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                <div className="ia-root-chip ia-accent">Stability Score 0–100</div>
                                <div className="ia-root-chip">Risk Tier 1–4</div>
                                <div className="ia-root-chip">Exposure Cap</div>
                                <div className="ia-root-chip">Volatility Reaction Index</div>
                                <div className="ia-root-chip">Capital Discipline Score</div>
                                <div className="ia-root-chip">Trade Consistency</div>
                                <div className="ia-root-chip">Diversification Health</div>
                            </div>
                        </div>

                        <div className="ia-stem"></div>

                        {/* Modules */}
                        <div className="ia-modules">
                            {/* 01 */}
                            <div className="flex flex-col items-center">
                                <div className="ia-drop"></div>
                                <div className="ia-card w-full">
                                    <div className="ia-card-head">
                                        <div>
                                            <div className="text-[0.65rem] font-bold tracking-[0.15em] text-[var(--text-tertiary)] mb-1">MODULE 01</div>
                                            <div className="text-xl font-serif text-[var(--text-primary)]">Dashboard</div>
                                            <div className="text-[0.75rem] text-[var(--text-secondary)] mt-1">Control Centre</div>
                                        </div>
                                        <div className="ia-badge free">Free</div>
                                    </div>
                                    <div className="ia-card-body">
                                        <div>
                                            <div className="ia-group-label">Stability Overview</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Score ring <strong>0–100</strong></div></div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Current tier + badge</div></div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">30-day trend graph</div></div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Points to next tier</div></div>
                                        </div>
                                        <div>
                                            <div className="ia-group-label">Behavioral Alerts</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Overtrading flag</div></div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Concentration warning</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 02 */}
                            <div className="flex flex-col items-center">
                                <div className="ia-drop"></div>
                                <div className="ia-card w-full">
                                    <div className="ia-card-head">
                                        <div>
                                            <div className="text-[0.65rem] font-bold tracking-[0.15em] text-[var(--text-tertiary)] mb-1">MODULE 02</div>
                                            <div className="text-xl font-serif text-[var(--text-primary)]">Foundation</div>
                                            <div className="text-[0.75rem] text-[var(--text-secondary)] mt-1">Capital Discipline Layer</div>
                                        </div>
                                        <div className="ia-badge free">Free</div>
                                    </div>
                                    <div className="ia-card-body">
                                        <div>
                                            <div className="ia-group-label">Liquidity</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Emergency fund tracker</div></div>
                                        </div>
                                        <div>
                                            <div className="ia-group-label">Liabilities</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Credit utilization %</div></div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">EMI / debt monitor</div></div>
                                        </div>
                                        <div>
                                            <div className="ia-group-label">Score Output</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text"><strong>Capital Discipline Score</strong></div></div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Feeds Stability Score directly</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 03 */}
                            <div className="flex flex-col items-center">
                                <div className="ia-drop"></div>
                                <div className="ia-card w-full featured">
                                    <div className="ia-card-head featured">
                                        <div>
                                            <div className="text-[0.65rem] font-bold tracking-[0.15em] text-[var(--accent-gold)] mb-1">MODULE 03</div>
                                            <div className="text-xl font-serif text-[var(--text-primary)]">Simulation Lab</div>
                                            <div className="text-[0.75rem] text-[var(--text-secondary)] mt-1">Learning Mode · 0–90%</div>
                                        </div>
                                    </div>
                                    <div className="ia-card-body">
                                        <div>
                                            <div className="ia-group-label">Scenario Context</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Historical market phases</div></div>
                                        </div>
                                        <div>
                                            <div className="ia-group-label">Decision Flow</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Risk-labelled asset grid</div></div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text"><strong>Thesis Log</strong> (mandatory)</div></div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Post-action feedback</div></div>
                                        </div>
                                        <div className="mt-auto border border-[var(--accent-gold)]/30 rounded p-3 text-[0.7rem] font-bold tracking-wide text-[var(--accent-gold)] text-center uppercase">
                                            🔓 Unlocks Real Exposure
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 04 */}
                            <div className="flex flex-col items-center">
                                <div className="ia-drop"></div>
                                <div className="ia-card w-full">
                                    <div className="ia-card-head">
                                        <div>
                                            <div className="text-[0.65rem] font-bold tracking-[0.15em] text-[var(--text-tertiary)] mb-1">MODULE 04</div>
                                            <div className="text-xl font-serif text-[var(--text-primary)]">Insights</div>
                                            <div className="text-[0.75rem] text-[var(--text-secondary)] mt-1">Market Intel</div>
                                        </div>
                                    </div>
                                    <div className="ia-card-body">
                                        <div>
                                            <div className="ia-group-label">Free · Journal</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Macro signal of the week</div></div>
                                        </div>
                                        <div>
                                            <div className="ia-group-label amber">Premium · Risk</div>
                                            <div className="ia-item"><div className="ia-dot amber"></div><div className="ia-item-text">Macro + <strong>your exposure</strong></div></div>
                                            <div className="ia-item"><div className="ia-dot amber"></div><div className="ia-item-text">Recommended actions</div></div>
                                        </div>
                                        <div className="flex gap-2 mt-auto">
                                            <div className="ia-badge free">Free</div>
                                            <div className="ia-badge premium">★ Premium</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 05 */}
                            <div className="flex flex-col items-center">
                                <div className="ia-drop"></div>
                                <div className="ia-card w-full">
                                    <div className="ia-card-head">
                                        <div>
                                            <div className="text-[0.65rem] font-bold tracking-[0.15em] text-[var(--text-tertiary)] mb-1">MODULE 05</div>
                                            <div className="text-xl font-serif text-[var(--text-primary)]">Mentorship</div>
                                            <div className="text-[0.75rem] text-[var(--text-secondary)] mt-1">Reinforcement</div>
                                        </div>
                                        <div className="ia-badge free">Free</div>
                                    </div>
                                    <div className="ia-card-body">
                                        <div>
                                            <div className="ia-group-label">Always Visible</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text"><strong>Daily reflection</strong> (req)</div></div>
                                        </div>
                                        <div>
                                            <div className="ia-group-label">Triggered Mode</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Auto-triggers on score drop</div></div>
                                        </div>
                                        <div>
                                            <div className="ia-group-label">Voluntary Mode</div>
                                            <div className="ia-item"><div className="ia-dot"></div><div className="ia-item-text">Risk calibration</div></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="ia-stem"></div>

                        {/* System Interrupt */}
                        <div className="ia-divider">
                            <div className="ia-divider-line"></div>
                            <div className="ia-divider-text">System Interrupt · Triggers from any module</div>
                            <div className="ia-divider-line"></div>
                        </div>

                        <div className="ia-interrupt">
                            <div className="shrink-0 w-64 pt-2">
                                <div className="ia-interrupt-tag">Global Interrupt</div>
                                <div className="text-2xl font-serif text-[var(--text-primary)] mb-2 mt-2">Tier Adjustment Alert</div>
                                <div className="text-sm text-[var(--text-secondary)] leading-relaxed">Triggered when behavioral instability is mathematically detected.</div>
                            </div>
                            <div className="ia-interrupt-cells">
                                <div className="ia-interrupt-cell">
                                    <div className="ia-interrupt-cell-label">Trigger</div>
                                    <div className="ia-interrupt-cell-text">Rapid trade frequency spike or concentration breach</div>
                                </div>
                                <div className="ia-interrupt-cell">
                                    <div className="ia-interrupt-cell-label">System Response</div>
                                    <div className="ia-interrupt-cell-text">Tier downgraded, exposure cap reduced</div>
                                </div>
                                <div className="ia-interrupt-cell">
                                    <div className="ia-interrupt-cell-label">User CTA</div>
                                    <div className="ia-interrupt-cell-text">Review Reinforcement Plan → Mentorship</div>
                                </div>
                                <div className="ia-interrupt-cell">
                                    <div className="ia-interrupt-cell-label">Constraint</div>
                                    <div className="ia-interrupt-cell-text">Never auto-sells. New exposure throttled only.</div>
                                </div>
                            </div>
                        </div>

                        {/* Flow Summary */}
                        <div className="ia-flow mt-16">
                            <div className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[var(--text-tertiary)] mb-10 text-center">System Flow Summary — No isolated modules</div>
                            <div className="flex items-center">
                                <div className="flex-1 flex flex-col items-center text-center gap-4"><div className="ia-flow-box">Foundation</div><div className="text-[0.8rem] text-[var(--text-secondary)] max-w-[120px] leading-snug">Builds capital discipline</div></div>
                                <div className="ia-flow-arrow"></div>
                                <div className="flex-1 flex flex-col items-center text-center gap-4"><div className="ia-flow-box">Simulation</div><div className="text-[0.8rem] text-[var(--text-secondary)] max-w-[120px] leading-snug">Tests stability under pressure</div></div>
                                <div className="ia-flow-arrow"></div>
                                <div className="flex-1 flex flex-col items-center text-center gap-4"><div className="ia-flow-box">Insights</div><div className="text-[0.8rem] text-[var(--text-secondary)] max-w-[120px] leading-snug">Contextualises risk before action</div></div>
                                <div className="ia-flow-arrow"></div>
                                <div className="flex-1 flex flex-col items-center text-center gap-4"><div className="ia-flow-box">Mentorship</div><div className="text-[0.8rem] text-[var(--text-secondary)] max-w-[120px] leading-snug">Reinforces stable behaviour</div></div>
                                <div className="ia-flow-arrow"></div>
                                <div className="flex-1 flex flex-col items-center text-center gap-4"><div className="ia-flow-box">Real Exposure</div><div className="text-[0.8rem] text-[var(--text-secondary)] max-w-[120px] leading-snug">Earned access at 90%+</div></div>
                            </div>
                            <div className="flex justify-between border-t border-[var(--surface-border)] pt-6 mt-12 text-[0.8rem] font-serif italic text-[var(--text-secondary)]">
                                <div>← Everything flows into Stability Score</div>
                                <div>No shortcuts. No isolated modules. →</div>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.section>

            {/* Core Modules in Detail */}
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full max-w-[1200px] mx-auto mb-40 px-5 md:px-[60px]">
                <div className="max-w-[800px] mx-auto mb-32 text-center">
                    <h2 className="font-serif text-5xl mb-6 text-[var(--text-primary)] tracking-tight">Core Modules</h2>
                    <p className="text-[var(--text-secondary)] text-xl leading-relaxed">
                        The architecture guiding stability, in sequence.
                    </p>
                </div>

                <div className="flex flex-col gap-32">
                    {/* Module 1: Foundation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex flex-col justify-center max-w-lg">
                            <span className="text-xs uppercase tracking-[0.15em] font-bold text-[var(--text-tertiary)] mb-4">Module 1</span>
                            <h3 className="font-serif text-4xl text-[var(--text-primary)] mb-6">Foundation</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Before any investing — emergency fund, credit utilization awareness, debt-to-income visibility, cashflow structure. Credit misuse directly dents the Stability Score. Daily financial behavior <em className="text-[var(--accent-gold)] not-italic">is</em> investment readiness.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 w-full h-[500px] relative bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-sm overflow-hidden group">
                            <Image src="/images/rupeerise/FoundationLayer.png" alt="Foundation Layer" fill className="object-cover object-top opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-[1.02]" />
                        </div>
                    </div>

                    {/* Module 2: Simulation Lab */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="w-full h-[500px] relative bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-sm overflow-hidden group">
                            <Image src="/images/rupeerise/SimulationLab.png" alt="Simulation Lab" fill className="object-cover object-top opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-[1.02]" />
                        </div>
                        <div className="flex flex-col justify-center max-w-lg lg:pl-12">
                            <span className="text-xs uppercase tracking-[0.15em] font-bold text-[var(--text-tertiary)] mb-4">Module 2</span>
                            <h3 className="font-serif text-4xl text-[var(--text-primary)] mb-6 flex items-baseline gap-4">
                                Simulation Lab
                                <span className="font-sans text-xl text-[var(--text-tertiary)] tracking-normal">(0–90%)</span>
                            </h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Historical volatility scenarios — 2008 crash, 2017 crypto hype, pandemic dips. Every decision flows: Context → Asset Grid → Thesis Log → Stability Impact Feedback. No live trading, no real money.
                            </p>
                        </div>
                    </div>

                    {/* Module 3: Informative Friction */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex flex-col justify-center max-w-lg">
                            <span className="text-xs uppercase tracking-[0.15em] font-bold text-[var(--text-tertiary)] mb-4">Module 3</span>
                            <h3 className="font-serif text-4xl text-[var(--text-primary)] mb-6">Informative Friction</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                When a Tier 1 user attempts an action beyond their cap, the UI doesn&apos;t show a dead-end. It shows how far away they are from unlocking, what behaviors are holding their score back, and a direct path to improve. <em className="text-[var(--accent-gold)] not-italic border-b border-[var(--accent-gold)] pb-0.5">The friction is informative, not punitive.</em>
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 w-full h-[500px] relative bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-sm overflow-hidden group">
                            <Image src="/images/rupeerise/TierDowngradeModal.png" alt="Informative Friction" fill className="object-cover object-top opacity-90 group-hover:opacity-100 transition-transform duration-700 group-hover:scale-[1.02]" />
                        </div>
                    </div>

                    {/* Module 4: Insights & Mentorship (Stack) */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="w-full h-[600px] relative flex items-center justify-center">
                            <div className="absolute top-0 left-0 w-3/4 h-[400px] z-10 bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-sm overflow-hidden shadow-2xl transition-transform duration-700 hover:-translate-y-2 hover:-translate-x-2">
                                <Image src="/images/rupeerise/InsightsJournal.png" alt="Insights Journal" fill className="object-cover object-top" />
                            </div>
                            <div className="absolute bottom-0 right-0 w-3/4 h-[400px] z-20 bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-sm overflow-hidden shadow-2xl transition-transform duration-700 hover:-translate-y-2 hover:translate-x-2">
                                <Image src="/images/rupeerise/MentorshipHub.png" alt="Mentorship Hub" fill className="object-cover object-top" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center max-w-lg lg:pl-12">
                            <span className="text-xs uppercase tracking-[0.15em] font-bold text-[var(--text-tertiary)] mb-4">Module 4</span>
                            <h3 className="font-serif text-4xl text-[var(--text-primary)] mb-6">Insights & Mentorship</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Free Journal Mode builds macro awareness. Premium Applied Risk Intelligence connects live signals to a user&apos;s own exposure history — contextualizing risk before they act on it. Mentorship is not a marketplace. Users must complete a reflection before booking. <em className="text-[var(--accent-gold)] not-italic border-b border-[var(--accent-gold)] pb-0.5">Intentional friction.</em>
                            </p>
                        </div>
                    </div>

                    {/* Module 5: Real Exposure Mode */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 flex flex-col justify-center max-w-lg">
                            <span className="text-xs uppercase tracking-[0.15em] font-bold text-[var(--text-tertiary)] mb-4">Module 5</span>
                            <h3 className="font-serif text-4xl text-[var(--text-primary)] mb-6">Real Exposure Mode</h3>
                            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
                                Unlocks post 90% Stability Score + Tier 4 eligibility. Premium only. Same behavioral principles from simulation — now with real capital. Exposure caps, thesis logging, and intervention logic remain active throughout.
                            </p>
                        </div>
                        <div className="order-1 lg:order-2 w-full h-[500px] relative bg-[var(--bg-surface)] border border-[var(--surface-border)] rounded-sm overflow-hidden group flex items-center justify-center shadow-xl">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,191,160,0.03)_0,transparent_100%)] pointer-events-none z-10" />
                            <div className="relative z-20 flex flex-col items-center gap-6 text-[var(--accent-gold)]/50 transition-opacity duration-700 group-hover:opacity-100">
                                <CheckCircle2 className="w-12 h-12" strokeWidth={1} />
                                <span className="font-serif text-xl tracking-widest uppercase text-[var(--text-tertiary)]">Real Exposure Activated</span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Ethical Guardrails */}
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full max-w-[1200px] mx-auto mb-40">
                <div className="max-w-[800px] mx-auto mb-20 text-center">
                    <h2 className="font-serif text-5xl mb-6 text-[var(--text-primary)] tracking-tight">Ethical Guardrails</h2>
                    <p className="text-[var(--text-secondary)] text-xl leading-relaxed">
                        A behavioral finance product can easily become its own harm. We designed around the most common failure modes in fintech UX.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                    {[
                        { icon: "🚫", title: "No Dopamine Loops", desc: "No streaks, confetti, or reward mechanics tied to trading frequency." },
                        { icon: "📵", title: "No Trending Feeds", desc: "No 'hot stocks' section. No real-time social sentiment. Context, not noise." },
                        { icon: "🚫", title: "No Influencer Layer", desc: "Mentorship is structured discipline reinforcement — not a marketplace of opinion." },
                        { icon: "⚖️", title: "No Force Liquidation", desc: "Real capital is never auto-sold. New exposure is throttled; existing positions are protected." },
                        { icon: "📊", title: "Severity-Based", desc: "Interventions are proportional to behavioral severity — not a punishment counter." },
                        { icon: "💡", title: "Stability > Profit", desc: "Profit is intentionally excluded from scoring. This is the core ethical stance." }
                    ].map((idx, i) => (
                        <div key={i} className="flex flex-col gap-4">
                            <div className="text-3xl mb-2 opacity-80">{idx.icon}</div>
                            <h4 className="font-serif text-2xl text-[var(--text-primary)]">{idx.title}</h4>
                            <p className="text-base text-[var(--text-secondary)] leading-relaxed">{idx.desc}</p>
                        </div>
                    ))}
                </div>
            </motion.section>

            {/* Outcome & Future Scope */}
            <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="w-full max-w-[1000px] mx-auto pb-32">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="font-serif text-5xl sticky top-32 text-[var(--text-primary)] tracking-tight">Outcome</h2>
                    </div>
                    <div className="md:col-span-8">
                        <div className="border-l-2 border-[var(--accent-gold)] py-2 pl-8 my-12">
                            <p className="text-2xl font-serif italic leading-relaxed m-0 text-[var(--text-primary)] mb-4">
                                &quot;Market-ready concept — requires security hardening before production.&quot;
                            </p>
                            <span className="text-xs font-sans tracking-widest uppercase font-bold text-[var(--text-tertiary)]">— Jury Feedback</span>
                        </div>

                        <div className="prose prose-lg prose-invert text-[var(--text-secondary)] mb-20">
                            <h3 className="font-serif text-3xl text-[var(--text-primary)] mb-8">What I Learned</h3>
                            <p className="mb-8 leading-relaxed">
                                The shift from &quot;how do we teach people about money&quot; to &quot;how do we structurally reduce behavioral damage&quot; is not a small pivot. It changed the entire design model — from content delivery to behavioral gating. <strong className="text-[var(--accent-gold)] font-medium">That reframe was the most important decision we made</strong>, and it only happened because we spent time in research before opening Figma.
                            </p>
                            <p className="mb-0 leading-relaxed">
                                The 14-day constraint also forced prioritization in a healthy way. Every feature had to earn its place inside the stability hypothesis. Anything that didn&apos;t connect to the behavioral architecture got cut.
                            </p>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-10">
                                <div className="text-[var(--accent-gold)] font-serif text-xl border border-[var(--accent-gold)]/50 rounded-full w-8 h-8 flex items-center justify-center">!</div>
                                <h3 className="font-serif text-3xl text-[var(--text-primary)] m-0">Future Scope</h3>
                            </div>
                            <ul className="space-y-6 m-0 p-0 list-none">
                                {[
                                    "Calibrate score weightings with real behavioral data from beta users.",
                                    "Validate severity thresholds via controlled user testing.",
                                    "Design for the edge case: the stable user with an urgent capital need.",
                                    "Build the compliance and security layer required for real exposure mode."
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-6 text-[var(--text-secondary)] pb-6 border-b border-[var(--surface-border)] last:border-0 last:pb-0">
                                        <span className="text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[var(--accent-gold)] pt-1">0{i + 1}</span>
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.section>
        </CaseStudyTemplate>
    );
}
