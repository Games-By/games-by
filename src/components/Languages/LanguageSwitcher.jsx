'use client';

import { usePathname } from 'next/navigation';
import { Link } from '../../../navigation';
import { Switcher } from './LanguageSwitcherStyles';

export default function LanguageSwitcher({ url }) {
   const pathname = usePathname();
   const locales = [
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

   return (
      <>
         <Switcher>
            {locales.map((loc) => (
               <Link
                  key={loc.code}
                  href={`${url || loc.code}`}
                  locale={loc.code}
                  className={`language ${pathname.includes(loc.code) && 'active'
                  }`}
               >
                  {loc.name}
               </Link>
            ))}
         </Switcher>
      </>
   );
}
