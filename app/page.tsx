import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative flex flex-col">

      {/* 0. NAVIGATION */}
      {/* Stretched to max-w-[1200px] for that wide premium look */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] bg-[#F9F7F2] text-[#80542B] px-6 py-3 rounded-full shadow-xl flex items-center justify-between w-[95%] max-w-[1200px] border border-[#80542B]/10">
        
        {/* LEFT: Name + Open to Opportunities */}
        <div className="flex items-center gap-4">
          <span className="font-serif font-bold text-lg tracking-wide">Supragnya Purohith</span>
          <div className="hidden md:flex items-center gap-2 bg-[#80542B]/5 border border-[#80542B]/10 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-[#80542B]">Open to opportunities</span>
          </div>
        </div>

        {/* CENTER: Navigation Links (Uppercase, letter-spaced) */}
        <div className="hidden lg:flex items-center gap-8 font-sans text-xs font-bold uppercase tracking-widest absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <Link href="#about" className="hover:opacity-70 transition-opacity">About</Link>
          <Link href="#projects" className="hover:opacity-70 transition-opacity">Projects</Link>
        </div>

        {/* RIGHT: Contact CTA */}
        <div>
          <Link href="#contact" className="bg-[#80542B] text-[#F9F7F2] px-6 py-2.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:scale-105 transition-transform duration-300 inline-block">
            Contact Me
          </Link>
        </div>
      </nav>

      {/* 1. HERO SECTION */}
      <section className="relative h-screen w-full bg-[#80542B] flex items-center overflow-hidden">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 pt-10 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 flex flex-col gap-10">
              <h1 className="font-sans text-5xl lg:text-[3.5rem] leading-[1.15] tracking-tight text-[#F9F7F2] font-medium max-w-[1000px]">
                Designer driven by precision, where logical structure meets user instinct, building systems that actually scale.
              </h1>
              
              <p className="font-sans text-base lg:text-lg text-[#F9F7F2]/80 leading-relaxed max-w-[600px]">
                Focusing on making complex systems feel simple through behavior-first design and technical clarity.
              </p>
              
              {/* CLEANED UP HERO CTA - Just "View work" */}
              <div className="mt-2">
                <Link href="#projects" className="inline-block bg-[#F9F7F2] text-[#80542B] px-8 py-3.5 rounded-lg font-sans font-medium hover:bg-white transition-colors duration-300">
                  View work
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <img src="/images/avatar.png" alt="Supragnya Avatar" className="w-full max-w-[300px] lg:max-w-[360px] object-contain drop-shadow-2xl" />
            </div>
            
          </div>
        </div>
      </section>

      {/* 2. PROJECT: EMERGENCY RESPONSE APP */}
      <section id="projects" className="bg-[#F9F7F2] flex items-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#80542B]">Emergency Response App</h2>
              <p className="font-sans text-xl lg:text-2xl opacity-80 leading-relaxed text-[#80542B] max-w-lg">
                Architectural logic and sub-30-second response times for cardiovascular care.
              </p>
              <Link href="/emergency-app" className="bg-[#80542B] text-[#F9F7F2] px-8 py-4 rounded-full font-sans font-medium w-fit mt-4 hover:scale-105 transition-transform duration-300">
                View Case Study
              </Link>
            </div>
            <div className="lg:col-span-7 w-full h-[50vh] lg:h-[65vh] bg-[#80542B]/10 rounded-2xl flex items-center justify-center border border-[#80542B]/20 overflow-hidden relative">
              <span className="font-sans font-bold tracking-widest uppercase text-sm opacity-50 text-[#80542B]">Cinematic Mockup Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT: UDYOGA PRAMODA */}
      <section className="bg-[#80542B] flex items-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.3)] py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 lg:order-2 flex flex-col gap-6">
              <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#F9F7F2]">Udyoga Pramoda</h2>
              <p className="font-sans text-xl lg:text-2xl opacity-80 leading-relaxed text-[#F9F7F2] max-w-lg">
                Live-production mentor-gated community progression system.
              </p>
              <Link href="/udyoga-pramoda" className="bg-[#F9F7F2] text-[#80542B] px-8 py-4 rounded-full font-sans font-medium w-fit mt-4 hover:scale-105 transition-transform duration-300">
                View Case Study
              </Link>
            </div>
            <div className="lg:col-span-7 lg:order-1 w-full h-[50vh] lg:h-[65vh] bg-[#F9F7F2]/10 rounded-2xl flex items-center justify-center border border-[#F9F7F2]/20 overflow-hidden relative">
              <span className="font-sans font-bold tracking-widest uppercase text-sm opacity-50 text-[#F9F7F2]">Cinematic Mockup Area</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROJECT: RUPEERISE */}
      <section className="bg-[#F9F7F2] flex items-center overflow-hidden shadow-[0_-20px_50px_rgba(0,0,0,0.1)] py-32">
        <div className="w-full max-w-[1400px] mx-auto px-8 md:px-16 lg:px-24 flex flex-col justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <h2 className="font-serif text-5xl lg:text-6xl leading-[1.1] tracking-tight text-[#80542B]">RupeeRise</h2>
              <p className="font-sans text-xl lg:text-2xl opacity-80 leading-relaxed text-[#80542B] max-w-lg">
                Habit-first wealth management designed in a 14-day sprint.
              </p>
              <Link href="/rupeerise" className="bg-[#80542B] text-[#F9F7F2] px-8 py-4 rounded-full font-sans font-medium w-fit mt-4 hover:scale-105 transition-transform duration-300">
                View Case Study
              </Link>
            </div>
            <div className="lg:col-span-7 w-full h-[50vh] lg:h-[65vh] bg-[#80542B]/10 rounded-2xl flex items-center justify-center border border-[#80542B]/20 overflow-hidden relative">
              <span className="font-sans font-bold tracking-widest uppercase text-sm opacity-50 text-[#80542B]">Cinematic Mockup Area</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}