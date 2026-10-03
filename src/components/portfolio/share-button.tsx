"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Share2, Check, Link2 } from "lucide-react";

export function ShareButton() {
  const [copied, setCopied] = React.useState(false);

  const onShare = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://akil-portfolio.example.com";
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Akil S — AI & Data Science Engineer Portfolio",
          text: "Check out Akil S's portfolio — AI & Data Science student, open to internships.",
          url,
        });
        return;
      }
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: select-and-copy prompt
      try {
        await navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // last resort: do nothing silently
      }
    }
  };

  return (
    <button
      onClick={onShare}
      className="group relative flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 px-4 py-3 text-sm font-medium text-slate-300 transition hover:border-emerald-400/50 hover:bg-emerald-500/5 hover:text-emerald-200"
      aria-label="Share profile link"
    >
      <AnimatePresence mode="wait" initial={false}>
        {copied ? (
          <motion.span
            key="copied"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-center gap-2 text-emerald-300"
          >
            <Check className="h-4 w-4" />
            Link copied!
          </motion.span>
        ) : (
          <motion.span
            key="share"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            className="flex items-center gap-2"
          >
            <Share2 className="h-4 w-4 transition group-hover:scale-110" />
            Share profile link
            <Link2 className="h-3.5 w-3.5 text-slate-500" />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
