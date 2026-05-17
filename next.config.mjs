import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
};

export default withMDX(nextConfig);
