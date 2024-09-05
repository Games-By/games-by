'use client';

import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Switcher } from './LanguageSwitcherStyles';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const locales = [
   { name: 'English', code: 'en-US', flag: 'https://www.svgrepo.com/show/508668/flag-us.svg' },
   { name: 'Português', code: 'pt-BR', flag: 'https://www.svgrepo.com/show/405433/flag-for-flag-brazil.svg' },
   { name: 'Español', code: 'es-ES', flag: 'https://www.svgrepo.com/show/248935/spain.svg' },
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
         initial={{ height: 0 }}
         animate={{ opacity: 1, height: 'auto' }}
         exit={{ height: 0 }}
         transition={{ duration: 0.4 }}
      >
         {locales.map((loc) => (
            <MotionLink
               initial={{ y: 0, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               exit={{ y: 0, opacity: 0 }}
               transition={{ duration: 0.1 }}
               key={loc.code}
               href={getNewPathname(loc.code)}
               locale={loc.code}
               className={`language ${
                  pathname.includes(getNewPathname(loc.code)) ? 'active' : ''
               }`}
            >
               <Image width={30} height={20} alt='flag' src={loc.flag} />
               {loc.name} ({loc.code})
            </MotionLink>
         ))}
      </Switcher>
   );
};

export default LanguageSwitcher;
