import React from 'react';

export default function MasterHero() {
    return (
        <section className="sticky top-0 h-[100vh] w-full bg-brand-mocha text-brand-bone z-10">
            <div className="mx-auto flex h-full w-full max-w-7xl items-center px-8 md:px-16">
                <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">

                    {/* Left Column: Copy & CTAs */}
                    <div className="flex flex-col justify-center gap-8">
                        <h1 className="font-serif-italic text-5xl leading-[1.05] tracking-tight md:text-6xl lg:text-[4.5rem]">
                            Designer driven by precision, where logical structure meets user instinct, building systems that actually scale.
                        </h1>

                        <p className="font-sans text-lg md:text-xl max-w-lg opacity-90">
                            UI/UX Designer (2 yrs). Bridging design & dev via scalable systems, delivering high-fidelity workflows for healthcare & enterprise sectors.
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center mt-4">
                            <button className="flex h-14 items-center justify-center bg-brand-bone px-8 font-sans text-lg font-medium text-brand-mocha transition-transform hover:scale-[1.02]">
                                View work
                            </button>
                            <button className="flex h-14 items-center justify-center gap-3 border border-brand-bone/30 bg-transparent px-8 font-sans text-lg font-medium text-brand-bone transition-colors hover:bg-brand-bone/10">
                                <span className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]"></span>
                                </span>
                                Open to opportunities
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Avatar Placeholder */}
                    <div className="hidden items-center justify-center lg:flex">
                        <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-2xl border border-brand-bone/10 bg-black/20">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-heading text-sm font-bold tracking-widest uppercase opacity-50">
                                    /assets/avatar.png
                                </span>
                                {/* Fallback Image tag as requested */}
                                {/* <img src="/assets/avatar.png" alt="Supragnya Avatar" className="w-full max-w-md mx-auto" /> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
