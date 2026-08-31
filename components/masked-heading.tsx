"use client";

type MaskedHeadingProps = {
  text: string;
  className?: string;
  fontSize?: string;
  fontWeight?: number;
  color?: string;
};

/** CSS-based masked heading with the same simple API needed by the intro reveal. */
export default function MaskedHeading({ text, className = "", fontSize = "clamp(3.5rem, 13vw, 10rem)", fontWeight = 700, color = "#f4f1eb" }: MaskedHeadingProps) {
  return <h1 className={`masked-heading ${className}`} style={{ fontSize, fontWeight, color }}>{text}</h1>;
}
