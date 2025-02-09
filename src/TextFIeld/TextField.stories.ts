import { TextField } from "./TextField";
import { StoryObj } from "@storybook/react";

const meta = {
  title: "TextField",
  component: TextField,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};
