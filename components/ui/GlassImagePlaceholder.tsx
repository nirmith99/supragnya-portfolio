import { twMerge } from "tailwind-merge";

interface GlassImagePlaceholderProps {
    label: string;
    className?: string;
}

export default function GlassImagePlaceholder({ label, className }: GlassImagePlaceholderProps) {
    return (
        <div className={twMerge("w-full aspect-video rounded-xl bg-[#0d4a3e]/30 border border-[#a7f36f]/20 flex items-center justify-center relative overflow-hidden group", className)}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-[#a7f36f]/60 font-mono text-sm md:text-lg text-center px-4 select-none">
                {label}
            </span>
        </div>
    );
}
