'use client';
import { useTranslations } from 'next-intl';
import React from 'react';
import Header from '@/components/Header';
import { useSearchParams } from 'next/navigation';

const Catalog = () => {
   // const t = useTranslations('Index');
   const searchParams = useSearchParams();
   const searched = searchParams.get('searched') || '';
   return (
      <>
         <title>🔎Searching games</title>
         <Header />
         <h1>Catalog</h1>
         <p>Search term: {searched}</p>
      </>
   );
};

export default Catalog;
