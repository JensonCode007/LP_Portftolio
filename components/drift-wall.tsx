"use client";

export type DriftWallItem = { image: string; title?: string; href?: string };
export type DriftWallProps = { items?: DriftWallItem[]; columns?: number; tileWidth?: number; tileHeight?: number; gap?: number; speed?: number; direction?: "up" | "down"; overlayColor?: string; className?: string; tilt?: number; turn?: number; perspective?: number; depth?: number; variance?: number; parallax?: number; lift?: number; fade?: number; dim?: number };

export default function DriftWall({ items = [], columns = 3, tileWidth = 200, tileHeight = 132, gap = 18, speed = 42, direction = "up", overlayColor = "#121b21", className = "" }: DriftWallProps) {
  const safeItems: DriftWallItem[] = items.length ? items : Array.from({ length: 8 }, (_, index) => ({ image: `/assets/spiral_image_${index + 1}.jpg`, title: `Image ${index + 1}` }));
  const rows = Array.from({ length: Math.max(2, columns) }, (_, column) => safeItems.filter((_, index) => index % Math.max(2, columns) === column));
  return <div className={`drift-wall ${className}`} style={{ "--drift-w": `${tileWidth}px`, "--drift-h": `${tileHeight}px`, "--drift-gap": `${gap}px`, "--drift-speed": `${Math.max(12, speed)}s`, "--drift-overlay": overlayColor } as React.CSSProperties}>{rows.map((row, index) => <div className={`drift-wall-column ${direction === "down" || index % 2 ? "is-reverse" : ""}`} key={index}><div className="drift-wall-track">{[...row, ...row].map((item, itemIndex) => <a className="drift-wall-tile" href={item.href ?? undefined} key={`${item.image}-${itemIndex}`} aria-label={item.title}><img src={item.image} alt={item.title ?? ""} loading="lazy" decoding="async" draggable={false}/></a>)}</div></div>)}</div>;
}
