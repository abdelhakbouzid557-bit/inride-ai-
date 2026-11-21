"use client";

import { BriefcaseBusiness, CircleDollarSign, MessageSquareText, SlidersHorizontal, ThumbsUp, WalletCards } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export default function Audience() {
  const { t } = useI18n();
  const rider = [
    { icon: SlidersHorizontal, text: t("landing.riderBenefit1") },
    { icon: CircleDollarSign, text: t("landing.riderBenefit2") },
    { icon: MessageSquareText, text: t("landing.riderBenefit3") },
  ];
  const driver = [
    { icon: BriefcaseBusiness, text: t("landing.driverBenefit1") },
    { icon: WalletCards, text: t("landing.driverBenefit2") },
    { icon: ThumbsUp, text: t("landing.driverBenefit3") },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-5 lg:grid-cols-2">
        <article id="passengers" className="rounded-[1.75rem] border border-primary/20 bg-primary-soft/50 p-6 sm:p-9 lg:p-10">
          <p className="text-sm font-bold text-primary-strong">{t("landing.riderEyebrow")}</p>
          <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-ink sm:text-4xl">{t("landing.riderTitle")}</h2>
          <p className="mt-4 max-w-lg leading-7 text-ink-mute">{t("landing.riderBody")}</p>
          <ul className="mt-8 space-y-4">
            {rider.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-ink">
                <Icon className="mt-1 h-5 w-5 flex-none text-primary-strong" aria-hidden="true" />
                <span className="leading-7">{text}</span>
              </li>
            ))}
          </ul>
        </article>

        <article id="drivers" className="rounded-[1.75rem] border border-border bg-white p-6 sm:p-9 lg:p-10">
          <p className="text-sm font-bold text-primary-strong">{t("landing.driverEyebrow")}</p>
          <h2 className="mt-3 max-w-md text-3xl font-bold leading-tight text-ink sm:text-4xl">{t("landing.driverTitle")}</h2>
          <p className="mt-4 max-w-lg leading-7 text-ink-mute">{t("landing.driverBody")}</p>
          <ul className="mt-8 space-y-4">
            {driver.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-3 text-ink">
                <Icon className="mt-1 h-5 w-5 flex-none text-primary-strong" aria-hidden="true" />
                <span className="leading-7">{text}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
