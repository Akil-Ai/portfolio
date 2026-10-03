"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { achievements } from "@/lib/portfolio-data";

export function Achievements() {
  return (
    <section id="achievements" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition & milestones"
          description="Moments where effort turned into measurable outcomes."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative overflow-hidden rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-transparent p-6 backdrop-blur-sm sm:p-7"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-amber-500/20 blur-3xl" />
              <div className="relative flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/40">
                  <a.icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{a.title}</h3>
                  <div className="mt-1 flex items-center gap-1 text-xs font-medium text-amber-300">
                    <span>★</span> Recognised achievement
                  </div>
                </div>
              </div>
              <p className="relative mt-4 text-sm leading-relaxed text-slate-300">
                {a.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
