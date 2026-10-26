"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Info, Sparkles, CheckCircle2 } from "lucide-react";

export interface Hotspot {
  id: number;
  xPercent: number; // 0 to 100%
  yPercent: number; // 0 to 100%
  title: string;
  category: string;
  description: string;
}

interface AnnotatedScreenProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  hotspots: Hotspot[];
  className?: string;
}

export default function AnnotatedScreen({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  hotspots,
  className,
}: AnnotatedScreenProps) {
  const [activeHotspot, setActiveHotspot] = useState<number>(hotspots[0]?.id ?? 1);

  const selected = hotspots.find((h) => h.id === activeHotspot) || hotspots[0];

  return (
    <div
      className={cn(
        "p-6 sm:p-8 md:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--surface-border)] shadow-xl space-y-8",
        className
      )}
    >
      {/* Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--surface-border)]">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
              Micro-Interaction Inspector
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] font-medium">
            {title}
          </h3>
          {subtitle && (
            <p className="font-sans text-sm text-[var(--text-secondary)] mt-1 max-w-xl">
              {subtitle}
            </p>
          )}
        </div>

        <span className="font-mono text-xs text-[var(--text-tertiary)] self-start sm:self-auto bg-[var(--bg-sage)] px-3 py-1.5 rounded-full border border-[var(--surface-border)]">
          Click numbered pins to inspect
        </span>
      </div>

      {/* Screen & Pins Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Device screen with Hotspot Pins */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[300px] sm:max-w-[320px] p-2.5 rounded-[2.8rem] bg-black border border-[#4a4b50] shadow-2xl">
            {/* Dynamic Screen */}
            <div className="relative rounded-[2.3rem] overflow-hidden bg-white ring-1 ring-black">
              <img src={imageSrc} alt={imageAlt} className="w-full h-auto block select-none" />

              {/* Hotspot Pins Overlay */}
              {hotspots.map((h) => {
                const isActive = h.id === activeHotspot;
                return (
                  <button
                    key={h.id}
                    onClick={() => setActiveHotspot(h.id)}
                    aria-label={`Inspect ${h.title}`}
                    style={{
                      left: `${h.xPercent}%`,
                      top: `${h.yPercent}%`,
                    }}
                    className={cn(
                      "absolute -translate-x-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all duration-300 shadow-lg",
                      isActive
                        ? "bg-[var(--accent-gold)] text-[var(--bg-sage)] scale-110 ring-4 ring-[var(--accent-gold)]/40"
                        : "bg-[var(--bg-sage)]/90 text-[var(--accent-gold)] border border-[var(--accent-gold)]/60 hover:scale-105"
                    )}
                  >
                    <span className="relative z-10">{h.id}</span>
                    {isActive && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-[var(--accent-gold)]/60 pointer-events-none" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Hotspot details sidebar */}
        <div className="lg:col-span-6 space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {hotspots.map((h) => {
              const isActive = h.id === activeHotspot;
              return (
                <div
                  key={h.id}
                  onClick={() => setActiveHotspot(h.id)}
                  className={cn(
                    "cursor-pointer p-4 sm:p-5 rounded-2xl border transition-all duration-300",
                    isActive
                      ? "bg-[var(--bg-sage)] border-[var(--accent-gold)] shadow-md translate-x-1"
                      : "bg-[var(--bg-sage)]/50 border-[var(--surface-border)] hover:bg-[var(--bg-sage)]/80 hover:border-[var(--surface-border-strong)]"
                  )}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={cn(
                          "w-5 h-5 rounded-full font-mono text-[11px] font-bold flex items-center justify-center",
                          isActive
                            ? "bg-[var(--accent-gold)] text-[var(--bg-sage)]"
                            : "bg-[var(--bg-surface)] text-[var(--text-tertiary)] border border-[var(--surface-border)]"
                        )}
                      >
                        {h.id}
                      </span>
                      <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-gold)] font-semibold">
                        {h.category}
                      </span>
                    </div>

                    {isActive && (
                      <span className="font-mono text-[10px] text-emerald-400 font-semibold uppercase tracking-wider">
                        Active Pin
                      </span>
                    )}
                  </div>

                  <h4 className="font-serif text-lg text-[var(--text-primary)] font-medium mb-1.5">
                    {h.title}
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {h.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
