"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Clock, ShieldAlert, Activity, Users, CheckCircle2, ChevronRight } from "lucide-react";

export interface TimelineStep {
  timeWindow: string;
  stage: string;
  headline: string;
  details: string;
  role: string;
  indicatorColor: string;
  deliverable: string;
}

interface WorkflowTimelineProps {
  title: string;
  subtitle?: string;
  steps: TimelineStep[];
  className?: string;
}

export default function WorkflowTimeline({
  title,
  subtitle,
  steps,
  className,
}: WorkflowTimelineProps) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div
      className={cn(
        "p-6 sm:p-8 md:p-10 rounded-3xl bg-[var(--bg-surface)] border border-[var(--surface-border)] shadow-xl space-y-8",
        className
      )}
    >
      {/* Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[var(--surface-border)]">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--accent-gold)]" />
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[var(--accent-gold)]">
              Workflow & Time-to-Action Architecture
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl text-[var(--text-primary)] font-medium">
            {title}
          </h3>
          {subtitle && (
            <p className="font-sans text-sm md:text-base text-[var(--text-secondary)] max-w-xl">
              {subtitle}
            </p>
          )}
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-sage)] border border-[var(--surface-border)] text-xs font-mono text-[var(--accent-gold)] font-bold">
          <Clock className="w-3.5 h-3.5" />
          <span>30-Second Target Window</span>
        </div>
      </div>

      {/* Progress Bar with Steps */}
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {steps.map((s, idx) => {
            const isSelected = idx === activeStep;
            return (
              <button
                key={s.stage}
                onClick={() => setActiveStep(idx)}
                className={cn(
                  "p-5 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden group",
                  isSelected
                    ? "bg-[var(--bg-sage)] border-[var(--accent-gold)] shadow-lg"
                    : "bg-[var(--bg-sage)]/50 border-[var(--surface-border)] hover:bg-[var(--bg-sage)]/80 hover:border-[var(--surface-border-strong)]"
                )}
              >
                {/* Top accent strip */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300"
                  style={{ backgroundColor: s.indicatorColor, opacity: isSelected ? 1 : 0.4 }}
                />

                <div className="flex items-center justify-between mb-3 pt-1">
                  <span
                    className="font-mono text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border"
                    style={{
                      color: s.indicatorColor,
                      borderColor: `${s.indicatorColor}40`,
                      backgroundColor: `${s.indicatorColor}15`,
                    }}
                  >
                    {s.timeWindow}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
                    Step {idx + 1}
                  </span>
                </div>

                <h4 className="font-serif text-lg font-medium text-[var(--text-primary)] mb-1">
                  {s.stage}
                </h4>
                <p className="font-sans text-xs text-[var(--text-secondary)] line-clamp-2">
                  {s.headline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep-Dive */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-sage)] border border-[var(--surface-border)]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            <div className="md:col-span-8 space-y-4">
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: steps[activeStep].indicatorColor }}
                />
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-tertiary)]">
                  Active Operational Phase: {steps[activeStep].timeWindow}
                </span>
              </div>

              <h4 className="font-serif text-2xl text-[var(--text-primary)] font-medium">
                {steps[activeStep].headline}
              </h4>

              <p className="font-sans text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                {steps[activeStep].details}
              </p>
            </div>

            <div className="md:col-span-4 p-4 rounded-xl bg-[var(--bg-surface)] border border-[var(--surface-border)] space-y-3">
              <div>
                <span className="font-mono text-[10px] text-[var(--accent-gold)] uppercase tracking-wider block font-semibold">
                  Primary Responder
                </span>
                <span className="font-sans text-sm font-medium text-[var(--text-primary)]">
                  {steps[activeStep].role}
                </span>
              </div>
              <div className="pt-2 border-t border-[var(--surface-border)]">
                <span className="font-mono text-[10px] text-[var(--accent-gold)] uppercase tracking-wider block font-semibold">
                  Design Solution
                </span>
                <span className="font-sans text-xs text-[var(--text-secondary)] leading-relaxed block mt-0.5">
                  {steps[activeStep].deliverable}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
