// src/AppProviders.js
'use client';
import React from 'react';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import StyledComponentsRegistry from '@/lib/registry';
import { CartProvider } from '@/contexts/CartContext';
import { AuthProvider } from '@/contexts/AuthContext';

export default function AppProviders({ children, messages }) {
   const locale = useLocale();

   return (
      <AuthProvider>
         <NextIntlClientProvider locale={locale} messages={messages}>
            <StyledComponentsRegistry>
               <CartProvider>{children}</CartProvider>
            </StyledComponentsRegistry>
         </NextIntlClientProvider>
      </AuthProvider>
   );
}
