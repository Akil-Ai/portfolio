"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function Typewriter({
  words,
  className,
  typeSpeed = 90,
  deleteSpeed = 45,
  pauseBetween = 1600,
}: {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseBetween?: number;
}) {
  const [index, setIndex] = React.useState(0);
  const [sub, setSub] = React.useState("");
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = words[index % words.length] ?? "";

    if (!deleting && sub === current) {
      const t = setTimeout(() => setDeleting(true), pauseBetween);
      return () => clearTimeout(t);
    }

    if (deleting && sub === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => {
        setSub((prev) =>
          deleting ? current.slice(0, prev.length - 1) : current.slice(0, prev.length + 1)
        );
      },
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(t);
  }, [sub, deleting, index, words, typeSpeed, deleteSpeed, pauseBetween]);

  return (
    <span className={className} aria-label={words[index]}>
      {sub}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        className="ml-0.5 inline-block w-[2px] self-stretch bg-emerald-400 align-middle"
        style={{ height: "1em" }}
      >
        &nbsp;
      </motion.span>
    </span>
  );
}
