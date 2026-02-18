"use client";

import { memo } from "react";
import Section from "@/components/ui/Section";
import { motion, useReducedMotion } from "framer-motion";

type TestimonialsSectionProps = {
  delayMs?: number;
};

const testimonials = [
  {
    quote:
      "Supragnya has the rare ability to turn complex workflows into intuitive experiences without losing operational precision.",
    name: "Product Lead",
    role: "B2B Platform Team"
  },
  {
    quote:
      "Her design thinking consistently improves team alignment. We ship faster because the problem framing is always clear.",
    name: "Engineering Manager",
    role: "Digital Services Organization"
  }
];

const TestimonialsSection = memo(function TestimonialsSection({ delayMs = 0 }: TestimonialsSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const cardVariants = {
    hidden: { opacity: 0, rotateX: 10, y: 30 },
    visible: {
      opacity: 1,
      rotateX: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      } as any
    }
  } as any;

  const simpleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Section
      delayMs={delayMs}
      reveal={false}
      className="section-block py-20 md:py-32"
      containerClassName="space-y-16"
    >
      <div className="w-full h-[1px] bg-[#8B5E3C] opacity-20 mb-20" /> {/* Section Divider */}
      <header className="layout-padding space-y-4 text-center">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#8B5E3C] font-semibold">Testimonials</p>
        <h2 className="max-w-[900px] mx-auto text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.035em] text-[#121212] font-heading">
          Trusted by teams building <span className="font-serif-italic font-normal text-[#8B5E3C]">high-impact</span> products.
        </h2>
      </header>
      <div className="layout-padding grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.quote}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            variants={shouldReduceMotion ? simpleVariants : cardVariants}
            transition={{ delay: index * 0.1 }}
            className="bg-[var(--bg-surface)] p-10 rounded-[24px] border border-black/5 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-1 h-full bg-[#8B5E3C] opacity-0 group-hover:opacity-100 transition-opacity" />
            <p className="text-lg md:text-xl leading-relaxed text-[var(--text-secondary)] font-light italic">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#8B5E3C] flex items-center justify-center text-white font-bold text-sm">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-[#121212] text-sm">{testimonial.name}</p>
                <p className="text-xs text-[var(--text-tertiary)] uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
});

export default TestimonialsSection;
