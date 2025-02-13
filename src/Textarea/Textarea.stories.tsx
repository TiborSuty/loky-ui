import { StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";


const meta = {
    title: "Textarea",
    component: Textarea,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Test: Story = {
    // @ts-ignore
    args: {},
}
