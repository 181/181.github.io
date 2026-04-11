import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '', // Github Pages root
  assetPrefix: '',
  images: {
    unoptimized: true, // images must be unoptimized for static export
  },
};

export default nextConfig;
