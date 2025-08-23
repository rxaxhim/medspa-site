"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { SparklesCore } from "@/components/ui/sparkles";
import { IconDotsVertical } from "@tabler/icons-react";

type CompareProps = {
  beforeSrc: string;
  afterSrc: string;
  className?: string;
  initial?: number; // 0–100, default 50
  /** "auto" = hover on non-touch, drag on touch (default) */
  mode?: "auto" | "hover" | "drag";
  showHandle?: boolean;
  beforeClassName?: string;
  afterClassName?: string;
};

export default function Compare({
  beforeSrc,
  afterSrc,
  className,
  initial = 50,
  mode = "auto",
  showHandle = true,
  beforeClassName,
  afterClassName,
}: CompareProps) {
  const [pct, setPct] = React.useState(initial);
  const [dragging, setDragging] = React.useState(false);
  const [isTouch, setIsTouch] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Detect touch-capable device (runs client-side)
  React.useEffect(() => {
    const touch =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        // @ts-ignore
        (navigator && (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)));
    setIsTouch(!!touch);
  }, []);

  const effectiveMode: "hover" | "drag" = mode === "auto" ? (isTouch ? "drag" : "hover") : mode;

  const updateFromClientX = React.useCallback((clientX: number) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const next = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setPct(next);
  }, []);

  // Mouse handlers
  const onMouseDown = (e: React.MouseEvent) => {
    if (effectiveMode === "drag") {
      setDragging(true);
      updateFromClientX(e.clientX);
    }
  };
  const onMouseUp = () => setDragging(false);
  const onMouseMove = (e: React.MouseEvent) => {
    if (effectiveMode === "hover" || (effectiveMode === "drag" && dragging)) {
      updateFromClientX(e.clientX);
    }
  };
  const onMouseLeave = () => {
    setDragging(false);
    if (effectiveMode === "hover") setPct(initial);
  };

  // Touch handlers (always act like drag; friendlier on phones)
  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    updateFromClientX(e.touches[0].clientX);
  };
  const onTouchEnd = () => setDragging(false);
  const onTouchMove = (e: React.TouchEvent) => {
    if (dragging) updateFromClientX(e.touches[0].clientX);
  };

  return (
    <div
      ref={ref}
      className={cn(
        "relative w-full overflow-hidden rounded-xl border bg-slate-100",
        "select-none", // avoid image drag ghosting
        className
      )}
      style={{ cursor: effectiveMode === "drag" ? "grab" : "col-resize" }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onTouchMove={onTouchMove}
      aria-label="Before and After comparison slider"
      role="region"
    >
      {/* BEFORE (bottom layer) */}
      <img
        src={beforeSrc}
        alt="Before"
        loading="lazy"
        draggable={false}
        className={cn("absolute inset-0 h-full w-full object-cover", beforeClassName)}
      />

      {/* AFTER (top layer, clipped) */}
      <img
        src={afterSrc}
        alt="After"
        loading="lazy"
        draggable={false}
        style={{ clipPath: `inset(0 ${100 - pct}% 0 0)` }}
        className={cn("absolute inset-0 h-full w-full object-cover", afterClassName)}
      />

      {/* Labels */}
      <div className="pointer-events-none absolute top-3 left-3 z-10">
        <span className="rounded-full bg-black/60 text-white text-xs px-3 py-1">Before</span>
      </div>
      <div className="pointer-events-none absolute top-3 right-3 z-10">
        <span className="rounded-full bg-black/60 text-white text-xs px-3 py-1">After</span>
      </div>

      {/* Divider + Handle + Sparkles */}
      <div
        className="absolute inset-y-0 z-20"
        style={{ left: `${pct}%`, transform: "translateX(-50%)" }}
        aria-hidden="true"
      >
        {/* Divider line */}
        <div className="h-full w-px bg-white/90 shadow" />

        {/* Sparkle strip on the right side of the divider */}
        <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -right-10 h-3/4 w-10">
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={900}
            className="h-full w-full"
            particleColor="#FFFFFF"
          />
        </div>

        {/* Soft glows along the divider */}
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-1/2 w-10 [mask-image:radial-gradient(50px_at_left,white,transparent)] bg-gradient-to-r from-primary via-transparent to-transparent opacity-90" />
        <div className="absolute top-1/2 -translate-y-1/2 left-0 h-full w-36 [mask-image:radial-gradient(100px_at_left,white,transparent)] bg-gradient-to-r from-primary via-transparent to-transparent opacity-40" />

        {/* Handle */}
        {showHandle && (
          <div className="absolute top-1/2 -translate-y-1/2 -left-3 grid h-6 w-6 place-items-center rounded-md border bg-white shadow">
            <IconDotsVertical className="h-4 w-4 text-black" />
          </div>
        )}
      </div>
    </div>
  );
}
