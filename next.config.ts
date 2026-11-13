import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Storybook збирається в public/storybook (скрипт build-storybook).
  // Next не відкриває index.html з теки сам, а Storybook посилається на свої файли
  // відносними шляхами, тож /storybook ведемо на повну адресу index.html.
  async redirects() {
    return [{ source: "/storybook", destination: "/storybook/index.html", permanent: false }];
  },
};

export default nextConfig;
