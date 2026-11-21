"use client";

import { BotMessageSquare, Clock, Radar, Route, ShieldAlert, Wallet } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui";

const orbitNodes = [
  { icon: Wallet, position: "start-[2%] top-[27%] sm:start-[4%]" },
  { icon: Clock, position: "end-[2%] top-[18%] sm:end-[4%]" },
  { icon: ShieldAlert, position: "bottom-[18%] start-[8%] sm:start-[12%]" },
  { icon: Route, position: "bottom-[7%] start-[39%]" },
  { icon: Radar, position: "bottom-[18%] end-[8%] sm:end-[12%]" },
  { icon: BotMessageSquare, position: "end-[1%] top-[51%] sm:end-[3%]" },
];

export default function AIFeatures() {
  const { t } = useI18n();
  const features = [
    { icon: Wallet, title: t("ai.f1T"), desc: t("ai.f1D"), layout: "lg:col-span-3 lg:row-span-2", accent: "bg-primary-soft" },
    { icon: Clock, title: t("ai.f2T"), desc: t("ai.f2D"), layout: "lg:col-span-3", accent: "bg-white" },
    { icon: ShieldAlert, title: t("ai.f3T"), desc: t("ai.f3D"), layout: "lg:col-span-3", accent: "bg-white" },
    { icon: Route, title: t("ai.f4T"), desc: t("ai.f4D"), layout: "lg:col-span-2", accent: "bg-white" },
    { icon: Radar, title: t("ai.f5T"), desc: t("ai.f5D"), layout: "lg:col-span-4", accent: "bg-primary-soft" },
  ];

  return (
    <>
      <section id="ai" className="relative isolate overflow-hidden bg-white pb-20 pt-12 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(rgba(22,135,248,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(22,135,248,0.055)_1px,transparent_1px)] [background-size:2.5rem_2.5rem] [mask-image:linear-gradient(to_bottom,black,transparent_76%)]" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[42rem] bg-[radial-gradient(circle_at_51%_23%,rgba(22,135,248,0.19),transparent_29%),radial-gradient(circle_at_78%_32%,rgba(22,135,248,0.08),transparent_20%),linear-gradient(180deg,#f8fbff_0%,rgba(255,255,255,0)_85%)]" aria-hidden="true" />
        <div className="container-page grid items-center gap-14 lg:grid-cols-[minmax(0,0.94fr)_minmax(25rem,0.86fr)] lg:gap-20">
          <Reveal>
            <header className="max-w-2xl">
              <span className="badge-primary">{t("ai.kicker")}</span>
              <h1 className="mt-5 text-[2.2rem] font-extrabold leading-[1.25] text-ink sm:text-5xl lg:text-[4.15rem]">
                {t("ai.title")}
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-ink-mute sm:text-lg sm:leading-9">
                {t("ai.subtitle")}
              </p>
            </header>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative mx-auto aspect-square w-full max-w-[28rem]" aria-hidden="true">
              <div className="absolute inset-[2%] rounded-full border border-primary/10 bg-white/50 shadow-[0_34px_80px_-42px_rgba(22,135,248,0.58)]" />
              <div className="absolute inset-[10%] rounded-full border border-dashed border-primary/25 motion-safe:animate-[spin_36s_linear_infinite]" />
              <div className="absolute inset-[23%] rounded-full border border-primary/20" />
              <div className="absolute inset-[35%] rounded-full border border-primary/25 bg-primary-soft/80" />
              <div className="absolute start-1/2 top-1/2 h-[46%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-primary/25 to-transparent" />
              <div className="absolute start-1/2 top-1/2 h-px w-[46%] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
              <span className="absolute start-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[1.8rem] bg-primary text-white shadow-[0_24px_48px_-20px_rgba(22,135,248,0.82)] sm:h-28 sm:w-28">
                <span className="absolute inset-[-0.65rem] rounded-[2.1rem] border border-primary/30 motion-safe:animate-[pulseRing_3.2s_ease-out_infinite]" />
                <BotMessageSquare className="relative h-11 w-11 sm:h-12 sm:w-12" />
              </span>
              {orbitNodes.map(({ icon: Icon, position }, index) => (
                <span key={index} className={`absolute ${position} grid h-10 w-10 place-items-center rounded-xl border border-primary/15 bg-white text-primary shadow-[0_12px_28px_-16px_rgba(22,135,248,0.72)] sm:h-11 sm:w-11`}>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
              ))}
              <span className="absolute start-[21%] top-[18%] h-2 w-2 rounded-full bg-primary/60 shadow-[0_0_0_7px_rgba(22,135,248,0.08)]" />
              <span className="absolute end-[25%] bottom-[28%] h-1.5 w-1.5 rounded-full bg-primary/70 shadow-[0_0_0_6px_rgba(22,135,248,0.08)]" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-bg-soft py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" aria-hidden="true" />
        <div className="container-page">
          <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6 lg:auto-rows-[11.5rem]">
            {features.map(({ icon: Icon, title, desc, layout, accent }, index) => (
              <Reveal key={title} delay={(index % 3) * 80} className={layout}>
                <article className={`group relative h-full overflow-hidden rounded-[1.65rem] border border-border p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_22px_46px_-28px_rgba(22,135,248,0.42)] sm:p-7 ${accent}`}>
                  <div className="pointer-events-none absolute -end-10 -top-10 h-28 w-28 rounded-full border border-primary/10 transition-transform duration-500 group-hover:scale-125" aria-hidden="true" />
                  <span className="relative grid h-12 w-12 place-items-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-primary/10 transition-colors duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div className="relative mt-7 max-w-xl">
                    <h2 className="text-xl font-extrabold text-ink">{title}</h2>
                    <p className="mt-3 text-sm leading-7 text-ink-mute">{desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100} className="mt-4">
            <article className="relative isolate overflow-hidden rounded-[1.9rem] bg-primary-strong px-6 py-9 text-white shadow-[0_28px_60px_-30px_rgba(15,115,212,0.7)] sm:px-9 sm:py-11 lg:grid lg:grid-cols-[minmax(0,1fr)_0.72fr] lg:items-center lg:gap-12 lg:px-12">
              <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background-image:radial-gradient(circle_at_18%_22%,white_1px,transparent_1px)] [background-size:1.25rem_1.25rem]" aria-hidden="true" />
              <div className="relative max-w-2xl">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-white/14 text-white ring-1 ring-white/15">
                  <BotMessageSquare className="h-6 w-6" aria-hidden="true" />
                </span>
                <h2 className="mt-7 text-2xl font-extrabold text-white sm:text-3xl">{t("ai.f6T")}</h2>
                <p className="mt-3 text-sm leading-7 text-white/85 sm:text-base">{t("ai.f6D")}</p>
              </div>
              <div className="relative mt-10 flex h-28 items-center justify-center gap-2 lg:mt-0" aria-hidden="true">
                <div className="absolute h-24 w-24 rounded-full border border-white/15" />
                <div className="absolute h-40 w-40 rounded-full border border-white/10" />
                {[34, 58, 82, 48, 72, 94, 64, 40].map((height, index) => (
                  <span key={index} className="relative w-1.5 rounded-full bg-white/85 shadow-[0_0_16px_rgba(255,255,255,0.42)]" style={{ height }} />
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </section>
    </>
  );
}
