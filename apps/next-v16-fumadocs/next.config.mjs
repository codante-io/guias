import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  // App is deployed under /next-v16 path on guias.codante.io
  // Use basePath so all Next assets (/_next/static/*), links and images are correctly prefixed
  basePath: '/next-v16',
  // Keep asset URLs working on static hosts and previews
  // (Next will generate proper paths relative to basePath in export)
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default withMDX(config);
