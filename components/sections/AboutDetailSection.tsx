import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";

export default function AboutDetailSection() {
  return (
    <>
      <Section className="bg-[#F5F1E8] py-24 md:py-28" containerClassName="space-y-6">
        <p className="text-sm uppercase tracking-[0.14em] text-[#5A5A5A]">About Supragnya</p>
        <h1 className="max-w-[680px] text-[clamp(2.2rem,5vw,3.2rem)] font-semibold leading-tight text-[#111111]">
          UX/UI and Product Designer focused on clarity-led systems.
        </h1>
        <p className="max-w-[680px] text-[1.05rem] leading-relaxed text-[#3B3B3B]">
          I work at the intersection of product strategy and interaction design, helping teams
          turn complex ideas into coherent, human-centered experiences. My approach balances
          curiosity, critical thinking, and execution discipline.
        </p>
      </Section>

      <Section
        delayMs={100}
        className="bg-[#F5F1E8] pb-24 md:pb-28"
        containerClassName="grid gap-12 md:grid-cols-3"
      >
        <article className="space-y-4 md:col-span-1">
          <h2 className="text-[2rem] font-semibold leading-tight text-[#111111]">Design Philosophy</h2>
          <p className="text-base leading-relaxed text-[#3F3F3F]">
            Good design is clear under pressure. I prioritize information structure, intention,
            and practical outcomes so users can act with confidence.
          </p>
        </article>
        <article className="space-y-4 md:col-span-1">
          <h2 className="text-[2rem] font-semibold leading-tight text-[#111111]">Work Values</h2>
          <ul className="space-y-2 text-base leading-relaxed text-[#3F3F3F]">
            <li>Systems over isolated screens.</li>
            <li>Evidence over assumptions.</li>
            <li>Collaboration over handoffs.</li>
            <li>Craft with accountability.</li>
          </ul>
        </article>
        <article className="space-y-4 md:col-span-1">
          <h2 className="text-[2rem] font-semibold leading-tight text-[#111111]">Resume</h2>
          <p className="text-base leading-relaxed text-[#3F3F3F]">
            Download a concise overview of my project history, capabilities, and outcomes.
          </p>
          <Button
            href="/resume-placeholder.pdf"
            download
            className="focus-visible:ring-offset-[#F5F1E8]"
          >
            Download Resume
          </Button>
        </article>
      </Section>
    </>
  );
}
