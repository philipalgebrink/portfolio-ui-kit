import type { Preview } from "@storybook/vue3-vite";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/tokens.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      test: "todo",
    },
  },

  decorators: [
    // Applies data-theme to <html> in the preview iframe and reliably
    // re-renders on toolbar change (unlike a hand-rolled globalTypes
    // decorator, which didn't re-render live in this Storybook version).
    withThemeByDataAttribute({
      themes: { light: "light", dark: "dark" },
      defaultTheme: "light",
      attributeName: "data-theme",
    }),
    (story) => ({
      components: { story: story() },
      template: `
        <div style="padding: 2rem; min-height: 100vh; box-sizing: border-box; background: var(--background-gradient); font-family: var(--font-sans); color: var(--text-color);">
          <story />
        </div>
      `,
    }),
  ],
};

export default preview;
