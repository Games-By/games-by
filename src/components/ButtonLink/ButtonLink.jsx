'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ButtonLinkContainer, StyledLink } from './ButtonLinkStyles';
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
      <ButtonLinkContainer className='button'>
         <StyledLink
            style={{ textTransform: textTransform }}
            currentcolor={currentColor}
            className={className}
            bgcolor={bgColor}
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
