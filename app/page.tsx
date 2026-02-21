import HeroSection from "@/components/sections/HeroSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";
import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import FooterSection from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main className="relative bg-[#FFFFFF] text-[#2D1B0D] flex flex-col gap-[160px] pb-[160px]">
      <HeroSection />
      <SelectedWorkSection />
      <AboutPreviewSection />
      <FooterSection />
    </main>
  );
}
