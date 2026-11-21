import RiderContent from "@/components/pages/RiderPage";
import { requireSupportedLocale } from "@/lib/locale";

export default async function LocaleRiderPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  requireSupportedLocale(locale);
  return <RiderContent />;
}
