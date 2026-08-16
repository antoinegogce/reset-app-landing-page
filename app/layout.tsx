import type { Metadata } from "next";
import { Poppins, Space_Mono } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "@/app/providers/PostHogProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.getresetapp.com"),
  title: {
    default: "RESET — Reprends le contrôle",
    template: "%s — RESET",
  },
  description:
    "RESET t'aide à reprendre le contrôle : Smart Lock (blocage total, quota, plages horaires), pause volontaire pour déverrouiller, et gamification (XP, streaks, défis entre amis) pour tenir tes bonnes habitudes.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "limiter le temps sur les apps",
    "bloquer les applications Android",
    "contrôle du temps d'écran",
    "pause volontaire",
    "gamification habitudes",
    "défis entre amis",
    "anti distraction",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.getresetapp.com",
    siteName: "RESET",
    title: "RESET — Reprends le contrôle",
    description:
      "Blocage intelligent des apps + pause volontaire + gamification (XP, streaks, défis) pour tenir tes bonnes habitudes. Android uniquement.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "RESET — Reprends le contrôle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RESET — Reprends le contrôle",
    description:
      "Blocage intelligent des apps + pause volontaire + gamification pour tenir tes bonnes habitudes. Android uniquement.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${poppins.variable} ${spaceMono.variable}`}>
      <body className="antialiased">
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}

