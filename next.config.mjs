import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import createNextIntlPlugin from "next-intl/plugin";


const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      ...(process.env.R2_PUBLIC_URL
        ? [
          {
            hostname: process.env.R2_PUBLIC_URL.replace("https://", ""),
          },
        ]
        : []),
    ],
  },
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? {
          exclude: ["error"],
        }
        : false,
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default withNextIntl(nextConfig);
