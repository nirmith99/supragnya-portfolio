'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Check if device is touch capable
        if (window.matchMedia('(pointer: coarse)').matches) return;

        const cursor = cursorRef.current;
        if (!cursor) return;

        // Move cursor logic
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.1,
                ease: 'power2.out'
            });
        };

        // Hover effect logic
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Look for specific classes or tag names
            if (
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-magnetic')
            ) {
                setIsHovering(true);
                gsap.to(cursor, {
                    scale: 3,
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    duration: 0.3,
                    ease: 'power2.out'
                });
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
            gsap.to(cursor, {
                scale: 1,
                backgroundColor: 'rgba(249, 247, 242, 1)', // brand-white
                border: 'none',
                duration: 0.3,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', moveCursor);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className={`pointer-events-none fixed left-0 top-0 z-[99999] hidden h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-white mix-blend-difference md:block ${isHovering ? 'backdrop-blur-sm' : ''}`}
        />
    );
}
