/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   eslint: {
      ignoreDuringBuilds: true,
   },
   images: {
      domains: ['media.licdn.com', 'www.google.com', 'github.com', 'abrudz.github.io', 'cdn.icon-icons.com', 'static-00.iconduck.com','raw.githubusercontent.com', 'w7.pngwing.com'],
   },
   i18n: {
      locales: ['en', 'pt', 'es'],
      defaultLocale: 'pt',
   },
};

module.exports = nextConfig;
