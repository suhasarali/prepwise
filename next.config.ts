import type { NextConfig } from "next";
import { types } from "util";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};


export default nextConfig;
