"use client";

import { BadgeCheck, FileCheck2, Handshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui";

export default function Safety() {
  const { t } = useI18n();
  const points = [
    { icon: Handshake, text: t("landing.safetyPoint1") },
    { icon: BadgeCheck, text: t("landing.safetyPoint2") },
    { icon: FileCheck2, text: t("landing.safetyPoint3") },
  ];
  return (
    <section id="safety" className="border-y border-border bg-bg-soft py-20 md:py-24">
      <div className="container-page grid items-center gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading eyebrow={t("landing.safetyEyebrow")} title={t("landing.safetyTitle")} subtitle={t("landing.safetyBody")} align="start" className="mb-0" />
        <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
          {points.map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-4 rounded-xl border border-border bg-white p-4 transition-colors hover:border-primary/35 sm:p-5">
              <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-primary-soft text-primary"><Icon className="h-5 w-5" aria-hidden="true" /></span>
              <span className="text-sm font-semibold leading-6 text-ink">{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
