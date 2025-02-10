import React, { useId } from "react";

import styles from "./radio.module.css";
import { RadioGroup } from "@radix-ui/themes";
import { VStack } from "../VStack/VStack";
import { FormControlProps } from "../types/FormControlProps";
import { FormLabel } from "../FormLabel/FormLabel";
import { Flex } from "@radix-ui/themes";
import { Option } from "../types/Option";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";
import { FlexboxDirection } from "../types/FlexboxDirection";


export type RadioOption = Option & {isDisabled?: boolean};

export type RadioProps = {
  options: RadioOption[];
  direction?: FlexboxDirection;
  gap?: number;
} & FormControlProps<string | undefined>;

export const Radio = (props: RadioProps) => { 
  const id = useId();

  const isInvalid = props.isInvalid ?? !!props.errorMessage;

  const formItemId = `${id}-form-item`;
  return (
    <VStack gap={2}>
        <FormLabel
                formItemId={formItemId}
                isInvalid={isInvalid}
                label={props.label}
              />
              <RadioGroup.Root defaultValue="1" name="example">
                    <Flex
                direction={props.direction ?? 'row'}
                gap={'2'}
              >
                {props.options.map(({label, value, isDisabled}) => (
                  <RadioGroup.Item value={value} disabled={isDisabled}>
                    {label}
                  </RadioGroup.Item>
                ))}
              </Flex>
          </RadioGroup.Root>
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
};
