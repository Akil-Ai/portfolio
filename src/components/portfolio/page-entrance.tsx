"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Page-load entrance animation.
 * Shows a brief branded overlay that wipes away on first mount,
 * plus a staggered fade-in for the page content.
 */
export function PageEntrance({ children }: { children: React.ReactNode }) {
  const [done, setDone] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => {
    const t = setTimeout(() => setDone(true), 1100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence>
        {!done && (
          <motion.div
            key="entrance-overlay"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950"
          >
            {/* Animated gradient sweep behind the logo */}
            <motion.div
              aria-hidden
              animate={{
                background: [
                  "radial-gradient(circle at 30% 50%, rgba(16,185,129,0.25), transparent 60%)",
                  "radial-gradient(circle at 70% 50%, rgba(20,184,166,0.25), transparent 60%)",
                  "radial-gradient(circle at 30% 50%, rgba(16,185,129,0.25), transparent 60%)",
                ],
              }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            />

            <div className="relative flex flex-col items-center gap-4">
              <motion.div
                initial={{ scale: 0.6, opacity: 0, rotate: -12 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-600 text-3xl font-bold text-white shadow-2xl shadow-emerald-900/50"
              >
                AS
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="text-base font-semibold text-white">Akil S</div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-300">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                  AI &amp; Data Science Engineer
                </div>
              </motion.div>
              {/* Loading bar */}
              <motion.div
                aria-hidden
                className="mt-2 h-0.5 w-32 overflow-hidden rounded-full bg-slate-800"
              >
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="h-full w-full bg-gradient-to-r from-emerald-400 to-teal-500"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={done ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
}
