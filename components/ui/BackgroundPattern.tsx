export default function BackgroundPattern() {
    return (
        <div className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-60">
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern
                        id="ui-pattern"
                        x="0"
                        y="0"
                        width="160"
                        height="160"
                        patternUnits="userSpaceOnUse"
                    >
                        <g stroke="currentColor" fill="none" strokeWidth="1.5" strokeOpacity="0.4">
                            {/* Subtle Grid Crosses */}
                            <path d="M 80 75 L 80 85 M 75 80 L 85 80" />
                            <path d="M 0 155 L 0 165 M -5 160 L 5 160" />

                            {/* Element 1: Browser Window Sketch */}
                            <g transform="translate(20, 20)">
                                <rect x="0" y="0" width="50" height="35" rx="3" />
                                <path d="M 0 8 L 50 8" />
                                <circle cx="6" cy="4" r="1.5" />
                                <circle cx="12" cy="4" r="1.5" />
                                <circle cx="18" cy="4" r="1.5" />
                                <rect x="6" y="14" width="16" height="15" rx="1" />
                                <rect x="28" y="14" width="16" height="4" rx="1" />
                                <rect x="28" y="21" width="16" height="4" rx="1" />
                                <rect x="28" y="28" width="10" height="3" rx="1" />
                            </g>

                            {/* Element 2: Figma/Cursor Arrow */}
                            <g transform="translate(100, 35)">
                                <path
                                    d="M 0 0 L 8 20 L 12 13 L 18 20 L 21 17 L 14 10 L 21 8 Z"
                                    fill="currentColor"
                                    fillOpacity="0.15"
                                />
                            </g>

                            {/* Element 3: Wireframe Mobile Layout */}
                            <g transform="translate(105, 95)">
                                <rect x="0" y="0" width="26" height="45" rx="4" />
                                <rect x="4" y="6" width="18" height="12" rx="1" />
                                <path d="M 4 24 L 22 24 M 4 30 L 18 30 M 4 36 L 20 36" />
                            </g>

                            {/* Element 4: Draft Pencil */}
                            <g transform="translate(45, 110) rotate(-45)">
                                <path d="M 0 0 L 6 0 L 6 20 L 3 26 L 0 20 Z" />
                                <path d="M 0 5 L 6 5" />
                                <path
                                    d="M 2 20 L 3 26 L 4 20"
                                    fill="currentColor"
                                    fillOpacity="0.3"
                                />
                            </g>
                        </g>
                    </pattern>
                </defs>
                <rect
                    width="100%"
                    height="100%"
                    fill="url(#ui-pattern)"
                    className="text-[#2D1B0D] dark:text-[#F9F7F2]"
                />
            </svg>
        </div>
    );
}
