import Link from "next/link";
import Section from "@/components/ui/Section";

export default function FooterSection() {
  return (
    <Section
      reveal={false}
      as="footer"
      className="bg-[#121212] py-12 text-[#E8E8E8]"
      containerClassName="space-y-8"
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <p className="text-sm uppercase tracking-[0.14em] text-white/65">
          Supragnya Purohith
        </p>
        <nav className="flex flex-wrap items-center gap-5 text-sm text-white/85">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-white">
            About
          </Link>
          <Link href="/projects/emergency-response" className="transition-colors hover:text-white">
            Work
          </Link>
          <a
            href="mailto:hello@supragnyapurohith.com"
            className="transition-colors hover:text-white"
          >
            Contact
          </a>
        </nav>
      </div>
      <p className="text-xs text-white/55">(c) {new Date().getFullYear()} All rights reserved.</p>
    </Section>
  );
}
