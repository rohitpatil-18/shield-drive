import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ShieldDrive | Compare Auto Insurance Quotes",
    template: "%s | ShieldDrive",
  },

  description:
    "Compare personalized auto insurance quotes from trusted providers in under 2 minutes. Fast, secure, and completely free.",

  keywords: [
    "car insurance",
    "auto insurance",
    "insurance quotes",
    "compare insurance",
    "vehicle insurance",
    "ShieldDrive",
  ],

  authors: [
    {
      name: "ShieldDrive",
    },
  ],

  creator: "ShieldDrive",

  applicationName: "ShieldDrive",

  metadataBase: new URL("http://localhost:3000"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "ShieldDrive | Compare Auto Insurance Quotes",

    description:
      "Compare personalized auto insurance quotes from trusted providers in under 2 minutes.",

    url: "http://localhost:3000",

    siteName: "ShieldDrive",

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "ShieldDrive | Compare Auto Insurance Quotes",

    description:
      "Compare personalized auto insurance quotes from trusted providers in minutes.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
