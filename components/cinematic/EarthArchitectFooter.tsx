import React from 'react';
import Link from 'next/link';

export default function EarthArchitectFooter() {
    return (
        <footer className="relative flex min-h-[50vh] w-full flex-col justify-between bg-brand-dark px-layout-padding py-20 text-brand-white z-50">
            {/* Top Border */}
            <div className="absolute left-layout-padding right-layout-padding top-0 h-[1px] bg-brand-white opacity-20" />

            <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
                {/* Left Column */}
                <div className="flex flex-col gap-6">
                    <h2 className="font-serif-italic text-5xl md:text-7xl">
                        Supragnya<br />Purohith
                    </h2>
                    <div className="mt-4 flex items-center gap-3 font-mono text-sm tracking-widest text-[#DCD4CB]">
                        {/* Status Indicator */}
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        STATUS: OPEN TO OPPORTUNITIES
                    </div>
                </div>

                {/* Right Column Grid */}
                <div className="grid grid-cols-2 gap-x-16 gap-y-8 font-sans">
                    <div className="flex flex-col gap-4">
                        <span className="font-heading text-xs font-bold uppercase tracking-widest opacity-50">Index</span>
                        <Link href="/" className="text-lg transition-colors hover:text-[#DCD4CB]">Home</Link>
                        <Link href="#work" className="text-lg transition-colors hover:text-[#DCD4CB]">Work</Link>
                        <Link href="#about" className="text-lg transition-colors hover:text-[#DCD4CB]">About</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-heading text-xs font-bold uppercase tracking-widest opacity-50">Connect</span>
                        <a href="mailto:hello@supragnya.com" className="text-lg transition-colors hover:text-[#DCD4CB]">Email</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-lg transition-colors hover:text-[#DCD4CB]">LinkedIn</a>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-lg transition-colors hover:text-[#DCD4CB]">Resume</a>
                    </div>
                </div>
            </div>

            <div className="mt-24 flex flex-col items-center justify-between border-t border-brand-white/10 pt-8 font-sans text-sm opacity-50 md:flex-row">
                <span>© {new Date().getFullYear()} Supragnya Purohith. All rights reserved.</span>
                <span className="mt-4 md:mt-0">Designed & Developed with precision.</span>
            </div>
        </footer>
    );
}
