import { StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";


const meta = {
    title: "TextInput",
    component: TextInput,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Test: Story = {
    args: {},
}
