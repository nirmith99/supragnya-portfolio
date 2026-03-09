import * as React from "react";
import { cn } from "@/lib/utils";

export const H1 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h1 ref={ref} className={cn("text-step-5 sm:text-step-6 md:text-step-8 font-heading font-semibold leading-none tracking-tight text-balance", className)} {...props} />
));
H1.displayName = "H1";

export const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h2 ref={ref} className={cn("text-step-4 sm:text-step-5 lg:text-step-6 font-heading font-semibold leading-tight tracking-tight text-balance", className)} {...props} />
));
H2.displayName = "H2";

export const H3 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-step-2 sm:text-step-3 font-heading font-semibold leading-tight", className)} {...props} />
));
H3.displayName = "H3";

export const P = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-step-0 sm:text-step-1 text-brand-text-secondary", className)} {...props} />
));
P.displayName = "P";
