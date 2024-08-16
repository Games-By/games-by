'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ButtonLinkContainer, StyledLink } from './ButtonLinkStyles';
import { locales } from '../Languages/LanguageSwitcher';

const ButtonLink = ({
   title,
   url,
   icon,
   textTransform,
   className,
   Aboutblank,
   action,
}) => {
   const pathname = usePathname();
   const locale =
      locales.find((locale) => pathname.includes(locale.code))?.code || 'en';
   return (
      <ButtonLinkContainer className='button' onClick={action}>
         <StyledLink
            style={{ textTransform: textTransform }}
            className={className}
            href={!url.includes('https' || 'www') ? `${locale}${url}` : url}
            locale={pathname}
            target={Aboutblank ? '_blank' : ''}
         >
            {icon && icon}
            {title}
         </StyledLink>
      </ButtonLinkContainer>
   );
};

export default ButtonLink;
