'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { StyledLink } from './ButtonLinkStyles';
import { locales } from '../Languages/LanguageSwitcher';

const ButtonLink = ({ title, url, icon, textTransform, className, Aboutblank, action }) => {
   const pathname = usePathname();
   const locale = locales.find((locale) => pathname.includes(locale.code))?.code || 'en';
   return (
      <StyledLink
         style={{ textTransform: textTransform }}
         href={!url.includes('https' || 'www') ? `${locale}${url}` : url}
         locale={pathname}
         target={Aboutblank ? '_blank' : ''}
         className={className}
         onClick={action}
      >
         {icon && icon}
         {title}
      </StyledLink>
   );
};

export default ButtonLink;
