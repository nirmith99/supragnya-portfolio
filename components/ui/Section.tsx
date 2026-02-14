"use client";

import { ElementType, ReactNode, useEffect, useRef, useState } from "react";

type SectionProps = {
  as?: ElementType;
  id?: string;
  className?: string;
  containerClassName?: string;
  children: ReactNode;
  delayMs?: number;
  reveal?: boolean;
};

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

export default function Section({
  as: Tag = "section",
  id,
  className,
  containerClassName,
  children,
  delayMs = 0,
  reveal = true
}: SectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(!reveal);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (!reveal || prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = containerRef.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [prefersReducedMotion, reveal]);

  return (
    <Tag id={id} className={className}>
      <div
        ref={containerRef}
        data-reveal={isVisible ? "in" : "out"}
        style={
          prefersReducedMotion || !reveal
            ? undefined
            : { transitionDelay: `${delayMs}ms` }
        }
        className={cn(
          "mx-auto w-full max-w-[1200px] px-6 md:px-10",
          containerClassName
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
