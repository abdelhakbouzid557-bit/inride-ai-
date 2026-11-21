import CurrentHomepage from "@/components/pages/CurrentHomepage";
import { requireSupportedLocale } from "@/lib/locale";

export default async function LocalizedCompatibilityPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  requireSupportedLocale(locale);
  return <CurrentHomepage />;
}
