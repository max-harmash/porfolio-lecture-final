import type { StorybookConfig } from "@storybook/nextjs-vite";
import tailwindcss from "@tailwindcss/vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/nextjs-vite",
  // staticDirs: ['../public'] навмисно немає: Storybook збирається в public/storybook,
  // і з цим рядком збірка падає з ERR_FS_CP_EINVAL.
  core: { disableTelemetry: true },
  // Сайт підключає Tailwind через Turbopack, а Storybook працює на Vite: тут свій плагін.
  viteFinal: async (viteConfig) => {
    viteConfig.plugins = [...(viteConfig.plugins ?? []), tailwindcss()];
    return viteConfig;
  },
};

export default config;
