import DriverContent from "@/components/pages/DriverPage";
import { requireSupportedLocale } from "@/lib/locale";

export default async function LocaleDriverPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  requireSupportedLocale(locale);
  return <DriverContent />;
}
