import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: process.env.NODE_ENV === 'development' ? 'default' : 'custom',
    //^^ if in dev, aka npm run dev use default, otherwise in production (CF,S3 etc) use custom
    loaderFile: './image-loader.ts',
  },
  distDir: './out'
};

export default nextConfig;
