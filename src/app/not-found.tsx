"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Home, MessageCircle, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";

export default function NotFound() {
  return (
    <div className="noise-overlay relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 px-4 text-center text-slate-100">
      {/* Animated glow background */}
      <motion.div
        aria-hidden
        animate={{
          background: [
            "radial-gradient(circle at 30% 40%, rgba(16,185,129,0.18), transparent 50%)",
            "radial-gradient(circle at 70% 60%, rgba(20,184,166,0.18), transparent 50%)",
            "radial-gradient(circle at 30% 40%, rgba(16,185,129,0.18), transparent 50%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0"
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(16,185,129,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,185,129,0.4) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <ScrollProgress />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex max-w-lg flex-col items-center"
      >
        {/* Big 404 with gradient */}
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-br from-emerald-300 via-teal-300 to-emerald-500 bg-clip-text text-8xl font-bold tracking-tight text-transparent sm:text-9xl"
        >
          404
        </motion.h1>

        <div className="mt-2 flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Lost in the neural network
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-6 text-xl font-bold text-white sm:text-2xl"
        >
          This page took a wrong turn
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-3 max-w-md text-sm leading-relaxed text-slate-300"
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track — or ask AKIL Bot, it knows its way
          around.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Button asChild className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white hover:from-emerald-400 hover:to-teal-500">
            <Link href="/">
              <Home className="h-4 w-4" />
              Back to home
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-white/15 bg-white/5 text-slate-100 hover:bg-white/10 hover:text-white">
            <Link href="/#contact">
              <MessageCircle className="h-4 w-4" />
              Contact Akil
            </Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 flex items-center gap-1.5 text-xs text-slate-500"
        >
          <Search className="h-3 w-3" />
          Tip: press{" "}
          <kbd className="rounded border border-white/15 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-300">
            ⌘K
          </kbd>{" "}
          on the home page to quick-jump anywhere
        </motion.div>

        <motion.button
          onClick={() => window.history.back()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-6 flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-emerald-300"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Go back
        </motion.button>
      </motion.div>
    </div>
  );
}
