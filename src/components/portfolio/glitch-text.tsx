"use client";

import * as React from "react";

/**
 * Glitch text effect with RGB-split shadows.
 * Subtle periodic glitch + a stronger glitch on hover.
 * Uses CSS custom properties + clip-path animation via two pseudo layers.
 */
export function GlitchText({
  children,
  className,
  as: Tag = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  const [glitching, setGlitching] = React.useState(false);

  // Periodic subtle glitch burst
  React.useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const loop = () => {
      const delay = 3500 + Math.random() * 4000;
      timer = setTimeout(() => {
        setGlitching(true);
        setTimeout(() => setGlitching(false), 200);
        loop();
      }, delay);
    };
    loop();
    return () => clearTimeout(timer);
  }, []);

  return (
    <Tag
      data-glitch={glitching ? "on" : "off"}
      className={`glitch-text relative inline-block ${className ?? ""}`}
      onMouseEnter={() => setGlitching(true)}
      onMouseLeave={() => setGlitching(false)}
    >
      {children}
      {/* RGB split layers */}
      <span aria-hidden className="glitch-layer glitch-layer-r">
        {children}
      </span>
      <span aria-hidden className="glitch-layer glitch-layer-b">
        {children}
      </span>
    </Tag>
  );
}
