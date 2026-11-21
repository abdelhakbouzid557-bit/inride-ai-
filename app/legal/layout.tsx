import type { ReactNode } from "react";
import "../globals.css";
import SiteDocument from "@/components/SiteDocument";
import SiteShell from "@/components/SiteShell";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export default function LegalRootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <SiteDocument lang="ar" dir="rtl">
      <SiteShell initialLang="ar">{children}</SiteShell>
    </SiteDocument>
  );
}
