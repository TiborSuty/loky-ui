import React from "react";
import * as Select from "@radix-ui/react-select";

export interface SelectdProps {}

/** Primary UI component for user interaction */
export const SelectField = (props: SelectdProps) => {
    return (
        <Select.Root>
            <Select.Trigger>
                <Select.Value />
        <Select.Icon />
        </Select.Trigger>

        <Select.Portal>
        <Select.Content>
            <Select.ScrollUpButton />
        <Select.Viewport>
            <Select.Item>
                <Select.ItemText />
        <Select.ItemIndicator />
        </Select.Item>

        <Select.Group>
        <Select.Label />
        <Select.Item>
            <Select.ItemText />
        <Select.ItemIndicator />
        </Select.Item>
        </Select.Group>

        <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
        <Select.Arrow />
        </Select.Content>
        </Select.Portal>
        </Select.Root>
    );
};
