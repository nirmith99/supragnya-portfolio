"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ROLES = [
    { symbol: "</>", hex: "#7EB3FF", label: "knows enough to speak dev" },
    { symbol: "PM", hex: "#FFD060", label: "thinks about why, not just how" },
    { symbol: "QA ✓", hex: "#6FEFAA", label: "asks 'what could break?' early" },
];

export default function HeroPencil() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const drawSymbolRef = useRef<((text: string, color: string) => void) | null>(null);
    const [roleIdx, setRoleIdx] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        // Role cycling logic
        const interval = setInterval(() => {
            setOpacity(0);
            setTimeout(() => {
                setRoleIdx((prev) => {
                    const next = (prev + 1) % ROLES.length;
                    if (drawSymbolRef.current) {
                        drawSymbolRef.current(ROLES[next].symbol, ROLES[next].hex);
                    }
                    return next;
                });
                setOpacity(1);
            }, 350);
        }, 2600);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Only boot Three.js on desktop (>768)
        const isDesktop = () => window.innerWidth >= 768;
        if (!isDesktop() || !canvasRef.current) return;

        let requestID: number;
        const canvas = canvasRef.current;
        const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
        camera.position.set(0, 0, 10);
        camera.lookAt(0, 0, 0);

        function mk(geo: THREE.BufferGeometry, mat: THREE.Material, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
            const m = new THREE.Mesh(geo, mat);
            m.position.set(x, y, z);
            m.rotation.set(rx, ry, rz);
            return m;
        }

        const mBody = new THREE.MeshStandardMaterial({ color: 0xF2C230, roughness: 0.28, metalness: 0.04 });
        const mFaceB = new THREE.MeshStandardMaterial({ color: 0xF9D96A, roughness: 0.28, metalness: 0.04 });
        const mWood = new THREE.MeshStandardMaterial({ color: 0xC4885A, roughness: 0.72 });
        const mLead = new THREE.MeshStandardMaterial({ color: 0x1A1A1A, roughness: 0.92 });
        const mBand = new THREE.MeshStandardMaterial({ color: 0xA0855A, roughness: 0.22, metalness: 0.7 });
        const mErase = new THREE.MeshStandardMaterial({ color: 0xF09898, roughness: 0.6 });

        const pencil = new THREE.Group();
        const SEG = 6;
        const LEAD_H = 0.22, WOOD_H = 0.55, BODY_H = 2.6, BAND_H = 0.12, ERASE_H = 0.26;
        const leadTop = LEAD_H, woodBot = leadTop, woodTop = woodBot + WOOD_H;
        const bodyBot = woodTop, bodyTop = bodyBot + BODY_H;
        const bandBot = bodyTop, bandTop = bandBot + BAND_H;
        const eraseBot = bandTop, eraseTop = eraseBot + ERASE_H;

        const lm = new THREE.Mesh(new THREE.ConeGeometry(0.038, LEAD_H, 12), mLead);
        lm.rotation.x = Math.PI;
        lm.position.y = leadTop - LEAD_H / 2;
        pencil.add(lm);

        pencil.add(mk(new THREE.CylinderGeometry(0.18, 0.038, WOOD_H, SEG), mWood, 0, woodBot + WOOD_H / 2));
        pencil.add(mk(new THREE.CylinderGeometry(0.18, 0.18, BODY_H, SEG), mBody, 0, bodyBot + BODY_H / 2));

        for (let i = 0; i < SEG; i += 2) {
            pencil.add(mk(new THREE.CylinderGeometry(0.182, 0.182, BODY_H, SEG, 1, true, (i / SEG) * Math.PI * 2, Math.PI * 2 / SEG), mFaceB, 0, bodyBot + BODY_H / 2));
        }

        pencil.add(mk(new THREE.CylinderGeometry(0.192, 0.192, BAND_H, SEG), mBand, 0, bandBot + BAND_H / 2));
        pencil.add(mk(new THREE.CylinderGeometry(0.168, 0.168, ERASE_H, SEG), mErase, 0, eraseBot + ERASE_H / 2));
        pencil.add(mk(new THREE.CylinderGeometry(0.168, 0.168, 0.012, SEG), new THREE.MeshStandardMaterial({ color: 0xE08888, roughness: 0.5 }), 0, eraseTop + 0.006));

        const pencilCenter = eraseTop / 2;
        pencil.position.y = -pencilCenter - 0.6;
        pencil.rotation.z = 0.18;
        pencil.rotation.x = -0.10;
        scene.add(pencil);

        // Hat
        const hatGroup = new THREE.Group();
        scene.add(hatGroup);
        const hM = new THREE.MeshStandardMaterial({ color: 0x4A2E0A, roughness: 0.78, metalness: 0.04 });
        const hM2 = new THREE.MeshStandardMaterial({ color: 0x2E1A04, roughness: 0.85 });
        const hB = new THREE.MeshStandardMaterial({ color: 0x7A5020, roughness: 0.55 });

        hatGroup.add(mk(new THREE.CylinderGeometry(0.46, 0.44, 0.08, 24), hM, 0, 0.04));
        hatGroup.add(mk(new THREE.CylinderGeometry(0.32, 0.42, 0.26, 16), hM, 0, 0.21));
        hatGroup.add(mk(new THREE.CylinderGeometry(0.20, 0.32, 0.32, 12), hM, 0.05, 0.49));
        hatGroup.add(mk(new THREE.CylinderGeometry(0.11, 0.20, 0.30, 10), hM, 0.08, 0.74));

        const tc = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.44, 10), hM);
        tc.position.set(0.12, 0.96, 0);
        tc.rotation.z = -0.40;
        hatGroup.add(tc);

        hatGroup.add(mk(new THREE.TorusGeometry(0.43, 0.022, 8, 32), hB, 0, 0.075, 0, Math.PI / 2));
        hatGroup.add(mk(new THREE.TorusGeometry(0.23, 0.016, 6, 20, Math.PI), hM2, 0.02, 0.20, 0.24, Math.PI * 0.48, 0, 0));

        const symCvs = document.createElement('canvas');
        symCvs.width = symCvs.height = 256;
        const symCtx = symCvs.getContext('2d');
        const symTex = new THREE.CanvasTexture(symCvs);
        const symMesh = new THREE.Mesh(
            new THREE.PlaneGeometry(0.52, 0.52),
            new THREE.MeshBasicMaterial({ map: symTex, transparent: true, depthTest: false, depthWrite: false, side: THREE.DoubleSide })
        );
        symMesh.position.set(0.06, 0.20, 0.35);
        hatGroup.add(symMesh);

        function roundRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
            ctx.beginPath();
            ctx.moveTo(x + r, y);
            ctx.lineTo(x + w - r, y);
            ctx.quadraticCurveTo(x + w, y, x + w, y + r);
            ctx.lineTo(x + w, y + h - r);
            ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
            ctx.lineTo(x + r, y + h);
            ctx.quadraticCurveTo(x, y + h, x, y + h - r);
            ctx.lineTo(x, y + r);
            ctx.quadraticCurveTo(x, y, x + r, y);
            ctx.closePath();
        }

        drawSymbolRef.current = (text: string, color: string) => {
            if (!symCtx) return;
            symCtx.clearRect(0, 0, 256, 256);
            symCtx.fillStyle = 'rgba(0,0,0,0.78)';
            roundRect(symCtx, 38, 92, 180, 72, 18);
            symCtx.fill();
            symCtx.strokeStyle = color;
            symCtx.lineWidth = 4;
            roundRect(symCtx, 38, 92, 180, 72, 18);
            symCtx.stroke();
            symCtx.font = 'bold 64px "JetBrains Mono",monospace';
            symCtx.fillStyle = '#fff';
            symCtx.textAlign = 'center';
            symCtx.textBaseline = 'middle';
            symCtx.shadowColor = color;
            symCtx.shadowBlur = 14;
            symCtx.fillText(text, 128, 128);
            symTex.needsUpdate = true;
        };

        drawSymbolRef.current(ROLES[0].symbol, ROLES[0].hex);

        scene.add(new THREE.AmbientLight(0xF5EDE0, 0.7));
        const key = new THREE.DirectionalLight(0xFFFAF0, 2.4);
        key.position.set(4, 8, 6);
        scene.add(key);
        const fill = new THREE.DirectionalLight(0xC8903A, 0.9);
        fill.position.set(-5, 2, -2);
        scene.add(fill);
        const rim = new THREE.DirectionalLight(0xFFEED0, 1.0);
        rim.position.set(0, -5, -4);
        scene.add(rim);
        const front = new THREE.DirectionalLight(0xFFFFFF, 1.6);
        front.position.set(0, 1, 10);
        scene.add(front);

        function onResize() {
            if (!containerRef.current) return;
            const w = containerRef.current.clientWidth;
            const h = containerRef.current.clientHeight;
            if (!w || !h) return;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        }

        window.addEventListener('resize', onResize);
        setTimeout(onResize, 100);

        let mx = 0, my = 0;
        const onMouseMove = (e: MouseEvent) => {
            mx = (e.clientX / window.innerWidth - 0.5) * 2;
            my = (e.clientY / window.innerHeight - 0.5) * 2;
        };
        document.addEventListener('mousemove', onMouseMove);

        const clock = new THREE.Clock();
        const ewp = new THREE.Vector3();

        function loop() {
            requestID = requestAnimationFrame(loop);
            const t = clock.getElapsedTime();
            pencil.rotation.y = t * 0.30;
            pencil.position.y = -pencilCenter - 0.6 + Math.sin(t * 0.8) * 0.10;
            pencil.rotation.x = -0.10 + my * 0.04;
            pencil.rotation.z = 0.18 + mx * 0.04;
            pencil.localToWorld(ewp.set(0, eraseTop + 0.06, 0));
            hatGroup.position.copy(ewp);
            hatGroup.rotation.x = -0.08 + my * 0.025;
            hatGroup.rotation.z = 0.10 + mx * 0.025;
            renderer.render(scene, camera);
        }
        loop();

        return () => {
            window.removeEventListener('resize', onResize);
            document.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(requestID);
            renderer.dispose();
            // clean up geometry/materials ideally here, but okay for portfolio
        };
    }, []);

    const activeRole = ROLES[roleIdx];

    return (
        <>
            <div className="hidden items-center gap-2 mb-8 px-4 py-2 rounded-full border border-white/15 bg-black/20 font-mono text-[0.7rem] transition-opacity duration-300" style={{ opacity }}>
                <span className="w-[7px] h-[7px] rounded-full shrink-0 transition-all duration-400" style={{ background: activeRole.hex, boxShadow: `0 0 8px ${activeRole.hex}` }}></span>
                <span style={{ color: activeRole.hex }} className="transition-colors duration-300">{activeRole.label}</span>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center w-full h-full pointer-events-none" ref={containerRef}>
                <canvas ref={canvasRef} className="block w-full max-w-[420px] h-[clamp(360px,40vw,480px)] lg:h-[520px] pointer-events-auto"></canvas>
                <div className="inline-flex items-center gap-2 mt-1 px-5 py-2 rounded-full border border-white/20 bg-[#2D1B0D]/85 font-mono text-[0.75rem] transition-opacity duration-300" style={{ opacity }}>
                    <span className="w-[7px] h-[7px] rounded-full shrink-0 transition-all duration-400" style={{ background: activeRole.hex, boxShadow: `0 0 8px ${activeRole.hex}` }}></span>
                    <span className="text-[#F5EDE0]">{activeRole.label}</span>
                </div>
            </div>
        </>
    );
}
