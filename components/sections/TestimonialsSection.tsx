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
  };

  const simpleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Section
      delayMs={delayMs}
      reveal={false}
      className="section-block py-20 md:py-24"
      containerClassName="space-y-16"
    >
      <header className="layout-padding space-y-4">
        <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-[#a7f36f] font-semibold">Testimonials</p>
        <h2 className="max-w-[900px] text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.035em] text-white font-heading">
          Trusted by teams building <span className="text-[#a7f36f]">high-impact</span> products.
        </h2>
      </header>
      <div className="layout-padding grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <motion.blockquote
            key={testimonial.quote}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={shouldReduceMotion ? simpleVariants : cardVariants}
            transition={{ delay: index * 0.1 }}
            className="bg-white/5 backdrop-blur-md p-8 rounded-xl border-l-[3px] border-[#a7f36f] transition-all duration-300 hover:bg-white/10 hover:shadow-lg group"
          >
            <p className="text-lg md:text-xl leading-relaxed text-white font-light opacity-90">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-8 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#a7f36f] flex items-center justify-center text-black font-bold text-sm">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{testimonial.name}</p>
                <p className="text-xs text-[#C0C0C0] uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
});

export default TestimonialsSection;
