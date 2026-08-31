import type { Metadata, Viewport } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Leon Paulo — Marketing Specialist", description: "Portfolio of Leon Paulo, marketing specialist and brand strategist." };
export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
