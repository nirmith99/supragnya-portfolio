import React from 'react';
import Image from 'next/image';

export default function EarthArchitectHero() {
    return (
        <section className="relative flex h-screen w-full flex-col justify-center bg-brand-dark px-layout-padding lg:flex-row lg:items-center lg:justify-between">
            {/* Left Content */}
            <div className="z-10 flex w-full max-w-3xl flex-col gap-8 lg:w-1/2">
                <h1 className="text-5xl font-serif-italic text-brand-white leading-[1.1] md:text-7xl lg:text-[5.5rem] tracking-tight">
                    Designer driven by <span className="inline-block px-2">precision</span>, where logical structure meets user instinct, building systems that actually scale.
                </h1>

                <p className="max-w-md text-lg text-[#DCD4CB] font-sans md:text-xl">
                    Focusing on making complex systems feel simple through behavior-first design and technical clarity.
                </p>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <button className="flex h-14 items-center justify-center rounded-none bg-brand-white px-8 text-lg font-medium text-brand-dark transition-transform hover:scale-[1.03]">
                        View work
                    </button>
                    <button className="flex h-14 items-center justify-center gap-3 rounded-none border border-brand-white/20 bg-transparent px-8 text-lg font-medium text-brand-white transition-colors hover:bg-brand-white/5">
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                        </span>
                        Open to opportunities
                    </button>
                </div>
            </div>

            {/* Right Placeholder - Vector Portrait */}
            <div className="absolute right-0 top-0 hidden h-full w-1/2 items-center justify-center lg:flex">
                <div className="relative h-[80%] w-[80%] opacity-20 transition-opacity duration-1000 hover:opacity-50">
                    <svg className="h-full w-full text-brand-white" viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        {/* Simple vector placeholder pattern */}
                        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                        <path d="M50 10 V 90 M10 50 H 90" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" opacity="0.5" />
                        <text x="50" y="52" fontSize="6" textAnchor="middle" fill="currentColor" opacity="0.8" className="font-heading tracking-widest uppercase">Portrait Placeholder</text>
                    </svg>
                </div>
            </div>
        </section>
    );
}
