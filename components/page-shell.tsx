import { ReactNode } from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
export function PageShell({ children }: { children: ReactNode }) { return <><Navigation/><main>{children}</main><Footer/></>; }
