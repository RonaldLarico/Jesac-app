import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  // ✅ Evitar bucles de redirección y manejar rutas internas
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/icono.png") ||
    pathname.startsWith("/sun.svg") ||
    pathname.startsWith("/moon.svg") ||
    pathname.startsWith("/vendor/snow.ts") ||
    /^\/(es|en|fr|de|it|pt|ja|zh)(\/|$)/.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (pathname === "/") {
    const defaultLocale = 'es';
    const url = request.nextUrl.clone();
    url.pathname = `/${defaultLocale}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next|.*\\..*).*)',
  ],
};
