"use client";

import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, GraduationCap, Rocket } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { profile, languages, tools, achievements } from "@/lib/portfolio-data";

const highlights = [
  {
    icon: Target,
    title: "Problem-solver at heart",
    desc: "I enjoy breaking down ambiguous problems into clean, traceable steps — from requirement documents all the way to verified output.",
  },
  {
    icon: Lightbulb,
    title: "AI & Data Science focus",
    desc: "Specialising in machine learning, NLP, and intelligent automation, with hands-on projects shipped around UAT and geosafety.",
  },
  {
    icon: GraduationCap,
    title: "Strong academic record",
    desc: "CGPA 8.21 in B.Tech AI & DS, 90.6% in SSLC and 87% in HSC — consistently in the top tier of my cohort.",
  },
  {
    icon: Rocket,
    title: "Ready for real-world impact",
    desc: "Open to online internships where I can apply Python, AI, and data skills to meaningful production problems.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About me"
          title="Engineering student, AI builder, lifelong learner"
          description="A snapshot of who I am, what I care about, and how I work."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Left: bio + highlights */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8"
            >
              <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                {profile.objective}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                I&apos;m currently pursuing my B.Tech in Artificial Intelligence
                and Data Science at VSB Engineering College. My recent work
                focuses on building trustworthy AI tools — from a
                zero-hallucination UAT case generator to a rockfall risk
                monitoring console. I love turning messy requirements into clean,
                explainable systems, and I&apos;m actively looking for an online
                internship where I can do more of that in a real-world setting.
              </p>
            </motion.div>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group rounded-2xl border border-white/10 bg-slate-950/40 p-5 transition hover:border-emerald-400/40 hover:bg-emerald-500/5"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-300 ring-1 ring-emerald-500/30 transition group-hover:scale-110">
                    <h.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-sm font-semibold text-white">
                    {h.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                    {h.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: meta cards */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Heart className="h-4 w-4 text-emerald-400" />
                Languages
              </div>
              <div className="mt-4 space-y-3">
                {languages.map((l) => (
                  <div
                    key={l.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm text-slate-300">{l.name}</span>
                    <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300">
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-white">
                <Rocket className="h-4 w-4 text-emerald-400" />
                Tools I use daily
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-slate-950/40 px-3 py-1.5 text-xs font-medium text-slate-200"
                  >
                    <t.icon className="h-3.5 w-3.5 text-emerald-400" />
                    {t.name}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="rounded-2xl border border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-2 text-sm font-semibold text-amber-200">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-amber-500/20">
                  ★
                </span>
                Achievements
              </div>
              <div className="mt-4 space-y-3">
                {achievements.map((a) => (
                  <div key={a.title} className="flex items-start gap-3">
                    <a.icon className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                    <div>
                      <div className="text-sm font-medium text-white">
                        {a.title}
                      </div>
                      <p className="mt-0.5 text-xs leading-relaxed text-slate-400">
                        {a.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
