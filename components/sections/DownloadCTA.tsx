"use client";

import { QrCode, Shield } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui";

function StoreIcon({ type }: { type: "play" | "apple" | "huawei" }) {
  if (type === "play")
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <path fill="currentColor" d="M3.6 1.8 13.7 12 3.6 22.2c-.4-.2-.6-.6-.6-1.2V3c0-.6.2-1 .6-1.2Zm12 8.9L4.2 1.3 14.2 11.3l1.4-1.4Zm2.2 1.2c.5.5.5 1.3 0 1.8l-3 3-1.8-1.8 1.9-1.9-1.9-1.9 1.8-1.8 3 3.6ZM4.2 22.7l11.4-8.8-1.4-1.4L4.2 22.7Z" />
      </svg>
    );
  if (type === "apple")
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
        <path d="M16.7 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2-.1 1.7-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.1-1.2 2.9-2.4.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.7-3.5ZM14.4 5.3c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.2 1.9-1 3 1.1.1 2.1-.5 2.8-1.4Z" />
      </svg>
    );
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 1.8A7.2 7.2 0 1 1 4.8 12 7.2 7.2 0 0 1 12 4.8Zm0 3.6a3.6 3.6 0 1 0 3.6 3.6A3.6 3.6 0 0 0 12 8.4Zm0 1.8a1.8 1.8 0 1 1-1.8 1.8A1.8 1.8 0 0 1 12 10.2Z" />
    </svg>
  );
}

function FakeQr() {
  const cells: [number, number][] = [];
  for (let y = 0; y < 11; y++)
    for (let x = 0; x < 11; x++) {
      if ((x < 3 && y < 3) || (x > 7 && y < 3) || (x < 3 && y > 7)) continue;
      cells.push([x, y]);
    }
  return (
    <svg viewBox="0 0 13 13" className="h-full w-full" aria-hidden="true">
      <rect x="0.5" y="0.5" width="2.5" height="2.5" rx="0.4" fill="currentColor" />
      <rect x="1" y="1" width="1.5" height="1.5" rx="0.2" fill="white" />
      <rect x="1.3" y="1.3" width="0.9" height="0.9" rx="0.1" fill="currentColor" />
      <rect x="10" y="0.5" width="2.5" height="2.5" rx="0.4" fill="currentColor" />
      <rect x="10.5" y="1" width="1.5" height="1.5" rx="0.2" fill="white" />
      <rect x="10.8" y="1.3" width="0.9" height="0.9" rx="0.1" fill="currentColor" />
      <rect x="0.5" y="10" width="2.5" height="2.5" rx="0.4" fill="currentColor" />
      <rect x="1" y="10.5" width="1.5" height="1.5" rx="0.2" fill="white" />
      <rect x="1.3" y="10.8" width="0.9" height="0.9" rx="0.1" fill="currentColor" />
      {cells.map(([x, y], i) =>
        (i * 7 + x + y) % 3 !== 0 ? (
          <rect key={`${x}-${y}`} x={x + 0.5} y={y + 0.5} width={0.7} height={0.7} rx="0.1" fill="currentColor" />
        ) : null,
      )}
    </svg>
  );
}

function PhoneScene() {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: 140 }}>
      <svg viewBox="0 0 220 140" className="h-full w-full" preserveAspectRatio="xMidYMax slice">
        <rect width="220" height="140" fill="#F7F8FC" />
        <rect y="108" width="220" height="32" fill="#E5E7EB" />
        <rect x="0" y="106" width="220" height="4" fill="#D1D5DB" />
        {[30, 70, 110, 150].map((x) => (
          <line key={x} x1={x} y1={120} x2={x + 20} y2={120} stroke="white" strokeWidth="2" strokeDasharray="6 4" opacity={0.7} />
        ))}
        <rect x="45" y="68" width="14" height="38" rx="2" fill="#E5E7EB" />
        <rect x="47" y="72" width="10" height="7" rx="1" fill="#CBD5E1" />
        <rect x="47" y="82" width="10" height="7" rx="1" fill="#CBD5E1" />
        <rect x="47" y="92" width="10" height="7" rx="1" fill="#CBD5E1" />
        <rect x="76" y="52" width="18" height="54" rx="3" fill="#E5E7EB" />
        <rect x="79" y="57" width="12" height="10" rx="1.5" fill="#CBD5E1" />
        <rect x="79" y="70" width="12" height="10" rx="1.5" fill="#CBD5E1" />
        <rect x="79" y="83" width="12" height="10" rx="1.5" fill="#CBD5E1" />
        <rect x="82" y="47" width="6" height="5" rx="1" fill="#D1D5DB" />
        <rect x="138" y="62" width="16" height="44" rx="2" fill="#E5E7EB" />
        <rect x="140" y="67" width="12" height="8" rx="1" fill="#CBD5E1" />
        <rect x="140" y="78" width="12" height="8" rx="1" fill="#CBD5E1" />
        <rect x="162" y="48" width="20" height="58" rx="3" fill="#E5E7EB" />
        <rect x="165" y="53" width="14" height="12" rx="1.5" fill="#CBD5E1" />
        <rect x="165" y="68" width="14" height="12" rx="1.5" fill="#CBD5E1" />
        <rect x="165" y="83" width="14" height="12" rx="1.5" fill="#CBD5E1" />
        <rect x="169" y="42" width="6" height="6" rx="1" fill="#D1D5DB" />
        <g transform="translate(115, 82)">
          <rect x="-18" y="-4" width="36" height="14" rx="4" fill="#4346EE" />
          <rect x="-14" y="-7" width="28" height="6" rx="3" fill="#3639D6" />
          <rect x="-20" y="8" width="5" height="4" rx="2" fill="#111827" opacity={0.6} />
          <rect x="15" y="8" width="5" height="4" rx="2" fill="#111827" opacity={0.6} />
          <circle cx="-10" cy="10" r="2" fill="#374151" />
          <circle cx="10" cy="10" r="2" fill="#374151" />
          <rect x="16" y="1" width="6" height="4" rx="1" fill="#4346EE" opacity={0.8} />
          <rect x="-22" y="1" width="6" height="4" rx="1" fill="#4346EE" opacity={0.8} />
        </g>
        <g transform="translate(62, 56)">
          <circle cx="0" cy="0" r="8" fill="#4346EE" opacity={0.12} />
          <circle cx="0" cy="0" r="4" fill="#4346EE" opacity={0.25} />
          <circle cx="0" cy="0" r="2" fill="#4346EE" />
          <line x1="0" y1="8" x2="0" y2="18" stroke="#4346EE" strokeWidth="1.5" opacity={0.4} />
        </g>
        <path d="M 0 106 Q 55 93 110 98 Q 165 103 220 106" fill="none" stroke="#4346EE" strokeWidth="1.5" opacity={0.2} strokeDasharray="4 3" />
      </svg>
    </div>
  );
}

function GeometricBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg className="absolute -start-20 top-1/4 h-80 w-80 opacity-[0.06]" viewBox="0 0 320 320">
        <circle cx="160" cy="160" r="150" fill="none" stroke="#4346EE" strokeWidth="1" />
        <circle cx="160" cy="160" r="100" fill="none" stroke="#4346EE" strokeWidth="0.5" strokeDasharray="4 6" />
        <circle cx="160" cy="160" r="50" fill="none" stroke="#4346EE" strokeWidth="0.5" />
      </svg>
      <svg className="absolute -end-16 top-1/3 h-64 w-64 opacity-[0.05]" viewBox="0 0 260 260">
        <rect x="30" y="30" width="200" height="200" rx="20" fill="none" stroke="#4346EE" strokeWidth="0.8" transform="rotate(15 130 130)" />
        <rect x="60" y="60" width="140" height="140" rx="14" fill="none" stroke="#4346EE" strokeWidth="0.5" strokeDasharray="3 5" transform="rotate(30 130 130)" />
      </svg>
      <svg className="absolute start-1/2 -translate-x-1/2 top-0 h-40 w-full opacity-[0.04]" viewBox="0 0 800 160">
        <path d="M 0 80 Q 200 20 400 80 Q 600 140 800 80" fill="none" stroke="#4346EE" strokeWidth="1.5" strokeDasharray="6 8" />
      </svg>
    </div>
  );
}

export default function DownloadCTA() {
  const { t } = useI18n();

  const stores = [
    { top: t("download.playTop"), name: t("download.playName"), type: "play" as const, href: "https://play.google.com/store" },
    { top: t("download.appleTop"), name: t("download.appleName"), type: "apple" as const, href: "https://apps.apple.com" },
    { top: t("download.huaweiTop"), name: t("download.huaweiName"), type: "huawei" as const, href: "https://appgallery.huawei.com" },
  ];

  return (
    <section id="download" className="relative overflow-hidden bg-[#F7F8FC] py-20 md:py-28">
      <GeometricBg />

      <div className="container-page relative z-10">
        <Reveal>
          <header className="mx-auto mb-16 max-w-2xl text-center">
            <span className="eyebrow">{t("download.kicker")}</span>
            <h2 className="mb-4 text-3xl font-extrabold leading-tight text-[#111827] md:text-5xl">
              {t("download.title")}
            </h2>
            <p className="text-base text-[#6B7280] md:text-lg">{t("download.subtitle")}</p>
          </header>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col items-center">
            <div className="relative mb-8">
              <div className="absolute -inset-12 rounded-full bg-[#4346EE]/[0.06] blur-3xl" aria-hidden="true" />

              <div className="relative w-[260px] sm:w-[280px] md:w-[300px]">
                <div className="overflow-hidden rounded-[36px] border-[5px] border-[#E5E7EB] bg-white shadow-[0_30px_70px_-20px_rgba(17,24,39,0.12),0_8px_24px_-8px_rgba(67,70,238,0.08)] sm:rounded-[40px] sm:border-[6px]">
                  <div className="absolute left-1/2 top-2.5 z-30 h-3.5 w-20 -translate-x-1/2 rounded-full bg-[#E5E7EB] sm:top-3 sm:h-4 sm:w-24" aria-hidden="true" />

                  <div className="flex min-h-[420px] flex-col items-center justify-center bg-gradient-to-b from-white via-[#F7F8FC] to-[#EEF0FF] pt-8 sm:min-h-[480px]">
                    <img src="/LOGO5.png" alt="INRIDE AI" className="h-16 w-16 object-contain sm:h-20 sm:w-20" width={80} height={80} />
                    <span className="mt-4 text-2xl font-black tracking-tight text-[#4346EE] sm:text-3xl">INRIDE</span>
                    <span className="text-sm font-bold text-[#111827] sm:text-base">AI</span>

                    <div className="mt-5 flex items-center gap-1.5">
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#4346EE]" style={{ animationDelay: "0ms" }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#4346EE]" style={{ animationDelay: "150ms" }} />
                      <span className="h-2 w-2 animate-bounce rounded-full bg-[#4346EE]" style={{ animationDelay: "300ms" }} />
                    </div>

                    <PhoneScene />
                  </div>
                </div>

                <div className="absolute -bottom-5 left-1/2 z-30 w-[calc(100%-32px)] -translate-x-1/2 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-lg sm:-bottom-6 sm:px-5 sm:py-3.5">
                  <div className="flex items-center gap-3">
                    <div className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-[#4346EE]/10">
                      <Shield className="h-[18px] w-[18px] text-[#4346EE]" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[0.7rem] font-bold text-[#111827] sm:text-xs">{t("download.safetyTitle")}</p>
                      <p className="text-[0.6rem] text-[#6B7280] sm:text-[0.68rem]">{t("download.safetySub")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 grid w-full max-w-md grid-cols-1 gap-3 sm:mt-14 sm:max-w-lg sm:grid-cols-3 sm:gap-4">
              {stores.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-[#E5E7EB] bg-white px-4 py-3.5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#4346EE]/40 hover:shadow-md sm:flex-col sm:items-center sm:gap-2 sm:px-5 sm:py-5"
                >
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#4346EE]/10 text-[#4346EE] transition group-hover:bg-[#4346EE]/15">
                    <StoreIcon type={s.type} />
                  </span>
                  <span className="flex flex-col items-start leading-tight sm:items-center">
                    <small className="text-[0.6rem] font-semibold uppercase tracking-wider text-[#9CA3AF] sm:text-[0.58rem]">{s.top}</small>
                    <strong className="text-[0.85rem] font-bold text-[#111827] sm:text-sm">{s.name}</strong>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-3 sm:mt-16">
              <div
                role="img"
                aria-label={t("download.qrAria")}
                className="group relative grid h-32 w-32 place-items-center rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-sm transition hover:shadow-md sm:h-36 sm:w-36"
              >
                <span className="absolute inset-0 rounded-2xl bg-[#4346EE]/5 opacity-0 transition group-hover:opacity-100" />
                <span className="relative h-full w-full text-[#111827]">
                  <FakeQr />
                </span>
              </div>
              <span className="flex items-center gap-1.5 text-sm font-bold text-[#374151]">
                <QrCode className="h-4 w-4 text-[#4346EE]" aria-hidden="true" />
                {t("download.qrTitle")}
              </span>
              <span className="text-xs text-[#9CA3AF]">{t("download.qrSub")}</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
