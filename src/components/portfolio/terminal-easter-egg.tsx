"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Minus } from "lucide-react";

const lines = [
  { cmd: "whoami", out: "akil-s" },
  { cmd: "cat skills.txt | head -5", out: "python  ml  sql  java  javascript" },
  { cmd: "ls projects/", out: "uat-lens-ai  rock-guard-ai" },
  { cmd: "status --availability", out: "open to online internships ✓" },
  { cmd: "echo $MOTIVATION", out: "turn messy requirements into clean systems" },
  { cmd: "git log --oneline -3", out: "feat: zero-hallucination UAT generator\nfeat: rockfall risk console\ninit: portfolio v1" },
];

export function TerminalEasterEgg() {
  const [open, setOpen] = React.useState(false);
  const [lineIdx, setLineIdx] = React.useState(0);
  const [typed, setTyped] = React.useState("");
  const [showOut, setShowOut] = React.useState(false);
  const [done, setDone] = React.useState(false);

  // Toggle with 't' key (not while typing in inputs)
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if (
        e.key.toLowerCase() === "t" &&
        !typing &&
        !e.metaKey &&
        !e.ctrlKey &&
        !e.altKey
      ) {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  // Typing animation
  React.useEffect(() => {
    if (!open) {
      setLineIdx(0);
      setTyped("");
      setShowOut(false);
      setDone(false);
      return;
    }
    const current = lines[lineIdx];
    if (!current) {
      setDone(true);
      const reset = setTimeout(() => {
        setLineIdx(0);
        setTyped("");
        setShowOut(false);
        setDone(false);
      }, 4000);
      return () => clearTimeout(reset);
    }

    if (typed.length < current.cmd.length) {
      const t = setTimeout(() => {
        setTyped(current.cmd.slice(0, typed.length + 1));
      }, 45 + Math.random() * 60);
      return () => clearTimeout(t);
    }
    if (!showOut) {
      const t = setTimeout(() => setShowOut(true), 400);
      return () => clearTimeout(t);
    }
    const next = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setTyped("");
      setShowOut(false);
    }, 1400);
    return () => clearTimeout(next);
  }, [open, lineIdx, typed, showOut]);

  const current = lines[lineIdx];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-24 left-1/2 z-[65] w-[min(92vw,520px)] -translate-x-1/2 overflow-hidden rounded-xl border border-white/15 bg-slate-950/95 shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-white/10 bg-slate-900/80 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <span className="ml-2 flex items-center gap-1.5 text-xs font-medium text-slate-300">
                <Terminal className="h-3.5 w-3.5 text-emerald-400" />
                akil@portfolio: ~
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close terminal"
              className="flex h-6 w-6 items-center justify-center rounded text-slate-400 transition hover:bg-white/10 hover:text-white"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          </div>

          {/* Body */}
          <div className="max-h-[280px] overflow-y-auto p-4 font-mono text-xs leading-relaxed">
            {lines.slice(0, lineIdx).map((l, i) => (
              <div key={i} className="mb-3">
                <div className="text-emerald-400">
                  <span className="text-slate-500">$ </span>
                  {l.cmd}
                </div>
                <pre className="mt-1 whitespace-pre-wrap pl-3 text-slate-300">
                  {l.out}
                </pre>
              </div>
            ))}
            {!done && current && (
              <div className="mb-1">
                <div className="text-emerald-400">
                  <span className="text-slate-500">$ </span>
                  {typed}
                  <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-emerald-400 align-middle" />
                </div>
                {showOut && (
                  <pre className="mt-1 whitespace-pre-wrap pl-3 text-slate-300">
                    {current.out}
                  </pre>
                )}
              </div>
            )}
            {done && (
              <div className="text-slate-500">
                session complete — press{" "}
                <kbd className="rounded border border-white/15 bg-white/5 px-1 text-[10px]">
                  t
                </kbd>{" "}
                to replay
              </div>
            )}
          </div>

          {/* Footer hint */}
          <div className="border-t border-white/10 px-4 py-2 text-[10px] text-slate-500">
            Easter egg — press{" "}
            <kbd className="rounded border border-white/15 bg-white/5 px-1 font-mono text-[10px]">
              t
            </kbd>{" "}
            to toggle ·{" "}
            <kbd className="rounded border border-white/15 bg-white/5 px-1 font-mono text-[10px]">
              Esc
            </kbd>{" "}
            to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
