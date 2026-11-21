import AgentContent from "@/components/pages/AgentPage";
import { requireSupportedLocale } from "@/lib/locale";

export default async function LocaleAgentPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  requireSupportedLocale(locale);
  return <AgentContent />;
}
