import { NextResponse } from "next/server";
import { Resend } from "resend";

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


