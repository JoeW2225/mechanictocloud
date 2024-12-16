import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
  },
  distDir: './out'
};

export default nextConfig;
