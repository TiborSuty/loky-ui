import type { Meta, StoryObj } from "@storybook/react";
import { VStack } from "../VStack/VStack";

import { Button } from "./Button";
import { ArrowBigUp } from "lucide-react";

const meta = {
  title: "Button",
  component: Button,
  args: {
    title: "Button",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => {
    return (
      <VStack gap={4}>
        <Button title="Classic" variant="classic" />
        <Button title="Solid" variant="solid" />
        <Button title="soft" variant="soft" />
        <Button title="surface" variant="surface" />
        <Button title="outline" variant="outline" />
        <Button title="ghost" variant="ghost" />
        <Button title="danger" variant="danger" />
        <Button title="primary" variant="primary" />
        <Button title="secondary" variant="secondary" />
      </VStack>
    );
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};

export const Sizes: Story = {
  render: () => {
    return (
      <VStack gap={4}>
        <Button title="1" size="1" />
        <Button title="2" size="2" />
        <Button title="3" size="3" />
        <Button title="4" size="4" />
      </VStack>
    );
  },
};

export const Radius: Story = {
  render: () => {
    return (
      <VStack gap={4}>
        <Button title="none" radius="none" />
        <Button title="small" radius="small" />
        <Button title="medium" radius="medium" />
        <Button title="large" radius="large" />
        <Button title="full" radius="full" />
      </VStack>
    );
  },
};

export const Icons: Story = {
  render: () => {
    return (
      <VStack gap={4}>
        <Button title="none" icon={ArrowBigUp} />
      </VStack>
    );
  },
};
