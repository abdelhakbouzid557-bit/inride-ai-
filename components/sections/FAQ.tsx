"use client";

import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui";

export default function FAQ() {
  const { t } = useI18n();
  const questions = [1, 2, 3, 4].map((number) => ({
    question: t(`landing.faq${number}`),
    answer: t(`landing.faq${number}Body`),
  }));
  return (
    <section id="faq" className="bg-bg-soft py-20 md:py-28">
      <div className="container-page max-w-4xl">
        <SectionHeading eyebrow={t("landing.faqEyebrow")} title={t("landing.faqTitle")} />
        <div className="divide-y divide-border border-y border-border">
          {questions.map(({ question, answer }) => (
            <details key={question} className="group py-5 sm:py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-start font-bold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                {question}
                <ChevronDown className="h-5 w-5 flex-none text-primary transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="max-w-3xl pt-3 pe-8 text-sm leading-7 text-ink-mute">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}


