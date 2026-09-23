"use client";

import { useMemo, useState } from "react";

const extensions = ["png", "jpg", "jpeg"] as const;

export function FlexibleAssetImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  const candidates = useMemo(() => {
    const stem = src.replace(/\.(png|jpe?g)$/i, "");
    return extensions.map((extension) => `${stem}.${extension}`);
  }, [src]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [missing, setMissing] = useState(false);
  if (missing) return null;
  return <img src={candidates[candidateIndex]} alt={alt} loading="lazy" decoding="async" className={className} onError={() => {
    if (candidateIndex < candidates.length - 1) setCandidateIndex(candidateIndex + 1);
    else setMissing(true);
  }} />;
}
