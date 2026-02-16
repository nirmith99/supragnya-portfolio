import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";

export default function RupeeRisePage() {
    return (
        <CaseStudyTemplate
            title="RupeeRise"
            role="Lead Product Designer"
            timeline="14-day hackathon"
            tags={["Fintech", "Behavioral Economics", "Mobile-first"]}
        >
            <div className="space-y-16">
                {/* Intro / Context */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#F4F1E8]">Designing for safe financial behaviour, not just financial knowledge</h2>
                    <div className="grid md:grid-cols-2 gap-8 text-[#cadcd5] leading-relaxed">
                        <div>
                            <h3 className="text-[#a7f36f] font-semibold text-lg mb-2">1. Context</h3>
                            <p>
                                The hackathon brief focused on improving financial literacy among teenagers and young earners.
                                The initial assumption was that users lacked financial knowledge, and that better tracking and education could solve the problem.
                            </p>
                            <p className="mt-4">
                                However, during exploration, it became clear that exposure to financial tools had increased significantly. Many users already had access to investing apps and financial content.
                                The challenge was not access. <span className="text-[#F4F1E8] font-medium">It was behaviour.</span>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#a7f36f] font-semibold text-lg mb-2">2. Refined Problem</h3>
                            <ul className="list-disc pl-5 space-y-2 mb-4">
                                <li>Young earners are exposed to investing early.</li>
                                <li>Influenced by short-term gain narratives.</li>
                                <li>Often feel anxious or overconfident.</li>
                                <li>Lack structured progression before risking real money.</li>
                            </ul>
                            <p className="italic border-l-2 border-[#a7f36f] pl-4">
                                The real gap was not information. It was the absence of behavioural guardrails.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Constraints & Research */}
                <section className="space-y-6">
                    <h2 className="text-2xl font-bold text-[#F4F1E8] border-b border-[#a7f36f]/20 pb-4">Process & Discovery</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-[#a7f36f] font-semibold text-lg mb-2">3. Constraints</h3>
                            <ul className="space-y-2 text-[#cadcd5]">
                                <li>• 14-day timeline (parallel to full-time role)</li>
                                <li>• Research conducted during weekday evenings</li>
                                <li>• Design and prototyping over weekends</li>
                            </ul>
                            <p className="text-[#cadcd5] mt-4 text-sm">
                                Given the time constraint, the goal was not scale validation, but clarity of direction and responsible system design.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#a7f36f] font-semibold text-lg mb-2">4. Research Snapshot</h3>
                            <div className="space-y-4 text-[#cadcd5]">
                                <div>
                                    <strong className="block text-[#F4F1E8] text-sm uppercase tracking-wide">Key Observations</strong>
                                    <ul className="list-disc pl-5 mt-1 space-y-1">
                                        <li>Users fear irreversible financial loss.</li>
                                        <li>Financial dashboards often increase anxiety instead of clarity.</li>
                                        <li>Beginners either avoid investing completely or jump in impulsively.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Core Metric */}
                <section className="bg-[#022c22]/30 p-8 rounded-2xl border border-[#a7f36f]/10">
                    <h3 className="text-[#a7f36f] font-semibold text-lg mb-4">5. Core Metric</h3>
                    <p className="text-xl md:text-2xl text-[#F4F1E8] font-light leading-normal">
                        Behavioural progression toward stable financial decision-making.
                    </p>
                    <p className="text-[#cadcd5] mt-4">
                        Success is defined by behavioural maturity (consistent tracking, simulation engagement), not just transaction volume.
                    </p>
                </section>

                {/* Product Structure */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold text-[#F4F1E8] border-b border-[#a7f36f]/20 pb-4">6. Product Structure — Four Supporting Pillars</h2>

                    <div className="grid gap-8">
                        {/* Pillar 1 */}
                        <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                            <div className="order-2 md:order-1">
                                <GlassImagePlaceholder label="Behaviour Awareness UI" />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-xl font-bold text-[#a7f36f] mb-2">1️⃣ Behaviour Awareness</h3>
                                <p className="text-[#cadcd5] mb-2">
                                    Tracking is included not as a generic feature, but as a behavioural signal layer.
                                    It identifies discretionary spending patterns and enables context-based nudges.
                                </p>
                                <p className="text-sm text-[#a7f36f]/80 uppercase tracking-wide">Purpose: Ensure investment decisions are grounded in real capacity.</p>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#a7f36f] mb-2">2️⃣ Structured Learning</h3>
                                <p className="text-[#cadcd5] mb-2">
                                    Learning modules simplify key financial concepts and validate understanding through short quizzes.
                                    Learning acts as confidence building and progress gating.
                                </p>
                                <p className="text-sm text-[#a7f36f]/80 uppercase tracking-wide">Purpose: Knowledge as readiness, not as isolated content.</p>
                            </div>
                            <div>
                                <GlassImagePlaceholder label="Education Modules UI" />
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                            <div className="order-2 md:order-1">
                                <GlassImagePlaceholder label="Simulation Dashboard" />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-xl font-bold text-[#a7f36f] mb-2">3️⃣ Simulation Before Capital</h3>
                                <p className="text-[#cadcd5] mb-2">
                                    All users begin with simulation using real market data to experience volatility safely and understand price movement emotionally.
                                </p>
                                <p className="text-sm text-[#a7f36f]/80 uppercase tracking-wide">Purpose: Practice before risk.</p>
                            </div>
                        </div>

                        {/* Pillar 4 */}
                        <div className="grid md:grid-cols-[2fr_1fr] gap-6">
                            <div>
                                <h3 className="text-xl font-bold text-[#a7f36f] mb-2">4️⃣ Adaptive Guardrails</h3>
                                <p className="text-[#cadcd5] mb-2">
                                    The system adjusts friction based on behavioural maturity:
                                </p>
                                <ul className="list-disc pl-5 text-[#cadcd5] mb-2 space-y-1">
                                    <li><strong>Guarded Mode</strong>: Higher friction, strict caps.</li>
                                    <li><strong>Guided Mode</strong>: Moderate friction.</li>
                                    <li><strong>Autonomous Mode</strong>: Lower friction, critical alerts remain active.</li>
                                </ul>
                                <p className="text-sm text-[#a7f36f]/80 uppercase tracking-wide">Purpose: Encourage independence without removing safety.</p>
                            </div>
                            <div>
                                <GlassImagePlaceholder label="Guardrails & Modes UI" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interaction Philosophy & Monetization */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#F4F1E8]">7. Interaction Philosophy</h2>
                        <p className="text-[#cadcd5]">
                            <strong>Primary tone</strong>: Calming<br />
                            <strong>Secondary</strong>: Stabilising<br />
                            <strong>Tertiary</strong>: Light gamification
                        </p>
                        <p className="text-[#cadcd5]">
                            Design choices reflect this with progress-first home screens, clear hierarchy, and no urgency-based notifications.
                            The product intentionally avoids stimulation-driven engagement.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-xl font-bold text-[#F4F1E8]">8. Monetization (Long-Term)</h2>
                        <ul className="list-disc pl-5 text-[#cadcd5] space-y-2">
                            <li>Mentor sessions</li>
                            <li>Advanced analytics</li>
                            <li>Goal-aligned financial partnerships</li>
                        </ul>
                        <p className="text-[#cadcd5] text-sm opacity-80">
                            High-risk asset promotion or impulse-driven advertising would contradict the system’s philosophy and are intentionally excluded.
                        </p>
                    </div>
                </section>

                {/* Validation & Reflection */}
                <section className="space-y-8 border-t border-[#a7f36f]/10 pt-8">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h2 className="text-xl font-bold text-[#F4F1E8] mb-4">9. Validation & Feedback</h2>
                            <p className="text-[#cadcd5] mb-4">
                                During the hackathon, users responded positively to the simulation-first approach. Progress framing felt less stressful than balance-heavy dashboards.
                            </p>
                            <p className="text-[#cadcd5]">
                                Jury feedback acknowledged the responsible structure and system-level thinking, while noting the need for long-term validation to measure sustained behavioural change.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-[#F4F1E8] mb-4">10. Reflection</h2>
                            <div className="bg-[#a7f36f]/5 p-6 rounded-xl border border-[#a7f36f]/10">
                                <p className="text-[#F4F1E8] italic mb-4">
                                    &quot;RupeeRise began as a financial literacy concept. It evolved into a behaviour-first financial system.&quot;
                                </p>
                                <p className="text-[#cadcd5] text-sm">
                                    The key learning was that designing for financial behaviour requires balancing autonomy and guardrails.
                                    Reducing risk is not about restricting users permanently, but about guiding them toward stable independence.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </CaseStudyTemplate>
    );
}
