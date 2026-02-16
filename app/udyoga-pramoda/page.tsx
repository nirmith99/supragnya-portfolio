import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";

export default function UdyogaPramodaPage() {
    return (
        <CaseStudyTemplate
            title="Udyoga Pramoda"
            role="Lead Designer"
            timeline="Volunteer Initiative"
            tags={["EdTech", "Service Design", "Operational Governance"]}
        >
            <div className="space-y-16">
                {/* Intro */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#F4F1E8] leading-tight">
                        Designing a Mentor-Gated Progression System to Structure a Volunteer-Driven Career Platform
                    </h2>
                    <div className="text-[#cadcd5] leading-relaxed space-y-4">
                        <p>
                            Udyoga Pramoda is a community-led career initiative where senior professionals mentor early-career aspirants through skill workshops, resume reviews, and interview preparation.
                        </p>
                        <p className="border-l-2 border-[#a7f36f] pl-4 italic">
                            &quot;This was not a UI polish problem. It was an operational governance problem.&quot;
                        </p>
                        <p>
                            As participation scaled to 150+ active aspirants, coordination relied heavily on WhatsApp. Readiness validation was anecdotal, and placements were untrackable.
                            I designed a lightweight mentor-gated progression system that structured informal validation into a measurable readiness funnel—<strong>without increasing mentor burden</strong>.
                        </p>
                    </div>
                </section>

                {/* Challenge & Insight */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-4">
                        <h3 className="text-[#a7f36f] font-semibold text-lg uppercase tracking-wide">The Product Challenge</h3>
                        <p className="text-[#cadcd5]">
                            How might we make mentor-controlled readiness visible and measurable while preserving the flexibility of a volunteer-driven ecosystem?
                        </p>
                        <p className="text-[#F4F1E8] font-medium">
                            The solution needed to introduce structure without introducing bureaucracy.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-[#a7f36f] font-semibold text-lg uppercase tracking-wide">Key Insight</h3>
                        <p className="text-[#cadcd5]">
                            Placement strongly correlated with mentor-validated readiness.
                            Out of 150 aspirants, 50 were validated as job-ready, and 25+ secured placements (~50% conversion).
                        </p>
                        <p className="text-[#F4F1E8] font-medium">
                            The bottleneck was not placement matching. The bottleneck was readiness conversion (150 → 50).
                        </p>
                    </div>
                </section>

                {/* Funnel Visualization */}
                {/* Funnel Visualization */}
                <section className="bg-[#022c22]/30 p-8 md:p-12 rounded-3xl border border-[#a7f36f]/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a7f36f]/20 to-transparent"></div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#F4F1E8] mb-12">The Readiness Funnel</h3>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 relative z-10">
                        {/* Stage 1 */}
                        <div className="relative group">
                            <div className="w-48 h-48 rounded-full border border-[#a7f36f]/20 bg-[#a7f36f]/5 flex flex-col items-center justify-center backdrop-blur-sm group-hover:border-[#a7f36f]/40 transition-colors duration-300">
                                <span className="text-5xl font-bold text-[#F4F1E8]">150</span>
                                <span className="text-[#a7f36f] text-xs uppercase tracking-widest mt-2">Aspirants</span>
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#cadcd5]/60 text-xs whitespace-nowrap">Input</div>
                        </div>

                        {/* Connector 1 */}
                        <div className="h-12 w-[1px] md:h-[1px] md:w-24 bg-gradient-to-b md:bg-gradient-to-r from-[#a7f36f]/10 via-[#a7f36f]/50 to-[#a7f36f]/10 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#064034] text-[#a7f36f] text-[10px] px-2 py-1 rounded-full border border-[#a7f36f]/20">
                                Readiness Gap
                            </div>
                        </div>

                        {/* Stage 2 */}
                        <div className="relative group">
                            <div className="w-40 h-40 rounded-full border-2 border-[#a7f36f]/40 bg-[#a7f36f]/10 flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_30px_-5px_rgba(167,243,111,0.15)]">
                                <span className="text-4xl font-bold text-[#F4F1E8]">50</span>
                                <span className="text-[#a7f36f] text-xs uppercase tracking-widest mt-2">Validated</span>
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#a7f36f] text-xs font-semibold whitespace-nowrap">Mentor Approved</div>
                        </div>

                        {/* Connector 2 */}
                        <div className="h-12 w-[1px] md:h-[1px] md:w-24 bg-gradient-to-b md:bg-gradient-to-r from-[#a7f36f]/10 via-[#a7f36f]/50 to-[#a7f36f]/10 relative">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#064034] text-[#a7f36f] text-[10px] px-2 py-1 rounded-full border border-[#a7f36f]/20">
                                ~50% Conversion
                            </div>
                        </div>

                        {/* Stage 3 */}
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-full border-2 border-[#a7f36f] bg-[#a7f36f]/20 flex flex-col items-center justify-center backdrop-blur-xl shadow-[0_0_40px_-5px_rgba(167,243,111,0.3)]">
                                <span className="text-3xl font-bold text-[#fff]">25+</span>
                                <span className="text-[#fff] text-xs uppercase tracking-widest mt-1">Placed</span>
                            </div>
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[#fff] text-xs font-semibold whitespace-nowrap">Output</div>
                        </div>
                    </div>

                    <p className="text-[#cadcd5] mt-16 text-sm max-w-2xl mx-auto border-t border-[#a7f36f]/10 pt-6">
                        Average Salary: <span className="text-[#F4F1E8] font-semibold">~₹7.5 LPA</span>.
                        The core value was visibility: moving from anecdotal success to trackable conversion rates.
                    </p>
                </section>

                {/* Design Approach & Solution */}
                <section className="space-y-8">
                    <h2 className="text-2xl font-bold text-[#F4F1E8] border-b border-[#a7f36f]/20 pb-4">Design Approach</h2>
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-[#a7f36f] font-semibold text-lg mb-4">Mentor-Gated Progression</h3>
                            <p className="text-[#cadcd5] mb-4">
                                Aspirants advance only after mentor validation. This implies readiness is based on demonstrated capability, not self-declaration.
                                Workshops and tasks acted as checkpoints; mentors validated completion, and only then did aspirants unlock job application access.
                            </p>
                            <ul className="space-y-2 text-[#cadcd5] text-sm">
                                <li>• <strong>Before:</strong> Validation via WhatsApp, invisible to admin.</li>
                                <li>• <strong>After:</strong> Centralized tracking, structured checkpoints, visible status.</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#a7f36f] font-semibold text-lg mb-4">Volunteer Capacity Constraints</h3>
                            <p className="text-[#cadcd5] mb-4">
                                Since mentors were volunteering senior professionals, the design principle was: <strong>&quot;Never increase mentor effort per aspirant.&quot;</strong>
                            </p>
                            <p className="text-[#cadcd5]">
                                The system introduced structure without adding administrative friction or increasing review workload.
                            </p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <GlassImagePlaceholder label="Mentor Validation Dashboard UI" />
                    </div>
                </section>

                {/* Reflection */}
                <section className="bg-[#a7f36f]/5 p-8 rounded-2xl border border-[#a7f36f]/10">
                    <h2 className="text-xl font-bold text-[#F4F1E8] mb-4">Reflection</h2>
                    <p className="text-[#cadcd5] leading-relaxed">
                        The core value of this project was not in interface design, but in structuring informal mentor-driven progression into a scalable, trackable system.
                        Future opportunity lies in improving readiness conversion (the 150 → 50 drop-off) through better pre-validation and clearer guidance, without increasing mentor burden.
                    </p>
                </section>
            </div>
        </CaseStudyTemplate>
    );
}
