'use client'

import React, { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const render = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }
      requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    requestAnimationFrame(render);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        if (dotRef.current) {
          dotRef.current.style.transition = 'transform 0.2s';
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(3)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transition = 'transform 0.2s';
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(1.5)`;
        }
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a') || target.closest('button')) {
        if (dotRef.current) {
          dotRef.current.style.transition = 'none';
          dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(1)`;
        }
        if (ringRef.current) {
          ringRef.current.style.transition = 'none';
          ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(1)`;
        }
      }
    };

    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('mouseout', onMouseOut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('mouseout', onMouseOut);
    };
  }, []);

  return (
    <>
      <div 
        ref={ringRef} 
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-[var(--offwhite)] pointer-events-none z-[9999] -ml-4 -mt-4 mix-blend-difference hidden md:block"
      />
      <div 
        ref={dotRef} 
        className="fixed top-0 left-0 w-2 h-2 bg-[var(--gold)] rounded-full pointer-events-none z-[9999] -ml-1 -mt-1 mix-blend-difference hidden md:block"
      />
    </>
  )
}
