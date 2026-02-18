import Section from "@/components/ui/Section";

type ProjectHeroSectionProps = {
  title: string;
  subtitle: string;
  meta: string;
};

export default function ProjectHeroSection({
  title,
  subtitle,
  meta
}: ProjectHeroSectionProps) {
  return (
    <Section
      reveal={false}
      className="bg-[var(--bg-charcoal)] py-24 text-[var(--text-primary)] md:py-28"
      containerClassName="space-y-6"
    >
      <p className="text-sm uppercase tracking-[0.14em] text-[var(--text-secondary)]">{meta}</p>
      <h1 className="max-w-[960px] text-[clamp(2.3rem,6vw,3.9rem)] font-semibold leading-[1.04] tracking-[-0.02em]">
        {title}
      </h1>
      <p className="max-w-[680px] text-[1.05rem] leading-relaxed text-[#B3B3B3]">{subtitle}</p>
    </Section>
  );
}
