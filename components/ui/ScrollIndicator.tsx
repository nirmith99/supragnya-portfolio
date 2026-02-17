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
      <div className="relative flex h-11 w-6 items-start justify-center rounded-full border border-white/40 p-1.5">
        <span
          className={`h-2 w-2 rounded-full bg-white/85 ${prefersReducedMotion ? "" : "scroll-dot-animate"
            }`}
        />
      </div>
    </div>
  );
}
