import type { Metadata, Viewport } from "next";
import "./globals.css";
import { IntroOverlay } from "@/components/intro-overlay";
import { PageTransition } from "@/components/page-transition";
import GlowCursor from "@/components/glow-cursor";
export const metadata: Metadata = { title: "Leon Paulo — Marketing Specialist", description: "Portfolio of Leon Paulo, marketing specialist and brand strategist." };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><GlowCursor><PageTransition>{children}</PageTransition></GlowCursor><IntroOverlay /></body></html>; }
