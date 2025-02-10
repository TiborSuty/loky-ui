import { Flex } from "@radix-ui/themes";

export type HStackProps = {
  children: React.ReactNode;
  gap?: number;
};

export const HStack = (props: HStackProps) => {
  return (
    <Flex direction="row" gap={String(props.gap)}>
        {props.children}
    </Flex>
  );
};

