import { Checkbox } from "../Checkbox/Checkbox";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";
import { FormLabel } from "../FormLabel/FormLabel";
import { HStack } from "../HStack/HStack";
import { FormControlProps } from "../types/FormControlProps";
import { VStack } from "../VStack/VStack";
import { Option } from "../types/Option";
import { FlexboxDirection } from "../types/FlexboxDirection";
import { useId } from "react";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";
import { CheckboxGroup as CheckboxGroupRadix, Flex } from "@radix-ui/themes";







export type CheckboxGroupOption = Option & {isDisabled?: boolean};

export type CheckboxGroupProps = {
    options: CheckboxGroupOption[];
    direction?: FlexboxDirection;
} & FormControlProps<string[] | null>;


export const CheckboxGroup = (props: CheckboxGroupProps) => {
    const id = useId();

    const formItemId = `${id}-form-item`;
    const formDescriptionId = `${id}-form-item-description`;
    const formMessageId = `${id}-form-item-message`;
    const isInvalid = props.isInvalid ?? !!props.errorMessage;

    return (
        <VStack>
              <FormLabel
            formItemId={formItemId}
            isInvalid={isInvalid}
            label={props.label}
          />
          <CheckboxGroupRadix.Root >
            <Flex direction={props.direction ?? 'row'} gap={'2'}>
            {props.options.map(({label, value, isDisabled}) => (
                  <CheckboxGroupRadix.Item value={value} disabled={isDisabled}>
                    {label}
                  </CheckboxGroupRadix.Item>
                ))}
            </Flex>
          </CheckboxGroupRadix.Root>
          <FormDescriptionMessage
        formItemId={formItemId}
        descriptionMessage={props.errorMessage}
      />
      <FormErrorMessage
        formItemId={formItemId}
        errorMessage={props.errorMessage}
      />
        </VStack>
    );
}