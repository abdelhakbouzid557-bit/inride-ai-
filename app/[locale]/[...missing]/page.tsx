import { notFound } from "next/navigation";
import { requireSupportedLocale } from "@/lib/locale";

export default async function MissingLocalePage({
  params,
}: {
  params: Promise<{ locale: string; missing: string[] }>;
}) {
  const { locale } = await params;
  requireSupportedLocale(locale);
  notFound();
}
