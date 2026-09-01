import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { defaultLocale, locales } from "@/lib/i18n";

// Every route lives under app/[lang], but English keeps the bare URLs it was
// already indexed under. So /platform is *rewritten* (not redirected) to
// /en/platform: the visitor's URL never changes, and only Spanish carries a
// prefix. Nothing here sniffs Accept-Language — a shared link always opens in
// the language it was written in, and the header toggle is the only way to
// switch. (Next 16 renamed the `middleware` convention to `proxy`.)
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const hasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  );
  if (hasLocale) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals and anything that looks like a static file, so the
  // rewrite only ever applies to page routes.
  matcher: ["/((?!_next/|.*\\.[^/]+$).*)"],
};
