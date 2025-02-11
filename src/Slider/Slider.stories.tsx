import { StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { useState } from "react";

const meta = {
    title: "Slider",
    component: Slider,
}

export default meta;

type Story = StoryObj<typeof meta>;

export const Test: Story = {
    args: {},
    render: (args) => {
        const [value, setValue] = useState<number[] | null>([10, 30]);

        return <Slider value={value} onChange={setValue} />
    }
}
