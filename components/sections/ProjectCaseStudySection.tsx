import Section from "@/components/ui/Section";

type ProjectCaseStudySectionProps = {
  heading: string;
  body: string;
  points: string[];
  delayMs?: number;
};

export default function ProjectCaseStudySection({
  heading,
  body,
  points,
  delayMs = 0
}: ProjectCaseStudySectionProps) {
  return (
    <Section
      delayMs={delayMs}
      className="bg-[var(--bg-surface)] py-16 md:py-20"
      containerClassName="grid gap-8 md:grid-cols-[0.36fr_0.64fr]"
    >
      <h2 className="text-[2rem] font-semibold leading-tight text-[#111111]">{heading}</h2>
      <div className="space-y-6">
        <p className="max-w-[680px] text-[1.03rem] leading-relaxed text-[#3D3D3D]">{body}</p>
        <ul className="space-y-2 text-base leading-relaxed text-[#343434]">
          {points.map((point) => (
            <li key={point}>- {point}</li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
