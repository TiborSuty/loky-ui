import { StoryObj } from "@storybook/react";
import { FormErrorMessage } from "./FormErrorMessage";

const meta = {
  title: "FormErrorMessage",
  component: FormErrorMessage,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {},
};
