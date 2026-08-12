import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export → drop `out/` on Cloudflare Pages
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
