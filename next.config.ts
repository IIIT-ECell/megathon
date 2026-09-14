import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export: `next build` emits a self-contained `out/` directory.
  // Set Cloudflare Pages' build output directory to `out`.
  output: "export",

  images: {
    // The default loader needs a running image optimizer, which a static
    // export has no server for. Files in /public are served as-is.
    unoptimized: true,
  },

  turbopack: {
    // Pin the workspace root. Without this, Turbopack infers it from the
    // nearest lockfile and can pick up a stray package-lock.json in a parent
    // directory.
    root: import.meta.dirname,
  },
};

export default nextConfig;
