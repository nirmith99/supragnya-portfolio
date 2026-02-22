import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col">

      {/* 0. FLOATING NAVIGATION */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-[#F9F7F2] text-[#80542B] px-8 py-4 rounded-full shadow-xl flex items-center justify-between w-[90%] max-w-2xl border border-[#80542B]/10">
        <span className="font-serif font-bold text-xl tracking-wide">Supragnya Purohith</span>
        <div className="flex gap-8 font-sans text-sm tracking-wide font-medium">
          <Link href="#about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="#projects" className="hover:opacity-70 transition-opacity">Projects</Link>
          <Link href="#contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="sticky top-0 h-screen w-full z-[10] bg-[#80542B] text-[#F9F7F2] flex items-center overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-8 md:px-12 pt-32 pb-16 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 flex flex-col gap-8">
              <h1 className="font-serif text-5xl lg:text-[4rem] leading-[1.15] tracking-tight max-w-2xl">
                Designer driven by precision, where logical structure meets user instinct, building systems that actually scale.
              </h1>
              <p className="font-sans text-lg lg:text-xl text-[#F9F7F2]/80 leading-relaxed max-w-lg">
                UI & UX Designer with nearly 2 years of experience specializing in production-ready interface design and scalable design systems.
              </p>
              <div className="flex flex-wrap items-center gap-6 mt-4">
                <Link href="#projects" className="bg-[#F9F7F2] text-[#80542B] px-8 py-4 rounded-full font-sans font-medium hover:scale-105 transition-transform duration-300">
                  View work
                </Link>
                <div className="flex items-center gap-3 border border-[#F9F7F2]/30 px-6 py-4 rounded-full font-sans">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse"></span>
                  <span>Open to opportunities</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <img src="/avatar.png" alt="Supragnya Avatar" className="w-full max-w-[400px] object-contain drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROJECT: EMERGENCY RESPONSE APP */}
      <section id="projects" className="sticky top-0 h-screen w-full z-[20] bg-[#F9F7F2] text-[#80542B] flex items-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="w-full max-w-6xl mx-auto px-8 md:px-12 pt-32 pb-16 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight">Emergency Response App</h2>
              <p className="font-sans text-xl lg:text-2xl opacity-80 leading-relaxed">
                Architectural logic and sub-30-second response times for cardiovascular care.
              </p>
              <Link href="/emergency-app" className="bg-[#80542B] text-[#F9F7F2] px-8 py-4 rounded-full font-sans font-medium w-fit mt-4 hover:scale-105 transition-transform duration-300">
                View Case Study
              </Link>
            </div>
            <div className="lg:col-span-7 w-full h-[50vh] lg:h-[70vh] bg-[#80542B]/10 rounded-2xl flex items-center justify-center border border-[#80542B]/20 overflow-hidden relative">
              <span className="font-sans font-bold tracking-widest uppercase text-sm opacity-50">Cinematic Mockup Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT: UDYOGA PRAMODA */}
      <section className="sticky top-0 h-screen w-full z-[30] bg-[#80542B] text-[#F9F7F2] flex items-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        <div className="w-full max-w-6xl mx-auto px-8 md:px-12 pt-32 pb-16 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 lg:order-2 flex flex-col gap-6">
              <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight">Udyoga Pramoda</h2>
              <p className="font-sans text-xl lg:text-2xl opacity-80 leading-relaxed">
                Live-production mentor-gated community progression system.
              </p>
              <Link href="/udyoga-pramoda" className="bg-[#F9F7F2] text-[#80542B] px-8 py-4 rounded-full font-sans font-medium w-fit mt-4 hover:scale-105 transition-transform duration-300">
                View Case Study
              </Link>
            </div>
            <div className="lg:col-span-7 lg:order-1 w-full h-[50vh] lg:h-[70vh] bg-[#F9F7F2]/10 rounded-2xl flex items-center justify-center border border-[#F9F7F2]/20 overflow-hidden relative">
              <span className="font-sans font-bold tracking-widest uppercase text-sm opacity-50">Cinematic Mockup Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECT: RUPEERISE */}
      <section className="sticky top-0 h-screen w-full z-[40] bg-[#F9F7F2] text-[#80542B] flex items-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="w-full max-w-6xl mx-auto px-8 md:px-12 pt-32 pb-16 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight">RupeeRise</h2>
              <p className="font-sans text-xl lg:text-2xl opacity-80 leading-relaxed">
                Habit-first wealth management designed in a 14-day sprint.
              </p>
              <Link href="/rupeerise" className="bg-[#80542B] text-[#F9F7F2] px-8 py-4 rounded-full font-sans font-medium w-fit mt-4 hover:scale-105 transition-transform duration-300">
                View Case Study
              </Link>
            </div>
            <div className="lg:col-span-7 w-full h-[50vh] lg:h-[70vh] bg-[#80542B]/10 rounded-2xl flex items-center justify-center border border-[#80542B]/20 overflow-hidden relative">
              <span className="font-sans font-bold tracking-widest uppercase text-sm opacity-50">Cinematic Mockup Area</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
