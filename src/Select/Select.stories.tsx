import { StoryObj } from "@storybook/react";
import { SelectField } from "./Select";
import { useState } from "react";

const meta = {
  title: "SelectField",
  component: SelectField,
};

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default: Story = {
  args: {},
  render: () => {
    const [value, setValue] = useState<string | undefined>(undefined);

    return <SelectField value={value} onChange={setValue} options={options} />;
  },
};
