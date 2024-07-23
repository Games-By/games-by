import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
   // A list of all locales that are supported
   locales: ['en-US', 'pt-BR', 'es-ES'],

   // Used when no locale matches
   defaultLocale: 'en',
});

export const config = {
   // Match only internationalized pathnames
   matcher: ['/', '/(en-US|pt-BR|es-ES)/:path*'],
};
