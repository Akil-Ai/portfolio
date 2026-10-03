"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Github, X, Sparkles, Target, Lightbulb, Flag } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { profile, type Project } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

const accentMap: Record<string, { ring: string; text: string; bg: string; chip: string }> = {
  emerald: {
    ring: "ring-emerald-500/30",
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    chip: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
  },
  amber: {
    ring: "ring-amber-500/30",
    text: "text-amber-300",
    bg: "bg-amber-500/10",
    chip: "border-amber-500/30 bg-amber-500/10 text-amber-200",
  },
  teal: {
    ring: "ring-teal-500/30",
    text: "text-teal-300",
    bg: "bg-teal-500/10",
    chip: "border-teal-500/30 bg-teal-500/10 text-teal-200",
  },
};

export function ProjectCaseStudy({
  project,
  open,
  onOpenChange,
}: {
  project: Project | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  if (!project) return null;
  const a = accentMap[project.accent] ?? accentMap.emerald;
  const cs = project.caseStudy;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-slate-950/95 p-0 backdrop-blur-xl sm:max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header with image */}
          <div className="relative h-44 overflow-hidden sm:h-56">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            ) : (
              <div className={cn("flex h-full w-full items-center justify-center bg-gradient-to-br", a.bg)}>
                <project.icon className={cn("h-12 w-12", a.text)} />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
            <div className="absolute left-5 top-5">
              <div className={cn("flex h-11 w-11 items-center justify-center rounded-xl bg-slate-950/70 backdrop-blur ring-1", a.ring)}>
                <project.icon className={cn("h-5 w-5", a.text)} />
              </div>
            </div>
            <DialogHeader className="absolute inset-x-0 bottom-0 p-5">
              <div className="flex items-center gap-2">
                <span className={cn("rounded-full border px-2 py-0.5 text-[10px] font-medium", a.chip)}>
                  Case study
                </span>
                <span className="rounded-full bg-slate-950/60 px-2 py-0.5 text-[10px] text-slate-300 backdrop-blur">
                  {project.tagline}
                </span>
              </div>
              <DialogTitle className="mt-2 text-xl font-bold text-white sm:text-2xl">
                {project.name}
              </DialogTitle>
              <DialogDescription className="text-xs text-slate-300">
                {project.description}
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-6 p-6">
            {cs ? (
              <>
                {/* Overview */}
                <CaseSection icon={Sparkles} title="Overview" accent={a.text}>
                  <p className="text-sm leading-relaxed text-slate-300">{cs.overview}</p>
                </CaseSection>

                {/* Problem */}
                <CaseSection icon={Target} title="The problem" accent={a.text}>
                  <p className="text-sm leading-relaxed text-slate-300">{cs.problem}</p>
                </CaseSection>

                {/* Approach */}
                <CaseSection icon={Lightbulb} title="Approach" accent={a.text}>
                  <ul className="space-y-2">
                    {cs.approach.map((step, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <span className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ring-1", a.bg, a.ring, a.text)}>
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </CaseSection>

                {/* Outcome */}
                <CaseSection icon={Flag} title="Outcome" accent={a.text}>
                  <div className={cn("rounded-xl border p-4", a.bg.replace("/10", "/5"), "border-white/10")}>
                    <p className="text-sm leading-relaxed text-slate-200">{cs.outcome}</p>
                  </div>
                </CaseSection>

                {/* Tech stack */}
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Tech stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cs.techStack.map((t) => (
                      <span key={t} className={cn("rounded-md border px-2.5 py-1 text-xs font-medium", a.chip)}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights (from card) */}
                <div>
                  <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Key highlights
                  </h3>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-slate-200">
                        <CheckCircle2 className={cn("mt-0.5 h-3.5 w-3.5 shrink-0", a.text)} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            ) : (
              <p className="text-sm text-slate-400">Case study coming soon.</p>
            )}

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              <Button asChild className={cn("text-white", a.bg.replace("/10", ""))}>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Github className="h-4 w-4" />
                  View on GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                onClick={() => onOpenChange(false)}
                className="ml-auto text-slate-300 hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" />
                Close
              </Button>
            </div>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

function CaseSection({
  icon: Icon,
  title,
  accent,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  accent: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
        <Icon className={cn("h-3.5 w-3.5", accent)} />
        {title}
      </h3>
      {children}
    </div>
  );
}
