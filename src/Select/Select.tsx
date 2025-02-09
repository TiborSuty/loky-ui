import React, { useId } from "react";
import styles from "./select.module.css";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { VStack } from "../VStack/VStack";
import { FormControlProps } from "../types/FormControlProps";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";
import { Option } from "../types/Option";
import {
  Select,
} from "@radix-ui/themes";

export type SelectProps = {
  options: Option[];
} & FormControlProps<string | undefined>;

export const SelectField = (props: SelectProps) => {
  const id = useId();

  const formItemId = `${id}-form-item`;
  const formDescriptionId = `${id}-form-item-description`;
  const formMessageId = `${id}-form-item-message`;
  const isInvalid = props.isInvalid ?? !!props.errorMessage;

  return (
    <VStack gap={2}>
      <FormLabel
        formItemId={formItemId}
        isInvalid={isInvalid}
        label={props.label}
      />
      <Select.Root
        value={props.value}
        onValueChange={props.onChange}
        disabled={props.isDisabled}
        required={props.isRequired}
      >
      	<Select.Trigger />
        <Select.Content>
            {props.options.map((option) => (
              <Select.Item key={option.value} value={option.value}>
                {option.label}
              </Select.Item>
            ))}
        </Select.Content>
      </Select.Root>
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
