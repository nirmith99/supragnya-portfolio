'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const projects = [
    {
        id: 1,
        title: 'Emergency Response App',
        bg: 'bg-brand-white',
        text: 'text-brand-dark',
        focus: 'Architectural logic and sub-30-second response times for cardiovascular care.',
        path: '/emergency-app'
    },
    {
        id: 2,
        title: 'Udyoga Pramoda',
        bg: 'bg-brand-dark',
        text: 'text-brand-white',
        focus: 'Live-production mentor-gated community progression system.',
        path: '/udyoga-pramoda'
    },
    {
        id: 3,
        title: 'RupeeRise',
        bg: 'bg-brand-white',
        text: 'text-brand-dark',
        focus: 'Habit-first wealth management designed in a 14-day sprint.',
        path: '/rupeerise'
    }
];

export default function CinematicArchive() {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        let panels = gsap.utils.toArray('.cinematic-panel');

        // Create a ScrollTrigger for each panel to pin it (except the last one which doesn't need to be pinned)
        panels.forEach((panel: any, i) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                pin: true,
                pinSpacing: false,
                // id: "pin-" + i,
                // markers: true,
            });
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full">
            {projects.map((project, index) => (
                <section
                    key={project.id}
                    className={`cinematic-panel relative flex h-screen w-full flex-col px-layout-padding ${project.bg} ${project.text}`}
                    style={{ zIndex: index + 10 }}
                >
                    {/* Top Divider (except first) */}
                    {index > 0 && <div className={`absolute left-layout-padding right-layout-padding top-0 h-[1px] opacity-20 ${project.bg === 'bg-brand-dark' ? 'bg-brand-white' : 'bg-brand-dark'}`} />}

                    <div className="flex h-full w-full flex-col justify-center lg:flex-row lg:items-center">
                        {/* Project Content - Left */}
                        <div className="z-10 flex w-full flex-col gap-6 lg:w-1/2 lg:pr-12">
                            <span className="font-heading text-sm font-bold tracking-widest opacity-60 uppercase">
                                {String(index + 1).padStart(2, '0')} {/* Selected Work */}
                            </span>
                            <h2 className="text-5xl font-serif-italic md:text-7xl lg:text-8xl leading-none">
                                {project.title}
                            </h2>
                            <p className="max-w-md text-lg font-sans md:text-xl opacity-80 mt-4">
                                {project.focus}
                            </p>

                            <div className="mt-8">
                                <Link href={project.path} className={`inline-flex h-14 items-center justify-center rounded-none border px-8 text-lg font-medium transition-all hover:-translate-y-1 ${project.bg === 'bg-brand-dark' ? 'border-brand-white text-brand-white hover:bg-brand-white hover:text-brand-dark' : 'border-brand-dark text-brand-dark hover:bg-brand-dark hover:text-brand-white'}`}>
                                    View Case Study
                                </Link>
                            </div>
                        </div>

                        {/* Project Mockup - Right (Placeholder for now) */}
                        <div className="mt-12 w-full lg:mt-0 lg:w-1/2 h-[50vh] lg:h-[70vh] flex items-center justify-center relative">
                            <div className={`absolute inset-0 bg-black/5 opacity-50`}></div>
                            <div className={`relative h-[80%] w-[90%] border-2 ${project.bg === 'bg-brand-dark' ? 'border-brand-white/20' : 'border-brand-dark/20'} flex items-center justify-center`}>
                                <span className="font-heading opacity-50 uppercase tracking-widest text-sm">Cinematic Mockup Area</span>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
}
