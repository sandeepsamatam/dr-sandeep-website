import Script from "next/script";
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
    "AIIMS-trained orthopaedic surgeon in Visakhapatnam with advanced training from NIMS Hyderabad and Ganga Hospital, Coimbatore, offering arthroscopy, sports injury care, robotic joint replacement, and paediatric orthopaedics.",
  keywords: [
    "orthopaedic doctor in Visakhapatnam",
    "arthroscopy surgeon in Vizag",
    "sports injury specialist in Vizag",
    "robotic joint replacement in Visakhapatnam",
    "paediatric orthopaedic doctor in Vizag",
    "AIIMS-trained orthopaedic surgeon",
    "Ganga Hospital fellowship orthopaedic doctor"
  ],
  openGraph: {
    title: "Orthopaedic Doctor in Visakhapatnam | Dr. Sandeep Kanugula",
    description:
      "AIIMS-trained orthopaedic surgeon in Visakhapatnam with advanced training from NIMS Hyderabad and Ganga Hospital, Coimbatore, offering arthroscopy, sports injury care, robotic joint replacement, and paediatric orthopaedics.",
    type: "website",
    locale: "en_IN",
    siteName: doctor.name
  },
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: "/images/doctor/dr-sandeep-kanugula-orthopaedic-doctor.webp"
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

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T67LB945ZK"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-T67LB945ZK');
          `}
        </Script>

      </body>
    </html>
  );
}