"use client";

import { ArrowUpRight, Smartphone } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/data";

export default function MobileApp() {
  const { t } = useI18n();
  return (
    <section id="app" className="py-20 md:py-28">
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-7 rounded-[1.75rem] border border-border bg-bg-soft p-6 sm:p-9 lg:flex-row lg:items-center lg:gap-10 lg:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-primary-strong">{t("landing.appEyebrow")}</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-ink sm:text-4xl">{t("landing.appTitle")}</h2>
            <p className="mt-4 max-w-xl leading-7 text-ink-mute">{t("landing.appBody")}</p>
          </div>
          <a href={SITE.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 w-full flex-none items-center justify-center gap-2 rounded-full bg-primary-strong px-6 py-3 font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:w-auto">
            <Smartphone className="h-5 w-5" aria-hidden="true" />
            {t("landing.appCta")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
