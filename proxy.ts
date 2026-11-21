import { NextResponse, type NextRequest } from "next/server";
import {
  getLocalePrefix,
  isSupportedLocaleSegment,
  toLocalizedPath,
  type SiteLocale,
} from "@/lib/routes";

export function proxy(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname === "/legal" || pathname.startsWith("/legal/")) {
    return NextResponse.next();
  }

  const requestedLang = searchParams.get("lang");
  if (!requestedLang) return NextResponse.next();

  const existingLocale = getLocalePrefix(pathname);
  const targetLocale: SiteLocale | null = existingLocale
    ?? (requestedLang === "ar" || isSupportedLocaleSegment(requestedLang)
      ? requestedLang
      : null);

  if (!targetLocale) return NextResponse.next();

  const targetPath = toLocalizedPath(pathname, targetLocale);
  if (!targetPath) return NextResponse.next();

  const destination = request.nextUrl.clone();
  destination.pathname = targetPath;
  destination.searchParams.delete("lang");

  return NextResponse.redirect(destination, 307);
}

export const config = {
  matcher: [
    {
      source: "/:path*",
      has: [{ type: "query", key: "lang" }],
    },
  ],
};
