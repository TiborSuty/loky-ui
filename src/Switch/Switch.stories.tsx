import { StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { VStack } from "../VStack/VStack";

const meta = {
  title: "Switch",
  component: Switch,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default = {
  args: {
    label: "Switch",
  },
};

export const Disabled = {
  args: {
    label: "Switch",
    isDisabled: true,
  },
};

export const WithErrorMessage = {
  args: {
    label: "Switch",
    errorMessage: "Error message",
  },
};
