"use client";

import { useI18n } from "@/lib/i18n";

export default function SkipLink() {
  const { t } = useI18n();
  return (
    <a
      href="#main"
      className="sr-only fixed start-4 top-4 z-[100] rounded-lg bg-primary-strong px-4 py-3 font-bold text-white focus:not-sr-only"
    >
      {t("common.skip")}
    </a>
  );
}

