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
                <section className="bg-[#022c22]/30 p-8 rounded-2xl border border-[#a7f36f]/10 text-center">
                    <h3 className="text-xl font-bold text-[#F4F1E8] mb-8">The Readiness Funnel</h3>
                    <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
                        <div className="space-y-2">
                            <span className="text-5xl font-bold text-[#F4F1E8] block">150</span>
                            <span className="text-[#a7f36f] text-sm uppercase tracking-wider block">Aspirants Onboarded</span>
                        </div>

                        <div className="hidden md:block text-[#a7f36f]/30">
                            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10H38M38 10L30 2M38 10L30 18" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="space-y-2">
                            <span className="text-5xl font-bold text-[#F4F1E8] block">50</span>
                            <span className="text-[#a7f36f] text-sm uppercase tracking-wider block">Mentor Validated</span>
                            <span className="text-[#cadcd5] text-xs block">(Job Ready)</span>
                        </div>

                        <div className="hidden md:block text-[#a7f36f]/30">
                            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 10H38M38 10L30 2M38 10L30 18" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>

                        <div className="space-y-2">
                            <span className="text-5xl font-bold text-[#a7f36f] block">25+</span>
                            <span className="text-[#a7f36f] text-sm uppercase tracking-wider block">Placements</span>
                            <span className="text-[#cadcd5] text-xs block">(~50% Conversion)</span>
                        </div>
                    </div>
                    <p className="text-[#cadcd5] mt-8 text-sm max-w-2xl mx-auto">
                        Average Salary: ~₹7.5 LPA. The core value of this funnel was visibility: moving from anecdotal success to trackable conversion rates.
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
