import { NextResponse } from "next/server";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

function isValidEmail(input: unknown): input is string {
  if (typeof input !== "string") return false;
  const email = input.trim();
  if (email.length < 3 || email.length > 254) return false;
  // Simple, pragmatic validation (no over-promises)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Rate limiter: 5 requests per minute per IP
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, "1 m"),
  analytics: true,
  prefix: "waitlist",
});

export async function POST(req: Request) {
  try {
    // Rate limiting by IP
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() 
      ?? req.headers.get("x-real-ip") 
      ?? "anonymous";
    
    const { success, remaining } = await ratelimit.limit(ip);
    
    if (!success) {
      return NextResponse.json(
        { ok: false, error: "Trop de requêtes. Réessaie dans une minute." },
        { status: 429, headers: { "X-RateLimit-Remaining": String(remaining) } },
      );
    }

    const body = (await req.json()) as { email?: unknown; website?: unknown };
    
    // Honeypot check - if filled, it's a bot
    if (body.website && typeof body.website === "string" && body.website.length > 0) {
      // Silently accept to not reveal detection
      return NextResponse.json({ ok: true }, { status: 200 });
    }
    
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Email invalide." },
        { status: 400 },
      );
    }

    // Add email to Resend Audience
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.contacts.create({
      email: body.email,
      audienceId: process.env.RESEND_AUDIENCE_ID!,
    });

    if (error) {
      // If contact already exists, consider it a success
      if (error.message?.includes("already exists")) {
        return NextResponse.json({ ok: true }, { status: 200 });
      }
      console.error("Resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Impossible d'enregistrer l'email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }
}


