import React, { useId } from "react";
import styles from "./checkbox.module.css";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";
import { FormControlProps } from "../types/FormControlProps";
import { VStack } from "../VStack/VStack";
import { FormDescriptionMessage } from "../FormDescriptionMessage/FormDescriptionMessage";
import { FormErrorMessage } from "../FormErrorMessage/FormErrorMessage";

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
      <div style={{ display: "flex", alignItems: "center" }}>
        <RadixCheckbox.Root
          onCheckedChange={handleChange}
          className={styles.checkbox}
          defaultChecked
          id="c1"
        >
          <RadixCheckbox.Indicator className={styles.indicator}>
            <Check className="h-4 w-4" />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        <label className={styles.Label} htmlFor="c1">
          Accept terms and conditions.
        </label>
      </div>
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
