import { memo } from "react";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

type AboutPreviewSectionProps = {
  delayMs?: number;
};

const AboutPreviewSection = memo(function AboutPreviewSection({ delayMs = 0 }: AboutPreviewSectionProps) {
  return (
    <Section
      delayMs={delayMs}
      className="section-block py-20 md:py-24"
      containerClassName="space-y-8"
    >
      <div className="space-y-6 md:space-y-8">
        <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-[#a7f36f] font-semibold">
          About
        </p>
        <h2 className="max-w-[900px] text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.035em] text-[#F4F1E8]">
          I design for teams that need <span className="bg-gradient-to-r from-[#a7f36f] to-[#b8ff80] bg-clip-text text-transparent">structure</span>, momentum, and confidence.
        </h2>
      </div>
      <p className="max-w-[700px] text-base md:text-lg leading-relaxed text-[#C9D2CC] font-light">
        My practice combines systems thinking, strategic framing, and detail-driven interaction
        design. I focus on making complexity understandable so teams can move faster with fewer
        blind spots.
      </p>
      <div className="pt-4">
        <Button
          href="/about"
          className="transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_rgba(167,243,111,0.24)] focus-visible:ring-offset-[#061F18]"
        >
          About Me
        </Button>
      </div>
    </Section>
  );
});

export default AboutPreviewSection;
