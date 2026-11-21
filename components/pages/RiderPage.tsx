import BackToTop from "@/components/BackToTop";
import AppShowcase from "@/components/sections/AppShowcase";
import DownloadCTA from "@/components/sections/DownloadCTA";
import RiderExperience from "@/components/sections/RiderExperience";

export default function RiderPage() {
  return (
    <>
      <RiderExperience />
      <AppShowcase />
      <DownloadCTA />
      <BackToTop />
    </>
  );
}
