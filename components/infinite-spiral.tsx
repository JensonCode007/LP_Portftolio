"use client";

export type InfiniteSpiralItem = { src: string; alt?: string };
export type InfiniteSpiralProps = {
  items?: InfiniteSpiralItem[];
  speed?: number;
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  verticalSpacing?: number;
  perspective?: number;
  cardRadius?: number;
  centerScale?: number;
  edgeBlur?: number;
  cardsPerTurn?: number;
  pauseOnHover?: boolean;
  animationMode?: "all" | "rotate" | "hover";
  className?: string;
};

export default function InfiniteSpiral({ items = [], speed = .55, radius = 170, cardWidth = 100, cardHeight = 100, verticalSpacing = 60, perspective = 1000, cardRadius = 10, centerScale = 1.2, edgeBlur = 6, cardsPerTurn = 7, pauseOnHover = true, className = "" }: InfiniteSpiralProps) {
  const safeItems = items.length ? items : Array.from({ length: 8 }, (_, index) => ({ src: `/assets/spiral_image_${index + 1}.jpg`, alt: `Spiral image ${index + 1}` }));
  return <div className={`infinite-spiral ${pauseOnHover ? "is-pausable" : ""} ${className}`} style={{ perspective, "--spiral-radius": `${radius}px`, "--spiral-speed": `${Math.max(8, 14 - speed * 4)}s`, "--spiral-card-w": `${cardWidth}px`, "--spiral-card-h": `${cardHeight}px`, "--spiral-gap": `${verticalSpacing}px`, "--spiral-radius-card": `${cardRadius}px`, "--spiral-blur": `${edgeBlur}px`, "--spiral-scale": centerScale } as React.CSSProperties}>
    <div className="infinite-spiral-fade" />
    <div className="infinite-spiral-track">{safeItems.map((item, index) => <figure key={`${item.src}-${index}`} className="infinite-spiral-card" style={{ "--spiral-angle": `${(index / Math.max(1, safeItems.length)) * 360}deg`, "--spiral-y": `${(index - safeItems.length / 2) * verticalSpacing / 2}px`, "--spiral-delay": `${-(index / Math.max(1, cardsPerTurn)) * 0.35}s` } as React.CSSProperties}><img src={item.src} alt={item.alt ?? ""} loading="lazy" decoding="async" draggable={false}/></figure>)}</div>
  </div>;
}
