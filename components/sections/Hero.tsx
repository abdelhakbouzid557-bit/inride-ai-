"use client";

import { ArrowDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const heroPhoto =
  "https://images.unsplash.com/photo-1622813008532-b771de6f6509?auto=format&fit=crop&w=1800&q=82";

export default function Hero() {
  const { t, lang } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="container-page grid min-h-[600px] items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 lg:py-16">
        <div className="relative z-10 order-1 max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-primary-strong">
            <span className="h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            {t("landing.heroEyebrow")}
          </p>
          <h1 className="max-w-[13ch] text-[2.25rem] font-extrabold leading-[1.2] tracking-tight text-ink sm:text-5xl lg:text-[4.25rem]" lang={lang}>
            {t("landing.heroTitle")}{" "}
            <span className="text-primary-strong">{t("landing.heroAccent")}</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-ink-mute sm:mt-6 sm:text-lg">
            {t("landing.heroBody")}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row">
            <a href="#services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-primary-strong px-7 py-3 font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-primary">
              {t("landing.heroPrimary")}
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#how-it-works" className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-white px-7 py-3 font-bold text-ink transition duration-200 hover:border-primary hover:bg-primary-soft/40 hover:text-primary-strong">
              {t("landing.heroSecondary")}
            </a>
          </div>
          <p className="mt-6 text-sm font-medium text-ink-faint">{t("hero.badge")}</p>
        </div>

        <figure className="relative order-2 h-[260px] overflow-hidden rounded-[1.5rem] bg-bg-soft sm:h-[390px] sm:rounded-[2rem] lg:h-[500px]">
          <img src={heroPhoto} alt={t("landing.heroImageAlt")} className="h-full w-full object-cover" loading="eager" fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/45 via-transparent to-transparent" aria-hidden="true" />
          <figcaption className="absolute bottom-5 start-5 rounded-full border border-white/25 bg-white/90 px-4 py-2 text-xs font-bold text-ink shadow-sm backdrop-blur"><a href="https://unsplash.com/photos/a-city-street-filled-with-lots-of-traffic-next-to-tall-buildings-iE34PeFAhiE" target="_blank" rel="noopener noreferrer">{t("landing.photoCredit")}</a></figcaption>
        </figure>
      </div>
    </section>
  );
}
