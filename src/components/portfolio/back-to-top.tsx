"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollTop}
          aria-label="Back to top"
          className="fixed bottom-24 left-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-slate-950/70 text-emerald-300 shadow-lg shadow-black/30 backdrop-blur-md transition hover:border-emerald-400/50 hover:text-emerald-200 sm:bottom-28 sm:left-7"
        >
          <ArrowUp className="h-5 w-5" />
          <span className="sr-only">Back to top</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
