"use client";

import { Mail, ShieldCheck, FileText, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n";
import { SITE } from "@/lib/data";
import { toLocalizedPath } from "@/lib/routes";
import { Brand } from "./ui";

export default function Footer() {
  const { t, lang } = useI18n();
  const pathname = usePathname();

  const homePath = toLocalizedPath("/", lang) ?? "/";
  const isHome = pathname === homePath;
  const homeAnchor = (fragment: string) =>
    isHome ? fragment : `${homePath}${fragment}`;

  return (
    <footer className="border-t border-border bg-bg-soft" id="about">
      <div className="container-page pb-10 pt-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.1fr]">
          <div>
            <a
              href={homeAnchor("#top")}
              aria-label="INRIDE AI"
            >
              <Brand />
            </a>
            <p className="mt-4 max-w-[34ch] text-[0.95rem] text-ink-mute">{t("footer.tagline")}</p>
            <h3 className="mt-6 block text-[0.95rem] font-extrabold text-ink">{t("footer.aboutTitle")}</h3>
            <p className="mt-2 max-w-[38ch] text-[0.95rem] text-ink-mute">{t("footer.aboutText")}</p>
            <a
              href={SITE.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-bold text-primary-strong"
            >
              <Globe className="h-4 w-4" aria-hidden="true" />
              <span dir="ltr">{t("footer.officialSite")}</span>
            </a>
          </div>

          <nav aria-label={t("aria.services")} className="flex flex-col gap-2.5">
            <h3 className="mb-2 text-[0.95rem] font-extrabold text-ink">{t("footer.servicesTitle")}</h3>
            <a href={homeAnchor("#services")} className="font-semibold text-ink-soft transition hover:text-primary-strong">
              {t("landing.serviceCars")}
            </a>
            <a href={homeAnchor("#services")} className="font-semibold text-ink-soft transition hover:text-primary-strong">
              {t("landing.serviceMoto")}
            </a>
            <a href={homeAnchor("#services")} className="font-semibold text-ink-soft transition hover:text-primary-strong">
              {t("landing.serviceMoving")}
            </a>
            <a href={homeAnchor("#services")} className="font-semibold text-ink-soft transition hover:text-primary-strong">
              {t("landing.serviceCargo")}
            </a>
          </nav>

          <nav aria-label={t("aria.safety")} className="flex flex-col gap-2.5">
            <h3 className="mb-2 text-[0.95rem] font-extrabold text-ink">{t("footer.safetyTitle")}</h3>
            <a href={homeAnchor("#passengers")} className="font-semibold text-ink-soft transition hover:text-primary-strong">
              {t("landing.riderEyebrow")}
            </a>
            <a href={homeAnchor("#drivers")} className="font-semibold text-ink-soft transition hover:text-primary-strong">
              {t("landing.driverEyebrow")}
            </a>
            <a href={homeAnchor("#safety")} className="font-semibold text-ink-soft transition hover:text-primary-strong">
              {t("landing.safetyEyebrow")}
            </a>
          </nav>

          <nav aria-label={t("aria.support")} className="flex flex-col gap-2.5">
            <h3 className="mb-2 text-[0.95rem] font-extrabold text-ink">{t("footer.supportTitle")}</h3>
            <a
              href={`mailto:${SITE.supportEmail}`}
              className="inline-flex items-center gap-2 font-bold text-primary-strong"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>{t("footer.supportEmail")}</span>
            </a>
            <a href="/legal#privacy" className="font-semibold text-ink-soft transition hover:text-primary-strong">
              {t("footer.privacy")}
            </a>
            <a href={`mailto:${SITE.supportEmail}?subject=Account%20deletion%20request`} className="font-semibold text-ink-soft transition hover:text-primary-strong">
              {t("footer.deletion")}
            </a>
            <a href="/legal#terms" className="inline-flex items-center gap-2 font-semibold text-ink-soft transition hover:text-primary-strong">
              <FileText className="h-4 w-4" aria-hidden="true" />
              {t("footer.generalTerms")}
            </a>
            <a href="/legal#privacy" className="inline-flex items-center gap-2 font-semibold text-ink-soft transition hover:text-primary-strong">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              {t("footer.privacyPolicy")}
            </a>
          </nav>
        </div>

        <div className="mt-10 rounded-2xl border border-border bg-white p-4 text-center text-sm text-ink-mute">
          {t("footer.legalNote")}
        </div>

        <p className="mt-8 border-t border-border pt-6 text-center text-[0.86rem] text-ink-faint">
          {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}
