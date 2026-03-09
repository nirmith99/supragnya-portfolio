"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Calendar, Briefcase } from "lucide-react";

const EXPERIENCES = [
    {
        role: "Senior Design & Strategy Lead",
        company: "ElateCare",
        timeframe: "2021 — Present",
        description: "Led the complete redesign of patient-facing interfaces resulting in a 40% increase in user engagement. Managed cross-functional teams to deliver an accessible and premium experience.",
        skills: ["Product Strategy", "UX/UI Design", "Design Systems", "Figma", "Accessibility"]
    },
    {
        role: "Lead UX Architect",
        company: "Udyoga Pramoda",
        timeframe: "2018 — 2021",
        description: "Architected a comprehensive platform scaling to 1M+ active users. Established foundational design principles and drove user research initiatives for continuous improvement.",
        skills: ["UX Architecture", "User Research", "Interaction Design", "Prototyping"]
    },
    {
        role: "Full-Stack Engineer & UX Designer",
        company: "RupeeRise",
        timeframe: "2015 — 2018",
        description: "Bridged the gap between design and engineering by delivering fully responsive UI components while influencing core product roadmap decisions aligned with business objectives.",
        skills: ["Frontend Development", "React", "UI Design", "Visual Design"]
    }
];

export function ExperienceSection() {
    return (
        <section id="experience" className="section-padding relative">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto mb-16 md:mb-24 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                    >
                        <H2 className="mb-6">Professional Experience</H2>
                        <P>A track record of leading design strategy and executing high-impact solutions across diverse industries.</P>
                    </motion.div>
                </div>

                <div className="max-w-4xl mx-auto grid gap-8">
                    {EXPERIENCES.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="relative overflow-hidden group border-brand-border-subtle hover:border-brand-accent-dim">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-border-subtle group-hover:bg-brand-accent-primary transition-colors duration-500" />

                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pl-4 md:pl-6">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-3 text-brand-accent-primary">
                                            <Briefcase className="w-[18px] h-[18px]" />
                                            <span className="font-semibold text-[15px] uppercase tracking-wider">{exp.company}</span>
                                        </div>
                                        <H3 className="mb-4 text-step-2">{exp.role}</H3>
                                        <P className="mb-8">{exp.description}</P>

                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map(skill => (
                                                <Badge key={skill} variant="outline" className="text-xs text-brand-text-tertiary border-brand-border-subtle group-hover:border-brand-border-strong group-hover:text-brand-text-secondary transition-colors">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 text-brand-text-tertiary text-sm md:text-right shrink-0">
                                        <Calendar className="w-4 h-4" />
                                        <span className="font-medium tracking-wide">{exp.timeframe}</span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
