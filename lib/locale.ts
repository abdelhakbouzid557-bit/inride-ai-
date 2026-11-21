import { notFound } from "next/navigation";
import {
  isSupportedLocaleSegment,
  type SupportedLocaleSegment,
} from "@/lib/routes";

export function requireSupportedLocale(locale: string): SupportedLocaleSegment {
  if (!isSupportedLocaleSegment(locale)) notFound();
  return locale;
}
