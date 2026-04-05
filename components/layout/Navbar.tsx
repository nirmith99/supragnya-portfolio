"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import ContactModal from "@/components/ui/ContactModal";
import { Menu, X } from "lucide-react";

const mobileNavLinks = [
    { label: "Home", href: "/" },
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
];

export function Navbar() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    const menuOverlayVariants = {
        closed: { opacity: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
        open: { opacity: 1, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] } },
    };

    const menuItemVariants = {
        closed: { y: 30, opacity: 0 },
        open: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: { delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
        }),
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-[200] w-full px-4 sm:px-6 md:px-10"
                style={{
                    paddingTop: scrolled ? "12px" : "20px",
                    paddingBottom: scrolled ? "0px" : "0px",
                    transition: "padding 0.3s ease",
                }}
            >
                <div
                    className="w-full max-w-[1400px] mx-auto flex items-center justify-between rounded-full px-4 sm:px-6 py-3"
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
                            className="font-serif font-bold text-lg sm:text-xl tracking-wide shrink-0"
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

                    {/* CENTER - Desktop only */}
                    <div className="hidden lg:flex items-center gap-8 font-sans text-xs font-bold uppercase tracking-widest"
                        style={{ color: "var(--text-secondary)" }}
                    >
                        <Link href="/" style={{ color: "var(--text-secondary)" }}>
                            Home
                        </Link>
                        <Link href="/#work" style={{ color: "var(--text-secondary)" }}>
                            Work
                        </Link>
                        <Link href="/#about" style={{ color: "var(--text-secondary)" }}>
                            About
                        </Link>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="font-sans text-xs font-bold uppercase tracking-widest transition-colors hover:text-[var(--accent-gold)]"
                            style={{ color: "var(--text-secondary)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
                        >
                            Contact Me
                        </button>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-3">
                        {/* Contact Button - hidden on small mobile, visible from sm up */}
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className="hidden sm:block shrink-0 font-sans font-bold uppercase text-[11px] tracking-widest px-6 py-2.5 rounded-full shadow-lg transition-transform hover:scale-105"
                            style={{
                                backgroundColor: "var(--accent-gold)",
                                color: "var(--bg-sage)",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Contact Me
                        </button>

                        {/* Hamburger Button - visible below lg */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden relative z-[210] p-2 rounded-full transition-colors"
                            style={{ color: "var(--text-primary)" }}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuOverlayVariants}
                        className="fixed inset-0 z-[205] flex flex-col items-center justify-center"
                        style={{ backgroundColor: "var(--bg-sage)", }}
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {mobileNavLinks.map((item, i) => (
                                <motion.div
                                    key={item.label}
                                    custom={i}
                                    variants={menuItemVariants}
                                    initial="closed"
                                    animate="open"
                                    exit="closed"
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="font-serif text-3xl sm:text-4xl font-bold tracking-tight transition-colors"
                                        style={{ color: "var(--text-primary)" }}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Contact button inside mobile menu */}
                            <motion.div
                                custom={mobileNavLinks.length}
                                variants={menuItemVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                <button
                                    onClick={() => {
                                        setIsMobileMenuOpen(false);
                                        setIsContactOpen(true);
                                    }}
                                    className="mt-4 font-sans font-bold uppercase text-[12px] tracking-widest px-8 py-3 rounded-full shadow-lg transition-transform hover:scale-105"
                                    style={{
                                        backgroundColor: "var(--accent-gold)",
                                        color: "var(--bg-sage)",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    Contact Me
                                </button>
                            </motion.div>
                        </nav>

                        {/* Subtle decorative gradient */}
                        <div
                            className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
                            style={{ background: "linear-gradient(to top, rgba(209, 191, 160, 0.05), transparent)" }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </>
    );
}
