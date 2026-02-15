import Link from "next/link";
import Section from "@/components/ui/Section";

export default function FooterSection() {
  return (
    <Section
      reveal={false}
      as="footer"
      className="py-16 md:py-20 border-t border-[#C9D2CC]/10"
      containerClassName="space-y-10"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs md:text-sm uppercase tracking-[0.16em] text-[#a7f36f] font-semibold">
          Supragnya Purohith
        </p>
        <nav className="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-[#C9D2CC]">
          <Link href="/" className="transition-colors duration-250 hover:text-[#a7f36f] hover:font-medium">
            Home
          </Link>
          <Link href="/about" className="transition-colors duration-250 hover:text-[#a7f36f] hover:font-medium">
            About
          </Link>
          <Link
            href="/projects/emergency-response"
            className="transition-colors duration-250 hover:text-[#a7f36f] hover:font-medium"
          >
            Work
          </Link>
          <a
            href="mailto:hello@supragnyapurohith.com"
            className="transition-colors duration-250 hover:text-[#a7f36f] hover:font-medium"
          >
            Contact
          </a>
        </nav>
      </div>
      <p className="text-xs text-[#C9D2CC]/60">(c) {new Date().getFullYear()} All rights reserved.</p>
    </Section>
  );
}
