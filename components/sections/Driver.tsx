"use client";

import { useEffect, useState } from "react";
import {
  Wallet,
  Banknote,
  CalendarCheck,
  Headphones,
  Sparkles,
  FileCheck2,
  ShieldCheck,
  CheckCircle2,
  Car,
  Navigation,
  MapPin,
  Clock,
  Star,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui";

export default function Driver() {
  const { t } = useI18n();
  const benefits = [
    { icon: Wallet, text: t("driver.b1") },
    { icon: Banknote, text: t("driver.b2") },
    { icon: CalendarCheck, text: t("driver.b3") },
    { icon: Banknote, text: t("driver.b4") },
    { icon: Headphones, text: t("driver.b5") },
    { icon: Sparkles, text: t("driver.b6") },
  ];

  const steps = [
    t("driver.verStep1"),
    t("driver.verStep2"),
    t("driver.verStep3"),
    t("driver.verStep4"),
  ];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActive((v) => (v + 1) % steps.length),
      2400,
    );
    return () => window.clearInterval(id);
  }, [steps.length]);

  return (
    <>
      <section id="drivers" className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-gradient-to-b from-primary-soft/70 to-transparent" aria-hidden="true" />
      <div className="container-page relative grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_0.82fr] lg:gap-16">
        <div className="max-w-2xl">
          <span className="badge-primary">
            {t("driver.kicker")}
          </span>
          <h1 className="mb-4 mt-5 text-[2.15rem] font-extrabold leading-[1.25] text-ink sm:text-5xl lg:text-[4rem]">
            {t("driver.title")}
          </h1>
          <p className="mb-8 max-w-xl text-base leading-8 text-ink-mute sm:text-lg">{t("driver.subtitle")}</p>

          <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">
            {benefits.map((b, i) => (
              <Reveal key={b.text} delay={(i % 2) * 70}>
                <li className="group flex h-full items-start gap-3.5 rounded-2xl border border-border bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <b.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-semibold leading-6 text-ink">{b.text}</span>
                </li>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={120}>
            <a
              href="https://inride.ai.dz/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-primary-strong px-7 py-3 font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <FileCheck2 className="h-5 w-5" aria-hidden="true" />
              {t("driver.cta")}
            </a>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-8 rounded-[50%] bg-primary/15 blur-3xl" aria-hidden="true" />

            <div className="relative rounded-3xl border-8 border-[#0B1020] bg-[#0B1020] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3)]">
              <div className="absolute left-1/2 top-3 z-30 h-4 w-28 -translate-x-1/2 rounded-full bg-black" aria-hidden="true" />
              <div className="flex h-[420px] flex-col justify-between bg-gradient-to-b from-primary/10 via-primary-soft to-white p-4 pt-12">
                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-2xl bg-white/90 p-3 shadow-sm backdrop-blur">
                    <div className="flex items-center gap-2.5">
                      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#16A34A] text-white">
                        <Car className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="text-xs font-bold text-[#15171E]">Yacine B.</p>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-[#F59E0B] text-[#F59E0B]" />
                          <span className="text-[10px] font-bold text-[#626775]">4.9</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-black text-[#15171E]">2,450 DZD</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white/80 p-2.5 text-[10px] font-bold text-[#374151] shadow-sm">
                    <Navigation className="h-4 w-4 text-primary" />
                    <span className="flex-1 truncate">Centre-ville → Bab Ezzouar</span>
                    <span className="text-ink-mute">8.2 km</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white/80 p-2.5 text-[10px] font-bold text-[#374151] shadow-sm">
                    <Clock className="h-4 w-4 text-primary" />
                    <span className="flex-1 truncate">Est. arrival</span>
                    <span className="font-black text-primary-strong">12 min</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-white/80 p-2.5 text-[10px] font-bold text-[#374151] shadow-sm">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="flex-1 truncate">Today&apos;s earnings</span>
                    <span className="font-black text-[#16A34A]">8,200 DZD</span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button type="button" className="flex-1 rounded-xl bg-[#16A34A] py-2.5 text-xs font-bold text-white shadow-md">
                    Accept Ride
                  </button>
                  <button type="button" className="rounded-xl bg-white/80 px-4 py-2.5 text-xs font-bold text-[#374151] shadow-sm">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="bg-bg-soft py-16 sm:py-20 lg:py-28">
      <div className="container-page">
        <ol className="grid overflow-hidden rounded-[1.75rem] border border-border bg-white sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const isActive = active === index;
            return (
              <li
                key={step}
                className={`relative min-h-44 border-b border-border p-6 transition-colors duration-500 sm:min-h-52 sm:p-7 lg:border-b-0 lg:border-e last:border-b-0 lg:last:border-e-0 ${
                  isActive ? "bg-primary-strong text-white" : "bg-white text-ink"
                }`}
              >
                <span className={`grid h-10 w-10 place-items-center rounded-xl ${isActive ? "bg-white/15 text-white" : "bg-primary-soft text-primary"}`}>
                  {index === steps.length - 1 ? <CheckCircle2 className="h-5 w-5" aria-hidden="true" /> : <ShieldCheck className="h-5 w-5" aria-hidden="true" />}
                </span>
                <span className={`mt-7 block text-xs font-bold tabular-nums ${isActive ? "text-white/75" : "text-primary/60"}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-base font-extrabold leading-7">{step}</p>
              </li>
            );
          })}
        </ol>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="https://inride.ai.dz/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-primary-strong px-7 py-3 font-bold text-white shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <FileCheck2 className="h-5 w-5" aria-hidden="true" />
            {t("driver.cta")}
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
