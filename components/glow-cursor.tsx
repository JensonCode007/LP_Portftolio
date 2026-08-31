"use client";

import { ReactNode, useEffect, useRef } from "react";

type GlowCursorProps = {
  children?: ReactNode;
  className?: string;
  color?: string;
  secondaryColor?: string;
  trailLength?: number;
};

/** A lightweight, dependency-free glow trail inspired by React Bits GlowCursor. */
export default function GlowCursor({
  children,
  className = "",
  color = "rgba(244,241,235,.72)",
  secondaryColor = "rgba(170,170,170,.18)",
  trailLength = 18,
}: GlowCursorProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pointsRef = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const points = pointsRef.current;
    const target = { x: -100, y: -100 };
    const current = points.map(() => ({ x: target.x, y: target.y }));
    let frame = 0;

    const onMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      root.dataset.cursorActive = "true";
    };
    const onLeave = () => { root.dataset.cursorActive = "false"; };

    const animate = () => {
      current.forEach((point, index) => {
        const follow = index === 0 ? 0.72 : 0.24;
        const previous = index === 0 ? target : current[index - 1];
        point.x += (previous.x - point.x) * follow;
        point.y += (previous.y - point.y) * follow;
        const el = points[index];
        if (el) {
          el.style.transform = `translate3d(${point.x}px, ${point.y}px, 0) translate(-50%, -50%)`;
          el.style.opacity = `${Math.max(0, 0.68 - index / Math.max(1, points.length) * 0.65)}`;
        }
      });
      frame = requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    frame = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  const count = Math.max(8, Math.min(30, trailLength));
  return (
    <div ref={rootRef} className={`glow-cursor-root ${className}`}>
      {children}
      <div className="glow-cursor-layer" aria-hidden="true">
        {Array.from({ length: count }, (_, index) => (
          <span
            key={index}
            ref={(element) => { if (element) pointsRef.current[index] = element; }}
            className={index === 0 ? "glow-cursor-point glow-cursor-head" : "glow-cursor-point"}
            style={{
              background: index === 0 ? color : secondaryColor,
              width: `${index === 0 ? 14 : Math.max(4, 12 - index * .38)}px`,
              height: `${index === 0 ? 14 : Math.max(4, 12 - index * .38)}px`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
