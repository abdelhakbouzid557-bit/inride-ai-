import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Cities from "@/components/sections/Cities";
import HowItWorks from "@/components/sections/HowItWorks";
import Audience from "@/components/sections/Audience";
import Safety from "@/components/sections/Safety";
import MobileApp from "@/components/sections/MobileApp";
import FAQ from "@/components/sections/FAQ";
import BackToTop from "@/components/BackToTop";

export default function CurrentHomepage() {
  return (
    <>
      <Hero />
      <Services />
      <HowItWorks />
      <Audience />
      <Safety />
      <Cities />
      <MobileApp />
      <FAQ />
      <BackToTop />
    </>
  );
}
