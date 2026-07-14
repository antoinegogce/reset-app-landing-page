import type { NextConfig } from "next";
// import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  output: "standalone",
  // Images are optimized by Vercel automatically
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;

// --- Sentry wrapper temporarily disabled ---
// export default withSentryConfig(nextConfig, {
//   org: process.env.SENTRY_ORG,
//   project: process.env.SENTRY_PROJECT,
//
//   authToken: process.env.SENTRY_AUTH_TOKEN,
//
//   // Upload wider set of client source files for better stack traces
//   widenClientFileUpload: true,
//
//   // Tunnel to bypass ad-blockers
//   tunnelRoute: "/monitoring",
//
//   // Silent outside CI
//   silent: !process.env.CI,
// });

