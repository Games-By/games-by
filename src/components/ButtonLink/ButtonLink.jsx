'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ButtonLinkStyles } from './ButtonLinkStyles';
import { locales } from '../Languages/LanguageSwitcher';

export default function ButtonLink({
   title,
   url,
   icon,
   currentColor,
   textTransform,
   className
}) {
   const pathname = usePathname();
   const locale = locales.find(locale => pathname.includes(locale.code))?.code || 'en';
   return (
      <>
         <ButtonLinkStyles
            style={{ textTransform: textTransform }}
            color={currentColor}
            className={className}
         >
            <Link href={locale + url} locale={pathname}>
               {icon && icon}
               {title}
            </Link>
         </ButtonLinkStyles>
      </>
   );
}
