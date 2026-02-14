import AboutPreviewSection from "@/components/sections/AboutPreviewSection";
import FooterSection from "@/components/sections/FooterSection";
import HeroSection from "@/components/sections/HeroSection";
import SelectedWorkSection from "@/components/sections/SelectedWorkSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SelectedWorkSection delayMs={100} />
      <TestimonialsSection delayMs={200} />
      <AboutPreviewSection delayMs={300} />
      <FooterSection />
    </main>
  );
}
