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
      <article className="grid items-center gap-10 border-t border-black/15 py-12 md:grid-cols-[1fr_minmax(320px,48%)] md:gap-12">
        <div>
          <h3 className="text-[1.375rem] font-medium leading-tight text-[#111111]">{title}</h3>
          <p className="mt-4 max-w-[680px] text-base leading-relaxed text-[#454545]">
            {description}
          </p>
        </div>
        <div className="relative aspect-video overflow-hidden rounded-[10px] shadow-[0_10px_28px_rgba(0,0,0,0.12)]">
          <div
            ref={parallaxRef}
            className="h-full w-full transition-transform duration-300 ease-out will-change-transform"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 48vw"
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}
