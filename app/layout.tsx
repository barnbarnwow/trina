import type { Metadata } from "next";
import { Nunito, Playfair_Display } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Trina's Website",
  description: "Your one-stop destination for sexiness.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
