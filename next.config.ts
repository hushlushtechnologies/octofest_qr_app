import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Our SVGs are local, trusted placeholder/brand assets (logos,
    // gallery placeholders) — safe to allow next/image to optimize
    // them. Never enable this for user-uploaded SVGs.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
  },
};

export default nextConfig;
