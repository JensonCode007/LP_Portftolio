"use client";

import { useEffect, useRef, useState } from "react";

const stats = [{ value: 8, display: "08+", label: "Years in practice" }, { value: 4, display: "04", label: "Markets reached" }, { value: 20, display: "20+", label: "Freelance partnerships" }, { value: 15, display: "15+", label: "Industries shaped" }];

export function CounterStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  useEffect(() => { const node = ref.current; if (!node) return; const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } }, { threshold: .25 }); observer.observe(node); return () => observer.disconnect(); }, []);
  return <div ref={ref} className="counter-stats">{stats.map((stat, index) => <div className={`counter-stat ${index === 0 ? "counter-stat-primary" : ""}`} key={stat.label}><p className="counter-stat-number">{started ? <CountUp target={stat.value} suffix={stat.display.endsWith("+") ? "+" : ""} pad={stat.value < 10} /> : "00"}</p><p className="mono counter-stat-label">{stat.label}</p></div>)}</div>;
}

function CountUp({ target, suffix, pad }: { target: number; suffix: string; pad: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => { let frame = 0; const startedAt = performance.now(); const tick = (now: number) => { const progress = Math.min(1, (now - startedAt) / 900); const eased = 1 - Math.pow(1 - progress, 3); setValue(Math.round(target * eased)); if (progress < 1) frame = requestAnimationFrame(tick); }; frame = requestAnimationFrame(tick); return () => cancelAnimationFrame(frame); }, [target]);
  return <>{pad ? String(value).padStart(2, "0") : value}{suffix}</>;
}
