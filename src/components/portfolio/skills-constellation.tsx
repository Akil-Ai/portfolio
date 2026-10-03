"use client";

import * as React from "react";

type SkillNode = {
  name: string;
  level: number;
  angle: number; // degrees
  color: string;
};

const skillNodes: SkillNode[] = [
  { name: "Python", level: 90, angle: 0, color: "#34d399" },
  { name: "Machine Learning", level: 72, angle: 45, color: "#2dd4bf" },
  { name: "SQL", level: 75, angle: 90, color: "#22d3ee" },
  { name: "JavaScript", level: 72, angle: 135, color: "#5eead4" },
  { name: "Java", level: 70, angle: 180, color: "#6ee7b7" },
  { name: "HTML/CSS", level: 80, angle: 225, color: "#a7f3d0" },
  { name: "Leadership", level: 82, angle: 270, color: "#fcd34d" },
  { name: "Teamwork", level: 88, angle: 315, color: "#fbbf24" },
];

/**
 * Canvas radial "constellation" of skills.
 * Nodes positioned around a center, sized by proficiency, connected by lines,
 * with gentle floating + mouse repulsion. Respects prefers-reduced-motion.
 */
export function SkillsConstellation({ className }: { className?: string }) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const reduced = mq.matches;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };

    type Node = {
      baseX: number;
      baseY: number;
      x: number;
      y: number;
      r: number;
      color: string;
      name: string;
      level: number;
    };
    let nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cx = w / 2;
      const cy = h / 2;
      const radius = Math.min(w, h) * 0.34;
      nodes = skillNodes.map((s) => {
        const rad = ((s.angle - 90) * Math.PI) / 180;
        return {
          baseX: cx + radius * Math.cos(rad),
          baseY: cy + radius * Math.sin(rad),
          x: cx + radius * Math.cos(rad),
          y: cy + radius * Math.sin(rad),
          r: 4 + (s.level / 100) * 10,
          color: s.color,
          name: s.name,
          level: s.level,
        };
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const t = Date.now() * 0.001;

      // Update positions (gentle float + mouse repulsion) unless reduced-motion
      nodes.forEach((n, i) => {
        if (reduced) {
          n.x = n.baseX;
          n.y = n.baseY;
        } else {
          n.x = n.baseX + Math.sin(t + i) * 3;
          n.y = n.baseY + Math.cos(t + i * 0.7) * 3;
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90 && dist > 0) {
            const force = (90 - dist) / 90;
            n.x += (dx / dist) * force * 8;
            n.y += (dy / dist) * force * 8;
          }
        }
      });

      // Center core
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 30);
      coreGrad.addColorStop(0, "rgba(16, 185, 129, 0.5)");
      coreGrad.addColorStop(1, "rgba(16, 185, 129, 0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 30, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      // Lines: each node to center
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(cx, cy);
        ctx.strokeStyle = "rgba(16, 185, 129, 0.12)";
        ctx.lineWidth = 0.8;
        ctx.stroke();
      });

      // Lines: between nearby nodes (constellation)
      const maxD = 180;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxD) {
            const alpha = (1 - dist / maxD) * 0.22;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach((n) => {
        // glow
        const g = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 2.2);
        g.addColorStop(0, n.color + "cc");
        g.addColorStop(1, n.color + "00");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
        // core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();
        // label
        ctx.font = "600 11px Inter, system-ui, sans-serif";
        ctx.fillStyle = "#e2e8f0";
        ctx.textAlign = "center";
        ctx.fillText(`${n.name}`, n.x, n.y + n.r + 13);
        ctx.font = "10px ui-monospace, monospace";
        ctx.fillStyle = "#94a3b8";
        ctx.fillText(`${n.level}%`, n.x, n.y + n.r + 25);
      });

      if (!reduced) raf = requestAnimationFrame(draw);
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
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);
    if (reduced) {
      draw(); // single frame
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute left-4 top-4 z-10 text-[10px] font-medium uppercase tracking-wider text-slate-500">
        Skill constellation
      </div>
      <div className="pointer-events-none absolute bottom-3 right-4 z-10 text-[10px] text-slate-600">
        node size ∝ proficiency · hover to interact
      </div>
      <canvas
        ref={canvasRef}
        aria-hidden
        style={{ width: "100%", height: "100%", display: "block" }}
      />
    </div>
  );
}
