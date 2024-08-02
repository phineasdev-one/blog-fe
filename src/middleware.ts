import createMiddleware from 'next-intl/middleware';

import { locales, localePrefix, pathnames } from '@/utils/navigate';

export default createMiddleware({
  // Used when no locale matches
  defaultLocale: 'vi',
  localePrefix,
  locales,
  pathnames,
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
