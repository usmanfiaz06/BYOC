import type { NextConfig } from "next";

// STATIC_EXPORT=1 builds a static copy into ./out (used for shareable previews).
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig: NextConfig = isExport
  ? { output: "export", images: { unoptimized: true } }
  : {};

export default nextConfig;
