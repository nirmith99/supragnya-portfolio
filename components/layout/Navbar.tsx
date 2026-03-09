"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ContactModal from "@/components/ui/ContactModal";

export function Navbar() {
    const [isContactOpen, setIsContactOpen] = React.useState(false);
    const [scrolled, setScrolled] = React.useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-[200] w-full px-6 md:px-10"
                style={{
                    paddingTop: scrolled ? "12px" : "20px",
                    paddingBottom: scrolled ? "0px" : "0px",
                    transition: "padding 0.3s ease",
                }}
            >
                <div
                    className="w-full max-w-[1400px] mx-auto flex items-center justify-between rounded-full px-6 py-3"
                    style={{
                        backgroundColor: scrolled ? "rgba(43, 48, 42, 0.92)" : "transparent",
                        border: scrolled ? "1px solid rgba(209, 191, 160, 0.2)" : "1px solid transparent",
                        backdropFilter: scrolled ? "blur(12px)" : "none",
                        transition: "all 0.3s ease",
                    }}
                >
                    {/* LEFT */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/"
                            className="font-serif font-bold text-xl tracking-wide shrink-0"
                            style={{ color: "var(--text-primary)" }}
                        >
                            Supragnya
                        </Link>
                        <div
                            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full shrink-0"
                            style={{
                                backgroundColor: "var(--bg-surface)",
                                border: "1px solid rgba(209, 191, 160, 0.2)",
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full animate-pulse shrink-0"
                                style={{ backgroundColor: "var(--accent-gold)" }}
                            />
                            <span
                                className="font-sans font-bold uppercase text-[10px] tracking-widest whitespace-nowrap"
                                style={{ color: "var(--text-secondary)" }}
                            >
                                Open to opportunities
                            </span>
                        </div>
                    </div>

                    {/* CENTER */}
                    <div className="hidden lg:flex items-center gap-8 font-sans text-xs font-bold uppercase tracking-widest"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        <Link href="/#projects" style={{ color: "var(--text-secondary)" }}>
                            Selected Work
                        </Link>
                        <Link href="/#about" style={{ color: "var(--text-secondary)" }}>
                            About &amp; Process
                        </Link>
                    </div>

                    {/* RIGHT */}
                    <button
                        onClick={() => setIsContactOpen(true)}
                        className="shrink-0 font-sans font-bold uppercase text-[11px] tracking-widest px-6 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
                        style={{
                            backgroundColor: "var(--accent-gold)",
                            color: "var(--bg-sage)",
                            border: "none",
                            cursor: "pointer",
                        }}
                    >
                        Contact Me
                    </button>
                </div>
            </motion.nav>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
