import { StoryObj } from "@storybook/react";
import { Label } from "./Label";

const meta = {
  title: "Label",
  component: Label,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {},
};
