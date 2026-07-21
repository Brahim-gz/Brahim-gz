import type { Metadata, Viewport } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://brahim-gz.me";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Brahim Gourgaiz",
  description:
    "Brahim Gourgaiz - AI & Computer Engineering student. Portfolio in progress.",
  openGraph: {
    title: "Brahim Gourgaiz",
    description:
      "Brahim Gourgaiz - AI & Computer Engineering student. Portfolio in progress.",
    url: siteUrl,
    siteName: "Brahim Gourgaiz",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0d",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrainsMono.variable} h-full`}>
      <body className="bg-background text-foreground h-full antialiased">{children}</body>
    </html>
  );
}
