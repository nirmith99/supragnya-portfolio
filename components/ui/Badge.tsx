import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide",
                variant === "default"
                    ? "bg-brand-surface text-brand-text-primary border border-brand-border-subtle"
                    : "border border-brand-border-strong text-brand-text-secondary w-fit",
                className
            )}
            {...props}
        />
    );
}
