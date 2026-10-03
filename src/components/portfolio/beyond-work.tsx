"use client";

import { motion } from "framer-motion";
import { Coffee, Sparkles } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { funFacts } from "@/lib/portfolio-data";

export function BeyondWork() {
  return (
    <section id="beyond-work" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Beyond work"
          title="A little more about me"
          description="The small things that make me, me — outside of deadlines and deliverables."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {funFacts.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-emerald-400/40 hover:bg-emerald-500/5 hover:shadow-lg hover:shadow-emerald-900/10"
            >
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start gap-4">
                <motion.span
                  whileHover={{ rotate: [0, -8, 8, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-2xl ring-1 ring-emerald-500/30"
                >
                  {f.emoji}
                </motion.span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold leading-snug text-white">
                    {f.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-300">
                    {f.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 via-teal-500/5 to-transparent p-6 text-center sm:flex-row sm:text-left"
        >
          <Coffee className="h-7 w-7 shrink-0 text-emerald-300" />
          <p className="text-sm text-slate-200">
            Curious to know more? Ask{" "}
            <span className="inline-flex items-center gap-1 font-semibold text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              AKIL Bot
            </span>{" "}
            anything using the chat button — it knows me well.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
