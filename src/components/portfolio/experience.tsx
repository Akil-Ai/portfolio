"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { experiences, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const accentMap: Record<
  string,
  { ring: string; text: string; bg: string; chip: string; glow: string }
> = {
  emerald: {
    ring: "ring-emerald-500/30",
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    chip: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
    glow: "from-emerald-500/15 to-transparent",
  },
  amber: {
    ring: "ring-amber-500/30",
    text: "text-amber-300",
    bg: "bg-amber-500/10",
    chip: "border-amber-500/30 bg-amber-500/10 text-amber-200",
    glow: "from-amber-500/15 to-transparent",
  },
  teal: {
    ring: "ring-teal-500/30",
    text: "text-teal-300",
    bg: "bg-teal-500/10",
    chip: "border-teal-500/30 bg-teal-500/10 text-teal-200",
    glow: "from-teal-500/15 to-transparent",
  },
};

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Internships & programs"
          description="Real-world exposure through approved internships and industry-recognised programs."
        />

        <div className="relative mt-12 max-w-3xl">
          {/* Timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-emerald-400 via-teal-500/50 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, idx) => {
              const a = accentMap[exp.accent] ?? accentMap.emerald;
              return (
                <motion.div
                  key={exp.role}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative pl-14"
                >
                  {/* Dot */}
                  <div className="absolute left-5 top-5 -translate-x-1/2">
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-slate-950 ring-2 ring-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>
                  </div>

                  <motion.article
                    whileHover={{ y: -3 }}
                    className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-900/10 sm:p-6"
                  >
                    <div
                      className={cn(
                        "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                        a.glow
                      )}
                    />
                    <div className="relative flex flex-wrap items-center gap-3">
                      <div
                        className={cn(
                          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ring-1 transition group-hover:scale-110",
                          a.bg,
                          a.ring,
                          a.text
                        )}
                      >
                        <exp.icon className="h-5 w-5" />
                      </div>
                      <span
                        className={cn(
                          "rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
                          a.chip
                        )}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="relative mt-4 text-base font-semibold text-white sm:text-lg">
                      {exp.role}
                    </h3>
                    <p className={cn("mt-1 text-sm font-medium", a.text)}>
                      {exp.org}
                    </p>
                    <p className="relative mt-2 text-xs leading-relaxed text-slate-300 sm:text-sm">
                      {exp.description}
                    </p>

                    <ul className="relative mt-3 space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-start gap-2 text-xs text-slate-200"
                        >
                          <CheckCircle2
                            className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", a.text)}
                          />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                </motion.div>
              );
            })}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex items-center gap-3 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent p-5"
          >
            <Briefcase className="h-6 w-6 shrink-0 text-emerald-300" />
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                Looking for my next opportunity
              </p>
              <p className="mt-0.5 text-xs text-slate-300">
                Open to online internships in AI, ML &amp; Data Science — let&apos;s
                talk.
              </p>
            </div>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-emerald-500/15 px-3 py-2 text-xs font-semibold text-emerald-200 transition hover:bg-emerald-500/25"
            >
              Connect
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
