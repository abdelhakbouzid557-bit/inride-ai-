"use client";

import { useI18n } from "@/lib/i18n";
import { SectionHeading, Reveal } from "@/components/ui";

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3.6 1.8 13.7 12 3.6 22.2c-.4-.2-.6-.6-.6-1.2V3c0-.6.2-1 .6-1.2Zm12 8.9L4.2 1.3 14.2 11.3l1.4-1.4Zm2.2 1.2c.5.5.5 1.3 0 1.8l-3 3-1.8-1.8 1.9-1.9-1.9-1.9 1.8-1.8 3 3.6ZM4.2 22.7l11.4-8.8-1.4-1.4L4.2 22.7Z"
      />
    </svg>
  );
}

function AppleStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M16.7 12.9c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.8-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2-.1 1.7-.8 3.1-.8 1.4 0 1.8.8 3.1.8 1.3 0 2.1-1.2 2.9-2.4.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.7-3.5ZM14.4 5.3c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.8 1.4-.6.7-1.2 1.9-1 3 1.1.1 2.1-.5 2.8-1.4Z" />
    </svg>
  );
}

function HuaweiIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
      <path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Zm0 1.8A7.2 7.2 0 1 1 4.8 12 7.2 7.2 0 0 1 12 4.8Zm0 3.6a3.6 3.6 0 1 0 3.6 3.6A3.6 3.6 0 0 0 12 8.4Zm0 1.8a1.8 1.8 0 1 1-1.8 1.8A1.8 1.8 0 0 1 12 10.2Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function MobilityScene() {
  return (
    <svg viewBox="0 0 260 150" className="h-full w-full" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      {/* city skyline */}
      <g fill="#4346EE">
        <rect x="-4" y="54" width="26" height="72" rx="2" opacity="0.08" />
        <rect x="28" y="36" width="20" height="90" rx="2" opacity="0.07" />
        <rect x="52" y="60" width="24" height="66" rx="2" opacity="0.09" />
        <rect x="184" y="46" width="22" height="80" rx="2" opacity="0.07" />
        <rect x="210" y="62" width="26" height="64" rx="2" opacity="0.09" />
        <rect x="240" y="40" width="24" height="86" rx="2" opacity="0.08" />
        <rect x="33" y="44" width="3" height="3" rx="0.75" opacity="0.35" />
        <rect x="39" y="52" width="3" height="3" rx="0.75" opacity="0.25" />
        <rect x="58" y="68" width="3" height="3" rx="0.75" opacity="0.3" />
        <rect x="66" y="78" width="3" height="3" rx="0.75" opacity="0.2" />
        <rect x="190" y="56" width="3" height="3" rx="0.75" opacity="0.3" />
        <rect x="196" y="64" width="3" height="3" rx="0.75" opacity="0.22" />
        <rect x="246" y="50" width="3" height="3" rx="0.75" opacity="0.32" />
        <rect x="252" y="60" width="3" height="3" rx="0.75" opacity="0.2" />
      </g>

      {/* route arc behind the pin */}
      <path
        d="M18 42 C 70 16, 170 18, 244 50"
        stroke="#4346EE"
        strokeWidth="1.5"
        strokeDasharray="4 7"
        fill="none"
        strokeLinecap="round"
        opacity="0.28"
      />

      {/* curved road */}
      <path
        d="M-12 134 C 48 120, 92 142, 142 130 S 232 114, 272 126"
        stroke="#E9EDF5"
        strokeWidth="15"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M-12 134 C 48 120, 92 142, 142 130 S 232 114, 272 126"
        stroke="#4346EE"
        strokeWidth="1.6"
        strokeDasharray="7 9"
        fill="none"
        strokeLinecap="round"
        opacity="0.55"
      />

      {/* location pin */}
      <g className="animate-[float_3.5s_ease-in-out_infinite] motion-reduce:animate-none">
        <circle cx="131" cy="63" r="11" fill="#4346EE" opacity="0.14" />
        <path
          d="M131 45c-6.8 0-12.3 5.5-12.3 12.3C118.7 66 131 79 131 79s12.3-13 12.3-21.7c0-6.8-5.5-12.3-12.3-12.3z"
          fill="#4346EE"
        />
        <circle cx="131" cy="57.5" r="4.6" fill="#FFFFFF" />
      </g>

      {/* car */}
      <g>
        <ellipse cx="131" cy="130" rx="42" ry="4" fill="#4346EE" opacity="0.1" />
        <path
          d="M93 121.5c0-6.8 3.6-11.2 10.2-13.2l7.2-9.8c1.9-2.6 4.7-4 7.9-4h17.4c3.2 0 6 1.4 7.9 4l7.2 9.8c6.6 2 10.2 6.4 10.2 13.2v3c0 1.2-.9 2.1-2.1 2.1H95.1c-1.2 0-2.1-.9-2.1-2.1v-3z"
          fill="#FFFFFF"
          stroke="#E5E7EB"
          strokeWidth="1.6"
        />
        <path d="M112 99.5h13.5V108h-19l4-7.2a3 3 0 0 1 1.5-1.3z" fill="#4346EE" opacity="0.16" />
        <path d="M132 99.5h4.2c1.1 0 2.1 .5 2.8 1.4l5.6 7.1H132v-8.5z" fill="#4346EE" opacity="0.16" />
        <rect x="96" y="116.5" width="70" height="3" rx="1.5" fill="#4346EE" opacity="0.9" />
        <circle cx="111" cy="127.5" r="7" fill="#111827" />
        <circle cx="111" cy="127.5" r="2.6" fill="#FFFFFF" />
        <circle cx="152" cy="127.5" r="7" fill="#111827" />
        <circle cx="152" cy="127.5" r="2.6" fill="#FFFFFF" />
      </g>
    </svg>
  );
}

export default function DownloadCTA() {
  const { t } = useI18n();
  const stores = [
    { top: t("download.playTop"), name: t("download.playName"), icon: PlayStoreIcon, href: "https://play.google.com/store" },
    { top: t("download.appleTop"), name: t("download.appleName"), icon: AppleStoreIcon, href: "https://apps.apple.com" },
    { top: t("download.huaweiTop"), name: t("download.huaweiName"), icon: HuaweiIcon, href: "https://appgallery.huawei.com" },
  ];

  return (
    <section id="download" className="overflow-hidden bg-white py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("download.kicker")} title={t("download.title")} subtitle={t("download.subtitle")} />

        {/* ===== Phone stage ===== */}
        <Reveal delay={100}>
          <div className="relative mx-auto mt-14 flex max-w-3xl justify-center md:mt-16">
            {/* decorative background geometry */}
            <svg viewBox="0 0 720 620" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
              <g fill="none" stroke="#4346EE" strokeLinecap="round">
                <path d="M80 120 C 200 30, 520 30, 650 140" strokeWidth="1.5" strokeDasharray="5 10" opacity="0.16" />
                <path d="M40 300 C 180 210, 560 220, 690 320" strokeWidth="1.5" strokeDasharray="5 10" opacity="0.12" />
                <path d="M110 540 C 260 450, 480 460, 630 550" strokeWidth="1.5" strokeDasharray="5 10" opacity="0.16" />
                <path d="M600 80 C 640 120, 640 180, 600 220" strokeWidth="1.5" opacity="0.14" />
              </g>
              <g fill="#4346EE">
                <circle cx="80" cy="120" r="4" opacity="0.35" />
                <circle cx="650" cy="140" r="4" opacity="0.35" />
                <circle cx="40" cy="300" r="3" opacity="0.28" />
                <circle cx="690" cy="320" r="3" opacity="0.28" />
                <circle cx="110" cy="540" r="4" opacity="0.32" />
                <circle cx="630" cy="550" r="4" opacity="0.32" />
                <circle cx="150" cy="200" r="2.5" opacity="0.22" />
                <circle cx="570" cy="430" r="2.5" opacity="0.22" />
              </g>
              <rect x="96" y="420" width="34" height="34" rx="10" transform="rotate(18 113 437)" stroke="#4346EE" strokeWidth="1.5" fill="none" opacity="0.14" />
              <rect x="590" y="150" width="28" height="28" rx="8" transform="rotate(-14 604 164)" stroke="#4346EE" strokeWidth="1.5" fill="none" opacity="0.14" />
            </svg>

            {/* glow */}
            <div className="absolute bottom-10 top-auto h-72 w-72 rounded-full bg-[#4346EE]/[0.08] blur-3xl" aria-hidden="true" />

            {/* phone */}
            <div className="relative rounded-[48px] border-[10px] border-[#111827] bg-white shadow-[0_30px_60px_-20px_rgba(17,24,39,0.22),0_10px_24px_-10px_rgba(67,70,238,0.14)]">
              {/* dynamic island */}
              <span className="absolute left-1/2 top-2.5 z-30 h-[18px] w-20 -translate-x-1/2 rounded-full bg-[#111827]" aria-hidden="true" />

              {/* screen */}
              <div className="relative flex h-[500px] w-[236px] flex-col items-center overflow-hidden rounded-[38px] bg-white sm:w-[252px]">
                <img
                  src="/LOGO5.png"
                  alt="INRIDE AI"
                  width={88}
                  height={88}
                  className="mt-14 h-[88px] w-[88px] object-contain"
                />
                <span className="mt-4 text-[1.4rem] font-extrabold leading-none tracking-tight text-[#111827]">INRIDE</span>
                <span className="mt-1.5 text-xs font-bold tracking-[0.4em] text-[#4346EE] ps-[0.4em]">AI</span>

                {/* loading indicator */}
                <span
                  className="mt-7 block h-7 w-7 animate-spin rounded-full border-2 border-[#4346EE]/15 border-t-[#4346EE]"
                  role="status"
                  aria-label={t("download.kicker")}
                />

                {/* mobility scene + safety card */}
                <div className="absolute inset-x-0 bottom-0 h-[195px]">
                  <MobilityScene />
                </div>
                <div className="absolute inset-x-3 bottom-3 z-20 flex items-center gap-3 rounded-2xl border border-[#E9EDF5] bg-white/95 p-3 shadow-[0_12px_28px_-12px_rgba(17,24,39,0.18)] backdrop-blur">
                  <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#4346EE]/10 text-[#4346EE]">
                    <ShieldIcon />
                  </span>
                  <span className="flex min-w-0 flex-col leading-tight">
                    <strong className="truncate text-[0.82rem] font-bold text-[#111827]">{t("download.safetyTitle")}</strong>
                    <small className="mt-0.5 truncate text-[0.7rem] font-medium text-[#6B7280]">{t("download.safetySub")}</small>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ===== Store cards ===== */}
        <Reveal delay={180}>
          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {stores.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3.5 rounded-2xl border border-[#E9EDF5] bg-white px-5 py-4 shadow-[0_6px_18px_-8px_rgba(17,24,39,0.12)] transition-all hover:-translate-y-0.5 hover:border-[#4346EE] hover:shadow-[0_16px_30px_-12px_rgba(67,70,238,0.22)]"
              >
                <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-[#4346EE]/10 text-[#4346EE] transition group-hover:bg-[#4346EE]/15">
                  <s.icon />
                </span>
                <span className="flex min-w-0 flex-col items-start leading-tight">
                  <small className="text-[0.65rem] font-semibold uppercase tracking-wider text-[#9CA3AF]">{s.top}</small>
                  <strong className="text-[0.95rem] font-bold text-[#111827]">{s.name}</strong>
                </span>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
