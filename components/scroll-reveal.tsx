"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function ScrollReveal({ children, baseOpacity = 0, enableBlur = true, baseRotation = 4, blurStrength = 8, containerClassName = "", textClassName = "" }: { children: ReactNode; baseOpacity?: number; enableBlur?: boolean; baseRotation?: number; blurStrength?: number; containerClassName?: string; textClassName?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { node.classList.toggle("is-visible", entry.isIntersecting); }, { threshold: .12, rootMargin: "0px 0px -8% 0px" }); observer.observe(node); return () => observer.disconnect(); }, []);
  return <h2 ref={ref} className={`scroll-reveal ${containerClassName}`} style={{ "--reveal-opacity": baseOpacity, "--reveal-rotation": `${baseRotation}deg`, "--reveal-blur": `${enableBlur ? blurStrength : 0}px` } as React.CSSProperties}><span className={textClassName}>{children}</span></h2>;
}
