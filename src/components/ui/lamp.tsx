"use client";
import * as React from "react";
// If you use framer-motion, swap the import:
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Back-compat alias */
export function LampDemo(props: LampEdgeGlowProps) {
  return <LampEdgeGlow {...props} />;
}

type LampEdgeGlowProps = {
  side?: "top" | "bottom";
  className?: string;
  /** where the reveal starts from (0.05 = 5% width) */
  revealFrom?: number;
  duration?: number;
  delay?: number;
};

export function LampEdgeGlow({
  side = "top",
  className,
  revealFrom = 0.08,
  duration = 0.7,
  delay = 0.05,
}: LampEdgeGlowProps) {
  const isTop = side === "top";

  // dynamic styles for masks & conic positions
  const maskDir = isTop ? "to bottom" : "to top";
  const conicA = isTop ? "from 300deg at center top" : "from 300deg at center bottom";
  const conicB = isTop ? "from 60deg at center top" : "from 60deg at center bottom";

  return (
    <motion.div
      aria-hidden="true"
      initial={{ scaleX: revealFrom, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once: true, margin: "-10% 0% -10% 0%" }}
      className={cn(
        "relative z-0 w-full h-16 md:h-24 lg:h-28 overflow-visible pointer-events-none",
        isTop ? "origin-top" : "origin-bottom",
        className
      )}
    >
      <div className="absolute inset-0 isolate">
        {/* Left conic wash (very wide, centered) */}
        <motion.div
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          style={{
            ["--conic-position" as any]: conicA,
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            WebkitMaskImage: `linear-gradient(${maskDir}, white, transparent)`,
            maskImage: `linear-gradient(${maskDir}, white, transparent)`,
          }}
          className={cn(
            "absolute left-1/2 h-64 w-[140vw] -translate-x-1/2 bg-gradient-conic",
            isTop ? "top-2 from-transparent via-transparent to-primary/60"
                  : "bottom-2 from-transparent via-transparent to-primary/60"
          )}
        />
        {/* Right conic wash (mirror) */}
        <motion.div
          initial={{ opacity: 0.45 }}
          whileInView={{ opacity: 0.9 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.05 }}
          style={{
            ["--conic-position" as any]: conicB,
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            WebkitMaskImage: `linear-gradient(${maskDir}, white, transparent)`,
            maskImage: `linear-gradient(${maskDir}, white, transparent)`,
          }}
          className={cn(
            "absolute left-1/2 h-64 w-[140vw] -translate-x-1/2 bg-gradient-conic",
            isTop ? "top-2 from-primary/60 via-transparent to-transparent"
                  : "bottom-2 from-primary/60 via-transparent to-transparent"
          )}
        />
        {/* Soft main glow */}
        <div
          className={cn(
            "absolute left-1/2 rounded-full bg-primary/35 blur-3xl w-[110vw]",
            isTop ? "top-4 h-28 -translate-x-1/2"
                  : "bottom-4 h-28 -translate-x-1/2"
          )}
        />
        {/* Inner bright glow */}
        <motion.div
          initial={{ opacity: 0.7 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.08 }}
          className={cn(
            "absolute left-1/2 rounded-full bg-primary/45 blur-2xl w-[85vw] h-16 origin-center",
            isTop ? "top-3 -translate-x-1/2" : "bottom-3 -translate-x-1/2"
          )}
        />
        {/* Thin highlight line (full width) */}
        <motion.div
          initial={{ opacity: 0.6 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.12 }}
          className={cn(
            "absolute inset-x-0 h-[2px] bg-primary/50 origin-center",
            isTop ? "top-0" : "bottom-0"
          )}
        />
      </div>
    </motion.div>
  );
}
