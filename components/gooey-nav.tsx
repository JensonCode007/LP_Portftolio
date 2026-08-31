"use client";

import { useEffect, useRef, useState } from "react";

export type GooeyNavItem = { label: string; href: string };
export function GooeyNav({ items, initialActiveIndex = 0, onSelect }: { items: GooeyNavItem[]; initialActiveIndex?: number; onSelect?: (index: number) => void }) {
  const [active, setActive] = useState(initialActiveIndex);
  const particles = useRef<HTMLSpanElement[]>([]);
  useEffect(() => () => particles.current.forEach(p => p.remove()), []);
  function select(index: number, event: React.MouseEvent<HTMLAnchorElement>) {
    if (active === index) return;
    if (onSelect) event.preventDefault();
    setActive(index); onSelect?.(index);
    const target = event.currentTarget.parentElement;
    if (!target) return;
    for (let i = 0; i < 8; i += 1) {
      const particle = document.createElement("span"); particle.className = "gooey-particle";
      particle.style.setProperty("--px", `${Math.cos((i / 8) * Math.PI * 2) * 28}px`); particle.style.setProperty("--py", `${Math.sin((i / 8) * Math.PI * 2) * 28}px`);
      target.appendChild(particle); particles.current.push(particle); window.setTimeout(() => particle.remove(), 650);
    }
  }
  return <nav className="gooey-nav" aria-label="Portfolio navigation"><ul>{items.map((item, index) => <li key={`${item.href}-${index}`} className={active === index ? "active" : ""}><a href={item.href} onClick={event => select(index, event)}>{item.label}</a></li>)}</ul></nav>;
}
export default GooeyNav;
