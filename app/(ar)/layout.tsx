import type { Metadata, Viewport } from "next";
import "../globals.css";
import { LanguageProvider } from "@/lib/i18n";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SkipLink from "@/components/SkipLink";
import { SITE } from "@/lib/data";
import SiteDocument from "@/components/SiteDocument";
import SiteShell from "@/components/SiteShell";

const BASE = SITE.url;

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "INRIDE AI — تنقّل ذكي بخيارات واضحة",
    template: "%s — INRIDE AI",
  },
  description:
    "اكتشف خدمات التنقّل ونقل الركاب والأغراض مع INRIDE AI. اقترح السعر وتفاهم مع السائق قبل الرحلة.",
  keywords: [
    "INRIDE AI",
    "ride-hailing Algeria",
    "fair pricing Algeria",
    "taxi Algeria",
    "inter-wilaya travel",
    "parcel delivery Algeria",
    "mobility platform",
  ],
  robots: { index: true, follow: true },
  alternates: {
    canonical: BASE,
    languages: {
      ar: `${BASE}?lang=ar`,
      fr: `${BASE}?lang=fr`,
      en: `${BASE}?lang=en`,
      "x-default": BASE,
    },
  },
  openGraph: {
    type: "website",
    siteName: "INRIDE AI",
    url: BASE,
    title: "INRIDE AI — تنقّل ذكي بخيارات واضحة",
    description:
      "خدمات تنقّل ونقل في منصة واحدة، مع إمكانية التفاهم على السعر مباشرةً بين الراكب والسائق.",
    images: [{ url: SITE.ogImage, alt: "INRIDE AI" }],
    locale: "ar_DZ",
    alternateLocale: ["fr_FR", "en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "INRIDE AI — تنقّل ذكي بخيارات واضحة",
    description: "خدمات تنقّل ونقل في منصة واحدة، مع التفاهم على السعر بين الراكب والسائق.",
    images: [SITE.ogImage],
  },
  icons: {
    icon: [
      { url: "/LOGO5.png?v=6", sizes: "192x192", type: "image/png" },
      { url: "/LOGO5.png?v=6", sizes: "512x512", type: "image/png" },
    ],
    apple: "/LOGO5.png?v=6",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1687f8",
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "INRIDE AI",
  url: BASE,
  logo: SITE.ogImage,
  description:
    "Mobility and transport services in one place, with direct price discussions between passengers and drivers.",
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE.email,
    contactType: "customer support",
  },
  inLanguage: ["ar", "fr", "en"],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "INRIDE AI",
  url: BASE,
  inLanguage: ["ar", "fr", "en"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <SiteDocument lang="ar" dir="rtl">
      <SiteShell initialLang="ar">{children}</SiteShell>
    </SiteDocument>
  );
}
