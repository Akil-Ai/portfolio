"use client";

import { motion } from "framer-motion";
import { Music, BookOpen, Hammer } from "lucide-react";
import { nowStatus } from "@/lib/portfolio-data";

const items = [
  { ...nowStatus.playing, icon: Music, accent: "emerald" },
  { ...nowStatus.reading, icon: BookOpen, accent: "teal" },
  { ...nowStatus.building, icon: Hammer, accent: "amber" },
];

const accentMap: Record<string, { text: string; bg: string; ring: string }> = {
  emerald: {
    text: "text-emerald-300",
    bg: "bg-emerald-500/10",
    ring: "ring-emerald-500/30",
  },
  teal: { text: "text-teal-300", bg: "bg-teal-500/10", ring: "ring-teal-500/30" },
  amber: { text: "text-amber-300", bg: "bg-amber-500/10", ring: "ring-amber-500/30" },
};

export function NowWidget() {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {items.map((item, i) => {
        const a = accentMap[item.accent] ?? accentMap.emerald;
        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group relative flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-slate-950/40 p-3 backdrop-blur-sm transition hover:border-white/20"
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ring-1 ${a.bg} ${a.ring} ${a.text}`}
            >
              <item.icon className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wide text-slate-400">
                {item.label}
                <span className={`h-1 w-1 animate-pulse rounded-full ${a.bg.replace("/10", "/60")}`} />
              </div>
              <div className="mt-0.5 truncate text-sm font-medium text-white">
                {item.title}
              </div>
              <div className="truncate text-[11px] text-slate-400">
                {"artist" in item ? item.artist : item.detail}
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
