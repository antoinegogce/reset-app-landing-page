import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RESET — Reprends le contrôle",
  description:
    "RESET t’aide à reprendre le contrôle avec Smart Lock (blocage total, quota, plages horaires), déverrouillage NFC en sessions, statistiques, et motivation via QR/duels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
