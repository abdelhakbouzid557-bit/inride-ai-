import type { ReactNode } from "react";
import { orgJsonLd, websiteJsonLd } from "@/lib/site-metadata";
import type { Lang } from "@/lib/i18n";

export default function SiteDocument({
  lang,
  dir,
  children,
}: {
  lang: Lang;
  dir: "ltr" | "rtl";
  children: ReactNode;
}) {
  return (
    <html lang={lang} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </body>
    </html>
  );
}
