import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="py-16 border-t border-[var(--surface-border)] bg-[var(--bg-sage)] text-[var(--text-primary)]">
      <div className="w-full max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-serif font-semibold text-lg text-[var(--text-primary)] hover:text-[var(--accent-gold)] transition-colors">
            Supragnya Purohith
          </Link>
          <span className="text-xs text-[var(--text-tertiary)] font-mono">Product & Systems Designer</span>
        </div>

        <nav className="flex items-center gap-6 text-xs font-mono uppercase tracking-widest text-[var(--text-tertiary)]">
          <Link href="/" className="hover:text-[var(--text-primary)] transition-colors">
            Home
          </Link>
          <Link href="/#work" className="hover:text-[var(--text-primary)] transition-colors">
            Work
          </Link>
          <a href="mailto:99supragnya@gmail.com" className="hover:text-[var(--accent-gold)] transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </footer>
  );
}
