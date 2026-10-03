"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { projects, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const accentMap: Record<string, { ring: string; text: string; glow: string; btn: string }> = {
  emerald: {
    ring: "ring-emerald-500/30",
    text: "text-emerald-300",
    glow: "from-emerald-500/20 to-teal-500/10",
    btn: "bg-emerald-500/15 text-emerald-200 hover:bg-emerald-500/25",
  },
  amber: {
    ring: "ring-amber-500/30",
    text: "text-amber-300",
    glow: "from-amber-500/20 to-orange-500/10",
    btn: "bg-amber-500/15 text-amber-200 hover:bg-amber-500/25",
  },
  teal: {
    ring: "ring-teal-500/30",
    text: "text-teal-300",
    glow: "from-teal-500/20 to-cyan-500/10",
    btn: "bg-teal-500/15 text-teal-200 hover:bg-teal-500/25",
  },
};

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-950/40 to-slate-950" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="Real AI systems I designed and shipped — focused on trust, traceability, and explainability."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {projects.map((p, i) => {
            const a = accentMap[p.accent] ?? accentMap.emerald;
            return (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition hover:border-white/20 hover:shadow-2xl hover:shadow-black/30"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden sm:h-52">
                  {p.image ? (
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div
                      className={cn(
                        "flex h-full w-full items-center justify-center bg-gradient-to-br",
                        a.glow
                      )}
                    >
                      <p.icon className={cn("h-12 w-12", a.text)} />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <div className="absolute left-4 top-4 flex items-center gap-2">
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-lg bg-slate-950/70 backdrop-blur ring-1",
                        a.ring
                      )}
                    >
                      <p.icon className={cn("h-4.5 w-4.5", a.text)} />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex items-center gap-2 text-[11px] font-medium text-slate-300">
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 ring-1",
                          a.ring,
                          a.text
                        )}
                      >
                        Featured
                      </span>
                      <span className="rounded-full bg-slate-950/60 px-2 py-0.5 text-slate-300 backdrop-blur">
                        AI Project
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-white">{p.name}</h3>
                      <p className={cn("mt-0.5 text-xs font-medium", a.text)}>
                        {p.tagline}
                      </p>
                    </div>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${p.name} on GitHub`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {p.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2 text-xs text-slate-300"
                      >
                        <CheckCircle2
                          className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", a.text)}
                        />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-slate-950/40 px-2 py-1 text-[10px] font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 pt-2">
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition",
                        a.btn
                      )}
                    >
                      View project
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
