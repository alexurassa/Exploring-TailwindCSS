import type { Metadata } from "next";
import { Playfair_Display_SC, Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-playfair",
});

const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-title",
});

export const metadata: Metadata = {
  title: "Product Card with TailwindCSS",
  description: "A product card using TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${josefin.variable} ${josefin.className} antialiased grid justify-center bg-pale_orange`}
      >
        {children}
      </body>
    </html>
  );
}
