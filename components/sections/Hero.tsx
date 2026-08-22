"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Globe, Handshake, ShieldCheck, Car, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Counter } from "@/components/ui";

type NegStep = "offer" | "counter" | "agreed";

export default function Hero() {
  const { t, lang } = useI18n();
  const [step, setStep] = useState<NegStep>("offer");

  useEffect(() => {
    const order: NegStep[] = ["offer", "counter", "agreed"];
    let idx = 0;
    const id = window.setInterval(() => {
      idx = (idx + 1) % order.length;
      setStep(order[idx]);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  const active = step === "agreed";

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(17,24,39,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,24,39,0.03) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
        <span className="absolute -top-40 -start-28 h-[520px] w-[520px] rounded-full bg-[#4346EE]/15 blur-[70px]" />
        <span className="absolute -top-24 -end-36 h-[460px] w-[460px] rounded-full bg-indigo-400/10 blur-[70px]" />
      </div>

      <div className="container-page relative grid grid-cols-1 items-center gap-8 py-10 sm:gap-12 sm:py-14 md:py-20 lg:grid-cols-12">
        <div className="space-y-5 sm:space-y-7 lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#4346EE]/15 bg-[#4346EE]/5 px-3 py-1.5 text-[0.68rem] font-bold text-[#4346EE] sm:px-4 sm:py-2 sm:text-xs">
            {t("hero.badge")}
          </span>

          <h1 className="text-[1.75rem] font-black leading-[1.18] tracking-tight text-[#111827] sm:text-4xl md:text-5xl lg:text-6xl">
            {t("hero.titleA")}
            <br />
            <span className="grad-text">{t("hero.titleB")}</span>
          </h1>

          <p className="max-w-lg text-[0.9rem] leading-relaxed text-[#6B7280] sm:text-lg">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:gap-4">
            <a
              href="https://inride.ai.dz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#4346EE] px-7 py-3.5 text-[0.9rem] font-bold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#3639D6] sm:py-4 sm:text-base"
            >
              <Download className="h-5 w-5" aria-hidden="true" />
              {t("hero.ctaPwa")}
            </a>
            <a
              href="https://inride.ai.dz/?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#E5E7EB] bg-white px-7 py-3.5 text-[0.9rem] font-bold text-[#111827] shadow-sm transition hover:-translate-y-0.5 hover:border-[#4346EE] hover:text-[#4346EE] sm:py-4 sm:text-base"
            >
              <Globe className="h-5 w-5" aria-hidden="true" />
              {t("hero.ctaWeb")}
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-[#E5E7EB] pt-6 sm:gap-6 sm:pt-8">
            <div>
              <strong className="block text-xl font-black text-[#111827] sm:text-2xl md:text-3xl">
                <Counter value={15000} prefix="+" />
              </strong>
              <span className="mt-0.5 block text-[0.68rem] font-semibold text-[#6B7280] sm:text-sm">
                {t("hero.statsRides")}
              </span>
            </div>
            <div>
              <strong className="block text-xl font-black text-[#111827] sm:text-2xl md:text-3xl">
                <Counter value={4.9} decimals={1} suffix="/5" />
              </strong>
              <span className="mt-0.5 block text-[0.68rem] font-semibold text-[#6B7280] sm:text-sm">
                {t("hero.statsRating")}
              </span>
            </div>
            <div>
              <strong className="block text-xl font-black text-[#111827] sm:text-2xl md:text-3xl">
                <Counter value={58} />
              </strong>
              <span className="mt-0.5 block text-[0.68rem] font-semibold text-[#6B7280] sm:text-sm">
                {t("hero.statsWilayas")}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5">
          <div className="relative w-[280px] sm:w-[300px] md:w-[340px]">
            <div className="absolute -inset-8 rounded-[50%] bg-[#4346EE]/8 blur-3xl" aria-hidden="true" />

            <div className="relative overflow-hidden rounded-[36px] border-[6px] border-[#0B1020] bg-[#0B1020] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.3),0_10px_20px_-10px_rgba(67,70,238,0.15)] sm:rounded-[44px] sm:border-8">
              <div className="absolute left-1/2 top-3 z-30 h-4 w-24 -translate-x-1/2 rounded-full bg-black sm:w-28" aria-hidden="true" />

              <div className="flex h-[480px] flex-col justify-end bg-gradient-to-b from-[#4346EE]/5 via-indigo-50 to-slate-100 p-2.5 pt-10 sm:h-[600px] sm:p-3 sm:pt-12">
                <div className="mb-2 flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[0.6rem] font-bold text-[#111827] shadow-sm backdrop-blur sm:mb-3 sm:px-3 sm:py-1.5 sm:text-[0.68rem]">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#16A34A] sm:h-2 sm:w-2" aria-hidden="true" />
                  <span className="text-[#16A34A]">{t("hero.phoneSos")}</span>
                </div>

                <div className="rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-xl sm:rounded-3xl sm:p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-[#4346EE] shadow-sm overflow-hidden sm:h-9 sm:w-9">
                        <img src="/LOGO5.png" alt="INRIDE AI" className="h-full w-full object-cover" width={36} height={36} />
                      </span>
                      <div>
                        <h3 className="text-[0.65rem] font-bold text-[#111827] sm:text-xs">{t("hero.phoneTitle")}</h3>
                        <p className="text-[0.55rem] text-[#6B7280] sm:text-[10px]">{t("hero.phoneSub")}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-[#4346EE]/10 px-2 py-0.5 text-[0.55rem] font-bold text-[#4346EE] sm:px-2.5 sm:py-1 sm:text-[10px]">
                      <Car className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden="true" />
                      4 min
                    </span>
                  </div>

                  <div className="mt-2 flex items-center justify-between border-t border-[#E5E7EB]/70 pt-2 sm:mt-3 sm:pt-3">
                    <div>
                      <span className="block text-[0.55rem] text-[#9CA3AF] sm:text-[10px]">{t("hero.phoneFareLabel")}</span>
                      <span className="text-sm font-black text-[#111827] sm:text-base">{t("hero.negDone")}</span>
                    </div>
                    <button
                      type="button"
                      className="rounded-lg bg-[#DC2626]/5 px-2 py-1 text-[0.6rem] font-bold text-[#DC2626] transition hover:bg-[#DC2626]/10 sm:rounded-xl sm:px-3 sm:py-1.5 sm:text-[11px]"
                    >
                      {t("hero.phoneCancel")}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -start-3 top-[16%] z-30 rounded-xl border border-[#E5E7EB] bg-white/90 p-2 shadow-lg backdrop-blur sm:-start-4 sm:rounded-2xl sm:p-3">
              <div className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#4346EE]/10 text-[#4346EE] sm:h-8 sm:w-8">
                  <Handshake className="h-3 w-3 sm:h-4 sm:w-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[0.5rem] font-bold uppercase tracking-wide text-[#9CA3AF] sm:text-[0.6rem]">{t("hero.negChip")}</p>
                  <p className="text-[0.6rem] font-extrabold text-[#111827] sm:text-[0.72rem]" key={lang}>{t("hero.negYou")}</p>
                </div>
              </div>

              <div className="mt-1.5 min-h-[64px] sm:mt-2 sm:min-h-[84px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-1 sm:space-y-1.5"
                  >
                    <p className="text-[0.6rem] font-bold text-[#374151] sm:text-[0.72rem]">
                      {step === "offer" && t("hero.negYouOffer")}
                      {step === "counter" && t("hero.negDriverOffer")}
                      {step === "agreed" && `${t("hero.negAgreedLabel")} · ${t("hero.negDone")}`}
                    </p>
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[0.5rem] font-extrabold sm:px-2.5 sm:py-1 sm:text-[0.62rem] ${
                        active ? "bg-[#DCFCE7] text-[#16A34A]" : "bg-[#4346EE]/10 text-[#4346EE]"
                      }`}
                    >
                      {active ? (
                        <>
                          <CheckCircle2 className="h-2.5 w-2.5 sm:h-3 sm:w-3" aria-hidden="true" />
                          {t("hero.negAgreed")}
                        </>
                      ) : (
                        <span className="h-1 w-1 animate-pulse rounded-full bg-current sm:h-1.5 sm:w-1.5" aria-hidden="true" />
                      )}
                      {!active && (step === "offer" ? t("hero.negProposed") : t("hero.negCounter"))}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="absolute -end-1 bottom-[12%] z-30 inline-flex items-center gap-1.5 rounded-full border border-[#E5E7EB] bg-white/85 px-2 py-1.5 text-[0.6rem] font-bold text-[#111827] shadow-md backdrop-blur sm:-end-2 sm:px-3 sm:text-[0.7rem]">
              <ShieldCheck className="h-3 w-3 text-[#4346EE] sm:h-4 sm:w-4" aria-hidden="true" />
              <span>{t("hero.phoneSos")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
