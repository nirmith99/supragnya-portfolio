"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";

const HERO_ID = "hero-section";
const WORK_SECTION_ID = "selected-work";
const NAVBAR_HEIGHT = 72;

function shouldReduceMotion() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isPastHero, setIsPastHero] = useState(pathname !== "/");

  useEffect(() => {
    if (pathname !== "/") {
      setIsPastHero(true);
      return;
    }

    const heroSection = document.getElementById(HERO_ID);
    if (!heroSection) {
      setIsPastHero(true);
      return;
    }

    let frame = 0;

    const updateNavbarState = () => {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      setIsPastHero(heroBottom <= NAVBAR_HEIGHT);
    };

    const onScrollOrResize = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateNavbarState);
    };

    updateNavbarState();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [pathname]);

  const handleWorkClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      if (pathname !== "/") {
        router.push("/#selected-work");
        return;
      }

      const selectedWorkSection = document.getElementById(WORK_SECTION_ID);
      if (!selectedWorkSection) {
        return;
      }

      selectedWorkSection.scrollIntoView({
        behavior: shouldReduceMotion() ? "auto" : "smooth",
        block: "start"
      });
    },
    [pathname, router]
  );

  const baseTextClasses = isPastHero ? "text-[#1A1A1A]" : "text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,color] duration-300 ease-out motion-reduce:transition-none ${
          isPastHero
            ? "border-[#101010]/10 bg-[#F5F1E8]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] w-full max-w-[1280px] items-center justify-between px-8">
          <Link
            href="/"
            className={`${baseTextClasses} text-[1rem] font-medium transition-colors duration-300 ease-out motion-reduce:transition-none`}
          >
            Supragnya Purohith
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-8">
            <button
              type="button"
              onClick={handleWorkClick}
              className={`${baseTextClasses} text-[0.95rem] transition-colors duration-300 ease-out hover:opacity-75 motion-reduce:transition-none`}
            >
              Work
            </button>
            <Link
              href="/about"
              className={`${baseTextClasses} text-[0.95rem] transition-colors duration-300 ease-out hover:opacity-75 motion-reduce:transition-none`}
            >
              About
            </Link>
            <button
              type="button"
              onClick={() => setIsContactModalOpen(true)}
              className={`${baseTextClasses} text-[0.95rem] transition-colors duration-300 ease-out hover:opacity-75 motion-reduce:transition-none`}
            >
              Contact
            </button>
          </nav>
        </div>
      </header>
      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
