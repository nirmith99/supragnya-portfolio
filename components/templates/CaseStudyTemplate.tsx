"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface CaseStudyTemplateProps {
    title: string;
    role: string;
    timeline: string;
    tags: string[];
    heroImage?: string; // Placeholder for now, can be used later
    children: React.ReactNode;
}

export default function CaseStudyTemplate({
    title,
    role,
    timeline,
    tags,
    children,
}: CaseStudyTemplateProps) {
    return (
        <div className="min-h-screen pt-[var(--nav-height)] pb-20">
            {/* Background Ambience (matching global but maybe intensified for focus) */}
            <div className="fixed inset-0 pointer-events-none z-[-1]">
                <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#0d4a3e]/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#a7f36f]/5 blur-[120px] rounded-full" />
            </div>

            <div className="max-w-[1000px] mx-auto px-6 md:px-10">
                {/* Navigation Back */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8 md:mb-12"
                >
                    <Link
                        href="/#selected-work"
                        className="inline-flex items-center gap-2 text-[#cadcd5] hover:text-[#a7f36f] transition-colors group text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Work
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#F4F1E8] tracking-tight text-balance">
                        {title}
                    </h1>

                    <div className="flex flex-wrap gap-4 md:gap-8 text-[#cadcd5] text-sm md:text-base border-t border-[#a7f36f]/20 pt-6">
                        <div>
                            <span className="block text-[#a7f36f]/60 text-xs uppercase tracking-wider mb-1">Role</span>
                            {role}
                        </div>
                        <div>
                            <span className="block text-[#a7f36f]/60 text-xs uppercase tracking-wider mb-1">Timeline</span>
                            {timeline}
                        </div>
                        <div className="flex gap-2 items-center mt-1 md:mt-0">
                            {tags.map((tag) => (
                                <span key={tag} className="px-3 py-1 rounded-full bg-[#a7f36f]/10 text-[#a7f36f] text-xs">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Main Content Area - Glassmorphism Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="bg-[#064034]/40 backdrop-blur-xl border border-[#a7f36f]/10 rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-2xl"
                >
                    {children}
                </motion.div>
            </div>
        </div>
    );
}
