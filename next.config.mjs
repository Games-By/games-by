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
         'image.api.playstation.com',
      ],
   },
   compiler: {
      styledComponents: true,
   },
};
export default withNextIntl(nextConfig);
