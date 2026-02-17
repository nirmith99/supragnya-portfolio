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
    "bg-[#A67C52] text-white hover:bg-[#B58B5F] focus-visible:ring-[#A67C52] focus-visible:ring-offset-[#071f19] shadow-[0_8px_16px_rgba(166,124,82,0.2)] hover:shadow-[0_12px_32px_rgba(166,124,82,0.32)] hover:-translate-y-0.5",
  secondary:
    "border border-white/40 bg-transparent text-white hover:border-[#A67C52] hover:bg-[#A67C52]/10 focus-visible:ring-white focus-visible:ring-offset-[#071f19] transition-all duration-300 hover:shadow-[0_8px_16px_rgba(166,124,82,0.15)] hover:-translate-y-0.5"
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
