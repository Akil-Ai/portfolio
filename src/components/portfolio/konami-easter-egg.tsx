"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gamepad2, X } from "lucide-react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export function KonamiEasterEgg() {
  const [active, setActive] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    if (active) return;
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;
      if (typing) return;

      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      if (key === KONAMI[progress]) {
        e.preventDefault();
        const next = progress + 1;
        setProgress(next);
        if (next === KONAMI.length) {
          setActive(true);
          setProgress(0);
        }
      } else if (key === KONAMI[0]) {
        setProgress(1);
      } else {
        setProgress(0);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [progress, active]);

  const close = () => setActive(false);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md"
          onClick={close}
        >
          {/* Confetti-ish floating emeralds */}
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.span
              key={i}
              aria-hidden
              initial={{
                x: 0,
                y: 0,
                opacity: 0,
                scale: 0,
              }}
              animate={{
                x: (Math.random() - 0.5) * 600,
                y: (Math.random() - 0.5) * 500,
                opacity: [0, 1, 0],
                scale: [0, 1, 0.5],
                rotate: Math.random() * 360,
              }}
              transition={{
                duration: 1.6 + Math.random(),
                repeat: Infinity,
                repeatDelay: Math.random() * 0.5,
              }}
              className="pointer-events-none absolute h-2 w-2 rounded-full"
              style={{
                background: ["#34d399", "#2dd4bf", "#fbbf24", "#fde68a"][i % 4],
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -6 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-slate-900 to-slate-950 p-8 text-center shadow-2xl shadow-emerald-900/40"
          >
            <div className="pointer-events-none absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-amber-500/20 blur-2xl" />

            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-white shadow-lg shadow-emerald-900/50"
            >
              <Gamepad2 className="h-8 w-8" />
            </motion.div>

            <h2 className="mt-5 text-2xl font-bold text-white">
              🎮 Konami unlocked!
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              You found the secret code. Akil appreciates a curious mind — that&apos;s
              exactly the trait he looks for in AI problems too. You&apos;re clearly
              someone who explores beyond the surface.
            </p>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-emerald-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              Achievement: <span className="font-semibold">Curious Explorer</span>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
              <button
                onClick={() => {
                  close();
                  setTimeout(() => {
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }, 200);
                }}
                className="rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 px-4 py-2 text-xs font-semibold text-white transition hover:from-emerald-400 hover:to-teal-500"
              >
                Say hi to Akil
              </button>
              <button
                onClick={close}
                className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-slate-200 transition hover:bg-white/10"
              >
                <X className="mr-1 inline h-3.5 w-3.5" />
                Close
              </button>
            </div>

            <p className="mt-4 text-[10px] text-slate-500">
              ↑ ↑ ↓ ↓ ← → ← → B A · the classic cheat code
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
