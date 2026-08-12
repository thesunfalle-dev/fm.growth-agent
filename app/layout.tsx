import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Lato } from "next/font/google";
import { SiteHeader } from "@/components/ui/SiteHeader";
import "./globals.css";

const lato = Lato({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "700"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "FM Landings",
    template: "%s · FM Landings",
  },
  description: "Internal Fusion Markets landing previews",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={lato.variable}>
      <body className={lato.className}>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
