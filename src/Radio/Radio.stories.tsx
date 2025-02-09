import { StoryObj } from "@storybook/react";
import { Radio } from "./Radio";

const meta = {
  title: "Radio",
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Test: Story = {
  args: {},
};
