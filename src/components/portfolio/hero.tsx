"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Sparkles,
  MapPin,
  Download,
  Code2,
  Brain,
  Database,
  Bot,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile, stats } from "@/lib/portfolio-data";
import { AnimatedCounter } from "./animated-counter";
import { Typewriter } from "./typewriter";
import { ResumePreviewModal } from "./resume-preview-modal";

const rotatingRoles = [
  "AI & Data Science Student",
  "Python Problem-Solver",
  "ML Enthusiast",
  "Test Automation Builder",
  "Future Intern",
];

export function Hero() {
  const [resumeOpen, setResumeOpen] = React.useState(false);
  return (
    <>
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      {/* Animated background */}
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left: text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.available ? "Open to internships" : "Currently studying"}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                {profile.name}
              </span>
            </motion.h1>

            {/* Rotating role with typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-3 flex h-8 items-center text-lg font-semibold text-slate-100 sm:text-xl"
            >
              <Typewriter
                words={rotatingRoles}
                className="bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-6 flex items-center gap-2 text-sm text-slate-300"
            >
              <MapPin className="h-4 w-4 text-emerald-400" />
              {profile.location}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <Button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="h-11 bg-gradient-to-br from-emerald-500 to-teal-600 px-5 text-white shadow-lg shadow-emerald-900/30 hover:from-emerald-400 hover:to-teal-500"
              >
                <Sparkles className="h-4 w-4" />
                Get in touch
              </Button>
              <Button
                variant="outline"
                onClick={() => setResumeOpen(true)}
                className="h-11 border-emerald-400/30 bg-emerald-500/5 px-5 text-emerald-100 hover:bg-emerald-500/15 hover:text-white"
              >
                <Download className="h-4 w-4" />
                Resume
              </Button>
              <Button
                variant="outline"
                asChild
                className="h-11 border-white/15 bg-white/5 px-5 text-slate-100 hover:bg-white/10 hover:text-white"
              >
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <div className="flex items-center gap-2">
                <SocialIcon href={profile.linkedin} label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </SocialIcon>
                <SocialIcon href={`mailto:${profile.email}`} label="Email">
                  <Mail className="h-4 w-4" />
                </SocialIcon>
              </div>
            </motion.div>

            {/* Tech stack mini-badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 flex flex-wrap items-center gap-2"
            >
              <span className="text-xs text-slate-400">Focus areas:</span>
              {[
                { icon: Code2, label: "Python" },
                { icon: Brain, label: "Machine Learning" },
                { icon: Database, label: "Data Science" },
                { icon: Bot, label: "Generative AI" },
              ].map((t) => (
                <span
                  key={t.label}
                  className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-slate-950/40 px-2.5 py-1 text-[11px] font-medium text-slate-300"
                >
                  <t.icon className="h-3 w-3 text-emerald-400" />
                  {t.label}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right: card / avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-emerald-500/30 via-teal-500/20 to-transparent blur-2xl" />
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-4">
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-2xl font-bold text-white shadow-lg shadow-emerald-900/40">
                  AS
                </div>
                <div>
                  <div className="text-base font-semibold text-white">
                    {profile.name}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-300">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    {profile.subtitle}
                  </div>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300">
                {profile.objective}
              </p>

              <div className="mt-5 grid grid-cols-4 gap-2">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-white/10 bg-slate-950/40 p-3 text-center"
                  >
                    <div className="text-lg font-bold text-emerald-300">
                      <AnimatedCounter
                        value={s.numeric}
                        decimals={s.decimals ?? 0}
                        suffix={s.suffix ?? ""}
                        duration={1.6 + i * 0.1}
                      />
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-300">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll hint */}
        <motion.button
          onClick={() =>
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mx-auto mt-12 hidden flex-col items-center gap-2 text-slate-400 transition hover:text-emerald-300 lg:flex"
          aria-label="Scroll to about"
        >
          <span className="text-xs">Scroll to explore</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </motion.button>
      </div>
    </section>
    <ResumePreviewModal open={resumeOpen} onOpenChange={setResumeOpen} />
    </>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-emerald-300"
    >
      {children}
    </a>
  );
}

function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,185,129,0.25) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.25) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, black 30%, transparent 80%)",
        }}
      />
      {/* Glow orbs */}
      <motion.div
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-24 top-40 h-80 w-80 rounded-full bg-teal-500/20 blur-3xl"
      />
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, 20, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl"
      />
      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950" />
    </div>
  );
}
