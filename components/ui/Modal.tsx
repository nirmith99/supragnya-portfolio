"use client";

import { useEffect, useRef, useState } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const FOCUSABLE_SELECTOR =
  "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

export default function Modal({ isOpen, onClose }: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen && isMounted) {
      const timer = window.setTimeout(() => setIsMounted(false), 180);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [isMounted, isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const modalNode = modalRef.current;
    if (!modalNode) {
      return;
    }

    const focusableElements = Array.from(
      modalNode.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
    );

    focusableElements[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const currentFocusable = Array.from(
        modalNode.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (!currentFocusable.length) {
        event.preventDefault();
        return;
      }

      const first = currentFocusable[0];
      const last = currentFocusable[currentFocusable.length - 1];
      const activeElement = document.activeElement as HTMLElement | null;

      if (event.shiftKey && activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isMounted) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/65 px-6 transition-opacity duration-200 ${isOpen ? "opacity-100" : "opacity-0"
        }`}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-label="Contact Supragnya"
        className={`w-full max-w-md rounded-xl bg-[#1E1E1E] p-8 text-white transition-all duration-200 ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
          }`}
      >
        <p className="mb-6 text-base text-[#D4D4D4]">
          Let&apos;s build thoughtful products together.
        </p>
        <div className="space-y-3 text-sm">
          <a
            href="mailto:hello@supragnyapurohith.com"
            className="block text-[#E9E9E9] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            hello@supragnyapurohith.com
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="block text-[#E9E9E9] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            LinkedIn
          </a>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-8 inline-flex rounded-md border border-white/30 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        >
          Close
        </button>
      </div>
    </div>
  );
}
