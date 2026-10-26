"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { CheckCircle2, AlertCircle, ArrowRight, Layers, Sparkles } from "lucide-react";

interface CompareOption {
  badge: string;
  badgeType: "before" | "after";
  title: string;
  imageSrc: string;
  imageAlt: string;
  caption: string;
  highlights: string[];
}

interface InteractiveCompareProps {
  id?: string;
  title: string;
  subtitle?: string;
  whyRationale: string;
  before: CompareOption;
  after: CompareOption;
  className?: string;
}

export default function InteractiveCompare({
  id,
  title,
  subtitle,
  whyRationale,
  before,
  after,
  className,
}: InteractiveCompareProps) {
  const [activeTab, setActiveTab] = useState<"after" | "before">("after");

  const current = activeTab === "after" ? after : before;

  return (
    <div
      id={id}
      className={cn(
        "p-6 sm:p-8 md:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--surface-border)] shadow-xl space-y-8",
        className
      )}
    >
      {/* Header & Mode Switcher */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--surface-border)]">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
              Interactive Decision Inspector
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] font-medium tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Tab Switcher */}
        <div className="inline-flex p-1.5 rounded-full bg-[var(--bg-sage)] border border-[var(--surface-border)] shrink-0 self-start md:self-auto">
          <button
            onClick={() => setActiveTab("before")}
            className={cn(
              "px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2",
              activeTab === "before"
                ? "bg-red-950/50 text-red-300 border border-red-500/30 shadow-sm"
                : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
            )}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>Before: Option A</span>
          </button>

          <button
            onClick={() => setActiveTab("after")}
            className={cn(
              "px-4 py-2 rounded-full font-sans text-xs font-semibold uppercase tracking-wider transition-all duration-200 flex items-center gap-2",
              activeTab === "after"
                ? "bg-[var(--accent-gold)] text-[var(--bg-sage)] shadow-sm font-bold"
                : "text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
            )}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Shipped: Option B</span>
          </button>
        </div>
      </div>

      {/* Main Content Area: Side-by-side or focused view */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Device / Screen Preview (with smooth crossfade) */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center relative min-h-[380px] sm:min-h-[460px] p-4 sm:p-6 rounded-2xl bg-[var(--bg-sage)] border border-[var(--surface-border)] overflow-hidden">
          <div className="absolute top-4 left-4 z-10">
            <span
              className={cn(
                "px-3 py-1 rounded-full font-mono text-[11px] font-semibold uppercase tracking-wider",
                activeTab === "after"
                  ? "bg-emerald-950/60 text-emerald-400 border border-emerald-500/30"
                  : "bg-red-950/60 text-red-400 border border-red-500/30"
              )}
            >
              {current.badge}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -8 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[280px] sm:max-w-[320px] mx-auto shadow-2xl rounded-[2.5rem] overflow-hidden p-2 bg-black border border-[#4a4b50]"
            >
              <div className="rounded-[2.2rem] overflow-hidden bg-white">
                <img
                  src={current.imageSrc}
                  alt={current.imageAlt}
                  className="w-full h-auto block"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <p className="mt-4 font-mono text-xs text-[var(--text-tertiary)] text-center max-w-sm">
            {current.caption}
          </p>
        </div>

        {/* Detailed UX Analysis & Rationale */}
        <div className="lg:col-span-5 space-y-6">
          <div className="space-y-3">
            <span
              className={cn(
                "font-mono text-xs font-bold uppercase tracking-wider",
                activeTab === "after" ? "text-[var(--accent-gold)]" : "text-red-400"
              )}
            >
              {activeTab === "after" ? "SHIPPED ADVANTAGE" : "INITIAL FRICTION POINT"}
            </span>
            <h4 className="font-serif text-2xl text-[var(--text-primary)] font-medium">
              {current.title}
            </h4>
            <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {current.caption}
            </p>
          </div>

          {/* Key Bullet Highlights */}
          <div className="space-y-2.5 pt-2 border-t border-[var(--surface-border)]">
            <span className="font-mono text-[11px] text-[var(--text-tertiary)] uppercase tracking-wider block mb-1">
              UX Breakdown:
            </span>
            {current.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                <ArrowRight
                  className={cn(
                    "w-4 h-4 shrink-0 mt-0.5",
                    activeTab === "after" ? "text-[var(--accent-gold)]" : "text-red-400"
                  )}
                />
                <span>{h}</span>
              </div>
            ))}
          </div>

          {/* Strategic Rationale Box */}
          <div className="p-4 rounded-xl bg-[var(--bg-sage)] border border-[var(--surface-border)] space-y-1.5">
            <span className="font-mono text-[10px] text-[var(--accent-gold)] uppercase tracking-widest font-bold block">
              DESIGN RATIONALE (THE WHY)
            </span>
            <p className="font-sans text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              {whyRationale}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
