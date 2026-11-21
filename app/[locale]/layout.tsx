import type { ReactNode } from "react";
import "../globals.css";
import SiteDocument from "@/components/SiteDocument";
import SiteShell from "@/components/SiteShell";
import { isSupportedLocaleSegment } from "@/lib/routes";
import { siteMetadata, siteViewport } from "@/lib/site-metadata";

export const metadata = siteMetadata;
export const viewport = siteViewport;

export function generateStaticParams() {
  return [{ locale: "fr" }, { locale: "en" }];
}

export default async function LocaleRootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const initialLang = isSupportedLocaleSegment(locale) ? locale : "ar";

  return (
    <SiteDocument lang={initialLang} dir={initialLang === "ar" ? "rtl" : "ltr"}>
      <SiteShell initialLang={initialLang}>{children}</SiteShell>
    </SiteDocument>
  );
}
