import { StoryObj } from "@storybook/react";
import { Radio } from "./Radio";
import { useState } from "react";

const meta = {
  title: "Radio",
  component: Radio,
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Test: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);

    return <Radio value={value} onChange={setValue} options={options} />;
  }
};
