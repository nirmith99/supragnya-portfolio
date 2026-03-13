"use client"

import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    date?: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  className,
}: TestimonialsSectionProps) {
  // Duplicate enough times to guarantee seamless infinite scroll
  const repeated = [...testimonials, ...testimonials, ...testimonials, ...testimonials]

  return (
    <section
      className={cn(
        "w-full py-20 lg:py-32 overflow-hidden",
        "bg-[var(--bg-sage)] text-[var(--text-primary)]",
        "border-t border-[var(--surface-border)]",
        className
      )}
    >
      <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-12 lg:gap-20">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 px-6 text-center">
          {/* Archival eyebrow */}
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] opacity-50">
            Endorsements
          </p>
          <h2 className="font-serif text-[clamp(2.5rem,4vw,4.5rem)] font-medium tracking-tight max-w-[720px]">
            {title}
          </h2>
          <p className="text-base max-w-[560px] text-[var(--text-secondary)] leading-relaxed">
            {description}
          </p>
        </div>

        {/* ── Marquee Track ── */}
        <div className="relative w-full flex flex-col items-center">
          {/* The scrolling row */}
          <div className="group flex overflow-hidden [--gap:1.25rem] [--duration:40s] w-full">
            {/* Single animated strip — we duplicate the list to create seamless loop */}
            <div
              className={cn(
                "flex shrink-0 justify-around [gap:var(--gap)]",
                "animate-marquee",
                "group-hover:[animation-play-state:paused]"
              )}
            >
              {repeated.map((testimonial, i) => (
                <TestimonialCard
                  key={i}
                  author={testimonial.author}
                  text={testimonial.text}
                  date={testimonial.date}
                  href={testimonial.href}
                />
              ))}
            </div>
          </div>

          {/* Fade edge masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-40 bg-gradient-to-r from-[var(--bg-sage)] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-40 bg-gradient-to-l from-[var(--bg-sage)] to-transparent z-10" />
        </div>
      </div>
    </section>
  )
}
