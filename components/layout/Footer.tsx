"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { H2, P } from "@/components/ui/Typography";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer id="about" className="relative border-t border-brand-border-subtle bg-brand-surface/50 overflow-hidden">
            <div className="section-padding">
                <div className="container-custom">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="max-w-2xl"
                        >
                            <H2 className="mb-6 leading-[1.1]">Let&apos;s build something extraordinary together.</H2>
                            <P className="text-step-1">Available for freelance opportunities and full-time roles.</P>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <Button href="mailto:hello@supragnya.com" className="h-[72px] px-10 text-lg group bg-[var(--accent-gold)] text-[var(--bg-sage)] hover:brightness-110">
                                <Mail className="w-6 h-6 mr-3" />
                                hello@supragnya.com
                                <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </motion.div>
                    </div>

                    <div className="pt-8 border-t border-brand-border-subtle flex flex-col sm:flex-row justify-between items-center gap-6">
                        <div className="text-brand-text-tertiary text-sm font-medium">
                            © {new Date().getFullYear()} Supragnya Purohith. All rights reserved.
                        </div>

                        <div className="flex items-center gap-6">
                            <Link href="https://linkedin.com" target="_blank" className="text-brand-text-tertiary hover:text-brand-accent-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="https://twitter.com" target="_blank" className="text-brand-text-tertiary hover:text-brand-accent-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                                <span className="sr-only">Twitter</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-accent-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/3 translate-y-1/3" />
        </footer>
    );
}
