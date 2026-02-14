import FooterSection from "@/components/sections/FooterSection";
import OtherProjectsSection from "@/components/sections/OtherProjectsSection";
import ProjectCaseStudySection from "@/components/sections/ProjectCaseStudySection";
import ProjectHeroSection from "@/components/sections/ProjectHeroSection";

export default function UdyogaPramodaProjectPage() {
  return (
    <main>
      <ProjectHeroSection
        title="Udyoga Pramoda"
        subtitle="A platform concept connecting job readiness with structured, guided experiences."
        meta="Career Platform | Service Design | Product UX"
      />
      <ProjectCaseStudySection
        heading="Problem Space"
        body="Early-career users faced fragmented preparation tools and limited feedback loops. The challenge was creating a cohesive, confidence-building journey."
        points={[
          "Mapped end-to-end user intent from discovery to readiness milestones.",
          "Simplified complex pathways into staged progression checkpoints.",
          "Designed clear status feedback to reduce uncertainty at each step."
        ]}
      />
      <ProjectCaseStudySection
        heading="Design Approach"
        body="The interaction model emphasized editorial clarity, focused calls-to-action, and deliberate pacing to keep users oriented."
        points={[
          "Built modular task templates for learning, assessment, and reflection.",
          "Created scannable layouts for mentors and hiring stakeholders.",
          "Validated navigation logic through iterative prototype walkthroughs."
        ]}
        delayMs={100}
      />
      <ProjectCaseStudySection
        heading="Outcome Snapshot"
        body="Placeholder summary: this section is structured for final outcomes, adoption trends, and design iteration highlights."
        points={[
          "Improved task completion flow across readiness milestones.",
          "Stronger perceived guidance during high-friction stages.",
          "Foundation established for scalable mentor-user touchpoints."
        ]}
        delayMs={200}
      />
      <OtherProjectsSection currentProject="udyoga-pramoda" delayMs={300} />
      <FooterSection />
    </main>
  );
}
