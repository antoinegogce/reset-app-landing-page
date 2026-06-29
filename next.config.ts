import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Images are optimized by Vercel automatically
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
