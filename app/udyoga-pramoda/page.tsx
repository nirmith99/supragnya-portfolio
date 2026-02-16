import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";

export default function UdyogaPramodaPage() {
    return (
        <CaseStudyTemplate
            title="Udyoga Pramoda"
            role="Lead Designer"
            timeline="4 Months"
            tags={["EdTech", "Service Design", "User Flow"]}
        >
            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4">Vision</h2>
                    <p className="text-[#cadcd5] leading-relaxed">
                        Streamlining the placement process for vocational training institutes to ensure better candidate-job fit.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-[#F4F1E8] mb-6">The Success Funnel</h2>

                    <div className="space-y-6">
                        <p className="text-[#cadcd5]">
                            We visualized and optimized the recruitment pipeline to ensure quality over quantity.
                        </p>

                        <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-[#022c22]/50 p-6 rounded-xl border border-[#a7f36f]/10 text-center">
                                <span className="block text-4xl font-bold text-[#F4F1E8] mb-2">150</span>
                                <span className="text-[#a7f36f] text-sm uppercase tracking-wider">Aspirants</span>
                                <p className="text-xs text-[#cadcd5] mt-2">Initial pool of candidates entering the training program.</p>
                            </div>

                            <div className="hidden md:flex items-center justify-center">
                                <span className="text-[#a7f36f] text-2xl">→</span>
                            </div>

                            <div className="bg-[#022c22]/50 p-6 rounded-xl border border-[#a7f36f]/10 text-center">
                                <span className="block text-4xl font-bold text-[#F4F1E8] mb-2">50</span>
                                <span className="text-[#a7f36f] text-sm uppercase tracking-wider">Validated</span>
                                <p className="text-xs text-[#cadcd5] mt-2">Candidates filtered through rigorous skills assessment.</p>
                            </div>

                            <div className="hidden md:flex items-center justify-center">
                                <span className="text-[#a7f36f] text-2xl">→</span>
                            </div>

                            <div className="bg-[#022c22]/50 p-6 rounded-xl border border-[#a7f36f]/10 text-center">
                                <span className="block text-4xl font-bold text-[#a7f36f] mb-2">25</span>
                                <span className="text-[#a7f36f] text-sm uppercase tracking-wider">Placements</span>
                                <p className="text-xs text-[#cadcd5] mt-2">Final successful job placements with high retention rates.</p>
                            </div>
                        </div>

                        <div className="mt-8">
                            <GlassImagePlaceholder label="Funnel Visualization Dashboard" />
                        </div>
                    </div>
                </section>
            </div>
        </CaseStudyTemplate>
    );
}
