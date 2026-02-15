"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

type ThumbnailCardProps = {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  parallax?: boolean;
};

export default function ThumbnailCard({
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  parallax = true
}: ThumbnailCardProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = parallaxRef.current;
    if (!node || !parallax) {
      if (node) {
        node.style.transform = "translate3d(0, 0, 0)";
      }
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updateTransform = () => {
      if (!parallaxRef.current || mediaQuery.matches) {
        if (parallaxRef.current) {
          parallaxRef.current.style.transform = "translate3d(0, 0, 0)";
        }
        return;
      }

      const rect = parallaxRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 1;
      const center = rect.top + rect.height / 2;
      const distanceFromCenter = (viewportHeight / 2 - center) / viewportHeight;
      const translateY = Math.max(-40, Math.min(40, distanceFromCenter * 80));

      parallaxRef.current.style.transform = `translate3d(0, ${translateY.toFixed(
        2
      )}px, 0)`;
    };

    const onScrollOrResize = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateTransform);
    };

    const onMotionPreferenceChange = () => {
      onScrollOrResize();
    };

    updateTransform();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    mediaQuery.addEventListener("change", onMotionPreferenceChange);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      mediaQuery.removeEventListener("change", onMotionPreferenceChange);
    };
  }, [parallax]);

  return (
    <Link href={href} className="block group">
      <article className="grid items-center gap-10 border-t border-[#C9D2CC]/10 py-12 md:grid-cols-[1fr_minmax(320px,48%)] md:gap-12 transition-all duration-500">
        <div className="space-y-4 transition-all duration-500 group-hover:translate-x-0.5">
          <h3 className="text-[1.375rem] font-semibold leading-tight text-[#F4F1E8] transition-colors duration-300 group-hover:text-[#a7f36f]">{title}</h3>
          <p className="mt-4 max-w-[680px] text-base leading-relaxed text-[#C9D2CC] transition-colors duration-300">
            {description}
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.28)] group-hover:shadow-[0_24px_64px_rgba(167,243,111,0.12)] transition-all duration-500 group-hover:-translate-y-2">
          <div
            ref={parallaxRef}
            className="h-full w-full transition-transform duration-300 ease-out will-change-transform"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              sizes="(max-width: 768px) 100vw, 48vw"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </article>
    </Link>
  );
}
