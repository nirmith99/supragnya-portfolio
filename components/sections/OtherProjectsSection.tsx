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
    imageSrc: "/images/emergency-thumbnail.png",
    imageAlt: "Emergency Response App thumbnail"
  },
  {
    slug: "rupeerise" as const,
    title: "RupeeRise",
    description:
      "A focused fintech experience helping users build clarity and momentum around financial behavior.",
    href: "/projects/rupeerise",
    imageSrc: "/images/rupeerise-thumbnail.png",
    imageAlt: "RupeeRise thumbnail"
  },
  {
    slug: "udyoga-pramoda" as const,
    title: "Udyoga Pramoda",
    description:
      "A structured platform concept for career readiness with guided pathways and progress visibility.",
    href: "/projects/udyoga-pramoda",
    imageSrc: "/images/udyoga-thumbnail.png",
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
      className="bg-[#F5F1E8] py-24 md:py-28"
      containerClassName="space-y-12"
    >
      <header className="space-y-3">
        <p className="text-sm uppercase tracking-[0.14em] text-[#5A5A5A]">Other Projects</p>
        <h2 className="text-[32px] font-semibold leading-tight text-[#141414]">
          Explore related case studies.
        </h2>
      </header>
      <div className="border-b border-black/15">
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
