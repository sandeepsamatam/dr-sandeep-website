import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { doctor } from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"]
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com"),
  title: "Best Orthopaedic Doctor in Visakhapatnam",
  description:
    "Dr. Sandeep Kanugula offers advanced orthopaedic care in Visakhapatnam for fractures, joint pain, sports injuries, arthritis, and spine conditions.",
  keywords: [
    "Orthopaedic doctor in Visakhapatnam",
    "Orthopaedic surgeon",
    "Joint pain treatment",
    "Fracture treatment",
    "Sports injury treatment"
  ],
  openGraph: {
    title: "Best Orthopaedic Doctor in Visakhapatnam",
    description:
      "Advanced orthopaedic care for pain-free living with personalized treatment and recovery support.",
    type: "website",
    locale: "en_IN",
    siteName: doctor.name
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${cormorant.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
