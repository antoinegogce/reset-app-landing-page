export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    await import("./sentry.server.config");
  }

  if (process.env.NEXT_RUNTIME === "edge") {
    await import("./sentry.edge.config");
  }
}

// Capture all unhandled server-side request errors
// Requires @sentry/nextjs >= 8.28.0
import * as Sentry from "@sentry/nextjs";
export const onRequestError = Sentry.captureRequestError;
