"use client";

import * as React from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { highlightStats } from "@/lib/portfolio-data";

export function StatsCounter() {
  const ref = React.useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="stats"
      className="relative scroll-mt-20 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-950/60 to-slate-900/80 p-8 backdrop-blur-sm sm:p-10"
        >
          {/* Decorative glows */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-teal-500/15 blur-3xl" />

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="relative mb-8 text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              By the numbers
            </div>
            <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              A snapshot of{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                the journey so far
              </span>
            </h2>
          </motion.div>

          {/* Stats grid */}
          <div className="relative grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {highlightStats.map((s, i) => (
              <StatCard key={s.label} stat={s} inView={inView} delay={i * 0.12} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  inView,
  delay,
}: {
  stat: (typeof highlightStats)[number];
  inView: boolean;
  delay: number;
}) {
  const count = useMotionValue(0);
  const [display, setDisplay] = React.useState(
    (stat.decimals ? 0 : 0) + (stat.suffix ?? "")
  );

  React.useEffect(() => {
    if (!inView) return;
    const controls = animate(count, stat.value, {
      duration: 1.6,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(
          v.toFixed(stat.decimals ?? 0) + (stat.suffix ?? "")
        );
      },
    });
    return () => controls.stop();
  }, [inView, stat.value, stat.decimals, stat.suffix, delay, count]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay * 0.5 }}
      className="group relative rounded-2xl border border-white/10 bg-slate-950/40 p-5 text-center transition hover:border-emerald-400/40 hover:bg-emerald-500/5 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="bg-gradient-to-br from-emerald-200 to-teal-300 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
        {display}
      </div>
      <div className="mt-2 text-sm font-semibold text-white">{stat.label}</div>
      <div className="mt-0.5 text-[11px] text-slate-400">{stat.sublabel}</div>
    </motion.div>
  );
}
