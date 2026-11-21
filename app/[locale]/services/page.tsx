import ServicesContent from "@/components/pages/ServicesPage";
import { requireSupportedLocale } from "@/lib/locale";

export default async function LocaleServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  requireSupportedLocale(locale);
  return <ServicesContent />;
}
