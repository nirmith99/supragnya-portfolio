"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import { usePathname } from "next/navigation";

const menuItems = [
    { label: "Work", href: "/#selected-work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "#contact" }, // Handled via modal in Navbar usually, but here we might need to emit event
];

interface HamburgerMenuProps {
    onContactClick: () => void;
}

export default function HamburgerMenu({ onContactClick }: HamburgerMenuProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const toggleMenu = () => setIsOpen(!isOpen);

    const menuVariants = {
        closed: {
            opacity: 0,
            transition: {
                staggerChildren: 0.1,
                staggerDirection: -1,
                when: "afterChildren",
            },
        },
        open: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    const linkVariants = {
        closed: { y: 20, opacity: 0 },
        open: { y: 0, opacity: 1 },
    };

    return (
        <div className="lg:hidden">
            <button
                onClick={toggleMenu}
                className="relative z-50 p-2 text-white hover:text-[#a7f36f] transition-colors focus:outline-none"
                aria-label="Toggle Menu"
            >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#121212]/95 backdrop-blur-xl"
                    >
                        <nav className="flex flex-col items-center gap-8 text-center">
                            {menuItems.map((item) => (
                                <motion.div key={item.label} variants={linkVariants}>
                                    {item.label === "Contact" ? (
                                        <button
                                            onClick={() => {
                                                setIsOpen(false);
                                                onContactClick();
                                            }}
                                            className="text-4xl font-bold text-white hover:text-[#a7f36f] transition-colors font-heading"
                                        >
                                            {item.label}
                                        </button>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-4xl font-bold text-white hover:text-[#a7f36f] transition-colors font-heading"
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </nav>
                        {/* Decorative background element */}
                        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black/80 pointer-events-none" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
