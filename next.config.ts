import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/as-realestate",
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: "inline",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
