import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";

import "./globals.css";

const displayFont = Space_Grotesk({
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
