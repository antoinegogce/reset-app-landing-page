import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/reset-app-landing-page",
  assetPrefix: "/reset-app-landing-page/",
};

export default nextConfig;
