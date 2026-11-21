export const SUPPORTED_LOCALE_SEGMENTS = ["fr", "en"] as const;
export type SupportedLocaleSegment = (typeof SUPPORTED_LOCALE_SEGMENTS)[number];
export type SiteLocale = "ar" | SupportedLocaleSegment;

export const PUBLIC_PATHS = [
  "/",
  "/rider",
  "/driver",
  "/services",
  "/agent",
  "/safety",
  "/cities",
  "/faq",
  "/contact",
] as const;

export type PublicPath = (typeof PUBLIC_PATHS)[number];

export function isSupportedLocaleSegment(value: string): value is SupportedLocaleSegment {
  return SUPPORTED_LOCALE_SEGMENTS.includes(value as SupportedLocaleSegment);
}

export function normalizePublicPath(pathname: string): string {
  if (!pathname || pathname === "/") return "/";
  const normalized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return normalized.replace(/\/+$/, "") || "/";
}

export function getLocalePrefix(pathname: string): SupportedLocaleSegment | null {
  const firstSegment = normalizePublicPath(pathname).split("/")[1];
  return firstSegment && isSupportedLocaleSegment(firstSegment) ? firstSegment : null;
}

export function getPublicPath(pathname: string): PublicPath | null {
  const normalized = normalizePublicPath(pathname);
  const locale = getLocalePrefix(normalized);
  const barePath = locale
    ? normalizePublicPath(normalized.slice(locale.length + 1))
    : normalized;

  return PUBLIC_PATHS.includes(barePath as PublicPath)
    ? (barePath as PublicPath)
    : null;
}

export function toLocalizedPath(
  pathname: string,
  locale: SiteLocale,
): string | null {
  const publicPath = getPublicPath(pathname);
  if (!publicPath) return null;
  if (locale === "ar") return publicPath;
  return publicPath === "/" ? `/${locale}` : `/${locale}${publicPath}`;
}
