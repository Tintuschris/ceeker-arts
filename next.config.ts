import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  // Allow Sanity Studio to serve from /studio
  experimental: {
    // Increase body size limit for Sanity Studio uploads
  },
};

export default nextConfig;
