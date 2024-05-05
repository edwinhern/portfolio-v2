import million from 'million/compiler';

/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    removeConsole: {
      exclude: ['error', 'info'],
    },
  },
  experimental: {
    optimizePackageImports: ['framer-motion'],
    webVitalsAttribution: ['FCP', 'LCP', 'CLS', 'FID', 'TTFB', 'INP'],
  },
  images: {
    deviceSizes: [390, 435, 768, 1024, 1280],
    formats: ['image/avif'],
    remotePatterns: [{ hostname: 'cdn.discordapp.com' }],
  },
  reactStrictMode: true,
  trailingSlash: false,
};

const millionConfig = {
  auto: { rsc: true },
  rsc: true,
  server: true,
};

export default million.next(nextConfig, millionConfig);
