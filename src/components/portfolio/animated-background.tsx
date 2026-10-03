"use client";

import { motion } from "framer-motion";

/**
 * Slowly shifting animated gradient background.
 * Fixed, pointer-events-none, sits behind all content (-z-40).
 * Hue rotates between emerald/teal/cyan accents over a long cycle.
 * Respects prefers-reduced-motion via the global CSS rule.
 */
export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-40 overflow-hidden" aria-hidden>
      {/* Base */}
      <div className="absolute inset-0 bg-slate-950" />

      {/* Slowly drifting hue orbs */}
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
