'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Link } from '../../../navigation';

export default function LanguageSwitcher({ url }) {
   const pathname = usePathname();
   const locales = ['en', 'pt', 'zh', 'es', 'hi', 'fr', 'ar', 'bn', 'ru', 'id'];

   return (
      <>
         <div>
            {locales.map((loc) => (
               <Link key={loc} href={`${url || ''}`} locale={loc}>
                  <div
                     style={{
                        marginRight: 10,
                        color: pathname?.includes(loc) ? 'red' : 'blue',
                     }}
                  >
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
                  </div>
               </Link>
            ))}
         </div>
         <Link href={`/login`}>login</Link>
         <br />
         <Link href='/'>home</Link>
      </>
   );
}
