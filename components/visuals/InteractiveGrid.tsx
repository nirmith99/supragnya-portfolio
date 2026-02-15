"use client";

import { useEffect, useRef } from "react";

/**
 * InteractiveGrid Component
 * 
 * A high-performance HTML5 Canvas background that renders a grid of dots.
 * The dots react to mouse movement with a physics-based "spring" effect,
 * creating a "living system" feel that aligns with the "Deep Emerald" premium aesthetic.
 */
export default function InteractiveGrid() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let mouseX = -1000;
        let mouseY = -1000;

        // Configuration
        const GRID_SPACING = 40; // Pixels between dots
        const DOT_RADIUS = 1.5;
        const INTERACTION_RADIUS = 120; // Distance of mouse influence
        const ELASTICITY = 0.08; // Speed of return (lower = slower/heavier)
        const DAMPING = 0.82; // Friction (lower = stops faster)
        const COLOR = "rgba(167, 243, 111, 0.12)"; // #a7f36f (Lime) at low opacity

        // Dot Class to manage physics state
        class Dot {
            x: number;
            y: number;
            originX: number;
            originY: number;
            vx: number;
            vy: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.originX = x;
                this.originY = y;
                this.vx = 0;
                this.vy = 0;
            }

            update() {
                // 1. Calculate distance from mouse
                const dx = mouseX - this.x;
                const dy = mouseY - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // 2. Physics: Mouse Repulsion (Magnetic push)
                if (distance < INTERACTION_RADIUS) {
                    const force = (INTERACTION_RADIUS - distance) / INTERACTION_RADIUS;
                    const angle = Math.atan2(dy, dx);
                    const push = force * 6; // Power of the push

                    this.vx -= Math.cos(angle) * push;
                    this.vy -= Math.sin(angle) * push;
                }

                // 3. Physics: Spring back to origin (Hooke's Law)
                const springDx = this.originX - this.x;
                const springDy = this.originY - this.y;

                this.vx += springDx * ELASTICITY;
                this.vy += springDy * ELASTICITY;

                // 4. Physics: Damping (Friction)
                this.vx *= DAMPING;
                this.vy *= DAMPING;

                // 5. Update Position
                this.x += this.vx;
                this.y += this.vy;
            }

            draw(context: CanvasRenderingContext2D) {
                context.beginPath();
                context.arc(this.x, this.y, DOT_RADIUS, 0, Math.PI * 2);
                context.fillStyle = COLOR;
                context.fill();
            }
        }

        // Grid Management
        let dots: Dot[] = [];

        const initGrid = () => {
            dots = [];
            const cols = Math.ceil(canvas.width / GRID_SPACING);
            const rows = Math.ceil(canvas.height / GRID_SPACING);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    dots.push(new Dot(i * GRID_SPACING + GRID_SPACING / 2, j * GRID_SPACING + GRID_SPACING / 2));
                }
            }
        };

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initGrid();
        };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.clientX - rect.left;
            mouseY = e.clientY - rect.top;
        };

        const handleMouseLeave = () => {
            mouseX = -1000;
            mouseY = -1000;
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            dots.forEach((dot) => {
                dot.update();
                dot.draw(ctx);
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Initialize
        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        // Initial setup
        handleResize();
        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 z-0 pointer-events-none"
            style={{ width: "100%", height: "100%" }}
        />
    );
}
