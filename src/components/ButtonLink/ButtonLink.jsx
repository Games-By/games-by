'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ButtonLinkStyles } from './ButtonLinkStyles';

export default function ButtonLink({
   title,
   url,
   icon,
   currentColor,
   textTransform,
   className
}) {
   const pathname = usePathname();
   return (
      <>
         <ButtonLinkStyles
            style={{ textTransform: textTransform }}
            color={currentColor}
            className={className}
         >
            <Link href={url} locale={pathname}>
               {icon && icon}
               {title}
            </Link>
         </ButtonLinkStyles>
      </>
   );
}
