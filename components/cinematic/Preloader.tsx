'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

export default function Preloader() {
    const containerRef = useRef<HTMLDivElement>(null);
    const wordsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Word sequence animation
        const words = gsap.utils.toArray('.preloader-word');

        words.forEach((word: any, i) => {
            tl.to(word, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
            })
                .to(word, {
                    opacity: 0,
                    y: -20,
                    duration: 0.6,
                    ease: 'power3.in',
                    delay: 0.2
                });
        });

        // Reveal Hero
        tl.to(containerRef.current, {
            yPercent: -100,
            duration: 1.2,
            ease: 'power4.inOut',
            delay: 0.2
        });

    }, { scope: containerRef });

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-brand-dark"
        >
            <div ref={wordsRef} className="relative flex h-[100px] items-center justify-center overflow-hidden">
                {['Context.', 'Logic.', 'Interface.'].map((word, index) => (
                    <h1
                        key={word}
                        className="preloader-word absolute translate-y-[20px] text-5xl md:text-7xl font-serif-italic text-brand-white opacity-0"
                    >
                        {word}
                    </h1>
                ))}
            </div>
        </div>
    );
}
