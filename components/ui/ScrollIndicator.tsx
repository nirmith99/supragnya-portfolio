"use client";

import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [isHidden, setIsHidden] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mediaQuery.matches);

    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isHidden) {
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 6) {
        setIsHidden(true);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHidden]);

  if (isHidden) {
    return null;
  }

  return (
    <div
      className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2"
      aria-hidden="true"
    >
      <div className="relative h-14 w-px bg-white/35">
        <span
          className={`absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-white/80 ${
            prefersReducedMotion ? "" : "scroll-dot-animate"
          }`}
        />
      </div>
    </div>
  );
}
