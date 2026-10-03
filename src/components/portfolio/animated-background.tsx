"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Slowly shifting animated gradient background with mouse-move parallax.
 * Fixed, pointer-events-none, sits behind all content (-z-40).
 * Hue rotates between emerald/teal/cyan accents over a long cycle.
 * Orbs drift slightly based on mouse position for parallax depth.
 * Respects prefers-reduced-motion via the global CSS rule.
 */
export function AnimatedBackground() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const orb1X = useTransform(sx, [0, 1], [-30, 30]);
  const orb1Y = useTransform(sy, [0, 1], [-20, 20]);
  const orb2X = useTransform(sx, [0, 1], [25, -25]);
  const orb2Y = useTransform(sy, [0, 1], [20, -20]);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    mx.set(e.clientX / window.innerWidth);
    my.set(e.clientY / window.innerHeight);
  };

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-40 overflow-hidden"
      aria-hidden
      onMouseMove={handleMove}
    >
      {/* Base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Slowly drifting hue orbs (with parallax) */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 20% 20%, rgba(16,185,129,0.12), transparent 50%)",
            "radial-gradient(circle at 75% 30%, rgba(20,184,166,0.12), transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(13,148,136,0.12), transparent 50%)",
            "radial-gradient(circle at 20% 20%, rgba(16,185,129,0.12), transparent 50%)",
          ],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        animate={{
          background: [
            "radial-gradient(circle at 80% 70%, rgba(45,212,191,0.10), transparent 55%)",
            "radial-gradient(circle at 30% 60%, rgba(16,185,129,0.10), transparent 55%)",
            "radial-gradient(circle at 70% 20%, rgba(20,184,166,0.10), transparent 55%)",
            "radial-gradient(circle at 80% 70%, rgba(45,212,191,0.10), transparent 55%)",
          ],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      />

      {/* Parallax glow orbs (follow mouse subtly) */}
      <motion.div
        style={{ x: orb1X, y: orb1Y }}
        className="absolute left-[10%] top-[15%] h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl"
      />
      <motion.div
        style={{ x: orb2X, y: orb2Y }}
        className="absolute right-[10%] top-[30%] h-80 w-80 rounded-full bg-teal-500/12 blur-3xl"
      />

      {/* Subtle moving conic accent near top */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/3 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full opacity-[0.06]"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(16,185,129,0.4), rgba(20,184,166,0.2), rgba(13,148,136,0.4), rgba(16,185,129,0.4))",
          filter: "blur(80px)",
        }}
      />

      {/* Faint grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 85%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 70% at 50% 30%, black 30%, transparent 85%)",
        }}
      />
    </div>
  );
}
