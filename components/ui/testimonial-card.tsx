import { cn } from "@/lib/utils"

export interface TestimonialAuthor {
  name: string
  handle: string
  avatar?: string
}

export interface TestimonialCardProps {
  author: TestimonialAuthor
  text: string
  href?: string
  date?: string
  className?: string
}

export function TestimonialCard({
  author,
  text,
  href,
  date,
  className,
}: TestimonialCardProps) {
  const Card = href ? "a" : "div"

  return (
    <Card
      {...(href ? { href, target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        // Size & shape — matches reference image card width
        "flex flex-col rounded-xl",
        "w-[300px] sm:w-[340px] shrink-0",
        // Background — uses the design system surface token
        "bg-[var(--bg-surface)]",
        "border border-[var(--surface-border)]",
        // Spacing
        "p-6",
        // Interaction
        "hover:border-[var(--accent-gold)]/40 transition-colors duration-300",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Date — top left, muted mono just like the reference image */}
      {date && (
        <p className="font-mono text-[0.65rem] tracking-widest uppercase opacity-40 mb-4">
          {date}
        </p>
      )}

      {/* Large opening quote mark */}
      <span
        aria-hidden="true"
        className="font-serif text-[3rem] leading-none text-[var(--accent-gold)] opacity-40 mb-1 select-none"
      >
        &ldquo;
      </span>

      {/* Quote body */}
      <p className="font-sans text-sm leading-[1.8] text-[var(--text-primary)]/85 flex-grow">
        {text}
      </p>

      {/* Closing quote mark — bottom right, like the reference image */}
      <div className="flex justify-end mt-2">
        <span
          aria-hidden="true"
          className="font-serif text-[2rem] leading-none text-[var(--accent-gold)] opacity-30 select-none"
        >
          &rdquo;
        </span>
      </div>

      {/* Author — dash-prefixed name, exactly like reference */}
      <div className="mt-4 pt-4 border-t border-[var(--surface-border)]">
        <p className="font-bold text-sm tracking-wide text-[var(--text-primary)]">
          &mdash;{author.name}
        </p>
        <p className="font-mono text-[0.65rem] uppercase tracking-widest opacity-50 mt-0.5">
          {author.handle}
        </p>
      </div>
    </Card>
  )
}
