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
            <div className="space-y-24">
                {/* 1. Context & The "Why" - Editorial Layout */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    <div className="md:col-span-7 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-heading">
                            &quot;This was not a UI polish problem. It was an operational governance problem.&quot;
                        </h2>
                        <div className="text-[#BDBDBD] text-lg leading-relaxed space-y-6">
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
                    <div className="md:col-span-1 hidden md:block border-r border-white/10"></div>
                    <div className="md:col-span-4 space-y-12">
                        <div>
                            <h3 className="text-[#A67C52] text-xs uppercase tracking-widest mb-4">The Challenge</h3>
                            <p className="text-[#BDBDBD] text-sm leading-relaxed">
                                How might we make mentor-controlled readiness visible while preserving the flexibility of a volunteer-driven ecosystem?
                            </p>
                        </div>
                        <div>
                            <h3 className="text-[#A67C52] text-xs uppercase tracking-widest mb-4">The Constraint</h3>
                            <p className="text-[#BDBDBD] text-sm leading-relaxed">
                                Mentors are volunteers. The system must <strong>never increase mentor effort per aspirant</strong>.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. The Key Insight - Dark "Feature" Box */}
                <section className="bg-[#1E1E1E] rounded-none md:rounded-lg p-8 md:p-16 border border-white/5 relative overflow-hidden group">
                    {/* Subtle noise or gradient only */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-2 h-2 rounded-full bg-[#a7f36f] shadow-[0_0_10px_#a7f36f]"></div>
                                <span className="text-[#a7f36f] text-xs uppercase tracking-widest font-mono">Key Insight</span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight font-heading">
                                Placement strongly correlated with <span className="text-[#a7f36f]">mentor-validated readiness</span>.
                            </h3>
                            <p className="text-[#BDBDBD] text-lg">
                                The bottleneck was not placement matching. The bottleneck was readiness conversion (150 → 50).
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-black/20 p-8 border border-white/10">
                                <div className="text-5xl font-bold text-white mb-2 font-heading">50</div>
                                <div className="text-[#BDBDBD] text-xs uppercase tracking-wide">Validated as<br />Job-Ready</div>
                            </div>
                            <div className="bg-black/20 p-8 border border-white/10">
                                <div className="text-5xl font-bold text-white mb-2 font-heading">~50%</div>
                                <div className="text-[#BDBDBD] text-xs uppercase tracking-wide">Conversion to<br />Placement</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3. The Solution: Funnel Visualization */}
                <section className="space-y-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold text-white mb-6 font-heading">Structuring the Flow</h2>
                        <p className="text-[#BDBDBD] text-lg">
                            We moved from informal WhatsApp coordination to a structured, visible readiness funnel.
                        </p>
                    </div>

                    <div className="bg-[#1E1E1E] p-12 md:p-20 border border-white/5 text-center relative overflow-hidden">

                        <div className="flex flex-col md:flex-row items-center justify-center gap-12 relative z-10">
                            {/* Input */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-40 h-40 rounded-full border border-white/10 bg-white/5 flex flex-col items-center justify-center backdrop-blur-sm">
                                    <span className="text-4xl font-bold text-white font-heading">150</span>
                                    <span className="text-[#BDBDBD] text-xs uppercase tracking-widest mt-1">Aspirants</span>
                                </div>
                                <span className="text-[#BDBDBD]/60 text-xs">Unfiltered Input</span>
                            </div>

                            {/* Filter Logic */}
                            <div className="hidden md:flex flex-col items-center gap-2">
                                <div className="h-[1px] w-24 bg-white/10"></div>
                                <div className="bg-black text-[#a7f36f] text-[10px] px-3 py-1 rounded-full border border-white/10">
                                    Mentor Validation
                                </div>
                            </div>

                            {/* Validated */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-36 h-36 rounded-full border-2 border-[#a7f36f]/40 bg-[#a7f36f]/10 flex flex-col items-center justify-center backdrop-blur-md">
                                    <span className="text-3xl font-bold text-white font-heading">50</span>
                                    <span className="text-[#a7f36f] text-xs uppercase tracking-widest mt-1">Ready</span>
                                </div>
                                <span className="text-[#a7f36f] text-xs font-semibold">Job-Ready Pool</span>
                            </div>

                            {/* Filter Logic */}
                            <div className="hidden md:flex flex-col items-center gap-2">
                                <div className="h-[1px] w-24 bg-white/10"></div>
                                <div className="bg-black text-[#a7f36f] text-[10px] px-3 py-1 rounded-full border border-white/10">
                                    Placement Drive
                                </div>
                            </div>

                            {/* Output */}
                            <div className="flex flex-col items-center gap-4">
                                <div className="w-32 h-32 rounded-full border-2 border-[#a7f36f] bg-[#a7f36f]/20 flex flex-col items-center justify-center backdrop-blur-xl">
                                    <span className="text-3xl font-bold text-white font-heading">25+</span>
                                    <span className="text-white text-xs uppercase tracking-widest mt-1">Placed</span>
                                </div>
                                <span className="text-white text-xs font-semibold">Success</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. Outcomes & Reflection Grid */}
                <section className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1 bg-white/5 p-12 border border-white/10 flex flex-col justify-center text-center">
                        <div className="text-6xl font-bold text-white mb-4 font-heading">~7.5</div>
                        <div className="text-[#A67C52] text-sm uppercase tracking-widest">LPA Avg Salary</div>
                    </div>
                    <div className="md:col-span-2 bg-[#1E1E1E] p-12 border border-white/10">
                        <h3 className="text-[#a7f36f] font-semibold text-lg mb-6">Reflection</h3>
                        <p className="text-[#BDBDBD] leading-relaxed text-lg">
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
