import React from 'react';

type ProjectNodeProps = {
    title: string;
    description: string;
    bgColor: 'bg-brand-mocha' | 'bg-brand-bone';
    textColor: 'text-brand-mocha' | 'text-brand-bone';
    reverseLayout?: boolean;
    zIndex: number;
};

export default function MasterProjectNode({
    title,
    description,
    bgColor,
    textColor,
    reverseLayout = false,
    zIndex
}: ProjectNodeProps) {
    return (
        <section
            className={`sticky top-0 h-[100vh] w-full ${bgColor} ${textColor}`}
            style={{ zIndex }}
        >
            <div className="mx-auto flex h-full w-full max-w-7xl items-center px-8 md:px-16 border-t border-current/10">
                <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">

                    {/* Text Column */}
                    <div className={`flex flex-col justify-center gap-6 ${reverseLayout ? 'lg:order-2 lg:pl-12' : 'lg:order-1 lg:pr-12'}`}>
                        <h2 className="font-serif-italic text-5xl md:text-7xl lg:text-[5.5rem] leading-none tracking-tight">
                            {title}
                        </h2>
                        <p className="font-sans text-xl md:text-2xl mt-4 opacity-90 max-w-md">
                            {description}
                        </p>
                        <div className="mt-8">
                            <button
                                className={`inline-flex h-14 items-center justify-center px-8 font-sans text-lg font-medium transition-transform hover:-translate-y-1
                  ${bgColor === 'bg-brand-mocha'
                                        ? 'bg-brand-bone text-brand-mocha hover:shadow-lg'
                                        : 'bg-brand-mocha text-brand-bone hover:shadow-lg'}`
                                }
                            >
                                View Case Study
                            </button>
                        </div>
                    </div>

                    {/* Image Placeholder Column */}
                    <div className={`items-center justify-center hidden lg:flex h-[60vh] w-full ${reverseLayout ? 'lg:order-1' : 'lg:order-2'}`}>
                        <div className="relative flex h-full w-full items-center justify-center overflow-hidden border border-current/20 bg-black/5">
                            <span className="font-heading text-sm font-bold uppercase tracking-widest opacity-40">
                                Cinematic Mockup Placeholder
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
