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

export default function TestimonialsSection({ delayMs = 0 }: TestimonialsSectionProps) {
  return (
    <Section
      delayMs={delayMs}
      className="bg-[#F5F1E8] py-24 md:py-28"
      containerClassName="space-y-10"
    >
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.14em] text-[#5A5A5A]">Testimonials</p>
        <h2 className="text-[32px] font-semibold leading-tight text-[#141414]">
          Trusted by teams building high-impact digital products.
        </h2>
      </header>
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((testimonial) => (
          <blockquote
            key={testimonial.quote}
            className="border-l-2 border-[#0F3D2E] pl-5 text-[#2B2B2B]"
          >
            <p className="text-lg leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
            <footer className="mt-4 text-sm text-[#545454]">
              <p className="font-semibold text-[#1D1D1D]">{testimonial.name}</p>
              <p>{testimonial.role}</p>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
