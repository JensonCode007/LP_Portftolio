import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";

const strengths = ["SEO & SEM", "Meta & Google Ads", "Content strategy", "Brand management", "Social media", "Market research", "Team management", "Creative direction"];

export function ToolkitSection() {
  return <section className="toolkit-section px-5 py-20 md:px-8 md:py-24"><div className="mx-auto max-w-[1440px]"><SectionHeading index="04" eyebrow="Toolkit" title="Where strategy meets execution."/><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{strengths.map((item, i) => <Card key={item} className="toolkit-card group p-5 transition hover:-translate-y-1 hover:border-white/30"><span className="mono text-[10px] text-white/35">0{i + 1}</span><p className="mt-12 text-xl">{item}</p><Sparkles className="mt-4 text-white/30" size={16}/></Card>)}</div></div></section>;
}
