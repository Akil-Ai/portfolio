"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { profile } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-slate-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 sm:py-14">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 font-bold text-white shadow-md shadow-emerald-900/40">
              A
            </span>
            <div>
              <div className="text-sm font-semibold text-white">
                {profile.name}
              </div>
              <div className="text-xs text-slate-400">
                {profile.title} · {profile.location}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
            >
              <Mail className="h-4 w-4" />
            </a>
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              aria-label="Back to top"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-white/5 pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {year} {profile.name}. Built with Next.js, Tailwind CSS & an
            in-house AI assistant.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-slate-500">
            Made with
            <Heart className="h-3.5 w-3.5 fill-emerald-400 text-emerald-400" />
            in Tamil Nadu, India
          </p>
        </div>
      </div>
    </footer>
  );
}
