import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { LanyardCard } from "@/components/lanyard-card";
import { ProfileCard } from "@/components/profile-card";
import { ExperienceRoadmap } from "@/components/experience-roadmap";
import { Button } from "@/components/ui/button";
import { ToolkitSection } from "@/components/toolkit-section";
import { LocationsGlobe } from "@/components/locations-globe";

export default function Home() {
  return <PageShell><section className="grain relative min-h-screen overflow-hidden px-5 pb-10 pt-32 md:px-8"><div className="line-grid absolute inset-x-5 top-24 h-[calc(100%-8rem)] border-x border-white/10 md:inset-x-8"/><div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-[1440px] flex-col justify-between"><div className="flex items-center justify-between mono text-[10px] uppercase text-white/45"><span>Independent marketing practice</span><span>India / Worldwide</span></div><div className="grid items-end gap-5 md:grid-cols-[1fr_360px]"><div><p className="mono mb-5 text-[10px] uppercase tracking-[.2em] text-white/55">01 / Leon Paulo</p><h1 className="hero-word max-w-5xl font-semibold">Stories that<br/><em className="display font-medium">move markets.</em></h1><p className="mt-8 max-w-md text-base leading-7 text-white/58">A marketing specialist translating insight into presence, performance, and lasting brand momentum.</p><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link href="/portfolio">Explore portfolio <ArrowUpRight size={16}/></Link></Button><Button asChild variant="ghost" size="lg"><Link href="/about">View profile</Link></Button></div></div><div><LanyardCard/><ProfileCard/></div></div><div className="mt-10 flex items-end justify-between border-t border-white/15 pt-4"><span className="mono max-w-[180px] text-[10px] uppercase leading-5 text-white/40">Six years of cross-market digital marketing</span><ArrowDown className="animate-bounce text-white/55" size={18}/><span className="mono text-[10px] uppercase text-white/40">Scroll / 2026</span></div></div></section>
    <section className="bg-white px-5 py-20 text-[#666666] md:px-8 md:py-28"><div className="mx-auto max-w-[1440px]"><div className="funnel-layout"><div><p className="mono text-[10px] uppercase tracking-[.16em] text-[#666666]/70">02 / A full-funnel perspective</p><p className="display mt-7 max-w-5xl text-4xl leading-tight text-[#666666] md:text-6xl">Across India, the USA, the UK, and the UAE, Leon builds the systems behind attention - and the creative work that earns it.</p></div><LocationsGlobe compact/></div><div className="mt-14 grid grid-cols-2 gap-px overflow-hidden border border-[#666666]/25 bg-[#666666]/25 md:grid-cols-4">{[["06+", "Years in practice"], ["04", "Markets reached"], ["20+", "Freelance partnerships"], ["15+", "Industries shaped"]].map(([number,label])=><div key={label} className="bg-white p-5 md:p-7"><p className="display text-4xl text-[#666666] md:text-5xl">{number}</p><p className="mono mt-6 text-[9px] uppercase text-[#666666]/75">{label}</p></div>)}</div></div></section>
    <ExperienceRoadmap/>
    <ToolkitSection/>
  </PageShell>;
}
