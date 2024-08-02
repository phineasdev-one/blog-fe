import {
  createLocalizedPathnamesNavigation,
  Pathnames,
} from 'next-intl/navigation';

export const locales = ['vi', 'en'] as const;
export const localePrefix = 'always'; // Default

export const pathnames = {
  '/': '/',
  '/blog': {
    en: '/blogs',
    vi: '/bai-viet',
  },

  '/about-me': {
    en: '/about-me',
    vi: '/ve-toi',
  },

  // Dynamic params are supported via square brackets
  '/news/[articleSlug]-[articleId]': {
    en: '/news/[articleSlug]-[articleId]',
    vi: '/neuigkeiten/[articleSlug]-[articleId]',
  },

  // Also (optional) catch-all segments are supported
  '/category/[...slug]': {
    en: '/category/[...slug]',
    vi: '/danh-muc/[...slug]',
  },
  '/tag/[...slug]': {
    en: '/tag/[...slug]',
    vi: '/tag/[...slug]',
  },
  '/contact': {
    en: '/contact',
    vi: '/lien-he',
  },
  '/blog/[...slug]': {
    en: '/blog/[...slug]',
    vi: '/bai-viet/[...slug]',
  },
} satisfies Pathnames<typeof locales>;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({ locales, pathnames });
