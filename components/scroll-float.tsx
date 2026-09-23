"use client";

import { ReactNode, useEffect, useRef } from "react";

export default function ScrollFloat({ children, containerClassName = "", textClassName = "" }: { children: ReactNode; containerClassName?: string; textClassName?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => node.classList.toggle("is-visible", entry.isIntersecting), { threshold: .12, rootMargin: "0px 0px -8% 0px" }); observer.observe(node); return () => observer.disconnect(); }, []);
  return <h2 ref={ref} className={`scroll-float ${containerClassName}`}><span className={textClassName}>{children}</span></h2>;
}
