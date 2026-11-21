"use client";

import { ArrowDown, Handshake, MapPin, PhoneCall, Radar, Smartphone, Star, Wallet } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui";

export default function RiderExperience() {
  const { t } = useI18n();
  const steps = [
    { icon: Smartphone, title: t("rider.s1"), desc: t("rider.s1D") },
    { icon: PhoneCall, title: t("rider.s2"), desc: t("rider.s2D") },
    { icon: MapPin, title: t("rider.s3"), desc: t("rider.s3D") },
    { icon: Wallet, title: t("rider.s4"), desc: t("rider.s4D") },
    { icon: Handshake, title: t("rider.s5"), desc: t("rider.s5D") },
    { icon: Radar, title: t("rider.s6"), desc: t("rider.s6D") },
    { icon: Star, title: t("rider.s7"), desc: t("rider.s7D") },
  ];

  return (
    <section id="experience" className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-primary-soft/70 to-transparent" aria-hidden="true" />
      <div className="container-page relative">
        <Reveal>
          <header className="mx-auto max-w-3xl text-center">
            <span className="badge-primary">{t("rider.kicker")}</span>
            <h1 className="mt-5 text-[2.15rem] font-extrabold leading-[1.25] text-ink sm:text-5xl lg:text-[4rem]">
              {t("rider.title")}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-ink-mute sm:text-lg">
              {t("rider.subtitle")}
            </p>
          </header>
        </Reveal>

        <ol className="relative mx-auto mt-12 grid max-w-6xl gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, index) => (
            <Reveal key={title} delay={(index % 3) * 80} className={index === 6 ? "sm:col-span-2 lg:col-span-1" : ""}>
              <li className="group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-6">
                <div className="flex items-start justify-between gap-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-bold tabular-nums text-primary/60">{String(index + 1).padStart(2, "0")}</span>
                </div>
                <h2 className="mt-7 text-lg font-extrabold text-ink">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-ink-mute">{desc}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={180}>
          <div className="mt-10 flex justify-center sm:mt-12">
            <a
              href="#download"
              className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary-strong px-7 py-3 text-sm font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              INRIDE AI
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
