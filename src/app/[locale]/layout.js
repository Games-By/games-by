import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import React from 'react';

export default async function LocaleLayout({ children, params: { locale } }) {
   const messages = await getMessages();

   return (
      <html lang={locale}>
         <body>
            <NextIntlClientProvider messages={messages}>
               {children}
            </NextIntlClientProvider>
         </body>
      </html>
   );
}
