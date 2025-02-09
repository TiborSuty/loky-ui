import { Preview } from "@storybook/react";
import { Theme } from "@radix-ui/themes";
import React from "react";

import "@radix-ui/themes/styles.css";

const preview: Preview = {
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story, { parameters }) => {
      return (
        <Theme accentColor="blue">
          <Story />
        </Theme>
      );
    },
  ],
};

export default preview;
