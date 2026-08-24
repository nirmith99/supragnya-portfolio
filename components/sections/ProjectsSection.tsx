/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { PhoneMockup, DesktopMockup } from "@/components/ui/mockups";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ProjectType = {
    title: string;
    description: string;
    image: string;
    tags: string[];
    link: string;
    mockupType: "phone" | "desktop";
};

const PROJECTS: ProjectType[] = [
    {
        title: "Clinical Emergency Response",
        description: "A mobile platform for tiered emergency alerts, clinical coordination, and response workflows for doctors and nurses.",
        image: "/images/thumbnails/Emergency app- Alarm List.png",
        tags: ["Healthcare UX", "Clinical Workflows", "ccm.ai"],
        link: "/emergency-app",
        mockupType: "phone"
    },
    {
        title: "RupeeRise",
        description: "An AI-powered financial wellness platform gamifying saving habits. Designed to lower the barrier to stable wealth accumulation.",
        image: "/images/thumbnails/Rupeerise- dashboard.png",
        tags: ["Fintech", "Gamification", "Product Design"],
        link: "/rupeerise",
        mockupType: "phone"
    },
    {
        title: "Udyoga Pramoda",
        description: "Architected a scalable career platform serving over 1M active job seekers. Transitioned trust-based coordination to structured professional visibility.",
        image: "/images/thumbnails/Udyoga Pramoda Landing.png",
        tags: ["Web Platform", "Design System"],
        link: "#", // Add link if available
        mockupType: "desktop"
    }
];

export function ProjectsSection() {
    return (
        <section id="work" className="section-padding bg-[var(--bg-sage)]">
            <div className="container-custom">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <H2 className="mb-6">Selected Work</H2>
                        <P>A curated collection of projects where I&apos;ve led design strategy, execution, and delivery to achieve significant business outcomes.</P>
                    </motion.div>
                </div>

                {/* 
                    Grid layout: 
                    If we have an odd number of projects, the last one spans full width 
                    so the desktop mockup gets more horizontal space.
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {PROJECTS.map((project, index) => {
                        const isLastAndOdd = index === PROJECTS.length - 1 && PROJECTS.length % 2 !== 0;
                        
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={cn("h-full", isLastAndOdd ? "md:col-span-2" : "")}
                            >
                                <Card className="group p-0 overflow-hidden bg-[var(--bg-surface)] border-[var(--surface-border)] hover:border-[var(--accent-gold)] transition-all duration-500 h-full flex flex-col xl:flex-row">
                                    
                                    {/* Mockup Container */}
                                    <div className={cn(
                                        "relative flex items-center justify-center p-8 bg-transparent overflow-hidden",
                                        "w-full",
                                        // If it's a "full row" layout (odd last element), make it stack properly
                                        isLastAndOdd ? "xl:w-1/2" : ""
                                    )}>
                                        {/* Setup the actual mockup */}
                                        <div className={cn(
                                            "relative w-full transition-transform duration-700 group-hover:scale-[1.03] flex items-center justify-center",
                                            project.mockupType === "desktop" ? "max-w-[700px] mt-4" : "max-w-[280px]"
                                        )}>
                                            {project.mockupType === "phone" ? (
                                                <PhoneMockup>
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-auto block"
                                                    />
                                                </PhoneMockup>
                                            ) : (
                                                <DesktopMockup>
                                                    <img
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-auto block"
                                                    />
                                                </DesktopMockup>
                                            )}
                                        </div>
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                                    </div>

                                    {/* Text Content */}
                                    <div className={cn(
                                        "p-8 flex flex-col flex-1",
                                        isLastAndOdd ? "xl:w-1/2 xl:justify-center" : ""
                                    )}>
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {project.tags.map(tag => (
                                                <Badge key={tag} variant="outline" className="text-[11px] py-1 border-[var(--surface-border)] text-[var(--text-secondary)]">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

                                        <H3 className="mb-4 group-hover:text-[var(--accent-gold)] transition-colors">
                                            {project.title}
                                        </H3>

                                        <P className="mb-8 flex-1">
                                            {project.description}
                                        </P>

                                        <div className="mt-auto pt-6 border-t border-[var(--surface-border)] flex items-center justify-between">
                                            <span className="font-mono text-[0.65rem] font-bold tracking-[0.2em] uppercase text-[var(--text-primary)] group-hover:text-[var(--accent-gold)] transition-colors">
                                                View Case Study
                                            </span>
                                            <Button variant="secondary" href={project.link} className="w-12 h-12 flex items-center justify-center p-0 rounded-full border border-[var(--surface-border)] bg-[var(--bg-surface)] group-hover:bg-[var(--accent-gold)] group-hover:border-[var(--accent-gold)] group-hover:text-[var(--bg-sage)] transition-colors shadow-none">
                                                <ArrowUpRight className="w-5 h-5" aria-label={`View ${project.title}`} />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
