import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? "/reset-app-landing-page" : "",
  assetPrefix: isProd ? "/reset-app-landing-page/" : "",
};

export default nextConfig;
