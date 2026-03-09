"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { H2, H3, P } from "@/components/ui/Typography";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const PROJECTS = [
    {
        title: "ElateCare Redesign",
        description: "A complete overhaul of the patient portal, focusing on accessibility and seamless scheduling. Increased patient retention by 40%.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
        tags: ["UX Research", "UI Design", "Healthcare"],
        link: "#"
    },
    {
        title: "Udyoga Pramoda Platform",
        description: "Architected a scalable platform serving over 1M active job seekers. Created a unified design system that accelerated development by 30%.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        tags: ["Product Strategy", "Design System"],
        link: "#"
    }
];

export function ProjectsSection() {
    return (
        <section id="work" className="section-padding bg-brand-surface/30">
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Card className="group p-0 overflow-hidden bg-brand-app border-brand-border-subtle hover:border-brand-accent-primary transition-all duration-500 h-full flex flex-col">
                                <div className="relative h-[240px] sm:h-[320px] w-full overflow-hidden bg-brand-surface">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-brand-app/10 group-hover:bg-transparent transition-colors duration-500" />
                                </div>

                                <div className="p-8 flex-1 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tags.map(tag => (
                                            <Badge key={tag} variant="outline" className="text-[11px] py-1 border-brand-border-strong text-brand-text-secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <H3 className="mb-4 group-hover:text-brand-accent-primary transition-colors">
                                        {project.title}
                                    </H3>

                                    <P className="mb-8 flex-1">
                                        {project.description}
                                    </P>

                                    <div className="mt-auto pt-4 border-t border-brand-border-subtle flex items-center justify-between">
                                        <span className="text-sm font-medium tracking-wide uppercase text-brand-text-primary group-hover:text-[var(--accent-gold)] transition-colors">View Case Study</span>
                                        <Button variant="secondary" href={project.link} className="w-12 h-12 flex items-center justify-center p-0 rounded-full border-none bg-brand-surface group-hover:bg-[var(--accent-gold)] group-hover:text-brand-app transition-colors shadow-none">
                                            <ArrowUpRight className="w-6 h-6" aria-label={`View ${project.title}`} />
                                        </Button>
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
