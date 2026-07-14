import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import { Resend } from "resend";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import prisma from "@/lib/db";
import { waitlistConfirmationEmail } from "@/lib/emails/waitlist-confirmation";

function isValidEmail(input: unknown): input is string {
  if (typeof input !== "string") return false;
  const email = input.trim();
  if (email.length < 3 || email.length > 254) return false;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
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
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Waitlist error: RESEND_API_KEY is not configured");
      return NextResponse.json(
        { ok: false, error: "Impossible d'enregistrer l'email." },
        { status: 500 },
      );
    }

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

    if (body.website && typeof body.website === "string" && body.website.length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { ok: false, error: "Email invalide." },
        { status: 400 },
      );
    }

    const email = normalizeEmail(body.email);
    const resend = new Resend(apiKey);

    let entry: { id: string };

    try {
      entry = await prisma.waitlistEntry.create({
        data: { email },
        select: { id: true },
      });
    } catch (err) {
      if (
        err instanceof Prisma.PrismaClientKnownRequestError
        && err.code === "P2002"
      ) {
        return NextResponse.json({ ok: true }, { status: 200 });
      }
      throw err;
    }

    const { error: contactError } = await resend.contacts.create({ email });

    if (
      contactError
      && !contactError.message?.includes("already exists")
    ) {
      console.error("Resend contact error:", contactError);
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL;
    if (!fromEmail) {
      console.warn("Waitlist warning: RESEND_FROM_EMAIL is not configured, skipping confirmation email");
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const { subject, text, html } = waitlistConfirmationEmail();
    const { error: emailError } = await resend.emails.send({
      from: fromEmail,
      to: email,
      replyTo: process.env.RESEND_REPLY_TO ?? "appreset@proton.me",
      subject,
      text,
      html,
    });

    if (emailError) {
      console.error("Resend email error:", emailError);
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    await prisma.waitlistEntry.update({
      where: { id: entry.id },
      data: { confirmationSentAt: new Date() },
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json(
      { ok: false, error: "Requête invalide." },
      { status: 400 },
    );
  }
}