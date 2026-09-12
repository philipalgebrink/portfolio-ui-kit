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
    (story, context) => ({
      components: { story: story() },
      setup() {
        // Full-bleed background only in standalone story view; on a Docs
        // page, stories are embedded inline and must size to their content
        // — min-height: 100vh there blows the preview up to a full screen
        // of empty background past the actual component.
        return { isDocs: context.viewMode === "docs" };
      },
      template: `
        <div :style="{ padding: '2rem', minHeight: isDocs ? 'auto' : '100vh', boxSizing: 'border-box', background: 'var(--background-gradient)', fontFamily: 'var(--font-sans)', color: 'var(--text-color)' }">
          <story />
        </div>
      `,
    }),
  ],
};

export default preview;
