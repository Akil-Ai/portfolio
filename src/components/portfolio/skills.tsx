"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { SkillsConstellation } from "./skills-constellation";
import { skillCategories } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const accentMap: Record<
  string,
  { bar: string; glow: string; text: string; ring: string; chip: string }
> = {
  emerald: {
    bar: "from-emerald-400 to-teal-500",
    glow: "bg-emerald-500/10",
    text: "text-emerald-300",
    ring: "ring-emerald-500/30",
    chip: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
  },
  teal: {
    bar: "from-teal-400 to-cyan-500",
    glow: "bg-teal-500/10",
    text: "text-teal-300",
    ring: "ring-teal-500/30",
    chip: "border-teal-500/30 bg-teal-500/10 text-teal-200",
  },
  amber: {
    bar: "from-amber-400 to-orange-500",
    glow: "bg-amber-500/10",
    text: "text-amber-300",
    ring: "ring-amber-500/30",
    chip: "border-amber-500/30 bg-amber-500/10 text-amber-200",
  },
};

export function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="What I bring to the table"
          description="A blend of technical depth, AI/DS fundamentals, and the human skills that make teams work."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {skillCategories.map((cat, ci) => {
            const a = accentMap[cat.accent] ?? accentMap.emerald;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: ci * 0.08 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-7"
              >
                <div
                  className={cn(
                    "pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl",
                    a.glow
                  )}
                />
                <div className="relative flex items-center gap-3">
                  <div
                    className={cn(
                      "flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-white/10 to-white/0 ring-1",
                      a.ring,
                      a.text
                    )}
                  >
                    <cat.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-white sm:text-lg">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-400">
                      {cat.skills.length} core skills
                    </p>
                  </div>
                </div>

                <div className="relative mt-6 space-y-4">
                  {cat.skills.map((s, i) => (
                    <SkillBar
                      key={s.name}
                      name={s.name}
                      level={s.level}
                      accent={a}
                      delay={ci * 0.08 + i * 0.04}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3"
        >
          {[
            "Python",
            "Machine Learning",
            "NLP",
            "Data Science",
            "SQL",
            "Java",
            "JavaScript",
            "HTML/CSS",
            "Problem Solving",
            "Automation",
            "Leadership",
            "Teamwork",
            "Quick Learner",
            "Time Management",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-200 sm:px-3.5 sm:text-[13px]"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Skills constellation visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8"
        >
          <SkillsConstellation className="h-[360px] sm:h-[400px]" />
        </motion.div>
      </div>
    </section>
  );
}

function SkillBar({
  name,
  level,
  accent,
  delay,
}: {
  name: string;
  level: number;
  accent: (typeof accentMap)[keyof typeof accentMap];
  delay: number;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-slate-200">{name}</span>
        <span className={cn("text-xs font-semibold", accent.text)}>
          {level}%
        </span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-slate-800/80">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.9, delay, ease: "easeOut" }}
          className={cn(
            "h-full rounded-full bg-gradient-to-r",
            accent.bar
          )}
        />
      </div>
    </div>
  );
}
