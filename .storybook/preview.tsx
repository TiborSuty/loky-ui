import type { Preview } from "@storybook/react";
import "../src/style.css";
import "@radix-ui/themes/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
