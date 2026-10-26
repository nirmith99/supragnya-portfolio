"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// Each card has an explicit `colClass` for precise bento control
const testimonials = [
    {
        id: "01",
        quote: "What stood out about Supragnya was that he didn't just execute — he had a point of view. There were times he'd come to me and say 'I think we're going in the wrong direction' and lay out exactly why. That kind of clarity and confidence from a designer is something you don't see often. He grew a lot during his time here and I think he's just getting started.",
        author: "Mahendar Yedla",
        role: "Founder & CEO",
        date: "February 2026",
        initials: "MY",
        featured: true,
        // Row 1: 7 of 12 cols
        colClass: "col-span-12 lg:col-span-7",
    },
    {
        id: "02",
        quote: "Sofiya 2.0 was complex. Supragnya took that complexity and made it feel simple — especially the dashboard. You could tell he actually thought it through.",
        author: "Ganesh",
        role: "Senior Developer",
        date: "February 2026",
        initials: "GD",
        featured: false,
        // Row 1: 5 of 12 cols
        colClass: "col-span-12 lg:col-span-5",
    },
    {
        id: "03",
        quote: "Working with Supragnya on Sofiya and STEMI was genuinely smooth. His Figma files were clean, his components were structured, and he never made us chase him for clarity. The doctor-patient chat feature on STEMI was tricky — he got it right in a way that actually held up during development. Rare for a solo designer.",
        author: "Sameer",
        role: "Senior Developer",
        date: "January 2026",
        initials: "SR",
        featured: false,
        // Row 2: 5 of 12 cols
        colClass: "col-span-12 md:col-span-5 lg:col-span-5",
    },
    {
        id: "04",
        quote: "He made me think like a user, not just a tester. Every time I flagged something, he'd explain the 'why' behind it. By the end, I wasn't just checking for bugs — I was thinking about the experience. That shift came from working with him.",
        author: "Vaibhav",
        role: "QA Lead",
        date: "January 2026",
        initials: "VK",
        featured: false,
        // Row 2: 4 of 12 cols
        colClass: "col-span-12 md:col-span-4 lg:col-span-4",
    },
    {
        id: "05",
        quote: "His Figma files answered questions before I could even ask them. Clear layers, documented edge cases, structured components. It just made implementation faster and less stressful.",
        author: "Harsha",
        role: "Junior Developer",
        date: "February 2026",
        initials: "HK",
        featured: false,
        // Row 2: 3 of 12 cols
        colClass: "col-span-12 md:col-span-3 lg:col-span-3",
    },
];

function TestimonialCard({
    id,
    quote,
    author,
    role,
    date,
    initials,
    featured,
    colClass,
    index,
}: (typeof testimonials)[0] & { index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8%" }}
            transition={{
                duration: 0.6,
                delay: index * 0.06,
                ease: [0.16, 1, 0.3, 1],
            }}
            className={cn(
                "group relative flex flex-col rounded-2xl overflow-hidden",
                "border border-[var(--surface-border)]",
                featured ? "p-8 lg:p-10" : "p-6 lg:p-8",
                "hover:-translate-y-1 hover:border-[var(--accent-gold)]/40 hover:bg-[var(--bg-surface-hover)]",
                "transition-all duration-300 ease-out",
                featured ? "bg-[var(--bg-surface)]" : "bg-[var(--bg-surface)]/70",
                colClass
            )}
        >
            {/* Top gloss line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none" />

            {/* Index + Date */}
            <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                    [{id}]
                </span>
                <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--text-tertiary)]">
                    {date}
                </span>
            </div>

            {/* Quote glyph */}
            <span
                aria-hidden="true"
                className={cn(
                    "font-serif leading-none text-[var(--accent-gold)] select-none mb-2",
                    featured ? "text-4xl opacity-60" : "text-2xl opacity-40"
                )}
            >
                &ldquo;
            </span>

            {/* Quote text */}
            <p
                className={cn(
                    "font-sans leading-[1.8] text-[var(--text-primary)]/90 flex-grow",
                    featured ? "text-[1.05rem]" : "text-[0.92rem]"
                )}
            >
                {quote}
            </p>

            {/* Author bar */}
            <div className="mt-6 pt-5 border-t border-[var(--surface-border)] flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[var(--accent-gold)]/10 border border-[var(--accent-gold)]/25 text-[var(--accent-gold)] text-xs font-semibold flex items-center justify-center shrink-0">
                    {initials}
                </div>
                <div>
                    <p className="font-semibold text-sm tracking-wide text-[var(--text-primary)]">
                        {author}
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
                        {role}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default function Testimonials() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });
    const sectionY = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);

    const row1 = testimonials.slice(0, 2); // [01] + [02]
    const row2 = testimonials.slice(2);    // [03] + [04] + [05]

    return (
        <section
            ref={containerRef}
            className="w-full relative py-20 lg:py-28 overflow-hidden bg-[var(--bg-sage)] bg-grid-pattern text-[var(--text-primary)] border-t border-[var(--surface-border)]"
        >
            <motion.div
                style={{ y: sectionY }}
                className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 relative z-10"
            >
                {/* Header */}
                <div className="flex flex-col gap-4 mb-14 border-b border-[var(--surface-border)] pb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--surface-border)] w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                        <span className="font-sans text-[11px] font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
                            Endorsements & Collaboration
                        </span>
                    </div>
                    <h2 className="font-serif text-[clamp(2.2rem,4vw,4rem)] font-medium tracking-tight max-w-[850px] leading-[1.1]">
                        What the engineers, QA, and founders who worked with me say.
                    </h2>
                </div>

                {/* ── Bento Grid Row 1: [01 7-cols] + [02 5-cols] = 12 ── */}
                <div className="grid grid-cols-12 gap-4 lg:gap-5 mb-4 lg:mb-5">
                    {row1.map((t, i) => (
                        <TestimonialCard key={t.id} {...t} index={i} />
                    ))}
                </div>

                {/* ── Bento Grid Row 2: [03 5-cols] + [04 4-cols] + [05 3-cols] = 12 ── */}
                <div className="grid grid-cols-12 gap-4 lg:gap-5">
                    {row2.map((t, i) => (
                        <TestimonialCard key={t.id} {...t} index={i + 2} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
