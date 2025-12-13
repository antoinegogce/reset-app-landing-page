import { NextResponse } from "next/server";

function isValidEmail(input: unknown): input is string {
  if (typeof input !== "string") return false;
  const email = input.trim();
  if (email.length < 3 || email.length > 254) return false;
  // Simple, pragmatic validation (no over-promises)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as { email?: unknown };
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Email invalide." },
        { status: 400 },
      );
    }

    // No storage by design (as requested). This endpoint validates + acknowledges.
    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }
}


