"use client";

import { useEffect, useState } from "react";
import MaskedHeading from "@/components/masked-heading";

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setLeaving(true), 2400);
    const closeTimer = window.setTimeout(() => setVisible(false), 3250);
    return () => { window.clearTimeout(leaveTimer); window.clearTimeout(closeTimer); };
  }, []);

  if (!visible) return null;
  return <div className={`intro-overlay ${leaving ? "is-leaving" : ""}`} aria-label="Loading portfolio">
    <MaskedHeading text="Creative Ideas" />
    <p className="mono intro-kicker">Leon Paulo / Independent marketing practice</p>
  </div>;
}
