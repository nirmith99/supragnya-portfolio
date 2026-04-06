"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Copy, CheckCircle2, ExternalLink } from "lucide-react";

export default function ContactModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, onClose]);

    const handleCopy = () => {
        navigator.clipboard.writeText("supragnyapurohith@gmail.com");
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
                        className="fixed inset-0 z-[1000] bg-black/60 backdrop-blur-sm flex items-center justify-center px-4"
                    >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.96, y: 16 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-lg"
                    >
                        <div className="bg-[var(--bg-surface)] border border-[var(--surface-border)] p-8 md:p-12 rounded-[2rem] shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--accent-gold)]/5 rounded-full blur-[60px] pointer-events-none" />

                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-2 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-white/5 rounded-full transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            <div className="space-y-8 relative z-10">
                                <div className="space-y-2">
                                    <h2 className="font-serif text-3xl font-medium text-[var(--text-primary)]">Let&apos;s work together.</h2>
                                    <p className="font-sans text-[var(--text-secondary)] leading-relaxed text-[0.95rem]">
                                        Available for full-time roles and select freelance projects.
                                    </p>
                                </div>

                                <div className="space-y-3">
                                    {/* Email row */}
                                    <div className="flex items-center justify-between p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--bg-sage)] group transition-colors hover:border-[var(--accent-gold)]/30">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)]">
                                                <Mail className="w-4 h-4" />
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-tertiary)] mb-0.5">Email</p>
                                                <span className="font-medium text-[var(--text-primary)] text-sm group-hover:text-[var(--accent-gold)] transition-colors">supragnyapurohith@gmail.com</span>
                                            </div>
                                        </div>
                                        <button onClick={handleCopy} className="p-2 text-[var(--text-tertiary)] hover:text-[var(--accent-gold)] transition-colors" title={copied ? "Copied!" : "Copy email"}>
                                            {copied ? <CheckCircle2 className="w-4 h-4 text-[var(--accent-gold)]" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>

                                    {/* LinkedIn row */}
                                    <a
                                        href="https://linkedin.com/in/supragnya"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between p-4 rounded-xl border border-[var(--surface-border)] bg-[var(--bg-sage)] group transition-colors hover:border-[var(--accent-gold)]/30"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-[var(--accent-gold)]/10 flex items-center justify-center text-[var(--accent-gold)] text-sm font-bold">
                                                in
                                            </div>
                                            <div>
                                                <p className="text-xs uppercase tracking-widest font-bold text-[var(--text-tertiary)] mb-0.5">LinkedIn</p>
                                                <span className="font-medium text-[var(--text-primary)] text-sm group-hover:text-[var(--accent-gold)] transition-colors">linkedin.com/in/supragnya</span>
                                            </div>
                                        </div>
                                        <ExternalLink className="w-4 h-4 text-[var(--text-tertiary)] group-hover:text-[var(--accent-gold)] transition-colors" />
                                    </a>
                                </div>

                                <p className="font-mono text-[11px] tracking-[0.08em] text-[var(--text-tertiary)] uppercase">
                                    Based in Hyderabad · Open to remote
                                </p>
                            </div>
                        </div>
                    </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
