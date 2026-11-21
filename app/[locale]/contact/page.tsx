import ContactContent from "@/components/pages/ContactPage";
import { requireSupportedLocale } from "@/lib/locale";

export default async function LocaleContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  requireSupportedLocale(locale);
  return <ContactContent />;
}
