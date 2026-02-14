import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  external?: boolean;
  download?: boolean;
};

function cn(...values: Array<string | undefined>) {
  return values.filter(Boolean).join(" ");
}

const baseStyles =
  "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#0F3D2E] text-white hover:bg-[#154b39] focus-visible:ring-[#0F3D2E] focus-visible:ring-offset-[#0E0E0E]",
  secondary:
    "border border-white/30 bg-transparent text-white hover:border-white/50 hover:bg-white/10 focus-visible:ring-white focus-visible:ring-offset-[#0E0E0E]"
};

export default function Button({
  children,
  variant = "primary",
  href,
  className,
  onClick,
  type = "button",
  external = false,
  download = false
}: ButtonProps) {
  const styles = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    const forceAnchor =
      external || download || href.startsWith("mailto:") || href.startsWith("http");

    if (forceAnchor) {
      return (
        <a
          href={href}
          className={styles}
          onClick={onClick}
          target={external ? "_blank" : undefined}
          rel={external ? "noreferrer" : undefined}
          download={download}
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={styles} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>
  );
}
