import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans, Roboto } from "next/font/google";
import { SiteFooter } from "@/components/ui/SiteFooter";
import { SiteHeader } from "@/components/ui/SiteHeader";
import "./globals.css";

// Design system fonts only (Website Redesign Typography frame).
const notoSans = Noto_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
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
    <html lang="en" className={`${notoSans.variable} ${roboto.variable}`}>
      <body className={roboto.className}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
