import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import ScrollFloat from "@/components/scroll-float";

const strengths = ["SEO & SEM", "Meta & Google Ads", "Content strategy", "Brand management", "Social media", "Market research", "Team management", "Creative direction"];

export function ToolkitSection() {
  return <section className="toolkit-section px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-[1440px]"><div className="mb-10 flex items-end justify-between gap-6 border-b border-white/15 pb-5"><div><p className="mono text-[10px] uppercase tracking-[.18em] text-white/45">04 / Toolkit</p><ScrollFloat containerClassName="mt-3" textClassName="display text-4xl leading-[.95] md:text-6xl">Where strategy meets execution.</ScrollFloat></div><span className="mono hidden text-[10px] uppercase tracking-[.14em] text-white/35 md:block">Scroll to explore</span></div><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{strengths.map((item, i) => <Card key={item} className="toolkit-card group p-5 transition hover:-translate-y-1 hover:border-white/30"><span className="mono text-[10px] text-white/35">0{i + 1}</span><p className="mt-12 text-xl">{item}</p><Sparkles className="mt-4 text-white/30" size={16}/></Card>)}</div></div></section>;
}
