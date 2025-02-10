import { StoryObj } from "@storybook/react";
import { CheckboxGroup } from "./CheckboxGroup";

const meta = {
    title: "CheckboxGroup",
    component: CheckboxGroup,
  };
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  export const Test: Story = {
    args: {
      options: [
        { label: "Option 1", value: "1" },
        { label: "Option 2", value: "2" },
        { label: "Option 3", value: "3" },
      ],
    },
  };
  