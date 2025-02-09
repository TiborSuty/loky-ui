import { StoryObj } from "@storybook/react";
import { FormLabel } from "./FormLabel";

const meta = {
  title: "Label",
  component: FormLabel,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {},
};
