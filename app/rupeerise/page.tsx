import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";

export default function RupeeRisePage() {
    return (
        <CaseStudyTemplate
            title="RupeeRise"
            role="UX Researcher & Designer"
            timeline="3 Months"
            tags={["Fintech", "Behavioral Economics", "Gamification"]}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4">The Challenge</h2>
                    <p className="text-[#cadcd5] leading-relaxed">
                        New investors often struggle to understand the risks associated with stock markets.
                        RupeeRise aims to bridge the gap between simulation and real-world trading without exposing users to immediate financial danger.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#F4F1E8] mb-6">Design Strategy</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#a7f36f]">Behavioral Guardrails</h3>
                            <p className="text-[#cadcd5]">
                                Implemented &quot;speed bumps&quot; in the user journey—friction points intentionally designed to make users pause and reconsider before making high-risk trades.
                            </p>
                            <GlassImagePlaceholder label="Pre-Trade Confirmation Warning UI" />
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-semibold text-[#a7f36f]">Simulation to Real-World Transition</h3>
                            <p className="text-[#cadcd5]">
                                A graduated account system where users start in a sandbox environment and unlock real trading features only after demonstrating understanding of risk principles.
                            </p>
                            <GlassImagePlaceholder label="Progress & Unlock System Visual" />
                        </div>
                    </div>
                </section>
            </div>
        </CaseStudyTemplate>
    );
}
