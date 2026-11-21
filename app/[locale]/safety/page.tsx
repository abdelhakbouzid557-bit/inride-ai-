import LocalizedCompatibilityPage from "@/components/pages/LocalizedCompatibilityPage";

export default function LocaleSafetyPage({ params }: { params: Promise<{ locale: string }> }) {
  return <LocalizedCompatibilityPage params={params} />;
}
