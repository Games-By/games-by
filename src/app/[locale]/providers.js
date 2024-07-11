import React from 'react';
import { NextIntlClientProvider } from 'next-intl';
import StyledComponentsRegistry from '@/lib/registry';
import { CartProvider } from '@/contexts/CartContext';

export default function AppProviders({ children, messages }) {
   return (
      <NextIntlClientProvider messages={messages}>
         <StyledComponentsRegistry>
            <CartProvider>{children}</CartProvider>
         </StyledComponentsRegistry>
      </NextIntlClientProvider>
   );
}
