"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const links = [{ href: "/", label: "Home" }, { href: "/portfolio", label: "Portfolio" }, { href: "/about", label: "About" }];

export function Navigation() {
  const path = usePathname(); const [open, setOpen] = useState(false);
  return <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-7 md:pt-6">
    <div className="mx-auto flex max-w-[1440px] items-center justify-between rounded-full border border-white/10 bg-[#0b0b0b]/80 px-4 py-3 backdrop-blur-md md:px-5">
      <Link href="/" aria-label="Leon Paulo home" className="relative -my-2 h-10 w-12 overflow-hidden" title="Leon Paulo">
        <Image src="/assets/leon-paulo-logo.png" fill priority alt="Leon Paulo monogram" className="scale-[1.28] object-cover mix-blend-screen" />
      </Link>
      <nav className="hidden items-center gap-5 md:flex">{links.map(link => <Link key={link.href} href={link.href} className={`mono text-[10px] uppercase transition ${path === link.href ? "text-white" : "text-white/45 hover:text-white"}`}>{link.label}</Link>)}</nav>
      <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X size={17}/> : <Menu size={17}/>}</Button>
      {open && <div className="absolute left-0 right-0 top-[58px] rounded-2xl border border-white/10 bg-[#111] p-3 md:hidden">{links.map(link => <Link onClick={() => setOpen(false)} className="mono block rounded-lg px-3 py-3 text-xs uppercase text-white/70 hover:bg-white/5" key={link.href} href={link.href}>{link.label}</Link>)}</div>}
    </div>
  </header>;
}
