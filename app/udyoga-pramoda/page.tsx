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
            <div className="space-y-20">
                {/* 1. Context & The "Why" - Editorial Layout */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-7 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#F4F1E8] leading-tight">
                            &quot;This was not a UI polish problem. It was an operational governance problem.&quot;
                        </h2>
                        <div className="text-[#cadcd5] text-lg leading-relaxed space-y-4">
                            <p>
                                Udyoga Pramoda is a community-led career initiative where senior professionals mentor early-career aspirants.
                            </p>
                            <p>
                                As participation scaled to <strong>150+ active aspirants</strong>, coordination relied heavily on WhatsApp. Readiness validation was anecdotal, and placements were untrackable.
                            </p>
                            <p>
                                I designed a lightweight <strong>mentor-gated progression system</strong> that structured informal validation into a measurable readiness funnel—without increasing mentor burden.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-1 hidden md:block border-r border-[#a7f36f]/10"></div>
                    <div className="md:col-span-4 space-y-8">
                        <div>
                            <h3 className="text-[#a7f36f] text-xs uppercase tracking-widest mb-2">The Challenge</h3>
                            <p className="text-[#cadcd5] text-sm leading-relaxed">
                                How might we make mentor-controlled readiness visible while preserving the flexibility of a volunteer-driven ecosystem?
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#a7f36f] text-xs uppercase tracking-widest mb-2">The Constraint</h3>
                            <p className="text-[#cadcd5] text-sm leading-relaxed">
                                Mentors are volunteers. The system must <strong>never increase mentor effort per aspirant</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. The Key Insight - Dark "Feature" Box */}
                <section className="bg-[#022c22] rounded-2xl p-8 md:p-12 border border-[#a7f36f]/10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#a7f36f]/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-2 h-2 rounded-full bg-[#a7f36f] shadow-[0_0_10px_#a7f36f]"></div>
                                <span className="text-[#a7f36f] text-xs uppercase tracking-widest font-mono">Key Insight</span>
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-[#F4F1E8] mb-6 leading-tight">
                                Placement strongly correlated with <span className="text-[#a7f36f]">mentor-validated readiness</span>.
                            </h3>
                            <p className="text-[#cadcd5] text-lg">
                                The bottleneck was not placement matching. The bottleneck was readiness conversion (150 → 50).
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-[#064034]/50 p-6 rounded-xl border border-[#a7f36f]/10">
                                <div className="text-4xl font-bold text-[#F4F1E8] mb-2">50</div>
                                <div className="text-[#cadcd5] text-xs uppercase tracking-wide">Validated as<br />Job-Ready</div>
                            </div>
                            <div className="bg-[#064034]/50 p-6 rounded-xl border border-[#a7f36f]/10">
                                <div className="text-4xl font-bold text-[#F4F1E8] mb-2">~50%</div>
                                <div className="text-[#cadcd5] text-xs uppercase tracking-wide">Conversion to<br />Placement</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. The Solution: Funnel Visualization */}
                <section className="space-y-8">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4">Structuring the Flow</h2>
                        <p className="text-[#cadcd5]">
                            We moved from informal WhatsApp coordination to a structured, visible readiness funnel.
                        </p>
                    </div>

                    <div className="bg-[#022c22]/30 p-8 md:p-16 rounded-3xl border border-[#a7f36f]/10 text-center relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#a7f36f]/20 to-transparent"></div>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative z-10">
                            {/* Input */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-40 h-40 rounded-full border border-[#a7f36f]/20 bg-[#a7f36f]/5 flex flex-col items-center justify-center backdrop-blur-sm">
                                    <span className="text-4xl font-bold text-[#F4F1E8]">150</span>
                                    <span className="text-[#a7f36f] text-xs uppercase tracking-widest mt-1">Aspirants</span>
                                </div>
                                <span className="text-[#cadcd5]/60 text-xs">Unfiltered Input</span>
                            </div>

                            {/* Filter Logic */}
                            <div className="hidden md:flex flex-col items-center gap-2">
                                <div className="h-[1px] w-16 bg-gradient-to-r from-[#a7f36f]/10 via-[#a7f36f]/50 to-[#a7f36f]/10"></div>
                                <div className="bg-[#064034] text-[#a7f36f] text-[10px] px-3 py-1 rounded-full border border-[#a7f36f]/20">
                                    Mentor Validation
                                </div>
                            </div>

                            {/* Validated */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-36 h-36 rounded-full border-2 border-[#a7f36f]/40 bg-[#a7f36f]/10 flex flex-col items-center justify-center backdrop-blur-md shadow-[0_0_30px_-5px_rgba(167,243,111,0.15)]">
                                    <span className="text-3xl font-bold text-[#F4F1E8]">50</span>
                                    <span className="text-[#a7f36f] text-xs uppercase tracking-widest mt-1">Ready</span>
                                </div>
                                <span className="text-[#a7f36f] text-xs font-semibold">Job-Ready Pool</span>
                            </div>

                            {/* Filter Logic */}
                            <div className="hidden md:flex flex-col items-center gap-2">
                                <div className="h-[1px] w-16 bg-gradient-to-r from-[#a7f36f]/10 via-[#a7f36f]/50 to-[#a7f36f]/10"></div>
                                <div className="bg-[#064034] text-[#a7f36f] text-[10px] px-3 py-1 rounded-full border border-[#a7f36f]/20">
                                    Placement Drive
                                </div>
                            </div>

                            {/* Output */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-32 h-32 rounded-full border-2 border-[#a7f36f] bg-[#a7f36f]/20 flex flex-col items-center justify-center backdrop-blur-xl shadow-[0_0_40px_-5px_rgba(167,243,111,0.3)]">
                                    <span className="text-3xl font-bold text-[#fff]">25+</span>
                                    <span className="text-[#fff] text-xs uppercase tracking-widest mt-1">Placed</span>
                                </div>
                                <span className="text-[#fff] text-xs font-semibold">Success</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Outcomes & Reflection Grid */}
                <section className="grid md:grid-cols-3 gap-6">
                    <div className="md:col-span-1 bg-[#a7f36f]/5 p-8 rounded-2xl border border-[#a7f36f]/10 flex flex-col justify-center text-center">
                        <div className="text-5xl font-bold text-[#F4F1E8] mb-2">~7.5</div>
                        <div className="text-[#a7f36f] text-sm uppercase tracking-widest">LPA Avg Salary</div>
                    </div>
                    <div className="md:col-span-2 bg-[#022c22]/40 p-8 rounded-2xl border border-[#a7f36f]/10">
                        <h3 className="text-[#a7f36f] font-semibold text-lg mb-4">Reflection</h3>
                        <p className="text-[#cadcd5] leading-relaxed">
                            The core value of this project was not in interface design, but in structuring informal mentor-driven progression into a scalable, trackable system.
                            <br /><br />
                            Future opportunity lies in improving readiness conversion (the 150 → 50 drop-off) through better pre-validation and clearer guidance, without increasing mentor burden.
                        </p>
                    </div>
                </section>
            </div>
        </CaseStudyTemplate>
    );
}
