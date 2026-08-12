import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

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
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container site-header__inner">
            <a className="brand" href="/">
              FM <span>previews</span>
            </a>
            <span className="pill">internal · noindex</span>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
