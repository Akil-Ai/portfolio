"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

export function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1.4,
  className,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    return prefix + v.toFixed(decimals) + suffix;
  });

  // Fallback static display (also used for SSR/no-JS)
  const [display, setDisplay] = React.useState(
    prefix + value.toFixed(decimals) + suffix
  );

  React.useEffect(() => {
    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(prefix + v.toFixed(decimals) + suffix);
      },
    });
    return () => controls.stop();
  }, [value]);

  return (
    <span className={className} aria-label={`${prefix}${value}${suffix}`}>
      {display}
    </span>
  );
}
