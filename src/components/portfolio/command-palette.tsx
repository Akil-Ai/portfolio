"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  GraduationCap,
  Code2,
  FolderGit2,
  Briefcase,
  BadgeCheck,
  Trophy,
  Mail,
  Github,
  Linkedin,
  Download,
  Bot,
  X,
} from "lucide-react";
import { profile, navItems } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

type Command = {
  id: string;
  label: string;
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  action: () => void;
  group: "Navigate" | "Links" | "Actions";
};

export function CommandPalette() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [active, setActive] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const listRef = React.useRef<HTMLDivElement>(null);

  const scrollTo = (href: string) => {
    setOpen(false);
    setQuery("");
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const commands = React.useMemo<Command[]>(
    () => [
      ...navItems.map((n) => ({
        id: `nav-${n.href}`,
        label: `Go to ${n.label}`,
        icon: iconForHref(n.href),
        action: () => scrollTo(n.href),
        group: "Navigate" as const,
      })),
      {
        id: "github",
        label: "Open GitHub profile",
        hint: profile.githubHandle,
        icon: Github,
        action: () => window.open(profile.github, "_blank"),
        group: "Links" as const,
      },
      {
        id: "linkedin",
        label: "Open LinkedIn profile",
        hint: profile.linkedinHandle,
        icon: Linkedin,
        action: () => window.open(profile.linkedin, "_blank"),
        group: "Links" as const,
      },
      {
        id: "email",
        label: "Send an email",
        hint: profile.email,
        icon: Mail,
        action: () => (window.location.href = `mailto:${profile.email}`),
        group: "Links" as const,
      },
      {
        id: "resume",
        label: "Download resume (PDF)",
        icon: Download,
        action: () => {
          const a = document.createElement("a");
          a.href = profile.resumeUrl;
          a.download = "Akil-S-Resume.pdf";
          a.click();
        },
        group: "Actions" as const,
      },
      {
        id: "top",
        label: "Scroll to top",
        icon: Home,
        action: () => scrollTo("#home"),
        group: "Navigate" as const,
      },
    ],
    []
  );

  const filtered = React.useMemo(() => {
    if (!query.trim()) return commands;
    const q = query.toLowerCase();
    return commands.filter(
      (c) =>
        c.label.toLowerCase().includes(q) ||
        c.hint?.toLowerCase().includes(q) ||
        c.group.toLowerCase().includes(q)
    );
  }, [commands, query]);

  // Group commands preserving order
  const groups = React.useMemo(() => {
    const map = new Map<string, Command[]>();
    for (const c of filtered) {
      if (!map.has(c.group)) map.set(c.group, []);
      map.get(c.group)!.push(c);
    }
    return Array.from(map.entries());
  }, [filtered]);

  // Keyboard shortcut Cmd+K / Ctrl+K
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  React.useEffect(() => {
    if (open) {
      setActive(0);
      setQuery("");
      const t = setTimeout(() => inputRef.current?.focus(), 80);
      return () => clearTimeout(t);
    }
  }, [open]);

  React.useEffect(() => {
    setActive(0);
  }, [query]);

  const flat = filtered;

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => (a + 1) % Math.max(flat.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => (a - 1 + flat.length) % Math.max(flat.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      flat[active]?.action();
    }
  };

  return (
    <>
      {/* Trigger hint badge (desktop only) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 left-4 z-40 hidden items-center gap-2 rounded-full border border-white/10 bg-slate-950/70 px-3 py-1.5 text-[11px] font-medium text-slate-300 backdrop-blur-md transition hover:border-emerald-400/40 hover:text-emerald-300 lg:flex"
        aria-label="Open command palette"
      >
        <Search className="h-3.5 w-3.5" />
        Quick jump
        <kbd className="ml-1 rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[60] flex items-start justify-center bg-slate-950/70 p-4 pt-[15vh] backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.97 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl shadow-black/50"
            >
              {/* Input */}
              <div className="flex items-center gap-3 border-b border-white/10 px-4 py-3">
                <Search className="h-4 w-4 shrink-0 text-slate-400" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={onKey}
                  placeholder="Type a command or search…"
                  className="flex-1 bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
                />
                <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-400">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div
                ref={listRef}
                className="max-h-[55vh] overflow-y-auto p-2"
              >
                {flat.length === 0 && (
                  <div className="px-4 py-8 text-center text-sm text-slate-400">
                    No commands match{" "}
                    <span className="font-mono text-slate-300">“{query}”</span>
                  </div>
                )}
                {groups.map(([group, items]) => (
                  <div key={group} className="mb-1">
                    <div className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                      {group}
                    </div>
                    {items.map((c) => {
                      const idx = flat.indexOf(c);
                      const isActive = idx === active;
                      return (
                        <button
                          key={c.id}
                          onMouseEnter={() => setActive(idx)}
                          onClick={c.action}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/60",
                            isActive
                              ? "bg-emerald-500/15 text-white"
                              : "text-slate-300 hover:bg-white/5"
                          )}
                        >
                          <c.icon
                            className={cn(
                              "h-4 w-4 shrink-0",
                              isActive ? "text-emerald-300" : "text-slate-400"
                            )}
                          />
                          <span className="flex-1 text-sm font-medium">
                            {c.label}
                          </span>
                          {c.hint && (
                            <span className="text-[11px] text-slate-500">
                              {c.hint}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-white/10 px-4 py-2.5 text-[11px] text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Bot className="h-3 w-3 text-emerald-400" />
                    AKIL Bot is also available →
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono">
                    ↑↓
                  </kbd>
                  <span>to navigate</span>
                  <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono">
                    ↵
                  </kbd>
                  <span>to select</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function iconForHref(href: string) {
  switch (href) {
    case "#home":
      return Home;
    case "#about":
      return User;
    case "#education":
      return GraduationCap;
    case "#skills":
      return Code2;
    case "#projects":
      return FolderGit2;
    case "#experience":
      return Briefcase;
    case "#certifications":
      return BadgeCheck;
    case "#achievements":
      return Trophy;
    case "#contact":
      return Mail;
    default:
      return Search;
  }
}
