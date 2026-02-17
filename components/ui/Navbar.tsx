"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent, useCallback, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Modal from "@/components/ui/Modal";
import HamburgerMenu from "@/components/ui/HamburgerMenu";
// Removed missing import '@/utils/cn'; using local definition below.
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

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
            ? "bg-[#121212]/95 backdrop-blur-md border-b border-white/10 shadow-sm"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <div className="mx-auto w-full layout-padding h-[var(--nav-height)] flex items-center justify-between">
          <Link
            href="/"
            onClick={(e) => {
              if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-white font-bold text-[1rem] tracking-tight font-heading z-50 relative"
          >
            Supragnya Purohith
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Primary" className="hidden lg:flex items-center gap-10">
            <button
              onClick={handleWorkClick}
              className="text-[#BDBDBD] text-[0.96rem] hover:text-white transition-colors relative group font-medium"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
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
              className="text-[#BDBDBD] text-[0.96rem] hover:text-white transition-colors relative group font-medium"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="text-[#BDBDBD] text-[0.96rem] hover:text-white transition-colors relative group font-medium"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Mobile Nav */}
          <HamburgerMenu onContactClick={() => setIsContactModalOpen(true)} />
        </div>
      </motion.header>
      <Modal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </>
  );
}
