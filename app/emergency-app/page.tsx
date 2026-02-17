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
            <div className="space-y-24">
                {/* 1. Intro & The "Real Problem" */}
                <section className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    <div className="md:col-span-7 space-y-8">
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight font-heading">
                            &quot;It must be readable at 2 AM.&quot;
                        </h2>
                        <div className="text-[#BDBDBD] text-lg leading-relaxed space-y-6">
                            <p>
                                This is a mobile emergency response system used by hospital staff to receive cardiac alerts, understand patient context, and coordinate response during high-stress scenarios.
                            </p>
                            <p>
                                The objective was not to rebuild it, but to <span className="text-white font-medium">simplify it for real emergency behaviour</span>—especially during night shifts.
                            </p>
                        </div>
                    </div>
                    <div className="md:col-span-1 hidden md:block border-r border-white/10"></div>
                    <div className="md:col-span-4 space-y-12">
                        <div>
                            <h3 className="text-[#A67C52] text-xs uppercase tracking-widest mb-4">The Real Problem</h3>
                            <p className="text-[#BDBDBD] text-sm leading-relaxed">
                                In cardiac emergencies, the first <strong>30 seconds</strong> determine response quality.
                                <br /><br />
                                In the existing app, nurses had to interpret data while deciding what action to take. Alerts, history, and chat were tightly mixed.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 2. Core Design Principle - Visual Block */}
                <section className="bg-[#1E1E1E] rounded-none md:rounded-lg p-12 md:p-20 border border-white/5 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-[#a7f36f]/40 to-transparent"></div>

                    <h3 className="text-[#A67C52] text-sm uppercase tracking-widest mb-12">Core Design Principle</h3>
                    <div className="text-3xl md:text-6xl font-bold text-white mb-12 leading-tight font-heading">
                        Separate <span className="text-[#a7f36f]">Scanning</span> from <span className="text-[#a7f36f]">Acting</span>.
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-[#BDBDBD] text-sm md:text-lg">
                        <div className="px-8 py-4 rounded-full bg-black border border-white/10">Understand what&apos;s happening</div>
                        <span className="text-[#a7f36f]">→</span>
                        <div className="px-8 py-4 rounded-full bg-black border border-white/10">Decide</div>
                        <span className="text-[#a7f36f]">→</span>
                        <div className="px-8 py-4 rounded-full bg-black border border-white/10">Act</div>
                    </div>
                    <p className="mt-12 text-[#BDBDBD]/60 text-sm italic">&quot;Not all at once.&quot;</p>
                </section>

                {/* 3. Structural Shift: Scan vs Action (2-Column Comparison) */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-12 border-b border-white/10 pb-6 font-heading">Structural Shift</h2>
                    <div className="grid md:grid-cols-2 gap-16 md:gap-24">
                        {/* Scan Layer */}
                        <div className="space-y-8">
                            <div className="bg-[#1E1E1E] p-2 border border-white/10">
                                <GlassImagePlaceholder label="Scan Layer (Context First) UI" className="h-64 w-full aspect-auto" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-heading">1. Scan Layer (Context First)</h3>
                                <p className="text-[#BDBDBD] mb-6 text-sm leading-relaxed">
                                    Opening an alert shows a single, large alert card. This screen exists purely for fast comprehension.
                                </p>
                                <ul className="space-y-3 text-[#BDBDBD] text-sm">
                                    <li className="flex gap-3">
                                        <span className="text-[#a7f36f]">•</span> Patient vitals (HR, BP, O2) in enlarged typography
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#a7f36f]">•</span> Ward / room in high contrast
                                    </li>
                                    <li className="flex gap-3 text-[#ef4444]/80">
                                        <span className="text-[#ef4444]">•</span> Removed: Call buttons, Chat, History (Distractions)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Action Layer */}
                        <div className="space-y-8">
                            <div className="bg-[#1E1E1E] p-2 border border-white/10">
                                <GlassImagePlaceholder label="Action Layer (After Context) UI" className="h-64 w-full aspect-auto" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-4 font-heading">2. Action Layer (After Context)</h3>
                                <p className="text-[#BDBDBD] mb-6 text-sm leading-relaxed">
                                    Once the situation is understood, users can access actions. They are one tap away, but never competing with scanning.
                                </p>
                                <ul className="space-y-3 text-[#BDBDBD] text-sm">
                                    <li className="flex gap-3">
                                        <span className="text-[#a7f36f]">•</span> Call → Direct contact with on-call physician
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#a7f36f]">•</span> Chat → Team coordination
                                    </li>
                                    <li className="flex gap-3">
                                        <span className="text-[#a7f36f]">•</span> Patient details → Full medical history
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 4. IA & Validation */}
                <section className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-white font-heading">Information Architecture</h2>
                        <div className="space-y-6">
                            <div className="p-6 bg-[#1E1E1E] border-l-2 border-[#a7f36f]">
                                <h4 className="text-white font-semibold text-sm">Alarm List</h4>
                                <p className="text-[#BDBDBD] text-sm mt-2">Dedicated to emergency alerts. Designed for speed.</p>
                            </div>
                            <div className="p-6 bg-[#1E1E1E] border-l-2 border-[#a7f36f]">
                                <h4 className="text-white font-semibold text-sm">Communication Hub</h4>
                                <p className="text-[#BDBDBD] text-sm mt-2">Group chats, message history, staff coordination.</p>
                            </div>
                        </div>
                        <p className="text-[#BDBDBD] text-sm italic mt-4 opacity-70">
                            Users can move between chat and patient context without losing state.
                        </p>
                    </div>

                    <div className="space-y-8">
                        <h2 className="text-2xl font-bold text-white font-heading">Validation & Outcome</h2>
                        <ul className="space-y-4 text-[#BDBDBD] text-sm">
                            <li className="flex gap-3">
                                <span className="text-[#a7f36f]">✓</span>
                                <span>Alert flow consistently met the <strong>sub-30-second response target</strong>.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#a7f36f]">✓</span>
                                <span>Staff described the experience as more comfortable than Epic-like systems.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="text-[#a7f36f]">✓</span>
                                <span>Reduced hesitation before first action.</span>
                            </li>
                        </ul>
                        <div className="p-6 bg-black rounded-lg mt-6 border border-white/10">
                            <p className="text-[#A67C52] text-xs uppercase tracking-widest mb-2">Constraints</p>
                            <p className="text-[#BDBDBD]/60 text-xs leading-relaxed">
                                Mid-project stack shift from React + Material to Ionic.
                                Effort focused on surfaces that directly affected behaviour.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 5. Reflection */}
                <section className="bg-[#1E1E1E] p-12 md:p-16 border border-white/5 text-center">
                    <h2 className="text-3xl font-bold text-white mb-6 font-heading">Reflection</h2>
                    <p className="text-[#BDBDBD] max-w-3xl mx-auto leading-relaxed text-lg">
                        This project was not about adding functionality. It was about reducing mental effort in the most critical window of use.
                        By restructuring the system around scanning before acting, the app became faster, clearer, and more dependable under pressure.
                    </p>
                </section>
            </div>
        </CaseStudyTemplate>
    );
}
