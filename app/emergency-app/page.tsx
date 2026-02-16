import CaseStudyTemplate from "@/components/templates/CaseStudyTemplate";
import GlassImagePlaceholder from "@/components/ui/GlassImagePlaceholder";

export default function EmergencyAppPage() {
    return (
        <CaseStudyTemplate
            title="Emergency Response App"
            role="UX/UI Designer"
            timeline="Mid-Project Stack Shift"
            tags={["Healthcare", "Crisis UX", "Mobile System"]}
        >
            <div className="space-y-20">
                {/* 1. Intro & The "Real Problem" */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-10">
                    <div className="md:col-span-7 space-y-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#F4F1E8] leading-tight">
                            &quot;It must be readable at 2 AM.&quot;
                        </h2>
                        <div className="text-[#cadcd5] text-lg leading-relaxed space-y-4">
                            <p>
                                This is a mobile emergency response system used by hospital staff to receive cardiac alerts, understand patient context, and coordinate response during high-stress scenarios.
                            </p>
                            <p>
                                The objective was not to rebuild it, but to <span className="text-[#a7f36f]">simplify it for real emergency behaviour</span>—especially during night shifts.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-1 hidden md:block border-r border-[#a7f36f]/10"></div>
                    <div className="md:col-span-4 space-y-8">
                        <div>
                            <h3 className="text-[#a7f36f] text-xs uppercase tracking-widest mb-2">The Real Problem</h3>
                            <p className="text-[#cadcd5] text-sm leading-relaxed">
                                In cardiac emergencies, the first <strong>30 seconds</strong> determine response quality.
                                <br /><br />
                                In the existing app, nurses had to interpret data while deciding what action to take. Alerts, history, and chat were tightly mixed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Core Design Principle - Visual Block */}
                <section className="bg-[#022c22] rounded-2xl p-8 md:p-12 border border-[#a7f36f]/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#a7f36f]/40 to-transparent"></div>

                    <h3 className="text-[#a7f36f] text-sm uppercase tracking-widest mb-6">Core Design Principle</h3>
                    <div className="text-3xl md:text-5xl font-bold text-[#F4F1E8] mb-8 leading-tight">
                        Separate <span className="text-[#a7f36f]">Scanning</span> from <span className="text-[#a7f36f]">Acting</span>.
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-[#cadcd5] text-sm md:text-base">
                        <div className="px-6 py-3 rounded-full bg-[#064034] border border-[#a7f36f]/20">Understand what&apos;s happening</div>
                        <span className="text-[#a7f36f]">→</span>
                        <div className="px-6 py-3 rounded-full bg-[#064034] border border-[#a7f36f]/20">Decide</div>
                        <span className="text-[#a7f36f]">→</span>
                        <div className="px-6 py-3 rounded-full bg-[#064034] border border-[#a7f36f]/20">Act</div>
                    </div>
                    <p className="mt-6 text-[#cadcd5]/60 text-sm italic">&quot;Not all at once.&quot;</p>
                </section>

                {/* 3. Structural Shift: Scan vs Action (2-Column Comparison) */}
                <section>
                    <h2 className="text-2xl font-bold text-[#F4F1E8] mb-8 border-b border-[#a7f36f]/20 pb-4">Structural Shift</h2>
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                        {/* Scan Layer */}
                        <div className="space-y-6">
                            <div className="bg-[#022c22]/30 p-1 rounded-2xl border border-[#a7f36f]/10">
                                <GlassImagePlaceholder label="Scan Layer (Context First) UI" className="h-64 w-full aspect-auto" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#a7f36f] mb-3">1. Scan Layer (Context First)</h3>
                                <p className="text-[#cadcd5] mb-4 text-sm">
                                    Opening an alert shows a single, large alert card. This screen exists purely for fast comprehension.
                                </p>
                                <ul className="space-y-2 text-[#cadcd5] text-sm">
                                    <li className="flex gap-2">
                                        <span className="text-[#a7f36f]">•</span> Patient vitals (HR, BP, O2) in enlarged typography
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-[#a7f36f]">•</span> Ward / room in high contrast
                                    </li>
                                    <li className="flex gap-2 text-red-300/80">
                                        <span className="text-red-400">•</span> Removed: Call buttons, Chat, History (Distractions)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Action Layer */}
                        <div className="space-y-6">
                            <div className="bg-[#022c22]/30 p-1 rounded-2xl border border-[#a7f36f]/10">
                                <GlassImagePlaceholder label="Action Layer (After Context) UI" className="h-64 w-full aspect-auto" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#a7f36f] mb-3">2. Action Layer (After Context)</h3>
                                <p className="text-[#cadcd5] mb-4 text-sm">
                                    Once the situation is understood, users can access actions. They are one tap away, but never competing with scanning.
                                </p>
                                <ul className="space-y-2 text-[#cadcd5] text-sm">
                                    <li className="flex gap-2">
                                        <span className="text-[#a7f36f]">•</span> Call → Direct contact with on-call physician
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-[#a7f36f]">•</span> Chat → Team coordination
                                    </li>
                                    <li className="flex gap-2">
                                        <span className="text-[#a7f36f]">•</span> Patient details → Full medical history
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. IA & Validation */}
                <section className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-[#F4F1E8]">Information Architecture</h2>
                        <div className="space-y-4">
                            <div className="p-4 bg-[#a7f36f]/5 rounded-lg border-l-2 border-[#a7f36f]">
                                <h4 className="text-[#F4F1E8] font-semibold text-sm">Alarm List</h4>
                                <p className="text-[#cadcd5] text-sm mt-1">Dedicated to emergency alerts. Designed for speed.</p>
                            </div>
                            <div className="p-4 bg-[#a7f36f]/5 rounded-lg border-l-2 border-[#a7f36f]">
                                <h4 className="text-[#F4F1E8] font-semibold text-sm">Communication Hub</h4>
                                <p className="text-[#cadcd5] text-sm mt-1">Group chats, message history, staff coordination.</p>
                            </div>
                        </div>
                        <p className="text-[#cadcd5] text-sm italic mt-2">
                            Users can move between chat and patient context without losing state.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-bold text-[#F4F1E8]">Validation & Outcome</h2>
                        <ul className="space-y-3 text-[#cadcd5] text-sm">
                            <li className="flex gap-2">
                                <span className="text-[#a7f36f]">✓</span>
                                <span>Alert flow consistently met the <strong>sub-30-second response target</strong>.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#a7f36f]">✓</span>
                                <span>Staff described the experience as more comfortable than Epic-like systems.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="text-[#a7f36f]">✓</span>
                                <span>Reduced hesitation before first action.</span>
                            </li>
                        </ul>
                        <div className="p-4 bg-[#111] rounded-lg mt-4 border border-[#333]">
                            <p className="text-[#a7f36f] text-xs uppercase tracking-widest mb-1">Constraints</p>
                            <p className="text-[#cadcd5]/60 text-xs">
                                Mid-project stack shift from React + Material to Ionic.
                                Effort focused on surfaces that directly affected behaviour.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Reflection */}
                <section className="bg-[#a7f36f]/5 p-8 md:p-12 rounded-2xl border border-[#a7f36f]/10 text-center">
                    <h2 className="text-2xl font-bold text-[#F4F1E8] mb-4">Reflection</h2>
                    <p className="text-[#cadcd5] max-w-3xl mx-auto leading-relaxed text-lg">
                        This project was not about adding functionality. It was about reducing mental effort in the most critical window of use.
                        By restructuring the system around scanning before acting, the app became faster, clearer, and more dependable under pressure.
                    </p>
                </section>
            </div>
        </CaseStudyTemplate>
    );
}
