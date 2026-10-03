"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { education } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950/0 to-slate-950" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey"
          description="A consistent track record across school and engineering college."
        />

        <div className="relative mt-14 max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400 via-teal-500/50 to-transparent" />

          <div className="space-y-6">
            {education.map((item, idx) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="relative pl-14"
              >
                {/* Dot */}
                <div className="absolute left-5 top-5 -translate-x-1/2">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 ring-2 ring-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                </div>

                <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-emerald-400/40 hover:bg-emerald-500/5 sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 ring-1 ring-emerald-500/30">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                      {item.period}
                    </span>
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-white sm:text-lg">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-emerald-300">
                    {item.institution}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                    {item.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
