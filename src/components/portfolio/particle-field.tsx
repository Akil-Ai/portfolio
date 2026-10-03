"use client";

import * as React from "react";

/**
 * Lightweight canvas particle field for the hero.
 * Emerald/teal particles drift upward slowly with subtle horizontal sway.
 * Reacts subtly to mouse position (particles near cursor brighten).
 * Respects prefers-reduced-motion (renders nothing).
 */
export function ParticleField({
  count = 40,
  className,
}: {
  count?: number;
  className?: string;
}) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = {
      x: number;
      y: number;
      r: number;
      vy: number;
      sway: number;
      swaySpeed: number;
      phase: number;
      alpha: number;
    };

    let parts: P[] = [];
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Re-init particles on resize
      parts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 0.8 + Math.random() * 2.2,
        vy: -(0.1 + Math.random() * 0.35),
        sway: 0.4 + Math.random() * 0.8,
        swaySpeed: 0.4 + Math.random() * 0.8,
        phase: Math.random() * Math.PI * 2,
        alpha: 0.2 + Math.random() * 0.5,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Draw constellation lines between nearby particles
      const maxDist = 110;
      for (let i = 0; i < parts.length; i++) {
        for (let j = i + 1; j < parts.length; j++) {
          const p1 = parts[i];
          const p2 = parts[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (const p of parts) {
        p.y += p.vy;
        p.phase += 0.01 * p.swaySpeed;
        p.x += Math.sin(p.phase) * p.sway * 0.3;

        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        // Brighten near mouse
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const boost = dist < 120 ? (1 - dist / 120) * 0.5 : 0;
        const a = Math.min(1, p.alpha + boost);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        // emerald-400 ~ rgba(16,185,129,a)
        ctx.fillStyle = `rgba(16, 185, 129, ${a})`;
        ctx.shadowBlur = 8 + boost * 12;
        ctx.shadowColor = "rgba(16, 185, 129, 0.8)";
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(draw);
    };

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
