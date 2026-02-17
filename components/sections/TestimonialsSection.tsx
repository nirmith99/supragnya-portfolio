"use client";

import { memo } from "react";
import Section from "@/components/ui/Section";

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
  return (
    <Section
      delayMs={delayMs}
      className="section-block py-20 md:py-24"
      containerClassName="space-y-16"
    >
      <header className="space-y-4">
        <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-[#A67C52] font-semibold">Testimonials</p>
        <h2 className="max-w-[900px] text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.035em] text-white font-heading">
          Trusted by teams building <span className="text-[#a7f36f]">high-impact</span> products.
        </h2>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.quote}
            className="border-l-2 border-[#A67C52] pl-8 py-6 transition-all duration-300 hover:border-[#a7f36f] hover:pl-10 group"
          >
            <p className="text-lg md:text-xl leading-relaxed text-white font-light">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-6 space-y-1">
              <p className="font-semibold text-[#A67C52] text-sm">{testimonial.name}</p>
              <p className="text-sm text-[#BDBDBD]">{testimonial.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
});

export default TestimonialsSection;
