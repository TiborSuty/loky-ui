import { StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "Checkbox",
  component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {
    label: "Accept terms and conditions.",
  },
};
