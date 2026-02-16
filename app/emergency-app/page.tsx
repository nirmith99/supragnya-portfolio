import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";

export default function EmergencyAppPage() {
    return (
        <CaseStudyTemplate
            title="Emergency Response App"
            role="Product Designer"
            timeline="2 Months"
            tags={["Mobile App", "Cognitive Load", "Accessibility"]}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4">Core Problem</h2>
                    <p className="text-[#cadcd5] leading-relaxed">
                        In emergency situations, every second counts. Users under high stress struggle with complex interfaces.
                        The challenge was to design an interface that could be used effectively even when the user is panicked or distracted.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#F4F1E8] mb-6">Key Focus Areas</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#a7f36f]">Reducing Cognitive Load</h3>
                            <p className="text-[#cadcd5]">
                                We stripped away all non-essential elements. The UI uses large, distinct touch targets and high-contrast typography to ensure usability in chaotic environments.
                            </p>
                            <GlassImagePlaceholder label="[Insert 2AM Readability UI Here] - Simplified Dashboard" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#a7f36f]">Separating Scanning from Acting</h3>
                            <p className="text-[#cadcd5]">
                                Information layout was restructured to allow users to grasp the situation at a glance (&quot;Scanning&quot;) before deciding on a course of action (&quot;Acting&quot;). This prevents accidental triggers while ensuring rapid response.
                            </p>
                            <GlassImagePlaceholder label="Scan vs Act Layout Diagram" />
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4">Outcome</h2>
                    <p className="text-[#cadcd5]">
                        The redesigned flow significantly reduced time-to-action in simulated stress tests, proving that behavior-first design can save lives.
                    </p>
                </section>
            </div>
        </CaseStudyTemplate>
    );
}
