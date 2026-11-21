"use client";

import { useState } from "react";
import { MapPin, Search } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

export default function Cities() {
  const { t, dict } = useI18n();
  const [search, setSearch] = useState("");

  const cities = dict.cities.cities;
  const liveCount = cities.filter((city) => city.status === "live").length;
  const filtered = cities.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="cities" className="bg-bg-soft py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("cities.kicker")} title={t("cities.title")} subtitle={t("cities.subtitle")} />

        <Reveal delay={100}>
          <div className="mx-auto mb-8 flex max-w-xl items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-sm transition focus-within:border-primary/60 focus-within:ring-4 focus-within:ring-primary/10">
            <Search className="h-5 w-5 flex-none text-ink-faint" aria-hidden="true" />
            <input
              type="text"
              aria-label={t("cities.search")}
              placeholder={t("cities.search")}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm font-semibold text-ink outline-none placeholder:text-ink-faint"
            />
          </div>
        </Reveal>

        <div className="mx-auto mb-8 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-xs font-semibold text-ink-mute sm:mb-10 sm:gap-3">
          <span className="rounded-full border border-border bg-white px-3.5 py-2">{t("cities.totalWilayas")}</span>
          <span className="rounded-full border border-success/20 bg-success-soft px-3.5 py-2 text-success">{liveCount} {t("cities.available")}</span>
          <span className="rounded-full border border-warning/20 bg-warning/10 px-3.5 py-2 text-ink-soft">{cities.length - liveCount} {t("cities.soon")}</span>
        </div>

        <ul className="mx-auto grid max-w-4xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((c, i) => (
            <li key={c.name} className="min-w-0">
              <Reveal delay={(i % 3) * 80} className="h-full">
                <div className="flex h-full items-center justify-between gap-3 rounded-2xl border border-border bg-white p-4 transition duration-200 hover:border-primary/35 hover:shadow-sm">
                  <span className="flex items-center gap-3">
                    <span className="relative flex h-5 w-5 flex-none items-center justify-center">
                      <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                    </span>
                    <span className="font-bold text-ink">{c.name}</span>
                  </span>
                  <span className={`flex-none rounded-full px-2.5 py-1 text-[0.7rem] font-bold ${c.status === "live" ? "bg-success-soft text-success" : "bg-warning/10 text-ink-soft"}`}>
                    {c.status === "live" ? t("cities.available") : t("cities.soon")}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
