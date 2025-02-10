import React, { useId } from "react";
import styles from "./checkbox.module.css";
import { Checkbox as RadiCheckbox} from "@radix-ui/themes";
import { Check } from "lucide-react";
import { FormControlProps } from "../types/FormControlProps";
import { VStack } from "../VStack/VStack";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";
import { HStack } from "../HStack/HStack";
import { FormLabel } from "../FormLabel/FormLabel";

export type CheckboxProps = {} & FormControlProps<boolean>;

export const Checkbox = (props: CheckboxProps) => {
  const id = useId();

  const formItemId = `${id}-form-item`;
  const formDescriptionId = `${id}-form-item-description`;
  const formMessageId = `${id}-form-item-message`;
  const isInvalid = props.isInvalid ?? !!props.errorMessage;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked);
    props.onChange(event.target.checked);
  };

  return (
    <VStack>
      <HStack gap={2}>
        <RadiCheckbox defaultChecked />
        <FormLabel
            formItemId={formItemId}
            isInvalid={isInvalid}
            label={props.label}
          />
      </HStack>
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
