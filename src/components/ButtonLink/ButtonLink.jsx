'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ButtonLinkStyles } from './ButtonLinkStyles';
import { locales } from '../Languages/LanguageSwitcher';

const ButtonLink = ({
   title,
   url,
   icon,
   currentColor,
   bgColor,
   textTransform,
   className,
   Aboutblank,
}) => {
   const pathname = usePathname();
   const locale =
      locales.find((locale) => pathname.includes(locale.code))?.code || 'en';
   return (
      <>
         <ButtonLinkStyles>
            <Link
               style={{ textTransform: textTransform }}
               color={currentColor}
               className={className}
               bgColor={bgColor}
               href={!url.includes('https' || 'www') ? locale + url : url}
               locale={pathname}
               target={Aboutblank ? '_blank' : ''}
            >
               {icon && icon}
               {title}
            </Link>
         </ButtonLinkStyles>
      </>
   );
};

export default ButtonLink;
