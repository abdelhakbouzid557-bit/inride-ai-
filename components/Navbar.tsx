"use client";

import { useEffect, useState } from "react";
import { Menu, Download } from "lucide-react";
import { useI18n, LANGS } from "@/lib/i18n";
import { NAV_ANCHORS } from "@/lib/data";
import { Brand } from "./ui";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

export default function Navbar() {
  const { t, lang, setLang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const side = "right";

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white/80 backdrop-blur-xl transition-all duration-300 ${
        scrolled ? "border-border shadow-md shadow-slate-900/5" : "border-transparent"
      }`}
    >
      <div className="container-page flex h-[68px] items-center justify-between gap-4">
        <a href="#top" aria-label="INRIDE AI" className="shrink-0">
          <Brand />
        </a>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label={t("aria.nav")}
        >
          {NAV_ANCHORS.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition hover:bg-primary-tint hover:text-primary md:py-2.5"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <a
            href="mailto:inrideai@gmail.com"
            className="rounded-full px-3.5 py-2 text-sm font-semibold text-ink-soft transition hover:bg-primary-tint hover:text-primary md:py-2.5"
          >
            {t("nav.support")}
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <div
            className="flex items-center gap-0.5 rounded-full border border-border bg-bg-soft p-1"
            role="group"
            aria-label={t("aria.lang")}
          >
            {LANGS.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                lang={l.code}
                aria-pressed={lang === l.code}
                className={`rounded-full px-2.5 py-1 text-[0.72rem] font-bold leading-none transition ${
                  lang === l.code ? "bg-primary text-white shadow-sm" : "text-ink-mute hover:text-ink"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          <a
            href="#download"
            className="hidden items-center gap-1.5 rounded-full bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-brand transition hover:-translate-y-0.5 hover:bg-primary-strong hover:shadow-glow md:inline-flex"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            {t("nav.cta")}
          </a>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={t("common.menu")}
            onClick={() => setOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent
              side={side}
              className="w-[86%] max-w-xs gap-0 bg-white p-0"
            >
              <SheetTitle className="sr-only">{t("aria.nav")}</SheetTitle>
              <SheetDescription className="sr-only">
                {t("common.menu")}
              </SheetDescription>

              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <a href="#top" onClick={() => setOpen(false)} aria-label="INRIDE AI">
                  <Brand />
                </a>
              </div>

              <nav
                className="flex flex-col gap-1 overflow-y-auto p-4"
                aria-label={t("aria.nav")}
              >
                {NAV_ANCHORS.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base font-bold text-ink transition hover:bg-primary-tint hover:text-primary"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
                <a
                  href="mailto:inrideai@gmail.com"
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-bold text-ink transition hover:bg-primary-tint hover:text-primary"
                >
                  {t("nav.support")}
                </a>
              </nav>

              <div className="mt-auto border-t border-border p-4">
                <a
                  href="#download"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-brand transition hover:-translate-y-0.5 hover:bg-primary-strong"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  {t("nav.cta")}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}