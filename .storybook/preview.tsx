import type { Preview } from "@storybook/nextjs-vite";
import { fontVariables } from "../src/app/fonts";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    // Фон історій — колір сторінки сайту (paper задано в globals.css для body).
    backgrounds: { disable: true },
    a11y: { test: "todo" },
  },
  // Шрифти next/font працюють через класи зі змінними: додаємо їх навколо кожної історії.
  decorators: [
    (Story) => (
      <div className={`${fontVariables} font-sans text-ink`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
