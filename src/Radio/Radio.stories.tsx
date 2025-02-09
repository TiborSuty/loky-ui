import { StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta = {
  title: "Switch",
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {},
};
