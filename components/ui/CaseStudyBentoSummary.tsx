"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { AlertCircle, Target, Sparkles, CheckCircle2, Layers } from "lucide-react";

interface BentoItem {
  tag: string;
  title: string;
  description: string;
  metric?: string;
  metricLabel?: string;
}

interface CaseStudyBentoSummaryProps {
  problem: BentoItem;
  target: BentoItem;
  principle: BentoItem;
  outcome: BentoItem;
  className?: string;
}

export default function CaseStudyBentoSummary({
  problem,
  target,
  principle,
  outcome,
  className,
}: CaseStudyBentoSummaryProps) {
  return (
    <div className={cn("space-y-4", className)}>
      <div className="flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
        <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
          Executive Summary at a Glance
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Cell 1: Problem (5 cols) */}
        <div className="md:col-span-6 lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-red-400 font-semibold flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5" />
              {problem.tag}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] font-medium">
              {problem.title}
            </h4>
            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
              {problem.description}
            </p>
          </div>
          {problem.metric && (
            <div className="pt-3 border-t border-[var(--surface-border)] flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-red-400">{problem.metric}</span>
              <span className="font-mono text-xs text-[var(--text-tertiary)]">{problem.metricLabel}</span>
            </div>
          )}
        </div>

        {/* Cell 2: Target Constraint (6 cols) */}
        <div className="md:col-span-6 lg:col-span-6 p-6 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent-gold)] font-semibold flex items-center gap-1.5">
              <Target className="w-3.5 h-3.5" />
              {target.tag}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] font-medium">
              {target.title}
            </h4>
            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
              {target.description}
            </p>
          </div>
          {target.metric && (
            <div className="pt-3 border-t border-[var(--surface-border)] flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-[var(--accent-gold)]">{target.metric}</span>
              <span className="font-mono text-xs text-[var(--text-tertiary)]">{target.metricLabel}</span>
            </div>
          )}
        </div>

        {/* Cell 3: Core Principle (7 cols) */}
        <div className="md:col-span-7 p-6 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-sky-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              {principle.tag}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] font-medium">
              {principle.title}
            </h4>
            <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              {principle.description}
            </p>
          </div>
        </div>

        {/* Cell 4: Outcome & Shipped State (5 cols) */}
        <div className="md:col-span-5 p-6 sm:p-7 rounded-2xl bg-[var(--bg-surface)] border border-[var(--surface-border)] flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {outcome.tag}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl text-[var(--text-primary)] font-medium">
              {outcome.title}
            </h4>
            <p className="font-sans text-sm text-[var(--text-secondary)] leading-relaxed">
              {outcome.description}
            </p>
          </div>
          {outcome.metric && (
            <div className="pt-3 border-t border-[var(--surface-border)] flex items-baseline gap-2">
              <span className="font-mono text-2xl font-bold text-emerald-400">{outcome.metric}</span>
              <span className="font-mono text-xs text-[var(--text-tertiary)]">{outcome.metricLabel}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
