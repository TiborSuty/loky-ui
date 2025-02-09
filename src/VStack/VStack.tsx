import React from "react";
import { Flex } from "@radix-ui/themes";

export type VStackProps = {
  children: React.ReactNode;
  gap?: number;
};

export const VStack = (props: VStackProps) => {
  return (
    <Flex direction="column" gap={String(props.gap)}>
      {props.children}
    </Flex>
  );
};
