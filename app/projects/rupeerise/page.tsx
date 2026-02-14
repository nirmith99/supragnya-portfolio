import FooterSection from "@/components/sections/FooterSection";
import OtherProjectsSection from "@/components/sections/OtherProjectsSection";
import ProjectCaseStudySection from "@/components/sections/ProjectCaseStudySection";
import ProjectHeroSection from "@/components/sections/ProjectHeroSection";

export default function RupeeRiseProjectPage() {
  return (
    <main>
      <ProjectHeroSection
        title="RupeeRise"
        subtitle="A financial behavior design project focused on clarity, trust, and daily progress."
        meta="Fintech UX | Product Thinking | Interface Design"
      />
      <ProjectCaseStudySection
        heading="Problem Space"
        body="Users needed a reliable way to understand spending habits and take practical savings actions without navigating dense dashboards."
        points={[
          "Defined a lightweight onboarding flow to establish financial context quickly.",
          "Structured insights into actionable daily and weekly moments.",
          "Designed trust signals around data transparency and privacy language."
        ]}
      />
      <ProjectCaseStudySection
        heading="Design Approach"
        body="The case study balances long-term planning with short-term motivation through intentional content hierarchy and friction-aware interaction patterns."
        points={[
          "Introduced card-based prioritization to reduce visual overload.",
          "Designed narrative progress components to support habit reinforcement.",
          "Built a reusable UI system for growth-stage product velocity."
        ]}
        delayMs={100}
      />
      <ProjectCaseStudySection
        heading="Outcome Snapshot"
        body="Placeholder summary: this section is prepared for quantified impact, feature rollout notes, and user sentiment evidence."
        points={[
          "Higher feature discoverability for core budgeting actions.",
          "Clearer mental model of short-term vs long-term goals.",
          "Improved engagement continuity through guided checkpoints."
        ]}
        delayMs={200}
      />
      <OtherProjectsSection currentProject="rupeerise" delayMs={300} />
      <FooterSection />
    </main>
  );
}
