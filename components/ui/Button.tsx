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
  "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold tracking-[0.02em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden group";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#2D1B0D] text-white hover:bg-[#8B5E3C] hover:text-white focus-visible:ring-offset-[#2D1B0D] shadow-[0_8px_16px_rgba(45,27,13,0.1)] hover:shadow-[0_12px_32px_rgba(139,94,60,0.2)] hover:-translate-y-0.5",
  secondary:
    "border border-[#2D1B0D]/20 bg-transparent text-[#2D1B0D] hover:border-[#8B5E3C] hover:text-[#8B5E3C] hover:bg-[#8B5E3C]/10 focus-visible:ring-[#8B5E3C] focus-visible:ring-offset-white transition-all duration-300 hover:shadow-[0_8px_16px_rgba(139,94,60,0.1)] hover:-translate-y-0.5"
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
