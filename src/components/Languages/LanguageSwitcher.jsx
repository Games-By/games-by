'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link'; // Corrigido a importação de Link
import { Switcher } from './LanguageSwitcherStyles';

export const locales = [
   { name: 'English', code: 'en' },
   { name: 'Portuguese', code: 'pt' },
   { name: 'Chinese', code: 'zh' },
   { name: 'Spanish', code: 'es' },
   { name: 'Hindi', code: 'hi' },
   { name: 'French', code: 'fr' },
   { name: 'Arabic', code: 'ar' },
   { name: 'Bengali', code: 'bn' },
   { name: 'Russian', code: 'ru' },
   { name: 'Indonesian', code: 'id' },
];

export default function LanguageSwitcher() {
   const pathname = usePathname();

   const getNewPathname = (locale) => {
      const pathSegments = pathname.split('/').filter(Boolean);
      if (locales.some((loc) => loc.code === pathSegments[0])) {
         pathSegments[0] = locale;
      } else {
         pathSegments.unshift(locale);
      }
      return `/${pathSegments.join('/')}`;
   };

   return (
      <Switcher>
         {locales.map((loc) => (
            <Link
               key={loc.code}
               href={getNewPathname(loc.code)}
               locale={loc.code}
               className={`language ${
                  pathname.includes(getNewPathname(loc.code)) ? 'active' : ''
               }`}
            >
               {loc.name}
            </Link>
         ))}
      </Switcher>
   );
}
