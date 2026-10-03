"use client";

import { motion } from "framer-motion";

const items = [
  "Python",
  "Machine Learning",
  "Data Science",
  "NLP",
  "Generative AI",
  "Problem Solving",
  "Automation",
  "SQL",
  "Leadership",
  "Teamwork",
];

export function MarqueeStrip() {
  // Duplicate for seamless loop
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-white/5 bg-gradient-to-r from-slate-950 via-emerald-950/20 to-slate-950 py-5">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-slate-950 to-transparent" />

      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {loop.map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
