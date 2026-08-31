import data from "@/data/portfolio.json";
import { PageShell } from "@/components/page-shell";
import { PortfolioTabs } from "@/components/portfolio-tabs";
import ParticleText from "@/components/particle-text";
export default function PortfolioPage() { return <PageShell><section className="mx-auto h-[250px] max-w-[1440px] px-5 pt-20 md:h-[300px] md:px-8 md:pt-24"><ParticleText text="Portfolio" particleSize={2} density={4} color="#ffffff" highlightColor="#8b5cf6" scatter={180} gatherDuration={1600} stagger={420} pointerRepel={40} repelRadius={120} idleDrift={0.7} trigger="hover" fontSize="clamp(3rem, 12vw, 8rem)" fontWeight={800} fontFamily="inherit" glow /></section><PortfolioTabs creatives={data.creativeWork} logos={data.logos} caseStudies={data.caseStudies}/></PageShell>; }
