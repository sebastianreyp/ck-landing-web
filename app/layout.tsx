import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";

import "./globals.css";

const displayFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Capital Kitchen | Cocinas ocultas para marcas gastronómicas",
  description:
    "Capital Kitchen desarrolla infraestructura y operación para marcas gastronómicas que buscan alquilar, integrarse o crecer dentro de un modelo de cocinas ocultas.",
  icons: {
    icon: "/logo_ck.png",
    apple: "/logo_ck.png",
  },
  openGraph: {
    title: "Capital Kitchen | Cocinas ocultas para marcas gastronómicas",
    description:
      "Capital Kitchen desarrolla infraestructura y operación para marcas gastronómicas que buscan alquilar, integrarse o crecer dentro de un modelo de cocinas ocultas.",
    url: "https://www.capital-kitchen.com",
    siteName: "Capital Kitchen",
    images: [
      {
        url: "/logo_ck.png",
        width: 512,
        height: 512,
        alt: "Capital Kitchen Logo",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Capital Kitchen | Cocinas ocultas para marcas gastronómicas",
    description:
      "Capital Kitchen desarrolla infraestructura y operación para marcas gastronómicas que buscan alquilar, integrarse o crecer dentro de un modelo de cocinas ocultas.",
    images: ["/logo_ck.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body className="font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
