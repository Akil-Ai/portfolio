"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { FileText, Download, ExternalLink, X, Clock, Mail, Phone, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { profile, stats, education } from "@/lib/portfolio-data";

export function ResumePreviewModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-slate-950/95 p-0 backdrop-blur-xl sm:max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Header band */}
          <div className="relative overflow-hidden border-b border-white/10 bg-gradient-to-r from-emerald-600/20 via-teal-600/10 to-transparent p-6">
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
            <DialogHeader className="relative">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 text-lg font-bold text-white shadow-lg shadow-emerald-900/40">
                    AS
                  </div>
                  <div>
                    <DialogTitle className="text-lg font-bold text-white">
                      {profile.name}
                    </DialogTitle>
                    <DialogDescription className="text-xs text-emerald-300">
                      {profile.title} · Resume preview
                    </DialogDescription>
                  </div>
                </div>
              </div>
            </DialogHeader>
          </div>

          {/* Resume body */}
          <div className="space-y-6 p-6">
            {/* Contact row */}
            <div className="grid grid-cols-1 gap-2 rounded-xl border border-white/10 bg-white/5 p-4 sm:grid-cols-2">
              <ContactRow icon={Mail} label={profile.email} />
              <ContactRow icon={Phone} label={profile.phone} />
              <ContactRow icon={MapPin} label={profile.location} />
              <ContactRow icon={Clock} label="Open to internships" />
            </div>

            {/* Objective */}
            <Section title="Objective">
              <p className="text-sm leading-relaxed text-slate-300">
                {profile.objective}
              </p>
            </Section>

            {/* Education */}
            <Section title="Education">
              <div className="space-y-3">
                {education.map((e) => (
                  <div
                    key={e.degree}
                    className="rounded-lg border border-white/5 bg-slate-950/40 p-3"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-white">
                        {e.degree}
                      </span>
                      <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                        {e.period}
                      </span>
                    </div>
                    <div className="mt-0.5 text-xs text-emerald-300">
                      {e.institution}
                    </div>
                    <div className="mt-1 text-xs text-slate-400">{e.detail}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Quick stats */}
            <Section title="Highlights">
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-lg border border-white/10 bg-slate-950/40 p-2.5 text-center"
                  >
                    <div className="text-base font-bold text-emerald-300">
                      {s.value}
                    </div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wide text-slate-400">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              <Button
                asChild
                className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500"
              >
                <a href={profile.resumeUrl} download="Akil-S-Resume.pdf">
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 hover:text-white"
              >
                <a href={profile.resumeUrl} target="_blank" rel="noreferrer">
                  <ExternalLink className="h-4 w-4" />
                  Open in new tab
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
            <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-slate-500">
              <FileText className="h-3 w-3" />
              This is a quick preview — download the full PDF for the complete resume.
            </p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {title}
      </h3>
      {children}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 text-xs text-slate-300">
      <Icon className="h-3.5 w-3.5 shrink-0 text-emerald-400" />
      <span className="truncate">{label}</span>
    </div>
  );
}
