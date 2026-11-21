import type { Metadata } from "next";
import "./globals.css";
import { DICTS } from "@/lib/translations";

export const metadata: Metadata = {
  title: "404 — INRIDE AI",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  const { common } = DICTS.ar;

  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Tajawal:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <main className="container-page flex min-h-screen flex-col items-center justify-center py-24 text-center">
          <p className="text-7xl font-black text-primary">404</p>
          <h1 className="mt-4 text-3xl font-extrabold text-ink">{common.notFoundTitle}</h1>
          <p className="mt-3 max-w-md text-ink-mute">{common.notFoundDesc}</p>
          <a
            href="/"
            className="mt-8 inline-flex items-center rounded-full bg-primary px-8 py-3.5 font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-primary-strong"
          >
            {common.notFoundCta}
          </a>
        </main>
      </body>
    </html>
  );
}
