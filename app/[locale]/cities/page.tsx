import LocalizedCompatibilityPage from "@/components/pages/LocalizedCompatibilityPage";

export default function LocaleCitiesPage({ params }: { params: Promise<{ locale: string }> }) {
  return <LocalizedCompatibilityPage params={params} />;
}
