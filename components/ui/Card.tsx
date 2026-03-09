import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn("glass-panel p-6 sm:p-8 transition-all duration-300 hover:border-brand-border-strong hover:bg-brand-surface", className)}
            {...props}
        />
    )
)
Card.displayName = "Card"

export { Card }
