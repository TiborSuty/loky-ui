import { StoryObj } from "@storybook/react";
import { FormDescriptionMessage } from "./FormDescriptionMessage";

const meta = {
  title: "FormDescriptionMessage",
  component: FormDescriptionMessage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    descriptionMessage: "This is a description message",
  },
};
