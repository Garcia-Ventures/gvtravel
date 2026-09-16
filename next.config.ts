import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  env: {
    NEXT_PUBLIC_CF_PAGES_BRANCH: process.env.CF_PAGES_BRANCH || process.env.NEXT_PUBLIC_CF_PAGES_BRANCH || '',
    NEXT_PUBLIC_CF_PAGES_COMMIT_SHA:
      process.env.CF_PAGES_COMMIT_SHA || process.env.NEXT_PUBLIC_CF_PAGES_COMMIT_SHA || '',
    NEXT_PUBLIC_CF_PAGES_URL: process.env.CF_PAGES_URL || process.env.NEXT_PUBLIC_CF_PAGES_URL || '',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Transpile the design system package for Next.js compatibility
  transpilePackages: ['@gv-tech/ui-web'],
};

export default nextConfig;
