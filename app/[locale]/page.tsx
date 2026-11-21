import LocalizedCompatibilityPage from "@/components/pages/LocalizedCompatibilityPage";

export default function LocaleHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  return <LocalizedCompatibilityPage params={params} />;
}
