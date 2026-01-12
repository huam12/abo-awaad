import type React from "react";
import type { Metadata } from "next";
import { Noto_Sans_Arabic, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const notoClassic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "أبو عواد للنجارة والديكورات الفاخرة",
  description:
    "شركة أبو عواد المتخصصة في أرقى أعمال النجارة والديكورات الخشبية والأثاث المخصص في المملكة العربية السعودية.",
  generator: "v0.app",
  verification: {
    google: "zNdyjGeIHHooq_m6i6FfDNXwJfc77hZz5J8rX0oM8T4",
  },

  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/hammer.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${notoClassic.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
