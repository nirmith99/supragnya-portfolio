import FooterSection from "@/components/sections/FooterSection";
import OtherProjectsSection from "@/components/sections/OtherProjectsSection";
import ProjectCaseStudySection from "@/components/sections/ProjectCaseStudySection";
import ProjectHeroSection from "@/components/sections/ProjectHeroSection";

export default function EmergencyResponseProjectPage() {
  return (
    <main>
      <ProjectHeroSection
        title="Emergency Response App"
        subtitle="A decision-critical mobile experience for rapid incident coordination."
        meta="Crisis Operations | UX Strategy | Product Design"
      />
      <ProjectCaseStudySection
        heading="Problem Space"
        body="Emergency teams struggled with fragmented communication and inconsistent status visibility. The product needed to reduce cognitive load under pressure while preserving speed and accuracy."
        points={[
          "Designed role-specific workflows for dispatchers, responders, and supervisors.",
          "Prioritized critical actions using progressive disclosure and clear visual hierarchy.",
          "Aligned information architecture to incident lifecycle milestones."
        ]}
      />
      <ProjectCaseStudySection
        heading="Design Approach"
        body="The UX system focused on task clarity, timing sensitivity, and resilient interaction patterns across unstable network conditions."
        points={[
          "Mapped high-risk tasks and failure points through journey analysis.",
          "Built low-fidelity interaction models before introducing visual polish.",
          "Validated flows using scenario-based usability sessions."
        ]}
        delayMs={100}
      />
      <ProjectCaseStudySection
        heading="Outcome Snapshot"
        body="Placeholder summary: this section is ready for final metrics, before/after artifacts, and implementation learnings."
        points={[
          "Faster response-task completion in critical workflows.",
          "Improved team confidence through predictable interaction patterns.",
          "Scalable design tokens prepared for cross-platform rollout."
        ]}
        delayMs={200}
      />
      <OtherProjectsSection currentProject="emergency-response" delayMs={300} />
      <FooterSection />
    </main>
  );
}
