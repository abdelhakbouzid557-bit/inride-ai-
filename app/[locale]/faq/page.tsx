import LocalizedCompatibilityPage from "@/components/pages/LocalizedCompatibilityPage";

export default function LocaleFaqPage({ params }: { params: Promise<{ locale: string }> }) {
  return <LocalizedCompatibilityPage params={params} />;
}
