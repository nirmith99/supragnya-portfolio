"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface MockupProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function PhoneMockup({ children, className, ...props }: MockupProps) {
    return (
        <div 
            className={cn(
                "relative mx-auto rounded-[2.8rem] md:rounded-[3.2rem] p-[8px] md:p-[12px] bg-black shadow-2xl",
                "border border-[#4a4b50] ring-1 ring-inset ring-black/50", // Sleek metallic rim
                "w-full max-w-[280px] md:max-w-[320px]", 
                className
            )}
            style={{
                boxShadow: "inset 0 0 0 1px #000, 0 25px 50px -12px rgba(0,0,0,0.5)"
            }}
            {...props}
        >
            {/* Hardware Buttons - Left */}
            <div className="absolute -left-[2px] md:-left-[3px] top-[90px] w-[2px] md:w-[3px] h-6 md:h-8 bg-[#4a4b50] rounded-l-sm" />
            <div className="absolute -left-[2px] md:-left-[3px] top-[140px] w-[2px] md:w-[3px] h-12 md:h-14 bg-[#4a4b50] rounded-l-sm" />
            <div className="absolute -left-[2px] md:-left-[3px] top-[200px] md:top-[210px] w-[2px] md:w-[3px] h-12 md:h-14 bg-[#4a4b50] rounded-l-sm" />
            
            {/* Hardware Button - Right */}
            <div className="absolute -right-[2px] md:-right-[3px] top-[160px] md:top-[170px] w-[2px] md:w-[3px] h-16 md:h-20 bg-[#4a4b50] rounded-r-sm" />

            {/* Dynamic Island */}
            <div className="absolute top-[18px] md:top-[22px] inset-x-0 h-[26px] md:h-[30px] flex justify-center z-20 pointer-events-none">
                <div className="w-[90px] md:w-[110px] h-full bg-black rounded-full flex items-center justify-end px-3">
                    {/* Camera Lens Refleciton */}
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#111] border border-white/10"></div>
                </div>
            </div>
            
            {/* Screen */}
            <div className="relative w-full overflow-hidden rounded-[2.3rem] md:rounded-[2.6rem] bg-white ring-1 ring-black">
                {children}
            </div>
        </div>
    );
}

export function DesktopMockup({ children, className, ...props }: MockupProps) {
    return (
        <div 
            className={cn(
                "relative w-full rounded-xl sm:rounded-2xl border border-[var(--surface-border)] overflow-hidden shadow-2xl bg-[var(--bg-surface)]",
                className
            )}
            {...props}
        >
            {/* macOS styled top bar */}
            <div className="h-8 md:h-12 border-b border-[var(--surface-border)] bg-[var(--bg-surface)]/50 backdrop-blur-sm flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/20"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/20"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/20"></div>
            </div>
            
            {/* Screen content */}
            <div className="relative w-full bg-white overflow-hidden border-t border-[var(--surface-border)]/50">
                {children}
            </div>
        </div>
    );
}
