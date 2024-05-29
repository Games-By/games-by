import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   eslint: {
      ignoreDuringBuilds: true,
   },
   images: {
      domains: [
         'media.licdn.com',
         'www.google.com',
         'github.com',
         'abrudz.github.io',
         'cdn.icon-icons.com',
         'static-00.iconduck.com',
         'raw.githubusercontent.com',
         'w7.pngwing.com',
      ],
   },
};
export default withNextIntl(nextConfig);
