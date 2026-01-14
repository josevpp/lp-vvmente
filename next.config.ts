import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    formats: ["image/webp"],
    deviceSizes: [320, 640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [8, 16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [75, 85],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
};

export default nextConfig;
