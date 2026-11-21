"use client";

import { Bike, Boxes, CarFront, Package, Truck, UsersRound } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Reveal } from "@/components/ui";

type ServiceCard = {
  icon: typeof CarFront;
  title: string;
  desc: string;
  imageKey: "cars" | "motorcycles" | "passengers" | "moving" | "cargo" | "trucks";
  className?: string;
  accent?: "soft" | "blue";
};

function ImagePlaceholder({
  icon: Icon,
  imageKey,
  accent,
}: Pick<ServiceCard, "icon" | "imageKey" | "accent">) {
  const isBlue = accent === "blue";

  return (
    <div
      className={`relative grid h-44 place-items-center overflow-hidden rounded-[1.15rem] border sm:h-52 ${
        isBlue ? "border-primary/20 bg-primary/10" : "border-border bg-bg-soft"
      }`}
      data-service-image={imageKey}
      aria-hidden="true"
    >
      {/* Future WebP image: /services/oran/cars.webp */}
      {/* Future WebP image: /services/oran/motorcycles.webp */}
      {/* Future WebP image: /services/oran/passengers.webp */}
      {/* Future WebP image: /services/oran/moving.webp */}
      {/* Future WebP image: /services/oran/cargo.webp */}
      {/* Future WebP image: /services/oran/trucks.webp */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(22,135,248,0.20),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.92),rgba(234,244,255,0.78))]" />
      <div className="absolute -end-7 -top-8 h-32 w-32 rounded-full border border-primary/15" />
      <div className="absolute -bottom-12 -start-10 h-36 w-36 rounded-full border border-primary/10" />
      <span className={`relative mx-auto grid h-14 w-14 place-items-center rounded-2xl shadow-sm ${isBlue ? "bg-primary text-white" : "bg-white text-primary"}`}>
        <Icon className="h-7 w-7" />
      </span>
    </div>
  );
}

function Card({ icon: Icon, title, desc, imageKey, className = "", accent = "soft" }: ServiceCard) {
  const isBlue = accent === "blue";

  return (
    <article
      className={`group h-full overflow-hidden rounded-[1.5rem] border p-3 transition duration-200 hover:-translate-y-0.5 hover:shadow-md sm:p-4 ${
        isBlue
          ? "border-primary/25 bg-primary-soft/45 hover:border-primary/50"
          : "border-border bg-white hover:border-primary/40"
      } ${className}`}
    >
      <ImagePlaceholder icon={Icon} imageKey={imageKey} accent={accent} />
      <div className="px-2 pb-3 pt-6 sm:px-3 sm:pb-4">
        <h2 className="text-xl font-extrabold text-ink">{title}</h2>
        <p className="mt-3 max-w-md text-sm leading-7 text-ink-mute">{desc}</p>
      </div>
    </article>
  );
}

export default function ServiceCatalog() {
  const { t } = useI18n();
  const mobility: ServiceCard[] = [
    { icon: CarFront, title: t("landing.serviceCars"), desc: t("landing.serviceCarsBody"), imageKey: "cars", className: "md:col-span-2 lg:row-span-2", accent: "blue" },
    { icon: Bike, title: t("landing.serviceMoto"), desc: t("landing.serviceMotoBody"), imageKey: "motorcycles" },
    { icon: UsersRound, title: t("landing.servicePassenger"), desc: t("landing.servicePassengerBody"), imageKey: "passengers" },
  ];
  const freight: ServiceCard[] = [
    { icon: Boxes, title: t("landing.serviceMoving"), desc: t("landing.serviceMovingBody"), imageKey: "moving" },
    { icon: Package, title: t("landing.serviceCargo"), desc: t("landing.serviceCargoBody"), imageKey: "cargo", className: "md:col-span-2", accent: "blue" },
    { icon: Truck, title: t("landing.serviceTruck"), desc: t("landing.serviceTruckBody"), imageKey: "trucks", className: "lg:col-span-3" },
  ];

  return (
    <>
      <section id="services" className="relative overflow-hidden bg-white pb-16 pt-10 sm:pb-20 sm:pt-14 lg:pb-24 lg:pt-20">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[30rem] bg-gradient-to-b from-primary-soft/70 to-transparent" aria-hidden="true" />
        <div className="container-page relative grid items-center gap-10 lg:grid-cols-[1fr_0.78fr] lg:gap-16">
          <Reveal>
            <header className="max-w-2xl">
              <span className="badge-primary">{t("landing.servicesEyebrow")}</span>
              <h1 className="mt-5 text-[2.15rem] font-extrabold leading-[1.25] text-ink sm:text-5xl lg:text-[4rem]">
                {t("landing.servicesTitle")}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-ink-mute sm:text-lg">
                {t("landing.servicesBody")}
              </p>
            </header>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid grid-cols-3 gap-3 rounded-[1.75rem] border border-primary/15 bg-white p-4 shadow-sm sm:p-5">
              {[CarFront, Bike, UsersRound, Boxes, Package, Truck].map((Icon, index) => (
                <span
                  key={index}
                  className={`grid aspect-square place-items-center rounded-2xl ${index === 0 || index === 4 ? "bg-primary text-white" : "bg-primary-soft text-primary"}`}
                >
                  <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-bg-soft py-16 sm:py-20 lg:py-28">
        <div className="container-page space-y-8 sm:space-y-10">
          <div className="grid auto-rows-[minmax(17rem,auto)] gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {mobility.map((service, index) => (
              <Reveal key={service.title} delay={(index % 3) * 80} className={service.className}>
                <Card {...service} className="h-full" />
              </Reveal>
            ))}
          </div>

          <div className="rounded-[2rem] border border-primary/15 bg-white/70 p-3 sm:p-4 lg:p-5">
            <div className="grid auto-rows-[minmax(17rem,auto)] gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {freight.map((service, index) => (
                <Reveal key={service.title} delay={(index % 3) * 80} className={service.className}>
                  <Card {...service} className="h-full" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
