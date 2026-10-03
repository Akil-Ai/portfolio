"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { certifications } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const accentMap: Record<string, { ring: string; text: string; bg: string }> = {
  emerald: {
    ring: "ring-emerald-500/30",
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
  },
  teal: {
    ring: "ring-teal-500/30",
    text: "text-teal-300",
    bg: "bg-teal-500/10",
  },
  amber: {
    ring: "ring-amber-500/30",
    text: "text-amber-300",
    bg: "bg-amber-500/10",
  },
};

export function Certifications() {
  return (
    <section
      id="certifications"
      className="relative scroll-mt-20 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning, verified"
          description="A curated set of certifications across AI, data, cloud, and cybersecurity."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((c, i) => {
            const a = accentMap[c.accent] ?? accentMap.emerald;
            return (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                className="group relative flex h-full items-start gap-3 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div
                  className={cn(
                    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition group-hover:scale-110",
                    a.bg,
                    a.ring,
                    a.text
                  )}
                >
                  <c.icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug text-white">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-400">
                    {c.issuer}
                  </p>
                </div>
                <div
                  className={cn(
                    "pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition group-hover:opacity-100",
                    a.bg
                  )}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
