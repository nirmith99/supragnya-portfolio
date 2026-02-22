'use client';

import React from 'react';
import Link from 'next/link';

export default function FloatingNav() {
    return (
        <nav className="fixed left-1/2 top-6 z-[999] flex -translate-x-1/2 items-center justify-between rounded-full bg-brand-bone px-8 py-4 text-brand-mocha shadow-lg border border-brand-mocha/10">
            <Link href="/" className="font-serif-italic text-xl tracking-tight pr-12 transition-opacity hover:opacity-80">
                Supragnya Purohith
            </Link>
            <div className="flex items-center gap-8 font-sans text-sm font-medium">
                <Link href="#about" className="transition-colors hover:text-brand-mocha/70">
                    About
                </Link>
                <Link href="#projects" className="transition-colors hover:text-brand-mocha/70">
                    Projects
                </Link>
                <Link href="#contact" className="transition-colors hover:text-brand-mocha/70">
                    Contact
                </Link>
            </div>
        </nav>
    );
}
