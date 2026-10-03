"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Keyboard, Command, ArrowUp, ArrowDown, Enter, Escape, MousePointerClick } from "lucide-react";

type Shortcut = {
  keys: string[];
  label: string;
  group: "Navigation" | "Actions";
};

const shortcuts: Shortcut[] = [
  { keys: ["⌘", "K"], label: "Open command palette", group: "Navigation" },
  { keys: ["?"], label: "Open this shortcut help", group: "Navigation" },
  { keys: ["Esc"], label: "Close any open modal / palette", group: "Navigation" },
  { keys: ["↑", "↓"], label: "Navigate within command palette", group: "Navigation" },
  { keys: ["↵"], label: "Select highlighted command", group: "Navigation" },
  { keys: ["G", "H"], label: "Jump to Home (hero)", group: "Navigation" },
  { keys: ["G", "P"], label: "Jump to Projects", group: "Navigation" },
  { keys: ["G", "C"], label: "Jump to Contact", group: "Navigation" },
];

export function KeyboardHelp() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    let gPressed = false;
    let gTimer: ReturnType<typeof setTimeout> | null = null;

    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      const typing =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable;

      // ? opens (but not while typing)
      if (e.key === "?" && !typing && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        setOpen((v) => !v);
        return;
      }
      if (e.key === "Escape" && open) {
        setOpen(false);
        return;
      }

      // G + key sequence for quick jump (only when not typing and no modifier)
      if (!typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (e.key.toLowerCase() === "g" && !gPressed) {
          gPressed = true;
          if (gTimer) clearTimeout(gTimer);
          gTimer = setTimeout(() => {
            gPressed = false;
          }, 800);
          return;
        }
        if (gPressed) {
          gPressed = false;
          if (gTimer) clearTimeout(gTimer);
          const map: Record<string, string> = {
            h: "#home",
            p: "#projects",
            c: "#contact",
            e: "#experience",
            s: "#skills",
            a: "#about",
          };
          const href = map[e.key.toLowerCase()];
          if (href) {
            e.preventDefault();
            document
              .querySelector(href)
              ?.scrollIntoView({ behavior: "smooth" });
          }
        }
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      if (gTimer) clearTimeout(gTimer);
    };
  }, [open]);

  const groups = React.useMemo(() => {
    const map = new Map<string, Shortcut[]>();
    for (const s of shortcuts) {
      if (!map.has(s.group)) map.set(s.group, []);
      map.get(s.group)!.push(s);
    }
    return Array.from(map.entries());
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* Trigger badge (desktop only) — bottom-right, above the chatbot button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-28 right-7 z-40 hidden h-9 items-center gap-1.5 rounded-full border border-white/10 bg-slate-950/70 px-3 text-[11px] font-medium text-slate-300 backdrop-blur-md transition hover:border-emerald-400/40 hover:text-emerald-300 lg:flex"
        aria-label="Open keyboard shortcuts help"
      >
        <Keyboard className="h-3.5 w-3.5" />
        <kbd className="rounded border border-white/15 bg-white/5 px-1 py-0.5 font-mono text-[10px]">
          ?
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          className="fixed inset-0 z-[70] flex items-start justify-center bg-slate-950/70 p-4 pt-[12vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-gradient-to-r from-emerald-600/20 to-teal-600/10 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/30">
                  <Keyboard className="h-4.5 w-4.5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Keyboard shortcuts
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Press{" "}
                    <kbd className="rounded border border-white/15 bg-white/5 px-1 py-0.5 font-mono text-[10px]">
                      ?
                    </kbd>{" "}
                    anytime to open this
                  </div>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-white/5 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Shortcuts list */}
            <div className="max-h-[55vh] overflow-y-auto p-3">
              {groups.map(([group, items]) => (
                <div key={group} className="mb-2">
                  <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {group}
                  </div>
                  {items.map((s) => (
                    <div
                      key={s.label}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 transition hover:bg-white/5"
                    >
                      <span className="text-sm text-slate-200">{s.label}</span>
                      <div className="flex items-center gap-1">
                        {s.keys.map((k, i) => (
                          <kbd
                            key={i}
                            className="min-w-[24px] rounded border border-white/15 bg-white/5 px-1.5 py-0.5 text-center font-mono text-[11px] text-slate-200"
                          >
                            {k}
                          </kbd>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Footer with quick-jump shortcuts */}
            <div className="border-t border-white/10 px-5 py-3">
              <div className="mb-2 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                <MousePointerClick className="h-3 w-3" />
                Quick jump (G then …)
              </div>
              <div className="flex flex-wrap gap-2">
                <QuickJump label="Home" onClick={() => scrollTo("#home")} />
                <QuickJump label="Projects" onClick={() => scrollTo("#projects")} />
                <QuickJump label="Experience" onClick={() => scrollTo("#experience")} />
                <QuickJump label="Contact" onClick={() => scrollTo("#contact")} />
              </div>
            </div>

            {/* Footer hint */}
            <div className="border-t border-white/10 px-5 py-2.5 text-center text-[11px] text-slate-500">
              Tip: the command palette (
              <kbd className="rounded border border-white/15 bg-white/5 px-1 py-0.5 font-mono text-[10px]">
                ⌘K
              </kbd>
              ) also navigates everything.
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}

function QuickJump({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-200"
    >
      {label}
    </button>
  );
}
