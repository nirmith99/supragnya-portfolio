import Link from "next/link";
import Section from "@/components/ui/Section";

export default function FooterSection() {
  return (
    <Section
      reveal={false}
      as="footer"

      className="py-16 md:py-24 bg-[var(--bg-white)] text-[var(--text-primary)] border-t border-[#8B5E3C]/20"
      containerClassName="space-y-12"
    >
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-[#8B5E3C] font-semibold">
          Supragnya Purohith
        </p>
        <nav className="flex flex-wrap items-center gap-6 md:gap-8 text-sm text-[var(--text-secondary)] font-medium">
          <Link href="/" className="transition-colors duration-250 hover:text-[#8B5E3C]">
            Home
          </Link>
          <Link href="/about" className="transition-colors duration-250 hover:text-[#8B5E3C]">
            About
          </Link>
          <Link
            href="/#selected-work"
            className="transition-colors duration-250 hover:text-[#8B5E3C]"
          >
            Work
          </Link>
          <a
            href="mailto:hello@supragnyapurohith.com"
            className="transition-colors duration-250 hover:text-[#8B5E3C]"
          >
            Contact
          </a>
        </nav>
      </div>
      <p className="text-xs text-[var(--text-tertiary)]">(c) {new Date().getFullYear()} All rights reserved.</p>
    </Section>
  );
}
