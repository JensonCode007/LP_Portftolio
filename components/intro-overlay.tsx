"use client";

import { useEffect, useState } from "react";
import MaskedHeading from "@/components/masked-heading";

export function IntroOverlay() {
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const phrase = "Leon Paulo";
    let index = 0;
    const typingTimer = window.setInterval(() => { index += 1; setTyped(phrase.slice(0, index)); if (index >= phrase.length) window.clearInterval(typingTimer); }, 95);
    const leaveTimer = window.setTimeout(() => setLeaving(true), 3000);
    const closeTimer = window.setTimeout(() => setVisible(false), 3900);
    return () => { window.clearInterval(typingTimer); window.clearTimeout(leaveTimer); window.clearTimeout(closeTimer); };
  }, []);

  if (!visible) return null;
  return <div className={`intro-overlay ${leaving ? "is-leaving" : ""}`} aria-label="Loading portfolio">
    <MaskedHeading text="Creating Reality" />
    <p className="mono intro-kicker"><span>{typed}</span><i aria-hidden="true" /></p>
  </div>;
}
