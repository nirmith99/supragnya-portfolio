import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

type AboutPreviewSectionProps = {
  delayMs?: number;
};

export default function AboutPreviewSection({ delayMs = 0 }: AboutPreviewSectionProps) {
  return (
    <Section
      delayMs={delayMs}
      className="bg-[#F5F1E8] py-24 md:py-28"
      containerClassName="space-y-8"
    >
      <p className="text-sm uppercase tracking-[0.14em] text-[#5A5A5A]">About</p>
      <h2 className="max-w-[680px] text-[32px] font-semibold leading-tight text-[#141414]">
        I design for teams that need structure, momentum, and confidence at scale.
      </h2>
      <p className="max-w-[680px] text-[1.05rem] leading-relaxed text-[#3B3B3B]">
        My practice combines systems thinking, strategic framing, and detail-driven interaction
        design. I focus on making complexity understandable so teams can move faster with fewer
        blind spots.
      </p>
      <Button href="/about" className="focus-visible:ring-offset-[#F5F1E8]">
        About Me
      </Button>
    </Section>
  );
}
