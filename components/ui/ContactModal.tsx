"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, MapPin, Copy, CheckCircle2 } from "lucide-react";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    const handleCopy = () => {
        navigator.clipboard.writeText("hello@supragnya.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[1000] bg-[var(--bg-sage)]/60 backdrop-blur-md"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[1001] w-full max-w-lg"
                    >
                        <div className="bg-[var(--bg-surface)] border border-[var(--surface-border)] p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
                            {/* Subtle background glow */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-gold)]/5 rounded-full blur-[60px] pointer-events-none" />

                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-border)] rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="space-y-8 relative z-10">
                                <div className="space-y-2">
                                    <h2 className="font-serif text-3xl font-medium text-[var(--text-primary)]">Let&apos;s talk</h2>
                                    <p className="font-sans text-[var(--text-secondary)] leading-relaxed text-[0.95rem]">
                                        Whether you have a specific project in mind or just want to explore possibilities, I&apos;m ready to listen.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--bg-sage)] group transition-colors hover:border-[var(--accent-gold)]/30">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)]">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-tertiary)] mb-0.5">Email</p>
                                                <a href="mailto:hello@supragnya.com" className="font-medium text-[var(--text-primary)] text-sm group-hover:text-[var(--accent-gold)] transition-colors">hello@supragnya.com</a>
                                            </div>
                                        </div>
                                        <button onClick={handleCopy} className="p-2 text-[var(--text-tertiary)] hover:text-[var(--accent-gold)] transition-colors">
                                            {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--bg-sage)]">
                                        <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)]">
                                            <MapPin className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-tertiary)] mb-0.5">Location</p>
                                            <p className="font-medium text-[var(--text-primary)] text-sm">Bangalore, India</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-[var(--surface-border)]">
                                    <a href="https://linkedin.com/in/supragnya" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--accent-gold)] transition-colors">
                                        LinkedIn ↗
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
