"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent, Transition } from "framer-motion";
import Modal from "@/components/ui/Modal";
// Removed missing import '@/utils/cn'; using local definition below.
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const HERO_SECTION_ID = "hero-section";
const WORK_SECTION_ID = "selected-work";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isPastThreshold = latest > 50;
    if (isPastThreshold !== isScrolled) {
      setIsScrolled(isPastThreshold);
    }
  });

  const handleWorkClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      if (pathname !== "/") {
        router.push("/#selected-work");
        return;
      }
      const selectedWorkSection = document.getElementById(WORK_SECTION_ID);
      if (selectedWorkSection) {
        selectedWorkSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    },
    [pathname, router]
  );

  const isLightPage = pathname === "/about";

  // Spring configuration for that "physics-based" feel
  const springConfig = { type: "spring" as const, stiffness: 120, damping: 20, mass: 1 };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={springConfig}
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
          isScrolled
            ? "bg-[#071f19]/90 backdrop-blur-md border-b border-[#a7f36f]/10 shadow-lg"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto w-full max-w-[1280px] px-6 md:px-10 h-[var(--nav-height)] flex items-center justify-between">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-[#F4F1E8] font-medium text-[0.96rem] tracking-[0.012em]"
          >
            Supragnya Purohith
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-6 md:gap-10">
            <button
              onClick={handleWorkClick}
              className="text-[#F4F1E8] text-[0.96rem] hover:text-[#a7f36f] transition-colors relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#a7f36f] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                if (pathname !== "/") {
                  router.push("/#about");
                  return;
                }
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="text-[#F4F1E8] text-[0.96rem] hover:text-[#a7f36f] transition-colors relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#a7f36f] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-[#F4F1E8] text-[0.96rem] hover:text-[#a7f36f] transition-colors relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#a7f36f] transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>
        </div>
      </motion.header>
      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
