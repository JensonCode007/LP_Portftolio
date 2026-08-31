"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FlexibleAssetImage } from "@/components/flexible-asset-image";
import GooeyNav from "@/components/gooey-nav";

type PortfolioItem = { title: string; client: string; image: string };
const tabs = ["Creatives", "Clientele", "Case Studies"] as const;

export function PortfolioTabs({ creatives, logos, caseStudies }: { creatives: PortfolioItem[]; logos: string[]; caseStudies: PortfolioItem[] }) {
  const [active, setActive] = useState<(typeof tabs)[number]>("Creatives");

  return <section className="px-5 pb-24 pt-0 md:px-8 md:pt-0"><div className="mx-auto max-w-[1440px]">
    <div className="portfolio-tab-nav flex justify-center border-y border-white/10 py-5"><GooeyNav items={tabs.map((tab, index) => ({ label: tab, href: `#portfolio-${index}` }))} initialActiveIndex={0} onSelect={index => setActive(tabs[index])} /></div>

    {active === "Creatives" && <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{creatives.map((item, index) => <article key={item.title} className={`group relative min-h-72 overflow-hidden rounded-2xl border border-white/10 ${index % 7 === 0 ? "sm:col-span-2" : ""}`}><div className="fallback-art absolute inset-0"/><FlexibleAssetImage src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5"><p className="mono text-[10px] uppercase text-white/55">{item.client}</p><p className="mt-1 text-lg">{item.title}</p></div></article>)}</div>}

    {active === "Clientele" && <div className="mt-12 grid grid-cols-2 gap-x-3 gap-y-7 md:grid-cols-4">{logos.map((title, index) => <article key={title} className="group min-w-0"><div className="fallback-art relative aspect-square overflow-hidden rounded-2xl border border-white/10"><FlexibleAssetImage src={`/assets/logos/logo-${String(index + 1).padStart(2, "0")}.png`} alt={title} className="absolute inset-0 h-full w-full object-contain p-5 transition duration-500 group-hover:scale-105"/></div><p className="mt-3 truncate text-sm font-medium text-white/90">{title}</p><p className="mono mt-1 text-[9px] uppercase text-white/40">Client identity</p></article>)}</div>}

    {active === "Case Studies" && <div className="mt-12 flex snap-x gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-3 lg:overflow-visible">{caseStudies.map((item, index) => <article key={item.title} className={`group relative min-h-[540px] min-w-[78vw] snap-start overflow-hidden rounded-[10px] border border-white/10 bg-[#171717] sm:min-w-[390px] lg:min-w-0 ${index === 0 ? "lg:mt-0" : "lg:mt-10"}`}><div className="absolute inset-0 bg-[#f4f1eb]"/><FlexibleAssetImage src={item.image} alt={item.title} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-5 pt-32"><p className="mono text-[10px] uppercase text-white/60">{item.client}</p><div className="mt-2 flex items-end justify-between gap-3"><h2 className="text-xl font-medium leading-tight">{item.title}</h2><ArrowUpRight size={19} className="shrink-0 transition group-hover:-translate-y-1 group-hover:translate-x-1"/></div></div></article>)}</div>}
  </div></section>;
}
