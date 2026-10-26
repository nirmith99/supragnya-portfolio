"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function CaseStudyFooter() {
    return (
        <footer className="mt-32 border-t border-[var(--surface-border)] bg-[var(--bg-sage)]">
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-16 lg:px-24 py-16">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                    <span className="font-mono text-xs text-[var(--text-tertiary)]">© 2026 Supragnya Purohith</span>
                    <div className="flex items-center gap-6 font-mono text-xs text-[var(--text-tertiary)]">
                        <a
                            href="mailto:99supragnya@gmail.com"
                            className="hover:text-[var(--accent-gold)] transition-colors"
                        >
                            Email
                        </a>
                        <a
                            href="https://www.linkedin.com/in/supragnya-purohith/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[var(--accent-gold)] transition-colors"
                        >
                            LinkedIn
                        </a>
                        <Link href="/#work" className="hover:text-[var(--text-primary)] transition-colors">
                            Back to Selected Work
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

interface CaseStudyTemplateProps {
    title: string;
    role: string;
    timeline: string;
    tags: string[];
    heroImage?: string;
    hideDefaultHero?: boolean;
    children: React.ReactNode;
}

export default function CaseStudyTemplate({
    title,
    role,
    timeline,
    tags,
    hideDefaultHero = false,
    children,
}: CaseStudyTemplateProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="min-h-screen bg-[var(--bg-sage)] text-[var(--text-primary)]"
        >
            {/* Dedicated Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[var(--bg-sage)]/95 backdrop-blur-md border-b border-[var(--surface-border)]">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-8 h-full flex items-center justify-between">
                    <Link
                        href="/#work"
                        className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-xs font-semibold uppercase tracking-widest group"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform text-[var(--accent-gold)]" />
                        <span className="hidden sm:inline">Back to Selected Work</span>
                        <span className="sm:hidden">Work</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-3">
                        <span className="text-xs font-serif text-[var(--text-primary)] font-medium max-w-xs truncate">
                            {title}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-gold)]" />
                        <span className="font-mono text-[10px] text-[var(--text-tertiary)] uppercase tracking-wider">
                            {role}
                        </span>
                    </div>

                    <Link
                        href="/"
                        className="font-serif font-semibold text-base text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors"
                    >
                        Supragnya
                    </Link>
                </div>
            </header>

            {/* Main Content Area */}
            <div className="pt-20">
                {/* Executive Summary / Hero Section */}
                {!hideDefaultHero && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="px-5 md:px-[60px] pt-8 mb-20 max-w-[1400px] mx-auto"
                    >
                        <h1 className="text-4xl md:text-7xl font-medium mb-10 text-[var(--text-primary)] tracking-tight text-balance font-serif">
                            {title}
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[var(--surface-border)] pt-8">
                            <div className="md:col-span-3">
                                <span className="block text-[var(--accent-gold)] text-xs font-mono uppercase tracking-widest mb-2">
                                    Role
                                </span>
                                <span className="text-[var(--text-primary)] text-base font-medium">{role}</span>
                            </div>

                            <div className="md:col-span-3">
                                <span className="block text-[var(--accent-gold)] text-xs font-mono uppercase tracking-widest mb-2">
                                    Timeline / Context
                                </span>
                                <span className="text-[var(--text-primary)] text-base font-medium">{timeline}</span>
                            </div>

                            <div className="md:col-span-6">
                                <span className="block text-[var(--accent-gold)] text-xs font-mono uppercase tracking-widest mb-2">
                                    Domain & Focus
                                </span>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 border border-[var(--surface-border)] text-[var(--text-secondary)] text-xs rounded-full bg-[var(--bg-surface)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Children Slot */}
                <div className="w-full">
                    {children}
                </div>
            </div>

            <CaseStudyFooter />
        </motion.div>
    );
}
