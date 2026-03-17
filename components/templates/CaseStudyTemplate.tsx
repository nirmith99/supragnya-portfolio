"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

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
        <div className="min-h-screen pt-[var(--nav-height)] pb-32 bg-[var(--bg-sage)]">
            {/* Navigation - Minimalist/Technical */}
            <div className="px-5 md:px-[60px] pt-8 pb-4">
                <Link
                    href="/#work"
                    className="inline-flex items-center gap-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium tracking-wide group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    BACK TO SELECTED WORK
                </Link>
            </div>

            {/* Executive Summary / Hero Section */}
            {!hideDefaultHero && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="px-5 md:px-[60px] mb-24 max-w-[1400px]"
                >
                    <h1 className="text-5xl md:text-8xl font-bold mb-12 text-[var(--text-primary)] tracking-tighter text-balance font-serif">
                        {title}
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-[var(--surface-border)] pt-8">
                        <div className="md:col-span-3">
                            <span className="block text-[var(--accent-gold)] text-xs font-mono uppercase tracking-widest mb-2">
                                Role
                            </span>
                            <span className="text-[var(--text-primary)] text-lg font-medium">{role}</span>
                        </div>

                        <div className="md:col-span-3">
                            <span className="block text-[var(--accent-gold)] text-xs font-mono uppercase tracking-widest mb-2">
                                Timeline
                            </span>
                            <span className="text-[var(--text-primary)] text-lg font-medium">{timeline}</span>
                        </div>

                        <div className="md:col-span-6">
                            <span className="block text-[var(--accent-gold)] text-xs font-mono uppercase tracking-widest mb-2">
                                Stack & Context
                            </span>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 border border-[var(--surface-border)] text-[var(--text-secondary)] text-xs rounded-full bg-[var(--bg-sage)]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Main Content Area - Editorial/Document Style */}
            {/* Strict 60px margins, no container box, direct editorial flow */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="px-5 md:px-[60px] space-y-24 md:space-y-32"
            >
                {children}
            </motion.div>
        </div >
    );
}
