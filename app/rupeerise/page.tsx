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
            <div className="space-y-24">
                {/* Intro / Context */}
                <section className="space-y-8">
                    <h2 className="text-3xl font-bold text-white leading-tight font-heading">Designing for safe financial behaviour, not just financial knowledge</h2>
                    <div className="grid md:grid-cols-2 gap-12 text-[#BDBDBD] leading-relaxed">
                        <div>
                            <h3 className="text-[#A67C52] font-semibold text-lg mb-4">1. Context</h3>
                            <p className="mb-4">
                                The hackathon brief focused on improving financial literacy among teenagers and young earners.
                                The initial assumption was that users lacked financial knowledge, and that better tracking and education could solve the problem.
                            </p>
                            <p>
                                However, during exploration, it became clear that exposure to financial tools had increased significantly. Many users already had access to investing apps and financial content.
                                The challenge was not access. <span className="text-white font-medium">It was behaviour.</span>
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#A67C52] font-semibold text-lg mb-4">2. Refined Problem</h3>
                            <ul className="list-disc pl-5 space-y-2 mb-6">
                                <li>Young earners are exposed to investing early.</li>
                                <li>Influenced by short-term gain narratives.</li>
                                <li>Often feel anxious or overconfident.</li>
                                <li>Lack structured progression before risking real money.</li>
                            </ul>
                            <p className="italic border-l-2 border-[#a7f36f] pl-6 py-2 text-white">
                                The real gap was not information. It was the absence of behavioural guardrails.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Constraints & Research */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-6 font-heading">Process & Discovery</h2>
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-[#A67C52] font-semibold text-lg mb-4">3. Constraints</h3>
                            <ul className="space-y-2 text-[#BDBDBD]">
                                <li>• 14-day timeline (parallel to full-time role)</li>
                                <li>• Research conducted during weekday evenings</li>
                                <li>• Design and prototyping over weekends</li>
                            </ul>
                            <p className="text-[#BDBDBD] mt-6 text-sm">
                                Given the time constraint, the goal was not scale validation, but clarity of direction and responsible system design.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#A67C52] font-semibold text-lg mb-4">4. Research Snapshot</h3>
                            <div className="space-y-4 text-[#BDBDBD]">
                                <div>
                                    <strong className="block text-white text-sm uppercase tracking-wide mb-2">Key Observations</strong>
                                    <ul className="list-disc pl-5 space-y-2">
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
                <section className="bg-[#1E1E1E] p-12 rounded-lg border border-white/5">
                    <h3 className="text-[#a7f36f] font-semibold text-lg mb-6">5. Core Metric</h3>
                    <p className="text-3xl md:text-4xl text-white font-light leading-tight font-heading mb-6">
                        Behavioural progression toward stable financial decision-making.
                    </p>
                    <p className="text-[#BDBDBD] text-lg">
                        Success is defined by behavioural maturity (consistent tracking, simulation engagement), not just transaction volume.
                    </p>
                </section>

                {/* Product Structure */}
                <section className="space-y-12">
                    <h2 className="text-2xl font-bold text-white border-b border-white/10 pb-6 font-heading">6. Product Structure — Four Supporting Pillars</h2>

                    <div className="grid gap-16">
                        {/* Pillar 1 */}
                        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                            <div className="order-2 md:order-1 border border-white/10 bg-black p-2">
                                <GlassImagePlaceholder label="Behaviour Awareness UI" />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-bold text-white mb-4 font-heading">1️⃣ Behaviour Awareness</h3>
                                <p className="text-[#BDBDBD] mb-4 leading-relaxed">
                                    Tracking is included not as a generic feature, but as a behavioural signal layer.
                                    It identifies discretionary spending patterns and enables context-based nudges.
                                </p>
                                <p className="text-xs text-[#A67C52] uppercase tracking-widest">Purpose: Ensure investment decisions are grounded in real capacity.</p>
                            </div>
                        </div>

                        {/* Pillar 2 */}
                        <div className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-heading">2️⃣ Structured Learning</h3>
                                <p className="text-[#BDBDBD] mb-4 leading-relaxed">
                                    Learning modules simplify key financial concepts and validate understanding through short quizzes.
                                    Learning acts as confidence building and progress gating.
                                </p>
                                <p className="text-xs text-[#A67C52] uppercase tracking-widest">Purpose: Knowledge as readiness, not as isolated content.</p>
                            </div>
                            <div className="border border-white/10 bg-black p-2">
                                <GlassImagePlaceholder label="Education Modules UI" />
                            </div>
                        </div>

                        {/* Pillar 3 */}
                        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                            <div className="order-2 md:order-1 border border-white/10 bg-black p-2">
                                <GlassImagePlaceholder label="Simulation Dashboard" />
                            </div>
                            <div className="order-1 md:order-2">
                                <h3 className="text-2xl font-bold text-white mb-4 font-heading">3️⃣ Simulation Before Capital</h3>
                                <p className="text-[#BDBDBD] mb-4 leading-relaxed">
                                    All users begin with simulation using real market data to experience volatility safely and understand price movement emotionally.
                                </p>
                                <p className="text-xs text-[#A67C52] uppercase tracking-widest">Purpose: Practice before risk.</p>
                            </div>
                        </div>

                        {/* Pillar 4 */}
                        <div className="col-span-1 md:col-span-3">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-white mb-6 font-heading">4️⃣ Adaptive Guardrails</h3>
                                <p className="text-[#BDBDBD] mb-8 max-w-3xl leading-relaxed">
                                    The system adjusts friction based on behavioural maturity. Instead of a static interface, the UI evolves to match the user&apos;s demonstrated competence.
                                </p>

                                <div className="grid md:grid-cols-3 gap-6">
                                    {/* Mode 1 */}
                                    <div className="bg-[#1E1E1E] border border-white/5 p-8 relative group hover:bg-white/5 transition-colors">
                                        <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                        <h4 className="text-white font-bold mb-3 font-heading">Guarded Mode</h4>
                                        <p className="text-[#BDBDBD] text-sm mb-6">High friction. Strict caps on transaction volume. Mandatory cooling periods.</p>
                                        <div className="text-[10px] text-[#A67C52] uppercase tracking-widest font-mono">For Beginners</div>
                                    </div>

                                    {/* Mode 2 */}
                                    <div className="bg-[#1E1E1E] border border-white/5 p-8 relative group hover:bg-white/5 transition-colors">
                                        <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                                        <h4 className="text-white font-bold mb-3 font-heading">Guided Mode</h4>
                                        <p className="text-[#BDBDBD] text-sm mb-6">Moderate friction. Nudges appear before high-risk actions. Caps relaxed.</p>
                                        <div className="text-[10px] text-[#A67C52] uppercase tracking-widest font-mono">Validation Stage</div>
                                    </div>

                                    {/* Mode 3 */}
                                    <div className="bg-[#1E1E1E] border border-white/5 p-8 relative group hover:bg-white/5 transition-colors">
                                        <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-[#a7f36f] shadow-[0_0_10px_rgba(167,243,111,0.5)]"></div>
                                        <h4 className="text-white font-bold mb-3 font-heading">Autonomous Mode</h4>
                                        <p className="text-[#BDBDBD] text-sm mb-6">Low friction. Critical alerts remain, but decision speed is unhindered.</p>
                                        <div className="text-[10px] text-[#A67C52] uppercase tracking-widest font-mono">Trusted User</div>
                                    </div>
                                </div>

                                <p className="text-xs text-[#A67C52] uppercase tracking-widest mt-8">Purpose: Encourage independence without removing safety.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interaction Philosophy & Monetization */}
                <section className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white font-heading">7. Interaction Philosophy</h2>
                        <div className="text-[#BDBDBD] space-y-4">
                            <p>
                                <strong>Primary tone</strong>: Calming<br />
                                <strong>Secondary</strong>: Stabilising<br />
                                <strong>Tertiary</strong>: Light gamification
                            </p>
                            <p>
                                Design choices reflect this with progress-first home screens, clear hierarchy, and no urgency-based notifications.
                                The product intentionally avoids stimulation-driven engagement.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-white font-heading">8. Monetization (Long-Term)</h2>
                        <ul className="list-disc pl-5 text-[#BDBDBD] space-y-2">
                            <li>Mentor sessions</li>
                            <li>Advanced analytics</li>
                            <li>Goal-aligned financial partnerships</li>
                        </ul>
                        <p className="text-[#BDBDBD] text-sm opacity-60">
                            High-risk asset promotion or impulse-driven advertising would contradict the system’s philosophy and are intentionally excluded.
                        </p>
                    </div>
                </section>

                {/* Validation & Reflection */}
                <section className="space-y-12 border-t border-white/10 pt-12">
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <h2 className="text-xl font-bold text-white mb-6 font-heading">9. Validation & Feedback</h2>
                            <p className="text-[#BDBDBD] mb-6">
                                During the hackathon, users responded positively to the simulation-first approach. Progress framing felt less stressful than balance-heavy dashboards.
                            </p>
                            <p className="text-[#BDBDBD]">
                                Jury feedback acknowledged the responsible structure and system-level thinking, while noting the need for long-term validation to measure sustained behavioural change.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white mb-6 font-heading">10. Reflection</h2>
                            <div className="bg-[#1E1E1E] p-8 border border-white/5">
                                <p className="text-white italic mb-4 text-lg">
                                    &quot;RupeeRise began as a financial literacy concept. It evolved into a behaviour-first financial system.&quot;
                                </p>
                                <p className="text-[#BDBDBD] text-sm leading-relaxed">
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
