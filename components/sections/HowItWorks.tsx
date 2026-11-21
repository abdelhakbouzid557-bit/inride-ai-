"use client";

import { Check, MessageCircleMore, Route } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui";

export default function HowItWorks() {
  const { t } = useI18n();
  const steps = [
    { icon: Route, title: t("landing.process1"), body: t("landing.process1Body") },
    { icon: MessageCircleMore, title: t("landing.process2"), body: t("landing.process2Body") },
    { icon: Check, title: t("landing.process3"), body: t("landing.process3Body") },
  ];
  return (
    <section id="how-it-works" className="bg-bg-soft py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("landing.processEyebrow")} title={t("landing.processTitle")} subtitle={t("landing.processBody")} />
        <ol className="grid gap-3 sm:gap-4 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, body }, index) => (
            <li key={title} className="rounded-2xl border border-border bg-white p-5 transition duration-200 hover:border-primary/40 hover:shadow-md sm:p-6 md:p-7">
              <span className="mb-7 flex items-center justify-between sm:mb-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
                <span className="text-sm font-bold tabular-nums text-primary/60">0{index + 1}</span>
              </span>
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-mute">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}


