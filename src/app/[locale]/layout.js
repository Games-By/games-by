import React from 'react';
import { getMessages } from 'next-intl/server';
import AppProviders from './providers';
import GlobalStyle from '@/Styles/globals';
import Head from 'next/head';

export default async function LocaleLayout({ children, params: { locale } }) {
   const messages = await getMessages();

   return (
      <html lang={locale}>
         <Head>
            <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link
               rel='preconnect'
               href='https://fonts.gstatic.com'
               crossOrigin='true'
            />
            <link
               href='https://fonts.googleapis.com/css2?family=Reddit+Sans:ital,wght@0,200..900;1,200..900&display=swap'
               rel='stylesheet'
            />
         </Head>
         <body>
            <AppProviders messages={messages}>
               <GlobalStyle />
               {children}
            </AppProviders>
         </body>
      </html>
   );
}
