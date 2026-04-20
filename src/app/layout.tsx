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
  title: "Orthopaedic Doctor in Visakhapatnam | Dr. Sandeep Kanugula",
  description:
    "AIIMS-trained orthopaedic specialist in Visakhapatnam offering fracture care, spine treatment, joint replacement, and sports injury care.",
  keywords: [
    "Orthopaedic doctor in Visakhapatnam",
    "Orthopaedic doctor in Vizag",
    "Orthopaedic surgeon",
    "Joint pain treatment",
    "Fracture treatment",
    "Sports injury treatment",
    "Spine treatment in Visakhapatnam",
    "Joint replacement in Vizag"
  ],
  openGraph: {
    title: "Orthopaedic Doctor in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "AIIMS-trained orthopaedic specialist in Visakhapatnam offering fracture care, spine treatment, joint replacement, and sports injury care.",
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
