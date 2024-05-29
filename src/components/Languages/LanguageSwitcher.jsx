'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function LanguageSwitcher() {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   const locales = ['en', 'pt'];

   return (
      <div>
         {locales.map((loc) => (
            <Link key={loc} href={loc} locale={loc} passHref legacyBehavior>
               <a style={{ marginRight: 10 }}>
                  {loc === 'en' ? 'English - US' : 'Portuguese - BR'}
               </a>
            </Link>
         ))}
      </div>
   );
}
