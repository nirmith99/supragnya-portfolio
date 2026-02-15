import Section from "@/components/ui/Section";
import ThumbnailCard from "@/components/ui/ThumbnailCard";

type OtherProjectsSectionProps = {
  currentProject: "emergency-response" | "rupeerise" | "udyoga-pramoda";
  delayMs?: number;
};

const projects = [
  {
    slug: "emergency-response" as const,
    title: "Emergency Response App",
    description:
      "A rapid-response product designed for speed, alignment, and confident operational decisions.",
    href: "/projects/emergency-response",
    imageSrc: "/images/projects/emergency-real.png",
    imageAlt: "Emergency Response App thumbnail"
  },
  {
    slug: "rupeerise" as const,
    title: "RupeeRise",
    description:
      "A focused fintech experience helping users build clarity and momentum around financial behavior.",
    href: "/projects/rupeerise",
    imageSrc: "/images/projects/rupeerise-real.png",
    imageAlt: "RupeeRise thumbnail"
  },
  {
    slug: "udyoga-pramoda" as const,
    title: "Udyoga Pramoda",
    description:
      "A structured platform concept for career readiness with guided pathways and progress visibility.",
    href: "/projects/udyoga-pramoda",
    imageSrc: "/images/projects/udyoga-real.png",
    imageAlt: "Udyoga Pramoda thumbnail"
  }
];

export default function OtherProjectsSection({
  currentProject,
  delayMs = 0
}: OtherProjectsSectionProps) {
  const otherProjects = projects.filter((project) => project.slug !== currentProject);

  return (
    <Section
      delayMs={delayMs}
      className="bg-[#F5F1E8] py-20 md:py-28"
      containerClassName="space-y-16"
    >
      <header className="space-y-4">
        <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-[#5a5a5a] font-semibold">Other Projects</p>
        <h2 className="max-w-[800px] text-4xl md:text-5xl font-bold leading-[1.15] text-[#141414]">
          Explore related case studies.
        </h2>
      </header>
      <div className="space-y-0 divide-y divide-[#ddd]">
        {otherProjects.map((project) => (
          <ThumbnailCard
            key={project.slug}
            title={project.title}
            description={project.description}
            href={project.href}
            imageSrc={project.imageSrc}
            imageAlt={project.imageAlt}
            parallax={false}
          />
        ))}
      </div>
    </Section>
  );
}
