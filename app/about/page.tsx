import { Navbar } from "@/components/layout/Navbar";
import AboutDetailSection from "@/components/sections/AboutDetailSection";
import FooterSection from "@/components/sections/FooterSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-sage)] text-[var(--text-primary)] flex flex-col justify-between">
      <Navbar />
      <AboutDetailSection />
      <FooterSection />
    </main>
  );
}
