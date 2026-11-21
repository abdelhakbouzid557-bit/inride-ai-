import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SkipLink from "@/components/SkipLink";
import { LanguageProvider, type Lang } from "@/lib/i18n";

export default function SiteShell({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: ReactNode;
}) {
  return (
    <LanguageProvider initialLang={initialLang} key={initialLang}>
      <SkipLink />
      <Navbar />
      <main id="main" tabIndex={-1}>{children}</main>
      <Footer />
    </LanguageProvider>
  );
}
