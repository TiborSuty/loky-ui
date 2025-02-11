import React, { ChangeEvent, useId } from "react";
import { TextField as RadixTextField } from "@radix-ui/themes";
import { FormControlProps } from "../types/FormControlProps";
import { VStack } from "../VStack/VStack";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";
import { FormLabel } from "../FormLabel/FormLabel";

export type TextFieldProps = {} & FormControlProps<string | null>;

export const TextField = (props: TextFieldProps) => {
  const id = useId();

  const formItemId = `${id}-form-item`;
  const formDescriptionId = `${id}-form-item-description`;
  const formMessageId = `${id}-form-item-message`;
  const isInvalid = props.isInvalid ?? !!props.errorMessage;


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange?.(event.target.value, event);
  };

  return (
    <VStack>
      <FormLabel
        formItemId={formItemId}
        isInvalid={isInvalid}
        label={props.label}
      />
      <RadixTextField.Root
        id={id}
        value={props.value ?? undefined}
        onChange={handleChange}
        size="1"
        placeholder="Search the docs…"
        aria-describedby={
          !props.isInvalid
            ? `${formDescriptionId}`
            : `${formDescriptionId} ${formMessageId}`
        }
      />
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
