'use client';
import GlobalStyle from '@/Styles/globals';
import { useTranslations } from 'next-intl';
import React from 'react';
import Header from '@/components/Header/Header';
import { usePathname } from 'next/navigation';

const GamePage = () => {
   const t = useTranslations('Index');
   const pathname = usePathname();

   const segments = pathname.split('/');
   const game = segments[segments.length - 1];

   return (
      <>
         <GlobalStyle />
         <Header />
         <h1>GamePage</h1>
         {game && <h2>{decodeURIComponent(game)}</h2>}
      </>
   );
};

export default GamePage;
