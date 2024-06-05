import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'pt', 'zh', 'es', 'hi', 'fr', 'ar', 'bn', 'ru', 'id'] as const;
export const localePrefix = 'always';

export const { Link, redirect, usePathname, useRouter } =
   createSharedPathnamesNavigation({ locales, localePrefix });
