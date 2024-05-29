'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher() {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const locales = ['en', 'pt', 'zh', 'es', 'hi', 'fr', 'ar', 'bn', 'ru', 'id'];

   return (
      <div>
         {locales.map((loc) => (
            <Link key={loc} href={loc} locale={loc} passHref legacyBehavior>
               <a style={{ marginRight: 10 }}>
                  {loc === 'en'
                     ? 'English - US'
                     : loc === 'pt'
                     ? 'Portuguese - BR'
                     : loc === 'zh'
                     ? 'Chinese (Mandarin)'
                     : loc === 'es'
                     ? 'Spanish (Spain)'
                     : loc === 'hi'
                     ? 'Hindi (India)'
                     : loc === 'fr'
                     ? 'French (France)'
                     : loc === 'ar'
                     ? 'Arabic (Arab Countries)'
                     : loc === 'bn'
                     ? 'Bengali (Bangladesh)'
                     : loc === 'ru'
                     ? 'Russian (Russia)'
                     : loc === 'id'
                     ? 'Indonesian (Indonesia)'
                     : 'Unknown Language'}
               </a>
            </Link>
         ))}
      </div>
   );
}
