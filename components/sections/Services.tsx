"use client";

import { Bike, Boxes, CarFront, Package, Truck, UsersRound } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { SectionHeading } from "@/components/ui";

export default function Services() {
  const { t } = useI18n();
  const services = [
    { icon: CarFront, title: t("landing.serviceCars"), desc: t("landing.serviceCarsBody") },
    { icon: Bike, title: t("landing.serviceMoto"), desc: t("landing.serviceMotoBody") },
    { icon: UsersRound, title: t("landing.servicePassenger"), desc: t("landing.servicePassengerBody") },
    { icon: Boxes, title: t("landing.serviceMoving"), desc: t("landing.serviceMovingBody") },
    { icon: Package, title: t("landing.serviceCargo"), desc: t("landing.serviceCargoBody") },
    { icon: Truck, title: t("landing.serviceTruck"), desc: t("landing.serviceTruckBody") },
  ];

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading eyebrow={t("landing.servicesEyebrow")} title={t("landing.servicesTitle")} subtitle={t("landing.servicesBody")} align="start" />
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }) => (
            <article key={title} className="group flex min-h-48 flex-col rounded-2xl border border-border bg-white p-5 transition duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-6">
              <span className="mb-6 grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary transition-colors group-hover:bg-primary group-hover:text-white"><Icon className="h-5 w-5" aria-hidden="true" /></span>
              <h3 className="text-lg font-bold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-ink-mute">{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
