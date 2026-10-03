import type { NextConfig } from "next";

const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "img.youtube.com" }],
    unoptimized: isGithubPagesBuild,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: "",
  },
  ...(isGithubPagesBuild
    ? {
        output: "export" as const,
        trailingSlash: true,
      }
    : {
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "X-Content-Type-Options", value: "nosniff" },
                {
                  key: "Referrer-Policy",
                  value: "strict-origin-when-cross-origin",
                },
              ],
            },
          ];
        },
      }),
};

export default nextConfig;
