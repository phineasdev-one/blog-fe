export const locales = ['vi', 'en'] as const;
export const localePrefix = 'always'; // Default

export const pathnames = {
  '/': '/',
  '/blog': {
    en: '/blogs',
    vi: '/blog',
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
    vi: '/category/[...slug]',
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
    vi: '/blog/[...slug]',
  },
};
