"use client";

import { Mail } from "lucide-react";
import BackToTop from "@/components/BackToTop";
import { Reveal, SectionHeading } from "@/components/ui";
import { SITE } from "@/lib/data";
import { useI18n } from "@/lib/i18n";

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <>
      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_50%_12%,rgba(22,135,248,0.16),transparent_34%),linear-gradient(180deg,#f8fbff_0%,rgba(255,255,255,0)_84%)]" aria-hidden="true" />
        <div className="container-page">
          <SectionHeading title={t("contact.title")} subtitle={t("contact.description")} />
          <Reveal delay={100}>
            <article className="relative mx-auto max-w-2xl overflow-hidden rounded-[1.75rem] border border-primary/15 bg-white p-6 text-center shadow-[0_26px_60px_-36px_rgba(22,135,248,0.45)] sm:p-10">
              <div className="pointer-events-none absolute -end-16 -top-16 h-40 w-40 rounded-full border border-primary/10 bg-primary-soft/50" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-20 -start-20 h-40 w-40 rounded-full border border-primary/10 bg-primary-soft/50" aria-hidden="true" />
              <span className="relative mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary text-white shadow-[0_16px_30px_-16px_rgba(22,135,248,0.9)]">
                <Mail className="h-7 w-7" aria-hidden="true" />
              </span>
              <a
                href={`mailto:${SITE.supportEmail}`}
                dir="ltr"
                className="relative mt-7 inline-flex max-w-full break-all rounded-xl border border-primary/15 bg-primary-soft px-5 py-3 text-center text-base font-extrabold text-primary-strong transition hover:border-primary/35 hover:bg-white focus-visible:outline-primary sm:text-lg"
              >
                {SITE.supportEmail}
              </a>
            </article>
          </Reveal>
        </div>
      </section>
      <BackToTop />
    </>
  );
}
