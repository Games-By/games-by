'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Switcher } from './LanguageSwitcherStyles';
import { motion } from 'framer-motion';

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

const LanguageSwitcher = () => {
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

   const MotionLink = motion(Link);
   return (
      <Switcher
         initial={{ opacity: 0, height: 0 }}
         animate={{ opacity: 1, height: 'auto' }}
         exit={{ opacity: 0, height: 0 }}
         transition={{ duration: 0.3 }}
      >
         {locales.map((loc) => (
            <MotionLink
               initial={{ y: 0, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 0, opacity: 0 }}
               transition={{ duration: 0.1, delay: 0.2 }}
               key={loc.code}
               href={getNewPathname(loc.code)}
               locale={loc.code}
               className={`language ${
                  pathname.includes(getNewPathname(loc.code)) ? 'active' : ''
               }`}
            >
               {loc.name} ({loc.code.toLocaleUpperCase()})
            </MotionLink>
         ))}
      </Switcher>
   );
};

export default LanguageSwitcher;
